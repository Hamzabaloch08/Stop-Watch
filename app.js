let minutes = 0
let seconds = 0
let miliSeconds = 0

let getMin = document.getElementById('min')
let getSec = document.getElementById('sec')
let getMiliSec = document.getElementById('msec')
let stopTheStart;

 function start() {
    stopTheStart = setInterval(function () {
        miliSeconds++
        getMiliSec.innerHTML = miliSeconds
        if (miliSeconds >= 100) {
            seconds++
            getSec.innerHTML = seconds
            miliSeconds = 0
        }
        else if (seconds >= 60) {
            minutes++
            getMin.innerHTML = minutes
            seconds = 0
        }
    
    }, 10)
    document.getElementById('disable').disabled = true
 }

 function stop() {
    document.getElementById('disable').disabled = false
    clearInterval(stopTheStart)
 }

 function reset() {
    minutes = 0
    seconds = 0
    miliSeconds = 0
    getMiliSec.innerHTML = miliSeconds
    getSec.innerHTML = seconds
    getMin.innerHTML = minutes
 }