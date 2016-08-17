# GQL
*Git Query Language* (GQL) [pronounced “Jee-quil”] is a SQL interface to Git, written in Node.js. It was inspired by this [tweet](https://twitter.com/clayallsopp/status/695377832369721344). The Git commit log file is parsed and read into an SQL table (called `commits`). A REPL, similar to SQL's, is then made available where it tokenizes and parses the SQL commands.

## Install 
```sh
$ npm install -g gql
# or build from source:
$ git clone git@github.com:xasos/GQL.git
$ cd GQL
$ npm install -g .
```

## Usage
```sh
# Inside an initialized git repo, run:
$ gql
# This will open up a live SQL console
# Supported commands include SELECT,
# FROM, WHERE, DESCRIBE, AND|OR, EXISTS
# HAVING, IN, INNER/LEFT/RIGHT JOIN, LIMIT,
# ORDER BY, UNION | ALL, TRUNCATE TABLE
```sh

## Example queries
To find all commits between 08-17-2016 and 08-21-2016, run
` SELECT * FROM \`commits\` ORDER BY date LIMIT 10`

## Dependencies
 - [parse-git](https://github.com/blittle/parse-git.git), used to parse Git log files
 - [sqljs], used to tokenize and parse SQL statements

## License
GQL is licensed under the MIT License. See [`LICENSE`](LICENSE) for the full license text.
