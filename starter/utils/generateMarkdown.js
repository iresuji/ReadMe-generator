// function to generate markdown for README
function generateDescription(description) {
  return `
## Description
${description}
`;
}

function licenseBadge(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  else if (license === 'APACHE 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  else if (license === 'GPL 3.0') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  else if (license === 'BSD 3') {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  }
};

// template literals

//Function to ommit description if this is not on the file
function generateMarkdown(data) {
  return `# ${data.title}
  ${licenseBadge(data.license)}

${data.description !== '' ? generateDescription(data.description) : ''}

## Table of Contents
1.  [Description](#Description)
2.  [Installation guide](#Installation-guide)
3.  [Usage](#Usage)
4.  [License](#License)
5.  [Contributing](#Contributing)
6.  [Tests](#Tests)
7.  [Questions](#Questions)


## Installation guide
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.contributing}

## Questions
Check out my [GiHub](https://github.com/${data.username}) page for more details.
For any additional questions please contact me at (${data.email})
`
    ;

}

module.exports = generateMarkdown;

//Add a badge depending on license at the beggining missing
