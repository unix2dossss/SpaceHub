import { Title, SimpleGrid, Text, Button, ThemeIcon, Grid, rem } from '@mantine/core';
import { useScrollIntoView } from '@mantine/hooks';
import { IconCampfire, IconPlanet, IconPresentation, IconTelescope } from '@tabler/icons-react';
import classes from './EventsIntroSection.module.css';

const features = [
    {
        icon: IconCampfire,
        title: 'Stargazing Camping Trips',
        description: 'Experience the awe-inspiring beauty of the night sky on our stargazing camping trips. Immerse yourself in the wonders of the cosmos while camping under starlit skies.',
    },
    {
        icon: IconTelescope,
        title: 'Weekly Telescope Nights',
        description: 'Join us for weekly telescope nights dedicated to exploring celestial objects. Discover planets, stars, and nebulae through powerful telescopes.',
    },
    {
        icon: IconPresentation,
        title: 'Industry Guest Speakers and Events',
        description:
            'Engage with industry leaders and experts in our series of guest speaker events. Explore cutting-edge developments in space science, technology, and exploration firsthand.',
    },
    {
        icon: IconPlanet,
        title: 'Space-themed Movie/Sudy Sessions',
        description:
            'Enjoy our space-themed movie sessions to unwind with snacks and simply enjoy the film, or use the time productively by catching up on university assignments while watching.',
    },
];

function EventsIntroSection() {
    const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
        offset: 60,
    });

    const items = features.map((feature) => (
        <div key={feature.title}>
            <ThemeIcon
                size={44}
                radius="md"
                variant="gradient"
                gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
            >
                <feature.icon style={{ width: rem(26), height: rem(26) }} stroke={1.5} />
            </ThemeIcon>
            <Text fz="lg" mt="sm" fw={500}>
                {feature.title}
            </Text>
            <Text c="dimmed" fz="sm">
                {feature.description}
            </Text>
        </div>
    ));

    return (
        <div className={classes.wrapper}>
            <Grid gutter={80}>
                <Grid.Col span={{ base: 12, md: 5 }}>
                    <Title className={classes.title} order={2}>
                        A fully featured React components library for your next project
                    </Title>
                    <Text c="dimmed">
                        Discover the universe with SpaceHub, your gateway to all things space-related. Join us for exciting events and activities that celebrate the cosmos and inspire curiosity about our universe.
                    </Text>

                    <Button
                        variant="gradient"
                        gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
                        size="lg"
                        radius="md"
                        mt="xl"
                        onClick={() =>
                            scrollIntoView({
                                alignment: 'center',
                            })
                        }
                    >
                        Get started
                    </Button>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 7 }} ref={targetRef}>
                    <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
                        {items}
                    </SimpleGrid>
                </Grid.Col>
            </Grid>
        </div>
    );
}

export default EventsIntroSection;