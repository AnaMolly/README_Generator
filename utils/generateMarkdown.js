// A function to generate markdown for README
//License badge images and links taken from: https://gist.github.com/artem-solovev/e1602722f84835f35daef4dfb3df5500
function generateMarkdown(answers) {
  
  if (answers.license == "MIT"){
    answers.license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (answers.license == "Apache 2.0"){
     answers.license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (answers.license == "GPLv2"){
    answers.license = "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://img.shields.io/badge/License-GPL%20v2-blue.svg)"
  } else if (answers.license == "GPLv3"){
    answers.license = "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)"
  } else if (answers.license == "LGPLv3"){
    answers.license = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](http://www.gnu.org/licenses/lgpl-3.0)"
  } else if (answers.license == "AGPLv3"){
    answers.license = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)"
  } else if (answers.license == "Mozilla 2.0"){
    answers.license = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  } else { answers.license = "[![Unlicense](https://img.shields.io/badge/License-Unlicense-blue.svg)]"}
  
  return `# ${answers.title}

  ${answers.license}

  ## Description
  ${answers.description}
  ![](${answers.screenshot})

  # Table of Contents
  - [Installation Instructions](#installation-instructions)
  - [Usage Instructions](#usage)
  - [Test Instructions](#tests)
  - [Contributing](#contributing)
  - [License](#license)
  - [Questions](#questions)

  # Installation Instructions
  ${answers.installation}

  # Usage
  ${answers.usage}

  # Tests
  ${answers.testing}

  # Contributing
  ${answers.collaborators}

  # License
  ${answers.license}
  
  # Questions
  If you have any questions about this application, please reach out to me at: 

  - Email: ${answers.email}
  - GitHub: ${answers.username}, ${answers.profile}
`;
}

// Module exports
module.exports = generateMarkdown;
