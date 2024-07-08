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
    Group,
    MantineProvider
} from '@mantine/core';
import { useState } from 'react';
import classes from './ManageEvents.module.css';
import AuthorizeView from '../AuthorizeView';
import AdminLayoutV2 from '../AdminLayoutV2';

function ManageEvents() {
    const [eventCategory, setEventCategory] = useState('');
    const [eventName, setEventName] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [eventLink, setEventLink] = useState('');
    const [image, setImage] = useState(null);

    return (
        <MantineProvider forceColorScheme='dark'>
            <AuthorizeView>
                <AdminLayoutV2>
                    <Container>
                        <SimpleGrid cols={2} spacing="lg">
                            <div>
                                <NativeSelect
                                    label="Event Category"
                                    data={['Workshop', 'Networking', 'Social', 'Lecture', 'Field Trip']}
                                    value={eventCategory}
                                    onChange={(event) => setEventCategory(event.currentTarget.value)}
                                />

                                <TextInput
                                    label="Event Name"
                                    placeholder="Enter event name"
                                    value={eventName}
                                    onChange={(event) => setEventName(event.currentTarget.value)}
                                />

                                <Textarea
                                    label="Event Description"
                                    placeholder="Enter event description"
                                    value={eventDescription}
                                    onChange={(event) => setEventDescription(event.currentTarget.value)}
                                />

                                <TextInput
                                    label="Event Link"
                                    placeholder="Enter event link"
                                    value={eventLink}
                                    onChange={(event) => setEventLink(event.currentTarget.value)}
                                />

                                <FileInput
                                    label="Upload Card Background"
                                    placeholder="Upload image"
                                    onChange={setImage}
                                />
                            </div>

                            <Paper shadow="md" radius="lg" p="md" withBorder className={classes.cardPreview}>
                                <div>
                                    <Text className={classes.category} size="xs">
                                        {eventCategory || 'Event Category'}
                                    </Text>
                                    <Title order={3} className={classes.title}>
                                        {eventName || 'Event Name'}
                                    </Title>
                                    <Text className={classes.description}>
                                        {eventDescription || 'Event Description'}
                                    </Text>
                                    {eventLink && (
                                        <Button component="a" href={eventLink} className={classes.link}>
                                            Event Link
                                        </Button>
                                    )}
                                </div>
                                {image && (
                                    <img src={URL.createObjectURL(image)} alt="Card Background" className={classes.image} />
                                )}
                            </Paper>
                        </SimpleGrid>
                    </Container>
                </AdminLayoutV2>
            </AuthorizeView>
        </MantineProvider>
    );
};

export default ManageEvents;