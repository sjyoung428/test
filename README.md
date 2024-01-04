# Test

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
