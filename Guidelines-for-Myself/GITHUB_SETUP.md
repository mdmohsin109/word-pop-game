# GitHub Setup Guide

This document provides step-by-step instructions for setting up your Word Pop game as a professional GitHub portfolio project.

## Steps to Upload to GitHub

### Step 1: Create a GitHub Account
If you don't have a GitHub account, create one at [github.com](https://github.com/).

### Step 2: Create a New Repository
1. Click the "+" icon in the upper right corner of GitHub and select "New repository"
2. Name your repository (e.g., `word-pop-game`)
3. Add a description: "An educational vocabulary game for elementary school children"
4. Choose "Public" visibility
5. Check "Add a README file" (we'll replace it with our own)
6. Choose "MIT License" from the "Add a license" dropdown
7. Click "Create repository"

### Step 3: Clone the Repository Locally
```bash
git clone https://github.com/yourusername/word-pop-game.git
cd word-pop-game
```

### Step 4: Prepare Your Project Files
1. Copy all your project files to the cloned repository folder
2. Make sure to take screenshots of your game for the README

### Step 5: Initialize Git and Make Your First Commit
```bash
git init
git add .
git commit -m "Initial commit: Word Pop educational game"
git branch -M main
git remote add origin https://github.com/yourusername/word-pop-game.git
git push -u origin main
```

### Step 6: Set Up GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings"
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select "main" branch and root folder
5. Click "Save"
6. Wait a few minutes for your site to be published
7. Update the README with the GitHub Pages URL

### Step 7: Enhance Your Repository
1. Add project topics in GitHub repository settings
2. Create a detailed description for the repository
3. Pin the repository to your profile

## Best Practices for a Professional Portfolio Project

1. **Regular Updates**: Make regular commits to show ongoing improvement
2. **Document Your Code**: Include comments in your code for readability
3. **Track Issues**: Use GitHub Issues for bugs and feature requests
4. **Version Control**: Create proper version tags for releases
5. **Add Analytics**: Consider adding Google Analytics to track game usage
6. **Get Feedback**: Share with peers and incorporate their feedback
7. **Document Learning**: Include notes about what you learned in comments

## Additional Resources

- [GitHub Documentation](https://docs.github.com/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Markdown Syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
