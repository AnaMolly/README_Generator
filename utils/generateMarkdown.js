// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ## Table of Contents
  - [Deployed URL](#deployed-url)
  - [Description](#description)
  - [Installation Instructions](#installation-instructions)
  - [Usage Instructions](#usage-instructions)
  - [Test Instructions](#test-instructions)
  - [Collaborators](#collaborators)
  - [License](#license)
  - [Questions](#questions)

  ## Deployed URL
  ${answers.applink}

  ## Description
  ${answers.description}
  ![](${answers.screenshot})

  ## Installation Instructions
  ${answers.installation}

  ## Usage Instructions
  ${answers.usage}

  ## Test Instructions
  ${answers.testing}

  ## Collaborators
  ${answers.collaborators}

  ## License
  ${answers.license}
  
  # Questions
  If you have any questions about this application, please reach out to me at: 

  - Email: ${answers.email}
  - GitHub: ${answers.username}, ${answers.profile}
`;
}

module.exports = generateMarkdown;
