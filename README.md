# JavaScript Başlangıç Notları

Bu repo, JavaScript öğrenme sürecimde yazdığım pratik kodları ve notları içerir. Amaç, öğrendiğim konuları tekrar edebileceğim düzenli bir kaynak oluşturmak.

> 📄 Bu notların kapak sayfalı, kod bloklu, tablo ve "Dikkat" kutularıyla düzenlenmiş **PDF** halini görmek için: [`notlar/notlar.pdf`](notlar/notlar.pdf) (LaTeX kaynağı: [`notlar/notlar.tex`](notlar/notlar.tex))

## Klasör Yapısı

```
3_js_kodlama/
├── index.html     → script6.js'i sayfaya bağlayan basit HTML dosyası
├── script.js       → Değişkenler, veri tipleri, string temelleri
├── script2.js      → String uygulamaları (URL/slug örneği)
├── script3.js       → Sayılar (Number, Math) ve diziler
├── script4.js      → Dizi metotları
├── script5.js      → Dizi uygulaması + nesneler (objects)
└── script6.js      → İç içe nesne/dizi uygulaması (sipariş sistemi)
```

Konsol çıktılarını görmek için `index.html` dosyasını tarayıcıda açıp geliştirici araçları (F12) → Console sekmesine bakman yeterli.

---

## script.js — Değişkenler, Veri Tipleri, String Temelleri

**Değişken tanımlama:** `var` anahtar kelimesiyle değişken tanımlandı (`let` de aynı işi görür, aralarındaki fark ileride kapsam/scope konusunda önemli olacak).

```js
var a = 5000;
a = 6000; // var ile tanımlanan değişkenin değeri sonradan değiştirilebilir
```

**Değişken isimlendirme kuralları:** İsimler rakamla başlayamaz, JS'in ayrılmış komut isimleri (`var`, `function` vb.) değişken adı olarak kullanılamaz.

**Veri tipleri ve `typeof`:**

```js
var urunAdi = 'Iphone 16';   // string
var urunfyat2 = 7000;         // number
console.log(typeof urunAdi);  // "string"
```

**Önemli nokta — string toplama:** İki string `+` ile birleştirildiğinde matematiksel toplama değil, **concatenation (birleştirme)** yapılır:

```js
var sayi1 = '10';
var sayi2 = '20';
console.log(sayi1 + sayi2); // "1020" olur, 30 değil!
```

**`undefined`:** Değer atanmamış bir değişkenin hem değeri hem tipi `undefined` döner.

**Uygulama — öğrenci not ortalaması:** İki öğrencinin doğum yılından yaşını hesaplama (`2026 - doğumYılı`) ve üç sınav notunun ortalamasını alıp 50 barajına göre başarı durumunu (`true`/`false`) belirleme. Bu, karşılaştırma operatörlerinin (`>=`) boolean sonuç ürettiğini gösteren güzel bir örnek.

**String'e index ile erişim:**

```js
var ad = 'Ayşenur';
console.log(ad[0]); // "A"
```

**Template string (backtick):**

```js
var mesaj = `Benim adım ${ad}`;
```

**String metotları (uygulanan örnekler):**

| Metot | Ne yapar |
|---|---|
| `toUpperCase()` | Tüm harfleri büyütür |
| `length` | Karakter sayısını verir |
| `slice(start, end)` | Belirtilen aralığı keser; negatif index sağdan sayar |
| `substring(start, end)` | slice'a benzer, negatif index desteklemez |
| `replace(eski, yeni)` | İlk eşleşmeyi değiştirir |
| `trim()` | Baştaki/sondaki boşlukları siler |
| `indexOf(metin)` | Metnin bulunduğu index'i verir, yoksa -1 |
| `split(ayraç)` | Stringi diziye böler |

> **Dikkat edilecek nokta:** Dosyada `kursAdi.split(" ")[-1]` ile son elemanı almaya çalışılmış. JavaScript'te Python'daki gibi **negatif index desteği yoktur**, bu yüzden `[-1]` çalışmaz ve `undefined` döner. Son elemanı almak için `split(" ").at(-1)` ya da `split(" ")[dizi.length - 1]` kullanılmalı.

---

## script2.js — String Uygulamaları

