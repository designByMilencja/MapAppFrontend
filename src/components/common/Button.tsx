import React from "react";
import './Button.css';
import {Link} from "react-router-dom";
interface Props {
    text:string;
    to?: string;
}
export const Button = (props:Props) => (
    props.to
    ? <Link to={props.to}>{props.text}</Link> :
   <button>{props.text}</button>
);
