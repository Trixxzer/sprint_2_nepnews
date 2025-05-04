import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCard from './components/StatCard';
import ArticlesTable from './components/ArticlesTable';
// import QuickActions from './components/QuickActions';
import UserProfile from './components/UserProfile';
import PendingReviews from './components/PendingReviews';
import PublishedArticles from './components/PublishedArticles';
import ArticleDetails from './components/ArticleDetails';
import { Newspaper,Check,Clock} from 'lucide-react';
import './EditorDashboard.css';

// SVG components
import { ArticleIcon, CheckCircleIcon, ClockIcon } from './components/Icons';

const EditorDashboard = () => {
  const [activeView, setActiveView] = useState('dashboard');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  const renderContent = () => {
    switch (activeView) {
      case 'pending':
        return <PendingReviews setActiveView={setActiveView} setSelectedArticle={setSelectedArticle} />;
      case 'published':
        return <PublishedArticles setActiveView={setActiveView} setSelectedArticle={setSelectedArticle} />;
      case 'article-details':
        return <ArticleDetails article={selectedArticle} setActiveView={setActiveView} />;
      case 'dashboard':
      default:
        return (
          <>
            <Header 
              title="Editor Dashboard" 
              username="John Editor" 
              avatarSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/09d59be01ac62a0d0dab96a43554c90940ea53ab?placeholderIfAbsent=true" 
              onProfileClick={() => setShowProfile(true)}
            />
            
            <div className="stats-container">
              <StatCard 
                title="Total Articles" 
                value="1,234" 
                changeValue="12%" 
                changeDirection="up"
                icon={Newspaper}
                iconBgColor="#DBEAFE"
                iconColor="#2563EB"
              />
              
              <StatCard 
                title="Published Articles" 
                value="987" 
                changeValue="8%" 
                changeDirection="up"
                icon={Check}
                iconBgColor="#DBEAFE"
                iconColor="#059669"
              />
              
              <StatCard 
                title="Pending Reviews" 
                value="47" 
                changeValue="24%" 
                changeDirection="up"
                icon={Clock}
                iconBgColor="#DBEAFE"
                iconColor="#D97706"
                changeColor="#DC2626"
              />
            </div>
            
            <ArticlesTable 
              onArticleClick={(article) => {
                setSelectedArticle(article);
                setActiveView('article-details');
              }} 
            />
            
            {/* <QuickActions 
              onReviewClick={() => setActiveView('pending')}
              onPublishClick={() => setActiveView('published')}
            /> */}
          </>
        );
    }
  };

  return (
    <div className="dashboard-container">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      
      <Sidebar 
        activeView={activeView} 
        onViewChange={setActiveView} 
      />
      
      <div className="dashboard-content">
        {renderContent()}
      </div>

      {showProfile && <UserProfile setShowProfile={setShowProfile} />}
    </div>
  );
};

export default EditorDashboard;