Gerçek bir senaryo: bir URL ve kurs adından "slug" (URL'de kullanılabilir kısa isim) üretme.

```js
let url = "https://www.sadikturan.com";
let kursAdi = "Komple Web Geliştirme Kursu";

var kacKelime = kursAdi.split(" ");     // kelimelere ayırma
var urlBulma = url.split(":");           // protokolü ayırma ("https")
var kucuk = kursAdi.toLowerCase();       // küçük harfe çevirme
var yeni = kucuk.replaceAll(" ", "-");   // boşlukları tire ile değiştirme

var mesaj = `${url}/${yeni}`;
console.log(mesaj); // https://www.sadikturan.com/komple-web-geliştirme-kursu
```

Bu dosyada öğrenilen ana fikir: string metotları zincirleme kullanılarak (`toLowerCase().replaceAll(...)` gibi mantıkla) gerçek dünyada işe yarayan bir dönüşüm (slug oluşturma) yapılabiliyor.

---

## script3.js — Sayılar ve Diziler

**Tip dönüştürme:**

```js
sonuc = Number(sonuc);       // string → number
sonuc = parseFloat("20.2");   // ondalıklı stringi sayıya çevirir
```

**Ondalık biçimlendirme:**

```js
let sayi = 10.58946;
sayi.toPrecision(6); // toplam 6 basamak gösterir
sayi.toFixed(5);      // virgülden sonra 5 basamak gösterir
```

**Math nesnesi:**

| Fonksiyon | Ne yapar |
|---|---|
| `Math.round(x)` | En yakın tam sayıya yuvarlar |
| `Math.ceil(x)` | Yukarı yuvarlar |
| `Math.floor(x)` | Aşağı yuvarlar |
| `Math.sqrt(x)` | Karekök alır |
| `Math.pow(x, y)` | Üs alma (x^y) |
| `Math.min(...)` | En küçük değeri bulur |
| `Math.random()` | 0 ile 1 arasında rastgele sayı üretir |

> `Math.random() * 10` → 0-10 arası, `Math.random() * 100 + 1` → 1-101 arası sayı üretmek için kullanılan genel kalıp.

**Diziler (Array):**

```js
let urunler  = ["Iphone 15", "Iphone 16", "Iphone 17"];
let fiyatlar = [50000, 60000, 70000];
```

**İç içe diziler (nested array):**

```js
let urun11 = ["Iphone 15", 50000, ["gold", "silver", "black"]];
console.log(urun11[2][2]); // "black" → iç dizinin 3. elemanı
```

---

## script4.js — Dizi Metotları

Bir öğrenci listesi üzerinden dizilerde ekleme/çıkarma/arama işlemleri denenmiş:

| Metot | Ne yapar |
|---|---|
| `length` | Eleman sayısı |
| `toString()` | Diziyi virgülle ayrılmış stringe çevirir |
| `join(' ')` | Diziyi belirtilen ayraçla stringe çevirir |
| `pop()` | Son elemanı **siler ve döndürür** |
| `shift()` | İlk elemanı **siler ve döndürür** |
| `push(x)` | Sona eleman **ekler**, dizinin yeni uzunluğunu döndürür |
| `unshift(x)` | Başa eleman **ekler**, dizinin yeni uzunluğunu döndürür |
| `indexOf(x)` | Elemanın index'ini bulur |
| `includes(x)` | Eleman var mı diye `true/false` döner |
| `splice(başlangıç, silinecekSayı, ...yeniElemanlar)` | Belirtilen konumdan eleman siler/ekler |

> **Dikkat:** `push()` ve `unshift()` eklenen elemanı değil, **dizinin yeni uzunluğunu (length)** döndürür. Kodda `sonuc = ogrenciler.push("Sena")` satırından sonra `console.log(sonuc)` bir sayı (dizinin yeni uzunluğu) basar, "Sena" değil — bu JS'e yeni başlayanların en çok şaşırdığı noktalardan biri.

---

## script5.js — Dizi Uygulaması + Nesneler (Objects)

İlk kısımda meyve dizisi üzerinde `push`/`pop` pratiği yapılmış.

**Nesneler (Object) — key/value yapısı:**

```js
let kullanici1 = {
  "ad": "Sadık",
  "soyad": "Turan",
  "yas": 40,
  "adres": {
    "sehir": "kocaeli",
    "ilce": "izmit"
  },
  "hobileler ": ["sinema", "spor"]
};
```

**Nesne değerlerine erişim — iki yöntem:**

```js
kullanici1["ad"];        // köşeli parantez (bracket) notasyonu
kullanici1.adres.ilce;   // nokta (dot) notasyonu — iç içe nesnelerde de çalışır
```

> **Dikkat:** `"hobileler "` anahtarının sonunda fazladan bir boşluk var (yazım hatası). Bu yüzden `kullanici1.hobileler` çalışmaz, sadece `kullanici1["hobileler "]` (boşlukla birlikte) çalışır. Nesne anahtarlarında boşluk/özel karakter olursa dot notation kullanılamaz, bracket notation zorunlu hale gelir — bu satır bunun canlı bir örneği.

> Ayrıca `kullanicilar = [kullanici1, kullanici2];` satırında değişken `var`/`let` olmadan tanımlanmış. Bu, JS'te "implicit global" (örtük global değişken) oluşturur ve genelde önerilmez — ileride `"use strict"` modunda bu satır hataya bile sebep olabilir.

---

## script6.js — Nesne Uygulaması: Sipariş Sistemi

Gerçekçi bir e-ticaret sipariş verisi üzerinden iç içe (nested) nesne ve dizi kullanımı pekiştirilmiş.

```js
let siparis1 = {
  siparis_id: 101,
  satin_alinanlar: [           // dizi içinde nesneler (birden fazla ürün)
    { urun_id: 5, urun_basligi: "Iphone 16 Pro", urun_fiyat: 75000 },
    { urun_id: 6, urun_basligi: "Iphone 16 Pro Max", urun_fiyat: 85000 }
  ],
  musteri: { musteri_id: 12 }
};
```

`siparis2` içinde ise `satin_alinanlar` bir dizi değil, tek bir nesne — yani aynı alan farklı sipariş kayıtlarında farklı veri yapısına (dizi vs. tekil nesne) sahip olabiliyor, bu da erişim şeklini değiştiriyor:

```js
// siparis1: dizi olduğu için index ile erişim + toplama
var siparis_1toplam = (siparis1.satin_alinanlar[0].urun_fiyat
                      + siparis1.satin_alinanlar[1].urun_fiyat) * 1.2;

// siparis2: tekil nesne olduğu için doğrudan alan adıyla erişim
var siparis_2toplam = siparis2.satin_alinanlar.urun_fiyat * 1.2;
```

`* 1.2` çarpanı %20 KDV eklemek için kullanılmış. Bu dosyanın öğrettiği en önemli fikir: gerçek dünya verisi (API'den gelen JSON gibi) genelde bu şekilde iç içe nesne ve dizilerin karışımından oluşur, bu yüzden veriye erişmeden önce yapısının (dizi mi, nesne mi) bilinmesi gerekir.

---

## Genel Özet — Bugün Öğrenilen Konular

- Değişken tanımlama (`var`, `let`) ve isimlendirme kuralları
- Veri tipleri: `string`, `number`, `boolean`, `undefined` ve `typeof` operatörü
- String birleştirme (`+`) ile matematiksel toplama arasındaki fark
- Template literal (backtick) kullanımı
- String metotları: `toUpperCase`, `slice`, `substring`, `replace`, `trim`, `indexOf`, `split`
- Sayı dönüştürme (`Number`, `parseFloat`) ve biçimlendirme (`toFixed`, `toPrecision`)
- `Math` nesnesi fonksiyonları (`round`, `ceil`, `floor`, `sqrt`, `pow`, `min`, `random`)
- Diziler: tanımlama, index ile erişim, iç içe diziler
- Dizi metotları: `push`, `pop`, `shift`, `unshift`, `indexOf`, `includes`, `splice`, `join`
- Nesneler (objects): key-value yapısı, iç içe nesneler, dot/bracket notation
- Gerçekçi veri modelleme: dizi + nesne kombinasyonlarıyla (sipariş sistemi) çalışma

## Tekrar Ederken Dikkat Edilecek Noktalar

- `split(" ")[-1]` JS'te çalışmaz — negatif index yoktur, `.at(-1)` kullanılmalı.
- `push()` / `unshift()` eklenen elemanı değil, dizinin **yeni uzunluğunu** döndürür.
- Nesne anahtarında boşluk/özel karakter varsa **sadece bracket notation** (`obj["anahtar adı"]`) çalışır, dot notation çalışmaz.
- Değişkeni `var`/`let` olmadan atamak örtük global değişken oluşturur, kaçınılmalı.
- Aynı alan (`satin_alinanlar` gibi) farklı kayıtlarda dizi ya da tekil nesne olabilir — erişimden önce veri yapısı kontrol edilmeli.
