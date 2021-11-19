import '../styles/main.scss';
import {useEffect, useState} from "react";
import { Switch, Route } from 'react-router';
import Index from '../pages/Index';
import Show from '../pages/Show';


function Main(props) {
    // State to hold all makeup
    const [allMakeup, setAllMakeup] = useState(null)

    // Variable to hold API URL
    const URL = "http://makeup-api.herokuapp.com/api/v1/products.json"

    // Function to get All Makeup
    const getAllMakeup = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setAllMakeup(data)
    }

    useEffect(() => getAllMakeup(), [])

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Index allMakeup={allMakeup}/>
                </Route>
                <Route path="/:id" render={(rp) => {
                    <Show {...rp} allMakeup={allMakeup}/>
                }}/>
            </Switch>
        </main>
    )
}

export default Main