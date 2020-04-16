import React from 'react'
import { Navbar, NavItem, Icon } from 'react-materialize'
export default function Header() {
    return (
        <Navbar
            alignLinks="right"
            brand={<a className="brand-logo" href="#">P2P Video</a>}
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
        >
        </Navbar>
    )
}
