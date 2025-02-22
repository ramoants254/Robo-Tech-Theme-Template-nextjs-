# RoboTech Customization Guide

## Table of Contents
1. [Theme Customization](#theme-customization)
2. [Layout Customization](#layout-customization)
3. [Component Customization](#component-customization)
4. [Adding New Pages](#adding-new-pages)
5. [Styling Guidelines](#styling-guidelines)

## Theme Customization

### Colors
The theme uses Tailwind CSS for styling. Customize colors in `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          // ... add your custom colors
        },
        secondary: {
          // ... your secondary colors
        }
      }
    }
  }
}
```

### Typography
Modify fonts in `app/layout.tsx`:

```tsx
import { Inter, Roboto, OpenSans } from 'next/font/google'

// Add or modify fonts
const inter = Inter({ subsets: ['latin'] })
```

### Spacing
Customize spacing in `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        // ... add custom spacing
      }
    }
  }
}
```

## Layout Customization

### Navigation
Modify the navigation menu in `components/NavMenu.tsx`:

```tsx
const menuItems = [
  { href: '/', label: 'Home' },
  // Add or modify menu items
]
```

### Footer
Customize footer sections in `components/Footer.tsx`:

```tsx
const footerLinks = {
  company: [
    // Modify company links
  ],
  // Add or modify sections
}
```

## Component Customization

### RobotShowcase
Customize the showcase in `components/RobotShowcase.tsx`:

```tsx
interface Robot {
  id: number;
  name: string;
  // Add or modify properties
}
```

### AnimatedBackground
Modify background effects in `components/AnimatedBackground.tsx`:

```tsx
const config = {
  particleCount: 50,
  // Modify animation parameters
}
```

## Adding New Pages

1. Create a new file in `app/your-page/page.tsx`
2. Add the route to navigation
3. Import required components
4. Follow the existing styling patterns

Example:
```tsx
export default function NewPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      // Your content
    </div>
  )
}
```

## Styling Guidelines

### CSS Classes
Follow this order for classes:
1. Layout (flex, grid, position)
2. Spacing (margin, padding)
3. Typography
4. Colors
5. Effects

Example:
```html
<div class="flex items-center space-x-4 text-lg font-bold text-white hover:opacity-80">
```

### Animation Guidelines
Use Framer Motion for animations:
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
```

### Responsive Design
Follow mobile-first approach:
```html
<div class="text-base md:text-lg lg:text-xl">
```

### Best Practices
1. Use semantic HTML
2. Maintain accessibility
3. Keep components modular
4. Follow TypeScript types
5. Document complex logic

## Performance Optimization

### Image Optimization
Use Next.js Image component:
```tsx
import Image from 'next/image'

<Image
  src="/path/to/image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority={true}
/>
```

### Code Splitting
Use dynamic imports:
```tsx
const DynamicComponent = dynamic(() => import('./Component'))
```

### Loading States
Add loading states:
```tsx
<Suspense fallback={<LoadingSpinner />}>
  <Component />
</Suspense>
```

## Need Help?
For additional support:
- Email: support@example.com
- Documentation: https://docs.example.com
- GitHub Issues: https://github.com/example/robo-tech/issues
