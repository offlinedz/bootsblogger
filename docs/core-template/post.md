---
layout: docs
title: Post
description: Bagian-bagian template untuk mengatur tampilan posting blog.
group: core-template
---

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Post layout and styles

Untuk memudahkan dalam mengatur tampilan posting, posting dibagi menjadi beberapa bagian berdasarkan tipe halaman. Tampilan posting dapat berbeda-beda di setiap tipe halaman, untuk membuat tampilan posting yang berbeda di setiap tipe halaman, Anda hanya perlu menyesuaikan tampilan posting pada masing-masing bagian.

### Homepage

Tampilan posting untuk halaman beranda.

###### Source

{% highlight plaintext %}
template-src/post/post-home.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='post-home'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:if cond='data:view.isHomepage'>
  <b:include name='post-home'/>
</b:if>
{% endhighlight %}

### Item page

Tampilan posting untuk halaman posting (*item*).

###### Source

{% highlight plaintext %}
template-src/post/post-item.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='post-item'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:if cond='data:view.isPost'>
  <b:include name='post-item'/>
</b:if>
{% endhighlight %}

### Static page

Tampilan posting untuk halaman statis.

###### Source

{% highlight plaintext %}
template-src/post/post-static.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='post-static'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:if cond='data:view.isPage'>
  <b:include name='post-static'/>
</b:if>
{% endhighlight %}

### Search (label) page

Tampilan posting untuk halaman kategori.

###### Source

{% highlight plaintext %}
template-src/post/post-search-label.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='post-search-label'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:if cond='data:view.search.label'>
  <b:include name='post-search-label'/>
</b:if>
{% endhighlight %}

### Search (query) page

Tampilan posting untuk halaman hasil pencarian.

###### Source

{% highlight plaintext %}
template-src/post/post-search-query.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='post-search-query'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:if cond='data:view.search.query'>
  <b:include name='post-search-query'/>
</b:if>
{% endhighlight %}

### Search (default) page

Tampilan posting untuk halaman dengan URL `https://example.blogspot.com/search`.

###### Source

{% highlight plaintext %}
template-src/post/post-search-default.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='post-search-default'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:if cond='data:view.search and !data:view.search.label and !data:view.search.query'>
  <b:include name='post-search-default'/>
</b:if>
{% endhighlight %}

### Archive page

Tampilan posting untuk halaman arsip.

###### Source

{% highlight plaintext %}
template-src/post/post-archive.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='post-archive'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:if cond='data:view.isArchive'>
  <b:include name='post-archive'/>
</b:if>
{% endhighlight %}

## Elements

Breadcrumb, alert, comments, dan pager.

### Breadcrumb

Untuk menunjukkan lokasi halaman saat ini.

###### Source

{% highlight plaintext %}
template-src/post/blog-breadcrumb.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='blog-breadcrumb'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:include name='blog-breadcrumb'/>
{% endhighlight %}

### Alert

Pesan yang akan muncul di atas posting. Pesan hanya akan muncul di halaman hasil pencarian, halaman label, halaman arsip, dan halaman galat (404).

###### Source

{% highlight plaintext %}
template-src/post/blog-alert.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='blog-alert'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:include name='blog-alert'/>
{% endhighlight %}

### Comments

Sistem komentar bawaan Bootsblogger menggunakan **Google+ comments**.

###### Source

{% highlight plaintext %}
template-src/post/blog-comments.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='blog-comments'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:include cond='data:view.isSingleItem' name='blog-comments'/>
{% endhighlight %}

### Pager

Tautan untuk menuju halaman berikutnya atau sebelumnya.

###### Source

{% highlight plaintext %}
template-src/post/blog-pager.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='blog-pager'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:include cond='data:posts.notEmpty' name='blog-pager'/>
{% endhighlight %}

## Usage

Lihat `template-src/widgets/Blog1.default.xml`:

{% highlight html %}
<b:widget id='Blog1' locked='true' title='Blog Posts' type='Blog' version='2' visible='true'>
  <b:includable id='main'>

    <b:if cond='!data:view.isMobile'>

      <b:comment>=== Breadcrumb ===</b:comment>
      <b:include name='blog-breadcrumb'/>

      <b:comment>=== Alert ===</b:comment>
      <b:include name='blog-alert'/>

      <b:comment>=== Posts ===</b:comment>
      <b:if cond='data:posts.notEmpty'>
        <div class='blog-posts'>
          <b:comment>=== Homepage ===</b:comment>
          <b:if cond='data:view.isHomepage'>
            <b:include name='post-home'/>
          </b:if>
          <b:comment>=== Item page ===</b:comment>
          <b:if cond='data:view.isPost'>
            <b:include name='post-item'/>
          </b:if>
          <b:comment>=== Static page ===</b:comment>
          <b:if cond='data:view.isPage'>
            <b:include name='post-static'/>
          </b:if>
          <b:comment>=== Search (label) page ===</b:comment>
          <b:if cond='data:view.search.label'>
            <b:include name='post-search-label'/>
          </b:if>
          <b:comment>=== Search (query) page ===</b:comment>
          <b:if cond='data:view.search.query'>
            <b:include name='post-search-query'/>
          </b:if>
          <b:comment>=== Search (default) page ===</b:comment>
          <b:if cond='data:view.search and !data:view.search.label and !data:view.search.query'>
            <b:include name='post-search-default'/>
          </b:if>
          <b:comment>=== Archive page ===</b:comment>
          <b:if cond='data:view.isArchive'>
            <b:include name='post-archive'/>
          </b:if>
        </div>
      </b:if>

      <b:comment>=== Comments ===</b:comment>
      <b:include cond='data:view.isSingleItem' name='blog-comments'/>

      <b:comment>=== Pager ===</b:comment>
      <b:include cond='data:posts.notEmpty' name='blog-pager'/>

    </b:if>

  </b:includable>
</b:widget>
{% endhighlight %}
