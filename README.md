# Meal Plan 
A subscription-based SaaS that generates personalized meal plans using Claude AI, with Stripe billing and Clerk auth.

## Features
- AI-powered meal plan generation with customizable dietary preferences
- Stripe subscription management with weekly, monthly, and yearly billing
- Clerk authentication with subscription verification
- Real-time meal plan updates with React Query
- Profile page with plan switching and cancellation

## Tech Stack
- **Frontend**: Next.js 15, TypeScript, React Query, Clerk Auth
- **Backend**: Next.js API routes, Prisma ORM
- **Database**: PostgreSQL (Neon)
- **Payments**: Stripe (subscriptions, webhooks)
- **AI**: Claude API
- **Deployment**: Vercel

## Getting Started
**Prerequisites**: Node.js 18+, Stripe account, Clerk account, PostgreSQL database, Claude API key

**Installation**
```bash
npm install
npm run dev
```
**Environment Variables**

Create `.env.local` with:
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_secret
DATABASE_URL=your_postgres_url
STRIPE_SECRET_KEY=your_stripe_secret
STRIPE_PRICE_WEEKLY=your_weekly_price_id
STRIPE_PRICE_MONTHLY=your_monthly_price_id
STRIPE_PRICE_YEARLY=your_yearly_price_id
STRIPE_WEBHOOK_SECRET=your_webhook_secret
CLAUDE_API_KEY=your_claude_key
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```
**Stripe Webhooks (Local)**
```bash
stripe login
stripe listen --forward-to localhost:3000/api/webhook
```
