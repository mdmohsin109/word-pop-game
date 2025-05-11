#!/bin/zsh

# This script opens the game and guides you through taking the required screenshots

echo "📸 Word Pop! Screenshot Helper 📸"
echo "--------------------------------"
echo "This script will help you capture the necessary screenshots for your portfolio"
echo ""

# Check if screenshots directory exists
if [ ! -d "screenshots" ]; then
  echo "Creating screenshots directory..."
  mkdir screenshots
fi

# Option to use screenshot templates
echo "Would you like to use the screenshot templates instead of the actual game? (y/n)"
read use_templates

if [[ $use_templates == "y" || $use_templates == "Y" ]]; then
  echo "Opening screenshot templates..."
  open screenshot-templates.html
  echo "Follow the instructions on the template page to capture all required screenshots."
  echo "Press Enter when you've completed all screenshots..."
  read
  echo "✅ Screenshot process complete!"
  exit 0
fi

# Open each file that needs to be viewed
echo "1️⃣ Taking Screenshots - Step 1: Welcome Screen"
echo "- Open the game in your browser by opening index.html"
echo "- Take a screenshot of the welcome modal"
echo "- Save it as 'screenshots/welcome.png'"
open index.html
read -p "Press Enter after taking the screenshot..."

echo "2️⃣ Taking Screenshots - Step 2: Settings Screen"
echo "- Click on the Settings button (⚙️)"
echo "- Take a screenshot of the settings modal"
echo "- Save it as 'screenshots/settings.png'"
read -p "Press Enter after taking the screenshot..."

echo "3️⃣ Taking Screenshots - Step 3: Gameplay"
echo "- Start a new game"
echo "- Wait for several bubbles to appear"
echo "- Take a screenshot during gameplay"
echo "- Save it as 'screenshots/gameplay.png'"
read -p "Press Enter after taking the screenshot..."

echo "4️⃣ Taking Screenshots - Step 4: Game Over"
echo "- Allow the game to finish or quickly pop several bubbles"
echo "- Take a screenshot of the game over screen"
echo "- Save it as 'screenshots/game-over.png'"
read -p "Press Enter after taking the screenshot..."

echo "5️⃣ Taking Screenshots - Step 5: Celebration"
echo "- Play until you complete a unit or pattern set"
echo "- Take a screenshot when the celebration effect appears"
echo "- Save it as 'screenshots/celebration.png'"
read -p "Press Enter after taking the screenshot..."

# Create cover image
echo "6️⃣ Creating a Cover Image"
echo "- Open cover-template.html to generate a cover image"
echo "- Take a screenshot of the template at 1280x640"
echo "- Save it as 'screenshots/word-pop-cover.png'"
open cover-template.html
read -p "Press Enter after taking the screenshot..."

echo "✅ Screenshot process complete!"
echo "Make sure you have the following files in your screenshots directory:"
echo "- welcome.png"
echo "- settings.png"
echo "- gameplay.png"
echo "- game-over.png"
echo "- celebration.png"
echo "- word-pop-cover.png"
echo ""
echo "These screenshots will be used in your README and portfolio presentation."
echo "You can now proceed with deploying your game to GitHub!"
