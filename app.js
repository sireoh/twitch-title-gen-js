const emojis = "🥇\n🏧\n🎄\n🏯\n🎎\n👌\n🎅\n🗽\n🦖\n🗼\n🩹\n🎟️\n🚡\n✈️\n⏰\n⚗️\n👽\n👾\n🚑\n🏺\n⚓\n🐜\n🚗\n🥑\n🐤\n🎒\n🥓\n🏸\n🥯\n🥖\n⚖️\n🎈\n🍌\n🪘\n🍒\n🌸\n🌰\n🐔\n🐿️\n🍫\n🎪\n🌆\n🥂\n📬\n🌧️\n🤡\n🍹\n🥥\n☄️\n🧭\n🎊\n😖\n🍚\n🍪\n🍳\n🐄\n🦀\n🖍️\n💳\n🏏\n🐊\n🥐\n⚔️\n🔮\n🥒\n🥤\n🍛\n🍮\n🍖\n🍡\n🍱\n🍹\n🚲\n🌸\n🐡\n💣\n🦴\n🔖\n📚\n🍾\n💐\n🍜\n🎳\n🧠\n🍞\n🥦\n🧹\n🐞\n🚄\n🎯\n🌯\n🚌\n🧈\n🦋\n🌵\n🐫\n📷\n🏕️\n🕯️\n🍬\n🥫\n🛶\n🗃️\n📑\n🎠\n🎏\n🥕\n😺\n🪑\n📈\n🧀\n🍒\n🌸\n🌰\n🐔\n🐿️\n🍋\n💡\n🦎\n🦙\n🦂\n🍇\n🍏\n🥗\n🎸\n🍔\n🐹\n🙉\n🦔\n🚁\n🌿\n🌺\n🦛\n🍯\n🐝\n☕\n🌭\n🌋\n❄️\n🍦\n🎃\n👖\n🕹️\n🦘\n🛴\n👘\n🔪\n🪁\n🥝\n🏷️\n🐞\n💻\n🍃\n🥬\n🍋\n💡\n🦎\n🦙\n🦐\n🦚\n🐄\n😱\n🥙\n🍂\n⛴️\n🎞️\n🔥\n🚒\n🧯\n🐟\n⛳\n🦩\n🔦\n💾\n🃏\n😳\n🛸\n🥠\n🍀\n🍟\n🍤\n🐸\n⛽\n🎲\n🧄\n💎\n🦒\n🥛\n👓\n🧤\n🌟\n🐐\n🦍\n🍇\n🍏\n🍏\n🌧️\n🍣\n💦\n🌮\n👕\n🥡\n🎋\n🍊\n🍵\n☎️\n📺\n⛺\n🧪\n🧵\n🎫\n🐅\n🚽\n🍅\n🧰\n🚜\n🍹\n🐠\n🌍\n🗞️\n🧶\n🥱\n🤪\n🪀";
const words = "nomic \nw/ \neoh \nsleepy \nstrim \norang \nco-working \naort \nmorning \npost-nap \ncuties \nscribble \ndrink wawa \nsometimes \nsky \nhapi \ncozy \nsocks \ncome watch me \ndroo \ncomfi \njk im \npee \ncrai \nis a \nveri \nstrim \nwowow \nhehe \nwatch \nnini \ntime \nyour \nyou are a \nchill \nwith me \nalong with \nlob \nhababa \nreveal \nfeet \nnya \nin the \nyay \ndon't forget to \nget ready and \nits true \nmaybe "
const emojisArray = emojis.split("\n")
const wordsArray = words.split("\n")
const micArray = ["[mic on] ", "[mic off] "]
const isMicOn = false

//Display Bottom Text
//document.getElementById("b_text").innerHTML = emojisArray;

// Shuffle the array using Fisher-Yates algorithm (emojis)
for (let i = emojisArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [emojisArray[i], emojisArray[j]] = [emojisArray[j], emojisArray[i]];
}
const randomEmojis = emojisArray.slice(0, 3).join('');

// Shuffle the array using Fisher-Yates algorithm (words)
for (let i = wordsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [wordsArray[i], wordsArray[j]] = [wordsArray[j], wordsArray[i]];
}

// Select the first three emojis
const randomWords = wordsArray.slice(0, 3).join('');

//Mic Random
var randomMic = micArray[(Math.random() * micArray.length) | 0]

document.getElementById("b_text").innerHTML = randomMic + randomWords + randomEmojis;