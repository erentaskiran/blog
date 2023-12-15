import React, { useEffect, useState, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Blogs() {
    const [posts, setPosts] = useState([]);
    const [records, setRecords] = useState([]);
    let id = useParams();
    const [ids, setId] = useState(parseInt(id.id));

    const fetchPosts = useCallback(async () => {
        try {
            const response = await axios.get("http://localhost:8800/api/post/" + ids);
            setPosts(response.data);
            setRecords(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    }, [ids]);

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    const arttir = () => {
        setId(ids + 10);
        console.log(id);
        fetchPosts();
    }

    const Filter = (event) => {
        setRecords(posts.filter(f => f.title.toLowerCase().includes(event.target.value)))
    }

    return (
        <div>
            Home!
            <input type="text" name="filter" onChange={Filter} />
            {records.map(post => (
                <div className="post" key={post.id}>
                    <div className="img">
                        <img src={post.image} alt="" />
                    </div>
                    <div className="content">
                        <Link className="link" to={`/blogcontent/${post.id}`}>
                            <h1>{post.title}</h1>
                        </Link>
                        <p>{post.content}</p>
                        <button onClick={arttir}>Read more</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Blogs;
