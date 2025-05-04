import React from 'react';
import './PublishedArticles.css';

const PublishedArticles = ({ setActiveView, setSelectedArticle }) => {
  const publishedArticles = [
    {
      id: 1,
      title: 'Climate Change Impact Report',
      author: 'Mike Peters',
      category: 'Environment',
      date: 'Jan 14, 2025',
      views: 1245,
      comments: 32,
      excerpt: 'A comprehensive analysis of climate change impacts across different regions...',
      status: 'published'
    },
    {
      id: 2,
      title: 'The Evolution of Mobile Technology',
      author: 'Lisa Wang',
      category: 'Technology',
      date: 'Jan 10, 2025',
      views: 987,
      comments: 18,
      excerpt: 'Tracing the development of mobile devices from early phones to modern smartphones...',
      status: 'published'
    },
    {
      id: 3,
      title: 'Global Economic Outlook 2025',
      author: 'Robert Johnson',
      category: 'Finance',
      date: 'Jan 8, 2025',
      views: 1567,
      comments: 45,
      excerpt: 'Analyzing economic trends and making predictions for the coming year...',
      status: 'published'
    },
    {
      id: 4,
      title: 'Advances in Renewable Energy',
      author: 'Emily Chen',
      category: 'Science',
      date: 'Jan 5, 2025',
      views: 876,
      comments: 23,
      excerpt: 'Recent breakthroughs in solar, wind, and other renewable energy technologies...',
      status: 'published'
    },
    {
      id: 5,
      title: 'The Future of Work',
      author: 'Daniel Smith',
      category: 'Business',
      date: 'Jan 3, 2025',
      views: 1098,
      comments: 27,
      excerpt: 'How automation and AI are reshaping employment and career paths...',
      status: 'published'
    }
  ];

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    setActiveView('article-details');
  };

  return (
    <div className="published-articles">
      <div className="published-articles-header">
        <h2>Published Articles ({publishedArticles.length})</h2>
        <p>Articles that have been reviewed and published</p>
      </div>
      <div className="published-articles-list">
        {publishedArticles.map(article => (
          <div key={article.id} className="published-article-card" onClick={() => handleArticleClick(article)}>
            <div className="published-article-header">
              <h3 className="published-article-title">{article.title}</h3>
              <span className="published-article-date">{article.date}</span>
            </div>
            <div className="published-article-author">By {article.author}</div>
            <div className="published-article-category">
              <span className="category-badge published">{article.category}</span>
            </div>
            <p className="published-article-excerpt">{article.excerpt}</p>
            <div className="published-article-stats">
              <div className="stat">
                <i className="ti ti-eye"></i>
                <span>{article.views} views</span>
              </div>
              <div className="stat">
                <i className="ti ti-message"></i>
                <span>{article.comments} comments</span>
              </div>
            </div>
            <div className="published-article-actions">
              <button className="view-button">View Article</button>
              <button className="edit-button">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublishedArticles;