# Protein Simple

**Eat better without overthinking it.**

A premium wellness web application by Ava Brooks, virtual wellness creator. Built with React, TypeScript, Vite, and Tailwind CSS.

## 🎯 Overview

Protein Simple helps users answer "What should I eat?" with practical, high-protein meal suggestions based on ingredients they already have. The application provides free tools, recipes, and guides, with an optional 21-Day Meal Plan product.

## ✨ Features

### Free Tools
- **What Should I Eat?** - Interactive meal builder that suggests recipes based on available ingredients, time, and meal type
- **Protein Guide** - Calculator and educational content about protein intake
- **Build My Plate** - Visual plate builder with protein estimation

### Content
- **12 High-Quality Recipes** - Complete with ingredients, instructions, substitutions, meal prep tips, and FAQ
- **4 Practical Guides** - High-protein foods, meal prep, snacks, and eating out
- **Recipe Database** - Searchable and filterable recipe collection

### Product
- **21-Day High-Protein Meal Plan** - Premium digital product (links to Gumroad)

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🗂️ Project Structure

```
src/
├── App.tsx                 # Main app with routing
├── main.tsx               # Entry point
├── index.css              # Global styles + Tailwind
├── components/
│   └── Layout.tsx         # Header, Footer, Navigation
├── pages/
│   ├── Home.tsx           # Landing page
│   ├── Tools.tsx          # Tools overview
│   ├── WhatShouldIEat.tsx # Meal builder tool
│   ├── ProteinGuide.tsx   # Protein calculator
│   ├── BuildMyPlate.tsx   # Plate builder
│   ├── Recipes.tsx        # Recipe index
│   ├── RecipeDetail.tsx   # Individual recipe
│   ├── Guides.tsx         # Guides index
│   ├── GuideDetail.tsx    # Individual guide
│   ├── MealPlan.tsx       # 21-Day plan product page
│   └── About.tsx          # About Ava Brooks
├── data/
│   └── recipes.ts         # Recipe database (12 recipes)
└── utils/
    ├── analytics.ts       # Event tracking abstraction
    └── mealMatcher.ts     # Recipe recommendation engine
```

## 🎨 Design System

### Colors
- **Cream**: `#FDF8F0` - Primary background
- **Forest Green**: `#2D4A3E` - Primary brand color
- **Sage**: `#8B9E7E` - Secondary accent
- **Beige**: `#E8DDD0` - Borders and subtle elements
- **Charcoal**: `#2C2C2C` - Text

### Typography
- **Headings**: DM Serif Display
- **Body**: DM Sans

## 🚀 Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

## 🔗 Product Links

- **21-Day Meal Plan**: https://floreshenrique.gumroad.com/l/ssuoev

All purchase CTAs throughout the site link to this URL.

## 📊 Analytics

Analytics events are tracked via an abstraction layer. Enable by setting environment variables:

```env
VITE_ANALYTICS_ENABLED=true
VITE_ANALYTICS_PROVIDER=your-provider
```

Tracked events:
- `tool_started` - User begins using a tool
- `tool_completed` - User completes a tool
- `recipe_viewed` - User views a recipe
- `recipe_saved` - User saves a recipe
- `calculator_completed` - User completes protein calculator
- `plate_builder_completed` - User completes plate builder
- `product_cta_clicked` - User clicks product CTA
- `email_signup` - User submits email
- `external_checkout_clicked` - User clicks Gumroad link

## 📧 Email Capture

Email capture UI is included with configurable provider support via environment variables:

```env
VITE_EMAIL_PROVIDER=your-provider
VITE_EMAIL_API_KEY=your-api-key
```

## 🔍 SEO

The application includes:
- Dynamic metadata for all pages
- JSON-LD structured data (Organization, Recipe, BreadcrumbList)
- Open Graph and Twitter Card meta tags
- Sitemap.xml with all routes
- Robots.txt
- Semantic HTML with proper heading hierarchy
- Image alt text
- Internal linking strategy

## ⚖️ Trust & Safety

The application:
- ✅ Clearly identifies Ava as a virtual creator
- ✅ Includes health disclaimers throughout
- ✅ Labels protein estimates as approximate
- ✅ States content is educational, not medical advice
- ❌ Does NOT make weight loss guarantees
- ❌ Does NOT use fake testimonials
- ❌ Does NOT use fake urgency or scarcity
- ❌ Does NOT present Ava as a medical professional

## 📱 Responsive Design

Mobile-first responsive design with:
- Sticky mobile CTA for meal plan
- Hamburger menu for mobile navigation
- Touch-friendly interactive elements
- Optimized for Core Web Vitals

## 🎯 Target Audience

US women ages 35-55 who want:
- Practical meal ideas
- Better meal organization
- High-protein eating guidance
- Simple, realistic approaches to healthy eating

## 📄 License

This project is proprietary. All rights reserved.

## 👤 Creator

**Ava Brooks** - Virtual Wellness Creator

Making high-protein eating, meal planning, and healthy habits simpler for real people with real lives.

---

Built with ❤️ for practical, sustainable wellness.
