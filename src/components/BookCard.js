import React, { useState } from 'react';
import PurchaseRequestModal from './PurchaseRequestModal';

const BookCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  const imageUrl = book.image
    ? `http://localhost:5000${book.image}`
    : 'https://via.placeholder.com/300x400?text=No+Cover';

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {/* Book Cover */}
      <div className="relative h-56 overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt={book.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x400?text=No+Cover';
          }}
        />
        {book.stock === 0 && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Out of Stock
            </span>
          </div>
        )}
        {book.genre && (
          <span className="absolute top-3 left-3 bg-ink text-parchment text-xs px-2 py-1 rounded-full font-medium">
            {book.genre}
          </span>
        )}
      </div>

      {/* Book Info */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-serif text-lg font-bold text-ink leading-tight mb-1">{book.title}</h3>
        <p className="text-sm text-gray-500 mb-1 italic">{book.author}</p>
        <p className="text-[10px] text-gray-400 mb-2 font-mono">ID: {book._id}</p>
        <p className="text-sm text-gray-600 leading-relaxed flex-grow line-clamp-3">{book.description}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-amber-warm font-serif">
            Kshs {parseFloat(book.price).toFixed(2)}
          </span>
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
            book.stock > 5
              ? 'bg-green-100 text-green-700'
              : book.stock > 0
              ? 'bg-yellow-100 text-yellow-700'
              : 'bg-red-100 text-red-700'
          }`}>
            {book.stock > 0 ? `${book.stock} left` : 'Sold out'}
          </span>
        </div>

        <button
          disabled={book.stock === 0}
          onClick={() => setShowModal(true)}
          className={`mt-3 w-full py-2 rounded-xl text-sm font-semibold transition-colors ${
            book.stock > 0
              ? 'bg-ink text-parchment hover:bg-slate-book'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          {book.stock > 0 ? 'Request to Purchase' : 'Unavailable'}
        </button>
      </div>

      {showModal && <PurchaseRequestModal book={book} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default BookCard;