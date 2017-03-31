---
layout: docs
title: Body class
description: Terdapat kelas pada `<body>`, yang berbeda-beda berdasarkan tipe halaman.
group: core-template
---

Terdapat kelas pada `<body>`, yang berbeda-beda berdasarkan tipe halaman.

{% highlight html %}
<b:class cond='data:view.isHomepage' name='blog-view-home'/>
<b:class cond='data:view.isPost' name='blog-view-item'/>
<b:class cond='data:view.isPage' name='blog-view-static'/>
<b:class cond='data:view.search.label' name='blog-view-search-label'/>
<b:class cond='data:view.search.query' name='blog-view-search-query'/>
<b:class cond='data:view.search and !data:view.search.label and !data:view.search.query' name='blog-view-search-default'/>
<b:class cond='data:view.isArchive' name='blog-view-archive'/>
<b:class cond='data:view.isError' name='blog-view-error'/>
<b:class cond='data:view.isPreview' name='blog-view-preview'/>
{% endhighlight %}

{% highlight html %}
<!-- Homepage -->
<body class="blog-view-home">...</body>

<!-- Item page -->
<body class="blog-view-item">...</body>

<!-- Static page -->
<body class="blog-view-static">...</body>

<!-- Search (label) page -->
<body class="blog-view-search-label">...</body>

<!-- Search (query) page -->
<body class="blog-view-search-query">...</body>

<!-- Search (default) page -->
<body class="blog-view-search-default">...</body>

<!-- Archive page -->
<body class="blog-view-archive">...</body>

<!-- Error page -->
<body class="blog-view-error">...</body>

<!-- Preview page -->
<body class="blog-view-preview">...</body>
{% endhighlight %}

Contoh pemanfaatan:

{% highlight css %}
.blog-view-item .element {
  background-color: #e07b53;
}

.blog-view-search-label .element {
  display: none;
}
{% endhighlight %}
