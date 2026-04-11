# Corex Gym - Vercel Deployment Guide

## Prerequisites
- Vercel account (https://vercel.com)
- GitHub account with the project repository
- Node.js and pnpm installed locally (optional, for testing)

## Deployment Steps

### Option 1: Deploy via GitHub (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Corex Gym website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/corex-gym-oran.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com/new
   - Click "Import Git Repository"
   - Paste your GitHub repository URL
   - Click "Import"

3. **Configure Project**
   - **Project Name**: corex-gym-oran
   - **Framework Preset**: Vite
   - **Root Directory**: ./
   - **Build Command**: `pnpm build`
   - **Output Directory**: `dist/public`
   - Click "Deploy"

4. **Environment Variables** (if needed)
   - No additional environment variables required for this static site
   - All assets are hosted on CDN

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   cd /home/ubuntu/corex-gym-oran
   vercel
   ```

3. **Follow the prompts**
   - Link to existing project or create new one
   - Select project settings
   - Deploy

### Option 3: Manual ZIP Upload

1. **Create ZIP file**
   ```bash
   cd /home/ubuntu/corex-gym-oran
   zip -r corex-gym-oran.zip . -x "node_modules/*" ".git/*" "dist/*"
   ```

2. **Upload to Vercel**
   - Go to https://vercel.com/new
   - Click "Upload"
   - Select the ZIP file
   - Configure settings and deploy

## Important Notes

### Image Assets
- All images are hosted on CDN (d2xsxph8kpxj0f.cloudfront.net)
- No local image files are included in the build
- This ensures fast deployment and avoids timeout issues

### Build Output
- Build command: `pnpm build`
- Output directory: `dist/public`
- The vercel.json file handles rewrites for client-side routing

### Custom Domain
After deployment, you can add a custom domain:
1. Go to your Vercel project settings
2. Click "Domains"
3. Add your custom domain (e.g., corexgym.dz)
4. Follow DNS configuration instructions

## Troubleshooting

### Build Fails
- Ensure all dependencies are installed: `pnpm install`
- Check Node.js version compatibility (v18+ recommended)
- Verify vercel.json configuration

### Images Not Loading
- All images use CDN URLs - no local files needed
- Check browser console for 404 errors
- Verify CDN URLs are accessible

### Routing Issues
- vercel.json includes rewrites for SPA routing
- All routes redirect to index.html for client-side routing

## Support
- Vercel Docs: https://vercel.com/docs
- Project Repository: Check your GitHub repository
- Contact Vercel Support: https://vercel.com/support

---

**Website Features:**
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark theme with red accents
- ✅ Animated hero section
- ✅ Facilities showcase (Floor 1 & 2)
- ✅ Membership pricing
- ✅ Google Maps integration
- ✅ WhatsApp CTA (+213 661 311 319)
- ✅ Contact information
- ✅ SEO optimized

**Ready to deploy!**
