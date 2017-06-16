---
layout: docs
title: Head
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
template-src/core/head/requiredMetaTags.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='requiredMetaTags'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:include name='requiredMetaTags'/>
{% endhighlight %}

## Custom all-head-content

Custom `<b:include data='blog' name='all-head-content'/>`.

###### Source

{% highlight plaintext %}
template-src/core/head/customAllHeadContent.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='customAllHeadContent'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:include name='customAllHeadContent'/>
{% endhighlight %}

## Custom title

Custom `<title>`.

###### Source

{% highlight plaintext %}
template-src/core/head/customTitle.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='customTitle'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:include name='customTitle'/>
{% endhighlight %}

## SERP and social tags

Tag `<meta>` dan `<link>` untuk <abbr title="Search Engine Results Page">SERP</abbr> dan jejaring sosial.
###### Source

{% highlight plaintext %}
- Default/SERP: template-src/core/head/defaultTags.xml
- Twitter Cards: template-src/core/head/twitterTags.xml
- Facebook Open Graph: template-src/core/head/facebookTags.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<!-- Default/SERP -->
<b:includable id='defaultTags'>...</b:includable>
<!-- Twitter Cards -->
<b:includable id='facebookTags'>...</b:includable>
<!-- Facebook Open Graph -->
<b:includable id='twitterTags'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:with value='"https://example.com/path/to/image.png"' var='image'>
<b:with value='"@username_of_website"' var='twitterUsernameWebsite'>
<b:with value='"@username_of_content_creator"' var='twitterUsernameCreator'>
  <b:include name='defaultTags'/>
  <b:include name='facebookTags'/>
  <b:include name='twitterTags'/>
</b:with>
</b:with>
</b:with>
{% endhighlight %}

## Layout mode CSS

CSS untuk <a href="#" data-toggle="modal" data-target=".image-blogger-layout">Blogger layout</a>.

###### Source

{% highlight plaintext %}
template-src/core/head/layout-mode.css
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='layoutModeCss'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:include name='layoutModeCss'/>
{% endhighlight %}

### Grid usage

Gunakan pada elemen yang di dalamnya terdapat tag `b:section`. Sesuaikan dengan kerangka template.

{% highlight html %}
<div class='container'>
  <!-- Main -->
  <main class='main blogger-col-8' id='main'>
    <b:section class='' id='main-section' maxwidgets='1' name='Main' showaddelement='no'></b:section>
  </main><!-- /.main -->

  <!-- Sidebar -->
  <aside class='sidebar blogger-col-4' id='sidebar'>
    <b:section class='' id='sidebar-section' name='Sidebar'></section>
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
      <b:section class='' id='main-section' maxwidgets='1' name='Main' showaddelement='no'></b:section>
    </main><!-- /.main -->

    <!-- Sidebar -->
    <aside class='sidebar col-md-3 blogger-col-3' id='sidebar'>
      <b:section class='' id='sidebar-section' name='Sidebar'></section>
    </aside><!-- /.sidebar -->
  </div><!-- /.row -->
</div><!-- /.container -->
{% endhighlight %}

{% highlight html %}
<div class='container'>
  <div class='row'>
    <!-- Main -->
    <main class='main col-md-9 blogger-col-8' id='main'>
      <b:section class='' id='main-section' maxwidgets='1' name='Main' showaddelement='no'></b:section>
    </main><!-- /.main -->

    <!-- Sidebar -->
    <aside class='sidebar col-md-3 blogger-col-4' id='sidebar'>
      <b:section class='' id='sidebar-section' name='Sidebar'></section>
    </aside><!-- /.sidebar -->
  </div><!-- /.row -->
</div><!-- /.container -->
{% endhighlight %}
