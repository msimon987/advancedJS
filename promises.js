function getX() {
    return Math.random() >= 0.5;
}

var wait = new Promise((resolve, reject) => {
    const x = getX;

    if (x) {
        return setTimeout(resolve, 1000);
    }
    return setTimeout(reject, 1000);
})
.then(() => console.log('Yay!'))
.catch(() => console.log('Oh no!'));