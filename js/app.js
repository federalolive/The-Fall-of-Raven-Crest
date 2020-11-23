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
    },
    {
        id: 3,
        text: "You waste no time in seeking out work and head off to find the magistrate to seek contract work. When you arrive you find that office has closed for the day. You accept this position and decide that it is time for you to find your lodging for the evening and you stroll off to find an inn.",
        options: [
            {
                text: "Seek out the inn",
                nextText: 2
            }
        ]
    },
    {
        id: 4,
        text: "\"Hello?\" \"Who said that?\" you cried out nervously. \"How did you know I came from the capital? and where are you speaking to me from?\" you called out even louder. Disregarding your perception to the villigers you continuously seek to find asnwers to the source of the voices and disregard the small crowd that begins to form around you. You hear one vilager cry out \"Oi! He's talkin' to 'imself and mutterin' bout voices in 'is head!\" Other vilagers call out their criticisms of your behavior, and your heart sinks as you realize that you have drawn too much unwanted attention to yourself.",
        options: [
            {
                text: "Down play the situation as if it were a joke.",
                nextText: 8
            },
            {
                text: "Apologize for the specticle as it has been a really long and tiresome journey and you are fatigued.",
                nextText: 9
            },
            {
                text: "\"Project\" your craziness onto someone in the croud to try and shake off the croud.",
                nextText: 10
            }
        ]
    },
    {
        id: 5,
        text: "You shout as you strike the woman as hard as you can. The force of your blow knocking her back and down to the ground. You quickly realize that you two are not alone as you hear someone shout \"Guards! Guards!\" and before you can get away you here the sound of armored footsteps draw near you from behind, followed by the sensations of speartips digging through into your tunic enough to get your attention.",
        options: [
            {
                text: "Fight your way out of the situation.",
                nextText: 11
            },
            {
                text: "\"Is there a problem sir?\"",
                nextText: 12
            },
        ]
    },
    {
        id: 6,
    }
]


startGame()