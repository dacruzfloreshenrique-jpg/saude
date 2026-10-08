# Vercel NOT_FOUND Error - Complete Guide

## 🔧 The Fix

Your `vercel.json` has been updated with the correct SPA routing configuration:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

**Deploy again:**
```bash
vercel --prod
```

---

## 🎯 Root Cause Analysis

### What Was Happening

**The Code Was Doing:**
- Your React app uses `BrowserRouter` for client-side routing
- When you navigate to `/recipes`, React Router handles it in the browser
- The URL changes to `/recipes`, but no actual file exists at that path on the server

**What It Needed to Do:**
- When you refresh the page at `/recipes`, the server needs to serve `index.html`
- React Router then reads the URL and renders the correct component
- This requires server-side URL rewriting

### The Error Trigger

1. **You navigate to `/recipes`** → Works fine (client-side routing)
2. **You refresh the page** → Browser requests `/recipes` from Vercel
3. **Vercel looks for a file** at `/recipes` → Doesn't exist
4. **Without rewrites** → Vercel returns 404 NOT_FOUND
5. **With rewrites** → Vercel serves `index.html` → React Router handles it ✅

### The Misconception

**Common misunderstanding:** "My app works locally, so it should work on Vercel."

**Reality:** 
- Locally, Vite's dev server automatically handles SPA routing
- On Vercel, you need to explicitly tell it to rewrite all routes to `index.html`
- Without this configuration, Vercel treats each route as a separate file

---

## 📚 The Concept: SPA Routing

### Why This Error Exists

The NOT_FOUND error protects you from:
- **Broken links** - Users getting 404s on valid routes
- **SEO issues** - Search engines can't index your pages
- **Poor UX** - Users can't bookmark or share specific pages
- **Refresh failures** - Users lose their place when refreshing

### The Correct Mental Model

**Traditional Multi-Page App (MPA):**
```
User requests /about → Server finds /about.html → Sends it
User requests /contact → Server finds /contact.html → Sends it
```

**Single-Page App (SPA):**
```
User requests / → Server sends index.html → React handles routing
User requests /about → Server sends index.html → React handles routing
User requests /contact → Server sends index.html → React handles routing
```

**The Key Insight:** In an SPA, the server only has ONE file (`index.html`). All other "pages" are virtual routes handled by JavaScript in the browser.

### How It Fits Into Web Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Browser (Client)                      │
│  ┌──────────────────────────────────────────────────┐  │
│  │  React Router                                     │  │
│  │  - Reads URL: /recipes                           │  │
│  │  - Matches route definition                      │  │
│  │  - Renders <Recipes /> component                 │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                            ↕
┌─────────────────────────────────────────────────────────┐
│                    Server (Vercel)                       │
│  ┌──────────────────────────────────────────────────┐  │
│  │  URL Rewriting                                    │  │
│  │  - Receives request: /recipes                    │  │
│  │  - Checks: Does /recipes file exist? No          │  │
│  │  - Applies rewrite rule                          │  │
│  │  - Serves /index.html instead                    │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

---

## 🚨 Warning Signs & Patterns

### What to Look Out For

1. **Using BrowserRouter without server configuration**
   ```tsx
   // ❌ This will cause 404s on refresh
   <BrowserRouter>
     <Routes>...</Routes>
   </BrowserRouter>
   ```

2. **App works locally but fails on deployment**
   - Dev servers (Vite, webpack-dev-server) auto-handle SPA routing
   - Production servers need explicit configuration

3. **Navigation works but refresh breaks**
   - Clicking links works (client-side)
   - Refreshing or direct URL access fails (server-side)

4. **Missing or incorrect vercel.json**
   - No `rewrites` configuration
   - Wrong `outputDirectory`
   - Incorrect rewrite pattern

### Similar Mistakes in Other Scenarios

**Netlify:**
```toml
# netlify.toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Apache (.htaccess):**
```apache
RewriteEngine On
RewriteRule ^.*$ /index.html [L]
```

**Nginx:**
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

**GitHub Pages:**
- Use `HashRouter` instead of `BrowserRouter`
- Or use a 404.html workaround

### Code Smells That Indicate This Issue

```tsx
// ❌ Using BrowserRouter without checking deployment config
import { BrowserRouter } from 'react-router-dom';

// ❌ Hardcoding absolute paths
<Link to="/recipes">Recipes</Link>  // May break if base path changes

