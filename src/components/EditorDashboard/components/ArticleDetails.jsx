import React from 'react';
import './ArticleDetails.css';

const ArticleDetails = ({ article, setActiveView }) => {
  const goBack = () => {
    setActiveView(article.status === 'published' ? 'published' : 'pending');
  };

  // Sample content for the article
  const articleContent = `
    <h2>Introduction</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p>
    
    <h2>Main Section</h2>
    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    
    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    
    <h2>Analysis</h2>
    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    
    <h2>Conclusion</h2>
    <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
  `;

  return (
    <div className="article-details">
      <div className="article-details-header">
        <button className="back-button" onClick={goBack}>
          <i className="ti ti-arrow-left"></i> Back
        </button>
        <div className="article-status">
          <span className={`status-badge ${article.status === 'published' ? 'published' : 'pending'}`}>
            {article.status === 'published' ? 'Published' : 'Pending Review'}
          </span>
        </div>
      </div>
      
      <div className="article-details-content">
        <h1 className="article-title">{article.title}</h1>
        <div className="article-meta">
          <div className="article-author">By {article.author}</div>
          <div className="article-date">{article.date}</div>
          <div className="article-category">
            <span className="category-badge">{article.category}</span>
          </div>
        </div>
        
        <div className="article-body" dangerouslySetInnerHTML={{ __html: articleContent }}></div>
      </div>
      
      <div className="article-actions">
        {article.status === 'pending' ? (
          <>
            <button className="approve-button">Approve & Publish</button>
            <button className="reject-button">Request Revisions</button>
          </>
        ) : (
          <>
            <button className="edit-button">Edit Article</button>
            <button className="unpublish-button">Unpublish</button>
          </>
        )}
      </div>
    </div>
  );
};

export default ArticleDetails;