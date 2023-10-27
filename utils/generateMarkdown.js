// TODO: Create a function that returns a license badge based on which license is passed in
const fs = require("fs");


const licenses = [
  {
    name: "GNU Affero General Public License v3.0",
    url: "agpl-3.0",
    badge: "GNU_AGPL-v3.0-green",
    text: "agpl-3.0"
  },
  {
    name: "GNU General Public License v3.0",
    url: "gpl-3.0",
    badge: "GNU_GPL-v3.0-green",
    text: "gpl-3.0"
  },
  {
    name: "GNU Lesser General Public License v3.0",
    url: "lgpl-3.0",
    badge: "GNU_LGPL-v3.0-green",
    text: "lgpl-3.0"
  },
  {
    name: "Mozilla Public License 2.0",
    url: "mpl-2.0",
    badge: "Mozilla_Public_License-v2.0-green",
    text: "mpl-2.0"
  },
  {
    name: "Apache License 2.0",
    url: "apache-2.0",
    badge: "Apache_License-v2.0-green",
    text: "apache-2.0"
  },
  {
    name: "MIT License",
    url: "mit",
    badge: "MIT_License-grey",
    text: "mit"
  },
  {
    name: "Boost Software License 1.0",
    url: "bsl-1.0",
    badge: "Boost_Software_License-v1.0-green",
    text: "bsl-1.0"
  },
  {
    name: "The Unlicense",
    url: "unlicense",
    badge: "The_Unlicense-grey",
    text: "the-unlicense"
  },
]

function findLicense(data) {
  const foundLicense = licenses.find((licenseItem) => licenseItem.name === data.license);
  return foundLicense;
}

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![Static Badge](https://img.shields.io/badge/${license.badge})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `[${license.name}](https://choosealicense.com/licenses/${license.url}/)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseText = fs.readFileSync(`./assets/licenses/${license.text}.txt`, "utf8", (error, data) => {
    if (error) {
      console.log(error);
    }
    console.log("Success.");
    return data;
  }
  );

  console.log(licenseText);
  return licenseText;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const foundLicense = findLicense(data);
  const licenseBadge = renderLicenseBadge(foundLicense);

  const title = `# ${data.title}\t${licenseBadge}\n`;



  const description = `## Description\n${data.description}\n`;

  const toc = "## Table of Contents\n- [Installation](#installation)\n- [Usage](#usage)\n- [Credits](#credits)\n- [License](#license)\n- [Questions](#questions)\n- [Tests](#tests)\n";

  const installation = `## Installation\n${data.install}\n`
  const usage = `## Usage\n${data.usage}\n`
  const credits = `## Credits\n${data.credits}\n`

  const licenseLink = renderLicenseLink(foundLicense);

  const licenseText = renderLicenseSection(foundLicense);


  return title + description + toc + installation + usage + credits + `
## License

${licenseLink}

${licenseText}

## Questions

Find me on [GitHub](https://github.com/${data.gitHubUser})
OR
[Email Me](mailto:${data.email})

## Tests

${data.tests}

`;
}

module.exports = { generateMarkdown };
