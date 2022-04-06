import { useEffect, useState } from "react";
import axios from 'axios'

const Test = () => {
    const [apiResponse, getApiResponse] = useState("");

    function getData() {
        axios.get("http://localhost:5000/test").then((res) => {
            const response = res.data;
            getApiResponse(response);
          });
    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <>
            <h1>Data:</h1>
            <h2>{apiResponse}</h2>
        </>
    )
}

export default Test;