var quote = ["Destiny. Fate. Dreams. These unstoppable ideas are held deep in the heart of man. As long as there people who seek freedom in this life, These things shall not vanish from the Earth.",
             "\"Loneliness\" is no longer part of my vocabulary.",
             "Wake up princess, I'm tired of your useless ideals. It's gotten pathetic. What good are your happy ideals if you can't do anything to make them a reality? They're nothing but dreams, and your dreams don't stand a chance.",
             "It is a sad truth that greater the authority a person possesses, the more he tends to fear change.",
             "Don't ever think there's any perfect society made by humans!! If you think that way you'll overlook the enemy!! Don't be fooled by appearances!!",
             "You can't see the whole picture until you look at it from the outside.",
             "Forgetting is like a wound. The wound may heal but it has already left a scar.",
             "You can't bring back what you've lost, think about what you have now!",
             "You need to accept the fact that you're not the best and have all the will to strive to be better than anyone you face.",
             "Don't start a fight if you can't end it.",
             "The world has too many heroes. It needs a monster.",
             "Someday, I promise you, they will all watch as I change the world.",
             "The thing called \"justice\" changes its shape... Depending on where you stand.",
             "Compared to the \"righteous\" greed of the rulers, the criminals of the world seem much more honorable. When scum rules the world, only more scum is born.",
             "Either in belief or doubt, if I lean to one of these sides, my reaction time will be dulled if my heart thinks the opposite of what I choose.",
             "The world...what a glorious place! Seek freedom, and it will lie stretched out before your eyes. If the endless dream guides your restless spirit, seize it! Raise your flag, and stand tall!",
             "It's over when you give up.",
             "You want to keep everyone from dying? That's naive. It's war. People die.",
             "Without strength, you won't be able to save anyone.",
             "Pirates are evil? The Marines are righteous? These terms have always changed throughout the course of history! Kids who have never seen peace and kids who have never seen war have different values! Those who stand at the top determine what's wrong and what's right! This very place is neutral ground! Justice will prevail, you say? But of course it will! Whoever wins this war becomes justice!",
             "By experiencing both, victory and defeat, running away and shedding tears, a man will become a man.",
             "I don't wanna live a thousand years. If I just live through today, that'll be enough.",
             "When do you think people die? When they are shot through the heart by the bullet of a pistol? No. When they are ravaged by an incurable disease? No. When they drink a soup made from a poisonous mushroom!? No! It’s when... they are forgotten.",
             "A wound that'd make an ordinary man unconscious... I won't lose to it. A wound that would kill an ordinary person... I won't lose to it! To face one who is extraordinary, Hawk Eyes... I can't allow myself to be ordinary!",
             "When I decided to follow my dream, I had already discarded my life.",
             "Weakness is a sin.",
             "People don't fear god, fear itslef is god.",
             "There is no such thing as impossible in this world.",
             "Being alone hurts worse than pain.",
             "Your honor isn't worth your life.",
             "Victory or defeat can be determined in a single moments misstep.",
             "We shouldn't worry about being able to achieve our dreams, as long as we have the desire to do it!",
             "When a guy gets flustered, because someone calls him weak, it's proof that he recognizes he IS weak. Let the outcome determine the weak and the strong.",
             "Dying is not repaying a debt! That is not what he saved you for! Only weak men would die after someone spared their lives!",
             "No matter what happens, don't be sorry you were born. Even though nobody praises us, don't forget to smile in any situation. As long as you're alive there will be better things later...and there will be many.",
             "You can spill drinks on me, even spit on me. I'll just laugh about it. But If you dare to hurt my friends... I WON'T FORGIVE YOU!",
             "Inherited will. Destiny of the age. The dreams of the people. These are things that will not be stopped. As long as people continue to pursue the meaning of freedom. These things will never cease to be.",
             "Existing Isn't A Crime!",
             "I do things my own way! So don't give me any lip about it!",
             "With my own hands, JUSTICE will be served."]

var author = ["Gol D. Roger",
             "Brook",
             "Crocodile",
             "Jimbei",
             "Somker",
             "Trafalgar Law",
             "Monkey D. Luffy",
             "Jimbei",
             "Roronoa Zoro",
             "Sanji",
             "Dracule Mihawk",
             "Monkey D. Dragon",
             "Kuzan",
             "Eustass Kid",
             "Roronoa Zoro",
             "Gol D. Roger",
             "Brook",
             "Monkey D. Luffy",
             "Kizaru",
             "Donquixote Doflamingo",
             "Shanks",
             "Portgas D. Ace",
             "Dr hiluluk",
             "Roronoa Zoro",
             "Roronoa Zoro",
             "Crocodile",
             "Enel",
             "Marshall D. Teach",
             "Monkey D. Luffy",
             "Shanks",
             "Kizaru",
             "Coby",
             "Don Krieg",
             "Monkey D. Luffy",
             "Bellemere",
             "Shanks",
             "Gol D. Roger",
             "Franky",
             "Roronoa Zoro",
             "Smoker"]

var ran = 0;

function random() {
    ran = Math.floor(Math.random() * quote.length);
    return ran;
};
    random();
    document.getElementById("quote").innerHTML = "\"" + quote[0] + "\"";
    document.getElementById("author").innerHTML = "~ " + author[0];
  
    var newquote = quote[0];
    var newauthor = author[0];
function quotegenerate(){
    random();
    newquote = quote[ran];
    newauthor = author[ran]
}
function nextquote() {
    //code
    
    quotegenerate();
    document.getElementById("quote").innerHTML = "\"" + newquote+ "\"";
    document.getElementById("author").innerHTML = "~ " + newauthor;
}
document.getElementById("tweetbutton").onclick = function() {
    window.open("https://twitter.com/intent/tweet?text=" + newquote);   
}

