import React from 'react';
import { Link } from 'react-router-dom';
import { useCategories } from '../hooks/useCategories';

const Footer = () => {
  const { categories } = useCategories();
  const year = new Date().getFullYear();
  const featuredCategories = categories.filter((c) => c !== 'General').slice(0, 6);

  return (
    <footer className="bg-ink text-parchment mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="font-serif text-2xl font-bold mb-2">The BookPoint Book Store.</h2>
          <p className="text-sm text-parchment/70 leading-relaxed">
            Hand-picked books for every kind of reader, shelved with care and shipped with love.
          </p>
        </div>

        {/* Browse by category */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-warm mb-4">
            Browse
          </h3>
          <ul className="space-y-2 text-sm">
            {featuredCategories.map((c) => (
              <li key={c}>
                <Link
                  to={`/store?genre=${encodeURIComponent(c)}`}
                  className="text-parchment/70 hover:text-amber-warm transition-colors"
                >
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Store links */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-warm mb-4">
            Store
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/store" className="text-parchment/70 hover:text-amber-warm transition-colors">
                All Books
              </Link>
            </li>
          
            <li>
              <a href="#b" className="text-parchment/70 hover:text-amber-warm transition-colors">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-warm mb-4">
            Get in Touch
          </h3>
          <ul className="space-y-2 text-sm text-parchment/70">
            <li>hello@bookspoint.co.ke</li>
            <li>Mon–Sat, 9am–6pm</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-parchment/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-parchment/50">
          <span>© {year} Books Point Book Store. All rights reserved.</span>
          <span>Every book is carefully selected, checked for quality, and graded honestly.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;