const textElement = document.getElementById('glowInText')
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
        text: "As you approach the inn, a sudden chill pierces you and dances on your spine, the night is settling in. You notice a fog begin to rise and you feel a sense of joy and gratitude that you will not be spending your time in it. You turn your attention to the inn itself and notice that the outside of it looks gloomy, dull and dire. Stacked stones and marble details make up most of the building's outer structure. It's difficult to see through the small, stained glass windows, but the ominous atmosphere from within can be felt outside. As you enter the tavern through the thick, wooden door, you're welcomed by thick air and a feeling of discomfort. The bartender is talking to a customer and makes no effort to acknowledge your pressence. It's as somber inside as it is on the outside. Tree logs support the upper floor and the unlit torches attached to them. The walls are scattered with decor and game that has been hunted by locals. The inn is moderatly occupied with vilagers and people alike, all occupying their tables and tending to their conversations\,\ drink\,\ and food alike. You did hear rumors about this tavern, supposedly it's infamous for something, but for the life of you you can't remember what for.", 
        options: [
            {
                text: "Walk over to the innkeeper.",
                nextText: 13
            }
        ]
    },
    {
        id: 7,
        text: "You notice that you are alone and it is errily quiet. You have been through plenty of towns and villages before at all times of day, but have yet to experiance a stillness such as this. You dismiss such feelings and collect yourself as you walk up to the inn.",
        options: [
            {
                text: "Enter the inn.",
                nextText: 6
            }
        ]
    },
    {
        id: 8,
        text: "You nervously laugh in an attempt to brush off the experiance as being nothing more than a joke. The viligers look at you with the least bit of amusement. \"This one's another weird one!\" one viligers called out, \"Let's get rid of 'em!\" cried out another, \"I bet they're responsible for all of the peculiar things that have befalling our town!\" screached another woman. The viligers began to qaurrel amongst themsevles, and you mumble under your breath in annoyance this voice has caused. \"You're not crazy untill you start replying\"....",
        options: [
            {
                text: "Wait patiently for the viligers to decide what to do next.",
                nextText: 14
            },
            {
                text: "Try to escape",
                nextText: 15
            },
            {
                text: "\"I'm sick of this, you all die now\"",
                nextText: 16
            },
            {   
                text: "\"You can't possible tell me that you just didn't hear that!!!\"",
                nextText: 17
            }
        ]
    },
    {
        id: 9,
        text: "You vehemently apologize for creating the specticle, expressing that you have been traveling for so long and that you are fatigied from hunger and thirst, and as a result lost bearing with your sense for an all to brief moment. This of course being a lie, you are very well of the voice that you continue to hear that continuously is narrating, but you are also smart enough to down play it. The crowd looks at you with a mixture of contempt and pitty as you sense that some are angry with you and others are not convinced that you are not an imbecile. You don't care however, as the disperse allowing you to go along your way. You decide for yourself that you have had enough of today and make your way to the inn. \"Shut up voice\" you mutter underyour breath.",
        options: [
            {
                text: "Head to the inn",
                nextText: 6
            }
        ]
    },
    {
        id: 10,
        text: "You frantically look around the crowd, looking for the biggest idiot you can. Your eyes rest upon a large heavyset man with cross eyes and patched hair. Before you can even think this plan through the words escape your mouth, \"I'm not crazy!! He is crazy!\" as you point your finger at your target in a clear projection. In perfect annunciation the man defends himself, denying such accusations as having no base. \"Lets put 'em in the stocks! See if spending the night outside will clear his head\" a few viligers cry out in unison. Before you can react you are grabbed by several people and they begin to carry you off.", 
        options: [
            {
                text: "Try to escape",
                nextText: 18,
            },
            {
                text: "Attack the mob in an attempt to break free.",
                nextText: 18,
            },
        ]
    },
    {
        id: 11,
        text: "You have reached the peak of your patience and in a flurry you whirl around knocking the guards back. As they attempt to regain their balance you draw your own blade and immediatly dispatch one of the guards as you decapitate them. You laugh meniacally as you attempt to flee ",
        options: [
            {
                
            }
        ]
    }

]



startGame()