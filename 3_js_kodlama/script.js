//console.log("Merhaba Javascript");
//Değişkenler
//javascripte değişkenler var ile tanımlanır.

var a =5000;
var b= 5000;
var c=6000; 
var d=7000;
var kdv =1.2; //var yerine let te kullanılabilir.

a=6000;

console.log(a*kdv);
console.log(b*kdv);
console.log(c*kdv);
console.log(d*kdv);

//Değişken tanımlama kuralları 
//değişken isimlerde sayı ile başlanmaz 
// komut isimleri değişken ismi olarak kullanılmaz 


// Değişken Türleri
var urunAdi= 'Iphone 16';//string
var urunFiyat = '7000'; //string
var urunfyat2 = 7000; //number

console.log(typeof urunAdi); //urunAdini veri tipini öğrenmek için 

var sayi1='10';
var sayi2= '20';

console.log(sayi1+ " " + sayi2); //burada hata almayız direkt string toplaması yapılır


var sinavNotu =40;
var basarilimi = (sinavNotu >= 50);
console.log(basarilimi);//ilginç 

var yas ;

console.log(yas);
console.log(typeof yas); //undefined


//Uygulama 

var ogrenci1_isim = 'Ada Bilgi';
var ogrenci1_dt= 2012;
var ogrenci1_matematik1=70;
var ogrenci1_matematik2=70;
var ogrenci1_matematik3=80;

var ogrenci2_isim = 'Yiğit Bilgi';
var ogrenci2_dt= 2010;
var ogrenci2_matematik1=40;
var ogrenci2_matematik2=40;
var ogrenci2_matematik3=50;


var orenci1_yas= (2026 -ogrenci1_dt);
console.log( "Ada'nın yaşı" + orenci1_yas);
var orenci2_yas= (2026 -ogrenci2_dt);
console.log( "Yiğit'in yaşı" + orenci2_yas);

var orenci1_ort= ((ogrenci1_matematik1+ogrenci1_matematik2+ ogrenci1_matematik3)/3);
console.log(orenci1_ort);

var orenci2_ort= ((ogrenci2_matematik1+ogrenci2_matematik2+ ogrenci2_matematik3)/3);
console.log(orenci2_ort);

var ogrenci1_basari= (orenci1_ort>= 50);
console.log(ogrenci1_basari);

var ogrenci2_basari= (orenci2_ort>= 50);
console.log(ogrenci2_basari);


//STRİNGS

var ad ='Ayşenur';
console.log(ad[0]);

//Template String , backtick

var mesaj = `Benim adım ${ad}`;
console.log(mesaj);

//String Metotları 

var kursAdi = "Komple Uygulamalı Web Geliştirme Eğitimi"

var sonuc;

sonuc=kursAdi.toUpperCase();
sonuc=kursAdi.length;

sonuc=kursAdi.slice(0,8);
 sonuc=kursAdi.slice(10);//soldan 10.indextan başlayarak geri kalanını alır
 sonuc=kursAdi.slice(-10);//sağdan başlayarak 10.index ve sonrasını alır 

sonuc=kursAdi.substring(0,6);
sonuc=kursAdi.substring(10);

sonuc=kursAdi.replace("Eğitimi", "Kursu");

sonuc=kursAdi.trim();//girilen değeri başındaki boşlukları siler mesela kullanıcı epostasının başında boşluk yazarak girdi kod bu boşluğu silerek alır.

sonuc=kursAdi.indexOf("Komple");
sonuc=kursAdi.split(" ");
sonuc=kursAdi.split(" ")[-1];


console.log(sonuc);

