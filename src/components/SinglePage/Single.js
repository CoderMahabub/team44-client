import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import SinglePost from '../SinglePost/SinglePost';
import TopBar from '../Shared/TopBar/TopBar';
import './Single.css';

const Single = () => {
    return (
        <div>
            <TopBar />
            <div className="single">
                <SinglePost />
                <Sidebar />
            </div>
        </div>
    );
};

export default Single;