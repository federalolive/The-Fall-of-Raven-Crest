const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('input-buttons')

// This is the player's 'state' throughout the game and it represeants how the player may be affected as the user makes choices.
let playerState = {}

// Starts game and sets state as 
function startGame () {
    state = {}
    showTextNode = (1)

}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
      optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

 // Allows buttons to be customized so we do not always need to show 4 buttons
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
                text: "What!? Who said that!?!?",
            }
        ]
    }
]

startGame()