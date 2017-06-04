---
layout: docs
title: Blog posts
description: Gadget Blog dirancang untuk memudahkan dalam mengatur tampilan posting. Dan juga dirancang untuk dapat membuat tampilan posting yang berbeda di setiap tipe halaman.
group: core-template
---

Gadget Blog atau `<b:widget type='Blog'></b:widget>`.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

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

## Includes

Bagian-bagian kode yang dapat Anda sertakan di bagian [post layout and styles](#post-layout-and-styles).

### Custom headerByline

Untuk menampilkan *post items* yang berada di dalam *header* pada konfigurasi posting blog.

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

### Custom footerBylines

Untuk menampilkan *post items* yang berada di dalam *footer* pada konfigurasi posting blog.

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
<b:include data='{ size: number, aspectRatioWidth: number, aspectRatioHeight: number, link: true|false, class: &quot;class-name&quot; }' name='post.image'/>
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
