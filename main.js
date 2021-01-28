let allButtons = document.querySelectorAll(".operator")
    for(let button of buttons) {
        button.addEventListener('click', event => {
            console.log(event.target)
        })
    }
    