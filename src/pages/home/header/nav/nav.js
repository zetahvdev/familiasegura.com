import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './sass/nav.scoped.css';
import Text from '../../../../../src/components/text.js';

const Navigation = ({fix, hasnonavcollapse, navlinkarr}) => {
    // Creates a itemid for the Nav Links:
    const navlinkitems = [];
    for (let i = 0; i < navlinkarr.length; i++) {
        navlinkitems.push(
            {id: i, navlink: navlinkarr[i]}
        );
    }
    console.log(navlinkitems);

    return (
        <div className="Navigation px-lg-4 px-3">
            <Navbar expand="md">
                <Navbar.Toggle aria-controls="basic-navbar-nav" className={hasnonavcollapse}/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={"ml-auto justify-content-end navi__fix-" + fix}>
                        {   
                            // Creates the Nav Links with props
                            navlinkitems.map(navlink => (
                                <Nav.Link href="#">
                                    <h6 className="m-0">
                                        <Text
                                            key={navlink.id}
                                            content={navlink.navlink}
                                            size="small"
                                            color="white"
                                        ></Text>
                                    </h6>
                                </Nav.Link>
                            ))
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navigation;