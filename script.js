const container = document.querySelector('.container');
const text = document.querySelector('#time');

const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerHTML = 'Breath In';
  container.className = 'container grow';

  setTimeout(() => {
    // hold
    text.innerText = 'Hold';

    setTimeout(() => {
      // change to breath out
      text.innerText = 'Breath Out';
      // shrinkcontainer
      container.className = 'container shrink';
    }, holdTime);
  }, breathTime);
}

// run every 7.5secs
setInterval(breathAnimation, totalTime);
