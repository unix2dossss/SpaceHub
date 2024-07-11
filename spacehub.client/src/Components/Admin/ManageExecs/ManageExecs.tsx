import { MantineProvider, TextInput } from '@mantine/core';
import classes from './ManageExecs.module.css';
import AuthorizeView from '../AuthorizeView';
import AdminLayoutV2 from '../AdminLayoutV2';
import { useForm } from '@mantine/form';

function ManageExecs() {
    const form = useForm({ mode: 'uncontrolled' });

    const handleSubmit = (values: typeof form.values) => {
        console.log(values);
    };

    return (
        <MantineProvider forceColorScheme='dark'>
            <AuthorizeView>
                <AdminLayoutV2>
                    <form onSubmit={form.onSubmit(handleSubmit)}>
                            <TextInput
                                label="Executive Name"
                                placeholder="John Doe"
                                {...form.getInputProps('execName')}
                                required
                            />
                            <TextInput
                                label="Executive Role"
                                placeholder="Marketing Executive"
                                {...form.getInputProps('execRole')}
                                required
                            />
                            <TextInput
                                label="Executive LinkedIn"
                                placeholder="https://www.linkedin.com/in/john-doe/"
                                {...form.getInputProps('execLinkedIn')}
                                required
                            />
                            <TextInput
                                label="Favourite Celestial Object"
                                placeholder="https://www.linkedin.com/in/john-doe/"
                                {...form.getInputProps('execFavObject')}
                                required
                            />
                    </form>
                </AdminLayoutV2>
            </AuthorizeView>
        </MantineProvider>
    );
}
export default ManageExecs;