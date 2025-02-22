import { render, screen, fireEvent, waitFor } from '../utils/test-utils';
import ContactForm from '@/app/contact/page';

describe('ContactForm', () => {
  it('renders contact form', () => {
    render(<ContactForm />);
    
    // Check if form elements are rendered
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it('handles form submission', async () => {
    render(<ContactForm />);
    
    // Fill out the form
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: 'Test message' },
    });
    
    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /send/i }));
    
    // Wait for success message
    await waitFor(() => {
      expect(screen.getByText(/message sent/i)).toBeInTheDocument();
    });
  });

  it('validates required fields', async () => {
    render(<ContactForm />);
    
    // Submit empty form
    fireEvent.click(screen.getByRole('button', { name: /send/i }));
    
    // Check for validation messages
    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/message is required/i)).toBeInTheDocument();
    });
  });

  it('validates email format', async () => {
    render(<ContactForm />);
    
    // Enter invalid email
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'invalid-email' },
    });
    
    // Submit form
    fireEvent.click(screen.getByRole('button', { name: /send/i }));
    
    // Check for validation message
    await waitFor(() => {
      expect(screen.getByText(/invalid email format/i)).toBeInTheDocument();
    });
  });
});
