import { useState, useEffect } from 'react'

const useFetchById = url => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setLoading(true)
        fetch(url)
        .then(respone=>respone.json())
        .then(data => setData(data))
        .catch(err => setError(err))
        .finally(()=>{setLoading(false)})
    },[url])

    return [data ,error,loading]
}

export default useFetchById
