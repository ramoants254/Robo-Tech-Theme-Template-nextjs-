import dynamic from 'next/dynamic';
import LoadingSpinner from '@/components/LoadingSpinner';

const ErrorComponent = ({ message = 'Error loading component' }) => (
  <div className="text-red-500 p-4 text-center">
    {message}
  </div>
);

export const DynamicHero = dynamic(
  () => import('@/components/Hero').catch(() => ({ 
    default: () => <ErrorComponent message="Failed to load Hero component" /> 
  })),
  { loading: () => <LoadingSpinner />, ssr: false }
);

export const DynamicTestimonials = dynamic(
  () => import('@/components/Testimonials').catch(() => ({ 
    default: () => <ErrorComponent message="Failed to load Testimonials component" /> 
  })),
  { loading: () => <LoadingSpinner />, ssr: false }
);

export const DynamicPreOrder = dynamic(
  () => import('@/components/PreOrder').catch(() => ({ 
    default: () => <ErrorComponent message="Failed to load PreOrder component" /> 
  })),
  { loading: () => <LoadingSpinner />, ssr: false }
);
