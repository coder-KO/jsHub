window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound')
    const bars = document.querySelectorAll('.bars div')
    const theAnimation = document.querySelector('.animation')
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#6860d3",
        "#60b2d3",
        "#d38e60",
        "#60d36f"
    ];

    // Function for playing sounds
    bars.forEach((bar, index) =>{
        bar.addEventListener('click', function(){
            sounds[index].currentTime = 0;  // To be able to play multiple times on multiple clips, else it waits for clip to end
            sounds[index].play();

            // Calling animation function
            animateIt(index);
        });
    });

    // Function for animation
    const animateIt = index => {
        const bubble = document.createElement("div");
        theAnimation.appendChild(bubble);
        bubble.style.backgroundColor = colors[index]
        bubble.style.animation = 'jump 1s ease'; 
        bubble.addEventListener('animationend', function(){
            theAnimation.removeChild(this);
        });
    };
});
