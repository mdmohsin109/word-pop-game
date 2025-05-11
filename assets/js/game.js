/**
 * Word Pop! - Educational Vocabulary Game
 * Game logic for popping word bubbles that match the pattern
 */

// Game constants and variables
const DIFFICULTY_SETTINGS = {
    easy: {
        gameDuration: 90,      // 90 seconds
        bubbleSpeed: 16,       // Slower animation
        bubbleSpawnDelay: 2000,// 2 seconds between bubbles
        correctScore: 5,       // Lower score for easier game
        wrongPenalty: 2        // Lower penalty
    },
    medium: {
        gameDuration: 60,      // 60 seconds
        bubbleSpeed: 12,       // Medium animation
        bubbleSpawnDelay: 1500,// 1.5 seconds between bubbles
        correctScore: 10,      // Standard score
        wrongPenalty: 5        // Standard penalty
    },
    hard: {
        gameDuration: 45,      // 45 seconds
        bubbleSpeed: 10,       // Faster animation
        bubbleSpawnDelay: 1200,// 1.2 seconds between bubbles
        correctScore: 15,      // Higher score for harder game
        wrongPenalty: 8        // Higher penalty
    },
    expert: {
        gameDuration: 30,      // 30 seconds
        bubbleSpeed: 8,        // Very fast animation
        bubbleSpawnDelay: 800, // 0.8 seconds between bubbles
        correctScore: 20,      // Highest score
        wrongPenalty: 10       // Highest penalty
    }
};

// Default to medium difficulty
let currentDifficulty = 'medium';
let GAME_DURATION = DIFFICULTY_SETTINGS.medium.gameDuration;
let BUBBLE_SPEED = DIFFICULTY_SETTINGS.medium.bubbleSpeed;
let BUBBLE_SPAWN_DELAY = DIFFICULTY_SETTINGS.medium.bubbleSpawnDelay;
let CORRECT_SCORE = DIFFICULTY_SETTINGS.medium.correctScore;
let WRONG_PENALTY = DIFFICULTY_SETTINGS.medium.wrongPenalty;

// Other game constants
const MIN_BUBBLE_SIZE = 60; // Minimum bubble size in pixels
const MAX_BUBBLE_SIZE = 100; // Maximum bubble size in pixels
const BUBBLE_COLORS = 5; // Number of different bubble colors

// Game state
let score = 0;
let wordsPopped = 0;
let timeRemaining = GAME_DURATION;
let gameRunning = false;
let currentUnitIndex = 0;
let currentPatternIndex = 0;
let currentWords = [];
let bubbleInterval;
let timerInterval;
let targetPattern = "";
let unitCompleted = false;

// DOM elements
const gameArea = document.getElementById('game-area');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
const currentUnitElement = document.getElementById('current-unit');
const currentPatternElement = document.getElementById('current-pattern');
const currentDifficultyElement = document.getElementById('current-difficulty');
const exampleWordsElement = document.getElementById('example-words');
const patternCountElement = document.getElementById('pattern-count');
const startBtn = document.getElementById('start-btn');
const nextUnitBtn = document.getElementById('next-unit-btn');
const settingsBtn = document.getElementById('settings-btn');
const startModal = document.getElementById('start-modal');
const gameOverModal = document.getElementById('game-over-modal');
const settingsModal = document.getElementById('settings-modal');
const modalStartBtn = document.getElementById('modal-start-btn');
const playAgainBtn = document.getElementById('play-again-btn');
const showSettingsBtn = document.getElementById('show-settings-btn');
const saveSettingsBtn = document.getElementById('save-settings-btn');
const closeSettingsBtn = document.getElementById('close-settings-btn');
const difficultySelect = document.getElementById('difficulty-select');
const unitSelect = document.getElementById('unit-select');
const settingsDifficultySelect = document.getElementById('settings-difficulty-select');
const settingsUnitSelect = document.getElementById('settings-unit-select');
const finalScoreElement = document.getElementById('final-score');
const wordsPoppedElement = document.getElementById('words-popped');

// Audio elements
const popSound = new Audio();
popSound.src = 'data:audio/mp3;base64,SUQzAwAAAAAfdlRJVDIAAAATAAADRWZmZWN0cyBTb3VuZDogUG9wAFRZRVIAAAAFAAAAMjAyMwBUQ09OAAAADwAAAFNvdW5kIEVmZmVjdHM=';

