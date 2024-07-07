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
import classes from './Login.module.css';
import { useForm, zodResolver } from '@mantine/form';
import { z } from 'zod';


function LoginV2() {

    const schema = z.object({
        email: z.string().email({ message: 'Invalid email' })
    });

    const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
    },

    validate: zodResolver(schema),

  });

    // state variables for email and passwords
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [rememberme, setRememberme] = useState<boolean>(false);
    // state variable for error messages
    const [error, setError] = useState<string>("");
    const navigate = useNavigate();

    // handle change events for input fields
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "email") setEmail(value);
        if (name === "password") setPassword(value);
        if (name === "rememberme") setRememberme(e.target.checked);
    };

    const handleRegisterClick = () => {
        navigate("/register");
    }

    // handle submit event for the form
    const handleSubmit = (values: typeof form.values) => {
        console.log(values.email);
            // post data to the /register api
            var loginurl = "";
            if (rememberme == true)
                loginurl = "/login?useCookies=true";
            else
                loginurl = "/login?useSessionCookies=true";

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

                .then((data) => {
                    // handle success or error from the server
                    console.log(data);
                    if (data.ok) {
                        setError("Successful Login.");
                        window.location.href = '/';
                    }
                    else
                        setError("Error Logging In.");

                })
                .catch((error) => {
                    // handle network error
                    console.error(error);
                    setError("Error Logging in.");
                });
    };

    return (
        // Can add bg here.
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
                            key={form.key('email')}
                            {...form.getInputProps('email')}
                        />
                        <PasswordInput
                            mt="md"
                            label="Password"
                            placeholder="Your password"
                            required
                            key={form.key('password')}
                            {...form.getInputProps('password')}
                        />
                        <Group justify="space-between" mt="lg">
                            <Checkbox
                                label="Remember Me"
                                key={form.key('rememberMe')}
                                {...form.getInputProps('rememberMe', { type: 'checkbox' })}
                            />
                            <Anchor component="button" size="sm">
                                Forgot password?
                            </Anchor>
                        </Group>
                        <Button type="submit" fullWidth mt="xl">
                            Sign in
                        </Button>
                    </form>
                </Paper>
            </Container>
        </Center>
    );
}


export default LoginV2;