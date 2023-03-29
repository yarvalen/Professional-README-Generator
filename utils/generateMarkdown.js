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
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    \n This project is licensed under ${license}\n
    `
  }
  return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.projectDesc}

  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Test](#test)
  - [Usage](#usage)
  - [License](#license)
  - [Credits](#credits) 
  - [Questions](#questions)


## Installation
${data.installation}

## Usage
Application link/Commmand to run: ${data.link}
${data.usage}

## Tests
${data.tests}

## Credits
Created by: ${data.creator} (https://github.com/${data.gitHub})\n
Collaborations: ${data.credits}
${renderLicenseSection(data.license)}

${data.credits}

## Questions
${data.questions}

${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
