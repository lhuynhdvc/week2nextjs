'use client';
import Image from 'next/image';
import { generatePerson } from './generatePerson';

// =====================================================
// YOUR BUSINESS CARD DATA
// =====================================================
// Each object is one business card. Add more below!
// Next week we'll move this data to a real database.
// =====================================================

interface Card {
  name: string;
  title: string;
  company: string;
  phone: string;
  email: string;
  website?: string;
  category: string;
}

const cards: Card[] = [
  {
    name: 'Maria Garcia',
    title: 'Web Developer',
    company: 'Garcia Digital',
    phone: '(925) 555-0101',
    email: 'maria@garciadigital.com',
    website: 'https://garciadigital.com',
    category: 'Technology',
  },
  {
    name: 'James Chen',
    title: 'Licensed Acupuncturist',
    company: 'Harmony Wellness Center',
    phone: '(925) 555-0202',
    email: 'james@harmonywellness.com',
    website: 'https://harmonywellness.com',
    category: 'Health',
  },
  {
    name: 'Priya Patel',
    title: 'CPA',
    company: 'Patel & Associates',
    phone: '(925) 555-0303',
    email: 'priya@patelcpa.com',
    website: 'https://patelcpa.com',
    category: 'Finance',
  },
  {
    name: 'Robert Jones',
    title: 'CFO',
    company: 'Jones & Associates',
    phone: '(925) 555-1231',
    email: 'rjones@gmail.com',
    website: 'https://rjonesBIZ.com',
    category: 'Business',
  },
];

// Color map for category badges
const categoryColors: Record<string, string> = {
  Technology: 'bg-blue-100 text-blue-800',
  Health: 'bg-green-100 text-green-800',
  Finance: 'bg-amber-100 text-amber-800',
  Restaurant: 'bg-orange-100 text-orange-800',
  Education: 'bg-purple-100 text-purple-800',
  'Real Estate': 'bg-teal-100 text-teal-800',
  Services: 'bg-gray-100 text-gray-800',
  Fitness: 'bg-rose-100 text-rose-800',
};
export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Business Card Directory
      </h1>
      <p className="text-gray-500 mb-6">
        {cards.length} local businesses and professionals
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border p-6 flex gap-4 hover:shadow-md transition-shadow"
          >
            {/* Person - generated from the person's name */}
            <Image
              src={generatePerson(card.name, 200)}
              alt={card.name}
              width={64}  // Equivalent to w-16 (16 * 4px)
              height={64}
              className="w-16 h-16 rounded-full flex-shrink-0"
            />

            {/* Card content */}
            <div>
              <h2 className="text-xl font-bold text-gray-800">{card.name}</h2>
              <p className="text-blue-600 font-medium">{card.title}</p>
              <p className="text-gray-500 text-sm mb-3">{card.company}</p>

              <p className="text-gray-600 text-sm">{card.phone}</p>
              <p className="text-gray-600 text-sm">{card.email}</p>

              {card.website && (
                <a
                  href={card.website}
                  target="_blank"
                  className="text-blue-600 hover:underline text-sm"
                >
                  {card.website}
                </a>
              )}

              <span
                className={`inline-block mt-3 text-xs px-2 py-1 rounded ${
                  categoryColors[card.category] || 'bg-gray-100 text-gray-800'
                }`}
              >
                {card.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
