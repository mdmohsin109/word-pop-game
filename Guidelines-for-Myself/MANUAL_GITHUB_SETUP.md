# Manual GitHub Setup Guide

If you're having trouble with the `setup_github.sh` script, follow these manual steps to upload your Word Pop game to GitHub:

## Prerequisites
- Have Git installed on your computer
- Have a GitHub account
- Have created screenshots of your game

## Step 1: Create a new repository on GitHub
1. Go to [GitHub.com](https://github.com) and log in
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository `word-pop-game`
4. Set visibility to "Public"
5. Do NOT initialize with README, .gitignore, or license
6. Click "Create repository"

## Step 2: Initialize your local Git repository
Open Terminal and run these commands:

```bash
# Navigate to your project folder
cd /Volumes/Workstation/Projects-Trae/opw-game/Level-3

# Initialize Git if not already done
git init

# Add all your files to Git
git add .

# Make your first commit
git commit -m "Initial commit: Word Pop educational game"

# Set the main branch name
git branch -M main

# Connect to your GitHub repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/word-pop-game.git

# Push your code to GitHub
git push -u origin main
```

## Step 3: Set up GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings"
3. In the left sidebar, click "Pages"
4. Under "Source", select "main" branch and root folder "/"
5. Click "Save"
6. Wait a few minutes for your site to be published
7. Your game will be available at: `https://YOUR_USERNAME.github.io/word-pop-game`

## Step 4: Update your README
Edit your README.md to include the link to your live game.

## Troubleshooting
- If you get authentication errors, you may need to set up a GitHub Personal Access Token
- If you get "repository not found" errors, double-check that you created the repository on GitHub
- If GitHub Pages doesn't work, make sure your repository is public and you've selected the main branch as the source

## Need more help?
Check out GitHub's documentation at https://docs.github.com/en/get-started
