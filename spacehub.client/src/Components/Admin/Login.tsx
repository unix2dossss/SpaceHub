import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './Login.module.css';

function Login() {
    return (
        <div className={classes.login_container}>
            <Container size={420} my={40}>
                <Title ta="center" className={classes.title}>
                    Executive Portal
                </Title>
                <Text c="dimmed" size="sm" ta="center" mt={5}>
                    Here by accident?{' '}
                    <Anchor size="sm" component="button">
                        <Link to="/" className={classes.link}>
                            Go Back
                        </Link>
                    </Anchor>
                </Text>

                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <TextInput label="Email" placeholder="you@mantine.dev" required />
                    <PasswordInput label="Password" placeholder="Your password" required mt="md" />
                    <Group justify="space-between" mt="lg">
                        <Checkbox label="Remember me" />
                        <Anchor component="button" size="sm">
                            Forgot password?
                        </Anchor>
                    </Group>
                    <Button fullWidth mt="xl">
                        Sign in
                    </Button>
                </Paper>
            </Container>
        </div>
    );
}


export default Login;