import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchBooks } from '../api';
import BookCard from '../components/BookCard';
import { useCategories } from '../hooks/useCategories';

const StorePage = () => {
  const { categories } = useCategories();
  const [searchParams, setSearchParams] = useSearchParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [genre, setGenre] = useState(searchParams.get('genre') || 'All');

  const loadBooks = async () => {
    try {
      setLoading(true);
      const res = await fetchBooks();
      setBooks(res.data.data);
    } catch (err) {
      setError('Could not load books. Is the server running?');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const handleGenreClick = (g) => {
    setGenre(g);
    const next = new URLSearchParams(searchParams);
    if (g === 'All') {
      next.delete('genre');
    } else {
      next.set('genre', g);
    }
    setSearchParams(next, { replace: true });
  };

  const categoryOptions = ['All', ...categories];

  const filtered = books.filter((b) => {
    const matchesSearch =
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase());
    const matchesGenre = genre === 'All' || b.genre === genre;
    return matchesSearch && matchesGenre;
  });

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="font-serif text-5xl font-bold text-ink mb-3">Curated Reads</h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Hand-picked books for every kind of reader. Timeless stories, fresh perspectives.
        </p>
      </div>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by title or author…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-warm bg-white"
        />
      </div>

      {/* Category filter */}
      <div className="flex gap-2 flex-wrap mb-3">
        {categoryOptions.map((g) => (
          <button
            key={g}
            onClick={() => handleGenreClick(g)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              genre === g ? 'bg-ink text-parchment' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      {!loading && !error && (
        <p className="text-sm text-gray-400 mb-8">
          {filtered.length} {filtered.length === 1 ? 'book' : 'books'}
          {genre !== 'All' ? ` in ${genre}` : ''}
        </p>
      )}

      {/* States */}
      {loading && (
        <div className="text-center py-20 text-gray-400">
          <div className="text-4xl mb-3 animate-pulse">📚</div>
          <p>Loading books…</p>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 text-center">
          {error}
        </div>
      )}

      {!loading && !error && filtered.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          <div className="text-4xl mb-3">🔍</div>
          <p>No books found. Try a different search or category.</p>
        </div>
      )}

      {/* Book Grid */}
      {!loading && !error && filtered.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      )}
    </main>
  );
};

export default StorePage;