const wrongSound = new Audio();
wrongSound.src = 'data:audio/mp3;base64,SUQzAwAAAAArcFRJVDIAAAAZAAADRWZmZWN0cyBTb3VuZDogRXJyb3IgVG9uZQBUWUVSAAAABQAAADIwMjMAVENPTgAAAA8AAABTY3VuZCBFZmZlY3Rz';

const successSound = new Audio();
successSound.src = 'data:audio/mp3;base64,SUQzAwAAAAA3eFRJVDIAAAAfAAADRWZmZWN0cyBTb3VuZDogU3VjY2VzcyBGYW5mYXJlAFRZRVIAAAAFAAAAMjAyMwBUQ09OAAAADwAAAFNvdW5kIEVmZmVjdHM=';

// Get units from level3Data
const units = Object.keys(level3Data);

// Event listeners
document.addEventListener('DOMContentLoaded', initGame);
startBtn.addEventListener('click', startGame);
modalStartBtn.addEventListener('click', () => {
    startModal.style.display = 'none';
    // Apply selected difficulty and unit
    applySettings(difficultySelect.value, parseInt(unitSelect.value));
    startGame();
});
playAgainBtn.addEventListener('click', resetGame);
nextUnitBtn.addEventListener('click', goToNextUnit);
settingsBtn.addEventListener('click', showSettings);
showSettingsBtn.addEventListener('click', showSettings);
saveSettingsBtn.addEventListener('click', saveSettings);
closeSettingsBtn.addEventListener('click', closeSettings);

// Sync difficulty selects
difficultySelect.addEventListener('change', () => {
    settingsDifficultySelect.value = difficultySelect.value;
});
settingsDifficultySelect.addEventListener('change', () => {
    difficultySelect.value = settingsDifficultySelect.value;
});

// Sync unit selects
unitSelect.addEventListener('change', () => {
    settingsUnitSelect.value = unitSelect.value;
});
settingsUnitSelect.addEventListener('change', () => {
    unitSelect.value = settingsUnitSelect.value;
});

/**
 * Initialize the game with first unit and pattern
 */
function initGame() {
    // Populate unit selectors
    populateUnitSelectors();
    
    // Set initial unit
    loadUnit(currentUnitIndex);
    updatePatternDisplay();
    
    // Set up bubble animation speed based on difficulty
    updateBubbleAnimationSpeed();
    
    // Update difficulty display
    updateDifficultyDisplay();
}

/**
 * Populate unit selection dropdowns
 */
function populateUnitSelectors() {
    // Clear existing options
    unitSelect.innerHTML = '';
    settingsUnitSelect.innerHTML = '';
    
    // Add options for each unit
    units.forEach((unit, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `Unit ${index + 1}`;
        
        const settingsOption = option.cloneNode(true);
        
        unitSelect.appendChild(option);
        settingsUnitSelect.appendChild(settingsOption);
    });
    
    // Set default values
    unitSelect.value = currentUnitIndex;
    settingsUnitSelect.value = currentUnitIndex;
}

/**
 * Update CSS for bubble animation speed based on current difficulty
 */
function updateBubbleAnimationSpeed() {
    // Set animation duration as a CSS variable on :root
    document.documentElement.style.setProperty('--bubble-speed', `${BUBBLE_SPEED}s`);
    
    // Update any existing bubbles with new animation duration
    const bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach(bubble => {
        bubble.style.animationDuration = `${BUBBLE_SPEED}s`;
    });
}

/**
 * Start the game
 */
function startGame() {
    if (gameRunning) return;
    
    gameRunning = true;
    score = 0;
    wordsPopped = 0;
    unitCompleted = false; // Reset unit completion
    timeRemaining = GAME_DURATION; // Uses current difficulty setting
    
    updateScoreDisplay();
    updateTimerDisplay();
    
    startBtn.style.display = 'none';
    nextUnitBtn.style.display = 'none';
    settingsBtn.style.display = 'none'; // Hide settings during gameplay
    
    // Clear any existing bubbles
    gameArea.innerHTML = '';
    
    // Start spawning bubbles at current difficulty rate
    bubbleInterval = setInterval(createBubble, BUBBLE_SPAWN_DELAY);
    
    // Start timer
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        
        if (timeRemaining <= 0) {
            endGame();
        }
    }, 1000);
}

