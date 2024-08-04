import 'mdbreact/dist/css/mdb.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import "./customer/assets/css/popup.css";
import './App.css';
import {Route, Routes} from "react-router-dom";
import Router from "./router/Router";
import { Helmet } from 'react-helmet';


function App() {
    return (
        <div>
            <Helmet>
                <link rel="stylesheet" href="https://host-css-9e18e.web.app/style.css" />
            </Helmet>
            <Routes>
                <Route path='/*' element={<Router/>}></Route>
            </Routes>
        </div>
    );
}

export default App;