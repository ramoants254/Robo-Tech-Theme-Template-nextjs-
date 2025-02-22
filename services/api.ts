import { Robot } from '../store/robotStore';

class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

export const api = {
  async fetchRobots(): Promise<Robot[]> {
    try {
      const response = await fetch('/api/robots');
      if (!response.ok) {
        throw new ApiError(response.status, 'Failed to fetch robots');
      }
      return response.json();
    } catch (error) {
      console.error('Error fetching robots:', error);
      throw error;
    }
  },

  async getRobotDetails(id: number): Promise<Robot> {
    try {
      const response = await fetch(`/api/robots/${id}`);
      if (!response.ok) {
        throw new ApiError(response.status, `Failed to fetch robot with id ${id}`);
      }
      return response.json();
    } catch (error) {
      console.error(`Error fetching robot ${id}:`, error);
      throw error;
    }
  },

  async updateRobotStatus(id: number, status: Robot['status']): Promise<Robot> {
    try {
      const response = await fetch(`/api/robots/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });
      if (!response.ok) {
        throw new ApiError(response.status, `Failed to update robot ${id}`);
      }
      return response.json();
    } catch (error) {
      console.error(`Error updating robot ${id}:`, error);
      throw error;
    }
  },
};
