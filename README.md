# testcafe-circleCI

This repository provides simple test files with good practices on how to use Testcafe. You will find basic usage and advanced features combined with a free CircleCI set up.

# Installation

1. Clone this repository:
git clone https://github.com/guigitH/testcafeSugr.git

2. Go to the project's root directory:
cd testcafe-examples

3. Install the dependencies:
npm install

# Usage
Use the `npm run test` script to run all tests in Chrome or `npm run test:headless` for headless.

# CircleCI

1. Sign up and try CircleCI for free, you can directly link your github account and start using CircleCI:
https://circleci.com/docs/first-steps/

2. Push any new commit to trigger the workflow on CircleCI

## Configuration

1. We currently use the `node@5.0.2` orbs because it provibe reusable packages of parameterizable configuration.
2. The configuration can be found in `.circleci/config.yml`. 
3. Functional tests are run in parallel as demo for concurrency.