// ❌ Not testing page refresh during development
// Always test: Navigate → Refresh → Should still work
```

---

## 🔄 Alternative Approaches

### Option 1: BrowserRouter + Rewrites (Current Approach) ✅ RECOMMENDED

**Pros:**
- Clean URLs: `/recipes`, `/about`
- SEO-friendly
- Best user experience
- Standard for modern SPAs

**Cons:**
- Requires server configuration
- Slightly more complex setup

**Configuration:**
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Option 2: HashRouter (No Server Config Needed)

**Pros:**
- Works everywhere without configuration
- Simple setup
- No server-side routing needed

**Cons:**
- Ugly URLs: `/#/recipes`, `/#/about`
- Less SEO-friendly
- Older pattern, less modern feel

**Code:**
```tsx
import { HashRouter } from 'react-router-dom';

<HashRouter>
  <Routes>...</Routes>
</HashRouter>
```

**When to use:**
- Static hosting without rewrite support (GitHub Pages)
- Quick prototypes
- When you can't configure the server

### Option 3: Static Site Generation (SSG)

**Pros:**
- Each route is a real HTML file
- Best SEO
- Fastest initial load
- No routing configuration needed

**Cons:**
- Requires framework like Next.js, Remix, or Astro
- More complex build process
- Not suitable for highly dynamic apps

**Example with Next.js:**
```jsx
// pages/recipes.js - automatically creates /recipes route
export default function Recipes() {
  return <div>Recipes</div>;
}
```

**When to use:**
- Content-heavy sites
- SEO is critical
- Using a meta-framework

### Option 4: Server-Side Rendering (SSR)

**Pros:**
- Dynamic content on each request
- Best for authenticated/user-specific content
- Good SEO

**Cons:**
- Requires server infrastructure
- More complex architecture
- Higher hosting costs

**When to use:**
- User dashboards
- Dynamic content
- Real-time data

---

## 🎓 Best Practices

### 1. Always Test Page Refresh
During development, regularly refresh the page on different routes to catch routing issues early.

### 2. Use Environment-Specific Configuration
```tsx
// Use HashRouter for GitHub Pages, BrowserRouter for Vercel
const Router = import.meta.env.PROD && isGitHubPages 
  ? HashRouter 
  : BrowserRouter;
```

### 3. Document Your Routing Strategy
Add comments in your code explaining the routing setup:
```tsx
// Using BrowserRouter with Vercel rewrites
// See vercel.json for server configuration
```

### 4. Test Deployment Early
Don't wait until the end to deploy. Deploy early and often to catch configuration issues.

### 5. Use Type-Safe Routing
Consider libraries like `react-router-typesafe` for better route management:
```tsx
// Type-safe route definitions
const routes = {
  home: '/',
  recipes: '/recipes',
  recipeDetail: (slug: string) => `/recipes/${slug}`,
} as const;
```

---

## 🛠️ Troubleshooting Checklist

If you're still seeing NOT_FOUND errors:

- [ ] **Check vercel.json exists** in project root
- [ ] **Verify rewrites configuration** matches the pattern above
- [ ] **Confirm outputDirectory** is correct (`dist` for Vite)
- [ ] **Check build succeeded** - look for errors in Vercel logs
- [ ] **Verify BrowserRouter** is used (not HashRouter)
- [ ] **Test locally with production build**: `npm run build && npm run preview`
- [ ] **Clear browser cache** - old service workers can cause issues
- [ ] **Check Vercel deployment logs** for build errors
- [ ] **Verify file structure** - `dist/index.html` should exist after build

---

## 📖 Additional Resources

- [Vercel Rewrites Documentation](https://vercel.com/docs/concepts/projects/project-configuration#rewrites)
- [React Router Deployment Guide](https://reactrouter.com/en/main/guides/deploying)
- [Vite Static Deploy](https://vitejs.dev/guide/static-deploy.html)
- [SPA Routing Explained](https://developer.mozilla.org/en-US/docs/Glossary/SPA)

---

## 🎯 Summary

**The Problem:** SPA routing requires server-side URL rewriting to work on page refresh.

**The Solution:** Configure Vercel to rewrite all routes to `index.html`.

**The Concept:** In SPAs, the server only has one file. All other routes are virtual and handled by JavaScript.

**The Lesson:** Always configure your deployment platform for SPA routing, even if it works locally.

**The Fix:** Your `vercel.json` now has the correct rewrite configuration. Deploy with `vercel --prod`.

---

*Last updated: 2026*
*Framework: React + Vite + React Router*
*Deployment: Vercel*
