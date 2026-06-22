import { useEffect, useState } from 'react';

const API_BASE = 'http://localhost:5000/api';

// Fetches the canonical category list from the backend (single source of
// truth — see backend/constants/categories.js) instead of keeping a
// duplicate hardcoded list in the frontend.
export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;

    fetch(`${API_BASE}/categories`)
      .then((res) => res.json())
      .then((json) => {
        if (!cancelled) setCategories(json.data || []);
      })
      .catch(() => {
        if (!cancelled) setError('Could not load categories');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { categories, loading, error };
};