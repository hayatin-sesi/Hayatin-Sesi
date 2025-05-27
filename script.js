// script.js içine ekle

function gunlukVeriSec() {
    const gun = new Date().getDate(); // Ayın günü (1–31)
    
    // Dizi uzunluklarına göre sırayla içerik döndür
    const ayet = gunlukIcerik.ayetler[gun % gunlukIcerik.ayetler.length];
    const hadis = gunlukIcerik.hadisler[gun % gunlukIcerik.hadisler.length];
    const dua = gunlukIcerik.dualar[gun % gunlukIcerik.dualar.length];

    document.getElementById("ayet").textContent = "Ayet: " + ayet;
    document.getElementById("hadis").textContent = "Hadis: " + hadis;
    document.getElementById("dua").textContent = "Dua: " + dua;
}

document.addEventListener("DOMContentLoaded", gunlukVeriSec);
