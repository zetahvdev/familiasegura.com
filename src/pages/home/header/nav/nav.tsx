import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './sass/nav.scoped.css';
import TextResponsive from 'src/components/TextResponsive/TextResponsive';

type NavigationPros = {
    // List of nav items with respective URLs
    navlinkarr: [string]
}

const Navigation = ({navlinkarr}: NavigationPros) => {
    // Creates a itemid for the Nav Links:
    const navlinkitems = addIndexToDict(navlinkarr);

    return (
        <div className="Navigation px-lg-4 px-3">
            <Navbar expand="md">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={"ml-auto justify-content-end"}>
                        {   
                            // Creates the Nav Links with props
                            navlinkitems.map(navlink => (
                                <Nav.Link href="#" key={navlink.id} >
                                    <h6 className="mx-4 my-0">
                                        <TextResponsive
                                            content={navlink.navlink}
                                            size="small"
                                            color="white"
                                            type="normal"
                                        ></TextResponsive>
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

function addIndexToDict(arraytoconvert: string[]) {
    const indexArray = [];
    for (let i = 0; i < arraytoconvert.length; i++) {
        indexArray.push(
            {id: i, navlink: arraytoconvert[i]}
        );
    }

    return indexArray
}