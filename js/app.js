const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('input-buttons')

// This is the player's 'state' throughout the game and it represeants how the player may be affected as the user makes choices.
let state = {}

// Starts game and sets player state as being empty upon startup of game.
function startGame () {
    state = {}
    showTextNode(0)
}

// Allows buttons to be customized so we do not always need to show 4 buttons
function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
      optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

//  Buttons will display text of options in which the user can then choose and progres story
 textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

// Allows user inputs to appear as they are referenced in the game (so they are not always visibly present)
function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
  }
  
  function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
      return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
  }

// Text nodes that drive story progression and subsequent choices.
const textNodes = [
    {
        id: 0,
        text: "After a long and arduous journey from the capital, you reach your destination of Raven's Crest, a quiet town if it were'nt for influx of visitors and folks seeking fame, fortune, and adventure. As you make your way through the streets you notice the townsfolk look at you with steely cold eyes and glancing stares.",
        options: [
            {
                text: "Ask one of the viligers where you can find a room and an ale",
                nextText: 1

            },
            {
                text: "Go search for an inn on your own",
                nextText: 2
            },
            {
                text: "Seek out the local magistrate for work.",
                nextText: 3
            },
            {
                text: "What!? Who said that!?!?",
                setState: {selfAware: true},
                nextText: 4
            }
        ]
    }
]

startGame()