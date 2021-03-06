import '../styles/main.scss';
import {useEffect, useState} from "react";
import { Switch, Route } from 'react-router';
// Importing Pages
import Index from '../pages/Index';
import Show from '../pages/Show';
import ByType from '../pages/ByType';
import TypeResults from '../pages/TypeResults';
import ByBrand from '../pages/ByBrand';
import BrandResults from '../pages/BrandResults';
import Cart from '../pages/Cart';

function Main(props) {
    // State to hold all makeup
    const [allMakeup, setAllMakeup] = useState(null)

    // Variable to hold API URL
    const URL = "https://makeup-api.herokuapp.com/api/v1/products.json/"

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
                {/* Home Page*/}
                <Route exact path="/">
                    <Index allMakeup={allMakeup}/>
                </Route>

                {/* By Type Pages*/}
                <Route exact path="/type">
                    <ByType/>
                </Route>
                <Route path="/type/:type" render={(rp) => (
                    <TypeResults {...rp} allMakeup={allMakeup}/>
                )}/>

                {/* By Brand Pages*/}
                <Route exact path="/brand">
                    <ByBrand allMakeup={allMakeup}/>
                </Route>
                <Route path="/brand/:brand" render={(rp) => (
                    <BrandResults {...rp} allMakeup={allMakeup}/>
                )}/>

                {/* Cart Page*/}
                <Route path="/cart">
                    <Cart/>
                </Route>

                {/* Show Page*/}
                <Route path="/products/:id" render={(rp) => (
                    <Show {...rp} allMakeup={allMakeup}/>
                )}/>
            </Switch>
        </main>
    )
}

export default Main