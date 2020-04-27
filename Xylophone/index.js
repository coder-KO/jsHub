window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound')
    const bars = document.querySelectorAll('.bars div')

    // For playing sounds
    bars.forEach((bar, index) =>{
        bar.addEventListener('click', function(){
            sounds[index].play();
        });
    });

});
