// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  }
  if(license === "Apache 2.0") {
    return `![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  }
  if(license === "IBM") {
    return `![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)`
  }
  if(license === "Mozilla") {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`
  }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  if(license === "Apache 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if(license === "IBM") {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
  }
  if(license === "Mozilla") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
}


// Create a function to generate markdown for README
function generateMarkdown(data) {
  const readmeTemp = `# ${data.title}  
${renderLicenseBadge(data.license)}
  
## Table of Contents:
* [Description](#Description)
* [Installation](##installation)
* [Usage](##usage)
* [Contribution Guidelines](##contribution)
* [Testing](##test)
* [License](##license)
* [Links](##links)
* [FAQs](##Questions)
  
## Description:
${data.description}
  
## Installation:
${data.installation}
  
## Usage:
${data.usage}
  
## Contribution:
${data.contribution}
  
## Test:
${data.test}
  
## License:
${renderLicenseLink(data.license)}
  
## Links:
[Deployed Site/Related Links](${data.link})
  
## Questions?
Contact me through Github:
[Git Hub](https://github.com/${data.username})
Or send an email to: ${data.email}`
return readmeTemp;
}

module.exports = generateMarkdown;