import React, {useState, useEffect} from 'react'
import axios from './axios'

function Row({title, fetchUrl}) {
    const [movies, setMovies] = useState([]);

    // runs based on a specific condition
    useEffect(() => {
        // if [], run once when the row loads, and do not run again
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            console.log(request);
            return request;
        }
        fetchData()
    }, [movies])

    return (
        <div>
            {/* Title */}
            <h2>{title}</h2>

            {/* container --> posters */}

        </div>
    )
}

export default Row
