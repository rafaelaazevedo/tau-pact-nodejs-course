[![Code Quality](https://www.code-inspector.com/project/4702/score/svg)](https://frontend.code-inspector.com/project/4702/dashboard)

[![license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/rafaelaazevedo/tau-pact-nodejs-course/blob/master/LICENSE)

[![Known Vulnerabilities](https://snyk.io/test/github/rafaelaazevedo/tau-pact-nodejs-course/badge.svg?targetFile=package.json)](https://snyk.io/test/github/rafaelaazevedo/tau-pact-nodejs-course?targetFile=package.json)

# PactJS project for the Test Automation University course

A simple Nodejs + Jest project configuring contract tests with PactJS
<br>
<br>

## Running via CLI

- Open your terminal on your project's folder

- Install Node packages:
`npm install`

- Run the consumer contract tests (Generate the contracts):
`npm run test:consumer`

- Run the provider contract tests (Verify the contracts):
`npm run test:provider`

- Run the provider server  `http://localhost:8081`  (Client API/Service):
`npm run provider`

- Run the consumer server `http://localhost:8080` (Client API/Service):
`npm run consumer`

- Publish the contracts:
`npm run publish:contract`

