//UYGULAMA

let siparis1={
"siparis_id": 101,
"sipari_tarihi": "31.12.2025",
"odeme_sekli":"kredi kartı",
"kargo_adresi": "Yahya kaptan mah. Kocaeli İzmit",
"satin_alinanlar":[


{

"urun_id" : 5 ,
"urun_basligi": "Iphone 16 Pro",
"urun_url": "http://abc.com/iphone-16-pro",
"urun_fiyat": 75000,
},
{
"urun_id" : 6 ,
"urun_basligi": "Iphone 16 Pro Max",
"urun_url": "http://abc.com/iphone-16-pro-max",
"urun_fiyat": 85000
},
],


"musteri":{

"musteri_id": 12

}




};

let siparis2={
"siparis_id": 102,
"sipari_tarihi": "30.11.2025",
"odeme_sekli":"kredi kartı",
"kargo_adresi": "Yahya kaptan mah. Kocaeli İzmir",
"satin_alinanlar":{


"urun_id" : 6 ,
"urun_basligi": "Iphone 16 Pro",
"urun_url": "http://abc.com/iphone-13-pro-max",
"urun_fiyat": 85000,


},

"musteri":{

"musteri_id": 12

}




};


var siparis_1toplam=( siparis1.satin_alinanlar[0].urun_fiyat + siparis1.satin_alinanlar[1].urun_fiyat)*1.2;
console.log(siparis_1toplam);
var siparis_2toplam=siparis2.satin_alinanlar.urun_fiyat*1.2;
console.log(siparis_2toplam);