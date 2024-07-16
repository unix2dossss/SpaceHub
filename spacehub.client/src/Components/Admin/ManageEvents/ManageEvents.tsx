import {
    TextInput,
    Textarea,
    Paper,
    Title,
    Text,
    Button,
    Container,
    SimpleGrid,
    MantineProvider,
    Divider,
    Anchor,
    Autocomplete,
    Group,
    ActionIcon,
    rem
} from '@mantine/core';
import { DateTimePicker, TimeInput } from '@mantine/dates';
import '@mantine/dates/styles.css';
import classes from './ManageEvents.module.css';
import AuthorizeView from '../AuthorizeView';
import AdminLayout from '../AdminLayout';
import CardsCarousel from '../../Events/CardsCarousel';
import { useForm } from '@mantine/form';
import { IconClock } from '@tabler/icons-react';
import { useRef } from 'react';

function ManageEvents() {

    const form = useForm({
        initialValues: {
            eventName: '',
            eventCatergory: '',
            eventDescription: '',
            eventLink: '',
            eventCardBG: '',
            eventDateTime: null,
            eventEndTime: null,
        },
        // Add any necessary validations here
        // validate: {
        //   eventName: (value) => value.length < 1 ? 'Event name is required' : null,
        //   eventCatergory: (value) => value.length < 1 ? 'Event category is required' : null,
        //   eventDescription: (value) => value.length < 1 ? 'Event description is required' : null,
        //   eventLink: (value) => value.length < 1 ? 'Event link is required' : null,
        // },
    });

    const handleSubmit = async (values) => {

        //console.log(values);

        const dateTimeString = values.eventDateTime;
        const dateTimeObject = new Date(dateTimeString);
        const endTimeString = values.eventEndTime;
        const endTimeObject = new Date(endTimeString);

        const formattedValues = {
            ...values,
            eventDateTime: values.eventDateTime ? dateTimeObject.toISOString() : null,
            eventEndTime: values.eventEndTime ? endTimeObject.toISOString() : null,
        };

        console.log(formattedValues);

        try {
            const response = await fetch('/api/Event', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formattedValues),
            });

            const responseBody = await response.json();
            console.log('Response:', responseBody);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            console.log('Form submitted successfully:', responseBody);

            // Reset the form or show a success message here if needed
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };

    const ref = useRef<HTMLInputElement>(null);

    const pickerControl = (
        <ActionIcon variant="subtle" color="gray" onClick={() => ref.current?.showPicker()}>
            <IconClock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
        </ActionIcon>
    );

    return (
        <MantineProvider forceColorScheme='dark'>
            <AuthorizeView>
                <AdminLayout>
                    <Container mt="xl">
                        <SimpleGrid cols={2} spacing="xl">
                            <form onSubmit={form.onSubmit(handleSubmit)}>
                                <Autocomplete
                                    label="Event Category"
                                    mb="xs"
                                    placeholder="Select an event category"
                                    data={['Networking', 'Workshop', 'Seminar', 'Star Gazing', 'Academia', 'Community Outreach', 'Social']}
                                    {...form.getInputProps('eventCatergory')}
                                />

                                <TextInput
                                    label="Event Name"
                                    mb="xs"
                                    placeholder="Name your event"
                                    {...form.getInputProps('eventName')}
                                />

                                <Textarea
                                    label="Event Description"
                                    mb="xs"
                                    placeholder="Describe your event"
                                    {...form.getInputProps('eventDescription')}
                                />
                                <TextInput
                                    label="Card Background Link"
                                    mb="xs"
                                    placeholder="Provide a URL for the card background"
                                    {...form.getInputProps('eventCardBG')}
                                />
                                <TextInput
                                    label="Event Registration Link"
                                    mb="xs"
                                    placeholder="Enter the registration link"
                                    {...form.getInputProps('eventLink')}
                                />  
                                    <Group>
                                    <DateTimePicker mb="xs" valueFormat="DD MMM YYYY hh:mm A" dropdownType="modal" clearable label="Event Date and Time" placeholder="Pick date and time" {...form.getInputProps('eventDateTime')}/>
                                    <TimeInput mb="xs" label="Event End Time" ref={ref} rightSection={pickerControl} {...form.getInputProps('eventEndTime')} />
                                    </Group>
                                    <Button
                                        mt="md"
                                        type="submit"
                                        className={classes.control}
                                    >
                                        Create Event
                                    </Button>
                                
                            </form>
                                <Paper shadow="md" radius="md" p="xl" className={classes.cardPreview}
                                   // {/*style={{ backgroundImage: `url(${form.values.eventCardBG})` }}>*/}
                                style={{ backgroundImage: `url(${form.values.eventCardBG || 'https://i.pinimg.com/736x/9c/8d/04/9c8d042a5deb241e92059c894a0c211e.jpg'})` }}>

                                    <div>
                                        <Text fw={500} className={classes.category} size="xs">
                                            {form.values.eventCatergory || 'Event Category'}
                                        </Text>
                                        <Title fw={700} order={3} className={classes.title}>
                                            {form.values.eventName || 'Event Name'}
                                        </Title>
                                        <Text fw={400} mt="sm" className={classes.description}>
                                            {form.values.eventDescription || 'Event Description'}
                                        </Text>
                                    </div>
                                    <div>
                                        <Text fw={500} mb="sm" className={classes.category} size="xs">
                                            {form.values.eventStart || 'DD MMM YYYY hh:mm A - hh:mm A'}
                                        </Text>
                                        <Anchor href={form.values.eventStart}>
                                            <Button variant="white" color="dark" className={classes.rsvpButton}>
                                                Register
                                            </Button>
                                        </Anchor>
                                    </div>
                                </Paper>
                        </SimpleGrid>
                    </Container>
                    <Divider mt="xl" mb="xl"></Divider>
                    <CardsCarousel></CardsCarousel>
                </AdminLayout>
            </AuthorizeView>
        </MantineProvider>
    );
};

export default ManageEvents;
