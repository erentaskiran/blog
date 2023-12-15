import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles.css"

function Home() {
    const [posts, setPosts] = useState([]);
    const [firstPosts,setFirstPosts]=useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("http://localhost:8800/api/posts");
                setPosts(response.data);
                
            } catch (error) {
                console.error("Error fetching posts:", error);
            }            
        };
        const fetchFirstPosts = async () => {
            try {
                const response = await axios.get("http://localhost:8800/api/post/3");
                setFirstPosts(response.data);
                
            } catch (error) {
                console.error("Error fetching posts:", error);
            }            
        };
        fetchFirstPosts();
        fetchPosts();
    }, []);

    return (
        <div>
            <div className="firstPosts">
            {firstPosts.map(post => (
                    <div className="firstpost" key={post.id}>
                        <div className="firstimg">
                            <img src={post.img} alt="asd" />
                        </div>
                        <div className="firstcontent">
                            <Link className="firstlink" to={`/blogcontent/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>
                            
                        </div>
                    </div>
                ))}
            </div>
            <div className="desc">

            </div>
            <div className="posts">
                {posts.map(post => (
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src={post.image} alt="asd" />
                        </div>
                        <div className="content">
                            <Link className="link" to={`/blogcontent/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>
                            <p>{post.content}</p>
                            
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
