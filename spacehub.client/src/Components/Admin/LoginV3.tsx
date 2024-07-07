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
    Center,
} from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useForm, zodResolver } from '@mantine/form';
import { z } from 'zod';
import classes from './Login.module.css';

function LoginV2() {
    const schema = z.object({
        email: z.string().email({ message: 'Invalid email' }),
        password: z.string().min(1, { message: 'Password is required' }),
        rememberMe: z.boolean(),
    });

    const form = useForm({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        validate: zodResolver(schema),
    });

    const [error, setError] = useState<string>("");
    const navigate = useNavigate();

    //const handleRegisterClick = () => {
    //    navigate("/admin/register");
    //}

    const handleSubmit = (values: typeof form.values) => {
        const { email, password, rememberMe } = values;

        const loginurl = rememberMe ? "/login?useCookies=true" : "/login?useSessionCookies=true";

        fetch(loginurl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
            .then((response) => {
                if (response.ok) {
                    setError("Successful Login.");
                    window.location.href = '/';
                } else {
                    setError("Error Logging In.");
                }
            })
            .catch((error) => {
                console.error(error);
                setError("Network Error");
            });
    };

    return (
        <Center w="100vw" h="100vh">
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
                    <form onSubmit={form.onSubmit(handleSubmit)}>
                        <TextInput
                            withAsterisk
                            label="Email"
                            placeholder="your@email.com"
                            {...form.getInputProps('email')}
                        />
                        <PasswordInput
                            mt="md"
                            label="Password"
                            placeholder="Your password"
                            withAsterisk
                            {...form.getInputProps('password')}
                        />
                        <Group justify="space-between" mt="lg">
                            <Checkbox
                                label="Remember Me"
                                {...form.getInputProps('rememberMe', { type: 'checkbox' })}
                            />
                            <Anchor component="button" size="sm">
                                Forgot password?
                            </Anchor>
                        </Group>
                        <Button type="submit" fullWidth mt="xl">
                            Sign in
                        </Button>
                        {/*<Button fullWidth mt="md" onClick={handleRegisterClick}>*/}
                        {/*    Register*/}
                        {/*</Button>*/}
                    </form>
                    {error && <Text color="red" mt="md">{error}</Text>}
                </Paper>
            </Container>
        </Center>
    );
}

export default LoginV2;
