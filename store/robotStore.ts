import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { api } from '../services/api';

export interface Robot {
  id: number;
  name: string;
  manufacturer: string;
  price: string;
  description: string;
  features: string[];
  image: string;
  status: 'In Stock' | 'Pre-order' | 'Coming Soon';
}

interface RobotState {
  robots: Robot[];
  selectedRobot: Robot | null;
  isLoading: boolean;
  error: string | null;
  fetchRobots: () => Promise<void>;
  selectRobot: (robot: Robot) => void;
  updateRobotStatus: (id: number, status: Robot['status']) => Promise<void>;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useRobotStore = create<RobotState>()(
  devtools(
    persist(
      (set, get) => ({
        robots: [],
        selectedRobot: null,
        isLoading: false,
        error: null,
        fetchRobots: async () => {
          try {
            set({ isLoading: true, error: null });
            const robots = await api.fetchRobots();
            set({ robots, isLoading: false });
          } catch (error) {
            set({ 
              error: error instanceof Error ? error.message : 'Failed to fetch robots',
              isLoading: false 
            });
          }
        },
        selectRobot: (robot) => set({ selectedRobot: robot }),
        updateRobotStatus: async (id, status) => {
          try {
            set({ isLoading: true, error: null });
            const updatedRobot = await api.updateRobotStatus(id, status);
            set(state => ({
              robots: state.robots.map(r => 
                r.id === id ? updatedRobot : r
              ),
              selectedRobot: state.selectedRobot?.id === id ? updatedRobot : state.selectedRobot,
              isLoading: false
            }));
          } catch (error) {
            set({ 
              error: error instanceof Error ? error.message : 'Failed to update robot status',
              isLoading: false 
            });
          }
        },
        setLoading: (loading) => set({ isLoading: loading }),
        setError: (error) => set({ error }),
      }),
      {
        name: 'robot-storage',
        partialize: (state) => ({
          robots: state.robots,
          selectedRobot: state.selectedRobot,
        }),
      }
    )
  )
);
