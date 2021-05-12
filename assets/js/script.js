for (i = 0; i < localStorage.length; i++) {
    //permet d'avoir la clé                   
    let keyName = localStorage.key(i)
    //permet d'avoir la valeur
    let keyValue = localStorage.getItem(localStorage.key(i))

    presList.innerHTML += `<li id="${keyName}">${keyName} -- ${keyValue}<button data-keyname="${keyName}" data-button="delete">delete</button></li>`

}

addBtn.onclick = function () {
    let presTitle = document.getElementById('presTitle').value;
    let presAddress = document.getElementById('presAddress').value;
    console.log(presTitle, presAddress);

    //je stocke dans mon local storage
    localStorage.setItem(presTitle, presAddress);


    //parcourir
    localStorage.getItem(presTitle, presAddress);
    presList.innerHTML += `<li id="${presTitle}">${presTitle} -- ${presAddress}<button data-keyname="${presTitle}" data-button="delete">delete</button></li>`

}



//supprimer
let keyDelete = localStorage.removeItem(localStorage.key(i))

let deleteBtn = document.querySelectorAll(['button[data-button="delete"]']);

deleteBtn.forEach(element =>
    element.addEventListener('click', function () {
        presList.removeChild(document.querySelector('#'+this.dataset.keyname))
    })
)