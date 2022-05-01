




function callback(counter) {
    //console.log(counter < 5);
    return counter < 5;
}


function startTimer(callback, interval) {
        
    let counter = 0;
    
    let count_down = setInterval(()=>{
        counter += 1;
        console.log(counter);
        if (!callback(counter)) {
            clearInterval(count_down);
        };
    }, interval);
    
}

// while something 
// set timeout (counter, interval * counter)
/*
function startTimer(callback, interval) {
    let counter = 1;
    while (callback(counter)) {
        let current = counter + 1;
        setTimeout(() => console.log(current), interval * counter)
        counter ++;
    }
    
}
*/

startTimer(callback, 500);