import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import hero2 from '../../assets/hero2.svg';
import classes from './HeroBullets.module.css';

function HeroBullets() {
    return (
        <Container size="md">
            <div className={classes.inner}>
                <div className={classes.content}>
                    <Title className={classes.title}>
                        <span className={classes.highlight}>Space</span> Hub<br />
                    </Title><br />
                    <Text>
                        Our club is the starting point for new university students who are interested in space but don't know where
                        to begin. It's a hard industry to break into, and we're a club made up of people sharing that journey together.
                    </Text>

                    <List
                        mt={30}
                        spacing="sm"
                        size="sm"
                        icon={
                            <ThemeIcon size={20} radius="xl">
                                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
                            </ThemeIcon>
                        }
                    >
                        <List.Item>
                            <b>Engage and connect</b> - It's a community club where you can geek out about space and connect with people to learn more about their experiences.
                        </List.Item>
                        <List.Item>
                            <b>Guest speakers and events</b> - We often host guest speakers, ranging from industry professionals to astronauts, and organize events from astrobiology talks to stargazing trips.
                        </List.Item>
                        <List.Item>
                            <b>Relax and enjoy</b> - If you just want to chill, watch space movies, go camping, and stargaze, we do that too!
                        </List.Item>
                    </List>

                    <Group mt={30}>
                        <Button radius="xl" size="md" className={classes.control}>
                            Join Us
                        </Button>
                        <Button variant="default" radius="xl" size="md" className={classes.control}>
                            Source code
                        </Button>
                    </Group>
                </div>
                <Image src={hero2} className={classes.image} />
            </div>
        </Container>
    );
}

export default HeroBullets;