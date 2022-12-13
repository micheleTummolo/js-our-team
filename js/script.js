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

let content = document.getElementById('container')

for (let i = 0; i < team.length; i++) {
    let componente_team = team[i]
    for (let key in team[i]) {
        if (key == "foto"){
            content.innerHTML += `<img src="img/${componente_team[key]}"></img>`
        }
        else {
            content.innerHTML += `<h1>${(key + " = " + componente_team[key])}</h1>`
        }
    }
    content.innerHTML += `<hr>`
}

{/* <img src="" alt=""></img> */}