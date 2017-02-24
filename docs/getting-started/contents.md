---
layout: docs
title: Contents
description: Bootsblogger tersedia dalam dua pilihan, yaitu terkompilasi atau kode sumber.
group: getting-started
---

Bootsblogger tersedia dalam dua pilihan, yaitu terkompilasi atau kode sumber.

## Precompiled Bootsblogger

Hanya berisi template terkompilasi.

{% highlight plaintext %}
bootsblogger/
└── dist/
    └── template.xml
{% endhighlight %}

Pilihan ini tersedia untuk Anda yang ingin membangun template dengan hanya menggunakan template editor Blogger, di dalam berkas ini sudah terdapat CSS dan JavaScript Bootstrap dan Bootsblogger, dan juga [Font Awesome](https://fontawesome.io). Jika Anda mengambil pilihan ini, Anda tidak akan dapat mengubah CSS dan JavaScript Bootstrap maupun Bootsblogger, karena CSS dan JavaScript tersebut hasil kompilasi dan kompresi dari kode sumber. Walaupun demikian, Anda tetap dapat mengubahsuaikan komponen Bootstrap maupun Bootsblogger dengan cara membuat *custom styles* pada bagian *main CSS*.

## Bootsblogger source code

CSS, JavaScript, dan template terkompilasi, beserta kode sumber Sass, JavaScript, template, dan berkas dokumentasi. Untuk lebih jelas lihat struktur di bawah ini: 

{% highlight plaintext %}
bootsblogger/
├── dist/
│   └── template.xml
├── docs/
├── js/
│   ├── bootsblogger/
│   └── bootstrap/
├── scss/
│   ├── bootsblogger/
│   ├── bootstrap/
│   └── _custom.scss
└── template-src/
    ├── includes/
    ├── config.json
    ├── style.css
    └── index.xml
{% endhighlight %}

Di dalam direktori `scss/` dan `js/` adalah kode sumber untuk CSS dan JavaScript Bootstrap dan Bootsblogger, yang akan dikompilasi ke dalam `template-src/includes/assets`.

Berkas `scss/_custom.scss` digunakan untuk [mengubahsuaikan variabel Sass]({{ site.baseurl }}/getting-started/options/) Bootstrap dan Bootsblogger.

Di dalam direktori `template-src/` adalah kode sumber untuk template, `index.xml` adalah berkas utama template yang akan dikompilasi ke dalam `/dist`. Bootsblogger menggunakan **[grunt-bake](https://github.com/MathiasPaumgarten/grunt-bake)** untuk mengurai template menjadi beberapa bagian, sehingga akan mempermudah proses pembuatan dan pengeditan template, juga memanfaatkan fitur grunt-bake lainnya.
