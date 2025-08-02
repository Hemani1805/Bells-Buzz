// --- DATA ---
const NEGATIVE_RESPONSES = {
    happy: ["You're just a moment away from losing it all.","Relax. Nobody can be delusional for too long","Congrats you are just one smile closer to disappointment.","More you smile today the more you cry tomorrow."],
    sad: ["It is right for you to feel that way, it is what you deserve.","You being sad doesn't stop the world from forgetting you.","You think people care? Everyone is just pretending to care.","You'll get through this and probably end up back here again."],
    angry: ["Well you know you’re the problem, actually.","You're basically a toddler with good vocabulory.","Just chill and breathe… and continue being wrong.","How brave of you to raise your voice instead of your standards."],
    calm: ["Enjoying the calm? It is always right before the collapse.","What if a creepy psycho is stalking you this very moment.","While you rest, someone else is replacing you.","Damn! You must have a really boring life to be this calm."],
    excited: ["Nobody asked, you are just an unimportant homosapien.","Your joy is irrelevant just like your existence.","Don't get your hopes too high. Gravity is a b*tch.","Soo excited huh? Save some for when reality hits."],
    anxious: ["Funny how the harder you try the further behind you get.","Sleep wont fix this, it will just shorten the hours you have left.","If you feel overwhelmed now, wait until tomorrow hits.","Chill..Some people are meant to be just back ups like you."],
    lonely: ["Just accept the fact that you weren't left behind but just never invited.","It's funny how you are not hard to love, just easy to ignore.","You know right, people always remember you only when they need something from you.","You're not alone by accident. You're alone by default."],
    overthinking: ["You are not just overthinking-you're just seeing how many ways you can mess it up.","If you are this unsure, maybe you were never right to begin with.","Every second you spend thinking...someone else is doing.","You keep going in circles because you know there's no good way out"]
};

const RECIPE_STEPS = {
    step1: ["take 3 tablespoon of wi-fi", "take 4 drops of sadness", "take 1 bottle of cooked air", "take 3 pinches of embarrassment", "take 123 rubber ducks"],
    step2: ["boil until confused", "blend it with emotional damage", "microwave for 72 seconds", "freeze for 3 seconds using your willpower", "marinate in your regrets overnight"],
    step3: ["garnish with crushed dreams", "sprinkle with memes", "garnish with glitter glue", "sprinkle chalk powder", "serve in a shoe box"]
};

// --- LOGIC ---
window.onload = () => {
    // Function to get a random item from an array
    const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

    // --- LOGIC FOR RESPONSE PAGE ---
    const responseText = document.getElementById('response-text');
    if (responseText) {
        const urlParams = new URLSearchParams(window.location.search);
        const mood = urlParams.get('mood');
        
        if (mood && NEGATIVE_RESPONSES[mood]) {
            responseText.textContent = getRandomItem(NEGATIVE_RESPONSES[mood]);
        } else {
            responseText.textContent = "Please select a mood first.";
        }
    }

    // --- LOGIC FOR RECIPE PAGE ---
    const step1Text = document.getElementById('step1-text');
    const step2Text = document.getElementById('step2-text');
    const step3Text = document.getElementById('step3-text');

    if (step1Text && step2Text && step3Text) {
        step1Text.textContent = getRandomItem(RECIPE_STEPS.step1);
        step2Text.textContent = getRandomItem(RECIPE_STEPS.step2);
        step3Text.textContent = getRandomItem(RECIPE_STEPS.step3);
    }
};
