import { render, screen, fireEvent } from '@testing-library/react';
import RobotCard from '../RobotCard';

describe('RobotCard', () => {
  const mockProps = {
    name: 'Test Robot',
    image: '/images/placeholder-robot.svg',
    status: 'In Stock' as const,
    onClick: jest.fn(),
    isSelected: false,
  };

  it('renders correctly', () => {
    render(<RobotCard {...mockProps} />);
    expect(screen.getByText('Test Robot')).toBeInTheDocument();
    expect(screen.getByText('In Stock')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', '/images/placeholder-robot.svg');
  });

  it('calls onClick when clicked', () => {
    render(<RobotCard {...mockProps} />);
    fireEvent.click(screen.getByRole('button'));
    expect(mockProps.onClick).toHaveBeenCalled();
  });

  it('shows selected state when isSelected is true', () => {
    render(<RobotCard {...mockProps} isSelected={true} />);
    expect(screen.getByRole('button')).toHaveClass('ring-2');
  });

  it('shows correct status color based on status', () => {
    const { rerender } = render(<RobotCard {...mockProps} status="In Stock" />);
    expect(screen.getByText('In Stock')).toHaveClass('bg-green-500/20');

    rerender(<RobotCard {...mockProps} status="Pre-order" />);
    expect(screen.getByText('Pre-order')).toHaveClass('bg-yellow-500/20');

    rerender(<RobotCard {...mockProps} status="Coming Soon" />);
    expect(screen.getByText('Coming Soon')).toHaveClass('bg-purple-500/20');
  });
});
