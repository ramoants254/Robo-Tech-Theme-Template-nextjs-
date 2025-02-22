export const measurePerformance = (name: string) => {
  if (typeof window === 'undefined') return () => {};
  
  const startMark = `${name}-start`;
  const endMark = `${name}-end`;
  const measureName = `${name}-measure`;
  
  performance.mark(startMark);
  
  return () => {
    performance.mark(endMark);
    performance.measure(measureName, startMark, endMark);
    
    // Clean up marks
    performance.clearMarks(startMark);
    performance.clearMarks(endMark);
  };
};
