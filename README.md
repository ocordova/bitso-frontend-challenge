# Bitso React Code Challenge

Web app that lets you create islands

## Getting started

Steps to run the project:

```bash
npm run start:
```

Run tests

```bash
npm run test

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

- Display the count of islands
- Finish testing
- More performance improvements

## Nice to have

- Measure performance vs SVG, Canvas implementations
- Try a Dummy grid and only create active squares to boost performance
