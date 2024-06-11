import React from "react";
import "./A145.css";
import A145_Question from "./A145_Question";
import {Link} from "react-router-dom";

const A145 = (props) => {
    return (
        <div className="main">
            <div className="QuestionBox">
                <a>다음 {"<"}보기{">"}를 보고 빈칸에 알맞은 부호를 넣어보세요.</a>
            </div>
            
            <A145_Question></A145_Question>
            <A145_Question></A145_Question>
            <A145_Question></A145_Question>
            <A145_Question></A145_Question>
            <A145_Question></A145_Question>
        </div>
    );
};

export default A145;