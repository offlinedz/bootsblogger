---
layout: docs
title: Includes - Blog posts
description: Bagian-bagian kode untuk posting blog.
group: core-template
---

Bagian-bagian kode untuk posting blog hanya dapat disertakan di dalam widget `Blog` (`<b:widget type='Blog'></b:widget>`).

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Post layout and styles

Untuk memudahkan dalam mengatur tampilan posting, posting dibagi menjadi beberapa bagian berdasarkan tipe halaman. Tampilan posting dapat berbeda-beda di setiap tipe halaman, untuk membuat tampilan posting yang berbeda di setiap tipe halaman, Anda hanya perlu menyesuaikan tampilan posting pada masing-masing bagian.

Bagian-bagian ini digunakan di bagian [`<b:includable id='main.blog-posts'>`](#blog-posts).

### Homepage

Tampilan posting untuk halaman beranda.

###### Source

{% highlight plaintext %}
template-src/post-layout/post-home.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='post-home'>...</b:includable>
{% endhighlight %}

### Item page

Tampilan posting untuk halaman posting (*item*).

###### Source

{% highlight plaintext %}
template-src/post-layout/post-item.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='post-item'>...</b:includable>
{% endhighlight %}

### Static page

Tampilan posting untuk halaman statis.

###### Source

{% highlight plaintext %}
template-src/post-layout/post-static.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='post-static'>...</b:includable>
{% endhighlight %}

### Search (label) page

Tampilan posting untuk halaman kategori.

###### Source

{% highlight plaintext %}
template-src/post-layout/post-search-label.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='post-search-label'>...</b:includable>
{% endhighlight %}

### Search (query) page

Tampilan posting untuk halaman hasil pencarian.

###### Source

{% highlight plaintext %}
template-src/post-layout/post-search-query.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='post-search-query'>...</b:includable>
{% endhighlight %}

### Search (default) page

Tampilan posting untuk halaman dengan URL `https://example.blogspot.com/search`.

###### Source

{% highlight plaintext %}
template-src/post-layout/post-search-default.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='post-search-default'>...</b:includable>
{% endhighlight %}

### Archive page

Tampilan posting untuk halaman arsip.

###### Source

{% highlight plaintext %}
template-src/post-layout/post-archive.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='post-archive'>...</b:includable>
{% endhighlight %}

## Main

Bagian-bagian ini digunakan di bagian `<b:includable id='main'>` di dalam widget `Blog`.

### Blog breadcrumb

Untuk menunjukkan lokasi halaman saat ini.

###### Source

{% highlight plaintext %}
template-src/includes/blog-posts/main.blog-breadcrumb.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='main.blog-breadcrumb'>...</b:includable>
{% endhighlight %}

### Blog alert

Pesan yang akan muncul di atas posting. Pesan hanya akan muncul di halaman hasil pencarian, halaman label, halaman arsip, dan halaman galat (404).

###### Source

{% highlight plaintext %}
template-src/includes/blog-posts/main.blog-alert.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='main.blog-alert'>...</b:includable>
{% endhighlight %}

### Blog posts

Penggunaan [post layout and styles](#post-layout-and-styles).

###### Source

{% highlight plaintext %}
template-src/includes/blog-posts/main.blog-posts.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='main.blog-posts'>...</b:includable>
{% endhighlight %}

### Blog comments

Sistem komentar bawaan Bootsblogger menggunakan *Google+ comments*.

###### Source

{% highlight plaintext %}
template-src/includes/blog-posts/main.blog-comments.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='main.blog-comments'>...</b:includable>
{% endhighlight %}

### Blog pager

Tautan untuk menuju halaman berikutnya atau sebelumnya.

###### Source

{% highlight plaintext %}
template-src/includes/blog-posts/main.blog-pager.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='main.blog-pager'>...</b:includable>
{% endhighlight %}

## Post byline items

Untuk menampilkan *item* posting yang ada dalam daftar konfigurasi posting blog.

Bagian-bagian ini dapat digunakan di bagian [post layout and styles](#post-layout-and-styles).

### headerByline

Bagian *header*.

###### Source

{% highlight plaintext %}
template-src/includes/blog-posts/byline.header.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='byline.header'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:if cond='data:headerByline.items.notEmpty'>
  <div class='wrapper'>
    <b:include name='byline.header'/>
  </div>
</b:if>
{% endhighlight %}

### footerBylines

Bagian *footer*.

###### Source

{% highlight plaintext %}
template-src/includes/blog-posts/byline.footer.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='byline.footer'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:if cond='data:footerBylines.notEmpty'>
  <div class='wrapper'>
    <b:include name='byline.footer'/>
  </div>
</b:if>
{% endhighlight %}

## Post items

Bagian-bagian ini dapat digunakan di bagian [post layout and styles](#post-layout-and-styles).

### Author name

Untuk menampilkan nama penulis.

###### Source

{% highlight plaintext %}
template-src/includes/blog-posts/post.authorName.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='post.authorName'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:include data='{ class: "class-name", noUrlClass: "class-name" }' name='post.authorName'/>
{% endhighlight %}

### Author image

Untuk menampilkan foto penulis.

###### Source

{% highlight plaintext %}
template-src/includes/blog-posts/post.authorImage.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='post.authorImage'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:include data='{ size: number, ratioWidth: number, ratioHeight: number, class: "class-name" }' name='post.authorImage'/>
{% endhighlight %}

**Example:**

Width = `size`, Height = ((`size` * `ratioHeight`) / `ratioWidth`).

128x128:

{% highlight html %}
<b:include data='{ size: 128, ratioWidth: 1, ratioHeight: 1, class: "class-name" }' name='post.authorImage'/>
{% endhighlight %}

### Dates

Untuk menampilkan tanggal diterbitkannya posting dan tanggal terakhir posting diperbarui.

###### Source

{% highlight plaintext %}
- template-src/includes/blog-posts/post.datePublished.xml
- template-src/includes/blog-posts/post.dateUpdated.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='post.datePublished'>...</b:includable>
<b:includable id='post.dateUpdated'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
Published: <b:include data='{ customFormat: "dd/MM/YYYY"|false, class: "class-name" }' name='post.datePublished'/>
Last updated: <b:include data='{ customFormat: "dd/MM/YYYY"|false, class: "class-name" }' name='post.dateUpdated'/>
{% endhighlight %}

**Format:**

<table class="table-responsive">
  <thead>
    <tr>
      <th>Period</th>
      <th>Symbol</th>
      <th>Example output</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">Year</td>
      <td><code>YY</code></td>
      <td><code>17</code></td>
      <td>Year, 2 digits</td>
    </tr>
    <tr>
      <td><code>YYYY</code></td>
      <td><code>2017</code></td>
      <td>Year, 4 digits</td>
    </tr>
    <tr>
      <td rowspan="5">Month</td>
      <td><code>M</code></td>
      <td><code>1</code>, <code>11</code></td>
      <td>Month, minimum 1 digit</td>
    </tr>
    <tr>
      <td><code>MM</code></td>
      <td><code>01</code>, <code>11</code></td>
      <td>Month, 2 digits</td>
    </tr>
    <tr>
      <td><code>MMM</code></td>
      <td><code>Jan</code>, <code>Nov</code></td>
      <td>Month, 3 Letters</td>
    </tr>
    <tr>
      <td><code>MMMM</code></td>
      <td><code>January</code>, <code>November</code></td>
      <td>Month, full name</td>
    </tr>
    <tr>
      <td><code>MMMMM</code></td>
      <td><code>J</code>, <code>N</code></td>
      <td>Month, 1st letter</td>
    </tr>
    <tr>
      <td rowspan="3">Week</td>
      <td><code>w</code></td>
      <td><code>1</code>, <code>11</code></td>
      <td>Week of the year, minimum 1 digit</td>
    </tr>
    <tr>
      <td><code>ww</code></td>
      <td><code>01</code>, <code>11</code></td>
      <td>Week of the year, 2 digits</td>
    </tr>
    <tr>
      <td><code>W</code></td>
      <td><code>4</code></td>
      <td>Week of the month, 1 digit</td>
    </tr>
    <tr>
      <td rowspan="10">Day</td>
      <td><code>d</code></td>
      <td><code>1</code>, <code>11</code></td>
      <td>Day of the month, minimum 1 digit</td>
    </tr>
    <tr>
      <td><code>dd</code></td>
      <td><code>01</code>, <code>11</code></td>
      <td>Day of the month, 2 digits</td>
    </tr>
    <tr>
      <td><code>D</code></td>
      <td><code>1</code>, <code>55</code>, <code>362</code></td>
      <td>Day of the year, minimum 1 digit</td>
    </tr>
    <tr>
      <td><code>DD</code></td>
      <td><code>01</code>, <code>55</code>, <code>362</code></td>
      <td>Day of the year, minimum 2 digits</td>
    </tr>
    <tr>
      <td><code>DDD</code></td>
      <td><code>001</code>, <code>055</code>, <code>362</code></td>
      <td>Day of the year, minimum 3 digits</td>
    </tr>
    <tr>
      <td><code>F</code></td>
      <td><code>3</code></td>
      <td>Xth day of the month. Example, the 3rd Tuesday of the month.</td>
    </tr>
    <tr>
      <td><code>E</code></td>
      <td><code>M</code>, <code>T</code></td>
      <td>Name of the day of the week. 1 letter</td>
    </tr>
    <tr>
      <td><code>EE</code></td>
      <td><code>Mo</code>, <code>Tu</code></td>
      <td>Name of the day of the week. 2 letters</td>
    </tr>
    <tr>
      <td><code>EEE</code></td>
      <td><code>Mon</code>, <code>Tue</code></td>
      <td>Name of the day of the week. 3 letters</td>
    </tr>
    <tr>
      <td><code>EEEE</code></td>
      <td><code>Monday</code>, <code>Tuesday</code></td>
      <td>Full name of the day of the week.</td>
    </tr>
    <tr>
      <td rowspan="3">Time of day</td>
      <td><code>aaaa</code></td>
      <td><code>AM</code>, <code>PM</code></td>
      <td rowspan="3">Names may vary depending on the region.</td>
    </tr>
    <tr>
      <td><code>bbbb</code></td>
      <td rowspan="2"><code>Morning</code>, <code>Afternoon</code>, <code>Evening</code></td>
    </tr>
    <tr>
      <td><code>BBBB</code></td>
    </tr>
    <tr>
      <td rowspan="4">Hour</td>
      <td><code>h</code></td>
      <td><code>1</code>, <code>11</code></td>
      <td>Time [1-12], minimum 1 digit</td>
    </tr>
    <tr>
      <td><code>hh</code></td>
      <td><code>01</code>, <code>11</code></td>
      <td>Time [1-12], 2 digits</td>
    </tr>
    <tr>
      <td><code>H</code></td>
      <td><code>1</code>, <code>21</code></td>
      <td>Time [0-23], minimum 1 digit</td>
    </tr>
    <tr>
      <td><code>HH</code></td>
      <td><code>01</code>, <code>21</code></td>
      <td>Time [0-23], 2 digits</td>
    </tr>
    <tr>
      <td rowspan="2">Minute</td>
      <td><code>m</code></td>
      <td><code>1</code>, <code>59</code></td>
      <td>Minute, minimum 1 digit</td>
    </tr>
    <tr>
      <td><code>mm</code></td>
      <td><code>01</code>, <code>59</code></td>
      <td>Minute, 2 digits</td>
    </tr>
  </tbody>
</table>

### Number of comments

Untuk menampilkan jumlah komentar per posting.

###### Source

{% highlight plaintext %}
template-src/includes/blog-posts/post.numComments.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='post.numComments'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:if cond='data:post.allowComments'>
  <b:include data='{ class: "class-name" }' name='post.numComments'/>
</b:if>
{% endhighlight %}

### Labels

Untuk menampilkan label posting.

###### Source

{% highlight plaintext %}
template-src/includes/blog-posts/post.labels.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='post.labels'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:include data='{ comma: true|false, max-results: number, class: "class-name", unlabelledClass: "class-name" }' name='post.labels'/>
{% endhighlight %}

### Featured image

Untuk menampilkan *featured image*.

##### Using HTML `<img>`

###### Source

{% highlight plaintext %}
template-src/includes/blog-posts/post.featuredImage.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='post.featuredImage'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:include data='{ size: number, sourceSet: [number]|false, sourceSizes: "sizes"|false, ratioWidth: number, ratioHeight: number, link: true|false, defaultNoImage: true|false, class: "class-name" }' name='post.featuredImage'/>
{% endhighlight %}

**Notation:**

Non-responsive: Width = `size`, Height = ((`size` * `ratioHeight`) / `ratioWidth`).

Responsive: Width = `sourceSet`, Height = ((`sourceSet` * `ratioHeight`) / `ratioWidth`).

**Example without `srcset` and `sizes`:**

{% highlight html %}
<b:include data='{ size: 512, sourceSet: false, sourceSizes: false, ratioWidth: 16, ratioHeight: 9, link: true, defaultNoImage: true, class: "class-name" }' name='post.featuredImage'/>
{% endhighlight %}

**Example with `srcset`, but without `sizes`:**

{% highlight html %}
<!-- Example 1: `false` -->
<b:include data='{ size: 256, sourceSet: [256, 512, 1280, 1600], sourceSizes: false, ratioWidth: 16, ratioHeight: 9, link: true, defaultNoImage: true, class: "class-name" }' name='post.featuredImage'/>

<!-- Example 2: `100vw` -->
<b:include data='{ size: 256, sourceSet: [256, 512, 1280, 1600], sourceSizes: "100vw", ratioWidth: 16, ratioHeight: 9, link: true, defaultNoImage: true, class: "class-name" }' name='post.featuredImage'/>
{% endhighlight %}

**Example with `srcset` and `sizes`:**

{% highlight html %}
<b:include data='{ size: 256, sourceSet: [256, 512, 1280, 1600], sourceSizes: "(max-width: 575px) 256px, (max-width: 767px) 512px, (max-width: 991px) 1280px, 1600px", ratioWidth: 16, ratioHeight: 9, link: true, defaultNoImage: true, class: "class-name" }' name='post.featuredImage'/>
{% endhighlight %}

##### Using CSS `background-image`

`post.featuredImageBg` tidak menggunakan `srcset` dan `sizes`.

###### Source

{% highlight plaintext %}
template-src/includes/blog-posts/post.featuredImageBg.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='post.featuredImageBg'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:include data='{ size: number, ratioWidth: number, ratioHeight: number, defaultNoImage: true|false, class: "class-name", style: "min-height: <number><units>;" }' name='post.featuredImageBg'/>
{% endhighlight %}

**Example:**

Width = `size`, Height = ((`size` * `ratioHeight`) / `ratioWidth`).

{% highlight html %}
<b:include data='{ size: 512, ratioWidth: 16, ratioHeight: 9, defaultNoImage: true|false, class: "class-name", style: "min-height: 180px;" }' name='post.featuredImageBg'/>
{% endhighlight %}

### Snippet

Untuk menampilkan ringkasan posting.

###### Source

{% highlight plaintext %}
template-src/includes/blog-posts/post.snippet.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='post.snippet'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:include data='{ length: number, links: true|false, linebreaks: true|false, ellipsis: true|false, notHasJumpLink: true|false }' name='post.snippet'/>
{% endhighlight %}

Ketika posting menggunakan *jump break* dan `notHasJumpLink: true` maka yang ditampilkan adalah `data:post.body`.

### Jump link

Untuk menampilkan *jump link*.

###### Source

{% highlight plaintext %}
template-src/includes/blog-posts/post.jumpLink.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='post.jumpLink'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:include data='{ class: "btn btn-primary", parentClass: "class-name" }' name='post.jumpLink'/>
{% endhighlight %}
