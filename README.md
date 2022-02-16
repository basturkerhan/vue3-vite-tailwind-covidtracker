# Covid Tracker - Vue3 + Vite + Tailwind
![Screenshot](https://github.com/basturkerhan/vue3-vite-tailwind-covidtracker/blob/main/readme-images/1.png)
<br>

## Hakkında
Bu proje; Vue3 ve Tailwind pratiği için hazırlanmıştır. SPA için Vue3 Composition API kullanılırken ihtiyaç duyulan yerlerde Options API kullanılmıştır. Proje boyunca görsellik için Tailwind kütüphanesi kullanılmıştır. Proje; yapım aşamalarını hızlandırmak amacıyla Vite kullanılarak oluşturulmuştur. Veriler için VACCOVID API'dan faydalanılmıştır. Dünya genelindeki günlük vakalar, tüm vakalar, mevcut aşı çalışmaları gibi bilgilerin getirilmesinin yanı sıra ülkeye göre 2 aylık süreçteki toplam ve günlük vakaların, ölümlerin, iyileşme sayılarının grafiği de çıkarılabilmekte, enfeksiyon riski gibi barlarla görselleştirmeler sağlanabilmekte ve API'dan sağlanan diğer tüm bilgiler de yine ülkenin detay sayfasında yer almaktadır.
<br>
Proje içinde yer alan tablolar ve işlevleri için özel bir Layout kodlanmış ve tekrarlayan kod fazlalığı engellenmiştir. Bu tablolar kendilerine gönderilen "proplar" aracılığıyla özelleştirilebilmektedir. Aynı zamanda arama kelimesine göre filtreleme, tablo sütunlarında yer alan değerlere göre sıralama işlemleri yapabilme gibi fonksiyonlara da sahiptir ve tüm ekrana sığacak kadar alan kapladıktan sonra daha fazla büyümek yerine scroolbar çıkararak rahat kullanıma imkan vermektedir.
<br>
Aynı işlemler tekrarlayan SVG butonlarını kapsayan alanlar için de yapılarak özel bir component üretilmiş ve gereksiz kod fazlalığının önüne geçilmiştir.

## Kullanılan Teknolojiler
##### -Vue3: vue-router, vuex
##### -Tailwind
##### -Vite
##### -HTML,CSS
##### -Nodejs paketleri: Axios, vue3-carousel, chart.js
##### -VACCOVID API

## Nasıl Çalıştırılır?
Projenin buluduğu dizinde Komut Satırı açıp sırasıyla şu kodları çalıştırınız;
```
npm install
npm run dev
```
## Proje Görselleri
![Screenshot](https://github.com/basturkerhan/vue3-vite-tailwind-covidtracker/blob/main/readme-images/1.png)
<br>
![Screenshot](https://github.com/basturkerhan/vue3-vite-tailwind-covidtracker/blob/main/readme-images/2.png)
<br>
![Screenshot](https://github.com/basturkerhan/vue3-vite-tailwind-covidtracker/blob/main/readme-images/3.png)
<br>
![Screenshot](https://github.com/basturkerhan/vue3-vite-tailwind-covidtracker/blob/main/readme-images/4.png)
<br>
![Screenshot](https://github.com/basturkerhan/vue3-vite-tailwind-covidtracker/blob/main/readme-images/5.png)
<br>
![Screenshot](https://github.com/basturkerhan/vue3-vite-tailwind-covidtracker/blob/main/readme-images/6.png)
<br>
![Screenshot](https://github.com/basturkerhan/vue3-vite-tailwind-covidtracker/blob/main/readme-images/7.png)
<br>
