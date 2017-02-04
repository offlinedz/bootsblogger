---
layout: docs
title: Best practices
description: Suatu teknik, metode, atau proses yang lebih efektif dalam bekerja dengan Bootsblogger.
group: getting-started
---

Suatu teknik, metode, atau proses yang lebih efektif dalam bekerja dengan Bootsblogger.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Working with Blogger template editor

Pasang Bootsblogger starter template di blog Anda (`dist/template.xml`). Di bawah ini, ada beberapa tips yang akan memudahkan Anda.

### Code folding

Gunakan fitur code folding yang ada pada template editor Blogger, agar kode template tidak terlihat berantakan dan membingungkan, juga akan memudahkan untuk menemukan bagian kode tertentu, [lihat gambar]({{ site.baseurl }}/assets/img/blogger-code-folding.png).

### Code indentation

Selalu perhatikan indentasi kode, agar kode lebih mudah dibaca dan dipahami. Atur indentasi menggunakan dua spasi.

## Working with template source files

Untuk dapat membangun template di dalam kode sumber, Anda harus memahami dasar-dasar **[grunt-bake](https://github.com/MathiasPaumgarten/grunt-bake)**, karena Bootsblogger menggunakan grunt-bake untuk mempermudah proses pembuatan dan pengeditan template.

### Directory structure

{% highlight plaintext %}
bootsblogger/
└── template-src/
    ├── includes/
    │   ├── assets
    │   ├── blog-posts
    │   ├── foot-content
    │   └── head-content
    ├── config.json
    ├── style.css
    └── template-src.xml
{% endhighlight %}

| `includes` | Wadah untuk konten template. |
| `includes/assets` | Aset template disimpan di sini. |
| `includes/blog-posts` | Bagian-bagian widget blog posting disimpan di sini. |
| `includes/foot-content` | Konten footer disimpan di sini. |
| `includes/head-content` | Konten yang ada di dalam `<head>` disimpan di sini. |
| `config.json` | Berkas konfigurasi template. |
| `style.css` | Main CSS. |
| `template-src.xml` | Berkas utama template yang akan dikompilasi ke dalam `/dist`. |

**Catatan:** Anda dapat membuat direktori dan/atau berkas baru sesuai dengan kebutuhan Anda, disarankan disimpan di dalam `/includes`.

### Include

Memuat konten atau berkas-berkas yang ada di dalam `/includes`:

{% highlight html %}
<!--(bake /includes/path/to/file)-->
{% endhighlight %}

Untuk penggunaan grunt-bake lebih lanjut, silakan baca dokumentasinya di [repo grunt-bake](https://github.com/MathiasPaumgarten/grunt-bake).

## Code guide

Untuk penulisan kode HTML dan CSS, gunakan pedoman pengkodean [Code Guide by @mdo](http://codeguide.co).
