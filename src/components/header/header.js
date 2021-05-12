import React, { useState } from 'react';
import *  as Head from './headStyle';

export default function Header() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Head.Wrap>
                <Head.Logo>
                    <img src="./img/tesla.svg" alt="" />
                </Head.Logo>
                <Head.NavWrap>
                    <Head.NavList>
                        <Head.NavItem href="/">MODEL S</Head.NavItem>
                    </Head.NavList>
                    <Head.NavList>
                        <Head.NavItem href="/">MODEL 3</Head.NavItem>
                    </Head.NavList>
                    <Head.NavList>
                        <Head.NavItem href="/">MODEL X</Head.NavItem>
                    </Head.NavList>
                    <Head.NavList>
                        <Head.NavItem href="/">MODEL Y</Head.NavItem>
                    </Head.NavList>
                    <Head.NavList>
                        <Head.NavItem href="/">SOLAR ROOF</Head.NavItem>
                    </Head.NavList>
                    <Head.NavList>
                        <Head.NavItem href="/">SOLAR PANELS</Head.NavItem>
                    </Head.NavList>
                </Head.NavWrap>
                <Head.RNavWrap>
                    <Head.NavList>
                        <Head.NavItem href="/">SHOP</Head.NavItem>
                    </Head.NavList>
                    <Head.NavList>
                        <Head.NavItem href="/">TESLA</Head.NavItem>
                    </Head.NavList>
                    <Head.NavList>
                        <Head.NavItem href="/">ACCOUNT</Head.NavItem>
                    </Head.NavList>
                </Head.RNavWrap>
                <Head.Menu onClick={() => setOpen(!open)} >
                    <Head.MenuIcon />
                </Head.Menu>
            </Head.Wrap>
            {open && <Head.SndNavWrap onClick={() => setOpen(!open)} />}

            {open && <Head.SndNavContent>
                <Head.CloseIcon onClick={() => setOpen(!open)} />
                <Head.SndNavList>
                    <Head.SndNavItem href="/">EXISTING INVENTORY</Head.SndNavItem>
                </Head.SndNavList>
                <Head.SndNavList>
                    <Head.SndNavItem href="/">USED INVENTORY</Head.SndNavItem>
                </Head.SndNavList>
                <Head.SndNavList>
                    <Head.SndNavItem href="/">TRADE - IN</Head.SndNavItem>
                </Head.SndNavList>
                <Head.SndNavList>
                    <Head.SndNavItem href="/">CYBERTRUCK</Head.SndNavItem>
                </Head.SndNavList>
                <Head.SndNavList>
                    <Head.SndNavItem href="/">ROADSTER</Head.SndNavItem>
                </Head.SndNavList>
                <Head.SndNavList>
                    <Head.SndNavItem href="/">SEMI</Head.SndNavItem>
                </Head.SndNavList>
                <Head.SndNavList>
                    <Head.SndNavItem href="/">CHARGING</Head.SndNavItem>
                </Head.SndNavList>
                <Head.SndNavList>
                    <Head.SndNavItem href="/">POWERWALL</Head.SndNavItem>
                </Head.SndNavList>
                <Head.SndNavList>
                    <Head.SndNavItem href="/">COMMERCIAL ENERGY</Head.SndNavItem>
                </Head.SndNavList>
                <Head.SndNavList>
                    <Head.SndNavItem href="/">UTILITIES</Head.SndNavItem>
                </Head.SndNavList>
                <Head.SndNavList>
                    <Head.SndNavItem href="/">TEST DRIVE</Head.SndNavItem>
                </Head.SndNavList>
                <Head.SndNavList>
                    <Head.SndNavItem href="/">FIND US</Head.SndNavItem>
                </Head.SndNavList>
                <Head.SndNavList>
                    <Head.SndNavItem href="/">SUPPORT</Head.SndNavItem>
                </Head.SndNavList>
                <Head.SndNavList>
                    <Head.SndNavItem href="/">UNITED STATES</Head.SndNavItem>
                </Head.SndNavList>
            </Head.SndNavContent>}
        </>

    )
}











