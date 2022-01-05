import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Posts from "../Posts/Posts";
import TopBar from "../Shared/TopBar/TopBar";
import Sidebar from "../Sidebar/Sidebar";
import "./Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <TopBar />
      <Header img="https://images.pexels.com/photos/965117/pexels-photo-965117.jpeg?cs=srgb&dl=pexels-jess-bailey-designs-965117.jpg&fm=jpg">
        Blog
      </Header>
      <div className="home">
        <Posts posts={posts} key={posts._id}></Posts>
        <Sidebar></Sidebar>
      </div>
    </>
  );
};

export default Home;
