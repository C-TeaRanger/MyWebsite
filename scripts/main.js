let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/background.jpg') {
        myImage.setAttribute('src', 'images/launch.png');
    } else {
        myImage.setAttribute('src', 'images/background.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h3');

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '你来了啊，' + storedName + '!';
}

myButton.onclick = function() {
    setUserName();
}


function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = '你来了啊，' + myName + '!';
    }
}