---
layout: docs
title: Contents
description: Bootsblogger tersedia dalam dua pilihan, yaitu terkompilasi atau kode sumber.
group: getting-started
---

Bootsblogger tersedia dalam dua pilihan, yaitu terkompilasi atau kode sumber.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Precompiled Bootsblogger

Hanya berisi template terkompilasi.

{% highlight plaintext %}
bootsblogger/
└── dist/
    └── template.xml
{% endhighlight %}

Pilihan ini tersedia untuk Anda yang ingin membangun template dengan hanya menggunakan template editor Blogger, di dalam berkas ini sudah terdapat CSS dan JavaScript Bootstrap dan Bootsblogger, dan juga [Font Awesome](https://fontawesome.io). Jika Anda mengambil pilihan ini, Anda tidak akan dapat mengubah CSS dan JavaScript Bootstrap maupun Bootsblogger, karena CSS dan JavaScript tersebut hasil kompilasi dan kompresi dari kode sumber. Walaupun demikian, Anda tetap dapat mengubahsuaikan Bootstrap maupun Bootsblogger dengan cara membuat *custom* CSS dan JavaScript.

### Usage

Setelah Anda mengunduh template terkompilasi, pasang Bootsblogger starter template (`dist/template.xml`) di blog Anda.

#### Code folding

Gunakan fitur code folding yang ada pada template editor Blogger, agar kode template tidak terlihat berantakan dan membingungkan, juga akan memudahkan untuk menemukan bagian kode tertentu, [lihat gambar]({{ site.baseurl }}/assets/img/blogger-code-folding.png).

#### Code indentation

Selalu perhatikan indentasi kode, agar kode lebih mudah dibaca dan dipahami. Atur indentasi menggunakan `2` spasi.

#### Template CSS

Buat *custom styles* dan/atau buat sebuah komponen baru untuk mengubahsuaikan Bootstrap dan Bootsblogger, buat di bagian *Template CSS*.

{% highlight html %}
<b:comment>=== Template CSS ===</b:comment>
<b:skin>
<![CDATA[
...
]]>
</b:skin>
{% endhighlight %}

#### Template JavaScript

Tambahkan JavaScript Anda di bagian *Template JavaScript*.

{% highlight html %}
<b:comment>=== Template JavaScript ===</b:comment>
<script>
//<![CDATA[
...
//]]>
</script>
{% endhighlight %}

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
    ├── content/
    ├── core/
    ├── config.json
    ├── index.xml
    ├── script.js
    └── style.css
{% endhighlight %}

Di dalam direktori `js/` dan `scss/` adalah kode sumber CSS dan JavaScript Bootstrap dan Bootsblogger, yang akan dikompilasi ke dalam `template-src/core/assets`.

Berkas `scss/_custom.scss` digunakan untuk [mengubahsuaikan variabel Sass]({{ site.baseurl }}/getting-started/options/) Bootstrap dan Bootsblogger.

Di dalam direktori `template-src/` adalah kode sumber template.

- `content/` - Digunakan untuk menyimpan berkas-berkas template terpisah, seperti komponen dan lainnya.
- `core/` - Berisi berkas-berkas inti template.
- `config.json` - Berkas konfigurasi template.
- `index.xml` - Berkas yang akan dikompilasi ke dalam `/dist`.
- `script.js` - Template JavaScript.
- `style.css` - Template CSS (`b:skin`).

### Usage

Untuk dapat bekerja dengan kode sumber Bootsblogger, membutuhkan [beberapa konfigurasi]({{ site.baseurl }}/getting-started/build-tools/#tooling-setup) dan penggunaan [perintah Grunt]({{ site.baseurl }}/getting-started/build-tools/#using-grunt).

#### Template

Untuk dapat membangun template di dalam kode sumber, selain harus memahami XML Blogger, Anda harus memahami dasar-dasar **[grunt-bake](https://github.com/MathiasPaumgarten/grunt-bake)**, Bootsblogger menggunakannya untuk mempermudah proses pembuatan dan pengeditan template.

##### Config

Sesuaikan konfigurasi template (`template-src/config.json`).

##### Template index

Berkas `template-src/index.xml` adalah berkas untuk menyertakan keseluruhan bagian-bagian template, dan akan dikompilasi ke dalam `/dist`.

##### Template CSS

Buat *custom styles* dan/atau buat sebuah komponen baru untuk mengubahsuaikan Bootstrap dan Bootsblogger, buat di bagian *Template CSS* (`template-src/style.css`).

##### Template JavaScript

Tambahkan JavaScript Anda di bagian *Template JavaScript* (`template-src/script.js`).

##### Inclusions

Menyertakan berkas template terpisah:

{% highlight html %}
<!-- Relative to the file -->
<!--(bake path/to/file)-->

<!-- Relative to the `basePath` (`template-src` directory) -->
<!--(bake /path/to/file)-->
{% endhighlight %}

Contoh menyertakan berkas `/content/navbar.xml`:

{% highlight html %}
<!--(bake /content/navbar.xml)-->
{% endhighlight %}

Contoh menyertakan berkas `/style.css`:

{% highlight html %}
<!--(bake /style.css)-->
{% endhighlight %}

##### Directory structure

Lihat [struktur direktori](#bootsblogger-source-code) di atas.

**Catatan:** Anda dapat membuat direktori dan/atau berkas baru sesuai dengan kebutuhan Anda, disarankan disimpan di dalam `template-src/content/`.

##### Grunt-bake

Pelajari lebih lanjut tentang penggunaan grunt-bake dengan membaca [dokumentasinya](https://github.com/MathiasPaumgarten/grunt-bake).
