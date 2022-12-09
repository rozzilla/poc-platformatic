# poc-platformatic

## Installation

- Run `npm install`
- Copy the example file with `cp .env.sample .env` and insert the right variables
- Run `npx platformatic db start`
- If you want to run a migration run `npx platformatic db migrations apply --to 001`
- To remove the DB changes run `npx platformatic db migrations apply -r`

## TODO

- Connect to all existing schema
- Customize REST endpoints & GraphQL
