import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';
import { configure } from '@testing-library/react';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Configure testing library
configure({
  testIdAttribute: 'data-testid',
});
