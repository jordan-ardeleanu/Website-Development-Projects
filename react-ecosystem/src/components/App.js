import React from "react";
import { About } from "./About";
import { Header } from "./Header";
import { Home } from "./Home";
import { ItemDetails } from "./ItemDetails";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = (props) => {
return (
    <Router>
        <div>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/about" element={<About />}></Route>
                <Route exact path="/items/:itemId" element={<ItemDetails />}></Route>
            </Routes>
        </div>
    </Router>
);
};

export default App;