Array.from(document.querySelectorAll('li')).forEach(li => {
    if (li.innerText === document.title) {
        li.style = "font-weight: bold; margin-left: 4vw;";
    }
})
