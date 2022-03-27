'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Jingles', [

      {
        name: "It's Beginning to Look a Lot Like Christmas",
        artist: "Michael Bublé",
        lyrics: "It's beginning to look a lot like Christmas\nEverywhere you go\nTake a look at the five and ten, it's glistening once again\nWith candy canes and silver lanes that glow\nIt's beginning to look a lot like Christmas\nToys in every store\nBut the prettiest sight to see is the holly that will be\nOn your own front door\nA pair of Hopalong boots and a pistol that shoots\nIs the wish of Barney and Ben\nDolls that'll talk and will go for a walk\nIs the hope of Janice and Jen\nAnd Mom and Dad can hardly wait for school to start again\nIt's beginning to look a lot like Christmas\nEverywhere you go\nThere's a tree in the Grand Hotel, one in the park as well\nIt's the sturdy kind that doesn't mind the snow\nIt's beginning to look a lot like Christmas\nSoon the bells will start\nAnd the thing that'll make 'em ring is the carol that you sing\nRight within your heart\nIt's beginning to look a lot like Christmas\nToys in every store\nBut the prettiest sight to see is the holly that will be\nOn your own front door\nSure, it's Christmas once more",
        avgRating: null,
        description: 'A Christmas Classic by Michael Bublé',
        image: 'https://res.cloudinary.com/ddxtopm0l/image/upload/v1639688260/jollyJingles/Michael-Buble_touba4.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
       },

      {
        name: "All I Want for Christmas Is You",
        artist: "Mariah Carey",
        lyrics: "I don't want a lot for Christmas\nThere is just one thing I need\nI don't care about the presents underneath the Christmas tree\nI just want you for my own\nMore than you could ever know\nMake my wish come true\nAll I want for Christmas is you\nYeah\nI don't want a lot for Christmas\nThere is just one thing I need (and I)\nDon't care about the presents underneath the Christmas tree\nI don't need to hang my stocking there upon the fireplace\nSanta Claus won't make me happy with a toy on Christmas Day\nI just want you for my own\nMore than you could ever know\nMake my wish come true\nAll I want for Christmas is you\nYou, baby\nOh, I won't ask for much this Christmas\nI won't even wish for snow (and I)\nI'm just gonna keep on waiting underneath the mistletoe\nI won't make a list and send it to the North Pole for Saint Nick\nI won't even stay awake to hear those magic reindeer click\n'Cause I just want you here tonight\nHolding on to me so tight\nWhat more can I do?\nOh, baby, all I want for Christmas is you\nYou, baby\nOh-oh, all the lights are shining so brightly everywhere (so brightly, baby)\nAnd the sound of children's laughter fills the air (oh, oh, yeah)\nAnd everyone is singing (oh, yeah)\nI hear those sleigh bells ringing\nSanta, won't you bring me the one I really need? (Yeah, oh)\nWon't you please bring my baby to me?\nOh, I don't want a lot for Christmas\nThis is all I'm asking for\nI just wanna see my baby standing right outside my door\nOh, I just want you for my own\nMore than you could ever know\nMake my wish come true\nOh, baby, all I want for Christmas is you\nYou, baby\nAll I want for Christmas is you, baby\nAll I want for Christmas is you, baby\nAll I want for Christmas is you, baby\nAll I want for Christmas (all I really want) is you, baby\nAll I want (I want) for Christmas (all I really want) is you, baby",
        avgRating: null,
        description: 'A Christmas Classic by Mariah Carey',
        image: 'https://res.cloudinary.com/ddxtopm0l/image/upload/v1639688260/jollyJingles/Mariah-Carey_sm73tw.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "Oy Chanukah, Oy Chanukah!",
        artist: "Klezmer Conservatory Band",
        lyrics: "Oy Chanuka, Oy Chanuka a yomtov a shener,\nA lustiker; a freylicher; nito noch azoyner.\nAlle nacht in dredlech,\nShpiln mir, zudik hese latkes, est on a shir.\nGeshvinder, tsindt kinder,\nDee deninke lichtelech ohn.\n\nZingt \"Al Hanisim\",\nLoibt Gott far di nisim,\nUn kumt giher tantzn in kohn.\n\nZingt \"Al Hanisim\",\nLoibt Gott for di nisim.\nUn kumt giher tantzn in kohn.",
        avgRating: null,
        description: 'A Hannukah Classic by Klezmer Conservatory Band',
        image: 'https://res.cloudinary.com/ddxtopm0l/image/upload/v1639688259/jollyJingles/Klezmer-Conservatory_sfrn8q.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "The Chanukah Song",
        artist: "Adam Sandler",
        lyrics: "Okay\nThis is a song that uh\nThere's a lot of Christmas songs out there and uh\nnot too many Hanukkah songs\nSo uh\nI wrote a song for all those nice little Jewish kids\nwho don't get to hear any Hanukkah songs\nHere we go\nPut on your yarmulke\nHere comes Hanukkah\nSo much funukah\nTo celebrate Hanukkah\nHanukkah is the festival of lights\nInstead of one day of presents, we have eight crazy nights\nWhen you feel like the only kid in town without a Christmas tree\nHere's a list of people who are Jewish just like you and me\nDavid Lee Roth lights the menorah\nSo do James Caan, Kirk Douglas, and the late Dinah Shore-ah\nGuess who eats together at the Carnegie Deli\nBowser from Sha Na Na and Arthur Fonzerelli\nPaul Newman's half Jewish, Goldie Hawn's half too\nPut them together, what a fine lookin' Jew\nYou don't need \"Deck The Halls\" or \"Jingle Bell Rock\"\n'Cause you can spin a dreidel with Captain Kirk and Mr. Spock- both Jewish\nPut on your yarmulke\nIt's time for Hanukkah\nThe owner of the Seattle Supersonicahs\nCelebrates Hanukkah\nO.J. Simpson, not a Jew\nBut guess who is? Hall of famer Rod Carew- he converted\nWe got Ann Landers and her sister Dear Abby\nHarrison Ford's a quarter Jewish- not too shabby\nSome people think that Ebenezer Scrooge is\nWell he's not, but guess who is\nAll three Stooges\nSo many Jews are in showbiz\nTom Cruise isn't, but I heard his agent is\nTell your friend Veronica\nIt's time to celebrate Hanukkah\nI hope I get a harmonicah\nOh this lovely, lovely Hanukkah\nSo drink your gin and tonicah\nAnd smoke your marijuanikah\nIf you really, really wannakah\nHave a happy, happy, happy, happy Hanukkah\nHappy Hanukkah\n",
        avgRating: null,
        description: 'A fun Hannukah song by Adam Sandler',
        image: 'https://res.cloudinary.com/ddxtopm0l/image/upload/v1639688258/jollyJingles/Adam-Sandler_obnwk5.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "Only In America",
        artist: "Brooks & Dunn",
        lyrics: "Sun coming' up over New York City  School bus driver in a traffic jam\nStaring out at the faces in a rear view mirror\nLookin' at the promise of the Promised Land\nOne kid dreams of fame and fortune\nOne kid helps pay the rent\nOne could end up going to prison\nOne just might be president\nOnly in America\nDreamin' in red white and blue\nOnly in America\nWhere we dream as big as we want to\nWe all get a chance\nEverybody gets to dance\nOnly in America\nSun goin' down on an LA freeway\nNewly weds in the back of a limosine\nA welder's son and a banker's daughter\nAll they want is every thing\nShe came out here to be an actress\nHe was a singer in a band\nThey might just go back to Oklahoma\nAnd talk about the stars they could have been\nOnly in America\nDreamin' in red white and blue\nOnly in America\nWhere we dream as big as we want to\nWe all get a chance\nEverybody gets to dance\nOnly in America\nOnly in America\n Dreamin' in red white and blue\nOnly in America\nWhere we dream as big as we want to\nWe all get a chance\nEverybody gets to dance\nOnly in America\nYeah Only in America\nOnly in America\nWhere we dream in red white and blue\nYeah we dream as big as we want to\nOnly in America",
        avgRating: null,
        description: 'A fun song to celebrate the 4th of July by Brooks & Dunn',
        image: 'https://res.cloudinary.com/ddxtopm0l/image/upload/v1639688259/jollyJingles/Brooks___Dunn_-_Only_in_America_dnxakw.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "Betelehemu",
        artist: "African Children's Choir",
        lyrics: "Betelehemu\nAwa yio ri Baba gbojule\nAwa yio ri Baba fehinti\nNibo labi Jesu\nNibo labe bi i\nBetelehemu, ilu ara\nNibe labi Baba o daju\nIyin, iyin, iyin nifun o\nAdupe fun o, adupe fun o, adupe fun ojo oni\nBaba oloreo\nIyin, iyin, iyin fun o Baba anu\nBaba toda wasi\nBetelehemu",
        avgRating: null,
        description: 'This Yoruba Christmas song was written by the Nigerian drummer Babatunde Olatunji. Today the uplifting hymn is performed by choirs across the world during the Christmas season, and is often accompanied by drumming and choreography.',
        image: 'https://res.cloudinary.com/ddxtopm0l/image/upload/v1639688258/jollyJingles/African-Children-Choir_oz4xnj.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "TALJ, TALJ",
        artist: "Fairuz",
        lyrics: "Min zamān 'anā waṣaghīrī\nKān fī ṣabī yejī min al-'a7rāsh\n'al3ab 'anā wiyāh\nKān ismu Shādī\n\n'anā wShādī ghanaynā sawa\nLa3abnā 3alā t-talj\nRakaḍnā bil-hawā\nKtabnā 3al-'a7jār 'aṣaṣ ṣghār\nWlawa7nā l-hawā\n\nWyawm min al'yām wla3it ed-dinī\nNās ḍad nās 3al'ū bihad-dinī\nwṣār el-'itāl ya'rrib 3lā t-tlāl\nwed-dinī dinī\n\nWa3l'it 3aṭrāfi l-wādī\nShādī rakaḍ yatfarraj\nKhift wṣarit endahlu\nWa'innak rāyi7 yā Shādī\nEndahilu mā yasma3nī\nWayb3ad yb3ad bil-wādī\nWmin yawmit-hā mā 3addat shiftu\nḌā3 Shādī\n\nWt-talj ijah wrā7 et-talj\n3ashrīn marra ijah wrā7 t-talj\nW'anā ṣirt 'akbar wShādī ba3du ṣghayar\n3amyil3ab 3at-talj.",
        avgRating: null,
        description: "Lebanon isn't exactly known for its snowy winters, but that didn't stop snow from becoming the subject one of the country's most beloved holiday tunes. Popularized by the iconic Lebanese singer Fairuz, the title translates to 'Snow, Snow.'",
        image: 'https://res.cloudinary.com/ddxtopm0l/image/upload/v1639688259/jollyJingles/Fairuz_tsstts.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "IMPODOBESTE MAMA BRADUL",
        artist: "Colinde",
        lyrics: "Impodobeste mama bradul si nu te intrista\nAsta e seara de Craciun, este seara ta\nImpodobeste bradul tata ca ne asteapta-n prag\nColindatori la noi acasa, hai sa-i primim cu drag.\n\nE masa incarcata de nuci, mere si colacei\nFii vesela mama, la usa-s clopotei\nSi cerul cu stele azi canta 'E vremea colindelor'\nHai tata, nu plange, e seara tuturor...\n\nImpodobeste mama bradul si nu te intrista\nAsta e seara de Craciun, este seara ta\nImpodobeste bradul tata ca ne asteapta-n prag\nColindatori la noi acasa, hai sa-i primim cu drag.\n\nTu, mama, ma iarta de toate cate ti-am gresit\nHai, strange-ma in brate si spune-mi 'bun venit'\nE noaptea cand Domnul va sta cu noi la masa iara\nHai tat, a nu plange, e seara tuturor...\n\nImpodobeste mama bradul si nu te intrista\nAsta e seara de Craciun, este seara ta\nImpodobeste bradul tata ca ne asteapta-n prag\nColindatori la noi acasa, hai sa-i primim cu drag.",
        avgRating: null,
        description: "This contemporary Christmas song from the Romanian pop star Fuego means 'Mother Adorns the Tree.' And if you can't understand what Fuego is singing about, his music video unfortunately doesn't add much clarity.",
        image: 'https://res.cloudinary.com/ddxtopm0l/image/upload/v1639688261/jollyJingles/Colinde_zy4vil.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "Colcannon",
        artist: "Mary Black",
        lyrics: "Did you ever eat Colcannon, made from lovely pickled cream?\nWith the greens and scallions mingled like a picture in a dream.\nDid you ever make a hole on top to hold the melting flake\nOf the creamy, flavoured butter that your mother used to make?\n\nOh you did, so you did, so did he and so did I.\nAnd the more I think about it, sure, the nearer I'm to cry.\nOh, weren't them the happy days when troubles we had not,\nAnd our mothers made Colcannon in the little skillet pot.\n\nWell did you ever take potato cake in a basket to the school,\nTucked underneath your oxter (1) with your book, your slate and rule?\nAnd when teacher wasn't looking, sure, a great big bite you'd take,\nOf the creamy flavoured butter and sweet potato cake.\n\nWell did you ever go a-courting as the evening sun went down,\nAnd the moon began a-peeping from behind the Hill o' Down?\nAs you wandered down the boreen (2) where the clúrachán (3) was seen,\nAnd you whispered loving phrases to your little fair Colleen.",
        avgRating: null,
        description: "Colcannon is a common Irish dish that's traditionally made with kale or cabbage, mashed potatoes, scallions, butter, milk, Irish bacon, salt and pepper. It's long been a tradition to eat Colcannon on Halloween. For this holiday, symbolic items are hidden in the Colcannon: a coin, a thimble, a button and a plain gold ring. Whoever gets the coin will be rich. The person who gets the thimble or button will remain unmarried, and the one who gets the golden ring will get married within the year.",
        image: 'https://res.cloudinary.com/ddxtopm0l/image/upload/v1639688259/jollyJingles/Mary-Black_xojbvz.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "Magha Puja Song",
        artist: "Anil Sakya",
        lyrics: 'none available',
        avgRating: null,
        description: "Māgha Pūjā (also written as Makha Bucha Day) is the second most important Buddhist festival,[1] celebrated on the full moon day of the third lunar month[6] in Cambodia, Laos, Thailand, Sri Lanka and on the full moon day of Tabaung in Myanmar. It celebrates a gathering that was held between the Buddha and 1,250 of his first disciples, which, according to tradition, preceded the custom of periodic recitation of discipline by monks.",
        image: 'https://res.cloudinary.com/ddxtopm0l/image/upload/v1639688260/jollyJingles/Magja-Puja_doqhda.jpg',
        createdAt: new Date(),
        updatedAt: new Date() },
      {
        name: "Firework",
        artist: "Katy Perry",
        lyrics: 'Do you ever feel like a plastic bag\nDrifting through the wind, wanting to start again?\nDo you ever feel, feel so paper-thin\nLike a house of cards, one blow from caving in?\nDo you ever feel already buried deep?\nSix feet under screams, but no one seems to hear a thing\nDo you know that there\'s still a chance for you?\n\'Cause there\'s a spark in you\nYou just gotta ignite the light\nAnd let it shine\nJust own the night\nLike the Fourth of July\n\'Cause baby, you\'re a firework\nCome on show \'em what you\'re worth\nMake \'em go, "Aah, aah, aah"\nAs you shoot across the sky\nBaby, you\'re a firework\nCome on, let your colors burst\nMake \'em go, "Aah, aah, aah"\nYou\'re gonna leave them all in awe, awe, awe\nYou don\'t have to feel like a waste of space\nYou\'re original, cannot be replaced\nIf you only knew what the future holds\nAfter a hurricane comes a rainbow\nMaybe a reason why all the doors are closed\nSo you could open one that leads you to the perfect road\nLike a lightning bolt, your heart will glow\nAnd when it\'s time, you\'ll know\nYou just gotta ignite the light\nAnd let it shine\nJust own the night\nLike the Fourth of July\n\'Cause baby, you\'re a firework\nCome on, show \'em what you\'re worth\nMake \'em go, "Aah, aah, aah"\nAs you shoot across the sky\nBaby, you\'re a firework\nCome on, let your colors burst\nMake \'em go, "Aah, aah, aah"\nYou\'re gonna leave them all in awe, awe, awe\nBoom, boom, boom\nEven brighter than the moon, moon, moon\nIt\'s always been inside of you, you, you\nAnd now it\'s time to let it through\n\'Cause baby, you\'re a firework\nCome on, show \'em what you\'re worth\nMake \'em go, "Aah, aah, aah"\nAs you shoot across the sky\nBaby, you\'re a firework\nCome on, let your colors burst\nMake \'em go, "Aah, aah, aah"\nYou\'re gonna leave them all in awe, awe, awe\nBoom, boom, boom\nEven brighter than the moon, moon, moon\nBoom, boom, boom\nEven brighter than the moon, moon, moon',
        avgRating: null,
        description: '"Firework" is a song by American singer Katy Perry from her third studio album, Teenage Dream.',
        image: 'https://res.cloudinary.com/ddxtopm0l/image/upload/v1639688260/jollyJingles/Katy-Perry_bm3ie7.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "Happy",
        artist: "Pharrel Williams",
        lyrics: 'It might seem crazy what I\'m \'bout to say Sunshine she\'s here, you can take a break I\'m a hot air balloon that could go to space With the air, like I don\'t care, baby, by the way (Because I\'m happy)\nClap along if you feel like a room without a roof\n(Because I\'m happy)\nClap along if you feel like happiness is the truth\n(Because I\'m happy)\nClap along if you know what happiness is to you\n(Because I\'m happy)\nClap along if you feel like that\'s what you wanna do\nHere come bad news, talking this and that (Yeah!)\nWell, give me all you got, don\'t hold it back (Yeah!)\nWell, I should probably warn ya, I\'ll be just fine (Yeah!)\nNo offense to you, don\'t waste your time, here\'s why\n(Because I\'m happy)\nClap along if you feel like a room without a roof\n(Because I\'m happy)\nClap along if you feel like happiness is the truth\n(Because I\'m happy)\nClap along if you know what happiness is to you\n(Because I\'m happy)\nClap along if you feel like that\'s what you wanna do\nBring me down\nCan\'t nothing bring me down\nMy level\'s too high to bring me down\nCan\'t nothing bring me down, I said\nBring me down\nCan\'t nothing bring me down\nMy level\'s too high to bring me down\nCan\'t nothing bring me down, I said\n(Because I\'m happy)\nClap along if you feel like a room without a roof\n(Because I\'m happy)\nClap along if you feel like happiness is the truth\n(Because I\'m happy)\nClap along if you know what happiness is to you\n(Because I\'m happy)\nClap along if you feel like that\'s what you wanna do\n(Because I\'m happy)\nClap along if you feel like a room without a roof\n(Because I\'m happy)\nClap along if you feel like happiness is the truth\n(Because I\'m happy)\nClap along if you know what happiness is to you\n(Because I\'m happy)\nClap along if you feel like that\'s what you wanna do\nBring me down\nCan\'t nothing bring me down\nMy level\'s too high to bring me down\nCan\'t nothing bring me down, I said...\n(Because I\'m happy)\nClap along if you feel like a room without a roof\n(Because I\'m happy)\nClap along if you feel like happiness is the truth\n(Because I\'m happy)\nClap along if you know what happiness is to you\n(Because I\'m happy)\nClap along if you feel like that\'s what you wanna do\n(Because I\'m happy)\nClap along if you feel like a room without a roof\n(Because I\'m happy)\nClap along if you feel like happiness is the truth',
        avgRating: null,
        description: 'Pharrell made the world "Happy" in 2014 with this feel-good anthem. The song soared to #1 in 35 countries—it was the best selling song of 2014.',
        image: 'https://res.cloudinary.com/ddxtopm0l/image/upload/v1639688258/jollyJingles/Pharrel-Williams_xzdgpl.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "Get Lucky",
        artist: "Daft Punk",
        lyrics: 'Like the legend of the phoenix, huh\nAll ends with beginnings\nWhat keeps the planet spinning, uh-huh\nThe force from the beginning\nLook\nWe\'ve come too far\nTo give up who we are\nSo let\'s raise the bar\nAnd our cups to the stars\nShe\'s up all night \'til the sun\nI\'m up all night to get some\nShe\'s up all night for good fun\nI\'m up all night to get lucky\nWe\'re up all night \'til the sun\nWe\'re up all night to get some\nWe\'re up all night for good fun\nWe\'re up all night to get lucky\nWe\'re up all night to get lucky\nWe\'re up all night to get lucky\nWe\'re up all night to get lucky\nWe\'re up all night to get lucky\nThe present has no ribbon\nYour gift keeps on giving\nWhat is this I\'m feeling?\nIf you wanna leave, I\'m with it, uh-huh\nWe\'ve come too far\nTo give up who we are\nSo let\'s raise the bar\nAnd our cups to the stars\n[Chorus: Pharrell Williams]\nShe\'s up all night \'til the sun\nI\'m up all night to get some\nShe\'s up all night for good fun\nI\'m up all night to get lucky\nWe\'re up all night \'til the sun\nWe\'re up all night to get some\nWe\'re up all night for good fun\nWe\'re up all night to get lucky\nWe\'re up all night to get lucky\nWe\'re up all night to get lucky\nWe\'re up all night to get lucky\nWe\'re up all night to get lucky\nShe\'s up all night \'til the sun\nI\'m up all night to get some\nShe\'s up all night for good fun\nI\'m up all night to get lucky\nWe\'re up all night \'til the sun\nWe\'re up all night to get some\nWe\'re up all night for good fun\nWe\'re up all night to get lucky\nWe\'re up all night to get lucky\nWe\'re up all night to get lucky\nWe\'re up all night to get lucky\nWe\'re up all night to get lucky\n[Chorus: Pharrell Williams]\nShe\'s up all night \'til the sun\nI\'m up all night to get some\nShe\'s up all night for good fun\nI\'m up all night to get lucky\nWe\'re up all night \'til the sun\nWe\'re up all night to get some\nWe\'re up all night for good fun\nWe\'re up all night to get lucky\nWe\'re up all night to get lucky\nWe\'re up all night to get lucky\nWe\'re up all night to get lucky\nWe\'re up all night to get lucky\n[Bridge: Daft Punk]\nWe\'re up all night to get\nWe\'re up all night to get\nWe\'re up all night to get\nWe\'re up all night to get\nWe\'re up all night to get\nWe\'re up all night to get',
        avgRating: null,
        description: '"Get Lucky" is a song by French electronic music duo Daft Punk, featuring American singer Pharrell Williams and American guitarist Nile Rodgers. It was co-written by all of them. Daft Punk released the song as the lead single from their fourth and final studio album, Random Access Memories, on 19 April 2013.',
        image: 'https://res.cloudinary.com/ddxtopm0l/image/upload/v1639688259/jollyJingles/Daft-Punk_kjhv0x.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "Stayin' Alive",
        artist: "Bee Gees",
        lyrics: "Well, you can tell by the way I use my walk\nI'm a woman's man, no time to talk\nMusic loud and women warm\nI've been kicked around since I was born\nAnd now it's all right, it's okay\nAnd you may look the other way\nWe can try to understand\nThe New York Times' effect on man\nWhether you're a brother or whether you're a mother\nYou're stayin' alive, stayin' alive\nFeel the city breakin' and everybody shakin'\nAnd we're stayin' alive, stayin' alive\nAh, ha, ha, ha, stayin' alive, stayin' alive\nAh, ha, ha, ha, stayin' alive\nOh, when you walk\nWell now, I get low and I get high\nAnd if I can't get either, I really try\nGot the wings of heaven on my shoes\nI'm a dancing man, and I just can't lose\nYou know it's alright, it's okay\nI'll live to see another day\nWe can try to understand\nThe New York Times' effect on man\nWhether you're a brother or whether you're a mother\nYou're stayin' alive, stayin' alive\nFeel the city breakin' and everybody shakin'\nAnd we're stayin' alive, stayin' alive\nAh, ha, ha, ha, stayin' alive, stayin' alive\nAh, ha, ha, ha, stayin' alive\nLife's goin' nowhere, somebody help me\nSomebody help me, yeah\nLife goin' nowhere, somebody help me, yeah\nI'm stayin' alive\nWhether you're a brother or whether you're a mother\nYou're stayin' alive, stayin' alive\nFeel the city breakin' and everybody shakin'\nAnd we're stayin' alive, stayin' alive\nAh, ha, ha, ha, stayin' alive, stayin' alive\nAh, ha, ha, ha, stayin' alive",
        avgRating: null,
        description: '"Stayin\' Alive" is a 1977 disco single written by the Bee Gees which peaked at #1 on the Billboard Hot 100 and remained there for four weeks.',
        image: 'https://res.cloudinary.com/ddxtopm0l/image/upload/v1639688259/jollyJingles/Bee-Gees_geynte.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "Baby Shark",
        artist: "Pinkfong",
        lyrics: 'Baby shark, doo doo doo doo doo\nBaby shark, doo doo doo doo doo doo\nBaby shark, doo doo doo doo doo doo\nBaby shark!\nMommy shark, doo doo doo doo doo doo\nMommy shark, doo doo doo doo doo doo\nMommy shark, doo doo doo doo doo doo\nMommy shark!\nDaddy shark, doo doo doo doo doo doo\nDaddy shark, doo doo doo doo doo doo\nDaddy shark, doo doo doo doo doo doo\nDaddy shark!\nGrandma shark, doo doo doo doo doo doo\nGrandma shark, doo doo doo doo doo doo\nGrandma shark, doo doo doo doo doo doo\nGrandma shark!\nGrandpa shark, doo doo doo doo doo doo\nGrandpa shark, doo doo doo doo doo doo\nGrandpa shark, doo doo doo doo doo doo\nGrandpa shark!\nLet\'s go hunt, doo doo doo doo doo doo\nLet\'s go hunt, doo doo doo doo doo doo\nLet\'s go hunt, doo doo doo doo doo doo\nLet\'s go hunt!\nRun away, doo doo doo doo doo doo\nRun away, doo doo doo doo doo doo\nRun away, doo doo doo doo doo doo\nRun away!\nSafe at last, doo doo doo doo doo doo\nSafe at last, doo doo doo doo doo doo\nSafe at last, doo doo doo doo doo doo\nSafe at last!\nIt\'s the end, doo doo doo doo doo doo\nIt\'s the end, doo doo doo doo doo doo\nIt\'s the end, doo doo doo doo doo doo\nIt\'s the end!',
        avgRating: null,
        description: '"Baby Shark" is a nursery dance song about a family of sharks. The song seems to be originated from a German song called "Kleiner Hai" by Alemuel.',
        image: 'https://res.cloudinary.com/ddxtopm0l/image/upload/v1639688258/jollyJingles/Pinkfong_k6fttb.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "Show Me Love",
        artist: "Robyn",
        lyrics: "Yeah, yeah, yeah, yeah, yeah\nAlways been told that I've got too much pride\nToo independent to have you by my side\nBut my heart said all of you will see\nJust won't live for someone until he lives for me\nNever thought I would find love so sweeet\nNever thought I would meet someone like you \nWell now I've found you and I'll tell you no lie\nThis love I've got for you \nCould take me 'round the world\nNow show me love\nShow me love, show me life\nBaby show me what it's all about\nYou're the one that I ever needed\nShow me love and what it's all about, alright\nDon't waste this love I wanna give it to you\nTell me what you got, show me what you can do \nShow me love, show me everything\nI know you've got potential\nSo baby let me in and show me love\nShow me love, show me life (alright)\nBaby show me what it's all about\nYou're the only one that I ever needed (show me love)\nShow me love and what it's all about, alright\nShow me love, show me life\nBaby show me what it's all about\nYou're the one that I ever needed \nShow me love and what it's all about, alright\nShow me love baby\nShow me everything you've got and show me life\nShow me love baby\nShow me everything and what it's all about\nYou're the one, the only one I ever needed\nShow me love and what it's all about, alright\nI'll love you\nI'll miss you\nI'll make sure\nEverything will be alright\nI'll give you my heart\nIf you just give me love\nEvery day and every night\nShow me love, show me life (alright)\nBaby show me what it's all about\nYou're the one that I ever needed\nShow me love and what it's all about, alright\nShow me love, show me life (alright)\nBaby show me what it's all about\nYou're the one that I ever needed\nShow me love and what it's all about, alright",
        avgRating: null,
        description: "This soulful hit from Swedish superstar Robyn showed that she has what it takes…to make us fall in love with her and with the idea of Love. Groove out to this 90's bubblegum hit, and ask everyone for some love.",
        image: "https://res.cloudinary.com/ddxtopm0l/image/upload/v1639688258/jollyJingles/Robyn_l4fidc.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "We Found Love",
        artist: "Rihanna feat. Calvin Harris",
        lyrics: "Yellow diamonds in the light\nNow we’re standing side by side\nAs your shadow crosses mine\nWhat it takes to come alive\nIt's the way I'm feeling I just can't deny\nBut I've gotta let it go\nWe found love in a hopeless place\nWe found love in a hopeless place\nWe found love in a hopeless place\nWe found love in a hopeless place\nShine a light through an open door\nLove and life I will divide\nTurn away 'cause I need you more\nFeel the heartbeat in my mind\nIt's the way I'm feeling I just can't deny\nBut I've gotta let it go\nWe found love in a hopeless place\nWe found love in a hopeless place\nWe found love in a hopeless place\nWe found love in a hopeless place\nYellow diamonds in the light\nNow we're standing side by side\nAs your shadow crosses mine (mine, mine, mine)\nWe found love in a hopeless place\nWe found love in a hopless place\nWe found love in a hopeless place\nWe found love in a hopeless place",
        avgRating: null, description: "Finding love in a hopeless place is a common  for most Valentine’s Day enthusiasts. This song depicts a relationship that does not have a happy ending, but the song itself was a certifiable hit for the months leading up to and the months after Valentine’s Day",
        image: "https://res.cloudinary.com/ddxtopm0l/image/upload/v1639688259/jollyJingles/Rhianna_vspj4m.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "The Boys Are Back In Town",
        artist: "Thin Lizzy",
        lyrics: "Guess who just got back today?\nThem wild-eyed boys that'd been away\nHaven't changed, had much to say\nBut man, I still think them cats are crazy\nThey were askin' if you were around\nHow you was, where you could be found\nTold 'emyou were livin' downtown\nDrivin' all the old men crazy\nThe boys are back in town\n(The boys are back in town)\nI said the boys are back in town\n(The boys are back in town)\nThe boys are back in town\n(The boys are back in town)\nThe boys are back in town\n(The boys are back in town)\nYou know that chick that used to dance a lot\nEvery night she'd be on the floor, shakin' what she's got\nMan when I tell you she was cool, she was red hot\nI mean, she was steamin'\nAnd that time over at Johnny's place\nWell, this chick got up and she slapped Johnny's face\nMan, we just fell about the place\nIf that chick don't wanna know, forget her\nThe boys are back in town\n(The boys are back in town)\nI said, the boys are back in town\n(The boys are backin town)\nThe boys are back in town\n(The boys are back in town)\nThe boys are back in town\n(The boys are back in town)\nSpread the word around\nGuess who's back in town\nJust spread the word around\nFriday night they'll be dressed to kill\nDown at Dino's Bar'n'Grill\nThe drink will flow and blood will spill\nAnd if the boys wanna fight, you better let 'em\nThat jukebox in the corner blastin' out my favorite song\nThe nights are getting longer, it won't be long\nWon't be long 'til summer comes\nNow that the boys are here again\nThe boys are back in town\n(The boys are back in town)\nThe boys are back in town\n(The boys are back in town)\nThe boys are back in town\n(The boys are back in town)\n(Spread the word around)\nThe boys are back in town\n(The boys are back in town)\n(The boys are back, the boys are back)\nThe boys are back in town again\nBeen hangin' down at Dino's\nThe boys are back in town again",
        avgRating: null,
        description: "One of the most popular songs from the Irish hard rock band Thin Lizzy, this song may not be your typical St. Patrick’s Day hit - but it will surely get you seeing green…",
        image: "https://res.cloudinary.com/ddxtopm0l/image/upload/v1639688259/jollyJingles/Thin-Lizzy_o10rga.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "Takin’ Care of Business",
        artist: "Bachman Turner Overdrive",
        lyrics: "You get up every morning from your alarm clock's warning\nTake the 8:15 into the city\nThere's a whistle up above and people pushin', people shovin'\nAnd the girls who try to look pretty\nAnd if your train's on time, you can get to work by nine\nAnd start your slaving job to get your pay\nIf you ever get annoyed, look at me I'm self-employed\nI love to work at nothing all day \nAnd I'll be taking care of business (every day)\nTaking care of business (every way)\n I've been taking care of business (it's all mine)\nTaking care of business and working overtime, work out\n If it were easy as fishin' you could be a musician\nIf you could make sounds loud or mellow\nGet a second-hand guitar, chances are you'll go far\nIf you get in with the right bunch of fellows\nPeople see you having fun just a-lying in the sun\nTell them that you like it this way\nIt's the work that we avoid, and we're all self-employed\nWe love to work at nothing all day\nAnd we be taking care of business (every day)\nTaking care of business (every way)\nWe be been taking care of business (it's all mine)\nTaking care of business and working overtime\nMercy\nWhoo\nAll right\nTake good care of my business\nWhen I'm away, every day\nWhoo\nThey get up every morning from their alarm clock's warning\nTake the 8:15 into the city\nThere's a whistle up above and people pushin', people shovin'\nAnd the girls who try to look pretty\nAnd if your train's on time, you can get to work by nine\nAnd start your slaving job to get your pay\nIf you ever get annoyed, look at me I'm self-employee\nI love to work at nothing all day\nAnd I be taking care of business (every day)\nTaking care of business (every way)\nI've been taking care of business (it's all mine)\nTaking care of business and working overtime, take care\nTakin' care of business, whoo\nTakin' care of business\nTakin' care of business\nTakin' care of business\nTakin' care of business (every day)\nTakin' care of business (every way)\nTakin' care of business (it's all mine)\nTakin' care of business and working overtime, whoo\nTakin' care of business\nTakin' care of business\nWe be takin' care of business\nWe be takin' care of business\nTakin' care of business\nTakin' care of business\nTakin' care of business",
        avgRating: null,
        description: "As the ‘provincial rock anthem of Manitoba’ this song will inspire you to get up, and then take care of business.",
        image: "https://res.cloudinary.com/ddxtopm0l/image/upload/v1639688258/jollyJingles/Bachman-Turner_bityij.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "Party in the USA",
        artist: "Miley Cyrus",
        lyrics: "I hopped off a plane at LAX\nWith a dream and my cardigan\nWelcome to the land of fame excess (woah)\nAm I gonna fit in?\nJumped in the cab, here I am for the first time\nLook to my right, and I see the Hollywood sign\nThis is all so crazy\nEverybody seems so famous\nMy tummy's turnin' and I'm feelin' kinda homesick\nToo much pressure and I'm nervous\nThat's when the taxi man turned on the radio\nAnd a Jay-Z song was on\nAnd a Jay-Z song was\nAnd a Jay-Z song was on\nSo I put my hands up\nThey're playin' my song, the butterflies fly away\nI'm noddin' my head like, yeah\nMovin' my hips like, yeah\nI got my hands up, they're playing' my song\nThey know I'm gonna be okay\nYeah, it's a party in the U.S.A.\nYeah, it's a party in the U.S.A.\nGet to the club in my taxi cab\nEverybody's looking at me now\nLike, 'Who's that chick, that's rockin' kicks?\nShe's gotta be from out of town'\nSo hard with my girls not around me\nIt's definitely not a Nashville party\n'Cause all I see are stilettos\nI guess I never got the memo\nMy tummy's turn' and I'm fellin' kinda homescik\nToo much pressure and I'm nervous\nThat's when the DJ dropped my favorite tun\nAnd a Britney song was on\nAnd a Britney song was on\nAnd a Britney song was on\nSo I put my hands up\nThey're playing' my song, the butterflies fly away\nI'm noddin' my head like, yeah\nMovin' my hips like, yeah\nI got my hands up, they're playin' my song\nThey know I'm gonna be okay\nYeah, it's a party in the U.S.A.\nYeah, it's party in the U.S.A.",
        avgRating: null,
        description: "In this Fourth of July hit, Miley recounts her travels from Nashville to Hollywood, specifically the trials and tribulations of being judged harshly for her appearance and demeanor. Nonetheless she listens to her favorite Jay-Z and Britney songs, and she pushes on….",
        image: "https://res.cloudinary.com/ddxtopm0l/image/upload/v1639688260/jollyJingles/Miley-Cyrus_kp6kqk.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Jingles', null, {});
  }
};
