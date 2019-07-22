# Software Architecture

This app has a few moving parts. We've got a data layer managed by Hasura, a core layer managing interaction
with the data layer, an API layer exposing both endpoints and functions, a CLI client, a Slack client and
a web client built using next.js.

## Data

We're running an instance of [hasura](http://hasura.io) on a private heroku server, which servers up
[this console](https://artsy-kb.herokuapp.com/console/api-explorer) and managed all of our data. Hasura
uses a fully relational Postgres store under the hood, but it tracks your schema changes and maintains an
up-to-date graphQL schema around your data model. You can then test out queries and mutations in their tool,
and port them over into your code when they work the way you want.

Access to the endpoint is protected right now. Contact myk for more information about how to get in on this
if you want to!

## Core

The API is what the CLI, slack and web clients all make use of under the hood. We expose a number of specific
operations that we want to support (add, edit, lookup, open) and each one manages its own GraphQL query strings.
These strings are passed to the data layer as necessary, and the results are returned to whichever client
made the initial query.

## API

The web API exists in the `/api` folder. This should basically map 1:1 against the core logic - each core behavior
should have its own endpoint, and all of its arguments should be exposed from that endpoint. Any clients that
want to interface with this as a web-app may use the `/api` endpoint provided they have access.

The core API may also be used directly by any code running locally, or which imports this library.

## Clients

The `cli` client exposes our core functionality via the command line. This client is designed for casual CLI access,
and I'd imagine it's the way that a lot of folks are going to want to use this tool so that they don't have to leave
their workflow. Full documentation will be posted when it's ready.

The `web` client is going to be built out as a `next` application. It's going to have the ability to render entries,
expose searching, allow edits, etc - we can use the core API for anything that's rendered server-side, and then at runtime
it can access any api behaviors it needs via HTTP.

The `slack` client is going to function as a port of our `cli` client to a slackified context. Unsure yet exactly what
features this will have, but we want to maintain parity at a minimum. We can probably do interesting things with the
more powerful UI elements that slack gives us,
