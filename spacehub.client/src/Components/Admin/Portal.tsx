import AuthorizeView from "./AuthorizeView.tsx";
import Home from "../Homepage/Home.tsx";
import AdminLayoutV2 from "./AdminLayoutV2.tsx";

function Portal() {
    return (
        <AuthorizeView>
            <AdminLayoutV2>
                <Home />
            </AdminLayoutV2>
        </AuthorizeView>
    );
}

export default Portal;