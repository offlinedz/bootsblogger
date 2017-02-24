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

Pasang *Bootsblogger starter template* di blog Anda (`dist/template.xml`). Di bawah ini ada beberapa tips yang akan memudahkan Anda.

### Code folding

Gunakan fitur code folding yang ada pada template editor Blogger, agar kode template tidak terlihat berantakan dan membingungkan, juga akan memudahkan untuk menemukan bagian kode tertentu, [lihat gambar]({{ site.baseurl }}/assets/img/blogger-code-folding.png).

### Code indentation

Selalu perhatikan indentasi kode, agar kode lebih mudah dibaca dan dipahami. Atur indentasi menggunakan dua spasi.

## Working with template source files

Untuk dapat membangun template di dalam kode sumber, Anda harus memahami dasar-dasar **[grunt-bake](https://github.com/MathiasPaumgarten/grunt-bake)**, Bootsblogger menggunakannya untuk mempermudah proses pembuatan dan pengeditan template.

### Directory structure

{% highlight plaintext %}
bootsblogger/
└── template-src/
    ├── includes/
    │   ├── assets
    │   ├── blog-posts
    │   └── head
    ├── config.json
    ├── style.css
    └── index.xml
{% endhighlight %}

| `/includes` | Wadah untuk berkas template terpisah. |
| `/includes/assets` | Aset template. |
| `/includes/blog-posts` | Bagian-bagian widget blog posting. |
| `/includes/head` | Bagian-bagian yang ada di dalam `<head>`. |
| `/config.json` | Berkas konfigurasi template. |
| `/style.css` | *Main CSS*. |
| `/index.xml` | Berkas utama template yang akan dikompilasi ke dalam `/dist`. |

**Catatan:** Anda dapat membuat direktori dan/atau berkas baru sesuai dengan kebutuhan Anda, disarankan disimpan di dalam `/includes`.

### Include

Menyertakan berkas template terpisah:

{% highlight html %}
<!-- Relative to the file -->
<!--(bake path/to/file)-->

<!-- Relative to the `basePath` (`template-src` directory) -->
<!--(bake /path/to/file)-->
{% endhighlight %}

Contoh menyertakan berkas `/includes/blog-posts/blog-posts.xml`:

{% highlight html %}
<!--(bake /includes/blog-posts/blog-posts.xml)-->
{% endhighlight %}

Contoh menyertakan berkas `/style.css`:

{% highlight html %}
<!--(bake /style.css)-->
{% endhighlight %}

Pelajari lebih lanjut tentang penggunaan grunt-bake dengan membaca [dokumentasinya](https://github.com/MathiasPaumgarten/grunt-bake).

## Code guide

Semua HTML dan CSS harus sesuai dengan panduan kode ([Code Guide by @mdo](http://codeguide.co)).
