import React, { FC, HtmlHTMLAttributes, useContext, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import './menu.css';
import { Context } from "../..";
import { Link } from "react-scroll"

const Menu: FC = () => {
    const { store } = useContext(Context)


    return (
        <div className="Menu">
            <div className="container">
                <div className="menuList">
                    <div className="menuLogo">ANALYSE & STATISTIC</div>
                    <nav>
                        <Link to="Chart" spy={true} smooth={true} offset={50} duration={500}>
                            <li>CHART</li>
                        </Link>
                        <Link to="Rate" spy={true} smooth={true} offset={50} duration={500}>
                            <li>INSTRUCTION</li>
                        </Link>

                        <li><button onClick={() => store.logout()}>Log out</button></li>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default observer(Menu) 