---
layout: docs
title: Blog posts
description: Widget blog posting dirancang untuk memudahkan dalam mengelola data posting, seperti untuk menampilkan tanggal, penulis, tentang penulis, jumlah komentar, dan lainnya. Dan juga dirancang untuk dapat membuat tampilan posting yang unik/berbeda-beda di setiap tipe halaman.
group: core-template
---

Widget blog posting dirancang untuk memudahkan dalam mengelola data posting, seperti untuk menampilkan tanggal, penulis, tentang penulis, jumlah komentar, dan lainnya. Dan juga dirancang untuk dapat membuat tampilan posting yang unik/berbeda-beda di setiap tipe halaman.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

{% comment %}
## Quick start example

Contoh dasar untuk menampilkan posting.

- Selalu tempatkan kode posting di dalam `b:loop`.
- Selalu gunakan tag kondisional, seperti `b:if cond='data:post.title'` dan lainnya.
- Selalu gunakan [*includes* (`b:include`)](#includes) yang tersedia.
- Gunakan [Schema](https://schema.org).

{% highlight html %}
<b:loop values='data:posts' var='post'>
  <article class='post-example' expr:id='"post-" + data:post.id' itemscope='itemscope' itemtype='http://schema.org/BlogPosting'>
    <!-- Post title -->
    <b:if cond='data:post.title'>
      <h2 class='post-title' itemprop='name headline'>
        <a expr:href='data:post.url' expr:title='data:post.title' itemprop='url'><data:post.title/></a>
      </h2>
    </b:if>
    <!-- Post author -->
    <b:if cond='data:top.showAuthor'>
      <b:include name='include-author'/>
    </b:if>
  </article>
</b:loop>
{% endhighlight %}

## Data tags

Di bawah ini adalah tag data Blogger yang sering digunakan. Untuk tag data lainnya Anda dapat menggunakan [*includes* (`b:include`)](#includes).

| Kode | Deskripsi |
| ---- | --------- |
| `data:post.id` | Nomor unik posting. |
| `data:post.title` | Judul posting. |
| `data:post.url` | URL posting. |
| `data:post.body` | Tubuh posting. |
| `data:post.snippet` | Tubuh posting yang sudah dipotong (ringkasan). |
{% endcomment %}

## Unique posts

Tampilan posting yang unik/berbeda-beda di setiap tipe halaman. Untuk membuat tampilan posting berbeda-beda di setiap tipe halaman, cukup tempatkan kode posting yang berbeda pada masing-masing bagian berikut:

#### Homepage

Tampilan posting untuk halaman beranda.

{% highlight html %}
<b:includable id='post-home'>...</b:includable>
{% endhighlight %}

#### Item page

Tampilan posting untuk halaman posting (*item*).

{% highlight html %}
<b:includable id='post-item'>...</b:includable>
{% endhighlight %}

#### Static page

Tampilan posting untuk halaman statis.

{% highlight html %}
<b:includable id='post-static'>...</b:includable>
{% endhighlight %}

#### Search (label) page

Tampilan posting untuk halaman kategori.

{% highlight html %}
<b:includable id='post-search-label'>...</b:includable>
{% endhighlight %}

#### Search (query) page

Tampilan posting untuk halaman hasil pencarian.

{% highlight html %}
<b:includable id='post-search-query'>...</b:includable>
{% endhighlight %}

#### Search (default) page

Tampilan posting untuk halaman dengan URL `https://example.blogspot.com/search`.

{% highlight html %}
<b:includable id='post-search-default'>...</b:includable>
{% endhighlight %}

#### Archive page

Tampilan posting untuk halaman arsip.

{% highlight html %}
<b:includable id='post-archive'>...</b:includable>
{% endhighlight %}
