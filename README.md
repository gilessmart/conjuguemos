# Mis Verbos

For practicing Spanish verb conjugation.

## Run in dev mode locally

```sh
npm run dev
```

View the result at http://localhost:3000/mis-verbos.

## Running a production build locally

Remove any previous build:
```sh
rm -rf doc-root
```

Build the project & put the build output in a folder structure that matches GitHub pages:
```sh
npm run build
mkdir doc-root
mv out doc-root/mis-verbos
```

Serve production build:
```sh
npx http-server doc-root
```

View the result at http://localhost:8080/mis-verbos/.
