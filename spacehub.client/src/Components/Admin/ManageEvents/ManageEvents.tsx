//import {
//    TextInput,
//    Textarea,
//    NativeSelect,
//    FileInput,
//    Paper,
//    Title,
//    Text,
//    Button,
//    Container,
//    SimpleGrid,
//    MantineProvider,
//    Divider
//} from '@mantine/core';
//import { useState } from 'react';
//import classes from './ManageEvents.module.css';
//import AuthorizeView from '../AuthorizeView';
//import AdminLayout from '../AdminLayout';
//import CardsCarousel from '../../Events/CardsCarousel';

//function ManageEvents() {
//    const [eventCategory, setEventCategory] = useState('');
//    const [eventName, setEventName] = useState('');
//    const [eventDescription, setEventDescription] = useState('');
//    const [eventLink, setEventLink] = useState('');
//    const [image, setImage] = useState<File | null>(null);

//    return (
//        <MantineProvider forceColorScheme='dark'>
//            <AuthorizeView>
//                <AdminLayout>
//                    <Container>
//                        <SimpleGrid cols={2} spacing="lg">
//                            <div>
//                                <NativeSelect
//                                    label="Event Category"
//                                    data={['Workshop', 'Networking', 'Social', 'Lecture', 'Field Trip']}
//                                    value={eventCategory}
//                                    onChange={(event) => setEventCategory(event.currentTarget.value)}
//                                />

//                                <TextInput
//                                    label="Event Name"
//                                    placeholder="Enter event name"
//                                    value={eventName}
//                                    onChange={(event) => setEventName(event.currentTarget.value)}
//                                />

//                                <Textarea
//                                    label="Event Description"
//                                    placeholder="Enter event description"
//                                    value={eventDescription}
//                                    onChange={(event) => setEventDescription(event.currentTarget.value)}
//                                />

//                                <TextInput
//                                    label="Event Link"
//                                    placeholder="Enter event link"
//                                    value={eventLink}
//                                    onChange={(event) => setEventLink(event.currentTarget.value)}
//                                />

//                                <FileInput
//                                    label="Upload Card Background"
//                                    placeholder="Upload image"
//                                    onChange={setImage}
//                                />
//                            </div>

//                            <Paper shadow="md" radius="lg" p="md" withBorder className={classes.cardPreview}
//                                style={{ backgroundImage: image ? `url(${URL.createObjectURL(image)})` : 'none' }}>
//                                <div>
//                                    <Text className={classes.category} size="xs">
//                                        {eventCategory || 'Event Category'}
//                                    </Text>
//                                    <Title order={3} className={classes.title}>
//                                        {eventName || 'Event Name'}
//                                    </Title>
//                                    <Text className={classes.description}>
//                                        {eventDescription || 'Event Description'}
//                                    </Text>
//                                    {eventLink && (
//                                        <Button component="a" href={eventLink} className={classes.link}>
//                                            Event Link
//                                        </Button>
//                                    )}
//                                </div>
//                            </Paper>
//                        </SimpleGrid>
//                    </Container>
//                    <Divider mt="xl"></Divider>
//                    <CardsCarousel></CardsCarousel>
//                </AdminLayout>
//            </AuthorizeView>
//        </MantineProvider>
//    );
//};

//export default ManageEvents;


import {
    TextInput,
    Textarea,
    NativeSelect,
    FileInput,
    Paper,
    Title,
    Text,
    Button,
    Container,
    SimpleGrid,
    MantineProvider,
    Divider,
    Anchor,
    Box,
    Autocomplete
} from '@mantine/core';
import { useState } from 'react';
import classes from './ManageEvents.module.css';
import AuthorizeView from '../AuthorizeView';
import AdminLayout from '../AdminLayout';
import CardsCarousel from '../../Events/CardsCarousel';
import { useForm } from '@mantine/form';

function ManageEvents() {

    const form = useForm({
        initialValues: {
            eventName: '',
            eventCatergory: '',
            eventDescription: '',
            eventLink: '',
            eventCardBG: '',
            eventTime: '2024-11-30T19:00:00Z',
            eventPast: true
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
        console.log(values);

        try {
            const response = await fetch('/api/Event', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
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

    return (
        <MantineProvider forceColorScheme='dark'>
            <AuthorizeView>
                <AdminLayout>
                    <Container mt="xl">
                        <SimpleGrid cols={2} spacing="xl">
                            <form onSubmit={form.onSubmit(handleSubmit)}>
                                <Autocomplete
                                    label="Event Category"
                                    placeholder="Select an event category"
                                    data={['Networking', 'Workshop', 'Seminar', 'Star Gazing', 'Academia', 'Community Outreach', 'Social']}
                                    {...form.getInputProps('eventCatergory')}
                                />

                                <TextInput
                                    label="Event Name"
                                    placeholder="Name your event"
                                    {...form.getInputProps('eventName')}
                                />

                                <Textarea
                                    label="Event Description"
                                    placeholder="Describe your event"
                                    {...form.getInputProps('eventDescription')}
                                />
                                <TextInput
                                    label="Card Background Link"
                                    placeholder="Provide a URL for the card background"
                                    {...form.getInputProps('eventCardBG')}
                                />
                                <TextInput
                                    label="Event Registration Link"
                                    placeholder="Enter the registration link"
                                    {...form.getInputProps('eventLink')}
                                />
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
                                    <Anchor href={form.values.eventLink}>
                                        <Button variant="white" color="dark" className={classes.rsvpButton}>
                                            Register
                                        </Button>
                                    </Anchor>
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
