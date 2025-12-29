// based on this tutorial: https://www.sitepoint.com/simple-javascript-quiz/

const questions = [
    {
        question: "Other players tend to follow my lead.",
        attribute:"Charisma",
        negative:false,
    },
    {
        question: "I can lead a discussion with confidence.",
        attribute:"Charisma",
        negative:false,
    },
    {
        question: "My comments are passed over.",
        attribute:"Charisma",
        negative:true,
    },
    {
        question: "When I want a player voted out, they get voted out.",
        attribute:"Charisma",
        negative:false,
    },
    {
        question: "Players who don't actively suspect me are swayed by my comments.",
        attribute:"Charisma",
        negative:false,
    },
    {
        question: "When there is little information to work with, my comments have the most influence.",
        attribute:"Charisma",
        negative:false,
    },
    {
        question: "I ask other players to come forward and share information with the group.",
        attribute:"Charisma",
        negative:false,
    },
    {
        question: "I have the most control over the discussion.",
        attribute:"Charisma",
        negative:false,
    },
    {
        question: "Other players tend to challenge my comments.",
        attribute:"Charisma",
        negative:true,
    },
    {
        question: "I make accusations early in the game.",
        attribute:"Charisma",
        negative:false,
    },
    {
        question: "I can rely on my instincts to determine who is suspicious.",
        attribute:"Intuition",
        negative:false,
    },
    {
        question: "I can tell what a player's true intentions are.",
        attribute:"Intuition",
        negative:false,
    },
    {
        question: "I can distinguish \"double bluffs\" from other lies.",
        attribute:"Intuition",
        negative:false,
    },
    {
        question: "I can recognize signs of deception in someone's voice.",
        attribute:"Intuition",
        negative:false,
    },
    {
        question: "I can recognize signs of deception in someone's facial expression or body language.",
        attribute:"Intuition",
        negative:false,
    },
    {
        question: "I'm better at playing in groups where I already know everyone's \"tells\".",
        attribute:"Intuition",
        negative:false,
    },
    {
        question: "When presented with conflicting information, I follow my gut instinct.",
        attribute:"Intuition",
        negative:false,
    },
    {
        question: "I can tell when someone is trying to lead me astray, even if their statements make sense.",
        attribute:"Intuition",
        negative:false,
    },
    {
        question: "I notice if a player is speaking more or less than usual.",
        attribute:"Intuition",
        negative:false,
    },
    {
        question: "I notice which players are consistently defensive of each other.",
        attribute:"Intuition",
        negative:false,
    },
    {
        question: "I rely on mechanical information or probability to determine who I suspect.",
        attribute:"Logic",
        negative:false,
    },
    {
        question: "If someone tries to team up with me, I think about what their intentions are.",
        attribute:"Logic",
        negative:false,
    },
    {
        question: "I'm aware of every possibility, even the ones I don't believe are true.",
        attribute:"Logic",
        negative:false,
    },
    {
        question: "I mess up in my bluffs or contradict myself.",
        attribute:"Logic",
        negative:true,
    },
    {
        question: "I search for ways to disconfirm my theories.",
        attribute:"Logic",
        negative:false,
    },
    {
        question: "Even when I'm lying, my statements are within the realm of possibility.",
        attribute:"Logic",
        negative:false,
    },
    {
        question: "When I'm evil, I plan ahead and leave suspicious good players alive to frame.",
        attribute:"Logic",
        negative:false,
    },
    {
        question: "When presented with conflicting information, I follow the most reliable source.",
        attribute:"Logic",
        negative:false,
    },
    {
        question: "I am quick to identify situations where players are confirmed good or evil.",
        attribute:"Logic",
        negative:false,
    },
    {
        question: "My comments are most convincing when a lot of information is available.",
        attribute:"Logic",
        negative:false,
    },
    {
        question: "Other players trust me enough to privately share their information.",
        attribute:"Charm",
        negative:false,
    },
    {
        question: "Even if there is information against me, I won't be voted out.",
        attribute:"Charm",
        negative:false,
    },
    {
        question: "I have many allies that will defend me.",
        attribute:"Charm",
        negative:false,
    },
    {
        question: "I team up and share information with players I trust.",
        attribute:"Charm",
        negative:false,
    },
    {
        question: "I team up with players so they will trust me more.",
        attribute:"Charm",
        negative:false,
    },
    {
        question: "When there is little information to work with, I'm often the target of suspicion.",
        attribute:"Charm",
        negative:true,
    },
    {
        question: "I can defend myself without relying on facts and logic.",
        attribute:"Charm",
        negative:false,
    },
    {
        question: "If other players suspect me, I can regain their trust.",
        attribute:"Charm",
        negative:false,
    },
    {
        question: "I make an effort to help new players feel included.",
        attribute:"Charm",
        negative:false,
    },
    {
        question: "It's most important to me that everyone has a good time.",
        attribute:"Charm",
        negative:false,
    },
    {
        question: "When I lie, my voice sounds different.",
        attribute:"Performance",
        negative:true,
    },
    {
        question: "When I lie, it becomes apparent in my body language or facial expression.",
        attribute:"Performance",
        negative:true,
    },
    {
        question: "I can make people believe anything I tell them.",
        attribute:"Performance",
        negative:false,
    },
    {
        question: "People believe me even when I propose a theory that is unlikely or contradictory.",
        attribute:"Performance",
        negative:false,
    },
    {
        question: "My accusations are theatrical or dramatic.",
        attribute:"Performance",
        negative:false,
    },
    {
        question: "I falter when I'm under suspicion.",
        attribute:"Performance",
        negative:true,
    },
    {
        question: "When players suspect me, I pull out all the stops to convince them otherwise.",
        attribute:"Performance",
        negative:false,
    },
    {
        question: "I can make players do what I want them to by \"double bluffing\".",
        attribute:"Performance",
        negative:false,
    },
    {
        question: "I can turn players against each other.",
        attribute:"Performance",
        negative:false,
    },
     {
        question: "When falsely claiming a role, I act convincingly like someone who was assigned that role.",
        attribute:"Performance",
        negative:false,
    },
     {
        question: "Other players tend to notice when I'm speaking more than usual.",
        attribute:"Stealth",
        negative:true,
    },
    {
        question: "Other players tend to notice when I'm speaking less than usual.",
        attribute:"Stealth",
        negative:true,
    },
    {
        question: "I usually survive close to the end of the game.",
        attribute:"Stealth",
        negative:false,
    },
    {
        question: "When I am a powerful good role, I escape the evil team's notice.",
        attribute:"Stealth",
        negative:false,
    },
    {
        question: "If I don't share my role or information, people find it suspicious.",
        attribute:"Stealth",
        negative:true,
    },
    {
        question: "I am underestimated and it works to my advantage.",
        attribute:"Stealth",
        negative:false,
    },
    {
        question: "I can easily blend in with the crowd.",
        attribute:"Stealth",
        negative:false,
    },
    {
        question: "When I am doubted, people's suspicion quickly fades or switches to someone else.",
        attribute:"Stealth",
        negative:false,
    },
    {
        question: "At the start of the game, I only share my role and information with players I trust completely.",
        attribute:"Stealth",
        negative:false,
    },
    {
        question: "My name is not brought up until late in the game.",
        attribute:"Stealth",
        negative:false,
    },


]