/**
 * End the game
 */
function endGame() {
    gameRunning = false;
    clearInterval(bubbleInterval);
    clearInterval(timerInterval);
    
    finalScoreElement.textContent = score;
    wordsPoppedElement.textContent = wordsPopped;
    gameOverModal.style.display = 'flex';
    
    startBtn.style.display = 'block';
    settingsBtn.style.display = 'block'; // Show settings button again
    
    if (currentUnitIndex < units.length - 1) {
        nextUnitBtn.style.display = 'block';
    }
}

/**
 * Reset the game
 */
function resetGame() {
    gameOverModal.style.display = 'none';
    startGame();
}

/**
 * Go to next unit
 */
function goToNextUnit() {
    currentUnitIndex++;
    if (currentUnitIndex >= units.length) {
        currentUnitIndex = 0;
    }
    
    currentPatternIndex = 0;
    unitCompleted = false; // Reset unit completion
    loadUnit(currentUnitIndex);
    updatePatternDisplay();
    
    // Update unit selectors
    unitSelect.value = currentUnitIndex;
    settingsUnitSelect.value = currentUnitIndex;
    
    gameOverModal.style.display = 'none';
}

/**
 * Show settings modal
 */
function showSettings() {
    // Update settings to current state
    settingsUnitSelect.value = currentUnitIndex;
    settingsDifficultySelect.value = currentDifficulty;
    
    // Show settings modal
    settingsModal.style.display = 'flex';
    
    // Hide other modals
    startModal.style.display = 'none';
    gameOverModal.style.display = 'none';
}

/**
 * Save settings and apply them
 */
function saveSettings() {
    const difficulty = settingsDifficultySelect.value;
    const unitIndex = parseInt(settingsUnitSelect.value);
    
    // Apply settings
    applySettings(difficulty, unitIndex);
    
    // Close modal
    closeSettings();
}

/**
 * Close settings modal without saving
 */
function closeSettings() {
    settingsModal.style.display = 'none';
}

/**
 * Apply selected difficulty and unit settings
 */
function applySettings(difficulty, unitIndex) {
    // Update difficulty
    currentDifficulty = difficulty;
    
    // Update game parameters based on difficulty
    GAME_DURATION = DIFFICULTY_SETTINGS[difficulty].gameDuration;
    BUBBLE_SPEED = DIFFICULTY_SETTINGS[difficulty].bubbleSpeed;
    BUBBLE_SPAWN_DELAY = DIFFICULTY_SETTINGS[difficulty].bubbleSpawnDelay;
    CORRECT_SCORE = DIFFICULTY_SETTINGS[difficulty].correctScore;
    WRONG_PENALTY = DIFFICULTY_SETTINGS[difficulty].wrongPenalty;
    
    // Update bubble animation speed
    updateBubbleAnimationSpeed();
    
    // Update displays
    timeRemaining = GAME_DURATION;
    updateTimerDisplay();
    updateDifficultyDisplay();
    
    // Load selected unit if different
    if (unitIndex !== currentUnitIndex) {
        currentUnitIndex = unitIndex;
        currentPatternIndex = 0;
        loadUnit(currentUnitIndex);
        updatePatternDisplay();
    }
}

/**
 * Load pattern data for the current unit
 */
function loadUnit(unitIndex) {
    const unitKey = units[unitIndex];
    const unitData = level3Data[unitKey];
    
    currentUnitElement.textContent = unitIndex + 1;
    
    // Set current pattern
    const patternData = unitData[currentPatternIndex];
    targetPattern = patternData.pattern;
    currentWords = patternData.words;
}

/**
 * Update the pattern display
 */
function updatePatternDisplay() {
    currentPatternElement.textContent = targetPattern;
    
    // Show two example words
    const exampleWords = currentWords.slice(0, 2).join(', ');
    exampleWordsElement.textContent = `Example: ${exampleWords}`;
    
    // Update pattern progress
    updatePatternProgress();
}

/**
 * Update the pattern progress display
 */
function updatePatternProgress() {
    // Get total patterns in this unit
    const unitKey = units[currentUnitIndex];
    const totalPatterns = level3Data[unitKey].length;
    
    // Display pattern progress
    patternCountElement.textContent = `Pattern ${currentPatternIndex + 1}/${totalPatterns}`;
}

