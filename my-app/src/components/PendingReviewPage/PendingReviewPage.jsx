import React from 'react';
import StatsCard from '../StatsCard/StatsCard';
import './PendingReviewPage.css';

function PendingReviewPage() {
  // Sample data for the dashboard
  const statsData = [
    {
      title: "Submitted Articles",
      value: "8",
      trend: "+2 from last month",
      trendPositive: true,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9020dfad5f12e5975f280b1f9e658b3d06cb5c87?placeholderIfAbsent=true&apiKey=51fe0c6b992a41b4a7df9fb95584ecd8"
    },
    {
      title: "Under Review",
      value: "5",
      trend: "+1 from last month",
      trendPositive: true,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/405dcdf348883edd423953bfa02c59b18a273fed?placeholderIfAbsent=true&apiKey=51fe0c6b992a41b4a7df9fb95584ecd8"
    },
    {
      title: "Awaiting Feedback",
      value: "3",
      trend: "+1 from last week",
      trendPositive: false,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b86a08a97c35fa121e06d1926ee8d6766fd1e090?placeholderIfAbsent=true&apiKey=51fe0c6b992a41b4a7df9fb95584ecd8"
    }
  ];

  const pendingArticles = [
    {
      title: "The Future of AI in Journalism",
      status: "Under Review",
      date: "Jan 15, 2025",
      feedback: "Our editorial team is currently reviewing your article. We'll provide feedback within 48 hours."
    },
    {
      title: "Climate Change Impact Report",
      status: "Feedback Available",
      date: "Jan 14, 2025",
      feedback: "Please revise the section on global temperature trends. The data needs to be updated with the latest research."
    },
    {
      title: "Tech Industry Updates",
      status: "Under Review",
      date: "Jan 14, 2025",
      feedback: "Your article is being reviewed by our technology editor. Expect feedback by tomorrow."
    }
  ];

  return (
    <div className="pending-review-page">
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

      <div className="pending-articles-container">
        <div className="pending-header">
          <h2>Articles Under Review</h2>
        </div>
        <div className="pending-articles">
          {pendingArticles.map((article, index) => (
            <div key={index} className={`article-card ${article.status.toLowerCase().replace(' ', '-')}`}>
              <div className="article-header">
                <h3>{article.title}</h3>
                <span className={`status-badge ${article.status.toLowerCase().replace(' ', '-')}`}>
                  {article.status}
                </span>
              </div>
              <div className="article-date">Submitted on {article.date}</div>
              <div className="article-feedback">
                <h4>Editorial Feedback:</h4>
                <p>{article.feedback}</p>
              </div>
              <div className="article-actions">
                <button className="view-article-btn">View Article</button>
                {article.status === "Feedback Available" && (
                  <button className="revise-article-btn">Revise Article</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PendingReviewPage;