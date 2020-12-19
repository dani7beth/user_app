import { NavLink } from "react-router-dom";
import {Menu} from 'semantic-ui-react';

export default () =>{
    return(
        <Menu>
            <NavLink to="/">
                <Menu.Item>Home</Menu.Item>
            </NavLink>
            <NavLink to='/users'>
                    <Menu.Item>Users</Menu.Item>
            </NavLink>
        </Menu>
    ) 
 }