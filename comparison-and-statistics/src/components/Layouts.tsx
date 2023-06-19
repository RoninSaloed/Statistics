import React, { FC, HtmlHTMLAttributes, useContext, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import Preview from "./preview/preview";
import Rate from "./rate/rate";
import Menu from "./menu/menu";
import Chart from "./chart/chart";

const Layout: FC = () => {

    return (
        <div className="Layout">
            <Menu />
            <Preview />
            <Rate />
            <Chart />
        </div >
    )
}

export default observer(Layout) 