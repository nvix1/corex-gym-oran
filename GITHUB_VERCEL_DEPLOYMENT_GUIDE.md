# Corex Gym Website - Complete GitHub & Vercel Deployment Guide

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Step 1: Create a GitHub Repository](#step-1-create-a-github-repository)
3. [Step 2: Initialize Git Locally](#step-2-initialize-git-locally)
4. [Step 3: Push to GitHub](#step-3-push-to-github)
5. [Step 4: Connect to Vercel](#step-4-connect-to-vercel)
6. [Step 5: Configure Vercel Settings](#step-5-configure-vercel-settings)
7. [Step 6: Deploy](#step-6-deploy)
8. [Step 7: Custom Domain Setup](#step-7-custom-domain-setup)
9. [Troubleshooting](#troubleshooting)
10. [Next Steps](#next-steps)

---

## Prerequisites

Before you begin, make sure you have:

- ✅ A **GitHub account** (create one at https://github.com if you don't have one)
- ✅ A **Vercel account** (create one at https://vercel.com - you can sign up with GitHub)
- ✅ Git installed on your computer (download from https://git-scm.com)
- ✅ The Corex Gym project files ready for deployment

**Time required:** 15-20 minutes

---

## Step 1: Create a GitHub Repository

### 1.1 Log in to GitHub
1. Go to https://github.com and log in with your credentials
2. If you don't have an account, click "Sign up" and create one

### 1.2 Create a New Repository
1. Click the **"+"** icon in the top-right corner of GitHub
2. Select **"New repository"** from the dropdown menu
3. You'll be taken to the "Create a new repository" page

### 1.3 Configure Repository Settings
Fill in the following information:

| Field | Value | Notes |
|-------|-------|-------|
| **Repository name** | `corex-gym-oran` | Keep it lowercase with hyphens |
| **Description** | `Premium Fitness Website for Corex Gym in Canastel, Oran` | Optional but recommended |
| **Visibility** | Public | Makes it easier for Vercel to access |
| **Initialize with README** | ✓ (checked) | Recommended |
| **Add .gitignore** | Node | Select from dropdown |
| **Add a license** | MIT | Optional |

### 1.4 Create the Repository
Click the green **"Create repository"** button. You'll see your new empty repository page.

**Screenshot reference:** Your repository URL will look like:
```
https://github.com/YOUR_USERNAME/corex-gym-oran
```

---

## Step 2: Initialize Git Locally

### 2.1 Open Terminal/Command Prompt

**On Windows:**
- Press `Windows Key + R`
- Type `cmd` and press Enter
- Or use Git Bash (installed with Git)

**On Mac:**
- Press `Cmd + Space`
- Type `terminal` and press Enter

**On Linux:**
- Open your terminal application

### 2.2 Navigate to Project Directory
```bash
cd /home/ubuntu/corex-gym-oran
```

### 2.3 Initialize Git Repository
```bash
git init
```

**Expected output:**
```
Initialized empty Git repository in /home/ubuntu/corex-gym-oran/.git/
```

### 2.4 Configure Git User (First Time Only)
If this is your first time using Git, configure your user information:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

**Example:**
```bash
git config --global user.name "Ahmed Benali"
git config --global user.email "ahmed@corexgym.dz"
```

### 2.5 Add All Project Files
```bash
git add .
```

**What this does:** Stages all files in the project for commit (except those in `.gitignore`)

### 2.6 Create Initial Commit
```bash
git commit -m "Initial commit: Corex Gym website with animations, facilities, and WhatsApp CTA"
```

**Expected output:**
```
[main (root-commit) abc1234] Initial commit: Corex Gym website
 XX files changed, XXXX insertions(+)
 create mode 100644 ...
```

### 2.7 Rename Branch to Main (if needed)
```bash
git branch -M main
```

**Why:** Vercel and GitHub now use `main` as the default branch name instead of `master`

---

## Step 3: Push to GitHub

### 3.1 Add Remote Repository
This connects your local project to your GitHub repository:

```bash
git remote add origin https://github.com/YOUR_USERNAME/corex-gym-oran.git
```

**Replace `YOUR_USERNAME` with your actual GitHub username**

**Example:**
```bash
git remote add origin https://github.com/ahmedbenali/corex-gym-oran.git
```

### 3.2 Verify Remote Connection
```bash
git remote -v
```

**Expected output:**
```
origin  https://github.com/YOUR_USERNAME/corex-gym-oran.git (fetch)
origin  https://github.com/YOUR_USERNAME/corex-gym-oran.git (push)
```

### 3.3 Push to GitHub
```bash
git push -u origin main
```

**First time only:** You may be prompted to authenticate:
- **Option A:** Use Personal Access Token (recommended)
  1. Go to https://github.com/settings/tokens
  2. Click "Generate new token"
  3. Select scopes: `repo`, `workflow`
  4. Copy the token and paste it when prompted
  
- **Option B:** Use GitHub CLI (if installed)
  - GitHub will open a browser for authentication
  - Authorize and return to terminal

**Expected output:**
```
Enumerating objects: XX, done.
Counting objects: 100% (XX/XX), done.
Delta compression using up to 8 threads
Compressing objects: 100% (XX/XX), done.
Writing objects: 100% (XX/XX), XXX KiB | XXX KiB/s, done.
Total XX (delta XX), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (XX/XX), done.
To https://github.com/YOUR_USERNAME/corex-gym-oran.git
 * [new branch]      main -> main
Branch 'main' is set up to track remote branch 'main' from 'origin'.
```

### 3.4 Verify on GitHub
1. Go to your GitHub repository: `https://github.com/YOUR_USERNAME/corex-gym-oran`
2. You should see all your project files
3. The commit message should appear in the commit history

---

## Step 4: Connect to Vercel

### 4.1 Go to Vercel
1. Open https://vercel.com in your browser
2. Click **"Sign up"** or **"Log in"**
3. If you don't have a Vercel account, create one using your GitHub account (recommended)

### 4.2 Create New Project
1. After logging in, click **"Add New..."** button (top-right)
2. Select **"Project"** from the dropdown

### 4.3 Import Git Repository
1. You'll see the "Import Git Repository" page
2. Click **"Continue with GitHub"**
3. If prompted, authorize Vercel to access your GitHub account
4. You'll see a list of your GitHub repositories

### 4.4 Select Your Repository
1. Find **"corex-gym-oran"** in the list
2. Click the **"Import"** button next to it
3. Vercel will analyze your project

---

## Step 5: Configure Vercel Settings

### 5.1 Project Name
- **Field:** "Project Name"
- **Value:** `corex-gym-oran`
- Leave as default (auto-filled from GitHub repo name)

### 5.2 Framework
- **Field:** "Framework Preset"
- **Value:** `Vite`
- Vercel should auto-detect this

### 5.3 Root Directory
- **Field:** "Root Directory"
- **Value:** `./` (default)
- Leave as default

### 5.4 Build Command
- **Field:** "Build Command"
- **Current value:** `pnpm build`
- **Verify:** This should be pre-filled correctly
- **If not:** Clear and type: `pnpm build`

### 5.5 Output Directory
- **Field:** "Output Directory"
- **Current value:** `dist/public`
- **Verify:** This should be pre-filled correctly
- **If not:** Clear and type: `dist/public`

### 5.6 Environment Variables (Optional)
- **Field:** "Environment Variables"
- **Action:** Leave empty (not needed for this static site)
- All assets are hosted on CDN, no secrets required

### 5.7 Review Configuration

Your settings should look like:
```
Project Name:      corex-gym-oran
Framework:         Vite
Root Directory:    ./
Build Command:     pnpm build
Output Directory:  dist/public
```

---

## Step 6: Deploy

### 6.1 Click Deploy Button
1. Review all settings one final time
2. Click the **"Deploy"** button (large blue button at bottom)
3. Vercel will start building your project

### 6.2 Monitor Deployment
You'll see a deployment progress screen showing:
- ✓ Cloning repository
- ✓ Installing dependencies (pnpm install)
- ✓ Building project (pnpm build)
- ✓ Generating static files
- ✓ Uploading to CDN

**Typical deployment time:** 2-5 minutes

### 6.3 Deployment Complete
When deployment finishes, you'll see:
- ✅ "Congratulations! Your project has been successfully deployed"
- A preview of your website
- Your live URL (e.g., `https://corex-gym-oran-abc123.vercel.app`)

### 6.4 View Your Live Website
1. Click the **"Visit"** button to open your website
2. Test all features:
   - ✓ Hero section loads with animations
   - ✓ Logo displays correctly
   - ✓ Navigation works
   - ✓ Facilities section visible
   - ✓ WhatsApp button functional
   - ✓ Google Maps embedded
   - ✓ Mobile responsive

---

## Step 7: Custom Domain Setup

### 7.1 Add Custom Domain (Optional)
If you have a domain like `corexgym.dz`:

1. In Vercel project dashboard, click **"Settings"**
2. Go to **"Domains"** tab
3. Click **"Add Domain"**
4. Enter your domain name: `corexgym.dz`
5. Click **"Add"**

### 7.2 Configure DNS
Vercel will show DNS records to add to your domain registrar:

**Typical records:**
```
Type: A
Name: @
Value: 76.76.19.165

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

1. Log in to your domain registrar (GoDaddy, Namecheap, etc.)
2. Go to DNS settings
3. Add the records provided by Vercel
4. Wait 24-48 hours for DNS propagation

### 7.3 Verify Domain
After DNS propagates:
1. Visit your domain in browser
2. Your Corex Gym website should load
3. Vercel will auto-generate SSL certificate

---

## Troubleshooting

### Problem: Build Fails with "pnpm not found"

**Solution:**
1. Go to Vercel project **Settings**
2. Click **"Build & Development Settings"**
3. Set **"Node.js Version"** to `18.x` or `20.x`
4. Trigger a redeploy: Click **"Deployments"** → find latest → click **"Redeploy"**

### Problem: Images Not Loading

**Solution:**
- All images use CDN URLs (d2xsxph8kpxj0f.cloudfront.net)
- Check browser console for 404 errors
- Verify CDN is accessible from your location
- Images should load automatically

### Problem: Website Shows Blank Page

**Solution:**
1. Check browser console (F12 → Console tab)
2. Look for JavaScript errors
3. Verify output directory is `dist/public`
4. Check that vercel.json exists in project root

### Problem: Routing Not Working (404 on sub-pages)

**Solution:**
- Verify `vercel.json` exists in project root
- Check it contains rewrites for SPA routing:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Problem: Deployment Takes Too Long

**Typical times:**
- First deployment: 3-5 minutes
- Subsequent deployments: 1-2 minutes

If longer:
1. Check build logs for errors
2. Verify dependencies install correctly
3. Check for large files in project

### Problem: WhatsApp Link Not Working

**Solution:**
- Verify phone number in code: `0661311319`
- Test on mobile device (WhatsApp links work best on mobile)
- Ensure WhatsApp is installed on device
- Try opening link in new tab

---

## Next Steps

### After Successful Deployment:

1. **Test All Features**
   - [ ] Hero section animations
   - [ ] Navigation links
   - [ ] WhatsApp CTA button
   - [ ] Google Maps
   - [ ] Mobile responsiveness
   - [ ] Contact form (if added)

2. **Share Your Website**
   - Copy your Vercel URL: `https://corex-gym-oran-xxx.vercel.app`
   - Share with team members
   - Add to social media profiles
   - Include in email signatures

3. **Monitor Performance**
   - Go to Vercel dashboard
   - Click **"Analytics"** to view traffic
   - Monitor deployment health

4. **Set Up Auto-Deployments**
   - Already enabled! Any push to GitHub main branch auto-deploys
   - No manual deployment needed

5. **Future Updates**
   - Make changes locally
   - Commit and push to GitHub:
     ```bash
     git add .
     git commit -m "Update: Add trainer profiles"
     git push
     ```
   - Vercel automatically deploys within 1-2 minutes

---

## Quick Reference Commands

### Initial Setup (One Time)
```bash
cd /home/ubuntu/corex-gym-oran
git init
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git add .
git commit -m "Initial commit: Corex Gym website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/corex-gym-oran.git
git push -u origin main
```

### Future Updates
```bash
git add .
git commit -m "Your update message"
git push
```

### Check Status
```bash
git status
git log --oneline
git remote -v
```

---

## Support & Resources

| Resource | Link |
|----------|------|
| **Vercel Documentation** | https://vercel.com/docs |
| **GitHub Documentation** | https://docs.github.com |
| **Git Tutorial** | https://git-scm.com/book |
| **Vercel Support** | https://vercel.com/support |
| **GitHub Community** | https://github.community |

---

## Summary

You've successfully:
1. ✅ Created a GitHub repository
2. ✅ Initialized Git locally
3. ✅ Pushed your Corex Gym website to GitHub
4. ✅ Connected to Vercel
5. ✅ Configured build settings
6. ✅ Deployed your website
7. ✅ Set up auto-deployments

**Your Corex Gym website is now live and automatically updates with every GitHub push!**

---

**Last Updated:** April 11, 2026
**Website:** Corex Gym - Premium Fitness in Canastel, Oran
**Features:** Animated hero, facilities showcase, WhatsApp CTA, Google Maps, responsive design
