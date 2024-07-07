import AuthorizeView from "./AuthorizeView.tsx";
import AdminLayoutV2 from "./AdminLayoutV2.tsx";
import Membership from "../Membership/Membership.tsx";

function ManageMembers() {
    return (
        <AuthorizeView>
            <AdminLayoutV2>
                <Membership/>
            </AdminLayoutV2>
        </AuthorizeView>
    );
}

export default ManageMembers;