/**
 * Update the score display
 */
function updateScoreDisplay() {
    scoreElement.textContent = score;
}

/**
 * Update the timer display
 */
function updateTimerDisplay() {
    timerElement.textContent = timeRemaining;
}

/**
 * Update the difficulty display
 */
function updateDifficultyDisplay() {
    // Capitalize first letter
    const displayText = currentDifficulty.charAt(0).toUpperCase() + currentDifficulty.slice(1);
    currentDifficultyElement.textContent = displayText;
}

/**
 * Check if player has scored enough points to advance pattern
 */
function checkPatternAdvancement() {
    // Get current unit data
    const unitKey = units[currentUnitIndex];
    const unitData = level3Data[unitKey];
    const totalPatterns = unitData.length;
    
    // If player has scored enough points and there are more patterns
    // Base the required score on difficulty level
    const pointsRequired = 30 * (currentPatternIndex + 1);
    
    if (score >= pointsRequired) {
        if (currentPatternIndex < totalPatterns - 1) {
            // Advance to next pattern
            currentPatternIndex++;
            loadUnit(currentUnitIndex);
            updatePatternDisplay();
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'pattern-complete';
            successMessage.textContent = 'Pattern Complete! Moving to next pattern...';
            document.body.appendChild(successMessage);
            
            // Play success sound
            try {
                successSound.currentTime = 0;
                successSound.play();
            } catch (error) {
                console.log('Sound play error:', error);
            }
            
            // Remove message after showing
            setTimeout(() => {
                if (successMessage.parentNode === document.body) {
                    document.body.removeChild(successMessage);
                }
            }, 2500);
        }
        else if (currentPatternIndex === totalPatterns - 1 && !unitCompleted) {
            // All patterns in this unit are complete
            unitCompleted = true;
            
            // Create celebration effect
            createCelebration();
            
            // Show unit complete message
            const unitCompleteMessage = document.createElement('div');
            unitCompleteMessage.className = 'unit-complete';
            unitCompleteMessage.innerHTML = `
                <h3>Awesome Job!</h3>
                <p>You completed all patterns in Unit ${currentUnitIndex + 1}!</p>
                <p>Keep playing to improve your score!</p>
            `;
            document.body.appendChild(unitCompleteMessage);
            
            // Play success sound
            try {
                successSound.currentTime = 0;
                successSound.play();
            } catch (error) {
                console.log('Sound play error:', error);
            }
            
            // Remove message after showing
            setTimeout(() => {
                if (unitCompleteMessage.parentNode === document.body) {
                    document.body.removeChild(unitCompleteMessage);
                }
            }, 4000);
        }
    }
}

/**
 * Create celebration effect when completing a unit
 */
function createCelebration() {
    // Create confetti effect
    for (let i = 0; i < 100; i++) {
        createConfetti();
    }
}

/**
 * Create a confetti particle
 */
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    
    // Random properties
    const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#1a535c', '#ff9a8b'];
    const size = Math.random() * 10 + 5;
    const left = Math.random() * 100;
    const animationDuration = Math.random() * 3 + 2;
    
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;
    confetti.style.left = `${left}vw`;
    confetti.style.animationDuration = `${animationDuration}s`;
    
    document.body.appendChild(confetti);
    
    // Remove confetti after animation
    setTimeout(() => {
        if (confetti.parentNode === document.body) {
            document.body.removeChild(confetti);
        }
    }, animationDuration * 1000);
}

/**
 * Create a new bubble with a word
 */
