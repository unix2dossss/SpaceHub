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
    MultiSelect,
    SegmentedControl,
    Blockquote,
    Table,
    Fieldset,
} from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useForm, zodResolver } from '@mantine/form';
import { z } from 'zod';
import classes from './Membership.module.css';
import { ContactIconsList } from './ContactIconsList';
import triangle from '../../assets/large-triangles.svg';
import { IconInfoCircle, IconSticker } from '@tabler/icons-react';


function JoinV2() {
    const [selectedRows, setSelectedRows] = useState<String[]>([]);

    const elements = [
        { semester: "One", cost: "$5" },
        { semester: "Two", cost: "$7" },
    ];

    const rows = elements.map((element) => (
        <Table.Tr
            key={element.cost}
            bg={selectedRows.includes(element.semester) ? 'var(--mantine-color-blue-light)' : undefined}
        >
            <Table.Td>
                <Checkbox
                    aria-label="Select row"
                    checked={selectedRows.includes(element.semester)}
                    onChange={(event) =>
                        setSelectedRows(
                            event.currentTarget.checked
                                ? [element.semester] // Only allow one selection
                                : []
                        )
                    }
                />
            </Table.Td>
            <Table.Td>{element.semester}</Table.Td>
            <Table.Td>{element.cost}</Table.Td>
        </Table.Tr>
    ));


    const [active, setActive] = useState(0);
    const icon = <IconSticker />;


    const form = useForm({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            pronouns: '',
            studentid: '',
            upi: '',
            study: '',
            major: '',
        },

        validate: (values) => {
            if (active === 0) {
                return {
                    firstname: values.firstname.trim().length >= 1 ? undefined : 'First name is required',
                    lastname: values.lastname.trim().length >= 1 ? undefined : 'Last name is required',
                    email: values.email.trim().length === 0
                        ? 'Email is required'
                        : /^\S+@\S+$/.test(values.email)
                            ? null
                            : 'Invalid email',                };
            }

            if (active === 1) {
                return {
                    studentid: values.studentid === undefined || values.studentid.trim().length === 0
                        ? 'Student ID is required'
                        : /^\d{10}$/.test(values.studentid)
                            ? null
                            : 'Invalid Student ID',
                    upi: values.upi.trim().length === 0
                        ? 'UPI is required'
                        : /^[a-zA-Z]{4}\d{3,4}$/.test(values.upi)
                            ? null
                            : 'Invalid UPI',
                };
            }

            if (active === 2) {
                return {
                    selectedRows: selectedRows.length === 0 ? 'You must select a sign-up plan' : null,
                };
            }
            return {};
        },
    });

    const [error, setError] = useState<string>("");
    const navigate = useNavigate();
    const [value, setValue] = useState('react');

    const nextStep = () =>
        setActive((current) => {
            if (form.validate().hasErrors) {
                return current;
            }
            return current < 3 ? current + 1 : current;
        });

    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    //const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //    event.preventDefault();
    //};

    const handleSubmit = (values: typeof form.values) => {
        const { firstname, lastname, email, pronouns, studentid, upi, study, major } = values;
        console.log(`Form submitted with values:`, values);
    };

    return (
        <Center w="100vw" h="100vh">
            <Container size="xl" my={40}>
                <Paper shadow="md" radius="lg">
                    <div className={classes.wrapper}>
                        <div className={classes.contacts} style={{ backgroundImage: `url(${triangle})` }}>
                            <Text fz="lg" mb="md" fw={700} className={classes.title} c="#fff">
                                Contact information
                            </Text>
                            <ContactIconsList />
                        </div>
                        <Stepper iconSize={32} m="xl" active={active} classNames={{ separator: classes.separator, steps: classes.steps }}>
                            <Stepper.Step label="Personal" description="Details">
                                <form className={classes.form}>
                                    <div className={classes.fields}>
                                        <SimpleGrid mt="md" cols={{ base: 1, sm: 2 }}>
                                            <TextInput
                                                label="First Name"
                                                placeholder="Your name"
                                                key={form.key('firstname')}
                                                {...form.getInputProps('firstname')}
                                                required
                                            />
                                            <TextInput
                                                label="Last Name"
                                                placeholder="Your surname"
                                                key={form.key('lastname')}
                                                {...form.getInputProps('lastname')}
                                                required
                                            />
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
                                                data={['', 'She/Her', 'He/Him', 'They/Them']}
                                            />
                                            <Button mt="24px" type="button" className={classes.control} onClick={nextStep}>
                                                Next Step
                                            </Button>
                                        </SimpleGrid>
                                    </div>
                                </form>
                            </Stepper.Step>
                            <Stepper.Step label="Student" description="Details">
                                <form className={classes.form}>
                                    <div className={classes.fields}>
                                        <SimpleGrid mt="md" cols={{ base: 1, sm: 2 }}>
                                            <TextInput
                                                label="Student ID"
                                                placeholder="University ID"
                                                key={form.key('studentid')}
                                                {...form.getInputProps('studentid')}
                                                required
                                            />
                                            <TextInput
                                                label="UPI"
                                                placeholder="UPI"
                                                key={form.key('upi')}
                                                {...form.getInputProps('upi')}
                                                required
                                            />
                                        </SimpleGrid>

                                        <MultiSelect
                                            mt="md"
                                            label="Area/s of Study"
                                            placeholder="Pick a field"
                                            data={['Arts', 'Commerce', 'Creative Arts and Industries', 'Education and Social Work', 'Engineering', 'Global Studies', 'Law', 'Medical and Health Sciences', 'Sciences']}
                                            key={form.key('study')}
                                            {...form.getInputProps('study', { type: 'checkbox' })}
                                        />

                                        <SimpleGrid mt="md" cols={{ base: 1, sm: 2 }}>
                                            <TextInput
                                                label="Major/Spec"
                                                placeholder="Major"
                                                key={form.key('major')}
                                                {...form.getInputProps('major')}
                                            />
                                            <Button mt="24px" type="button" className={classes.control} onClick={nextStep}>
                                                Next Step
                                            </Button>
                                        </SimpleGrid>
                                    </div>
                                </form>
                            </Stepper.Step>
                            <Stepper.Step label="Registration" description="Confirmation">
                                <form className={classes.form} onSubmit={handleSubmit}>
                                    <div className={classes.fields}>

                                        <Text size="md" mt="lg" fw={500}>Select Sign-Up Plan</Text>

                                        <Table highlightOnHover mt="md">
                                            <Table.Thead>
                                                <Table.Tr>
                                                    <Table.Th>Select</Table.Th>
                                                    <Table.Th>Semesters</Table.Th>
                                                    <Table.Th>Cost</Table.Th>
                                                </Table.Tr>
                                            </Table.Thead>
                                            <Table.Tbody>{rows}</Table.Tbody>
                                        </Table>

                                        {form.errors.selectedRows && (
                                            <Text color="red" size="sm" mt="md">{form.errors.selectedRows}</Text>
                                        )}

                                        {selectedRows.length > 0 && (
                                            <>
                                                <Fieldset mt="lg" legend="Transfer Payment Instructions">
                                                    <Text size="sm">Amount: {elements.find(el => selectedRows.includes(el.semester))?.cost}</Text>
                                                    <Text size="sm" mt="0.5em">Account Number: 01-0288-0286940-00</Text>
                                                    <Text size="sm">Particular: {form.values.studentid}</Text>
                                                    <Text size="sm">Reference: {form.values.firstname} {form.values.lastname}</Text>
                                                </Fieldset>
                                            </>
                                        )}

                                        <Checkbox
                                            mt="lg"
                                            label="I will pay offline"
                                        />

                                        <Button mt="lg" type="submit" className={classes.control} onClick={nextStep}>
                                            Register
                                        </Button>
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