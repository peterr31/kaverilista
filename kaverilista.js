
let nykyinen_kaveri_lista = []

function päivitä_lista() {
    let ul = document.getElementById("kaveri_lista");
    ul.innerHTML = "";
    for (let nimi of nykyinen_kaveri_lista) {
        let li = document.createElement("li");
        li.textContent = nimi;
        ul.appendChild(li);
    }
}

function resetoi_placeholder() {
    let input = document.getElementById("nimi_input");
    input.placeholder = "Syötä nimi:"
    input.style.color = "rgb(238, 238, 238)";
}

function aseta_placeholder(text, color = "rgb(0, 128, 0)") {
    let input = document.getElementById("nimi_input");
    input.placeholder = text;
    input.style.color = color;
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

function lisää_kaveri_v2() {
    let input = document.getElementById("nimi_input");
    let nimi = input.value;

    if (nimi === "") {
        aseta_placeholder("NIMI EI VOI OLLA TYHJÄ", "rgb(255, 0, 0)");
    } else {
        nykyinen_kaveri_lista.push(nimi);
        päivitä_lista();
        input.value = "";
        aseta_placeholder("Lisätty onnistuneesti!");
    }
}

function poista_kaveri() {
    let input = document.getElementById("nimi_input");
    let nimi = input.value;

    if (nimi === "") {
        aseta_placeholder("NIMI EI VOI OLLA TYHJÄ","rgb(255, 0, 0)")
    } else {
        let index = nykyinen_kaveri_lista.indexOf(nimi);
        if (index !== -1) {
            nykyinen_kaveri_lista.splice(index, 1);
            päivitä_lista();
            input.value = "";
            aseta_placeholder("Poistettu onnistuneesti!")
        } else {
            alert("Nimeä ei löytynyt. Varmista, että nimi on kirjoitettu oikein");
        }
    }
}

function järjestä_kaverit() {
    nykyinen_kaveri_lista.sort();
    päivitä_lista();
    resetoi_placeholder();
}

function tyhjennä_kaveri_lista() {
    nykyinen_kaveri_lista = [];
    päivitä_lista();
    resetoi_placeholder();
}
