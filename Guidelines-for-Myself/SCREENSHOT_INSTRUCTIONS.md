# Taking Screenshots for Word Pop! Game

Follow these instructions to capture high-quality screenshots of your Word Pop! game for your portfolio and GitHub repository.

## Easy Method: Use Screenshot Templates

You can use the provided screenshot templates to quickly generate all required screenshots:

1. Run `npm run screenshot-templates` or open `screenshot-templates.html` directly in your browser
2. For each template screen, use the screenshot tool to capture the frame
3. Save each screenshot with the correct filename in the `/screenshots` directory

This method ensures consistent, perfect screenshots without having to play through the game.

## Alternative Method: Capture from Gameplay

If you prefer to take screenshots from the actual game:

### 1. Welcome Screen (`welcome.png`)
- Open the game in a browser window
- The welcome modal should appear automatically when you first load the page
- Ensure difficulty is set to "Medium" and a unit is selected
- Take a screenshot that includes the full modal

### 2. Main Game Screen (`gameplay.png`)
- Start a game session
- Wait until there are at least 4-5 bubbles floating on the screen
- Take a screenshot when the bubbles are well-distributed
- Ensure the current pattern is visible in the prompt area
- Include the full game interface including score and time

### 3. Settings Modal (`settings.png`)
- Click the "⚙️ Settings" button during gameplay
- When the settings modal appears, take a screenshot
- Ensure all difficulty options are visible

### 4. Game Over Screen (`game-over.png`)
- Play a game until completion
- When the game over modal appears with your final score, take a screenshot
- Ensure the "Play Again" and "⚙️ Settings" buttons are visible

### 5. Celebration Effect (`celebration.png`)
- Play through a full pattern set until you see the celebration animation
- Take a screenshot during the celebration effect
- Try to capture when confetti or special effects are visible

## Tips for Quality Screenshots

### On macOS:
- Use `Cmd + Shift + 4`, then `Space` to capture the browser window
- Or use `Cmd + Shift + 5` for more screenshot options
- Consider using the built-in Screenshot app with a timer

### On Windows:
- Use `Win + Shift + S` to open the Snipping Tool
- Or use the Snipping Tool app for more options

### General Tips:
- Use a clean browser window (hide bookmarks, extensions)
- Set your browser to a consistent size for all screenshots (e.g., 1200×800px)
- Make sure text is clear and readable
- Crop out unnecessary browser UI but keep the full game interface
- Use PNG format for best quality

## Automated Screenshot Helper

You can use the provided screenshot helper script to guide you through the process:

```bash
# Run the screenshot helper script
./take_screenshots.sh
# Or use npm
npm run take-screenshots
```

The script will guide you through taking each required screenshot and offers the option to use the screenshot templates.

## After Taking Screenshots

1. Rename the files according to the convention:
   - `welcome.png`
   - `gameplay.png`
   - `settings.png`
   - `game-over.png`
   - `celebration.png`

2. Place the files in the `/screenshots` directory

3. Update your README.md to include your best gameplay image

4. Consider creating a cover image using the template in `cover-template.html`
