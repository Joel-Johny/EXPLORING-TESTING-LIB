

function customTransformer(fileContent, filePath) {
  const fs = require('fs');
const path = require('path');
const { transformSync } = require('@babel/core');
  // Check if file is within node_modules/react-native
  if (filePath.startsWith(path.join(process.cwd(), 'node_modules/react-native'))) {
    // Use Babel for react-native
    const babelConfigPath = path.join(process.cwd(), '.babelrc' // Adjust path if needed
                                 || path.join(process.cwd(), 'babel.config.js')); // Adjust path if needed
    if (!fs.existsSync(babelConfigPath)) {
      throw new Error('Babel configuration not found!');
    }
    const babelConfig = JSON.parse(fs.readFileSync(babelConfigPath, 'utf-8'));
    return transformSync(fileContent, babelConfig).code;
  } else {
    // Use SWC for everything else
    const swc = require('@swc/jest');
    return swc.transformSync(fileContent, { // Configure SWC options if needed
      jsc: {
        parser: { syntax: 'typescript' }, // Or 'ecmascript' for JavaScript
        transform: {
          react: { // Add SWC-specific React transforms if needed
            runtime: 'automatic',
          },
        },
      },
    }).code;
  }
}

module.exports = customTransformer;
