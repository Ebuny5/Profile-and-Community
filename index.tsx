import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const ProfileIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
);

const CommunityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m-7.5-2.962c.57-1.03-.09-2.3-1.03-2.3H6.5a3 3 0 0 0-3 3v1.75a3 3 0 0 0 3 3h1.536a3 3 0 0 0 2.455-1.442l.995-1.493a3 3 0 0 0-1.036-3.998Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 0 1 3-3h1.5a3 3 0 0 1 3 3v1.5a3 3 0 0 1-3 3h-1.5Z" />
    </svg>
);

const ProfileScreen = () => (
    <>
        <div className="header">
            <h1>Profile</h1>
            <button className="btn btn-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/></svg>
                Edit Profile
            </button>
        </div>
        <div className="card profile-header">
            <div className="profile-avatar">G</div>
            <div className="profile-name">Gifty</div>
            <p className="profile-email">timisuru56@gmail.com</p>
            <div className="profile-joined">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" ><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0h18" /></svg>
                Joined July 2025
            </div>
        </div>
        <div className="card">
            <h2 className="card-title">Statistics</h2>
            <div className="stats-container">
                <div className="stat-item">
                    <div className="value">14</div>
                    <div className="label">Episodes Logged</div>
                </div>
                <div className="stat-item">
                    <div className="value">0</div>
                    <div className="label">Current Streak</div>
                </div>
            </div>
        </div>
        <div className="card">
            <h2 className="card-title">Personal Information</h2>
            <div className="info-grid">
                <div className="info-item">
                    <div className="label">Display Name</div>
                    <div className="value">Gifty</div>
                </div>
                <div className="info-item">
                    <div className="label">Email</div>
                    <div className="value">timisuru56@gmail.com</div>
                </div>
            </div>
        </div>
        <div className="card">
            <h2 className="card-title">Account Settings</h2>
            <a href="#" className="settings-link">
                <span>Manage your account preferences</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>
            </a>
        </div>
    </>
);

const communityPosts = [
    {
        type: 'success',
        tag: 'Success Story',
        author: 'Sarah M.',
        date: 'Sep 30',
        title: 'Finally found relief!',
        body: 'After trying different treatments for years, I finally found a combination that works for me. Clinical strength antiperspirant at night plus iontophor...',
        likes: 12,
        comments: 5,
    },
    {
        type: 'question',
        tag: 'Question',
        author: 'Anonymous',
        date: 'Oct 1',
        title: 'Going to a job interview tomorrow and I\'m so nervous about shaking hands.',
        body: 'Any quick tips for managing palm sweating in the moment?',
        likes: 8,
        comments: 15,
    },
    {
        type: 'tip',
        tag: 'Tip',
        author: 'Mike T.',
        date: 'Sep 29',
        title: 'Great tip for social situations',
        body: 'I always carry a small towel or handkerchief in my pocket. It\'s been a game-changer for confidence in social situations. Also, keeping my hands slight...',
        likes: 15,
        comments: 8,
    },
];

const CommunityScreen = () => (
    <>
        <div className="header">
            <h1>Community</h1>
            <button className="btn btn-primary">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/></svg>
                Share Story
            </button>
        </div>
        <div className="banner">
            <div className="banner-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.455.09-.934.09-1.425v-2.287a6.75 6.75 0 0 1 6.75-6.75h.625a3.375 3.375 0 0 0 3.375-3.375V8.25a3.375 3.375 0 0 0-3.375-3.375h-1.528a4.5 4.5 0 0 0-4.5 4.5v.844c0 .383.065.75.184 1.103a6.75 6.75 0 0 1-6.628 6.557c-3.482 0-6.375-2.895-6.375-6.438S3.518 5.562 7 5.562c1.58 0 3.038.58 4.157 1.542a6.75 6.75 0 0 1 9.343 9.343Z" />
                </svg>
            </div>
            <div className="banner-content">
                <h3>Join Our Support Group</h3>
                <p>Connect with others, share experiences, and get real-time support.</p>
            </div>
            <button className="btn btn-primary">Join Now</button>
        </div>
        
        <div className="card">
            <h2 className="card-title">Community Posts</h2>
            {communityPosts.map((post, index) => (
                <div key={index} className="post-item">
                    <span className={`post-tag ${post.type}`}>{post.tag}</span>
                    <h3 className="post-title">{post.title}</h3>
                    <p className="post-meta">by {post.author} • {post.date}</p>
                    <p className="post-body">{post.body} <a href="#">Read More</a></p>
                    <div className="post-footer">
                        <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>{post.likes} likes</span>
                        <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>{post.comments} comments</span>
                    </div>
                </div>
            ))}

            <div className="card-divider"></div>
            
            <h2 className="card-title">Upcoming Events</h2>
            <div className="event-list-item">
                <div className="event-date">
                    <div className="month">OCT</div>
                    <div className="day">09</div>
                </div>
                <div className="event-details">
                    <h4>Monthly Support Group Meeting</h4>
                    <p>Join us for our monthly virtual support group meeting.</p>
                </div>
                <button className="btn btn-primary" style={{marginLeft: 'auto'}}>Join</button>
            </div>
        </div>
    </>
);


const App = () => {
    const [activeScreen, setActiveScreen] = useState('profile');

    return (
        <div className="app-container">
            <main className="main-content">
                {activeScreen === 'profile' ? <ProfileScreen /> : <CommunityScreen />}
            </main>
            <nav className="tab-nav">
                <button 
                    className={`tab-button ${activeScreen === 'profile' ? 'active' : ''}`} 
                    onClick={() => setActiveScreen('profile')}
                    aria-label="Profile"
                >
                    <ProfileIcon />
                    Profile
                </button>
                <button 
                    className={`tab-button ${activeScreen === 'community' ? 'active' : ''}`}
                    onClick={() => setActiveScreen('community')}
                    aria-label="Community"
                >
                    <CommunityIcon />
                    Community
                </button>
            </nav>
        </div>
    );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);