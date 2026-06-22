import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const categories = [
    { title: "Used Fiction & Novels", price: "100 - 450 Kshs", icon: "📚", desc: "Thrillers, classics, romance, and mystery from your favorite authors." },
    { title: "Children's & Teen Books", price: "100 - 300 Kshs", icon: "🧸", desc: "Early readers, picture books, and YA adventures to spark young minds." },
    { title: "Non-Fiction & Growth", price: "Affordable", icon: "💡", desc: "Biographies, personal development, history, and spiritual growth." },
    { title: "Educational & Textbooks", price: "Budget-Friendly", icon: "🎓", desc: "Secondary school, college, and university level study resources." }
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="bg-ink text-parchment py-20 px-6 text-center shadow-inner">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Great Books. Great Prices. <br />
            <span className="text-amber-light font-normal italic">Clean Pre-loved Quality.</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Welcome to Books Point Bookstore, Ruaka – your friendly neighborhood source for high-quality, carefully selected used books starting from as low as Kshs 100.
          </p>
          <div className="pt-4">
            <Link to="/store" className="bg-amber-light hover:bg-amber text-ink font-semibold px-8 py-3 rounded shadow transition-all inline-block">
              Browse the Bookstore
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-2 mb-12">
          <h2 className="font-serif text-3xl font-bold text-ink">What You'll Find On Our Shelves</h2>
          <p className="text-gray-600 text-sm">Every book is carefully selected, checked for quality, and graded honestly.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <span className="text-3xl">{cat.icon}</span>
                <h3 className="font-serif font-bold text-lg text-ink">{cat.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{cat.desc}</p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                <span className="text-xs text-gray-400 font-medium font-mono uppercase tracking-wider">Price Guide</span>
                <span className="text-sm font-semibold text-ink bg-parchment px-2 py-1 rounded">{cat.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fast Delivery Info Banner */}
      <section className="bg-white border-y border-gray-100 py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs uppercase font-bold tracking-widest text-amber font-mono">Quick Dispatch</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink">Same-Day Delivery Around Ruaka</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Living around <span className="font-semibold text-ink">Ruaka, Runda, Two Rivers, Gigiri, Nyari, Muthaiga, Rosslyn, Banana, or Kiambu Road</span>? Enjoy fast, doorstep drop-offs on the very same day. 
            </p>
            <p className="text-gray-500 text-xs">
              *Countrywide shipping across Kenya takes just 1–3 days!
            </p>
          </div>
          <div className="bg-parchment p-6 rounded-lg space-y-3 border border-dashed border-gray-300">
            <h4 className="font-bold text-ink text-sm">📍 Walk-in Location:</h4>
            <p className="text-gray-700 text-xs leading-relaxed">
              Drop by our cozy, warm community physical space right here in Ruaka, Kiambu, to touch the pages and browse our physical shelves directly!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;