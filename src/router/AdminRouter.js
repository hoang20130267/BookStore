import {Route, Routes} from "react-router-dom";
import AdminDashboard from "../admin/AdminDashboard";

const AdminRouter = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<AdminDashboard/>}/>
            </Routes>
        </div>
    );
}
export default AdminRouter;