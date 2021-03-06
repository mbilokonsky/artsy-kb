# Introducing Artsy's Knowledgebase

A tool for sharing knowledge within Artsy. The idea is that we all spend a lot of time every day
looking up the answers to the same questions. Wouldn't it be useful if we had a way to track
what we learned? Bonus points if it directs other people to faster solutions for their own problems!

Enter `artsy-kb`, or just `kb` for short. It's intended to be a knowledgebase tool for artsy employees -
the idea is that we can add to it over time. Every time you learn something, it's a good idea to add
it to the knowledgebase for others to be able to use it!

## Yet Another Documentation Tool feels iffy

No! A KB is not formal documentation. This is meant to be used cookbook-style, e.g. each entry defines
a question to be answered and then answers that question. It's meant to be quick, idiosyncratic, a little
weird, and generally something to be integrated into your workflow in a low-pressure kind of way.

## Running Locally

To run this locally you'll want to create a `.env` file with `HGE_ENDPOINT` and `ADMIN_SECRET` set to the
values of the Hasura instance you'll be using. We just have the one right now, so ask myk and he'll set
you up!

## Deployment

This is being developed as a serverless application running against zeit's `now` ecosystem. Currently it's
scope to my `now` account so I'm the only one who can deploy. The various API endpoints are all autogenerated
by zeit, so I don't have to actually write any server code. I can just provide endpoints.

## Docs

Check out the [docs folder](/docs) for information about intended usage, architectural approach, etc.

## Next Steps

1. Finalize Entry schema in Hasura [DONE]
2. Implement 'core' API methods (`src/core/...`) [INPROGRESS]
3. Expose core API over API endpoints (`src/api/...`) [INPROGRESS]
4. Build out CLI over core API
5. Build out slack interface ((`src/api/_slack`)) [INPROGRESS]
