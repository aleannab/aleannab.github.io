const penthouse = require('penthouse');
const fs = require('fs');
const path = require('path');

const url = 'https://www.antoinettecreates.com';
const cssPath = path.join(__dirname, '../dist/output.css');

// Read the CSS from the external file
const cssString = fs.readFileSync(cssPath, 'utf8');

penthouse({
  url: url,
  cssString: cssString,
})
  .then((criticalCss) => {
    // Specify the path and file name for the output CSS file
    const outputPath = './dist/critical.css'; // Modify the path and file name as needed

    // Write the generated critical CSS to the output file
    fs.writeFileSync(outputPath, criticalCss);
    console.log('Critical CSS generated and saved to ' + outputPath);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
