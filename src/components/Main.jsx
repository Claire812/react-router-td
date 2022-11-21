import { Route, Routes } from "react-router-dom";
import CssDefinition from "./CssDefinition";
import Home from "./Home";
import HomeDetails from "./HomeDetails";
import HtmlDefinition from "./HtmlDefinition";
import JsDefinition from "./JsDefinition";

export default function Main(){
    return (
        <main>
            <Routes>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/Home/:id" element={<HomeDetails/>}/>
                <Route path="/Html" element={<HtmlDefinition/>}/>
                <Route path="/Css" element={<CssDefinition/>}/>
                <Route path="/Js" element={<JsDefinition/>}/>
            </Routes>
        </main>
    )
}