/*Get our elements*/

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/*Build out functions*/

function togglePlay() {

    //if togglePlay is called and the video is paused, then the video will play
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updateButton(){
    //this changes the button from the play icon to the pause icon
    const icon = this.paused ? 'PLAY ICON' : 'PAUSE ICON';
    toggle.textContent = icon;
    console.log('Update the button');
}

function skip() {
    //we need to know how much the video is being skipped... check the 'data-skip' attribute on index.html
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    //jumps exactly to the part of the video that the user clicks on in the progress bar
   const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
   video.currentTime = scrubTime;
}

/*Hook up event listeners*/

/*the video will play when the video field is clicked -- so, hook up the togglePlay() function*/

video.addEventListener('click', togglePlay);
video.addEventListener('play', togglePlay);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', scrub);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));

let mousedown = false;
toggle.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
