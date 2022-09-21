import ProgressBar from 'progress';

const bar = new ProgressBar(':bar', {total:50})
const timer = setInterval(() => {
    bar.tick()
    if (bar.complete){
        clearInterval(timer)
    }
}, 100)