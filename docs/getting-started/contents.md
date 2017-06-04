---
layout: docs
title: Contents
description: Bootsblogger tersedia dalam dua pilihan, yaitu terkompilasi atau kode sumber.
group: getting-started
---

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

### Usage

Setelah Anda mengunduh template terkompilasi, pasang Bootsblogger starter template (`dist/template.xml`) di blog Anda.

##### Code folding

Gunakan fitur code folding yang ada pada template editor Blogger, agar kode template tidak terlihat berantakan dan membingungkan, juga akan memudahkan untuk menemukan bagian kode tertentu, [lihat gambar]({{ site.baseurl }}/assets/img/blogger-code-folding.png).

##### Code indentation

Selalu perhatikan indentasi kode, agar kode lebih mudah dibaca dan dipahami. Atur indentasi menggunakan `2` spasi.

##### Template CSS

Anda dapat membuat *custom styles* dan/atau sebuah komponen baru untuk mengubahsuaikan Bootstrap dan Bootsblogger, tambahkan di bagian *Template CSS*.

{% highlight html %}
<b:comment>=== Template CSS ===</b:comment>
<b:skin>
<![CDATA[
...
]]>
</b:skin>
{% endhighlight %}

##### Template JavaScript

Tambahkan JavaScript di bagian *Template JavaScript*.

{% highlight html %}
<b:comment>=== Template JavaScript ===</b:comment>
<script>
//<![CDATA[
...
//]]>
</script>
{% endhighlight %}

## Bootsblogger source code

Template terkompilasi, beserta kode sumber Sass, template, dan berkas dokumentasi. Untuk lebih jelas lihat struktur di bawah ini:

{% highlight plaintext %}
bootsblogger/
├── dist/
│   └── template.xml
├── docs/
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

**`dist/template.xml`** - Template terkompilasi.

**`docs/`** - Berkas-berkas dokumentasi.

**`scss/`** - Kode sumber CSS Bootstrap dan Bootsblogger yang akan dikompilasi ke dalam `template-src/core/assets/css`.

- `_custom.scss` - Digunakan untuk [mengubahsuaikan variabel Sass]({{ site.baseurl }}/getting-started/options/) Bootstrap dan Bootsblogger.

**`template-src/`** - Kode sumber template.

- `core/` - Bagian-bagian inti template.
- `content/` - Bagian-bagian template lainnya.
- `config.json` - Template config.
- `index.xml` - Template index.
- `script.js` - Template JavaScript.
- `style.css` - Template CSS.

### Usage

Untuk dapat bekerja dengan kode sumber Bootsblogger, membutuhkan [beberapa konfigurasi]({{ site.baseurl }}/getting-started/build-tools/#tooling-setup) dan penggunaan [perintah Grunt]({{ site.baseurl }}/getting-started/build-tools/#using-grunt).

#### Template

Untuk dapat membangun template di dalam kode sumber, selain harus memahami XML Blogger, Anda harus memahami dasar-dasar **[grunt-bake](https://github.com/MathiasPaumgarten/grunt-bake)**, Bootsblogger menggunakannya untuk mempermudah proses pembuatan dan pengeditan template.

##### Template config

Sesuaikan konfigurasi template (`config.json`).

##### Template index

Berkas `index.xml` adalah berkas untuk menyertakan keseluruhan bagian-bagian template, dan akan dikompilasi ke dalam `/dist`.

##### Template CSS

Anda dapat membuat *custom styles* dan/atau sebuah komponen baru untuk mengubahsuaikan Bootstrap dan Bootsblogger, tambahkan di bagian *Template CSS* (`style.css`).

##### Template JavaScript

Tambahkan JavaScript di bagian *Template JavaScript* (`script.js`).

##### Inclusions

Menyertakan berkas template terpisah:

{% highlight html %}
<!-- Relative to the file -->
<!--(bake path/to/file)-->

<!-- Relative to the `basePath` (`template-src` directory) -->
<!--(bake /path/to/file)-->
{% endhighlight %}

Contoh menyertakan berkas `content/navbar.xml`:

{% highlight html %}
<!--(bake /content/navbar.xml)-->
{% endhighlight %}

Contoh menyertakan berkas `style.css`:

{% highlight html %}
<!--(bake /style.css)-->
{% endhighlight %}

##### Directory structure

Lihat [struktur direktori](#bootsblogger-source-code) di atas.

**Catatan:** Anda dapat membuat direktori dan/atau berkas baru sesuai dengan kebutuhan Anda, disarankan disimpan di dalam `content/`.

##### Grunt-bake

Pelajari lebih lanjut tentang penggunaan grunt-bake dengan membaca [dokumentasinya](https://github.com/MathiasPaumgarten/grunt-bake).
