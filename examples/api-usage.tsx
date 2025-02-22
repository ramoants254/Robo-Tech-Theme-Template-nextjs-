// Example 1: Login Form
import { useState } from 'react';
import api from '@/utils/api';
import { useRouter } from 'next/navigation';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.login({ email, password });
      router.push('/dashboard'); // Redirect after successful login
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}

// Example 2: Blog Posts List with Pagination
import { useEffect, useState } from 'react';
import api from '@/utils/api';

export function BlogList() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await api.getPosts(page);
      setPosts(response.posts);
    } catch (error) {
      console.error('Failed to fetch posts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {posts.map((post) => (
            <article key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
            </article>
          ))}
          <button onClick={() => setPage(p => p - 1)} disabled={page === 1}>
            Previous
          </button>
          <button onClick={() => setPage(p => p + 1)}>
            Next
          </button>
        </>
      )}
    </div>
  );
}

// Example 3: Newsletter Subscription
import { useState } from 'react';
import api from '@/utils/api';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await api.subscribeNewsletter(email);
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
      </button>
      {status === 'success' && (
        <p className="text-green-500">Successfully subscribed!</p>
      )}
      {status === 'error' && (
        <p className="text-red-500">Failed to subscribe. Please try again.</p>
      )}
    </form>
  );
}

// Example 4: Search Component
import { useState, useEffect } from 'react';
import { useDebounce } from '@/hooks/useDebounce';
import api from '@/utils/api';

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    const searchItems = async () => {
      if (!debouncedQuery) {
        setResults([]);
        return;
      }

      setLoading(true);
      try {
        const response = await api.search(debouncedQuery);
        setResults(response.results);
      } catch (error) {
        console.error('Search failed:', error);
      } finally {
        setLoading(false);
      }
    };

    searchItems();
  }, [debouncedQuery]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      {loading && <div>Searching...</div>}
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            <h3>{result.title}</h3>
            <p>{result.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Example 5: Admin Dashboard Stats
import { useEffect, useState } from 'react';
import api from '@/utils/api';

export function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await api.getAdminStats();
        setStats(response);
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <div>Loading dashboard...</div>;
  if (!stats) return <div>Failed to load dashboard</div>;

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="stat-card">
        <h3>Total Users</h3>
        <p>{stats.users.total}</p>
        <small>Active today: {stats.users.activeToday}</small>
      </div>
      <div className="stat-card">
        <h3>Total Posts</h3>
        <p>{stats.posts.total}</p>
        <small>Published today: {stats.posts.publishedToday}</small>
      </div>
      <div className="stat-card">
        <h3>Newsletter Subscribers</h3>
        <p>{stats.subscribers.total}</p>
        <small>New today: {stats.subscribers.newToday}</small>
      </div>
    </div>
  );
}
