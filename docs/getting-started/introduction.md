---
layout: docs
title: Introduction
description: Bootsblogger adalah sebuah template dasar, untuk membangun template Blogger menggunakan Bootstrap, yang dirancang untuk memberikan kemudahan dan keindahan.
group: getting-started
redirect_from: "/getting-started/"
---

Template dasar Bootsblogger sangat fleksibel, mudah dipahami, penulisan kode yang baik, terstruktur, dan menyediakan banyak fitur. Dengan itu semua, Anda dapat dengan mudah membangun template sesuai dengan yang Anda inginkan.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Quick start

Anda dapat menggunakan Bootsblogger dengan dua cara, yaitu:

### Compiled template

Membangun template langsung di editor HTML Blogger, atau Anda dapat menggunakan *text editor* favorit Anda.

<a href="{{ site.download.dist }}" class="btn btn-bd">Download compiled template</a>

**Content:**

Hanya berisi template terkompilasi.

{% highlight plaintext %}
bootsblogger/
└── dist/
    └── template.xml
{% endhighlight %}

Pasang `template.xml` di blog Anda, kemudian ubahsuaikan. Atau, ubahsuaikan menggunakan *text editor* favorit Anda, kemudian pasang template di blog Anda.

### Source files

Membangun template menggunakan [build tools]({{ site.baseurl }}/getting-started/build-tools/) dan *text editor* favorit Anda.

<a href="{{ site.download.source }}" class="btn btn-bd">Download source files</a>

**Content:**

Template terkompilasi, beserta kode sumber CSS, template, dan dokumentasi. Untuk lebih jelas lihat struktur di bawah ini.

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
    ├── default-markups/
    ├── includable/
    ├── partials/
    ├── post/
    ├── widgets/
    ├── config.json
    ├── index.xml
    ├── layout-mode.css
    ├── script.js
    └── skin.css
{% endhighlight %}

- **`dist/template.xml`** - Template terkompilasi.
- **`docs/`** - Berkas-berkas dokumentasi.
- **`scss/`** - Kode sumber CSS Bootstrap dan Bootsblogger yang akan dikompilasi ke dalam `template-src/includable/assets/css`.
  - `_custom.scss` - Digunakan untuk [mengubahsuaikan variabel Sass]({{ site.baseurl }}/getting-started/options/) Bootstrap dan Bootsblogger.
- **`template-src/`** - Kode sumber template.
  - `default-markups/` - *Default markup* untuk gadget.
  - `includable/` - Includable: [head]({{ site.baseurl }}/core-template/includable-head/), [post]({{ site.baseurl }}/core-template/includable-post/), dan [assets]({{ site.baseurl }}/core-template/includable-assets/).
  - `partials` - *Partial templates*.
  - `post/` - Bagian-bagian template untuk mengatur tampilan posting blog. [Dokumentasi]({{ site.baseurl }}/core-template/post/).
  - `widgets/` - Widget.
   - `config.json` - Konfigurasi.
  - `index.xml` - Untuk menyertakan keseluruhan bagian-bagian template, dan akan dikompilasi ke dalam `/dist`.
  - `layout-mode.css` - CSS untuk halaman Layout Blogger. [Dokumentasi]({{ site.baseurl }}/core-template/layout-mode-css/).
  - `script.js` - Template JavaScript.
  - `skin.css` - Template Skin.

## Bootstrap

Untuk dapat membuat template yang super keren, Anda harus menguasai Bootstrap atau minimal mengetahui dasarnya. Untuk mempelajarinya silakan kunjungi halaman dokumentasi Bootstrap di <https://v4-alpha.getbootstrap.com>.
