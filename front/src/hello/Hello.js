import {hello} from "./api";
import {useEffect, useState} from "react";
import axios from "axios";

function Hello(name){
    const [value,setValue] = useState("Hello world!!!");
    useEffect(()=>{
        hello().then(res=>{
            console.log(res);
        });
    })
    return(
        <di>
            {value}
        </di>
    )
}
export default Hello;