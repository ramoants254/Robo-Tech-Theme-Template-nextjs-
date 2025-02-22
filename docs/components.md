# RoboTech Component Documentation

## Core Components

### 1. RobotShowcase
The main component for displaying robot features and capabilities.

```tsx
import RobotShowcase from '@/components/RobotShowcase';

<RobotShowcase
  robots={[
    {
      id: 1,
      name: 'Industrial Bot',
      description: 'Advanced industrial automation',
      features: ['Precision Control', 'AI Integration']
    }
  ]}
/>
```

Props:
- `robots`: Array of robot objects
- `showAnimation`: Boolean to enable/disable animations
- `layout`: 'grid' | 'list' (default: 'grid')

### 2. Newsletter
Component for email subscription functionality.

```tsx
import Newsletter from '@/components/Newsletter';

<Newsletter
  onSubscribe={(email) => console.log(email)}
  theme="dark"
/>
```

Props:
- `onSubscribe`: Callback function for form submission
- `theme`: 'light' | 'dark' (default: 'dark')
- `position`: 'inline' | 'modal' (default: 'inline')

### 3. Search
Global search component with keyboard shortcuts.

```tsx
import Search from '@/components/Search';

<Search
  onSearch={(query) => console.log(query)}
  searchTypes={['blog', 'products']}
/>
```

Props:
- `onSearch`: Callback function for search
- `searchTypes`: Array of search categories
- `placeholder`: Custom placeholder text

## Layout Components

### 1. Navigation
Main navigation component with mobile responsiveness.

```tsx
import Navigation from '@/components/Navigation';

<Navigation
  items={[
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' }
  ]}
/>
```

Props:
- `items`: Array of navigation items
- `transparent`: Boolean for transparent background
- `sticky`: Boolean for sticky positioning

### 2. Footer
Site footer with customizable sections.

```tsx
import Footer from '@/components/Footer';

<Footer
  sections={[
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' }
      ]
    }
  ]}
/>
```

Props:
- `sections`: Array of footer sections
- `showNewsletter`: Boolean to show newsletter
- `theme`: 'light' | 'dark'

## Form Components

### 1. ContactForm
Contact form with validation and submission handling.

```tsx
import ContactForm from '@/components/ContactForm';

<ContactForm
  onSubmit={(data) => console.log(data)}
  showCompanyField={true}
/>
```

Props:
- `onSubmit`: Form submission handler
- `showCompanyField`: Boolean to show company field
- `initialValues`: Object with initial form values

## Animation Components

### 1. AnimatedBackground
Animated background effects component.

```tsx
import AnimatedBackground from '@/components/AnimatedBackground';

<AnimatedBackground
  type="particles"
  density={50}
/>
```

Props:
- `type`: 'particles' | 'waves' | 'gradient'
- `density`: Number of particles
- `speed`: Animation speed

## Best Practices

1. **Performance**
   - Use dynamic imports for large components
   - Implement proper loading states
   - Optimize images using next/image

2. **Accessibility**
   - Include proper ARIA labels
   - Ensure keyboard navigation
   - Maintain proper contrast ratios

3. **Responsiveness**
   - Use mobile-first approach
   - Test on multiple screen sizes
   - Implement proper breakpoints

4. **State Management**
   - Use React Context for global state
   - Implement proper loading states
   - Handle errors gracefully

## Theme Customization

### Colors
```tsx
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          // ... other shades
        }
      }
    }
  }
}
```

### Typography
```tsx
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif']
      }
    }
  }
}
```

## Animation Guidelines

1. **Page Transitions**
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
>
  {children}
</motion.div>
```

2. **Hover Effects**
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click me
</motion.button>
```

## Error Handling

1. **Form Errors**
```tsx
const [error, setError] = useState<string | null>(null);

try {
  await submitForm(data);
} catch (err) {
  setError('Failed to submit form');
}
```

2. **API Errors**
```tsx
const handleApiError = (error: Error) => {
  console.error(error);
  toast.error('Something went wrong');
};
```

## Testing

1. **Component Testing**
```tsx
import { render, screen } from '@testing-library/react';

test('renders component', () => {
  render(<Component />);
  expect(screen.getByText('Hello')).toBeInTheDocument();
});
```

2. **Integration Testing**
```tsx
test('form submission', async () => {
  render(<ContactForm />);
  await userEvent.type(screen.getByLabelText('Email'), 'test@example.com');
  await userEvent.click(screen.getByText('Submit'));
});
```
