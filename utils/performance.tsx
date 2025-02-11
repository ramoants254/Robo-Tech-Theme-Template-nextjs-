import React from 'react';
import type { ComponentType, FC } from 'react';

export const measurePerformance = (componentName: string): (() => void) => {
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    const startTime = performance.now();

    return () => {
      const endTime = performance.now();
      const duration = endTime - startTime;
      console.log(`[Performance] ${componentName} rendered in ${duration.toFixed(2)}ms`);

      // Report to analytics in production
      if (duration > 200) {
        console.warn(`[Performance Warning] ${componentName} took longer than 200ms to render`);
      }
    };
  }

  return () => {};
};

export function withPerformanceTracking<P extends object>(
  WrappedComponent: ComponentType<P>,
  componentName: string
): FC<P> {
  function PerformanceTrackedComponent(props: P) {
    React.useEffect(() => {
      const endMeasure = measurePerformance(componentName);
      endMeasure();
    }, []);

    return React.createElement(WrappedComponent, props);
  }

  PerformanceTrackedComponent.displayName = `WithPerformanceTracking(${componentName})`;
  return PerformanceTrackedComponent;
}
