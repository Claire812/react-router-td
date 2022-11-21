
import { Link, Route, Routes } from "react-router-dom"
import HomeDetails from "./HomeDetails"

export default function Home(){
    return(
        <div>
        <h1>Test home</h1>
            <ul>
                <li>
                    <Link to="/Home/1">article #1</Link>
                </li>
                <li>
                    <Link to="/Home/2">article #2</Link>
                </li>
            </ul>
        </div>
        )
}