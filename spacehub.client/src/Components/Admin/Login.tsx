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


function Login() {

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
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // validate email and passwords
        if (!email || !password) {
            setError("Please fill in all fields.");
        } else {
            // clear error message
            setError("");
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
        }
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
        </Center>
    );
}


export default Login;