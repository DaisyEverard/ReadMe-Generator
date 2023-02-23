// function to generate markdown for README
function generateMarkdown(data) {
  const {title, description, installation, usage, contributing, 
    tests, license, questions} = data; 
    
  let mdContent = `# ${title}

  `

  if (description) {
    mdContent += `## Description

    ${description}

  `
  }

  mdContent += `## Preview

  <p align="center">
  <img src="YOUR SRC HERE" width="700" alt="screenshot of site">
  </p>
  
  ## Table of Contents

  - Installation: how to install this app and its dependencies
  - Usage: How this app is used
  - Contributing: How to contribute to our project
  - Tests: How to carry out tests on this app
  - Questions: Contact information to send your questions and feeback to
  
  `

  if (installation) {
    mdContent += `## Installation

    To install this project: ${installation}`
  }

  if (usage) {
    mdContent += `## Usage

    ${usage}
  
    `
  }

  if (contributing) {
    mdContent += `## Contributing

    We love to hear that people are enthusatic about our project and want
    to get involved! To contribute:
    ${contributing}; 
    
    `
  }

  if (tests) {
    mdContent += `## Tests

    To test the app, please follow these instructions:
    - ${tests}
    
    `
  }

  if (questions) {
    mdContent += `## Questions

    If you have any questions or feedback about ${title}, please get in contact 
    with us at ${questions}
    
    `
  }

  if (license) {
    mdContent += `## License

    ${license}
    
    `
  }

  return mdContent; 
}

module.exports = generateMarkdown;
