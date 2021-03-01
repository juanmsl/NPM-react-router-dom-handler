import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {

    const links = [
        {
            label: 'Home',
            to: '/home',
            sublinks: [
                {
                    label: 'Overview',
                    to: ''
                },
                {
                    label: 'About',
                    to: '/about'
                }
            ]
        },
        {
            label: 'Contact',
            to: '/contact',
            sublinks: [
                {
                    label: 'Overview',
                    to: ''
                },
                {
                    label: 'About',
                    to: '/about'
                },
                {
                    label: 'User',
                    to: '/user'
                }
            ]
        }
    ];

    const renderLinks = (links, prePath = '') => (
        links.map(({label, to, sublinks}, key) => (
            <li key={key}>
                <NavLink
                    exact={prePath !== ''}
                    to={`${prePath}${to}`}
                    activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }}
                >
                    {label}
                </NavLink>
                {
                    sublinks ?
                    (
                        <ul>
                            {renderLinks(sublinks, to)}
                        </ul>
                    ) : null
                }
            </li>
        ))
    );

    return (
        <nav>
            <ul>
                {renderLinks(links)}
            </ul>
        </nav>
    );
};

export default Navbar;