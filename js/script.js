/* MILESTONE 0: Creare l’array di oggetti con le informazioni fornite. */

let team = [
    {
        nome : "Wayne Barnett",
        ruolo : "Founder & CEO",
        foto : "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome : "Angela Caroll",
        ruolo : "Chief Editor",
        foto : "angela-caroll-chief-editor.jpg"
    },
    {
        nome : "Walter Gordon",
        ruolo : "Office Manager",
        foto : "walter-gordon-office-manager.jpg"
    },
    {
        nome : "Angela Lopez",
        ruolo : "Social Media Manager",
        foto : "angela-lopez-social-media-manager.jpg"
    },
    {
        nome : "Scott Estrada",
        ruolo : "Developer",
        foto : "scott-estrada-developer.jpg"
    },
    {
        nome : "Barbara Ramos",
        ruolo : "Graphic Designer",
        foto : "barbara-ramos-graphic-designer.jpg"
    },
]

/* MILESTONE 1: Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto. */

for (let i = 0; i < team.length; i++) {
    let componente_team = team[i]
    for (let key in team[i]) {
        console.log(key + " = " + componente_team[key])
    }
}

/* MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe. */

/* BONUS 1: Trasformare la stringa foto in una immagine effettiva. */

/* BONUS 2: Organizzare i singoli membri in card/schede. */

let content = document.getElementById('card_container')

cardGenerator(team.length)

for (let i = 0; i < team.length; i++) {
    let componente_team = team[i]

    for (let key in componente_team) {
        
        if (key == "nome") {
            document.getElementById('card-body' + i).innerHTML = `<h4 class="card-title">${componente_team[key]}</h4>`
        }
        else if (key == "ruolo") {
            document.getElementById('card-body' + i).innerHTML += `<h5>${componente_team[key]}</h5>`
        }
        else if (key == "foto"){
            document.getElementById('card' + i).innerHTML +=`<img src="./img/${componente_team[key]}" class="card-img-top">`
        }
    }
}

function cardGenerator(card_number) {
    for (let i = 0; i < card_number; i++) {
        content.innerHTML += `
        <div class="col mb-4">
            <div id="card${i}" class="card">
                <div id="card-body${i}" class="card-body text-center">
                </div>
            </div>
        </div>`
    }
}