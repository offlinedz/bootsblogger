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

Membangun template langsung di editor HTML Blogger atau dapat juga menggunakan *text editor* favorit Anda.

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

Template terkompilasi, beserta kode sumber Sass, template, dan berkas dokumentasi. Untuk lebih jelas lihat struktur di bawah ini.

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
    ├── components/
    ├── includes/
    ├── post-layout/
    ├── widgets/
    ├── config.json
    ├── index.xml
    ├── script.js
    └── style.css
{% endhighlight %}

- **`dist/template.xml`** - Template terkompilasi.
- **`docs/`** - Berkas-berkas dokumentasi.
- **`scss/`** - Kode sumber CSS Bootstrap dan Bootsblogger yang akan dikompilasi ke dalam `template-src/includes/assets/css`.
  - `_custom.scss` - Digunakan untuk [mengubahsuaikan variabel Sass]({{ site.baseurl }}/getting-started/options/) Bootstrap dan Bootsblogger.
- **`template-src/`** - Kode sumber template.
  - `components/` - Bagian-bagian template untuk komponen.
  - `includes/` - Bagian-bagian template untuk [head]({{ site.baseurl }}/core-template/includes-head/), [blog posts]({{ site.baseurl }}/core-template/includes-blog-posts/), dan [assets]({{ site.baseurl }}/core-template/includes-assets/).
  - `post-layout/` - Bagian-bagian template untuk mengatur tampilan posting.
  - `widgets/` - Bagian-bagian template untuk widget.
  - `index.xml` - Untuk menyertakan keseluruhan bagian-bagian template, dan akan dikompilasi ke dalam `/dist`.
  - `config.json` - Template config.
  - `script.js` - Template JavaScript.
  - `style.css` - Template CSS.

## Bootstrap

Untuk dapat membuat template yang super keren, Anda harus menguasai Bootstrap atau minimal mengetahui dasarnya. Untuk mempelajarinya silakan kunjungi halaman dokumentasi Bootstrap di <https://v4-alpha.getbootstrap.com>.
