import '@testing-library/jest-dom';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: require('react').forwardRef((props, ref) => <div ref={ref} {...props} />),
    button: require('react').forwardRef((props, ref) => <button ref={ref} {...props} />),
  },
  AnimatePresence: ({ children }) => children,
}));
