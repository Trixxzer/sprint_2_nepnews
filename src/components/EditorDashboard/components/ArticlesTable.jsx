import React from 'react';
import './ArticlesTable.css';

const ArticlesTable = ({ onArticleClick }) => {
  const articles = [
    {
      id: 1,
      title: "The Future of AI in Journalism",
      author: "Sarah Johnson",
      category: "Politics",
      status: "pending",
      date: "Jan 15, 2025",
      action: "Review"
    },
    {
      id: 2,
      title: "Climate Change Impact Report",
      author: "Mike Peters",
      category: "Environment",
      status: "published",
      date: "Jan 14, 2025",
      action: "View"
    },
    {
      id: 3,
      title: "Tech Industry Updates",
      author: "Alex Turner",
      category: "Technology",
      status: "pending",
      date: "Jan 14, 2025",
      action: "Review"
    },
    {
      id: 4,
      title: "Tech Industry Updates",
      author: "Alex Turner",
      category: "Technology",
      status: "pending",
      date: "Jan 14, 2025",
      action: "Review"
    },
    {
      id: 5,
      title: "Climate Change Impact Report",
      author: "Mike Peters",
      category: "Environment",
      status: "published",
      date: "Jan 14, 2025",
      action: "View"
    },
    {
      id: 6,
      title: "The Future of AI in Journalism",
      author: "Sarah Johnson",
      category: "Politics",
      status: "pending",
      date: "Jan 15, 2025",
      action: "Review"
    },
    {
      id: 7,
      title: "Climate Change Impact Report",
      author: "Mike Peters",
      category: "Environment",
      status: "published",
      date: "Jan 14, 2025",
      action: "View"
    }
  ];

  const getStatusClass = (status) => {
    return status === 'published' ? 'status-published' : 'status-pending';
  };

  const handleActionClick = (article, e) => {
    e.stopPropagation();
    onArticleClick(article);
  };

  return (
    <div className="articles-table-container">
      <div className="articles-table-title">Recent Articles</div>
      <div className="articles-table">
        <div className="articles-table-header">
          <div className="articles-table-cell">Title</div>
          <div className="articles-table-cell">Author</div>
          <div className="articles-table-cell">Category</div>
          <div className="articles-table-cell">Date</div>
          <div className="articles-table-cell">Actions</div>
        </div>
        
        {articles.map((article) => (
          <div 
            key={article.id} 
            className="articles-table-row"
            onClick={() => onArticleClick(article)}
          >
            <div className="articles-table-cell">{article.title}</div>
            <div className="articles-table-cell">{article.author}</div>
            <div className="articles-table-cell category-cell">
              <span className={getStatusClass(article.status)}>
                {article.category}
              </span>
            </div>
            <div className="articles-table-cell">{article.date}</div>
            <div className="articles-table-cell action-cell">
              <button 
                className={`action-button ${article.status === 'published' ? 'view' : 'review'}`}
                onClick={(e) => handleActionClick(article, e)}
              >
                {article.action}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesTable;