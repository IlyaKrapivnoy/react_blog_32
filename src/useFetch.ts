import { useState, useEffect } from 'react'
  
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let abortCont;

        const fetchData = async () => {
            abortCont = new AbortController();

            try {
                const res = await fetch(url, { signal: abortCont.signal });

                if (!res.ok)
                    throw Error(
                        "hahah couldn't fetch the data from this resource"
                    );

                const data = await res.json();

                setData(data);
                setIsLoading(false);
                setError(null);
            } catch (err) {
                if (err.name === 'AbortError') console.log('Fetch aborted');
                else {
                    setIsLoading(false);
                    setError(err.message);
                }
            }
        };

        fetchData();

        return () => abortCont && abortCont.abort();
    }, [url]);

    return { data, isLoading, error };
}

export default useFetch
