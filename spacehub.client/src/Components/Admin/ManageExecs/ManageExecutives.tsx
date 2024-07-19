import { Button, MantineProvider, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import classes from './ManageExecs.module.css';
import AuthorizeView from '../AuthorizeView';
import AdminLayout from '../AdminLayout';
import ExecInterface from './ExecInterface'

function ManageExecs() {
    return (
        <MantineProvider forceColorScheme="dark">
            <AuthorizeView>
                <AdminLayout>
                    <ExecInterface></ExecInterface>
                </AdminLayout>
            </AuthorizeView>
        </MantineProvider>
    );
}

export default ManageExecs;