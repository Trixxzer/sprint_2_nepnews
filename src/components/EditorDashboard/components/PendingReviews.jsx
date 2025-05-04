import React, { useState } from 'react';
import './PendingReviews.css';

const PendingReviews = ({ setActiveView, setSelectedArticle }) => {
  const pendingArticles = [
    {
      id: 1,
      title: 'The Future of AI in Journalism',
      author: 'Sarah Johnson',
      category: 'Technology',
      date: 'Jan 15, 2025',
      excerpt: 'An exploration of how artificial intelligence is transforming modern journalism...',
      status: 'pending'
    },
    {
      id: 2,
      title: 'Tech Industry Updates Q1 2025',
      author: 'Alex Turner',
      category: 'Technology',
      date: 'Jan 14, 2025',
      excerpt: 'A comprehensive overview of the latest developments in the tech industry...',
      status: 'pending'
    },
    {
      id: 3,
      title: 'Climate Change: New Research Findings',
      author: 'Emma Roberts',
      category: 'Environment',
      date: 'Jan 13, 2025',
      excerpt: 'Recent studies reveal alarming trends in global climate patterns...',
      status: 'pending'
    },
    {
      id: 4,
      title: 'The Rise of Remote Work Culture',
      author: 'David Chen',
      category: 'Business',
      date: 'Jan 12, 2025',
      excerpt: 'How companies are adapting to the new normal of distributed teams...',
      status: 'pending'
    },
    {
      id: 5,
      title: 'Cryptocurrency Market Analysis',
      author: 'Michael Wong',
      category: 'Finance',
      date: 'Jan 11, 2025',
      excerpt: 'Examining the trends and future prospects of major cryptocurrencies...',
      status: 'pending'
    }
  ];

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    setActiveView('article-details');
  };

  return (
    <div className="pending-reviews">
      <div className="pending-reviews-header">
        <h2>Pending Reviews ({pendingArticles.length})</h2>
        <p>Articles awaiting your review before publication</p>
      </div>
      <div className="pending-articles-list">
        {pendingArticles.map(article => (
          <div key={article.id} className="pending-article-card" onClick={() => handleArticleClick(article)}>
            <div className="pending-article-header">
              <h3 className="pending-article-title">{article.title}</h3>
              <span className="pending-article-date">{article.date}</span>
            </div>
            <div className="pending-article-author">By {article.author}</div>
            <div className="pending-article-category">
              <span className="category-badge">{article.category}</span>
            </div>
            <p className="pending-article-excerpt">{article.excerpt}</p>
            <div className="pending-article-actions">
              <button className="review-button">Review Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingReviews;