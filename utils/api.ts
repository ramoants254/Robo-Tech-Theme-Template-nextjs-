import { toast } from 'react-hot-toast';

// Types
export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData extends LoginData {
  name: string;
}

export interface ContactData {
  name: string;
  email: string;
  message: string;
  company?: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  author: {
    id: string;
    name: string;
  };
  publishedAt: string;
}

// API utility class
class Api {
  private token: string | null = null;
  private baseUrl = '/api';

  // Helper method for making authenticated requests
  private async fetch(endpoint: string, options: RequestInit = {}) {
    const headers = {
      'Content-Type': 'application/json',
      ...(this.token && { Authorization: `Bearer ${this.token}` }),
      ...options.headers,
    };

    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        headers,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'An error occurred');
      }

      return response.json();
    } catch (error) {
      toast.error(error.message || 'An error occurred');
      throw error;
    }
  }

  // Set auth token
  setToken(token: string) {
    this.token = token;
    localStorage.setItem('auth_token', token);
  }

  // Clear auth token
  clearToken() {
    this.token = null;
    localStorage.removeItem('auth_token');
  }

  // Auth APIs
  async login(data: LoginData) {
    const response = await this.fetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    this.setToken(response.token);
    return response;
  }

  async register(data: RegisterData) {
    const response = await this.fetch('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    this.setToken(response.token);
    return response;
  }

  async logout() {
    this.clearToken();
  }

  // Blog APIs
  async getPosts(page = 1, limit = 10) {
    return this.fetch(`/posts?page=${page}&limit=${limit}`);
  }

  async getPost(id: string) {
    return this.fetch(`/posts/${id}`);
  }

  // Newsletter API
  async subscribeNewsletter(email: string) {
    return this.fetch('/newsletter/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  }

  // Contact API
  async submitContact(data: ContactData) {
    return this.fetch('/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Search API
  async search(query: string, type?: string) {
    return this.fetch(`/search?q=${encodeURIComponent(query)}${type ? `&type=${type}` : ''}`);
  }

  // Admin APIs
  async getAdminStats() {
    return this.fetch('/admin/stats');
  }
}

// Create and export a single instance
const api = new Api();
export default api;
