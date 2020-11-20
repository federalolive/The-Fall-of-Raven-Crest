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
        text: "After a long and arduous journey from the capital, you reach your destination of Raven's Crest just as the sun begins to set. Raven's Crest is a quiet town that resides near The Duskwood and the Wildlands. You walk into town and you notice the townsfolk look at you with steely cold eyes and glancing stares. You disregard it as you have experianced this treatment before and there are other matters to tend to.",
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
    },
    {
        id: 1,
        text: "As you are walking through the streets, you come accross a woman and ask her directions. \"Piss off ya vagrant, we wont nothing to do with you outsiders\" she excalims.",
        options: [
            {
                text: "\"I beg your pardon\" You apologize to the woman and depart to find the inn on your own.",
                nextText: 2
            },
            {
                text: "\"How dare you speak to me in such a manner you wretched wench!\" Strike the woman.",
                nextText: 5
            }
        ]
    },
    {
        id: 2,
        text: "You head off in search of the inn, and after a short while you come accross \"The Rabid Weasal\". You mutter to yourself about the ridiculousness of such a name and contemplate how even such a name came to be, but just as quickly drop it as the desire to have a cold drink, hot food, and later a warm bed outweigh the thoughts of a silly name for an inn.",
        options: [
            {
                text: "Enter the tavern",
                nextText: 6
            },
            {
                text: "Examine the area",
                nextText: 7
            }
        ]
    }
    
]


startGame()