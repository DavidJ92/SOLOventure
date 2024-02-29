import React, { useEffect, useState } from 'react';

const Community = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('/api/posts');
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts', error);
            }
        };
        fetchPosts();
    }, []);

    const handlePostSubmit = async () => {
        try {
            const response = await fetch('/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ content: newPost })
            });
            if (!response.ok) {
                throw new Error('Failed to submit post');
            }
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
