import AuthorizeView from "./AuthorizeView.tsx";
import AdminLayoutV2 from "./AdminLayoutV2.tsx";
import Events from "../Events/Events.tsx";

function ManageEvents() {
    return (
        <AuthorizeView>
            <AdminLayoutV2>
                <Events/>
            </AdminLayoutV2>
        </AuthorizeView>
    );
}

export default ManageEvents;