# Protein Simple - Deployment Guide

## Deploy to Vercel

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI globally** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```
   Follow the prompts. Vercel will auto-detect the Vite configuration.

4. **Deploy to production**:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your repository
5. Vercel will auto-detect Vite and use the settings from `vercel.json`
6. Click "Deploy"

## Configuration

The `vercel.json` file includes:
- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Framework**: Vite (auto-detected)
- **Rewrites**: SPA routing support for clean URLs
- **Cache headers**: Optimized asset caching

## Environment Variables

If you want to enable analytics, add these to your Vercel project settings:

```
VITE_ANALYTICS_ENABLED=true
VITE_ANALYTICS_PROVIDER=your-provider
```

For email capture integration:

```
VITE_EMAIL_PROVIDER=your-provider
VITE_EMAIL_API_KEY=your-api-key
```

## Custom Domain

After deployment, you can add a custom domain in the Vercel dashboard:
1. Go to your project settings
2. Click "Domains"
3. Add your domain (e.g., proteinsimple.com)
4. Follow the DNS configuration instructions

## Performance

The build is optimized for:
- Fast initial load (~83KB gzipped JS)
- Efficient CSS (~7KB gzipped)
- Asset caching for repeat visits
- Mobile-first responsive design

## Support

For issues or questions, refer to:
- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev)
