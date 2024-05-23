import React, { useState } from 'react';

const SplitScreen = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [postsLoading, setPostsLoading] = useState(false);
  const [usersLoading, setUsersLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    setPostsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
      const data = await response.json();
      setPosts(prevPosts => [...prevPosts, ...data]);
    } catch (error) {
      setError('Error fetching posts');
    } finally {
      setPostsLoading(false);
    }
  };

  const fetchUsers = async () => {
    setUsersLoading(true);
    setError(null);

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=3');
      const data = await response.json();
      setUsers(prevUsers => [...prevUsers, ...data]);
    } catch (error) {
      setError('Error fetching users');
    } finally {
      setUsersLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
      <div style={{ flex: 1, margin: '0 10px', padding: '20px', backgroundColor: '#f7f7f7', borderRadius: '8px' }}>
        <h2>Posts ({posts.length})</h2>
        <button onClick={fetchPosts} disabled={postsLoading} style={{ marginBottom: '10px', padding: '8px 16px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          {postsLoading ? 'Loading...' : 'Fetch Posts'}
        </button>
        {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
        <div style={{ display: 'grid', gridGap: '10px' }}>
          {posts.map(post => (
            <div key={post.id} style={{ padding: '10px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
              <h3 style={{ marginBottom: '5px' }}>{post.title}</h3>
              <p style={{ color: '#555' }}>{post.body}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={{ flex: 1, margin: '0 10px', padding: '20px', backgroundColor: '#f7f7f7', borderRadius: '8px' }}>
        <h2>Users ({users.length})</h2>
        <button onClick={fetchUsers} disabled={usersLoading} style={{ marginBottom: '10px', padding: '8px 16px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          {usersLoading ? 'Loading...' : 'Fetch Users'}
        </button>
        {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
        <div style={{ display: 'grid', gridGap: '10px' }}>
          {users.map(user => (
            <div key={user.id} style={{ padding: '10px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
              <h3 style={{ marginBottom: '5px' }}>{user.name}</h3>
              <p style={{ color: '#555' }}>{user.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SplitScreen;