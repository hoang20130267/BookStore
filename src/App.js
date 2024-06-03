import 'mdbreact/dist/css/mdb.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import "./customer/assets/css/style.css";
import "./customer/assets/css/popup.css";
import './App.css';
import {Route, Routes} from "react-router-dom";
import Router from "./router/Router";


function App() {
    return (
        <div>
            <Routes>
                <Route path='/*' element={<Router/>}></Route>
            </Routes>
        </div>
    );
}

export default App;