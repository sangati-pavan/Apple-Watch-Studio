import React from 'react';
import { Apple } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Apple className="h-8 w-8" />
            <span className="ml-2 text-xl font-medium">Watch Studio</span>
          </div>
          <nav className="flex space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Save
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Share
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}