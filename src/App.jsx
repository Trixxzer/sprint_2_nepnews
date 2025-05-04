import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import SideMenu from './components/SideMenu';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ArticlePage from './pages/ArticlePage';
import './styles/global.css';
import './App.css';

function App() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [currentCategory, setCurrentCategory] = useState('');
  const [currentArticle, setCurrentArticle] = useState(null);

  const toggleSideMenu = () => {
    setSideMenuOpen(!sideMenuOpen);
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
    setCurrentArticle(null);
    
    if (page !== 'home' && page !== 'article') {
      setCurrentCategory(page);
    }
  };

  const viewArticle = (articleId) => {
    setCurrentPage('article');
    setCurrentArticle(articleId);
  };

  // Render the appropriate page based on currentPage state
  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage onArticleClick={viewArticle} />;
      case 'news':
      case 'business':
      case 'sports':
      case 'entertainment':
      case 'others':
        return <CategoryPage category={currentPage} onArticleClick={viewArticle} />;
      case 'article':
        return <ArticlePage id={currentArticle} onNavigate={navigateTo} />;
      default:
        return <HomePage onArticleClick={viewArticle} />;
    }
  };

  return (
    <div className="app-container">
      <SideMenu 
        isOpen={sideMenuOpen} 
        toggleSideMenu={toggleSideMenu} 
        onNavigate={navigateTo}
        currentPage={currentPage}
      />
      <Header toggleSideMenu={toggleSideMenu} onNavigate={navigateTo} />
      <Navigation onNavigate={navigateTo} currentPage={currentPage} />
      
      <main className="content-container">
        {renderPage()}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;