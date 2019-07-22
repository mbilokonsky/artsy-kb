# Using Artsy-KB

There are a few ways in. At its core, the KB exists as a Postgres database managed by an instance of Hasura
running on a private Heroku instance. Adding and removing KB entries is as simple as using the GQL mutations
and queries that Hasura generates for us. See below for information about access - message me and I'll hook
you up!

## CLI

But the intention is not to expose this via the Hasura interface. Rather, the intention is to expose this via
some CLI tooling, and then mirror that same tooling in slack. We're not there yet, but the workflow should look
something like this:

```sh
$ kb add "How do I reverse a string in Javascript?"
-> What tags should I include (space-delimited): "Javascript String"
-> <opens text editor so you can write your answer>
-> 'mykola' created new entry 'How do I reverse a string in Javascript?' with tags '@javascript' and '@string' [timestamp]
```

Would create a new entry.

```sh
$ kb search @string
1) -> "How do I reverse a string in Javascript?"
2) -> "How do I reverse a string in Elixir?"
3) -> "What is string theory?"
$ Make a choice (1-3): 1
-> "In javascript you can reverse a string by typing `myString.reverse()`"
-> Do you want to open this entry in your web browser [yN]: "n"
$
```

## Slack

Once we've got a functioning CLI interface we can seek to expose it via slack. Obviously some of the
interactions will be different, but the core behavior should be the same. This suggests that the
core behavior should be defined independently of interface.

## Web

Finally, the entire KB should have a full interface on the web. We should be able to add/remove entries,
as well as search and edit what we find. The CLI and Slack interfaces can optionally generate links to
view entries on the web interface, if that's easier.
