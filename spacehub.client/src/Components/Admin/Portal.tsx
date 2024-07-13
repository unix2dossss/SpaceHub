import AuthorizeView from "./AuthorizeView.tsx";
import Home from "../Homepage/Home.tsx";
import AdminLayout from "./AdminLayout.tsx";

function Portal() {
    return (
        <AuthorizeView>
            <AdminLayout>
                <Home />
            </AdminLayout>
        </AuthorizeView>
    );
}

export default Portal;