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
    speak("friday  instalizing...");
    speak("friday  installed successfully")
    speak("wellcome to friday world")
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

    if(message.includes('hey friday') || message.includes('hello friday')) {
        const finalText = "Hello Boss";
        speech.text = finalText;
    }

    else if(message.includes('friday how are you')) {
        const finalText = "I am fine boss tell me how can i help you";
        speech.text = finalText;
    }
    else if(message.includes("friday who invented you") || message.includes("friday who created you")){
        const finaltext = "i was invented my verry talanted mr.Akhileshreddy he my boss and my god..."
        speech.text = finaltext;
    }
    else if(message.includes('whats is your name')) {
        const finalText = "My name is friday ";
        speech.text = finalText;
    }
    else if(message.includes("friday open gmail") || message.includes("open gmail")){
        window.open("https://gmail.com", "_blank");
        const finalText = "cheaking gmails"
        speech.text = finalText;
    }
    else if(message.includes('friday open google') || message.includes("open google")) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }

    else if(message.includes('friday open instagram') || message.includes("open instagram")) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }
    else if(message.includes('friday open youtube') || message.includes("open youtude")) {
        window.open("https://youtube.com", "_blank");
        const finaltext = "opening youtube";
        speech.text = finaltext;
    }
    else if(message.includes('friday open chat gpt') || message.includes("open chatgpt")) {
        window.open("https://chat.openai.com/", "_blank");
        const finaltext = "opening chatgpt";
        speech.text = finaltext;
    }
    else if(message.includes('friday open my website')){
        window.open("https://akhilesh027.github.io/Akhileshreddy-protofilo/", "_block");
        const finalText = "opening your protofilo bro";
        speech.text = finalText;
    }
    else if(message.includes("friday open whatsapp")){
        window.open('https://web.whatsapp.com/', "_blank");
        const finalText = "opening whatsapp bro"
        speech.text = finalText;
    }
    else if(message.includes('friday what is') || message.includes('friday  who is') || message.includes('friday  what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }
    else if(message.includes('friday play') || message.includes("in youtube")) {
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

    
    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}