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
        lyrics: "It's beginning to look a lot like Christmas \n Everywhere you go \nTake a look at the five and ten, it's glistening once again \n With candy canes and silver lanes that glow \n It's beginning to look a lot like Christmas \n Toys in every store \n But the prettiest sight to see is the holly that will be \n On your own front door \n A pair of Hopalong boots and a pistol that shoots \n Is the wish of Barney and Ben\n Dolls that'll talk and will go for a walk \n Is the hope of Janice and Jen\n And Mom and Dad can hardly wait for school to start again \n It's beginning to look a lot like Christmas\n Everywhere you go\n There's a tree in the Grand Hotel, one in the park as well\n It's the sturdy kind that doesn't mind the snow\n It's beginning to look a lot like Christmas\n Soon the bells will start\n And the thing that'll make 'em ring is the carol that you sing\n Right within your heart\n It's beginning to look a lot like Christmas\n Toys in every store\n But the prettiest sight to see is the holly that will be\n On your own front door\n Sure, it's Christmas once more", 
        avgRating: 4.5, 
        description: 'A Christmas Classic by Michael Bublé', 
        image: 'https://res.cloudinary.com/ddxtopm0l/image/upload/v1639688260/jollyJingles/Michael-Buble_touba4.jpg', 
        createdAt: new Date(), 
        updatedAt: new Date()
       },

      { 
        name: "All I Want for Christmas Is You", 
        artist: "Mariah Carey", 
        lyrics: "I don't want a lot for Christmas\n There is just one thing I need\n I don't care about the presents underneath the Christmas tree\n I just want you for my own\n More than you could ever know\n Make my wish come true\n All I want for Christmas is you\n Yeah\n I don't want a lot for Christmas\n There is just one thing I need (and I)\n Don't care about the presents underneath the Christmas tree\n I don't need to hang my stocking there upon the fireplace\n Santa Claus won't make me happy with a toy on Christmas Day\n I just want you for my own\n More than you could ever know\n Make my wish come true\n All I want for Christmas is you\n You, baby\n Oh, I won't ask for much this Christmas\n I won't even wish for snow (and I)\n I'm just gonna keep on waiting underneath the mistletoe\n I won't make a list and send it to the North Pole for Saint Nick\n I won't even stay awake to hear those magic reindeer click\n 'Cause I just want you here tonight\n Holding on to me so tight\n What more can I do?\n Oh, baby, all I want for Christmas is you\n You, baby\n Oh-oh, all the lights are shining so brightly everywhere (so brightly, baby)\n And the sound of children's laughter fills the air (oh, oh, yeah)\n And everyone is singing (oh, yeah)\n I hear those sleigh bells ringing\n Santa, won't you bring me the one I really need? (Yeah, oh)\n Won't you please bring my baby to me?\n Oh, I don't want a lot for Christmas\n This is all I'm asking for\n I just wanna see my baby standing right outside my door\n Oh, I just want you for my own\n More than you could ever know\n Make my wish come true\n Oh, baby, all I want for Christmas is you\n You, baby\n All I want for Christmas is you, baby\n All I want for Christmas is you, baby\n All I want for Christmas is you, baby\n All I want for Christmas (all I really want) is you, baby\n All I want (I want) for Christmas (all I really want) is you, baby", 
        avgRating: 5.0, 
        description: 'A Christmas Classic by Mariah Carey', 
        image: 'https://res.cloudinary.com/ddxtopm0l/image/upload/v1639688260/jollyJingles/Mariah-Carey_sm73tw.png', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },

      { 
        name: "Oy Chanukah, Oy Chanukah!", 
        artist: "Klezmer Conservatory Band", 
        lyrics: "Oy Chanuka, Oy Chanuka a yomtov a shener,\n A lustiker; a freylicher; nito noch azoyner.\n Alle nacht in dredlech,\n Shpiln mir, zudik hese latkes, est on a shir.\n Geshvinder, tsindt kinder,\n Dee deninke lichtelech ohn.\n \n Zingt \"Al Hanisim\",\n Loibt Gott far di nisim,\n Un kumt giher tantzn in kohn.\n \n Zingt \"Al Hanisim\",\n Loibt Gott for di nisim.\n Un kumt giher tantzn in kohn.", 
        avgRating: 4.5, 
        description: 'A Hannukah Classic by Klezmer Conservatory Band', 
        image: 'https://res.cloudinary.com/ddxtopm0l/image/upload/v1639688259/jollyJingles/Klezmer-Conservatory_sfrn8q.jpg', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },

      { 
        name: "The Chanukah Song", 
        artist: "Adam Sandler", 
        lyrics: "Okay\n This is a song that uh\n There's a lot of Christmas songs out there and uh\n not too many Hanukkah songs\n So uh\n I wrote a song for all those nice little Jewish kids\n who don't get to hear any Hanukkah songs\n Here we go\n Put on your yarmulke\n Here comes Hanukkah\n So much funukah\n To celebrate Hanukkah\n Hanukkah is the festival of lights\n  Instead of one day of presents, we have eight crazy nights\n  When you feel like the only kid in town without a Christmas tree\n  Here's a list of people who are Jewish just like you and me\n  David Lee Roth lights the menorah\n  So do James Caan, Kirk Douglas, and the late Dinah Shore-ah\n  Guess who eats together at the Carnegie Deli\n  Bowser from Sha Na Na and Arthur Fonzerelli\n  Paul Newman's half Jewish, Goldie Hawn's half too\n  Put them together, what a fine lookin' Jew\n  You don't need \"Deck The Halls\" or \"Jingle Bell Rock\"\n  'Cause you can spin a dreidel with Captain Kirk and Mr. Spock- both Jewish\n  Put on your yarmulke\n  It's time for Hanukkah\n  The owner of the Seattle Supersonicahs\n  Celebrates Hanukkah\n  O.J. Simpson, not a Jew\n  But guess who is? Hall of famer Rod Carew- he converted\n  We got Ann Landers and her sister Dear Abby\n  Harrison Ford's a quarter Jewish- not too shabby\n  Some people think that Ebenezer Scrooge is\n  Well he's not, but guess who is\n  All three Stooges\n  So many Jews are in showbiz\n  Tom Cruise isn't, but I heard his agent is\n  Tell your friend Veronica\n  It's time to celebrate Hanukkah\n  I hope I get a harmonicah\n  Oh this lovely, lovely Hanukkah\n  So drink your gin and tonicah\n  And smoke your marijuanikah\n  If you really, really wannakah\n  Have a happy, happy, happy, happy Hanukkah\n  Happy Hanukkah\n", 
        avgRating: 5.0, 
        description: 'A fun Hannukah song by Adam Sandler', 
        image: 'https://res.cloudinary.com/ddxtopm0l/image/upload/v1639688258/jollyJingles/Adam-Sandler_obnwk5.jpg', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },

      { 
        name: "Only In America", 
        artist: "Brooks & Dunn", 
        lyrics: "Sun coming' up over New York City  School bus driver in a traffic jam\n  Staring out at the faces in a rear view mirror\n  Lookin' at the promise of the Promised Land\n  One kid dreams of fame and fortune\n  One kid helps pay the rent\n  One could end up going to prison\n  One just might be president\n  Only in America\n  Dreamin' in red white and blue\n  Only in America\n  Where we dream as big as we want to\n  We all get a chance\n  Everybody gets to dance\n  Only in America\n  Sun goin' down on an LA freeway\n  Newly weds in the back of a limosine\n  A welder's son and a banker's daughter\n  All they want is every thing\n  She came out here to be an actress\n  He was a singer in a band\n  They might just go back to Oklahoma\n  And talk about the stars they could have been\n  Only in America\n  Dreamin' in red white and blue\n  Only in America\n  Where we dream as big as we want to\n  We all get a chance\n  Everybody gets to dance\n  Only in America\n  Only in America\n   Dreamin' in red white and blue\n  Only in America\n  Where we dream as big as we want to\n  We all get a chance\n  Everybody gets to dance\n  Only in America\n  Yeah Only in America\n  Only in America\n  Where we dream in red white and blue\n  Yeah we dream as big as we want to\n  Only in America", 
        avgRating: 4.5, 
        description: 'A fun song to celebrate the 4th of July by Brooks & Dunn', 
        image: 'https://res.cloudinary.com/ddxtopm0l/image/upload/v1639688259/jollyJingles/Brooks___Dunn_-_Only_in_America_dnxakw.jpg', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },

      { 
        name: "Betelehemu", 
        artist: "African Children's Choir", 
        lyrics: "Betelehemu\nAwa yio ri Baba gbojule\nAwa yio ri Baba fehinti\nNibo labi Jesu\nNibo labe bi i\nBetelehemu, ilu ara\nNibe labi Baba o daju\nIyin, iyin, iyin nifun o\nAdupe fun o, adupe fun o, adupe fun ojo oni\nBaba oloreo\nIyin, iyin, iyin fun o Baba anu\nBaba toda wasi\nBetelehemu", 
        avgRating: 5.0, 
        description: 'This Yoruba Christmas song was written by the Nigerian drummer Babatunde Olatunji. Today the uplifting hymn is performed by choirs across the world during the Christmas season, and is often accompanied by drumming and choreography.', 
        image: 'https://res.cloudinary.com/ddxtopm0l/image/upload/v1639688258/jollyJingles/African-Children-Choir_oz4xnj.png', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },

      { 
        name: "TALJ, TALJ", 
        artist: "Fairuz", 
        lyrics: "Min zamān 'anā waṣaghīrī\nKān fī ṣabī yejī min al-'a7rāsh\n'al3ab 'anā wiyāh\nKān ismu Shādī\n\n'anā wShādī ghanaynā sawa\nLa3abnā 3alā t-talj\nRakaḍnā bil-hawā\nKtabnā 3al-'a7jār 'aṣaṣ ṣghār\nWlawa7nā l-hawā\n\nWyawm min al'yām wla3it ed-dinī\nNās ḍad nās 3al'ū bihad-dinī\nwṣār el-'itāl ya'rrib 3lā t-tlāl\nwed-dinī dinī\n\nWa3l'it 3aṭrāfi l-wādī\nShādī rakaḍ yatfarraj\nKhift wṣarit endahlu\nWa'innak rāyi7 yā Shādī\nEndahilu mā yasma3nī\nWayb3ad yb3ad bil-wādī\nWmin yawmit-hā mā 3addat shiftu\nḌā3 Shādī\n\nWt-talj ijah wrā7 et-talj\n3ashrīn marra ijah wrā7 t-talj\nW'anā ṣirt 'akbar wShādī ba3du ṣghayar\n3amyil3ab 3at-talj.", 
        avgRating: 4.0, 
        description: "Lebanon isn't exactly known for its snowy winters, but that didn't stop snow from becoming the subject one of the country's most beloved holiday tunes. Popularized by the iconic Lebanese singer Fairuz, the title translates to 'Snow, Snow.'", 
        image: 'https://res.cloudinary.com/ddxtopm0l/image/upload/v1639688259/jollyJingles/Fairuz_tsstts.jpg', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },

      { 
        name: "IMPODOBESTE MAMA BRADUL", 
        artist: "Colinde", 
        lyrics: "Impodobeste mama bradul si nu te intrista\nAsta e seara de Craciun, este seara ta\nImpodobeste bradul tata ca ne asteapta-n prag\nColindatori la noi acasa, hai sa-i primim cu drag.\n\nE masa incarcata de nuci, mere si colacei\nFii vesela mama, la usa-s clopotei\nSi cerul cu stele azi canta 'E vremea colindelor'\nHai tata, nu plange, e seara tuturor...\n\nImpodobeste mama bradul si nu te intrista\nAsta e seara de Craciun, este seara ta\nImpodobeste bradul tata ca ne asteapta-n prag\nColindatori la noi acasa, hai sa-i primim cu drag.\n\nTu, mama, ma iarta de toate cate ti-am gresit\nHai, strange-ma in brate si spune-mi 'bun venit'\nE noaptea cand Domnul va sta cu noi la masa iara\nHai tat, a nu plange, e seara tuturor...\n\nImpodobeste mama bradul si nu te intrista\nAsta e seara de Craciun, este seara ta\nImpodobeste bradul tata ca ne asteapta-n prag\nColindatori la noi acasa, hai sa-i primim cu drag.", 
        avgRating: 5.0, 
        description: "This contemporary Christmas song from the Romanian pop star Fuego means 'Mother Adorns the Tree.' And if you can't understand what Fuego is singing about, his music video unfortunately doesn't add much clarity.", 
        image: 'https://res.cloudinary.com/ddxtopm0l/image/upload/v1639688261/jollyJingles/Colinde_zy4vil.png', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },

      { 
        name: "Colcannon", 
        artist: "Mary Black", 
        lyrics: "Did you ever eat Colcannon, made from lovely pickled cream?\nWith the greens and scallions mingled like a picture in a dream.\nDid you ever make a hole on top to hold the melting flake\nOf the creamy, flavoured butter that your mother used to make?\n\nOh you did, so you did, so did he and so did I.\nAnd the more I think about it, sure, the nearer I'm to cry.\nOh, weren't them the happy days when troubles we had not,\nAnd our mothers made Colcannon in the little skillet pot.\n\nWell did you ever take potato cake in a basket to the school,\nTucked underneath your oxter (1) with your book, your slate and rule?\nAnd when teacher wasn't looking, sure, a great big bite you'd take,\nOf the creamy flavoured butter and sweet potato cake.\n\nWell did you ever go a-courting as the evening sun went down,\nAnd the moon began a-peeping from behind the Hill o' Down?\nAs you wandered down the boreen (2) where the clúrachán (3) was seen,\nAnd you whispered loving phrases to your little fair Colleen.", 
        avgRating: 5.0, 
        description: "Colcannon is a common Irish dish that's traditionally made with kale or cabbage, mashed potatoes, scallions, butter, milk, Irish bacon, salt and pepper. It's long been a tradition to eat Colcannon on Halloween. For this holiday, symbolic items are hidden in the Colcannon: a coin, a thimble, a button and a plain gold ring. Whoever gets the coin will be rich. The person who gets the thimble or button will remain unmarried, and the one who gets the golden ring will get married within the year.", 
        image: 'https://res.cloudinary.com/ddxtopm0l/image/upload/v1639688259/jollyJingles/Mary-Black_xojbvz.jpg', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },

      { 
        name: "Magha Puja Song", 
        artist: "Anil Sakya", 
        lyrics: 'none available', 
        avgRating: 5.0, 
        description: "Māgha Pūjā (also written as Makha Bucha Day) is the second most important Buddhist festival,[1] celebrated on the full moon day of the third lunar month[6] in Cambodia, Laos, Thailand, Sri Lanka and on the full moon day of Tabaung in Myanmar. It celebrates a gathering that was held between the Buddha and 1,250 of his first disciples, which, according to tradition, preceded the custom of periodic recitation of discipline by monks.", 
        image: 'https://res.cloudinary.com/ddxtopm0l/image/upload/v1639688260/jollyJingles/Magja-Puja_doqhda.jpg', 
        createdAt: new Date(), 
        updatedAt: new Date() },
      {
        name: "Firework",
        artist: "Katy Perry",
        lyrics: 'Do you ever feel like a plastic bag \n Drifting through the wind, wanting to start again? \n Do you ever feel, feel so paper-thin \n Like a house of cards, one blow from caving in? \n Do you ever feel already buried deep? \n Six feet under screams, but no one seems to hear a thing \n Do you know that there\'s still a chance for you? \n \'Cause there\'s a spark in you\n You just gotta ignite the light\n And let it shine\n Just own the night\n Like the Fourth of July\n \'Cause baby, you\'re a firework\n Come on show \'em what you\'re worth\n Make \'em go, "Aah, aah, aah"\n As you shoot across the sky\n Baby, you\'re a firework\n Come on, let your colors burst\n Make \'em go, "Aah, aah, aah"\n You\'re gonna leave them all in awe, awe, awe\n You don\'t have to feel like a waste of space\n You\'re original, cannot be replaced\n If you only knew what the future holds\n After a hurricane comes a rainbow\n Maybe a reason why all the doors are closed\n So you could open one that leads you to the perfect road\n Like a lightning bolt, your heart will glow\n And when it\'s time, you\'ll know\n You just gotta ignite the light\n And let it shine\n Just own the night\n Like the Fourth of July\n \'Cause baby, you\'re a firework\n Come on, show \'em what you\'re worth\n Make \'em go, "Aah, aah, aah"\n As you shoot across the sky\n Baby, you\'re a firework \n Come on, let your colors burst\n Make \'em go, "Aah, aah, aah"\n You\'re gonna leave them all in awe, awe, awe\n Boom, boom, boom\n Even brighter than the moon, moon, moon\n It\'s always been inside of you, you, you\n And now it\'s time to let it through\n \'Cause baby, you\'re a firework\n Come on, show \'em what you\'re worth\n Make \'em go, "Aah, aah, aah"\n As you shoot across the sky\n Baby, you\'re a firework\n Come on, let your colors burst\n Make \'em go, "Aah, aah, aah"\n You\'re gonna leave them all in awe, awe, awe\n Boom, boom, boom\n Even brighter than the moon, moon, moon\n Boom, boom, boom\n Even brighter than the moon, moon, moon',
        avgRating: 4.8,
        description: '"Firework" is a song by American singer Katy Perry from her third studio album, Teenage Dream.',
        image: 'https://res.cloudinary.com/ddxtopm0l/image/upload/v1639688260/jollyJingles/Katy-Perry_bm3ie7.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "Happy",
        artist: "Pharrel Williams",
        lyrics: 'It might seem crazy what I\'m \'bout to say Sunshine she\'s here, you can take a break I\'m a hot air balloon that could go to space With the air, like I don\'t care, baby, by the way (Because I\'m happy) \n Clap along if you feel like a room without a roof \n (Because I\'m happy) \n Clap along if you feel like happiness is the truth \n(Because I\'m happy) \n Clap along if you know what happiness is to you \n (Because I\'m happy) \n Clap along if you feel like that\'s what you wanna do\n Here come bad news, talking this and that (Yeah!)\n Well, give me all you got, don\'t hold it back (Yeah!)\n Well, I should probably warn ya, I\'ll be just fine (Yeah!)\n No offense to you, don\'t waste your time, here\'s why\n (Because I\'m happy)\n Clap along if you feel like a room without a roof\n (Because I\'m happy)\n Clap along if you feel like happiness is the truth\n (Because I\'m happy)\n Clap along if you know what happiness is to you\n (Because I\'m happy)\n Clap along if you feel like that\'s what you wanna do\n Bring me down\n Can\'t nothing bring me down\n My level\'s too high to bring me down \n Can\'t nothing bring me down, I said\n Bring me down\n Can\'t nothing bring me down\n My level\'s too high to bring me down\n Can\'t nothing bring me down, I said\n (Because I\'m happy)\n Clap along if you feel like a room without a roof\n (Because I\'m happy)\n Clap along if you feel like happiness is the truth\n (Because I\'m happy) \n Clap along if you know what happiness is to you\n  (Because I\'m happy) \n Clap along if you feel like that\'s what you wanna do\n (Because I\'m happy)\n Clap along if you feel like a room without a roof\n (Because I\'m happy)\n Clap along if you feel like happiness is the truth\n (Because I\'m happy)\n Clap along if you know what happiness is to you\n (Because I\'m happy)\n Clap along if you feel like that\'s what you wanna do\n Bring me down\n Can\'t nothing bring me down\n My level\'s too high to bring me down\n Can\'t nothing bring me down, I said...\n (Because I\'m happy)\n Clap along if you feel like a room without a roof\n (Because I\'m happy)\n Clap along if you feel like happiness is the truth\n (Because I\'m happy)\n Clap along if you know what happiness is to you\n (Because I\'m happy)\n Clap along if you feel like that\'s what you wanna do\n (Because I\'m happy)\n Clap along if you feel like a room without a roof\n (Because I\'m happy)\n Clap along if you feel like happiness is the truth',
        avgRating: 4.0,
        description: 'Pharrell made the world "Happy" in 2014 with this feel-good anthem. The song soared to #1 in 35 countries—it was the best selling song of 2014.',
        image: 'https://res.cloudinary.com/ddxtopm0l/image/upload/v1639688258/jollyJingles/Pharrel-Williams_xzdgpl.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "Get Lucky",
        artist: "Daft Punk",
        lyrics: 'Like the legend of the phoenix, huh \n All ends with beginnings \n What keeps the planet spinning, uh-huh \n The force from the beginning \n Look \n We\'ve come too far \n To give up who we are \n So let\'s raise the bar \n And our cups to the stars \n She\'s up all night \'til the sun \n I\'m up all night to get some \n She\'s up all night for good fun \n I\'m up all night to get lucky \n We\'re up all night \'til the sun \n We\'re up all night to get some \n We\'re up all night for good fun \n We\'re up all night to get lucky \n We\'re up all night to get lucky \n We\'re up all night to get lucky \n We\'re up all night to get lucky \n We\'re up all night to get lucky \n The present has no ribbon \n Your gift keeps on giving \n What is this I\'m feeling? \n If you wanna leave, I\'m with it, uh-huh \n We\'ve come too far \n To give up who we are \n So let\'s raise the bar \n And our cups to the stars \n [Chorus: Pharrell Williams] \n She\'s up all night \'til the sun \n I\'m up all night to get some \n She\'s up all night for good fun \n I\'m up all night to get lucky \n We\'re up all night \'til the sun \n We\'re up all night to get some \n We\'re up all night for good fun \n We\'re up all night to get lucky \n We\'re up all night to get lucky \n We\'re up all night to get lucky \n We\'re up all night to get lucky \n We\'re up all night to get lucky \n She\'s up all night \'til the sun \n I\'m up all night to get some \n She\'s up all night for good fun \n I\'m up all night to get lucky \n We\'re up all night \'til the sun \n We\'re up all night to get some \n We\'re up all night for good fun \n We\'re up all night to get lucky \n We\'re up all night to get lucky \n We\'re up all night to get lucky \n We\'re up all night to get lucky \n We\'re up all night to get lucky \n [Chorus: Pharrell Williams] \n She\'s up all night \'til the sun \n I\'m up all night to get some \n She\'s up all night for good fun \n I\'m up all night to get lucky \n We\'re up all night \'til the sun \n We\'re up all night to get some \n We\'re up all night for good fun \n We\'re up all night to get lucky \n We\'re up all night to get lucky \n We\'re up all night to get lucky \n We\'re up all night to get lucky \n We\'re up all night to get lucky \n [Bridge: Daft Punk] \n We\'re up all night to get \n We\'re up all night to get \n We\'re up all night to get \n We\'re up all night to get \n We\'re up all night to get \n We\'re up all night to get',
        avgRating: 4.3,
        description: '"Get Lucky" is a song by French electronic music duo Daft Punk, featuring American singer Pharrell Williams and American guitarist Nile Rodgers. It was co-written by all of them. Daft Punk released the song as the lead single from their fourth and final studio album, Random Access Memories, on 19 April 2013.',
        image: 'https://res.cloudinary.com/ddxtopm0l/image/upload/v1639688259/jollyJingles/Daft-Punk_kjhv0x.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "Stayin' Alive",
        artist: "Bee Gees",
        lyrics: "Well, you can tell by the way I use my walk \n I'm a woman's man, no time to talk \n Music loud and women warm \n I've been kicked around since I was born \n And now it's all right, it's okay \n And you may look the other way \n We can try to understand \n The New York Times' effect on man \n Whether you're a brother or whether you're a mother \n You're stayin' alive, stayin' alive \n Feel the city breakin' and everybody shakin' \n And we're stayin' alive, stayin' alive \n Ah, ha, ha, ha, stayin' alive, stayin' alive \n Ah, ha, ha, ha, stayin' alive \n Oh, when you walk \n Well now, I get low and I get high \n And if I can't get either, I really try \n Got the wings of heaven on my shoes \n I'm a dancing man, and I just can't lose \n You know it's alright, it's okay \n I'll live to see another day \n We can try to understand \n The New York Times' effect on man \n Whether you're a brother or whether you're a mother \n You're stayin' alive, stayin' alive \n Feel the city breakin' and everybody shakin' \n And we're stayin' alive, stayin' alive \n Ah, ha, ha, ha, stayin' alive, stayin' alive \n Ah, ha, ha, ha, stayin' alive \n Life's goin' nowhere, somebody help me \n Somebody help me, yeah \n Life goin' nowhere, somebody help me, yeah \n I'm stayin' alive \n Whether you're a brother or whether you're a mother \n You're stayin' alive, stayin' alive \n Feel the city breakin' and everybody shakin' \n And we're stayin' alive, stayin' alive \n Ah, ha, ha, ha, stayin' alive, stayin' alive \n Ah, ha, ha, ha, stayin' alive",
        avgRating: 5.0,
        description: '"Stayin\' Alive" is a 1977 disco single written by the Bee Gees which peaked at #1 on the Billboard Hot 100 and remained there for four weeks.',
        image: 'https://res.cloudinary.com/ddxtopm0l/image/upload/v1639688259/jollyJingles/Bee-Gees_geynte.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "Baby Shark",
        artist: "Pinkfong",
        lyrics: 'Baby shark, doo doo doo doo doo \n Baby shark, doo doo doo doo doo doo \n Baby shark, doo doo doo doo doo doo \nBaby shark! \n Mommy shark, doo doo doo doo doo doo \n Mommy shark, doo doo doo doo doo doo \n Mommy shark, doo doo doo doo doo doo \n Mommy shark! \n Daddy shark, doo doo doo doo doo doo \n Daddy shark, doo doo doo doo doo doo \n Daddy shark, doo doo doo doo doo doo \n Daddy shark! \n Grandma shark, doo doo doo doo doo doo \n Grandma shark, doo doo doo doo doo doo \n Grandma shark, doo doo doo doo doo doo \n Grandma shark! \n Grandpa shark, doo doo doo doo doo doo \n Grandpa shark, doo doo doo doo doo doo \n Grandpa shark, doo doo doo doo doo doo \n Grandpa shark! \n Let\'s go hunt, doo doo doo doo doo doo \n Let\'s go hunt, doo doo doo doo doo doo \n Let\'s go hunt, doo doo doo doo doo doo \n Let\'s go hunt! \n Run away, doo doo doo doo doo doo \n Run away, doo doo doo doo doo doo \n Run away, doo doo doo doo doo doo \n Run away! \n Safe at last, doo doo doo doo doo doo \n Safe at last, doo doo doo doo doo doo \n Safe at last, doo doo doo doo doo doo \n Safe at last! \n It\'s the end, doo doo doo doo doo doo \n It\'s the end, doo doo doo doo doo doo \n It\'s the end, doo doo doo doo doo doo \n It\'s the end!',
        avgRating: 4.0,
        description: '"Baby Shark" is a nursery dance song about a family of sharks. The song seems to be originated from a German song called "Kleiner Hai" by Alemuel.',
        image: 'https://res.cloudinary.com/ddxtopm0l/image/upload/v1639688258/jollyJingles/Pinkfong_k6fttb.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      { 
        name: "Show Me Love", 
        artist: "Robyn", 
        lyrics: "Yeah, yeah, yeah, yeah, yeah \n Always been told that I've got too much pride \n Too independent to have you by my side \n But my heart said all of you will see \n Just won't live for someone until he lives for me \n Never thought I would find love so sweeet \n Never thought I would meet someone like you  \n Well now I've found you and I'll tell you no lie \n This love I've got for you  \n Could take me 'round the world \n Now show me love \n Show me love, show me life \n Baby show me what it's all about \n You're the one that I ever needed \n Show me love and what it's all about, alright \n Don't waste this love I wanna give it to you \n Tell me what you got, show me what you can do  \n Show me love, show me everything \n I know you've got potential \n So baby let me in and show me love \n Show me love, show me life (alright) \n Baby show me what it's all about \n You're the only one that I ever needed (show me love) \n Show me love and what it's all about, alright \n Show me love, show me life \n Baby show me what it's all about \n You're the one that I ever needed  \n Show me love and what it's all about, alright \n Show me love baby \n Show me everything you've got and show me life \n Show me love baby \n Show me everything and what it's all about \n You're the one, the only one I ever needed \n Show me love and what it's all about, alright \n I'll love you \n I'll miss you \n I'll make sure \n Everything will be alright \n I'll give you my heart \n If you just give me love \n Every day and every night \n Show me love, show me life (alright) \n Baby show me what it's all about \n You're the one that I ever needed \n Show me love and what it's all about, alright \n Show me love, show me life (alright) \n Baby show me what it's all about \n You're the one that I ever needed \n Show me love and what it's all about, alright",
        avgRating: 4.8, 
        description: "This soulful hit from Swedish superstar Robyn showed that she has what it takes…to make us fall in love with her and with the idea of Love. Groove out to this 90's bubblegum hit, and ask everyone for some love.", 
        image: "https://res.cloudinary.com/ddxtopm0l/image/upload/v1639688258/jollyJingles/Robyn_l4fidc.jpg", 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },

      { 
        name: "We Found Love", 
        artist: "Rihanna feat. Calvin Harris", 
        lyrics: "Yellow diamonds in the light \n Now we’re standing side by side \n As your shadow crosses mine \n What it takes to come alive \n It's the way I'm feeling I just can't deny \n But I've gotta let it go \n We found love in a hopeless place \n We found love in a hopeless place \n We found love in a hopeless place \n We found love in a hopeless place \n Shine a light through an open door \n Love and life I will divide \n Turn away 'cause I need you more \n Feel the heartbeat in my mind \n It's the way I'm feeling I just can't deny \n But I've gotta let it go \n We found love in a hopeless place \n We found love in a hopeless place \n We found love in a hopeless place \n We found love in a hopeless place \n Yellow diamonds in the light \n Now we're standing side by side \n As your shadow crosses mine (mine, mine, mine) \n We found love in a hopeless place \n We found love in a hopless place \n We found love in a hopeless place \n We found love in a hopeless place", 
        avgRating: 4.8, description: "Finding love in a hopeless place is a common  for most Valentine’s Day enthusiasts. This song depicts a relationship that does not have a happy ending, but the song itself was a certifiable hit for the months leading up to and the months after Valentine’s Day", 
        image: "https://res.cloudinary.com/ddxtopm0l/image/upload/v1639688259/jollyJingles/Rhianna_vspj4m.png", 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },

      { 
        name: "The Boys Are Back In Town", 
        artist: "Thin Lizzy", 
        lyrics: "Guess who just got back today? \n Them wild-eyed boys that'd been away \n Haven't changed, had much to say \n But man, I still think them cats are crazy \n They were askin' if you were around \n How you was, where you could be found \n Told 'emyou were livin' downtown \n Drivin' all the old men crazy \n The boys are back in town \n (The boys are back in town) \n I said the boys are back in town \n (The boys are back in town) \n The boys are back in town \n (The boys are back in town) \n The boys are back in town \n (The boys are back in town) \n You know that chick that used to dance a lot \n Every night she'd be on the floor, shakin' what she's got \n Man when I tell you she was cool, she was red hot \n I mean, she was steamin' \n And that time over at Johnny's place \n Well, this chick got up and she slapped Johnny's face \n Man, we just fell about the place \n If that chick don't wanna know, forget her \n The boys are back in town \n (The boys are back in town) \n I said, the boys are back in town \n (The boys are backin town) \n The boys are back in town \n (The boys are back in town) \n The boys are back in town \n (The boys are back in town) \n Spread the word around \n Guess who's back in town \n Just spread the word around \n Friday night they'll be dressed to kill \n Down at Dino's Bar'n'Grill \n The drink will flow and blood will spill \n And if the boys wanna fight, you better let 'em \n That jukebox in the corner blastin' out my favorite song \n The nights are getting longer, it won't be long \n Won't be long 'til summer comes \n Now that the boys are here again \n The boys are back in town \n (The boys are back in town) \n The boys are back in town \n (The boys are back in town) \n The boys are back in town \n (The boys are back in town) \n (Spread the word around) \n The boys are back in town \n (The boys are back in town) \n (The boys are back, the boys are back) \n The boys are back in town again \n Been hangin' down at Dino's \n The boys are back in town again", 
        avgRating: 4.5, 
        description: "One of the most popular songs from the Irish hard rock band Thin Lizzy, this song may not be your typical St. Patrick’s Day hit - but it will surely get you seeing green…", 
        image: "https://res.cloudinary.com/ddxtopm0l/image/upload/v1639688259/jollyJingles/Thin-Lizzy_o10rga.jpg", 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },

      { 
        name: "Takin’ Care of Business", 
        artist: "Bachman Turner Overdrive", 
        lyrics: "You get up every morning from your alarm clock's warning \n Take the 8:15 into the city \n There's a whistle up above and people pushin', people shovin' \n And the girls who try to look pretty \n And if your train's on time, you can get to work by nine \n And start your slaving job to get your pay \n If you ever get annoyed, look at me I'm self-employed \n I love to work at nothing all day  \n And I'll be taking care of business (every day) \n Taking care of business (every way) \n  I've been taking care of business (it's all mine) \n Taking care of business and working overtime, work out \n  If it were easy as fishin' you could be a musician \n If you could make sounds loud or mellow \n Get a second-hand guitar, chances are you'll go far \n If you get in with the right bunch of fellows \n People see you having fun just a-lying in the sun \n Tell them that you like it this way \n It's the work that we avoid, and we're all self-employed \n We love to work at nothing all day \n And we be taking care of business (every day) \n Taking care of business (every way) \n We be been taking care of business (it's all mine) \n Taking care of business and working overtime \n Mercy \n Whoo \n All right \n Take good care of my business \n When I'm away, every day \n Whoo \n They get up every morning from their alarm clock's warning \n Take the 8:15 into the city \n There's a whistle up above and people pushin', people shovin' \n And the girls who try to look pretty \n And if your train's on time, you can get to work by nine \n And start your slaving job to get your pay \n If you ever get annoyed, look at me I'm self-employee \n I love to work at nothing all day \n And I be taking care of business (every day) \n Taking care of business (every way) \n I've been taking care of business (it's all mine) \n Taking care of business and working overtime, take care \n Takin' care of business, whoo \n Takin' care of business \n Takin' care of business \n Takin' care of business \n Takin' care of business (every day) \n Takin' care of business (every way) \n Takin' care of business (it's all mine) \n Takin' care of business and working overtime, whoo \n Takin' care of business \n Takin' care of business \n We be takin' care of business \n We be takin' care of business \n Takin' care of business \n Takin' care of business \n Takin' care of business", 
        avgRating: 3.2, 
        description: "As the ‘provincial rock anthem of Manitoba’ this song will inspire you to get up, and then take care of business.", 
        image: "https://res.cloudinary.com/ddxtopm0l/image/upload/v1639688258/jollyJingles/Bachman-Turner_bityij.jpg", 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },

      { 
        name: "Party in the USA",
        artist: "Miley Cyrus", 
        lyrics: "I hopped off a plane at LAX \n With a dream and my cardigan \n Welcome to the land of fame excess (woah) \n Am I gonna fit in? \n Jumped in the cab, here I am for the first time \n Look to my right, and I see the Hollywood sign \n This is all so crazy \n Everybody seems so famous \n My tummy's turnin' and I'm feelin' kinda homesick \n Too much pressure and I'm nervous \n That's when the taxi man turned on the radio \n And a Jay-Z song was on \n And a Jay-Z song was \n And a Jay-Z song was on \n So I put my hands up \n They're playin' my song, the butterflies fly away \n I'm noddin' my head like, yeah \n Movin' my hips like, yeah \n I got my hands up, they're playing' my song \n They know I'm gonna be okay \n Yeah, it's a party in the U.S.A. \n Yeah, it's a party in the U.S.A. \n Get to the club in my taxi cab \n Everybody's looking at me now \n Like, 'Who's that chick, that's rockin' kicks? \n She's gotta be from out of town' \n So hard with my girls not around me \n It's definitely not a Nashville party \n 'Cause all I see are stilettos \n I guess I never got the memo \n My tummy's turn' and I'm fellin' kinda homescik \n Too much pressure and I'm nervous \n That's when the DJ dropped my favorite tun \n And a Britney song was on \n And a Britney song was on \n And a Britney song was on \n So I put my hands up \n They're playing' my song, the butterflies fly away \n I'm noddin' my head like, yeah \n Movin' my hips like, yeah \n I got my hands up, they're playin' my song \n They know I'm gonna be okay \n Yeah, it's a party in the U.S.A. \n Yeah, it's party in the U.S.A.", 
        avgRating: 3.7, 
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
