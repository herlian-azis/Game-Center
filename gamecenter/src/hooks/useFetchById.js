import { useState, useEffect } from 'react'

const useFetchById = url => {
    const [data, setData] = useState({genres:['undin']})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        fetch(url)
        .then(respone=>respone.json())
        .then(data => setData(data))
        .catch(err => setError(err))
        .finally(()=>{setLoading(false)})
    },[url])

    return [data ,error,loading]
}

export default useFetchById
