// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)`
  }
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return "- [License](#license)"
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return "## License"
  ${ license }
  }
  return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [Test](#test)
  - [Credits](#credits)
  - [Questions](#questions)
${renderLicenseLink(data.license)}
## Description
${data.projectDesc}

## Installation
${data.install}

## Usage
${data.usage}

## Tests
${data.tests}

## Credits
${data.credits}

## Questions
${data.questions}

${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
