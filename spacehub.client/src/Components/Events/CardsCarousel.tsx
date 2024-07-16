import '@mantine/carousel/styles.css';
import '@mantine/core/styles.css';

import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Paper, Text, Title, Button, useMantineTheme, Anchor } from '@mantine/core';
import classes from './CardsCarousel.module.css';
import { useEffect, useState } from 'react';

interface CardProps {
    eventName: string;
    eventCatergory: string;
    eventDescription: string;
    eventLink: string;
    eventCardBG: string;
    eventTime: string;
    eventPast: boolean
}

function Card({ eventName, eventCatergory, eventDescription, eventLink, eventCardBG, eventTime, eventPast }: CardProps) {
    return (
        <Paper
            shadow="md"
            p="xl"
            radius="md"
            style={{ backgroundImage: `url(${eventLink})` }}
            className={classes.card}
        >
            <div>
                {/*<Group justify="space-between">*/}
                {/*    <Text className={classes.category} size="xs">*/}
                {/*        {eventCatergory}*/}
                {/*    </Text>*/}
                {/*    <Badge>12 days left</Badge>*/}
                {/*</Group>*/}

                <Text fw={500} className={classes.category} size="xs">
                    {eventCatergory}
                </Text>
                <Title fw={700} order={3} className={classes.title}>
                    {eventName}
                </Title>
                <Text fw={400} mt="sm" className={classes.description} size="sm">
                    {eventDescription}
                </Text>
            </div>
            <Anchor href={eventLink}>
                <Button variant="white" color="dark" className={classes.rsvpButton}>
                    Register
                </Button>
            </Anchor>
        </Paper>
    );
}

function CardsCarousel() {
    const [events, setEvents] = useState([]);
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

    useEffect(() => {
        const fetchExecutives = async () => {
            try {
                const response = await fetch('/api/Event');
                const data = await response.json();
                setEvents(data);
            } catch (error) {
                console.error('Error fetching executives:', error);
            }
        };

        fetchExecutives();
    }, []);

    const slides = events.map((item) => (
        <Carousel.Slide key={item.eventName}>
            <Card {...item} />
        </Carousel.Slide>
    ));

    return (
        <>
            {slides.length === 0 ? (
                <></>
            ) : (
                <Carousel
                    slideSize={{ base: '75%', sm: '33%', md: '20%' }}
                    slideGap={{ base: 'md', sm: 'lg' }}
                    align="start"
                    slidesToScroll={mobile ? 1 : 2}
                    mb="lg"
                    mx="xl"
                >
                    {slides}
                </Carousel>
            )}
        </>
    );

}

export default CardsCarousel;