//UYGULAMA
var meyve= ["Kiraz" , "Karpuz", "Kavun", "Erik"];

var elemanSayisi=meyve.length;
console.log(elemanSayisi);

console.log(meyve[0]+ " "+ meyve[3]);

var elemanMi= meyve.indexOf("Kavun");
console.log(elemanMi);
var cilek= meyve.push("Çilek");
console.log(meyve);
var yeniDizi= meyve.pop();
yeniDizi=meyve.pop();
console.log(meyve);
console.log(yeniDizi);

//NESNELER 
//key- value

let kullanici1={

"ad" : "Sadık",
"soyad" : "Turan",
"yas" : 40,
"adres": {

    "sehir": "kocaeli",
    "ilce": "izmit"
},
"hobileler " : ["sinema","spor"]

};
let kullanici2={

"ad" : "Ayşenur",
"soyad" : "Karaaslan",
"yas" : 40,
"adres": {

    "sehir": "kocaeli",
    "ilce": "izmit"
},
"hobileler " : ["sinema","spor"]

};


kullanicilar=[kullanici1, kullanici2];
let sonuc;

sonuc=kullanici1;
console.log(sonuc);
sonuc=kullanici1["ad"];
console.log(sonuc);
 sonuc=kullanici1["adres"];
 
console.log(sonuc);
sonuc=kullanici1["adres"]["sehir"];
 
console.log(sonuc);

sonuc=kullanici1.adres.ilce;
 
console.log(sonuc);