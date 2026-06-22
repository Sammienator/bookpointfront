import React, { useEffect, useState } from 'react';
import { fetchBooks, createBook, updateBook, deleteBook } from '../api';
import BookForm from '../components/BookForm';

const AdminPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formLoading, setFormLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingBook, setEditingBook] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const loadBooks = async () => {
    try {
      setLoading(true);
      const res = await fetchBooks();
      setBooks(res.data.data);
    } catch {
      setError('Failed to load books.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadBooks(); }, []);

  const notify = (msg, isError = false) => {
    if (isError) setError(msg);
    else setSuccess(msg);
    setTimeout(() => { setError(''); setSuccess(''); }, 3500);
  };

  const handleSubmit = async (formData) => {
    setFormLoading(true);
    try {
      if (editingBook) {
        await updateBook(editingBook._id, formData);
        notify('Book updated successfully!');
      } else {
        await createBook(formData);
        notify('Book added successfully!');
      }
      setShowForm(false);
      setEditingBook(null);
      loadBooks();
    } catch (err) {
      notify(err.response?.data?.message || 'Something went wrong.', true);
    } finally {
      setFormLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteBook(id);
      notify('Book deleted.');
      setDeleteConfirm(null);
      loadBooks();
    } catch {
      notify('Failed to delete book.', true);
    }
  };

  const openEdit = (book) => {
    setEditingBook(book);
    setShowForm(true);
  };

  const openAdd = () => {
    setEditingBook(null);
    setShowForm(true);
  };

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-4xl font-bold text-ink">Admin Panel</h1>
          <p className="text-gray-500 mt-1 text-sm">Manage your bookstore inventory</p>
        </div>
        <button
          onClick={openAdd}
          className="bg-ink text-parchment px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-book transition-colors flex items-center gap-2"
        >
          + Add Book
        </button>
      </div>

      {/* Notifications */}
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 rounded-xl p-3 mb-4 text-sm text-center">
          ✅ {success}
        </div>
      )}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-3 mb-4 text-sm text-center">
          ❌ {error}
        </div>
      )}

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-parchment rounded-2xl shadow-2xl w-full max-w-md p-6 max-h-[90vh] overflow-y-auto">
            <h2 className="font-serif text-2xl font-bold text-ink mb-5">
              {editingBook ? 'Edit Book' : 'Add New Book'}
            </h2>
            <BookForm
              book={editingBook}
              onSubmit={handleSubmit}
              onCancel={() => { setShowForm(false); setEditingBook(null); }}
              loading={formLoading}
            />
          </div>
        </div>
      )}

      {/* Delete Confirm Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full text-center">
            <div className="text-4xl mb-3">🗑️</div>
            <h3 className="font-serif text-xl font-bold text-ink mb-2">Delete Book?</h3>
            <p className="text-gray-500 text-sm mb-5">
              Are you sure you want to delete <strong>"{deleteConfirm.title}"</strong>? This cannot be undone.
            </p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteConfirm(null)} className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-medium hover:bg-gray-50">
                Cancel
              </button>
              <button onClick={() => handleDelete(deleteConfirm._id)} className="flex-1 py-2.5 rounded-xl bg-red-600 text-white text-sm font-semibold hover:bg-red-700">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Books Table */}
      {loading ? (
        <div className="text-center py-20 text-gray-400">
          <div className="text-4xl mb-3 animate-pulse">📦</div>
          <p>Loading inventory…</p>
        </div>
      ) : books.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <div className="text-4xl mb-3">📭</div>
          <p>No books yet. Add your first one!</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
          <table className="w-full text-sm">
            <thead className="bg-ink text-parchment">
              <tr>
                <th className="text-left px-5 py-3 font-semibold">Cover</th>
                <th className="text-left px-5 py-3 font-semibold">Title / Author</th>
                <th className="text-left px-5 py-3 font-semibold hidden md:table-cell">Genre</th>
                <th className="text-left px-5 py-3 font-semibold">Price</th>
                <th className="text-left px-5 py-3 font-semibold">Stock</th>
                <th className="text-right px-5 py-3 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, i) => (
                <tr key={book._id} className={`border-t border-gray-50 hover:bg-parchment/40 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}>
                  <td className="px-5 py-3">
                    <div className="w-10 h-14 rounded-lg overflow-hidden bg-gray-100">
                      {book.image ? (
                        <img src={`http://localhost:5000${book.image}`} alt={book.title} className="w-full h-full object-cover" onError={(e) => { e.target.src = 'https://via.placeholder.com/40x56?text=?'; }} />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-300 text-lg">📕</div>
                      )}
                    </div>
                  </td>
                  <td className="px-5 py-3">
                    <div className="font-semibold text-ink">{book.title}</div>
                    <div className="text-gray-400 text-xs italic">{book.author}</div>
                  </td>
                  <td className="px-5 py-3 hidden md:table-cell text-gray-500">{book.genre}</td>
                  <td className="px-5 py-3 font-semibold text-amber-warm">${parseFloat(book.price).toFixed(2)}</td>
                  <td className="px-5 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${book.stock > 5 ? 'bg-green-100 text-green-700' : book.stock > 0 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                      {book.stock}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-right">
                    <div className="flex gap-2 justify-end">
                      <button onClick={() => openEdit(book)} className="px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-medium hover:bg-gray-50 transition-colors">
                        Edit
                      </button>
                      <button onClick={() => setDeleteConfirm(book)} className="px-3 py-1.5 rounded-lg bg-red-50 border border-red-100 text-red-600 text-xs font-medium hover:bg-red-100 transition-colors">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-5 py-3 border-t border-gray-100 text-xs text-gray-400">
            {books.length} book{books.length !== 1 ? 's' : ''} in inventory
          </div>
        </div>
      )}
    </main>
  );
};

export default AdminPage;