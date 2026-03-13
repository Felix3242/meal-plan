# 🍴 Meal Plan
A subscription-based AI meal planning application built with Next.js that generates personalized meal plans based on dietary preferences. Features Stripe payment integration, Clerk authentication, and real-time meal plan generation powered by Claude AI.

## Features
- AI-powered personalized meal plan generation with customizable dietary preferences
- Subscription management with weekly, monthly, and yearly billing options
- Secure user authentication and subscription verification with Clerk
- Real-time meal plan updates with React Query state management
- User profile management with subscription status and plan switching
- Responsive design optimized for desktop and mobile devices
- Secure API routes with Stripe webhook integration for subscription events
- Profile page with the ability to cancel or change subscription plans

## Tech Stack
- **Frontend**: Next.js 15, TypeScript, React Query, Clerk Auth
- **Backend**: Next.js API routes, Prisma ORM
- **Database**: PostgreSQL (via Neon)
- **Payments**: Stripe (subscriptions, webhooks)
- **AI**: Claude API for meal plan generation
- **Deployment**: Vercel

## Getting Started
**Prerequisites**
- Node.js 18+
- npm or yarn
- Stripe account for payment processing
- Clerk account for authentication
- PostgreSQL database (Neon recommended)
- Claude API key

**Installation**
```bash
npm install
npm run dev

### Environment Variables
Create `.env.local` with:

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
**Set up Stripe Webhooks Locally**
```bash
stripe login
stripe listen --forward-to localhost:3000/api/webhook
```
**Running the Application**

Open http://localhost:3000 in your browser to see the application.

## Usage
1. Sign up or log in with Clerk authentication
2. View available subscription plans (Weekly, Monthly, Yearly)
3. Complete payment with Stripe
4. Access the meal planning dashboard
5. Generate personalized meal plans based on dietary preferences
6. View meal plan history and analytics
7. Manage subscription from the profile page