function createBubble() {
    if (!gameRunning) return;
    
    // Check if we should advance to next pattern
    checkPatternAdvancement();
    
    const bubble = document.createElement('div');
    const size = getRandomInt(MIN_BUBBLE_SIZE, MAX_BUBBLE_SIZE);
    
    // Adjust target chance based on difficulty
    let targetChance;
    switch (currentDifficulty) {
        case 'easy':
            targetChance = 0.5; // 50% chance for a target word
            break;
        case 'medium':
            targetChance = 0.4; // 40% chance for a target word
            break;
        case 'hard':
            targetChance = 0.3; // 30% chance for a target word
            break;
        case 'expert':
            targetChance = 0.25; // 25% chance for a target word
            break;
        default:
            targetChance = 0.4;
    }
    
    const isTarget = Math.random() > (1 - targetChance);
    
    // Choose word - either from target or from other units
    let word;
    if (isTarget) {
        // Pick a random word from current pattern
        word = currentWords[getRandomInt(0, currentWords.length - 1)];
    } else {
        // Pick a random word from another pattern
        const randomUnit = getRandomInt(0, units.length - 1);
        const unitData = level3Data[units[randomUnit]];
        const randomPattern = getRandomInt(0, unitData.length - 1);
        
        // Make sure it's not from the current pattern if in the same unit
        if (randomUnit === currentUnitIndex && randomPattern === currentPatternIndex) {
            word = getRandomOtherWord();
        } else {
            const randomWordIndex = getRandomInt(0, unitData[randomPattern].words.length - 1);
            word = unitData[randomPattern].words[randomWordIndex];
        }
    }
    
    // Set bubble properties
    bubble.className = `bubble bubble-${getRandomInt(1, BUBBLE_COLORS)}`;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${getRandomInt(10, 90)}%`;
    bubble.style.animationDuration = `${BUBBLE_SPEED}s`;
    bubble.dataset.isTarget = isTarget;
    bubble.textContent = word;
    
    // Add bubble event listener
    bubble.addEventListener('click', handleBubbleClick);
    
    // Add bubble to game area
    gameArea.appendChild(bubble);
    
    // Remove bubble when animation ends
    bubble.addEventListener('animationend', () => {
        if (bubble.parentNode === gameArea) {
            gameArea.removeChild(bubble);
        }
    });
}

/**
 * Handle bubble click
 */
function handleBubbleClick(event) {
    if (!gameRunning) return;
    
    const bubble = event.target;
    const isTarget = bubble.dataset.isTarget === 'true';
    
    if (isTarget) {
        // Correct bubble!
        score += CORRECT_SCORE;
        wordsPopped++;
        updateScoreDisplay();
        popBubble(bubble, true);
        
        // Show pattern match indicator
        showPatternIndicator(true);
        
        try {
            popSound.currentTime = 0;
            popSound.play();
        } catch (error) {
            console.log('Sound play error:', error);
        }
    } else {
        // Wrong bubble!
        score = Math.max(0, score - WRONG_PENALTY);
        updateScoreDisplay();
        popBubble(bubble, false);
        
        // Show pattern mismatch indicator
        showPatternIndicator(false);
        
        try {
            wrongSound.currentTime = 0;
            wrongSound.play();
        } catch (error) {
            console.log('Sound play error:', error);
        }
    }
}

/**
 * Show a visual indicator for correct/incorrect pattern
 */
function showPatternIndicator(isCorrect) {
    // Create indicator element
    const indicator = document.createElement('div');
    indicator.className = isCorrect ? 'pattern-indicator correct' : 'pattern-indicator incorrect';
    indicator.textContent = isCorrect ? '✓ Correct Pattern!' : '✗ Wrong Pattern';
    
    // Add to game area
    document.body.appendChild(indicator);
    
    // Remove after animation
    setTimeout(() => {
        if (indicator.parentNode === document.body) {
            document.body.removeChild(indicator);
        }
    }, 1500);
}

/**
 * Pop a bubble with animation
 */
function popBubble(bubble, isCorrect) {
    if (isCorrect) {
        bubble.classList.add('bubble-pop');
    } else {
        bubble.classList.add('bubble-wrong');
        
        // Remove wrong bubble after animation
        setTimeout(() => {
            if (bubble.parentNode === gameArea) {
                gameArea.removeChild(bubble);
            }
        }, 500);
    }
}

/**
 * Get a random word that is not in the current pattern
 */
function getRandomOtherWord() {
    // Gather all words except current pattern
    const allOtherWords = [];
    
    for (let unitKey of units) {
        const unitData = level3Data[unitKey];
        for (let patternData of unitData) {
            // Skip current pattern
            if (unitKey === units[currentUnitIndex] && 
                patternData.pattern === targetPattern) {
                continue;
            }
            allOtherWords.push(...patternData.words);
        }
    }
    
    // Pick a random word
    return allOtherWords[getRandomInt(0, allOtherWords.length - 1)];
}

/**
 * Get random integer between min and max (inclusive)
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Show start modal when page loads
window.onload = function() {
    startModal.style.display = 'flex';
};
