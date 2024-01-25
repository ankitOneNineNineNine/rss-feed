# RSS Feed

This project uses Guardian API to fetch the json feed, then convert them to w3c compliant xml format.

## Description

This project uses Guardian API. Read the Docs: https://open-platform.theguardian.com/documentation/
This project fetches feed from newspapers and the respective sections using the API.
One example of such is Guardian API. The json feed is converted to RSS XML.

<b>Currently only Guardian API is supported.</b>

# Prerequisite

- Npm Package Manager

# Tools Used in the App

- `Node`
- `Express`
- `Axios` - Data Fetch from API
- `Typescript` - make the code Statically Typed
- `Vitest` - Unit Tests
- `Supertest` - Integration Test

# Standarizing the Code

- ESLint
- Prettier
- Husky

# Available Scripts

- `dev`: Run the codebase in dev mode
- `start`: Run the codebase for prod mode
- `lint`: Lint the project through eslint configurations (.eslintrc)
- `lint:fix`: Link and Fix any solvable errors
- `test`: Run unit tests
- `coverage`: Run unit test coverage using coverage@v8
- `prepare`: Install husky

# API

- `/[newspaper]/[section-name]`: This will hit respective API for (newspaper) and return JSION feed for section provided. The returned JSON value will be converted to RSS XML
  <br>
  Example: After running the project, hit `curl http://localhost:[port]/guardian/politics`

  ### Supported nespaper for routes

  - `Guardian` - `curl http://localhost:[port]/guardian/[section-name]`
    <br>
    <i> section-name needs to be in kebab-case </i>

## How to run this project?

1. Open terminal in desired drive/folder to clone the project
2. git clone https://github.com/ankitOneNineNineNine/rss-feed.git
3. Inside the Cloned folder, Open terminal.
4. Copy content from .env.example to .env
5. Run the command `docker run -it $(docker build -q .)`
   <br>
   <i>The app will run on PORT 5000. You can change this at your .env variable - PORT</i>
