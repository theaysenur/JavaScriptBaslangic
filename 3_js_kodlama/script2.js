//String Uygulamaları 

let url = "https://www.sadikturan.com";
let kursAdi= "Komple Web Geliştirme Kursu";

var kacKarakter = url.length;
console.log(kacKarakter);

var kacKelime = kursAdi.split(" ");
var sayi= kacKelime.length;

console.log(sayi);

var urlBulma= url.split(":");
var hp="https";
var ayniMi= (hp== urlBulma[0]);
console.log(ayniMi);

var kucuk = kursAdi.toLowerCase();
var yeni= kucuk.replaceAll(" ", "-");



var mesaj = `${url}/${yeni}`;
console.log(mesaj);