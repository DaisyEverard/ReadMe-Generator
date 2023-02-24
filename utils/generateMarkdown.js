// function to generate markdown for README
function generateMarkdown(data) {
  const {title, description, installation, usage, contributing, 
    tests, license, questions} = data; 
    
  let mdContent = `# ${title}`


  if (description) {
    mdContent += `

    ## Description

    ${description}`
  }

  mdContent += `
  
  ## Preview

  <p align="center">
  <img src="YOUR SRC HERE" width="700" alt="screenshot of site">
  </p>
  
  ## Table of Contents

  - Installation: how to install this app and its dependencies
  - Usage: How this app is used
  - Contributing: How to contribute to our project
  - Tests: How to carry out tests on this app
  - Questions: Contact information to send your questions and feeback to
  `; 

  if (installation) {
    mdContent += `
    
    
    ## Installation

    To install this project: ${installation}`
  }

  if (usage) {
    mdContent += `
    
    ## Usage

    ${usage}`
  }

  if (contributing) {
    mdContent += `
    
    ## Contributing

    We love to hear that people are enthusatic about our project and want
    to get involved! To contribute:
    ${contributing};`
  }

  // tests section
  if (tests) {
    mdContent += `
    
    ## Tests

    To test the app, please follow these instructions:
    - ${tests}`
  }

  // questions section
  if (questions) {
    mdContent += `
    
    ## Questions

    If you have any questions or feedback about ${title}, please get in contact 
    with us at ${questions}`
  }

  // add license section
    mdContent += `
    
    ## License

    ${license}`

    // license type description
    if (license === "Apache") {
      mdContent += `
      The Apache License is a permissive free software license written 
      by the Apache Software Foundation (ASF). It allows users to use Software 
      for any purpose, to distribute it, to modify it, and to distribute modified 
      versions of the software under the terms of the license, without concern 
      for royalties.
      `
    } else if (license === "GNU General Public") {
      mdContent += `
      The GNU General Public License (GNU, GPL, or GPL) is a free software license 
      originally written by Richard Stallman of the Free Software Foundation, which 
      guarantees that users are free to use, share, and modify the software without 
      paying anyone for it.
      `
    } else if (license === "MIT") {
      mdContent += `
      The MIT License is a permissive software license that places few restrictions
       of reuse. Users of software using an MIT License are permitted to use, copy, 
       modify, merge publish, distribute, sublicense and sell copies of the software.
      `
    } else if (license === "BCD 2-Clause \"Simplified\"") {
      mdContent += `
      The Simplified BSD (or BSD 2-clause) license is the simplest BSD license. A 
      licensee of BSD-licensed software can: Use, copy and distribute the unmodified 
      source or binary forms of the licensed program.
      `
    } else if (license === "BSD 3-Clause \"New\" or \"Revised\"") {
      mdContent += `
      BSD 3-clause is a permissive licence. OSI states that it is supported by an 
      important community of developers. BSD-3 allows you almost unlimited freedom 
      with the software so long as you include the BSD copyright and license notice 
      in it
      `
    } else if (license === "Boost Software") {
      mdContent += `
      BSL places very few restrictions on licensed code, so users have plenty of 
      leeway to use, modify, reproduce, distribute, and transmit it. Specifically, 
      users can:

      - Use the code in commercial applications:
      - Modify the code
      - Distribute copies of the code and any modifications
      `
    } else if (license === "Creative Commons Zero v1.0 Universal") {
      mdContent += `
      The CCO tool enables educators, scientists, artists and other creators or 
      owners of copyright - or database protected material to waive those rights 
      and in their works and distribute them freely in the public domain, allowing 
      them to be built upon, enhanced and reused by others for any purpose without 
      restriction under copyright or database law.
      `
    } else if (license === "Eclipse Public") {
      mdContent += `
      The Eclipse Public License allows users of the licensed code to: Use the code 
      commercially: The EPL imposes no conditions on using the code in software that's 
      sold commercially except for the requirement to extend legal protections to EPL 
      contributors.
      `
    } else if (license === "GNU Affero General Public") {
      mdContent += `
      Software under the GPL may be run for all purposes, including commercial 
      purposes and even as a tool for creating proprietary software, such as when 
      using GPL-licensed compilers. Users or companies who distribute GPL-licensed 
      works (e.g. software), may charge a fee for copies or give them free of charge.
      Users who interact with the licensed software over a network must be allowed 
      to receive the source for that program.
      `
    } else if (license === "GNU General Public") {
      mdContent += `
      Software under the GPL may be run for all purposes, including commercial 
      purposes and even as a tool for creating proprietary software, such as when 
      using GPL-licensed compilers. Users or companies who distribute GPL-licensed 
      works (e.g. software), may charge a fee for copies or give them free of charge.
      `
    } else if (license === "GNU Lesser General Public") {
      mdContent += `
      LGPL allows you to use and distribute the open source software with your 
      application without releasing the source code for your application.
      `
    } else if (license === "Mozilla Public") {
      mdContent += `
      software available under the MPL is available for anyone (including individuals 
      and companies) to use for any purpose. The MPL only creates obligations for 
      you if you want to distribute the software outside your organization.
      `
    } else if (license === "The Unlicense") {
      mdContent += `
      The Unlicense is a public domain equivalent license for software which 
      provides a public domain waiver with a fall-back public-domain-like license
      `
    }

  return mdContent; 
}

module.exports = generateMarkdown;
