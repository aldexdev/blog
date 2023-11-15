# Personal blog (and Portfolio)

based on Guillermo Rauch's [blog](https://github.com/rauchg/blog)

This is the blog that powers `aldexdev.com`, built on
[next.js](https://nextjs.org/) and
deployed to the cloud via [Vercel](https://vercel.com).

## How to run

1. Clone the repository.
2. Install the dependencies

```
npm install
```

3. Run de development server

```
npm run dev
```

4. Enjoy!

## Deployment

First, install [Vercel CLI](https://vercel.com/download)

### Staging

```bash
vc
```

This is the equivalent of submitting a PR with the [GitHub integration](https://vercel.com/github)

#### Production

```bash
vc --prod
```

This is the equivalent of `git push` to `master` (or `main`) - (or merging a PR to master)
