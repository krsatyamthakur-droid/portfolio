# Run the portfolio locally

With Node.js 24 installed, run these commands from the project folder.

```bash
npm ci
npm run dev
```

Open the URL printed in the terminal, usually <http://localhost:5173>.

To test contact form submissions locally, set `MONGODB_URI` in a private `.env.local` file in the project folder and restart the dev server.
