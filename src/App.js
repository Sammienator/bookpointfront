import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StorePage from './pages/StorePage';
import AboutPage from './pages/AboutPage';
import AdminPage from './pages/AdminPage';
import Footer from './components/Footer';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-parchment flex flex-col">
        
        {/* Navigation Bar */}
        <nav className="bg-ink text-parchment shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            
            {/* Logo */}
            <Link to="/" className="font-serif text-2xl font-bold tracking-wide hover:text-amber-light transition-colors">
              📖 The Book Point Book Store.
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <Link to="/" className="hover:text-amber-light transition-colors">Home</Link>
            
              <Link to="/about" className="hover:text-amber-light transition-colors">About Us</Link>

              <Link to="/store" className="hover:text-amber-light transition-colors">Bookstore</Link>

            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="focus:outline-none hover:text-amber-light transition-colors"
                aria-label="Toggle Menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Dropdown */}
          {isOpen && (
            <div className="md:hidden bg-ink-dark px-6 pt-2 pb-4 flex flex-col gap-4 text-sm font-medium border-t border-gray-800">
              <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-amber-light transition-colors">Home</Link>
               <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-amber-light transition-colors">About Us</Link>
              <Link to="/store" onClick={() => setIsOpen(false)} className="hover:text-amber-light transition-colors">Bookstore</Link>
             
            </div>
          )}
        </nav>

        {/* Page Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/about" element={<AboutPage />} />
            
            {/* Secret Admin Route - No visible links point here */}
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </Router>
  );
}

export default App;