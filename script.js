let klasa = "slika1"
let slika = document.getElementById("s");


let tekstPolje = document.getElementById("tekst");
let tekst = [
    "Tekst1",
    "Tekst2",
    "Tekst3",
    "Tekst4",
    "Tekst5",
    "Tekst6",
    "Tekst7",
    "Tekst8",
    "Tekst9",
    "Tekst10"
]

tekstPolje.innerHTML = tekst[0]





document.getElementById("s1").addEventListener("click", ()=>{
    slika.classList.remove(klasa);
    slika.classList.add("slika1");

    tekstPolje.innerHTML = tekst[0];
    klasa = "slika1";
})

document.getElementById("s2").addEventListener("click", ()=>{
    slika.classList.remove(klasa);
    slika.classList.add("slika2");

    tekstPolje.innerHTML = tekst[1];
    klasa = "slika2";
})

document.getElementById("s3").addEventListener("click", ()=>{
    slika.classList.remove(klasa);
    slika.classList.add("slika3");

    tekstPolje.innerHTML = tekst[2];
    klasa = "slika3";
})

document.getElementById("s4").addEventListener("click", ()=>{
    slika.classList.remove(klasa);
    slika.classList.add("slika4");

    tekstPolje.innerHTML = tekst[3];
    klasa = "slika4";
})

document.getElementById("s5").addEventListener("click", ()=>{
    slika.classList.remove(klasa);
    slika.classList.add("slika5");

    tekstPolje.innerHTML = tekst[4];
    klasa = "slika5s";
})

document.getElementById("s6").addEventListener("click", ()=>{
    slika.classList.remove(klasa);
    slika.classList.add("slika6");

    tekstPolje.innerHTML = tekst[5];
    klasa = "slika6";
})

document.getElementById("s7").addEventListener("click", ()=>{
    slika.classList.remove(klasa);
    slika.classList.add("slika7");

    tekstPolje.innerHTML = tekst[6];
    klasa = "slika7";
})

document.getElementById("s8").addEventListener("click", ()=>{
    slika.classList.remove(klasa);
    slika.classList.add("slika8");

    tekstPolje.innerHTML = tekst[7];
    klasa = "slika8";
})

document.getElementById("s9").addEventListener("click", ()=>{
    slika.classList.remove(klasa);
    slika.classList.add("slika9");

    tekstPolje.innerHTML = tekst[8];
    klasa = "slika9";
})

document.getElementById("s10").addEventListener("click", ()=>{
    slika.classList.remove(klasa);
    slika.classList.add("slika10");

    tekstPolje.innerHTML = tekst[9];
    klasa = "slika10";
})




document.getElementById("uputstvo").addEventListener("click", ()=>{
    window.location.href = "./stranice/Uputstvo/uputstvo.html"
})

document.getElementById("autor").addEventListener("click", ()=>{
    window.location.href = "./stranice/OMeni/omeni.html"
})