# Semantic heading for React

## Dynamic heading component.

An automatic heading management compound component. Keeps track of the heading levels in the application and renders the correct <h> tag.
Levels deeper than 6 are clamped to `<h6>`. Use `levelOverride` (1–6) on a `Heading.Boundary` to hard-set the level of a section.

## Example

```jsx
<Heading.Boundary>
  <Heading.H>Heading 1</Heading.H>
  <p>Example of semantic headings</p>
  <Heading.Boundary>
    <Heading.H>Heading 2</Heading.H>
  </Heading.Boundary>
  <Heading.Boundary>
   <Heading.H>Heading 2</Heading.H>
   <Heading.Boundary>
     <Heading.H>Heading 3</Heading.H>
   </Heading.Boundary>
  </Heading.Boundary>
</Heading.Boundary>
```

## Requirements

- Node.js `^22.12.0` or `>=24`
- React 19

## Available Scripts

In the project directory, you can run:

### `npm start` (or `npm run dev`)

Runs the app in development mode with [Vite](https://vite.dev/).\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page hot-reloads when you make edits.

### `npm test`

Runs the test suite with [Vitest](https://vitest.dev/) in watch mode. Use `npm run test:run` for a single run (e.g. in CI).

### `npm run lint`

Lints the project with ESLint (flat config in `eslint.config.js`).

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run preview`

Serves the production build locally for a final check.

## Project notes

- Files that contain JSX use the `.jsx` extension (required by Vite).
- `index.html` lives in the project root (Vite entry point); static assets stay in `public/`.
- The project was originally bootstrapped with Create React App and migrated to Vite after CRA was deprecated.
