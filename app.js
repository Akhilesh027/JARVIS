const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(text){
    const text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}
function greating(){
    const day =  new Date();
    const hours = day.getHours();
 
    if(hours>0 && hours<12){
     speak("good morning bro");
    }
    else if(hours>12 && hours<17){
     speak("good afternoon bro");
    }
     else{
     speak("good morning bro");
    }
 }
window.addEventListener('load', ()=>{
    speak("jarvis instalizing...");
    speak("jarvis installed successfully")
    speak("wellcome to javis world")
    greating();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    content.textContent = "lisiting";
    recognition.start();
})
function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello Boss";
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine boss tell me how can i help you";
        speech.text = finalText;
    }
    else if(message.includes("who invented you ") || message.includes("who created you")){
        const finaltext = "i was invented my verry talanted mr.Akhileshreddy he my boss and my god..."
        speech.text = finaltext;
    }
    else if(message.includes('what is your name')) {
        const finalText = "My name is jarvis";
        speech.text = finalText;
    }

    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }
    else if(message.includes('open youtube')) {
        window.open("https://youtube.com", "_blank");
        const finaltext = "opening youtube";
        speech.text = finaltext;
    }
    else if(message.includes('open chat gpt') || message.includes("open chatgpt")) {
        window.open("https://chat.openai.com/", "_blank");
        const finaltext = "opening chatgpt";
        speech.text = finaltext;
    }
    else if(message.includes('open my portfolio')){
        window.open("https://akhilesh027.github.io/Akhileshreddy-protofilo/", "_block");
        const finalText = "opening your protofilo bro";
        speech.text = finalText;
    }
    else if(message.includes("open whatsapp")){
        window.open('https://web.whatsapp.com/', "_blank");
        const finalText = "opening whatsapp bro"
        speech.text = finalText;
    }
    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }
    else if(message.includes('play') || message.includes('play music') || message.includes("in youtube")) {
        window.open(`https://www.youtube.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on youtube regarding " + message;
        speech.text = finalText;
    }
    
    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('what is time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }

    else {
        
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}