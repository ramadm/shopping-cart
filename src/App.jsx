import "./App.css";
import Nav from "./Nav.jsx";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <div>
            <Nav />
            <Outlet />
        </div>
    );
}

export default App;
