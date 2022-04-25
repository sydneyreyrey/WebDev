

let game = {result:""};

function addNew(doc_obj, game_obj) {
    let letter = doc_obj.innerHTML;
    if (game.result.includes(letter)) {
        alert('GameOver');
    } else {
        game.result = game.result + letter;
        console.log(game.result)
    }
}


let tcells = document.getElementsByTagName("td")



document.querySelectorAll('td').forEach(element => {
    element.addEventListener('click', evt => {
        addNew(evt.target, game);
    });
});


/*
for (i = 0; i < tcells.length; i++) {
    tcells[i].onclick = addNew(tcells[i], game);
}
*/
