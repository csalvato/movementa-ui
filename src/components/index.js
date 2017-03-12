// Require all files in the `components` directory that
// are not a .test.js or .stories.js file.
const req = require.context('.', true, /\.\/[^/]+\/[^/]+\/((?!test|stories).)*\.js$/)

req.keys().forEach((key) => {
  // Export component names based on the directory in which they live.
  // For example, "HomePage" component in `./pages/HomePage/index.js` or
  // `./pages/HomePage/HomePage.js` would be importable as `HomePage`
  const componentName = key.replace(/^.+\/([^/]+)\/([^.]+)\.js/, '$1')
  module.exports[componentName] = req(key).default
})
