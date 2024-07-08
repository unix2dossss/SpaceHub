import AuthorizeView from '../AuthorizeView.tsx';
import AdminLayoutV2 from "../AdminLayoutV2.tsx";
import { MantineProvider } from '@mantine/core';


function ManageEvents() {
    return (
        <MantineProvider forceColorScheme='dark'>
            <AuthorizeView>
                <AdminLayoutV2>
                    Manage Members
                </AdminLayoutV2>
            </AuthorizeView>
        </MantineProvider>
    );
}

export default ManageEvents;