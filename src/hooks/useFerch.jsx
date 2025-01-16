import axios from "axios";
import { useEffect, useState } from "react"

export const useFecth = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(null);

    async function fecthData() {
        setLoading(true);
        try {

            const {data: response} = await axios.get(url);
            setData(response)
            setLoading(false);
        } catch (error) {
            setErro(error);
        }
    }

    useEffect(() => {
        fecthData();
    }, [url]);

    return { data, erro, loading };

}