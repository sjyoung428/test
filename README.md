# Test

## Nock

- Http Request를 mock

[깃허브 링크](https://github.com/nock/nock)

```bash
npm install --save-dev nock
```

## Jest 설치

```bash
npm install --save-dev jest @types/jest ts-jest jest-environment-jsdom @testing-library/react @testing-library/dom @testing-library/jest-dom
```

## Jest 환경 설정

```json
// package.json
"scripts": {
  "unit-test": "jest --watchAll"
  },
"jest": {
    "preset": "ts-jest",
    "testEnvironment": "jest-environment-jsdom"
  },
```

## Cypress

```bash
npm install --save-dev cypress
```

### Cypress 설정

```json
"scripts": {
    ...
    "cypress": "npx cypress open",
    ...
  },
```

```js
export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    ...
  },
});
```

## Story book

### 설치

```bash
npx storybook@latest init
```
