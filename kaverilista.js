
let nykyinen_kaveri_lista = []

function tyhjennä_kaveri_lista() {
    nykyinen_kaveri_lista = []
    päivitä_lista()
}

function päivitä_lista() {
    let ul = document.getElementById("kaveri_lista");
    ul.innerHTML = "";
    for (let nimi of nykyinen_kaveri_lista) {
        let li = document.createElement("li");
        li.textContent = nimi;
        ul.appendChild(li);
    }
}

function lisää_kaveri_v2() {
    let nimi = document.getElementById("nimi_input").value;
    if (nimi !== "") {
        nykyinen_kaveri_lista.push(nimi);
        päivitä_lista() 
        document.getElementById("nimi_input").value = "";
    }
}

function lisää_kaveri_v1() {
    nykyinen_kaveri_lista = []
    let array = [];
    
    for (let i = 0; i < 10; i++) {
        let vastaus = prompt("Anna kaverin nimi:");
        if (vastaus === null) {
            array.push("KAVERLISTA LIIAN LYHYT, KOKEILE UUDESTAAN")
            break
        }
        array.push(vastaus);
    }
    if (array.length < 10) {
        nykyinen_kaveri_lista.push("KAVERILISTA LIIAN LYHYT, KOKEILE UUDESTAAN")
        päivitä_lista()
    }
    else {
        nykyinen_kaveri_lista = array
        päivitä_lista()
    }
}

function poista_kaveri() {
    let nimi = document.getElementById("nimi_input").value;
    let index = nykyinen_kaveri_lista.indexOf(nimi);
    if (index !== -1) {
        nykyinen_kaveri_lista.splice(index, 1);
        päivitä_lista();
        document.getElementById("nimi_input").value = "";
    }
}

function järjestä_kaverit() {
    nykyinen_kaveri_lista.sort();
    päivitä_lista();
}