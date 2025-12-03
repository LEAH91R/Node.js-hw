const promises = require('fs/promises');
const { resolve } = require('path');

function readpronise(){
    return new promises((resolve,reject)=>{

 setTimeout(() => {
    const number = Math.random();
    if(number%2===0){
        resolve(number);

    }else{
        reject(number)
    }
}, 2000);}
);
}

   function tryrp()
   {
    return readpronise().catch(()=>tryrp());
   }

   function tryRandomPromise(attempt = 1) {
    return randomPromise()
        .then(result => {
            console.log('Success:', result); // Print the even number
            return result; // Return the even number
        })
        .catch(() => {
            if (attempt < 2) {
                return tryRandomPromise(attempt + 1); // Retry if there's an error
            } else {
                console.log('Failure after two attempts'); // Log failure message after two tries
                throw new Error('Failure after two attempts');
            }
        });
}

//
function simulateFileRead() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('This is the content of the simulated file.'); // Simulated file content
        }, 2000); 
    });
}

simulateFileRead()
    .then(content => {
        console.log('File content:', content);
    });

    function convertToUpperCase(content) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(content.toUpperCase()); // Convert the content to uppercase
        }, 2000);
    });
}

function simulateWriteToFile(text) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Text written to file: ${text}`); // Simulated file writing action
            resolve('File written successfully'); // Resolve the promise
        }, 2000); 
    });
}

function simulateFileRead() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fileContent = 'This is the content of the simulated file.';
            // Simulate chance of failure
            if (Math.random() > 0.2) { // 80% success rate
                resolve(fileContent);
            } else {
                reject('Error reading file.');
            }
        }, 2000); // 2 seconds delay
    });
}

function convertToUpperCase(content) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(content.toUpperCase());
        }, 2000); // Optional delay
    });
}

function simulateWriteToFile(text) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Text written to file: ${text}`);
            resolve('File written successfully');
        }, 2000); // 2 seconds delay
    });
}

// Chaining the functions together with error handling
simulateFileRead()
    .then(content => convertToUpperCase(content))
    .then(upperCaseContent => simulateWriteToFile(upperCaseContent))
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.error(error);
    });
