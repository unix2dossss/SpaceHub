import AuthorizeView, { AuthorizedUser } from "./AuthorizeView.tsx";
import { AdminLayout } from "./AdminLayout.tsx";


function Home() {
    return (
        //<AuthorizeView>
            <AdminLayout><Home/></AdminLayout>
        //</AuthorizeView>
    );
}

export default Home;