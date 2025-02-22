const fs = require('fs');
const path = require('path');

const filesToRemove = [
  // Development files
  '.git',
  '.vscode',
  '.idea',
  'node_modules',
  '.env',
  '.env.local',
  '.env.development',
  '.env.test',
  '.env.production',
  '*.log',
  'tmp',
  'coverage',

  // Test files
  '__tests__',
  '*.test.*',
  '*.spec.*',
  'cypress',
  'playwright',
  'tests',

  // Documentation files
  'CONTRIBUTING.md',
  'CHANGELOG.md',
  'LICENSE.md',

  // Development scripts
  'scripts/cleanup.js',
  'analyze-bundle.js',

  // Temporary and cache files
  '.next',
  '.cache',
  'dist',
  'build'
];

const directoriesToKeep = [
  'app',
  'components',
  'contexts',
  'data',
  'hooks',
  'lib',
  'public',
  'styles',
  'types',
  'utils'
];

function cleanup(directory) {
  const items = fs.readdirSync(directory);

  for (const item of items) {
    const fullPath = path.join(directory, item);
    const stat = fs.statSync(fullPath);

    // Skip directories we want to keep
    if (stat.isDirectory() && directoriesToKeep.includes(item)) {
      continue;
    }

    // Check if item should be removed
    if (filesToRemove.some(pattern => {
      if (pattern.includes('*')) {
        const regex = new RegExp(pattern.replace('*', '.*'));
        return regex.test(item);
      }
      return pattern === item;
    })) {
      try {
        if (stat.isDirectory()) {
          fs.rmSync(fullPath, { recursive: true });
        } else {
          fs.unlinkSync(fullPath);
        }
        console.log(\`Removed: \${fullPath}\`);
      } catch (error) {
        console.error(\`Error removing \${fullPath}: \${error.message}\`);
      }
    }
  }
}

// Run cleanup
cleanup(path.resolve(__dirname, '..'));
console.log('Cleanup completed!');
