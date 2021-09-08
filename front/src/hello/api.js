import axios from "axios";
function hello(){
    return axios.get("http://localhost:8080/")
}

export {
    hello
}