/* get our elements */
const $player = document.querySelector('.player')
const $video = $player.querySelector('.viewer')
const $progress = $player.querySelector('.progress')
const $progressBar = $player.querySelector('.progress__filled')
const $toggle = $player.querySelector('.toggle')
const $skipButtons = $player.querySelectorAll('[data-skip]')
const $ranges = $player.querySelectorAll('.player__slider')



/* build our functions */

function togglePlay() {
    const method = $video.paused ? 'play' : 'pause';
    $video[method]();

}

function updateButton() {
    const icon = this.paused ? '>' : '||'
    $toggle.textContent = icon;
}

function skip() {
    console.log(this.dataset.skip);
    $video.currentTime += parseFloat(this.dataset.skip)
}

function hadleRangeUpdate() {
    $video[this.name] = this.value;
}

function handleProgress() {
    const percent = ($video.currentTime / $video.duration) * 100;
    $progressBar.style.flexBasis = `${percent}%`
}

function scrub(e) {
    console.log(e);
    const scrubTime = (e.offsetX / $progress.offsetWidth) * $video.duration;
    $video.currentTime = scrubTime;
}
/*hook up the event listeners */

$video.addEventListener('click', togglePlay)
$video.addEventListener('play', updateButton)
$video.addEventListener('pause', updateButton)
$toggle.addEventListener('click', togglePlay)
$skipButtons.forEach(button => button.addEventListener('click', skip));
$ranges.forEach(ranger => ranger.addEventListener('change', hadleRangeUpdate))
$ranges.forEach(ranger => ranger.addEventListener('mousemove', hadleRangeUpdate))
$video.addEventListener('timeupdate', handleProgress)


let mousedown = false;
$progress.addEventListener('click', scrub)
$progress.addEventListener('mousemove', (e) => mousedown && scrub(e))
$progress.addEventListener('mousedown', () => mousedown = true)
$progress.addEventListener('mouseup', () => mousedown = false)



