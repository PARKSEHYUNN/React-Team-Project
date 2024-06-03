import React from "react";
import "./A145.css";
import A145_Question from "./A145_Question";
import {Link} from "react-router-dom";

const A145 = (props) => {
    return (
        <div className="main">
            <img src="/a_1_45.png" className="questionImage"></img>
            <A145_Question></A145_Question>
            <A145_Question></A145_Question>
            <A145_Question></A145_Question>
            <A145_Question></A145_Question>
            <A145_Question></A145_Question>
            <Link to={"/A413"}>A 4 13</Link>
        </div>
    );
};

export default A145;