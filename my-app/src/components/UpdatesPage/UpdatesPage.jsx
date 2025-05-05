import React from 'react';
import StatsCard from '../StatsCard/StatsCard';
import './UpdatesPage.css';

function UpdatesPage() {
  // Sample data for the dashboard
  const statsData = [
    {
      title: "Published Articles",
      value: "15",
      trend: "+3 from last month",
      trendPositive: true,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9020dfad5f12e5975f280b1f9e658b3d06cb5c87?placeholderIfAbsent=true&apiKey=51fe0c6b992a41b4a7df9fb95584ecd8"
    },
    {
      title: "Rejected Articles",
      value: "2",
      trend: "-1 from last month",
      trendPositive: true,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/405dcdf348883edd423953bfa02c59b18a273fed?placeholderIfAbsent=true&apiKey=51fe0c6b992a41b4a7df9fb95584ecd8"
    },
    {
      title: "Article Views",
      value: "1,247",
      trend: "+247 from last week",
      trendPositive: true,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b86a08a97c35fa121e06d1926ee8d6766fd1e090?placeholderIfAbsent=true&apiKey=51fe0c6b992a41b4a7df9fb95584ecd8"
    }
  ];

  const updates = [
    {
      title: "The Future of AI in Journalism",
      status: "Published",
      date: "Jan 15, 2025",
      message: "Congratulations! Your article has been published and is now available to readers.",
      views: 423,
      link: "#"
    },
    {
      title: "Climate Change Impact Report",
      status: "Rejected",
      date: "Jan 14, 2025",
      message: "Unfortunately, your article was not approved for publication. The editorial team noted that the content needs more supporting evidence and data.",
      feedback: "Please provide more recent research data and strengthen your conclusions.",
      link: "#"
    },
    {
      title: "Tech Industry Updates",
      status: "Published",
      date: "Jan 14, 2025",
      message: "Congratulations! Your article has been published and is now available to readers.",
      views: 824,
      link: "#"
    }
  ];

  return (
    <div className="updates-page">
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

      <div className="updates-container">
        <div className="updates-header">
          <h2>Publication Updates</h2>
        </div>
        <div className="updates-list">
          {updates.map((update, index) => (
            <div key={index} className={`update-card ${update.status.toLowerCase()}`}>
              <div className="update-status-icon"></div>
              <div className="update-content">
                <div className="update-header">
                  <h3>{update.title}</h3>
                  <span className={`status-badge ${update.status.toLowerCase()}`}>
                    {update.status}
                  </span>
                </div>
                <div className="update-date">
                  {update.date}
                </div>
                <div className="update-message">
                  {update.message}
                </div>
                
                {update.status === "Published" && (
                  <div className="update-stats">
                    <div className="stat-item">
                      <span className="stat-label">Views:</span>
                      <span className="stat-value">{update.views}</span>
                    </div>
                  </div>
                )}
                
                {update.status === "Rejected" && update.feedback && (
                  <div className="update-feedback">
                    <h4>Editorial Feedback:</h4>
                    <p>{update.feedback}</p>
                  </div>
                )}
                
                <div className="update-actions">
                  {update.status === "Published" && (
                    <a href={update.link} className="view-article-link">View Published Article</a>
                  )}
                  {update.status === "Rejected" && (
                    <button className="revise-article-btn">Revise and Resubmit</button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UpdatesPage;