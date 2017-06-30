---
layout: docs
title: Page types
description: Anda dapat mengatur tampilan blog, tampilan posting, kelas, dan lainnya menjadi berbeda di setiap tipe halaman.
group: core-template
---

Di bawah ini adalah seleksi tipe halaman menggunakan `data:view`.

{% highlight html %}
<b:comment>=== Homepage ===</b:comment>
<b:if cond='data:view.isHomepage'>
  <!-- https://example.blogspot.com -->
</b:if>

<b:comment>=== Item page ===</b:comment>
<b:if cond='data:view.isPost'>
  <!-- https://example.blogspot.com/<year>/<month>/<permalink>.html -->
</b:if>

<b:comment>=== Static page ===</b:comment>
<b:if cond='data:view.isPage'>
  <!-- https://example.blogspot.com/p/<permalink>.html -->
</b:if>

<b:comment>=== Search (label) page ===</b:comment>
<b:if cond='data:view.search.label'>
  <!-- https://example.blogspot.com/search/label/<name> -->
</b:if>

<b:comment>=== Search (query) page ===</b:comment>
<b:if cond='data:view.search.query'>
  <!-- https://example.blogspot.com/search?q=<query> -->
</b:if>

<b:comment>=== Search (default) page ===</b:comment>
<b:if cond='data:view.search and !data:view.search.label and !data:view.search.query'>
  <!-- https://example.blogspot.com/search -->
</b:if>

<b:comment>=== Archive page ===</b:comment>
<b:if cond='data:view.isArchive'>
  <!-- 1. https://example.blogspot.com/<year> -->
  <!-- 2. https://example.blogspot.com/<year>/<month> -->
  <!-- 3. https://example.blogspot.com/<year>_<month>_<day>_archive.html -->
</b:if>

<b:comment>=== Error page ===</b:comment>
<b:if cond='data:view.isError'>
  <!-- https://example.blogspot.com/404 -->
</b:if>

<b:comment>=== Preview page ===</b:comment>
<b:if cond='data:view.isPreview'>
  <!-- Preview page -->
</b:if>

<b:comment>=== Layout mode ===</b:comment>
<b:if cond='data:view.isLayoutMode'>
  <!-- https://www.blogger.com/blogger.g?blogID=<blogID>#pageelements -->
</b:if>
{% endhighlight %}
