// WORK IN PROGRESS - SUBJECT TO CHANGE


/*--------- Constants ----------*/
// Classes
    // Warrior
        // healthpool
        // starting items
        // baseline dmg
        // Abilities

        
    // Wizard
        // healthpool
        // starting items
        // spells
        // baseline dmg
    // Ranger
        // healthpool
        // starting items
        // baseline dmg
        // Abilities
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('input-buttons')
// Enemies
    // Enemy - /Names/HP/skills/abilities (there wont be to many because I can see it become overwhelming)
/*--------- Variables ----------*/
// Turns (turn between player and AI)
// Player Choices based upon encounter

// This is the player's 'state' throughout the game and it represeants how the player may be affected as the user makes choices.
let playerState = {}


/*--------- Event Listeners ----------*/
// 3-5 Buttons for User Input Choices
// HTML/CSS Music & SoundFX Triggers
// Dark/Light Mode Buttons





/*--------- Cached Reference Elements ----------*/
// MAIN MENU
    // Start Button --> Pick Your Class Screen
// Pick Your Class Screen
    // 3 Buttons to Allows User to pick desired class (warrior, wizard, Ranger), 1 Input area allowing user to name their character, and Lastly 1 button for Start game which triggers the adventure to start. 

// INGAME 
    // User input buttons 

// HTML/CSS Music & SoundFX 



/*--------- Functions ----------*/
// Abilities/Spells Functions - Calculating the functions that determine how much damage player deals AND Enemies deal
// Saving throws

// Calculating Damage Dealt
// Calculating Damage Done
// Getting additional items

// Starts game and sets state as 
function startGame () {
    state = {}
    showTextNode = (0)

}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
      optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }
}
textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })

function selectOption(option) {

}

// Text nodes that drive story progression and subsequent choices.
const textNodes = [
    {
        id: 1,
        text: "After a long and arduous journey from the capital, you reach your destination of Raven's Crest, a quiet town if it were'nt for influx of visitors and folks seeking fame, fortune, and adventure. As you make your way through the streets you notice the townsfolk look at you with steely cold eyes and glancing stares.",
        options: [
            {
                text: "Ask one of the viligers where you can find a room and an ale",
            },
            {
                text: "Go search for an inn on your own",
            },
            {
                text: "What's that voice that I keep hearing?",
            },
        ]
    }
]

startGame()