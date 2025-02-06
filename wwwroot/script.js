window.startTypingEffect = function () {
    const text = "Hi! I am Akunuri Sai Pranav Kumar.";
    
    let index = 0;
    const speed = 50;
    const typingElement = document.getElementById("typing-text");

    function typeWriter() {
        if (index < text.length) {
            typingElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
};
