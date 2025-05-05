import React, { useState } from 'react';
import StatsCard from '../StatsCard/StatsCard';
import './DraftsPage.css';

function DraftsPage() {
  const [articleTitle, setArticleTitle] = useState('');
  const [articleContent, setArticleContent] = useState('');
  const [category, setCategory] = useState('');

  // Sample data for the dashboard
  const statsData = [
    {
      title: "Total Drafts",
      value: "12",
      trend: "+3 from last month",
      trendPositive: true,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9020dfad5f12e5975f280b1f9e658b3d06cb5c87?placeholderIfAbsent=true&apiKey=51fe0c6b992a41b4a7df9fb95584ecd8"
    },
    {
      title: "Submitted Drafts",
      value: "8",
      trend: "+2 from last month",
      trendPositive: true,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/405dcdf348883edd423953bfa02c59b18a273fed?placeholderIfAbsent=true&apiKey=51fe0c6b992a41b4a7df9fb95584ecd8"
    },
    {
      title: "Pending Approval",
      value: "4",
      trend: "+1 from last week",
      trendPositive: false,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b86a08a97c35fa121e06d1926ee8d6766fd1e090?placeholderIfAbsent=true&apiKey=51fe0c6b992a41b4a7df9fb95584ecd8"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Draft submitted for review: ${articleTitle}`);
    // Here you would typically save the draft to your backend
  };

  return (
    <div className="drafts-page">
      <div className="stats-container">
        {statsData.map((stat, index) => (
          <StatsCard 
            key={index}
            title={stat.title}
            value={stat.value}
            trend={stat.trend}
            trendPositive={stat.trendPositive}
            icon={stat.icon}
          />
        ))}
      </div>

      <div className="editor-container">
        <div className="editor-header">
          <h2>Create New Article</h2>
        </div>
        <form className="article-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="article-title">Article Title</label>
            <input 
              type="text" 
              id="article-title" 
              value={articleTitle}
              onChange={(e) => setArticleTitle(e.target.value)}
              placeholder="Enter a compelling title for your article"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="article-category">Category</label>
            <select 
              id="article-category" 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select a category</option>
              <option value="technology">Technology</option>
              <option value="politics">Politics</option>
              <option value="science">Science</option>
              <option value="health">Health</option>
              <option value="business">Business</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="article-content">Article Content</label>
            <textarea 
              id="article-content" 
              value={articleContent}
              onChange={(e) => setArticleContent(e.target.value)}
              placeholder="Write your article here... Be creative and informative!"
              rows="12"
              required
            ></textarea>
          </div>
          
          <div className="form-actions">
            <button type="button" className="save-draft-btn">Save Draft</button>
            <button type="submit" className="submit-review-btn">Submit for Review</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DraftsPage;