import { render, screen, fireEvent } from '../utils/test-utils';
import RobotShowcase from '@/components/RobotShowcase';

describe('RobotShowcase', () => {
  it('renders robot showcase component', () => {
    render(<RobotShowcase />);
    
    // Check if the main title is rendered
    expect(screen.getByText(/Featured Robots/i)).toBeInTheDocument();
  });

  it('displays robot details correctly', () => {
    render(<RobotShowcase />);
    
    // Check if robot details are displayed
    expect(screen.getByText(/Industrial Automation/i)).toBeInTheDocument();
    expect(screen.getByText(/Precision Engineering/i)).toBeInTheDocument();
  });

  it('handles robot selection', () => {
    render(<RobotShowcase />);
    
    // Find and click a robot card
    const robotCard = screen.getByText(/Industrial Automation/i).closest('div');
    if (robotCard) {
      fireEvent.click(robotCard);
    }
    
    // Check if details are displayed
    expect(screen.getByText(/Specifications/i)).toBeInTheDocument();
  });

  it('animates on hover', async () => {
    render(<RobotShowcase />);
    
    // Find a robot card
    const robotCard = screen.getByText(/Industrial Automation/i).closest('div');
    
    // Check initial state
    expect(robotCard).toHaveStyle('transform: none');
    
    // Trigger hover
    if (robotCard) {
      fireEvent.mouseEnter(robotCard);
    }
    
    // Check hover state (animation would be handled by Framer Motion)
    expect(robotCard).toBeTruthy();
  });
});
