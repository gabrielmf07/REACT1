import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function Admin({children}) {
    useEffect(() => {
        const handleResize = () => {
            const body = document.getElementById("body");
            const sideMenu = document.getElementById("menu_side");

            if (window.innerWidth > 760) {
                body.classList.remove("body_move");
                sideMenu.classList.remove("menu__side_move");
            } else {
                body.classList.add("body_move");
                sideMenu.classList.add("menu__side_move");
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const openCloseMenu = () => {
        const body = document.getElementById("body");
        const sideMenu = document.getElementById("menu_side");

        body.classList.toggle("body_move");
        sideMenu.classList.toggle("menu__side_move");
    };

    return (
        <div className='App' id='body'>
            <Header openCloseMenu={openCloseMenu} />
            <Sidebar/>
            <main>
                {children}
            </main>
        </div>
    );
};

export default Admin;
