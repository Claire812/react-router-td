import { Routes, useParams, Route } from "react-router-dom";
import Home from "./Home";

export default function HomeDetails(){
    const { id } = useParams();
    return (
        <div>
       <div>
           <Home/>   
        </div>
        <div>Details of article #{id}</div>
        </div>
    )
}