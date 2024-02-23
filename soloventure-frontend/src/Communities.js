import React, { useEffect } from 'react';
import axios from 'axios';

const Community = () => {
    const [posts, setPosts] = React.useState([]);
    const [newPost, setNewPost] = React.useState('');

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await axios.get('/api/posts');
            setPosts(response.data);
        } catch (error) {
            console.error('Error fetching posts', error);
        }
    };

    const handlePostSubmit = async () => {
        try {
            await axios.post('/api/posts', { content: newPost });
            setPosts([...posts, { content: newPost }]);
            setNewPost('');
        } catch (error) {
            console.error('Error submitting post', error);
        }
    };

    return (
        <div>
            <h1>Community</h1>
            <div>
                <textarea
                    value={newPost}
                    onChange={(event) => setNewPost(event.target.value)}
                    placeholder="What's on your mind?"
                />
                <button onClick={handlePostSubmit}>Post</button>
            </div>
            <div>
                {posts.map((post, index) => (
                    <div key={index}>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );    
};

export default Community;