---
layout: docs
title: Includes - Head
description: Bagian-bagian kode yang digunakan di dalam tag head HTML.
group: core-template
---

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Required meta tags

- Set charset dengan `utf-8`.
- Gunakan tag meta responsif `viewport`.

###### Source

{% highlight plaintext %}
template-src/includes/head/head.requiredMetaTags.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='head.requiredMetaTags'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:include name='head.requiredMetaTags'/>
{% endhighlight %}

## All-head-content

Custom `<b:include data='blog' name='all-head-content'/>`.

###### Source

{% highlight plaintext %}
template-src/includes/head/head.allHeadContent.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='head.allHeadContent'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:include name='head.allHeadContent'/>
{% endhighlight %}

## Title

Judul dokumen atau tag `<title>`.

###### Source

{% highlight plaintext %}
template-src/includes/head/head.title.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='head.title'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:include name='head.title'/>
{% endhighlight %}

## SERP and social tags

Tag `<meta>` dan `<link>` untuk <abbr title="Search Engine Results Page">SERP</abbr> dan jejaring sosial.
###### Source

{% highlight plaintext %}
- Default/SERP: template-src/includes/head/head.defaultTags.xml
- Twitter Cards: template-src/includes/head/head.twitterTags.xml
- Facebook Open Graph: template-src/includes/head/head.facebookTags.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<!-- Default/SERP -->
<b:includable id='head.defaultTags'>...</b:includable>
<!-- Twitter Cards -->
<b:includable id='head.facebookTags'>...</b:includable>
<!-- Facebook Open Graph -->
<b:includable id='head.twitterTags'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:with value='"https://example.com/path/to/image.png"' var='image'>
<b:with value='"@username_of_website"' var='twitterUsernameWebsite'>
<b:with value='"@username_of_content_creator"' var='twitterUsernameCreator'>
  <b:include name='head.defaultTags'/>
  <b:include name='head.facebookTags'/>
  <b:include name='head.twitterTags'/>
</b:with>
</b:with>
</b:with>
{% endhighlight %}

## Layout mode CSS

CSS untuk <a href="#" data-toggle="modal" data-target=".image-blogger-layout">Blogger layout</a>.

###### Source

{% highlight plaintext %}
template-src/includes/head/head.layout-mode.css
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='head.layoutModeCss'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:include name='head.layoutModeCss'/>
{% endhighlight %}

### Grid usage

Gunakan pada elemen yang di dalamnya terdapat tag `b:section`. Sesuaikan dengan kerangka template.

{% highlight html %}
<div class='container'>
  <!-- Main -->
  <main class='main blogger-col-8' id='main'>
    <b:section class='b-section-main' id='b-section-main' maxwidgets='1' name='Main' showaddelement='no'></b:section>
  </main><!-- /.main -->

  <!-- Sidebar -->
  <aside class='sidebar blogger-col-4' id='sidebar'>
    <b:section class='b-section-sidebar' id='b-section-sidebar' name='Sidebar'></section>
  </aside><!-- /.sidebar -->
</div>
{% endhighlight %}

Hasilnya akan seperti pada <a href="#" data-toggle="modal" data-target=".image-blogger-layout">gambar ini</a>.

Contoh-contoh lainnya:

{% highlight html %}
<div class='container'>
  <div class='row'>
    <!-- Main -->
    <main class='main col-md-9 blogger-col-9' id='main'>
      <b:section class='b-section-main' id='b-section-main' maxwidgets='1' name='Main' showaddelement='no'></b:section>
    </main><!-- /.main -->

    <!-- Sidebar -->
    <aside class='sidebar col-md-3 blogger-col-3' id='sidebar'>
      <b:section class='b-section-sidebar' id='b-section-sidebar' name='Sidebar'></section>
    </aside><!-- /.sidebar -->
  </div><!-- /.row -->
</div><!-- /.container -->
{% endhighlight %}

{% highlight html %}
<div class='container'>
  <div class='row'>
    <!-- Main -->
    <main class='main col-md-9 blogger-col-8' id='main'>
      <b:section class='b-section-main' id='b-section-main' maxwidgets='1' name='Main' showaddelement='no'></b:section>
    </main><!-- /.main -->

    <!-- Sidebar -->
    <aside class='sidebar col-md-3 blogger-col-4' id='sidebar'>
      <b:section class='b-section-sidebar' id='b-section-sidebar' name='Sidebar'></section>
    </aside><!-- /.sidebar -->
  </div><!-- /.row -->
</div><!-- /.container -->
{% endhighlight %}
