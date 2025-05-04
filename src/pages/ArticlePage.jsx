import React, { useEffect } from 'react';
import './ArticlePage.css';

const ArticlePage = ({ id, onNavigate }) => {
  // Scroll to top when article loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  // Mock article data
  const articles = {
    'featured1': {
      title: 'This is what the flyover under construction in the balambu area looked like',
      category: 'Infrastructure',
      date: 'May 15, 2025',
      author: 'Ramesh Sharma',
      image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/62e0074312275e3ae366f9d0b53dba3df37a9729?placeholderIfAbsent=true',
      content: `
        <p>Kathmandu. The emergency and main tunnels of the Nagdhunga-Sisnekhola tunnel route have already been 'broken through'. However, as other works are ongoing, public vehicles entering and exiting the federal capital Kathmandu will have to wait for some time to use this route.</p>
        
        <p>The Department of Roads has stated that 82 percent of the physical progress of the tunnel construction has been completed. According to the department, the main tunnel with a length of 2.68 kilometers and the emergency tunnel with a length of 2.55 kilometers have already been broken through.</p>
        
        <p>The tunnel, which is being constructed with Japanese assistance, will connect Dhading's Sisnekhola to Kathmandu's Nagdhunga. The construction of the tunnel, which began in 2019, is expected to be completed by the end of 2025.</p>
        
        <p>Once completed, the tunnel will significantly reduce travel time between Kathmandu and other parts of the country, easing traffic congestion at the Nagdhunga pass, which is a major entry point to the Kathmandu Valley.</p>
        
        <p>The project also includes the construction of approach roads, bridges, toll facilities, and other infrastructure. The total cost of the project is estimated at around 22 billion Nepalese rupees.</p>
        
        <p>Local residents have expressed satisfaction with the progress of the project, noting that it will make travel to and from Kathmandu much more convenient. Business owners along the route are also anticipating increased commercial activity once the tunnel is operational.</p>
        
        <p>Environmental experts have praised the project for its potential to reduce vehicle emissions by decreasing travel time and eliminating the need for vehicles to climb the steep Nagdhunga pass, which often results in increased fuel consumption and pollution.</p>
        
        <p>The Department of Roads has assured the public that all safety measures are being implemented according to international standards. The tunnel will be equipped with modern ventilation systems, fire safety equipment, and emergency exits.</p>
        
        <p>Government officials have indicated that similar infrastructure projects are being planned for other key transportation routes across the country, as part of a broader initiative to modernize Nepal's transportation network.</p>
      `
    },
    'sidebar1': {
      title: 'Russia says sanctions must be lifted before Ukraine maritime ceasefire can start',
      category: 'International',
      date: 'May 14, 2025',
      author: 'Sunita Rai',
      image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/29090ad227d60cd94c44087506fbd48d3a455c70?placeholderIfAbsent=true',
      content: `
        <p>Moscow and Kyiv appear at odds over when and how the US-brokered deal will come into effect. Russian officials have stated that Western sanctions on Russian agricultural exports must be lifted before a proposed maritime ceasefire with Ukraine can begin.</p>
        
        <p>The statement comes after the United States announced it had brokered a deal between the two warring nations to establish a temporary ceasefire in the Black Sea region to allow for the safe passage of civilian ships.</p>
        
        <p>Ukrainian officials, however, have indicated that they expect the ceasefire to begin immediately, without preconditions. This disagreement highlights the ongoing challenges in negotiating even temporary pauses in the conflict.</p>
        
        <p>The proposed maritime ceasefire would be the first formal agreement between Russia and Ukraine since the full-scale invasion began in February 2022. If implemented, it could provide a template for broader ceasefire negotiations in the future.</p>
        
        <p>International observers remain cautiously optimistic but note that significant obstacles remain before any agreement can be fully implemented.</p>
        
        <p>The Black Sea has been a critical battleground throughout the conflict, with both sides targeting shipping and port infrastructure. A maritime ceasefire could help restore some commercial shipping activities, potentially easing global food supply concerns.</p>
        
        <p>Western nations have imposed extensive sanctions on Russia's economy, including restrictions on agricultural exports, in response to the invasion of Ukraine. Russian officials have consistently demanded the lifting of these sanctions as a condition for any diplomatic progress.</p>
        
        <p>Diplomatic sources suggest that intensive negotiations are continuing behind the scenes, with mediators working to find a compromise that would allow the ceasefire to take effect while addressing both sides' concerns.</p>
        
        <p>The United Nations has expressed support for the ceasefire initiative, emphasizing the importance of protecting civilian maritime traffic and ensuring the flow of essential goods through Black Sea shipping routes.</p>
      `
    },
    'sports1': {
      title: 'APF enters semi-finals of Lions Cup International Invitational Volleyball Tournament',
      category: 'Sports',
      date: 'May 13, 2025',
      author: 'Bikash Thapa',
      image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/9b90e68c0cf53502663ef73dd99213d373315fe4?placeholderIfAbsent=true',
      content: `
        <p>The departmental team Armed Police Force (APF) has entered the semi-finals of the first Lions Cup International Invitational Volleyball Tournament underway in Pokhara. APF defeated Gandaki Province 3-2 in the first match held at the Multi-Purpose Covered Hall at Pokhara Stadium on Saturday to reach the last four.</p>
        
        <p>APF, which lost the first set 19-25, won the second set 25-18. APF lost the third set 23-25 but won the fourth set 25-20. In the decisive fifth set, APF secured victory with a score of 15-10.</p>
        
        <p>In the semi-finals, APF will face the winner of the match between Nepal Police Club and Tribhuvan Army Club. The tournament, organized by the Pokhara Metropolitan City and the Nepal Volleyball Association, features teams from Nepal, India, and Bangladesh.</p>
        
        <p>The tournament aims to promote volleyball in the region and provide international exposure to local players. The finals are scheduled for next Sunday, with the winners receiving a cash prize of NPR 500,000.</p>
        
        <p>Local officials have expressed satisfaction with the tournament's organization and the level of competition, noting that such events help develop sports tourism in Pokhara.</p>
        
        <p>APF's coach praised the team's resilience after losing the first set, highlighting their mental strength and tactical adjustments that led to the comeback victory. Several players from the team are also members of the national volleyball squad.</p>
        
        <p>Spectators filled the venue to capacity, creating an electric atmosphere for the match. The tournament has attracted significant local interest, with volleyball enthusiasts from across the region traveling to Pokhara to watch the games.</p>
        
        <p>The Gandaki Province team, despite the loss, was commended for their competitive performance against the more experienced APF squad. Their coach expressed pride in the team's effort and noted that the experience would be valuable for their continued development.</p>
        
        <p>Tournament organizers have announced plans to make the Lions Cup an annual event, with hopes of expanding participation to include teams from more countries in future editions.</p>
      `
    },
    'news1': {
      title: 'Russia says sanctions must be lifted before Ukraine maritime ceasefire can start',
      category: 'International',
      date: 'May 14, 2025',
      author: 'Sunita Rai',
      image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/29090ad227d60cd94c44087506fbd48d3a455c70?placeholderIfAbsent=true',
      content: `
        <p>Moscow and Kyiv appear at odds over when and how the US-brokered deal will come into effect. Russian officials have stated that Western sanctions on Russian agricultural exports must be lifted before a proposed maritime ceasefire with Ukraine can begin.</p>
        
        <p>The statement comes after the United States announced it had brokered a deal between the two warring nations to establish a temporary ceasefire in the Black Sea region to allow for the safe passage of civilian ships.</p>
        
        <p>Ukrainian officials, however, have indicated that they expect the ceasefire to begin immediately, without preconditions. This disagreement highlights the ongoing challenges in negotiating even temporary pauses in the conflict.</p>
        
        <p>The proposed maritime ceasefire would be the first formal agreement between Russia and Ukraine since the full-scale invasion began in February 2022. If implemented, it could provide a template for broader ceasefire negotiations in the future.</p>
        
        <p>International observers remain cautiously optimistic but note that significant obstacles remain before any agreement can be fully implemented.</p>
      `
    },
    'news-featured': {
      title: 'Breaking: Major international summit to address climate change',
      category: 'Environment',
      date: 'May 16, 2025',
      author: 'Prakash Sharma',
      image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/62e0074312275e3ae366f9d0b53dba3df37a9729?placeholderIfAbsent=true',
      content: `
        <p>World leaders are set to meet next month to discuss urgent measures to combat global warming and reduce carbon emissions. The summit, which will be held in Geneva, Switzerland, is expected to be the most significant climate conference since the Paris Agreement of 2015.</p>
        
        <p>Representatives from over 190 countries will attend the two-week event, with the goal of establishing more ambitious targets for reducing greenhouse gas emissions and accelerating the transition to renewable energy sources.</p>
        
        <p>Climate scientists have emphasized the urgency of the situation, pointing to recent data showing that global temperatures continue to rise at an alarming rate. "This summit represents perhaps our last best chance to implement the changes needed to avoid the worst impacts of climate change," said Dr. Maria Rodriguez, a leading climate researcher.</p>
        
        <p>Key issues on the agenda include financial support for developing nations to adopt clean energy technologies, mechanisms for carbon pricing, and strategies for adapting to climate impacts that are already unavoidable.</p>
        
        <p>Environmental activists are planning demonstrations in major cities worldwide to coincide with the summit, calling for more aggressive action from governments and corporations. Youth climate movements have announced a global school strike for the opening day of the conference.</p>
      `
    }
  };
  
  // Get the article or use a default if not found
  const article = articles[id] || {
    title: 'Article not found',
    category: 'Unknown',
    date: 'Unknown',
    author: 'Unknown',
    image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/62e0074312275e3ae366f9d0b53dba3df37a9729?placeholderIfAbsent=true',
    content: '<p>The requested article could not be found.</p>'
  };
  
  // Get related articles (excluding current one)
  const relatedArticles = Object.entries(articles)
    .filter(([articleId]) => articleId !== id)
    .slice(0, 3)
    .map(([articleId, articleData]) => ({
      id: articleId,
      ...articleData
    }));
  
  return (
    <div className="article-page">
      <div className="article-container">
        <div className="article-header">
          <div className="article-meta">
            <span className="article-category">{article.category}</span>
            <span className="article-date">{article.date}</span>
            <span className="article-author">By {article.author}</span>
          </div>
          <h1 className="article-title">{article.title}</h1>
        </div>
        
        <div className="article-featured-image">
          <img src={article.image} alt={article.title} />
        </div>
        
        <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }}></div>
        
        <div className="article-share">
          <h3>Share this article</h3>
          <div className="share-buttons">
            <button className="share-button facebook">Facebook</button>
            <button className="share-button twitter">Twitter</button>
            <button className="share-button whatsapp">WhatsApp</button>
          </div>
        </div>
      </div>
      
      <div className="related-articles">
        <h2>Related Articles</h2>
        <div className="related-articles-grid">
          {relatedArticles.map(relatedArticle => (
            <a 
              key={relatedArticle.id} 
              href="#"
              className="related-article-card"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('article');
                // We need a small delay to ensure the state updates properly
                setTimeout(() => {
                  window.scrollTo(0, 0);
                  onNavigate('article');
                  // This is a workaround since we can't directly update the article ID
                  // in the parent component from here
                }, 10);
              }}
            >
              <div className="related-article-image">
                <img src={relatedArticle.image} alt={relatedArticle.title} />
              </div>
              <div className="related-article-content">
                <h3>{relatedArticle.title}</h3>
                <div className="related-article-meta">
                  <span>{relatedArticle.date}</span> | <span>{relatedArticle.category}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;