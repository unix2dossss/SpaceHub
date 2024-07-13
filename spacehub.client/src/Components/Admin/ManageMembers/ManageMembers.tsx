import AuthorizeView from '../AuthorizeView.tsx';
import AdminLayoutV2 from "../AdminLayoutV2.tsx";
import { MantineProvider } from '@mantine/core';
import classes from './ManageMembers.module.css';
import SHLogo from '../../SpaceHubLogo/SHLogo.tsx';


function ManageEvents() {
    return (
        <MantineProvider forceColorScheme='dark'>
            <AuthorizeView>
                <AdminLayoutV2>
                    test
                </AdminLayoutV2>
            </AuthorizeView>
        </MantineProvider>
    );
}

export default ManageEvents;