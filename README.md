# Infinite Dungeon Crawler

Infinite Dungeon Crawler is an evolution of the text-adventure game utilizing OpenAI's API to generate dynamic and unending stories around the users actions.

## Installation

Clone this repository to your local machine and install all dependencies.

## Usage

To use this application you will need either a local postgres database or one you can connect to.

If you have a local database, go to server/db/db and change the name there to match your database name.

Otherwise, you need to create a .env file and have "DATABASE_URL" as your key.

In order to get the responses back from OpenAI, you will also need an API key placed in your .env with the key as "OPENAI_API_KEY"

```
# npm run seed
seeds your database

# npm run start
starts your server (for testing your routes)

# npm run start:dev
starts your server and builds client-side files
```
