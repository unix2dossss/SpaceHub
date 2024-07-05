import { Image, Accordion, Grid, Container, Title } from '@mantine/core';
import faq from '../../assets/faq.svg';
import classes from './FaqWithImage.module.css';

function FaqWithImage() {
    return (
        <div className={classes.wrapper}>
            <Container size="lg">
                <Grid id="faq-grid" gutter={50}>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Image src={faq} alt="Frequently Asked Questions" />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Title order={2} ta="left" className={classes.title}>
                            Frequently Asked Questions
                        </Title>

                        <Accordion chevronPosition="right" defaultValue="reset-password" variant="separated">
                            <Accordion.Item className={classes.item} value="reset-password">
                                <Accordion.Control>What do we do?</Accordion.Control>
                                <Accordion.Panel>In our space club, we organize a variety of engaging activities focused on space exploration and discovery. From stargazing nights and guest speaker events to workshops and movie sessions, we provide opportunities for members to learn, explore, and connect with like-minded enthusiasts.</Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item className={classes.item} value="another-account">
                                <Accordion.Control>What can you do within this club?</Accordion.Control>
                                <Accordion.Panel>As a member of our space club, you can participate in a range of activities that cater to your interests in space. Whether you're keen on learning about astronomy, attending talks by industry experts, joining telescope nights, or simply enjoying space-themed movie sessions, there's something for everyone to enjoy and engage with.</Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item className={classes.item} value="newsletter">
                                <Accordion.Control>How can I subscribe to monthly newsletter?</Accordion.Control>
                                <Accordion.Panel>To stay updated on our latest events, news, and activities, you can subscribe to our monthly newsletter. Simply visit our Join-Us page or contact our team to sign up. Don't miss out on exciting updates from the world of space exploration!</Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item className={classes.item} value="credit-card">
                                <Accordion.Control>
                                    How do I join the exec team?
                                </Accordion.Control>
                                <Accordion.Panel>Join our executive team if you're passionate about space and want to shape our club's future. We welcome dedicated individuals eager to promote space science and community engagement. Contact us to learn more about applying and contributing to our mission.</Accordion.Panel>
                            </Accordion.Item>
                        </Accordion>
                    </Grid.Col>
                </Grid>
            </Container>
        </div>
    );
}

export default FaqWithImage;