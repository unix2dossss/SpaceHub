import { Text, Title, TextInput, Button, Image } from '@mantine/core';
import membership from '../../assets/membership.svg';
import classes from './EmailBanner.module.css';

function EmailBanner() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.body}>
                <Title className={classes.title}>Wait a minute...</Title>
                <Text fw={500} fz="lg" mb={5}>
                    Subscribe to our newsletter!
                </Text>
                <Text fz="sm" c="dimmed">
                    Embark on an interstellar adventure with SpaceHub! Receive weekly updates every Sunday on groundbreaking space news, celestial events, and exclusive community insights. Stay connected to the cosmos!
                </Text>

                <div className={classes.controls}>
                    <TextInput
                        placeholder="Your email"
                        classNames={{ input: classes.input, root: classes.inputWrapper }}
                    />
                    <Button className={classes.control}>Subscribe</Button>
                </div>
            </div>
            <Image src={membership} className={classes.image} />
        </div>
    );
}

export default EmailBanner;