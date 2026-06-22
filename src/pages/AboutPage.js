import React from 'react';

const timelineEvents = [
  {
    year: '2011',
    text: 'A Canadian friend dropped off a small book collection at our Ruaka movie shop. A few handmade shelves and growing curiosity — our first chapter began. More stock followed from Irene, then shipments from the US.',
  },
  {
    year: '2014',
    text: 'Advertising challenges made it hard to sustain. The first chapter closed — but the love for books never faded.',
  },
  {
    year: '2015–16',
    text: "A friend's visit sparked a partnership. We imported new stock and took to Nairobi's CBD — selling at Aga Khan Walk, opposite Uchumi House. The streets became our bookstore.",
  },
  {
    year: '2017',
    text: 'A small Ruaka shop opened, then another — visibility issues persisted. Books were cleared, the dream shelved. Still, Abookidea launched: an Amazon affiliate that evolved into a Kenyan book platform.',
  },
  {
    year: '2021–23',
    text: 'Booknized launched with both a shop and a website. Election-year slowdowns hit hard, and by early 2023 the shop closed. Yet again, the story did not end there.',
  },
  {
    year: 'Oct 2025',
    text: 'Books Point Bookstore was born — a fresh chapter built on over a decade of experience, setbacks, and resilience. More than a bookstore; a lifelong love story with books.',
  },
];

const teamMembers = [
  {
    initial: 'E',
    name: 'Eddy',
    role: 'Founder & Visionary',
    bio: "The heart behind Books Point, shaping Kenya's independent book scene since 2011. Persistence and deep love for stories drive everything.",
  },
  {
    initial: 'P',
    name: 'Petronilla',
    role: 'Reviews & Summaries Lead',
    bio: 'Crafts engaging book reviews and summaries for the website and social media, helping readers discover books they will truly love.',
  },
  {
    initial: 'J',
    name: 'James',
    role: 'Book Scout & Sourcing',
    bio: 'The go-to for hard-to-find titles. Connects with readers to track down specific requests and ensures Books Point offers variety and value.',
  },
];

