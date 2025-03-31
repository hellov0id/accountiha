import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu } from 'lucide-react';
import { categories } from '../data';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" dir="rtl">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <ShoppingBag className="h-8 w-8 text-indigo-600" />
              <span className="mr-2 text-xl font-bold text-gray-900">اکانتی‌ها</span>
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:items-center sm:space-x-8 sm:space-x-reverse">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/${category.id}`}
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
              >
                {category.name}
              </Link>
            ))}
          </div>

          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-700"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="sm:hidden">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/${category.id}`}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600"
                onClick={() => setIsOpen(false)}
              >
                {category.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}