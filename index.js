// Your code here
const dodger = document.querySelector('#dodger')

document.addEventListener('keydown', (e) => {
    console.log('hello')
    if (e.key === 'ArrowLeft') {
        moveDodgerLeft();
    } else if (e.key === 'ArrowRight') {
        moveDodgerRight();
    }
})


function moveDodgerRight(e){
 const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left + 1}px`;
  }
}

function moveDodgerLeft(e){
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }

}