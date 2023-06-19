import React, { FC, HtmlHTMLAttributes, useContext, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import './preview.css';

const Preview: FC = () => {

    return (
        <div className="Preview">
            <div className="container">
                <div className="previewBody">
                    <div className="previeweText">
                        <div className="previewTitle">Analytics tool <div className="previewGreen">for online stores.</div>

                        </div>
                        <div className="previewSubtitle">Register for free
                        </div>
                        <div className="previewItems">
                            <div className="previewIconContent">
                                <div className="previewStats"></div>
                                <div>STATS</div>
                            </div>

                            <div className="previewIconContent">
                                <div className="previewSearch"></div>
                                <div>SEARCH</div>
                            </div>

                            <div className="previewIconContent">
                                <div className="previewData"></div>
                                <div>DATA</div>
                            </div>

                        </div>
                    </div>
                    <div className="previewLogo">
                        <div className="previewProm"></div>
                        <div className="previewEldorado"></div>
                        <div className="previewComfy"></div>
                        <div className="previewRozetka"></div>
                        <div className="previewGraph"></div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default observer(Preview) 