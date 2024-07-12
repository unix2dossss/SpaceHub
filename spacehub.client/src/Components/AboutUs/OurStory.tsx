import { Title, Text, Button, Grid, Flex } from '@mantine/core';
import classes from './OurStory.module.css';
import AutoPlayCarousel from './AutoPlayCarousel';

function OurStory() {
    return (
        <div className={ classes.ourStoryWrapper }>
            <div className={classes.wrapper}>
                <Grid gutter={80}>
                    <Grid.Col span={{ base: 12, md: 5 }}>
                        <Title mb='md' fw={900} size="calc(2.25rem * var(--mantine-scale))" className={classes.title} order={2}>
                            Our Story
                        </Title>
                        <Text c="dimmed">
                            Buffer started as a Startup Sprint project in November 2010 to solve a problem our Founder and CEO Joel Gascoigne was experiencing - he wanted to space out when his tweets were sent. The idea gained hundreds of users within the first few months and eventually grew to add social networks, to go beyond purely publishing to social media into analytics, engagement, and even to building micro sites. Today, Buffer is one of the most well-known social media marketing tools serving small businesses, creators, and individuals.
                        </Text>

                        <Button
                            variant="gradient"
                            gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
                            size="lg"
                            radius="md"
                            mt="xl"
                        >
                            Get started
                        </Button>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 5 }}>
                        <Flex
                            justify="center"
                            align="center"
                        >
                            <AutoPlayCarousel></AutoPlayCarousel>
                        </Flex>
                    </Grid.Col>
                </Grid>
            </div>
        </div>
    );
}

export default OurStory;