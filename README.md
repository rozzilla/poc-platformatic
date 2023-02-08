# poc-platformatic

## Installation

- Run `npm install`
- Copy the example file with `cp .env.sample .env` and insert the right variables
- Run `plt db start`
- If you want to run a migration run `plt db migrations apply --to 001`
- To remove the DB changes run `plt db migrations apply -r`

## TODO

- Customize REST endpoints & GraphQL
