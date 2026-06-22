import React, { useState, useEffect } from 'react';
import { useCategories } from '../hooks/useCategories';

const BookForm = ({ book, onSubmit, onCancel, loading }) => {
  const { categories, loading: categoriesLoading } = useCategories();
  const [form, setForm] = useState({
    title: '',
    author: '',
    description: '',
    price: '',
    stock: '',
    genre: 'General',
  });
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState('');

  useEffect(() => {
    if (book) {
      setForm({
        title: book.title || '',
        author: book.author || '',
        description: book.description || '',
        price: book.price || '',
        stock: book.stock || '',
        genre: book.genre || 'General',
      });
      if (book.image) setPreview(`http://localhost:5000${book.image}`);
    }
  }, [book]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(form).forEach(([k, v]) => formData.append(k, v));
    if (imageFile) formData.append('image', imageFile);
    onSubmit(formData);
  };

  const inputClass =
    'w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-warm bg-white';

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Image Upload */}
      <div className="flex flex-col items-center gap-3">
        <div className="w-32 h-40 rounded-xl overflow-hidden bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
          {preview ? (
            <img src={preview} alt="Preview" className="w-full h-full object-cover" />
          ) : (
            <span className="text-gray-400 text-xs text-center px-2">Book Cover</span>
          )}
        </div>
        <label className="cursor-pointer text-sm text-amber-warm font-medium hover:underline">
          Upload Image
          <input type="file" accept="image/*" onChange={handleImage} className="hidden" />
        </label>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="col-span-2">
          <label className="text-xs font-semibold text-gray-500 mb-1 block">Title *</label>
          <input name="title" value={form.title} onChange={handleChange} required className={inputClass} placeholder="Book title" />
        </div>
        <div className="col-span-2">
          <label className="text-xs font-semibold text-gray-500 mb-1 block">Author *</label>
          <input name="author" value={form.author} onChange={handleChange} required className={inputClass} placeholder="Author name" />
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-500 mb-1 block">Price (Kshs) *</label>
          <input name="price" type="number" min="0" step="0.01" value={form.price} onChange={handleChange} required className={inputClass} placeholder="0.00" />
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-500 mb-1 block">Stock *</label>
          <input name="stock" type="number" min="0" value={form.stock} onChange={handleChange} required className={inputClass} placeholder="0" />
        </div>
        <div className="col-span-2">
          <label className="text-xs font-semibold text-gray-500 mb-1 block">Category *</label>
          <select name="genre" value={form.genre} onChange={handleChange} required disabled={categoriesLoading} className={inputClass}>
            {categoriesLoading ? (
              <option value={form.genre}>Loading categories…</option>
            ) : (
              categories.map((g) => <option key={g} value={g}>{g}</option>)
            )}
          </select>
        </div>
        <div className="col-span-2">
          <label className="text-xs font-semibold text-gray-500 mb-1 block">Description *</label>
          <textarea name="description" value={form.description} onChange={handleChange} required rows={3} className={inputClass} placeholder="Short description..." maxLength={500} />
          <p className="text-xs text-gray-400 text-right">{form.description.length}/500</p>
        </div>
      </div>

      <div className="flex gap-3 pt-2">
        <button type="button" onClick={onCancel} className="flex-1 py-2.5 rounded-xl border border-gray-300 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
          Cancel
        </button>
        <button type="submit" disabled={loading} className="flex-1 py-2.5 rounded-xl bg-ink text-parchment text-sm font-semibold hover:bg-slate-book transition-colors disabled:opacity-60">
          {loading ? 'Saving...' : book ? 'Update Book' : 'Add Book'}
        </button>
      </div>
    </form>
  );
};

export default BookForm;