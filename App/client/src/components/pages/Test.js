
import { useEffect, useState } from "react";

const Test = () => {
    const [test, setData] = useState();

    async function getData() {
        const response = await fetch("http://localhost:5000/test/");
        const data = await response.json();
        setData(data)
    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <>
            <h1>Data:</h1>
            <h2>{test.text}</h2>
        </>
    )
}

export default Test;