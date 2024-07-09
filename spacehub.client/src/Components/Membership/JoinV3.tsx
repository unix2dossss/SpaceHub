import { useState } from 'react';
import {
    TextInput,
    Checkbox,
    Paper,
    Text,
    Container,
    Button,
    Center,
    SimpleGrid,
    Stepper,
    NativeSelect,
    MultiSelect,
    Table,
    Fieldset,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { ContactIconsList } from './ContactIconsList';
import triangle from '../../assets/large-triangles.svg';
import classes from './Membership.module.css';

const elements = [
    { semester: '1 Semester - $5', cost: '$5' },
    { semester: '2 Semesters - $7', cost: '$7' }
];

function JoinV3() {
    //const [selectedRows, setSelectedRows] = useState<string[]>([]);

    //const elements = [
    //    { semester: 'One', cost: '$5' },
    //    { semester: 'Two', cost: '$7' },
    //];

    //const rows = elements.map((element) => (
    //    <Table.Tr
    //        key={element.cost}
    //        bg={selectedRows.includes(element.semester) ? 'var(--mantine-color-blue-light)' : undefined}
    //    >
    //        <Table.Td>
    //            <Checkbox
    //                aria-label="Select row"
    //                checked={selectedRows.includes(element.semester)}
    //                onChange={(event) =>
    //                    setSelectedRows(event.currentTarget.checked ? [element.semester] : [])
    //                }
    //            />
    //        </Table.Td>
    //        <Table.Td>{element.semester}</Table.Td>
    //        <Table.Td>{element.cost}</Table.Td>
    //    </Table.Tr>
    //));

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
            semesterplan: elements[0].semester,
            payoffline: false
        },
        validate: (values) => {
            if (active === 0) {
                return {
                    firstname: values.firstname.trim().length >= 1 ? undefined : 'First name is required',
                    lastname: values.lastname.trim().length >= 1 ? undefined : 'Last name is required',
                    email:
                        values.email.trim().length === 0
                            ? 'Email is required'
                            : /^\S+@\S+$/.test(values.email)
                                ? undefined
                                : 'Invalid email',
                };
            }

            if (active === 1) {
                return {
                    studentid:
                        values.studentid === undefined || values.studentid.trim().length === 0
                            ? 'Student ID is required'
                            : /^\d{10}$/.test(values.studentid)
                                ? undefined
                                : 'Invalid Student ID',
                    upi:
                        values.upi.trim().length === 0
                            ? 'UPI is required'
                            : /^[a-zA-Z]{4}\d{3,4}$/.test(values.upi)
                                ? undefined
                                : 'Invalid UPI',
                };
            }

            if (active === 2) {
                return {
                    //selectedRows:
                    //    selectedRows.length === 0 ? 'You must select a sign-up plan' : undefined,
                };
            }

            return {};
        },
    });

    const handleSemesterChange = (event) => {
        const value = event.currentTarget.value;
        setSelectedSemester(value);
        form.setFieldValue('semesterplan', value); // Update form state
    };

    const handleCheckboxChange = (event) => {
        form.setFieldValue('payoffline', event.currentTarget.checked); // Update form state
    };

    const [selectedSemester, setSelectedSemester] = useState(form.values.semesterplan);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent default form submission
        const { firstname, lastname, email, pronouns, studentid, upi, study, major, semesterplan, payoffline } = form.values;

        console.log('Form submitted with values:', {
            firstname,
            lastname,
            email,
            pronouns,
            studentid,
            upi,
            study,
            major,
            semesterplan,
            payoffline
        });
    };

    const handleNext = () => {
        const { hasErrors } = form.validate();
        if (!hasErrors) {
            setActive((prev) => prev + 1);
        }
    };

    const [active, setActive] = useState(0);

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
                        <form className={classes.form} onSubmit={handleSubmit}>
                            <Stepper
                                iconSize={32}
                                m="xl"
                                active={active}
                                classNames={{
                                    separator: classes.separator,
                                    steps: classes.steps,
                                }}
                            >
                                <Stepper.Step label="Personal" description="Details">
                                    <div className={classes.fields}>
                                        <SimpleGrid mt="md" cols={{ base: 1, sm: 2 }}>
                                            <TextInput
                                                label="First Name"
                                                placeholder="Your name"
                                                {...form.getInputProps('firstname')}
                                                required
                                            />
                                            <TextInput
                                                label="Last Name"
                                                placeholder="Your surname"
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
                                            {...form.getInputProps('email')}
                                        />
                                        <SimpleGrid mt="md" cols={{ base: 1, sm: 2 }}>
                                            <NativeSelect
                                                label="Pronouns"
                                                data={['', 'She/Her', 'He/Him', 'They/Them']}
                                            />
                                            <Button
                                                mt="24px"
                                                type="button"
                                                className={classes.control}
                                                onClick={handleNext}
                                            >
                                                Next Step
                                            </Button>
                                        </SimpleGrid>
                                    </div>
                                </Stepper.Step>
                                <Stepper.Step label="Student" description="Details">
                                    <div className={classes.fields}>
                                        <SimpleGrid mt="md" cols={{ base: 1, sm: 2 }}>
                                            <TextInput
                                                label="Student ID"
                                                placeholder="University ID"
                                                {...form.getInputProps('studentid')}
                                                required
                                            />
                                            <TextInput
                                                label="UPI"
                                                placeholder="UPI"
                                                {...form.getInputProps('upi')}
                                                required
                                            />
                                        </SimpleGrid>
                                        <MultiSelect
                                            mt="md"
                                            label="Area/s of Study"
                                            placeholder="Pick a field"
                                            data={[
                                                'Arts',
                                                'Commerce',
                                                'Creative Arts and Industries',
                                                'Education and Social Work',
                                                'Engineering',
                                                'Global Studies',
                                                'Law',
                                                'Medical and Health Sciences',
                                                'Sciences',
                                            ]}
                                            {...form.getInputProps('study', { type: 'checkbox' })}
                                        />
                                        <SimpleGrid mt="md" cols={{ base: 1, sm: 2 }}>
                                            <TextInput
                                                label="Major/Spec"
                                                placeholder="Major"
                                                {...form.getInputProps('major')}
                                            />
                                            <Button
                                                mt="24px"
                                                type="button"
                                                className={classes.control}
                                                onClick={handleNext}
                                            >
                                                Next Step
                                            </Button>
                                        </SimpleGrid>
                                    </div>
                                </Stepper.Step>
                                <Stepper.Step label="Registration" description="Confirmation">
                                    <div className={classes.fields}>
                                        {/*<Text size="md" mt="lg" fw={500}>*/}
                                        {/*    Select Sign-Up Plan*/}
                                        {/*</Text>*/}
                                        {/*<Table highlightOnHover mt="md">*/}
                                        {/*    <Table.Thead>*/}
                                        {/*        <Table.Tr>*/}
                                        {/*            <Table.Th>Select</Table.Th>*/}
                                        {/*            <Table.Th>Semesters</Table.Th>*/}
                                        {/*            <Table.Th>Cost</Table.Th>*/}
                                        {/*        </Table.Tr>*/}
                                        {/*    </Table.Thead>*/}
                                        {/*    <Table.Tbody>{rows}</Table.Tbody>*/}
                                        {/*</Table>*/}
                                        {/*{form.errors.selectedRows && (*/}
                                        {/*    <Text color="red" size="sm" mt="md">*/}
                                        {/*        {form.errors.selectedRows}*/}
                                        {/*    </Text>*/}
                                        {/*)}*/}
                                        {/*{selectedRows.length > 0 && (*/}
                                        {/*    <>*/}
                                                {/*<Fieldset mt="lg" legend="Transfer Payment Instructions">*/}
                                                {/*    <Text size="sm">*/}
                                                {/*        Amount:{' '}*/}
                                                {/*        {*/}
                                                {/*            elements.find((el) =>*/}
                                                {/*                selectedRows.includes(el.semester)*/}
                                                {/*            )?.cost*/}
                                                {/*        }*/}
                                                {/*    </Text>*/}
                                                {/*    <Text size="sm" mt="0.5em">*/}
                                                {/*        Account Number: 01-0288-0286940-00*/}
                                                {/*    </Text>*/}
                                                {/*    <Text size="sm">*/}
                                                {/*        Particular: {form.values.studentid}*/}
                                                {/*    </Text>*/}
                                                {/*    <Text size="sm">*/}
                                                {/*        Reference: {form.values.firstname}{' '}*/}
                                                {/*        {form.values.lastname}*/}
                                                {/*    </Text>*/}
                                                {/*</Fieldset>*/}
                                        {/*    </>*/}
                                        {/*)}*/}
                                        <NativeSelect
                                            label="Select Semester"
                                            description="Choose your semester duration and fee"
                                            data={elements.map((el) => el.semester)}
                                            value={form.values.semesterplan}
                                            key={form.key('semesterplan')}
                                            {...form.getInputProps('semesterplan')}
                                            onChange={handleSemesterChange}
                                        />

                                        <Fieldset mt="lg" legend="Transfer Payment Instructions">
                                            <Text size="sm">
                                                Amount:{' '}
                                                {elements.find((el) => el.semester === selectedSemester)?.cost}
                                            </Text>
                                            <Text size="sm" mt="0.5em">
                                                Account Number: 01-0288-0286940-00
                                            </Text>
                                            <Text size="sm">
                                                Particular: {form.values.studentid}
                                            </Text>
                                            <Text size="sm">
                                                Reference: {form.values.firstname} {form.values.lastname}
                                            </Text>
                                        </Fieldset>

                                        <Checkbox
                                            mt="lg"
                                            label="I will pay offline"
                                            checked={form.values.payoffline}
                                            onChange={handleCheckboxChange}
                                        />


                                        <Button
                                            mt="lg"
                                            type="submit"
                                            className={classes.control}
                                            onClick={handleSubmit}
                                        >
                                            Register
                                        </Button>
                                    </div>
                                </Stepper.Step>
                            </Stepper>
                        </form>
                    </div>
                </Paper>
            </Container>
        </Center>
    );
}

export default JoinV3;