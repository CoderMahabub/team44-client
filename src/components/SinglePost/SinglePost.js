import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Context } from '../../context/Context';
import './SinglePost.css';

const SinglePost = () => {
    const location = useLocation();
    const path = (location.pathname.split("/")[2]);
    const [post, setPost] = useState({});
    const PF = "http://localhost:5000/images/";
    const { user } = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        }
        getPost()
    }, [path])

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post._id}`, {
                data: { username: user.username }
            });
            window.location.replace("/");
        }
        catch (err) { }
    }


    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${post._id}`, {
                username: user.username,
                title,
                desc
            });
            setUpdateMode(false);
        }
        catch (err) { }
    }
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {
                    post.photo && (
                        <img
                            className="singlePostImg"
                            src={PF + post.photo}
                            alt=""
                        />
                    )}
                {updateMode ? <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="singlePostTitleInput"
                    autoFocus
                />
                    : (<h1 className="singlePostTitle">
                        {title}
                        {post.username === user?.username &&
                            <div className="singlePostEdit">
                                <i className="singlePostIcon far fa-edit" onClick={() => setUpdateMode(true)}></i>
                                <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                            </div>}
                    </h1>)}
                <div className="singlePostInfo">
                    <span>
                        Author:
                        <b className="singlePostAuthor">
                            <Link className="link" to={`/?user=${post.username}`}>
                                <b> {post.username}</b>
                            </Link>
                        </b>
                    </span>
                    <span>{new Date(post.createdAt).toDateString()}</span>
                </div>
                {updateMode ? <textarea
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    className="singlePostDescInput"
                /> : <p className="singlePostDesc">{desc}</p>}
                {updateMode && <button className="singlePostButton" onClick={handleUpdate}>Update Post</button>}
            </div>
        </div>
    );
};

export default SinglePost;