setTimeout(() => {
	console.log('Ready...');
}, 4000); // через 4 секунди
setTimeout(() => {
	console.log('Ready2...');
}, 6000); // через 6 секунди

let clock = setInterval(() => {
	console.clear();
    console.log(new Date().toLocaleTimeString());
    
}, 1000);

setTimeout(() => {
   
	clearInterval(clock);
}, 10000);
