import { useState } from 'react';
import {
    TextInput,
    Button,
    Flex,
} from '@mantine/core';
import classes from './ExecInterface.module.css';
import { useForm } from '@mantine/form';
import ExecTable from './ExecTable';

function ExecInterface() {
    const [refreshKey, setRefreshKey] = useState(0); // State variable to track changes

    const form = useForm({
        initialValues: {
            execName: '',
            execRole: '',
            execLinkedInLink: '',
            execFavObject: '',
        },
        validate: (values) => ({
            execName: values.execName.trim().length < 1
                ? 'Name is Required'
                : values.execName.trim().length > 50
                    ? 'Name must be less than 50 characters'
                    : undefined,
            execRole: values.execRole.trim().length < 1
                ? 'Role is Required'
                : values.execRole.trim().length > 50
                    ? 'Executive role must be less than 50 characters'
                    : undefined,
            execLinkedInLink: values.execLinkedInLink.trim().length < 1
                ? 'LinkedIn link is required'
                : undefined,
            execFavObject: values.execFavObject.trim().length < 1
                ? 'Favourite celestial object is required'
                : values.execFavObject.trim().length > 50
                    ? 'Favourite celestial object must be less than 50 characters'
                    : undefined,
        }),
    });

    const handleSubmit = async (event) => {
        const { execName, execRole, execLinkedInLink, execFavObject } = form.values;

        console.log(`Executive Name: ${execName}`);
        console.log(`Executive Role: ${execRole}`);
        console.log(`LinkedIn Link: ${execLinkedInLink}`);
        console.log(`Favorite Object: ${execFavObject}`);

        try {
            const response = await fetch('/api/Executive', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    execName,
                    execRole,
                    execLinkedInLink,
                    execFavObject,
                }),
            });

            const responseBody = await response.json();
            console.log('Response:', responseBody);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            console.log('Form submitted successfully:', responseBody);
            setRefreshKey((oldKey) => oldKey + 1); // Trigger a rerender of MembersTable

            // You can also reset the form or show a success message here
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            if (error.response) {
                console.error('Error response:', error.response);
            }
        }
    };

    return (
        <Flex
            m="xl"
            h="calc(88vh)"
            gap="xl"
            justify="space-evenly"
            align="center"
            direction="column"
            wrap="wrap"
        >
            <div className={classes.form}>
                <form onSubmit={form.onSubmit(handleSubmit)}>
                    <TextInput
                        mb="sm"
                        label="Executive Name"
                        placeholder="John Doe"
                        {...form.getInputProps('execName')}
                        required
                    />
                    <TextInput
                        mb="sm"
                        label="Executive Role"
                        placeholder="Marketing Executive"
                        {...form.getInputProps('execRole')}
                        required
                    />
                    <TextInput
                        mb="sm"
                        label="Executive LinkedIn"
                        placeholder="https://www.linkedin.com/in/john-doe/"
                        {...form.getInputProps('execLinkedInLink')}
                        required
                    />
                    <TextInput
                        mb="md"
                        label="Favourite Celestial Object"
                        placeholder="Voyager I"
                        {...form.getInputProps('execFavObject')}
                        required
                    />
                    <Button
                        type="submit"
                        className={classes.control}
                    >
                        Add Executive
                    </Button>
                </form>
            </div>
            <div className={classes.table}>
                <ExecTable key={refreshKey} />
            </div>
        </Flex>
    );
}

export default ExecInterface;