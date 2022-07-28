# Testing

We are using Testcafe as our E2E testing framework.

## Table of Contents

1. [Initial Setup](#initial-setup)
1. [Overview](#overview)
1. [Rules](#rules) 👮‍♂️
1. [Best Practices](#best-practices)

## Initial Setup

There is currently no set up needed to run the tests locally. 

## Overview

- End-to-end tests are stored in `/tests`
- Tests are written against the testcafe example provided web page. This is a production website maintained by testcafe

## Rules

### Each test case needs to have a unique ID

In order see the status of a TestCafe over time and therefore each test case needs to be identified by a unique ID. The ID should just be a timestamp generated at the time of writing the test. For example,

```typescript
test.meta({ id: '1597053806061' })('test 1', async t => {});
```

You can easily generate a timestamp with the following CLI command:

```shell
node -e "console.log(new Date().getTime());"
```

## Best Practices

### Use Models

Models are based on the [Page Model](https://devexpress.github.io/testcafe/documentation/recipes/extract-reusable-test-code/use-page-model.html) pattern.

In addition we use class inheritance and composition to reuse code and keep our tests consistent. For example, almost every form will contain certain parts. Therefore we created a `BasePage`, which other page models like `ExamplePage` or `ThankYouPage` can extend.

here an example:

```typescript
test.meta({ id: '1657929369' })(
  'User can populate a name',
  async t => {
    const examplePage = new ExamplePage(t);
    await examplePage.setNativeDialogHandler(() => true)
    await examplePage.click('input[id=populate]')
  },
);
```
Each user interaction with the page is encapsulated in a single method.
