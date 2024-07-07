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
    SimpleGrid,
    Textarea,
    Stepper,
    NativeSelect,
} from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useForm, zodResolver } from '@mantine/form';
import { z } from 'zod';
import classes from './Membership.module.css';
import { ContactIconsList } from './ContactIconsList';
import triangle from '../../assets/large-triangles.svg';


function JoinV2() {
    const [active, setActive] = useState(0);

    const schema = z.object({
        email: z.string().email({ message: 'Invalid email' }),
        password: z.string().min(1, { message: 'Password is required' }),
        rememberMe: z.boolean(),
    });

    const form = useForm({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            pronouns: '',
        },
        validate: zodResolver(schema),
    });

    const [error, setError] = useState<string>("");
    const navigate = useNavigate();

    const nextStep = () =>
        setActive((current) => {
            if (form.validate().hasErrors) {
                return current;
            }
            return current < 3 ? current + 1 : current;
        });

    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <Center w="100vw" h="100vh">
            <Container size="lg" my={40}>
                <Paper shadow="md" radius="lg">
                    <div className={classes.wrapper}>
                        <div className={classes.contacts} style={{ backgroundImage: `url(${triangle})` }}>
                            <Text fz="lg" mb="md" fw={700} className={classes.title} c="#fff">
                                Contact information
                            </Text>

                            <ContactIconsList />
                        </div>
                        <Stepper mt="xl" ml="xl" active={active} classNames={{ separator: classes.separator }}>
                            <Stepper.Step label="General" description="Personal Details">
                                <form className={classes.form} onSubmit={handleSubmit}>
                                    <div className={classes.fields}>
                                        <SimpleGrid mt="md" cols={{ base: 1, sm: 2 }}>
                                            <TextInput label="First Name" placeholder="Your name" required />
                                            <TextInput label="Last Name" placeholder="Your surname" required />
                                        </SimpleGrid>

                                        <TextInput
                                            required
                                            mt="md"
                                            withAsterisk
                                            label="Email"
                                            placeholder="your@email.com"
                                            key={form.key('name')}
                                            {...form.getInputProps('email')}
                                        />

                                        <SimpleGrid mt="md" cols={{ base: 1, sm: 2 }}>
                                            <NativeSelect
                                                label="Pronouns"
                                                data={['She/Her', 'He/Him', 'They/Them']}
                                            />
                                            <Button mt="24px" type="button" className={classes.control} onClick={nextStep}>
                                                Next Step
                                            </Button>
                                        </SimpleGrid>
                                    </div>
                                </form>
                            </Stepper.Step>
                            <Stepper.Step label="Second Step" description="Profile settings">
                                <form className={classes.form} onSubmit={handleSubmit}>
                                    <div className={classes.fields}>
                                        <SimpleGrid mt="md" cols={{ base: 1, sm: 2 }}>
                                            <TextInput label="First Name" placeholder="Your name" required />
                                            <TextInput label="Last Name" placeholder="Your surname" required />
                                        </SimpleGrid>

                                        <TextInput
                                            required
                                            mt="md"
                                            withAsterisk
                                            label="Email"
                                            placeholder="your@email.com"
                                            {...form.getInputProps('email')}
                                        />

                                        <SimpleGrid mt="md" cols={{ base: 1, sm: 2 }}>
                                            <NativeSelect
                                                label="Pronouns"
                                                data={['She/Her', 'He/Him', 'They/Them']}
                                            />
                                            <Button mt="24px" type="button" className={classes.control} onClick={nextStep}>
                                                Next Step
                                            </Button>
                                        </SimpleGrid>
                                    </div>
                                </form>
                            </Stepper.Step>
                        </Stepper>
                    </div>
                </Paper>
            </Container>
        </Center>
    );
}

export default JoinV2;