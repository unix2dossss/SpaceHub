import { Title, Text, Button, Container } from '@mantine/core';
import Dots from './Dots';
import classes from './AboutHero.module.css';

function AboutHero() {
    return (
        <Container className={classes.wrapper} size={1400}>
            <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
            <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
            <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
            <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

            <div className={classes.inner}>
                <Title className={classes.title}>
                    SpaceHub:{' '}
                    <Text component="span" className={classes.highlight} inherit>
                        Your Gateway
                    </Text>{' '}
                     to the Stars
                </Title>

                <Container p={0} size={600}>
                    <Text size="lg" c="dimmed" className={classes.description}>
                        Explore space through events, speaker sessions, and collaborative learning. Engage with fellow enthusiasts and expand your knowledge of the cosmos.
                    </Text>
                </Container>

                <div className={classes.controls}>
                    <Button className={classes.control} size="lg" variant="default" color="gray">
                        Our Events
                    </Button>
                    <Button className={classes.control} size="lg">
                        Join Us
                    </Button>
                </div>
            </div>
        </Container>
    );
}

export default AboutHero;