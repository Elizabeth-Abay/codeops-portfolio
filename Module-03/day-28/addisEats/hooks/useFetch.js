import { useState, useEffect } from 'react';

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchData() {
        try {
            setLoading(true);
            setError(null);
            const res = await fetch(url, { signal: controller.signal });
            if (!res.ok) throw new Error('Failed to fetch menu data');
            const result = await res.json();
            setData(result);
        } catch (err) {
            if (err.name !== 'AbortError') {
            setError(err.message);
            }
        } finally {
            setLoading(false);
        }
        }

        fetchData();

        return () => controller.abort();
    }, [url]);

    return { data, loading, error };
}