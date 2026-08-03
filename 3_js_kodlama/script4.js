//DİZİ METOTLARI

let ogrenciler = ["Çınar", "Yiğit", "Ada"];
let sonuc;
sonuc =ogrenciler.length;
sonuc=ogrenciler.toString();
sonuc=ogrenciler.join(' ');

sonuc=ogrenciler.pop();//sondakini alıp sonuc attı
sonuc=ogrenciler.shift();
sonuc=ogrenciler.push("Sena");
console.log(sonuc);
sonuc=ogrenciler.unshift("Sena");
console.log(sonuc);
console.log(ogrenciler);
//eleman arama 
sonuc=ogrenciler.indexOf('Yiğit');

sonuc=ogrenciler.includes("Yiğit");

//silme ekleme
sonuc=ogrenciler.splice(0,1, "Ayşenur");
console.log(sonuc);
console.log(ogrenciler);
