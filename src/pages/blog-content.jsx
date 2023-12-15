import React from "react";
import { useParams } from "react-router-dom";
import {useState,useEffect} from 'react';
import axios from "axios";
function Blogcontent(){
    const {id} = useParams();
    
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("http://localhost:8800/api/postdetail/"+id);
                setPosts(response.data);
                
            } catch (error) {
                console.error("Error fetching posts:", error);
            }            
        };

        fetchPosts();
    }, [id]);
    return(
        <div>
            Home!
            {posts.map(post => (
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src={post.img} alt="blog desc"/>
                        </div>
                        <div className="content">
                            
                                <h1>{post.title}</h1>
                            
                            <p>{post.content}</p>
                            <button>Read more</button>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default Blogcontent;