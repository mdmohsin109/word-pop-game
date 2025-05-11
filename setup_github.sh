#!/bin/zsh

# This script will help you upload your Word Pop game to GitHub
# Make sure you have Git installed and a GitHub account set up

echo "🚀 Setting up Word Pop! as a GitHub portfolio project 🚀"
echo "------------------------------------------------------"

# Step 1: Make sure we're in the right directory
cd /Volumes/Workstation/Projects-Trae/opw-game/Level-3

# Step 2: Initialize git repository if not already initialized
if [ ! -d .git ]; then
  echo "📁 Initializing Git repository..."
  git init
else
  echo "📁 Git repository already initialized."
fi

# Step 3: Check if screenshots have been added
if [ ! -f screenshots/gameplay.png ]; then
  echo "⚠️ Warning: No gameplay screenshot found!"
  echo "Before continuing, take screenshots of your game and add them to the screenshots folder."
  echo "Press Enter to continue anyway, or Ctrl+C to exit and add screenshots first."
  read
fi

# Step 4: Configure Git (if needed)
echo "🔧 Configuring Git (if not already configured)..."
if [ -z "$(git config --global user.name)" ]; then
  echo "Enter your GitHub username:"
  read username
  git config --global user.name "$username"
fi

if [ -z "$(git config --global user.email)" ]; then
  echo "Enter your GitHub email:"
  read email
  git config --global user.email "$email"
fi

# Step 5: Add all files to staging
echo "📋 Adding files to Git staging..."
git add .

# Step 6: Make initial commit
echo "💾 Creating initial commit..."
git commit -m "Initial commit: Word Pop educational game"

# Step 7: Create main branch
echo "🌿 Setting up main branch..."
git branch -M main

# Step 8: Add remote repository
echo "Enter your GitHub username:"
read github_username

echo "🌐 Connecting to remote repository..."
git remote add origin https://github.com/$github_username/word-pop-game.git

# Step 9: Push to GitHub
echo "☁️ Pushing code to GitHub..."
git push -u origin main

# Step 10: Instructions for GitHub Pages
echo "✅ Success! Your code has been pushed to GitHub."
echo ""
echo "🌐 Next steps to set up GitHub Pages:"
echo "1. Go to https://github.com/$github_username/word-pop-game/settings/pages"
echo "2. Under 'Source', select 'main' branch and root folder"
echo "3. Click 'Save'"
echo "4. Wait a few minutes for your site to be published"
echo "5. Update the README.md with your GitHub Pages URL"
echo ""
echo "🎮 Your game will be available at: https://$github_username.github.io/word-pop-game"
echo ""
echo "Done! 🎉"
