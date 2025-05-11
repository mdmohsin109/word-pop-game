# Cover Image Guidelines

This document provides guidelines for creating a professional cover image for your Word Pop game repository and social media sharing.

## Cover Image Specifications

Create a cover image with the following specifications:

- **Dimensions**: 1280 × 640 pixels (2:1 aspect ratio)
- **Format**: PNG or JPG
- **File Size**: Aim for under 1MB
- **Filename**: `word-pop-cover.png` or `word-pop-cover.jpg`
- **Location**: Save in the `screenshots/` directory

## Design Elements to Include

1. **Game Title**: "Word Pop!" prominently displayed
2. **Tagline**: "Educational Vocabulary Game for Kids"
3. **Visual Elements**:
   - Game bubbles with words
   - Colorful background that matches game aesthetic
   - Simple illustrations of kids learning (optional)
4. **Tech Stack**: Small icons for HTML, CSS, and JavaScript
5. **Your Name/Logo**: Attribution as the developer

## Design Tools

You can create a professional cover image using:

- **Adobe Photoshop, Illustrator, or XD**
- **Figma** (free): [https://www.figma.com/](https://www.figma.com/)
- **Canva** (free tier available): [https://www.canva.com/](https://www.canva.com/)
- **GIMP** (free): [https://www.gimp.org/](https://www.gimp.org/)

## Cover Image Template in HTML/CSS

You can also create your cover image using HTML/CSS and take a screenshot:

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1280px;
      height: 640px;
      background: linear-gradient(135deg, #a1c4fd, #c2e9fb);
      font-family: 'Comic Neue', 'Arial', sans-serif;
      color: #2d334a;
      overflow: hidden;
      position: relative;
    }
    
    .bubble {
      position: absolute;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }
    
    .bubble::before {
      content: '';
      position: absolute;
      top: 10%;
      left: 15%;
      width: 20%;
      height: 20%;
      background: rgba(255,255,255,0.6);
      border-radius: 50%;
    }
    
    .bubble-1 { background-color: #FF9AA2; left: 10%; top: 30%; width: 100px; height: 100px; font-size: 18px; }
    .bubble-2 { background-color: #FFDAC1; left: 80%; top: 20%; width: 120px; height: 120px; font-size: 22px; }
    .bubble-3 { background-color: #E2F0CB; left: 20%; top: 60%; width: 90px; height: 90px; font-size: 16px; }
    .bubble-4 { background-color: #B5EAD7; left: 70%; top: 65%; width: 140px; height: 140px; font-size: 24px; }
    .bubble-5 { background-color: #C7CEEA; left: 40%; top: 15%; width: 110px; height: 110px; font-size: 20px; }
    
    .title-container {
      text-align: center;
      z-index: 10;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }
    
    h1 {
      font-size: 80px;
      margin: 0;
      color: #ff6b6b;
      letter-spacing: 2px;
    }
    
    h2 {
      font-size: 28px;
      margin: 10px 0 30px;
    }
    
    .tech-stack {
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-top: 20px;
    }
    
    .tech-icon {
      width: 40px;
      height: 40px;
      background-color: white;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 10px;
    }
    
    .developer {
      position: absolute;
      bottom: 20px;
      right: 30px;
      font-size: 16px;
      opacity: 0.8;
    }
  </style>
</head>
<body>
  <div class="bubble bubble-1">tape</div>
  <div class="bubble bubble-2">cake</div>
  <div class="bubble bubble-3">pine</div>
  <div class="bubble bubble-4">game</div>
  <div class="bubble bubble-5">rain</div>
  
  <div class="title-container">
    <h1>Word Pop!</h1>
    <h2>Educational Vocabulary Game for Kids</h2>
    
    <div class="tech-stack">
      <div class="tech-icon">HTML5</div>
      <div class="tech-icon">CSS3</div>
      <div class="tech-icon">JS</div>
    </div>
  </div>
  
  <div class="developer">
    Developed by Your Name
  </div>
</body>
</html>
```

Save this as `cover-template.html`, open it in a browser, and take a screenshot at 1280×640px dimensions.

## Using the Cover Image

After creating your cover image:

1. Add it to your GitHub repository's screenshots folder
2. Update your README.md to display it at the top
3. Use it for social media when sharing your project
4. Include it in your portfolio showcase
