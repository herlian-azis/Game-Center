import { useState, useEffect } from 'react'

const useFetch = url => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        fetch(url)
        .then(respone=>respone.json())
        .then(data => setData(data.results))
        .catch(err => setError(err))
        .finally(()=>{setLoading(false)})
    },[url])

    return [data ,error,loading]
}

export default useFetch
