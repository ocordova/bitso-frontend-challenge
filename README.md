# Bitso React Code Challenge

Web app that lets you create islands

## Preview

![](docs/preview.gif?raw=true)

## Getting started

Steps to run the project:

```bash
npm run start
```

Run unit tests

```bash
npm run test

```

Run unit E2E tests

```bash
npm run cypress

```

## Project structure

```markdown
src
|-- core // Business logic
| |-- entities.ts // Encapsulate Enterprise wide business rules
| |-- tests // Jest tests
| |-- utils.ts // Business logic utils
|-- ui // React Web UI
| |-- components // Reusable components
| |-- utils // Web UI utils
| |-- views // Root level components (Pages)
```

## TODO

- ~~Display the count of islands~~
- ~~Finish unit testing~~
- ~~E2E Tests with cypress~~
- More performance improvements

## Nice to have

- Measure performance vs SVG or Canvas implementations
- Try a Dummy grid and only create active squares to boost performance
