// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)`
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n[License](#license)\n`;
    // "- [License](#license)"
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    \n The license of this project is under ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description: 
  ${data.descriptionofproject}

  ## Table of Contents:
  - [Description](#description)
  - [Installation](#installation)
  - [Test](#test)
  - [Usage](#usage)
  - [License](#license)
  - [Questions](#questions)


## Installation
${data.installation}

## Usage
Application link to run: 
${data.usage}

## Tests
${data.tests}

// ## Credits
Created by: ${data.github} (https://github.com/${data.github})\n
contributions: ${data.contributions}
${renderLicenseSection(data.license)}


## Questions
${data.questions}

${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
