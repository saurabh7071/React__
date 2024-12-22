import {useEffect, useState} from 'react'

const useCurrencyInfo = (currency) =>{
    const [data, setData] = useState({})

    useEffect(() => {
        // fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`) old api link
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        .catch((error) => console.log("Error fetching currency data : ", error));
    }, [currency])
    
    console.log("data coming from api : ",data)
    return data
}

export default useCurrencyInfo;