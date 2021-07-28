// console.log(`Hello`);
showNotes();
// Adding Note

let btnAdd = document.getElementById(`btnAdd`);
btnAdd.addEventListener(`click`, function(e){
    let btnText = document.getElementById(`btnText`);
    let notes = localStorage.getItem(`notes`);
    if(notes == null)
    {
        notesObj = []; 
    }
    else
    {
        notesObj = JSON.parse(notes);
    }

    notesObj.push(btnText.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    btnText.value = ""; 
    console.log(notesObj)

    showNotes();
});

// Function To Show Notes That Is Saved In LocalStorage
function showNotes() {
    let notes = localStorage.getItem("notes");

    if(notes == null)
    {
        notesObj = []; 
    }
    else
    {
        notesObj = JSON.parse(notes);
    }

    let html = "";

    notesObj.forEach(function (element, index) {
        html += `<div class="notesCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button class="btn btn-primary" id="${index}" onclick="deleteNote(this.id)">Delete Note</button>
        </div>
    </div>`
    });

    let notesEle = document.getElementById(`notes`);
    if(notesObj.length != 0)
    {
        notesEle.innerHTML = html;
    }
    else
    {
        notesEle.innerHTML = `Nothing To Show...!! Use Add a Note To Add Notes`; 
    }
}

// Function To Delete The Note:

function deleteNote(index)
{
console.log(`Deleting The Note At Index`, index);

let notes = localStorage.getItem("notes");

    if(notes == null)
    {
        notesObj = []; 
    }
    else
    {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

// Searching The Element

let searchTxt = document.getElementById(`searchTxt`);
searchTxt.addEventListener(`input`, function(){

    let inputVal = searchTxt.value.toLowerCase();
    // console.log(`Input Event Fired`, searchTxt.value);

    let noteCard = document.getElementsByClassName(`notesCard`);
    Array.from(noteCard).forEach(function(element){

        let cardTxt = element.getElementsByTagName(`p`)[0].innerText;
        if(cardTxt.includes(inputVal))
        {
            element.style.display = `block`;
        }
        else
        {
            element.style.display = `none`;
        }
        // console.log(cardTxt);

    })

})