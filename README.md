# MediQueue Codespaces Starter

## Run it
1. Upload/extract these files into the root of a GitHub Codespaces repository.
2. Open Terminal and run:

```bash
npm install
npm run dev
```

3. Open the **Ports** tab and open port **3000**.

## Included prototype features
- Hospital dashboard and capacity snapshot
- OPD demo queue, patient registration, search and status updates
- Bed management demo grid
- M/M/c queue theory calculator and what-if controls
- Fictional city hospital capacity comparison
- Responsive design

## Important
This first version stores demo data in browser memory; refreshing resets it. It does not connect to a database or real hospitals. Use fictional data only. For a next stage, connect Supabase/PostgreSQL, add authentication and role-based access, then move all data operations to protected backend APIs. Predictions and hospital values are illustrative, not for real clinical decisions.
