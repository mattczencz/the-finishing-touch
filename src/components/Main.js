import '../styles/main.scss';
import {useEffect, useState} from "react";
import { Switch, Route } from 'react-router';
// Importing Pages
import Index from '../pages/Index';
import Show from '../pages/Show';
import ByType from '../pages/ByType';
import ByBrand from '../pages/ByBrand';
import Cart from '../pages/Cart';

function Main(props) {
    // State to hold all makeup
    const [allMakeup, setAllMakeup] = useState(null)

    // Variable to hold API URL
    const URL = "http://makeup-api.herokuapp.com/api/v1/products.json/"

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
                <Route path="/type">
                    <ByType/>
                </Route>
                <Route path="/brand">
                    <ByBrand/>
                </Route>
                <Route path="/cart">
                    <Cart/>
                </Route>
                <Route path="/products/:id" render={(rp) => {
                    <Show {...rp} allMakeup={allMakeup}/>
                }}/>
            </Switch>
        </main>
    )
}

export default Main