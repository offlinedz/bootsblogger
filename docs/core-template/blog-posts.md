---
layout: docs
title: Blog posts
description: Widget `Blog` posting dirancang untuk memudahkan dalam mengatur tampilan posting. Dan juga dirancang untuk dapat membuat tampilan posting yang unik/berbeda-beda di setiap tipe halaman.
group: core-template
---

Widget `Blog` posting dirancang untuk memudahkan dalam mengatur tampilan posting. Dan juga dirancang untuk dapat membuat tampilan posting yang unik/berbeda-beda di setiap tipe halaman.

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

## Post layout and styles

Posting dibagi menjadi beberapa bagian berdasarkan tipe halaman. Untuk membuat tampilan posting yang berbeda-beda di setiap tipe halaman, Anda hanya perlu menyesuaikan tampilan posting pada masing-masing bagian.

### Homepage

Tampilan posting untuk halaman beranda.

###### Source

{% highlight plaintext %}
template-src/content/blog-posts/post-home.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='post-home'>...</b:includable>
{% endhighlight %}

### Item page

Tampilan posting untuk halaman posting (*item*).

###### Source

{% highlight plaintext %}
template-src/content/blog-posts/post-item.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='post-item'>...</b:includable>
{% endhighlight %}

### Static page

Tampilan posting untuk halaman statis.

###### Source

{% highlight plaintext %}
template-src/content/blog-posts/post-static.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='post-static'>...</b:includable>
{% endhighlight %}

### Search (label) page

Tampilan posting untuk halaman kategori.

###### Source

{% highlight plaintext %}
template-src/content/blog-posts/post-search-label.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='post-search-label'>...</b:includable>
{% endhighlight %}

### Search (query) page

Tampilan posting untuk halaman hasil pencarian.

###### Source

{% highlight plaintext %}
template-src/content/blog-posts/post-search-query.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='post-search-query'>...</b:includable>
{% endhighlight %}

### Search (default) page

Tampilan posting untuk halaman dengan URL `https://example.blogspot.com/search`.

###### Source

{% highlight plaintext %}
template-src/content/blog-posts/post-search-default.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='post-search-default'>...</b:includable>
{% endhighlight %}

### Archive page

Tampilan posting untuk halaman arsip.

###### Source

{% highlight plaintext %}
template-src/content/blog-posts/post-archive.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='post-archive'>...</b:includable>
{% endhighlight %}

## Custom headerByline and footerBylines

### Header

`customHeaderByline`.

###### Source

{% highlight plaintext %}
template-src/core/blog-posts/customHeaderByline.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='customHeaderByline'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:if cond='data:headerByline.items.notEmpty'>
  <div class='wrapper'>
    <b:include name='customHeaderByline'/>
  </div>
</b:if>
{% endhighlight %}

### Footer

`customFooterBylines`.

###### Source

{% highlight plaintext %}
template-src/core/blog-posts/customFooterBylines.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='customFooterBylines'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:if cond='data:footerBylines.notEmpty'>
  <div class='wrapper'>
    <b:include name='customFooterBylines'/>
  </div>
</b:if>
{% endhighlight %}

## Includes

### Images

Untuk membuat *featured image*.

###### Source

{% highlight plaintext %}
template-src/core/blog-posts/post.image.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='post.image'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:include data='{ size: number, aspectRatioWidth: number, aspectRatioHeight: number }' name='post.image'/>
{% endhighlight %}

### Background images

Untuk membuat *featured image* dengan `background-image`.

###### Source

{% highlight plaintext %}
template-src/core/blog-posts/post.imageBg.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='post.imageBg'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:include data='{ size: number, aspectRatioWidth: number, aspectRatioHeight: number, class: &quot;class-name&quot;, style: &quot;min-height: 250px;&quot; }' name='post.imageBg'/>
{% endhighlight %}

### Snippets

Untuk membuat ringkasan posting.

###### Source

{% highlight plaintext %}
template-src/core/blog-posts/post.snippet.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='post.snippet'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:include data='{ length: number, links: true|false, linebreaks: true|false, ellipsis: true|false }' name='post.snippet'/>
{% endhighlight %}

### Read more 

Untuk membuat *read more link*. 

###### Source

{% highlight plaintext %}
template-src/core/blog-posts/post.readMore.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='post.readMore'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:include data='{ class: &quot;btn btn-primary&quot; }' name='post.readMore'/>
{% endhighlight %}
