import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import image from '../../assets/undraw_my_universe_803e.svg';
import image2 from '../../assets/undraw_counting_stars_re_smvv.svg';
import classes from './Hero2.module.css';
import video from '../../assets/darkbg.mp4';

function Hero2() {
    return (
        <div className={classes.ImageWrapper}>
            {/*<video*/}
            {/*    className={classes.backgroundVideo}*/}
            {/*    loop*/}
            {/*    autoPlay*/}
            {/*    muted*/}
            {/*>*/}
            {/*    <source*/}
            {/*        src={video}*/}
            {/*        type="video/mp4"*/}
            {/*    />*/}
            {/*</video>*/}
            <Container size="md" bg={image}>
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>
                            An <span className={classes.highlight}>Inspiring</span> Club <br /> for Space Enthusiasts
                        </Title>
                        <Text c="dimmed" mt="md">
                            Join Spacehub to connect with students passionate about space and exploration. Whether you're new or experienced, our club offers events, resources, and activities to fuel your cosmic curiosity.
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
                                <b>Explore Space Together</b> - Enjoy stargazing and talks on the latest space discoveries for all levels.
                            </List.Item>
                            <List.Item>
                                <b>Hands-On Learning</b> - Join workshops, projects, and guided sessions in astronomy.
                            </List.Item>
                            <List.Item>
                                <b>Community Focused</b> - Connect, learn, and inspire each other to reach for the stars.
                            </List.Item>
                        </List>

                        <Group mt={30}>
                            <Button radius="xl" size="md" className={classes.control}>
                                Get Involved
                            </Button>
                            <Button variant="default" radius="xl" size="md" className={classes.control}>
                                Discover Events
                            </Button>
                        </Group>
                    </div>
                    <Image src={image2} className={classes.image} />
                </div>
            </Container>
        </div>
    );
}

export default Hero2;