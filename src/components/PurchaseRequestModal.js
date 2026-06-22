import React, { useState } from 'react';
import { STORE_EMAIL, WHATSAPP_NUMBER } from '../components/Config';

const PurchaseRequestModal = ({ book, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');

  const bookSummary = `Book ID: ${book._id}\nTitle: ${book.title}\nAuthor: ${book.author}\nPrice: Kshs${parseFloat(book.price).toFixed(2)}`;

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const subject = `Purchase Request — ${book.title} (ID: ${book._id})`;
    const body =
      `${bookSummary}\n\n` +
      `Buyer Name: ${name}\n` +
      `Buyer Phone: ${phone}\n` +
      `Buyer Email: ${email}\n\n` +
      `Note: ${note || '(none)'}`;

    const mailtoLink = `mailto:${STORE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    onClose();
  };

  const handleWhatsApp = () => {
    const message =
      `Hi! I'm interested in purchasing this book:\n\n${bookSummary}\n\n` +
      `Could you tell me more about availability?`;
    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waLink, '_blank');
  };

  const inputClass =
    'w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-warm bg-white';

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-parchment rounded-2xl shadow-2xl w-full max-w-md p-6 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="font-serif text-2xl font-bold text-ink">Request to Purchase</h2>
            <p className="text-xs text-gray-400 mt-1">Book ID: {book._id}</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl leading-none">
            &times;
          </button>
        </div>

        {/* Book Summary */}
        <div className="bg-white rounded-xl p-4 mb-5 border border-gray-100">
          <p className="font-serif font-bold text-ink">{book.title}</p>
          <p className="text-sm text-gray-500 italic">{book.author}</p>
          <p className="text-amber-warm font-semibold mt-1">Kshs {parseFloat(book.price).toFixed(2)}</p>
        </div>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsApp}
          className="w-full mb-5 py-2.5 rounded-xl bg-green-600 text-white text-sm font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
        >
          💬 Chat on WhatsApp
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="flex-grow h-px bg-gray-200" />
          <span className="text-xs text-gray-400 font-medium">OR EMAIL US</span>
          <div className="flex-grow h-px bg-gray-200" />
        </div>

        {/* Email Form */}
        <form onSubmit={handleEmailSubmit} className="space-y-3">
          <div>
            <label className="text-xs font-semibold text-gray-500 mb-1 block">Your Name *</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={inputClass}
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 mb-1 block">Phone Number *</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              type="tel"
              className={inputClass}
              placeholder="+254 721 949 815"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 mb-1 block">Email *</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              className={inputClass}
              placeholder="hello@bookspoint.co.ke"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 mb-1 block">Note (optional)</label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={2}
              className={inputClass}
              placeholder="Anything you'd like to add…"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-2.5 rounded-xl bg-ink text-parchment text-sm font-semibold hover:bg-slate-book transition-colors"
          >
            Send Purchase Request via Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default PurchaseRequestModal;