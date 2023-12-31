
import React, { useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import {Menu , Container, Button} from "semantic-ui-react";
import SignedOutMenu from "./SignedOutMenu";
import SignedInMenu from "./SignedInMenu";
export default function NavBar({setFormOpen}) {
    const [authenticated, setAuthenticated] = useState(false)
    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item as={NavLink} exact to='/' header>
                    <img src="/assets/logo.png" alt ="logo" style={{marginRight: 15}}/>
                    Re-vents
                </Menu.Item>
                <Menu.Item as={NavLink} to='/events' name="Events" />
                {authenticated &&
                <Menu.Item as={NavLink} to='/createEvent'>
                    <Button positive inverted content="Create Event" />
                </Menu.Item>
                }
                {authenticated ?  <SignedInMenu setAuthenticated={setAuthenticated}/>: <SignedOutMenu setAuthenticated={setAuthenticated}/>}
                
                
            </Container>
        </Menu>
    )
}