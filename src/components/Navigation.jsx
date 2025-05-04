import React from 'react';
import './Navigation.css';

const Navigation = ({ onNavigate, currentPage }) => {
  const categories = [
    { name: 'Homepage', path: 'home' },
    { name: 'News', path: 'news' },
    { name: 'Business', path: 'business' },
    { name: 'Sports', path: 'sports' },
    { name: 'Entertainment', path: 'entertainment' },
    { name: 'Others', path: 'others' }
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        {categories.map((category) => (
          <a 
            key={category.name}
            href="#"
            className={`nav-item ${currentPage === category.path ? 'nav-item-active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              onNavigate(category.path);
            }}
          >
            {category.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;