const comparisons = [
    "Like Setsu, you tend to lead the group discussion and focus on sharing information. You are logical and well-rounded, but tend to stand out and draw a lot of negative attention that makes you easily targeted.",
    "Like Gina, you're an intuitive player who can easily spot lies, although you struggle with telling them yourself. You're fairly decent at staying alive and catching contradictions, but you're at your best when you can convince others to vote on the liars you've spotted.",
    "Like SQ, you are a social player, talented at convincing people to trust what you have to say. A skilled liar, you accrue many allies by appearing trustworthy and hiding your tells. You rarely go on the offensive, preferring to stay alive than getting others executed.",
    "Like Raqio, you tend to excel at the deduction side of social deduction. You are highly logical and do best late-game, when more pieces of information exist for you to unravel. Unfortunately, you tend to draw attention easily, as you may struggle at convincing others to trust you.",
    "Like Stella, you are a logical and well-rounded player who is often overlooked. You tend to avoid risky plays, and search for safe strategies instead.",
    "Like Shigemichi, you're easy to read, even when you don't intend to be. It's easy for you to gain the trust of others when you're telling the truth, and you're utterly hopeless in a lying role. You're quick to jump to the defense of others, and can get away with saying nearly anything.",
    "Like Chipie, you are a very social player who remains loyal to their allies. Your first priority is often to begin building up trust with someone so they will defend you, whether or not you plan to betray them in the end. You also have a very intuitive side, and can read the behaviour of others to determine their trustworthiness.",
    "Like Comet, you are a highly intuitive player, able to spot most people when they lie. When you do catch someone, you're quick to act on your gut feelings, without necessarily considering the logical implications of doing so.",
    "Like Jonas, you rarely show your true skills in games, instead favouring a chaotic playstyle. Others don't know how to read your behaviour, and this often works to your favour. When your goal is to win, you're often successful.",
    "Like Kukrushka, you ignore logic and prioritize the social game, making allies who will defend you and using pity to your advantage when doubted. You target others on the basis of instinct and personal opinion alone, getting rid of your enemies before the strongest threats.",
    "Like Otome, you are a logical player who can catch others in contradictions. Your likeability helps keep you alive, and allows you to gather allies with whom you can act on the worlds you've deduced.",
    "Like Sha-Ming, you concentrate on surviving to the end as much as possible. You tend to stay quiet, drawing less attention to yourself and focusing less on the game, hence appearing as less of a threat to your opponents.",
    "Like Remnan, you're a quiet player who usually takes a passive role in the discussion. Highly observant and decently logical, you often come to correct conclusions but struggle to make your voice heard. When in a lying role, you occasionally show a more aggressive playstyle.",
    "Like Yuriko, you are a skilled player that can command the discussion and flow of information alike. Your outspoken nature will draw attention to your actions, but if left unchecked you can readily turn the tides of the game in your favor."
]