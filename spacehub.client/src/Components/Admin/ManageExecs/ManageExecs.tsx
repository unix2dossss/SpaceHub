import { Button, MantineProvider, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import classes from './ManageExecs.module.css';
import AuthorizeView from '../AuthorizeView';
import AdminLayoutV2 from '../AdminLayoutV2';
import ExecInterface from './ExecInterface'

function ManageExecs() {
    return (
        <MantineProvider forceColorScheme="dark">
            <AuthorizeView>
                <AdminLayoutV2>
                    <ExecInterface></ExecInterface>
                </AdminLayoutV2>
            </AuthorizeView>
        </MantineProvider>
    );
}

export default ManageExecs;