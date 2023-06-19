import React, { FC, HtmlHTMLAttributes, useContext, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import './rate.css';

const Rate: FC = () => {

    return (
        <div className="Rate" id="Rate">
            <div>
                <div className="rateTitle">Rating of online stores</div>
                <div className="rateSubtitle">the rating was based on the number of orders over the last month</div>
            </div>

            <div className="container">

                <div className="rateItems">

                    <div className="rateStatic">
                        <div className="rateBody">
                            <li >
                                Rozetka.ua
                            </li>
                            <div className="rateRozetka">
                                <div></div>
                            </div>
                        </div>
                        <div className="rateBody">
                            <li>
                                Eldorado.ua
                            </li>
                            <div className="rateEldorado">
                                <div></div>
                            </div>

                        </div>
                        <div className="rateBody">
                            <li>
                                Prom.ua
                            </li>
                            <div className="rateProm">
                                <div></div>

                            </div>

                        </div>
                        <div className="rateBody">
                            <li>
                                Foxtrot.ua
                            </li>
                            <div className="rateFoxtrot">
                                <div></div>

                            </div>
                        </div>
                        <div className="rateBody">
                            <li>
                                Comfy.ua
                            </li>
                            <div className="rateComfi">
                                <div></div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default observer(Rate) 