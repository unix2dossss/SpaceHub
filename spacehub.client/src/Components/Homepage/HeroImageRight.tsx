import { Container, Title, Text, Button } from '@mantine/core';
import classes from './HeroImageRight.module.css';

function HeroImageRight() {
    return (
        <div className={classes.heroContainer}>
        <div className={classes.root}>
            <Container size="lg">
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>
                            A{' '}
                            <Text
                                component="span"
                                inherit
                                variant="gradient"
                                gradient={{ from: 'pink', to: 'yellow' }}
                            >
                                fully featured
                            </Text>{' '}
                            React components library
                        </Title>

                        <Text className={classes.description} mt={30}>
                            Our club is the starting point for new university students who are interested in space but don't know where
                            to begin. It's a hard industry to break into, and we're a club made up of people sharing that journey together.
                        </Text>

                        <Button
                            variant="gradient"
                            gradient={{ from: 'pink', to: 'yellow' }}
                            size="xl"
                            className={classes.control}
                            mt={40}
                        >
                            Get started
                        </Button>
                    </div>
                </div>
            </Container>
            </div>
        </div>
    );
}

export default HeroImageRight;