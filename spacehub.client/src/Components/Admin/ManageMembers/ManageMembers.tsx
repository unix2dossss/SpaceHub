import AuthorizeView from '../AuthorizeView.tsx';
import AdminLayout from "../AdminLayout.tsx";
import { MantineProvider } from '@mantine/core';
import classes from './ManageMembers.module.css';
import SHLogo from '../../SpaceHubLogo/SHLogo.tsx';


function ManageEvents() {
    return (
        <MantineProvider forceColorScheme='dark'>
            <AuthorizeView>
                <AdminLayout>
                    test
                </AdminLayout>
            </AuthorizeView>
        </MantineProvider>
    );
}

export default ManageEvents;