const offerings = [
  { icon: '📚', label: 'Used Books', desc: 'Carefully curated, inspected, and honestly graded pre-loved books.' },
  { icon: '📄', label: 'Book Summaries', desc: 'Concise summaries to help you decide your next great read.' },
  { icon: '📋', label: 'Author Book Lists', desc: 'Curated reading lists and recommendations by author.' },
  { icon: '🤝', label: 'Literacy Initiative', desc: 'Actively fostering accessible book-buying across Kenyan communities.' },
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-14 space-y-16">

      {/* Hero */}
      <div className="border-b border-stone-200 pb-10">
        <span className="text-[11px] tracking-[0.15em] uppercase font-medium text-amber-600 font-mono">
          Our Journey
        </span>
        <h1 className="mt-2 font-serif text-4xl md:text-5xl font-bold text-stone-900 leading-tight">
          About Books Point Bookstore
        </h1>
        <p className="mt-4 text-base text-stone-500 leading-relaxed">
          A community-focused used bookstore in Ruaka, Kiambu — dedicated to helping Kenyans read
          more while spending less.
        </p>
      </div>

      {/* Pull Quote */}
      <blockquote className="border-l-[3px] border-amber-500 pl-5 ml-1">
        <p className="font-serif italic text-xl text-stone-800 leading-relaxed">
          "Our mission is simple: make reading accessible and enjoyable for every reader in Kenya —
          and every story finds its reader."
        </p>
        <cite className="mt-3 block text-xs uppercase tracking-widest text-stone-400 not-italic">
          — Eddy, Founder
        </cite>
      </blockquote>

      {/* Timeline */}
      <section>
        <span className="text-[11px] tracking-[0.15em] uppercase font-medium text-amber-600 font-mono">
          The Story
        </span>
        <h2 className="mt-2 font-serif text-2xl font-bold text-stone-900 mb-8">
          A journey that began with a few books
        </h2>

        <div className="relative pl-7">
          {/* vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-stone-200" />

          {timelineEvents.map((event, i) => (
            <div
              key={i}
              className="relative mb-8 last:mb-0 group cursor-default"
            >
              {/* dot */}
              <div className="absolute -left-[23px] top-[7px] w-[10px] h-[10px] rounded-full bg-amber-500 border-2 border-white transition-transform duration-200 group-hover:scale-125" />

              <div className="bg-white border border-stone-100 rounded-xl p-4 transition-all duration-200 group-hover:border-amber-200 group-hover:shadow-sm group-hover:-translate-y-0.5">
                <p className="text-[11px] font-medium tracking-widest uppercase text-amber-600 mb-1">
                  {event.year}
                </p>
                <p className="text-sm text-stone-600 leading-relaxed">{event.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="group bg-stone-50 hover:bg-amber-50 border border-stone-100 hover:border-amber-200 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm cursor-default">
          <span className="text-[11px] tracking-[0.12em] uppercase text-stone-400 font-mono">
            Our Mission
          </span>
          <h3 className="mt-2 font-serif text-lg font-bold text-stone-900 mb-3">
            Reading for everyone
          </h3>
          <p className="text-sm text-stone-500 leading-relaxed">
            Make reading accessible and enjoyable for everyone — offering physical and digital books
            that inspire, inform, and transform, while supporting a growing community of readers
            across Kenya and beyond.
          </p>
        </div>

        <div className="group bg-stone-50 hover:bg-amber-50 border border-stone-100 hover:border-amber-200 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm cursor-default">
          <span className="text-[11px] tracking-[0.12em] uppercase text-stone-400 font-mono">
            Our Vision
          </span>
          <h3 className="mt-2 font-serif text-lg font-bold text-stone-900 mb-3">
            Kenya's most trusted bookstore
          </h3>
          <p className="text-sm text-stone-500 leading-relaxed">
            Become Kenya's most trusted online and community-based bookstore — a place where every
            reader finds their next favourite book, and every story finds its reader.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section>
        <span className="text-[11px] tracking-[0.15em] uppercase font-medium text-amber-600 font-mono">
          What We Offer
        </span>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {offerings.map((item, i) => (
            <div
              key={i}
              className="group flex flex-col gap-2 bg-white border border-stone-100 hover:border-amber-200 rounded-2xl p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-default"
            >
              <span className="text-2xl">{item.icon}</span>
              <p className="text-sm font-semibold text-stone-800 group-hover:text-amber-700 transition-colors duration-200">
                {item.label}
              </p>
              <p className="text-xs text-stone-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section>
        <span className="text-[11px] tracking-[0.15em] uppercase font-medium text-amber-600 font-mono">
          Meet the Team
        </span>
        <h2 className="mt-2 font-serif text-2xl font-bold text-stone-900 mb-6">
          The people behind the pages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="group bg-stone-50 hover:bg-white border border-stone-100 hover:border-amber-200 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-default"
            >
              <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-semibold text-sm mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-200">
                {member.initial}
              </div>
              <h4 className="font-semibold text-stone-900 text-sm">{member.name}</h4>
              <p className="text-xs text-amber-600 mb-3">{member.role}</p>
              <p className="text-xs text-stone-500 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Promise */}
      <section className="bg-stone-50 border border-stone-100 rounded-2xl p-8">
        <span className="text-[11px] tracking-[0.15em] uppercase font-medium text-amber-600 font-mono">
          Our Promise
        </span>
        <p className="mt-3 text-sm text-stone-600 leading-relaxed">
          At Books Point, we believe every book deserves a reader — and every reader deserves a
          chance to explore, learn, and grow.
        </p>
        <p className="mt-2 text-sm text-stone-600 leading-relaxed">
          From a humble movie shop corner to a modern online bookstore, this is more than a business.
          It's a lifelong love story with books.
        </p>
        <p className="mt-5 text-xs font-semibold text-stone-800 tracking-wide">
          Books Point — Connecting Readers with Stories that Inspire, Inform, and Transform.
        </p>
      </section>

    </div>
  );
}