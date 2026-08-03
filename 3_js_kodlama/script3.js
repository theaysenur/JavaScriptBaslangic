//Sayılar 

let sonuc;
sonuc=10;
sonuc="10";
console.log(typeof sonuc);

sonuc=Number(sonuc);
sonuc=parseFloat("20.2");


console.log(typeof sonuc);
console.log(sonuc);


let sayi=10.58946;

sonuc =sayi.toPrecision(6);
sonuc=sayi.toFixed(5);


sonuc=Math.round(2.8);
sonuc=Math.ceil(2.1);
sonuc=Math.floor(2.9);
sonuc=Math.sqrt(25);
sonuc = Math.pow(2,3);
sonuc=Math.min(5,6,9,7,1,0,3,4);

sonuc=Math.random();//0 ile 1  arasında rastgele üretir.


sonuc=Math.random()*10 ;//0 ile 10 arasında
sonuc=Math.random()*100 +1 ; 
//console.log(sonuc);

//DİZİLER
let urunler  = [ "Iphone 15", "Iphone 16", "Iphone 17"];
let fiyatlar = [ 50000, 60000, 70000];
let renkler = ["gold", "black", "silver"];

let sonuc1;

sonuc1= `${urunler[0]} - ${fiyatlar[0]}- ${renkler[0]}`;
console.log(sonuc1);


let urun1 = ["Iphone 15", 50000, "gold"];

let sonuc2= `${urun1[0]} ${urun1[1]} ${urun1[2]}`;

console.log(sonuc2);

let urun11 = ["Iphone 15", 50000, ["gold", "silver", "black"]];
let sonuc3= `${urun11[0] }  ${urun11[1]}  ${urun11[2]} `;
let sonuc4= `${urun11[0] }  ${urun11[1]}  ${urun11[2][2]} `;

console.log(sonuc3);

console.log(sonuc4);


