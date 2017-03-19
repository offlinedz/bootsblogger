---
layout: docs
title: Widget panel
description: Tampilan widget dengan beragam warna latar belakang di bagian judul, juga tersedia variasi lainnya.
group: components
---

Tampilan widget dengan beragam warna latar belakang di bagian judul, juga tersedia variasi lainnya.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Examples

Gunakan `.wg-panel`, diikuti dengan `.wg-panel-{color}` dan [`.wg-title-{color}`]({{ site.baseurl }}/utilities/widget/#color).

<div class="bd-example bd-example-widget text-gray-dark">
  <div class="wg-panel wg-panel-gray-light wg-title-gray-dark">
    <div class="widget">
      <h2>Gray Light</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-panel wg-panel-gray-dark wg-title-gray-light">
    <div class="widget">
      <h2>Gray Dark</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-panel wg-panel-white wg-title-black">
    <div class="widget">
      <h2>White</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-panel wg-panel-black wg-title-white">
    <div class="widget">
      <h2>Black</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-panel wg-panel-red wg-title-white">
    <div class="widget">
      <h2>Red</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-panel wg-panel-orange wg-title-white">
    <div class="widget">
      <h2>Orange</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-panel wg-panel-yellow wg-title-white">
    <div class="widget">
      <h2>Yellow</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-panel wg-panel-green wg-title-white">
    <div class="widget">
      <h2>Green</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-panel wg-panel-blue wg-title-white">
    <div class="widget">
      <h2>Blue</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-panel wg-panel-teal wg-title-white">
    <div class="widget">
      <h2>Teal</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-panel wg-panel-pink wg-title-white">
    <div class="widget">
      <h2>Pink</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-panel wg-panel-purple wg-title-white">
    <div class="widget">
      <h2>Purple</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:section class='wg-panel wg-panel-gray-light wg-title-gray-dark' id='sectionId'></b:section>
<b:section class='wg-panel wg-panel-gray-dark wg-title-gray-light' id='sectionId'></b:section>
<b:section class='wg-panel wg-panel-white wg-title-black' id='sectionId'></b:section>
<b:section class='wg-panel wg-panel-black wg-title-white' id='sectionId'></b:section>
<b:section class='wg-panel wg-panel-red wg-title-white' id='sectionId'></b:section>
<b:section class='wg-panel wg-panel-orange wg-title-white' id='sectionId'></b:section>
<b:section class='wg-panel wg-panel-yellow wg-title-white' id='sectionId'></b:section>
<b:section class='wg-panel wg-panel-green wg-title-white' id='sectionId'></b:section>
<b:section class='wg-panel wg-panel-blue wg-title-white' id='sectionId'></b:section>
<b:section class='wg-panel wg-panel-teal wg-title-white' id='sectionId'></b:section>
<b:section class='wg-panel wg-panel-pink wg-title-white' id='sectionId'></b:section>
<b:section class='wg-panel wg-panel-purple wg-title-white' id='sectionId'></b:section>
{% endhighlight %}

## Outline variants

Ubah `.wg-panel-{color}` menjadi `.wg-panel-outline-{color}`.

<div class="bd-example bd-example-widget text-white">
  <div class="wg-panel wg-panel-outline-gray-light wg-title-gray-light">
    <div class="widget">
      <h2>Gray Light</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-panel wg-panel-outline-gray-dark wg-title-gray-dark">
    <div class="widget">
      <h2>Gray Dark</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-panel wg-panel-outline-white wg-title-white">
    <div class="widget">
      <h2>White</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-panel wg-panel-outline-black wg-title-black">
    <div class="widget">
      <h2>Black</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-panel wg-panel-outline-red wg-title-red">
    <div class="widget">
      <h2>Red</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-panel wg-panel-outline-orange wg-title-orange">
    <div class="widget">
      <h2>Orange</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-panel wg-panel-outline-yellow wg-title-yellow">
    <div class="widget">
      <h2>Yellow</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-panel wg-panel-outline-green wg-title-green">
    <div class="widget">
      <h2>Green</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-panel wg-panel-outline-blue wg-title-blue">
    <div class="widget">
      <h2>Blue</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-panel wg-panel-outline-teal wg-title-teal">
    <div class="widget">
      <h2>Teal</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-panel wg-panel-outline-pink wg-title-pink">
    <div class="widget">
      <h2>Pink</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-panel wg-panel-outline-purple wg-title-purple">
    <div class="widget">
      <h2>Purple</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:section class='wg-panel wg-panel-outline-{color} wg-title-{color}' id='sectionId'></b:section>
{% endhighlight %}

## Transparent contents

Gunakan `.wg-panel-{color}` dan tambahkan `.wg-panel-transparent`.

<div class="bd-example bd-example-widget text-white">
  <div class="wg-panel wg-panel-purple wg-panel-transparent wg-title-white">
    <div class="widget">
      <h2>Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-panel wg-panel-orange wg-panel-transparent wg-title-black">
    <div class="widget">
      <h2>Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:section class='wg-panel wg-panel-purple wg-panel-transparent wg-title-white' id='sectionId'></b:section>
<b:section class='wg-panel wg-panel-orange wg-panel-transparent wg-title-black' id='sectionId'></b:section>
{% endhighlight %}

## Group

Tambahkan `.wg-panel-group`.

<div class="bd-example bd-example-widget text-gray-dark">
  <div class="wg-panel wg-panel-teal wg-title-white wg-panel-group">
    <div class="widget">
      <h2>Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
    <div class="widget">
      <h2>Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
    <div class="widget">
      <h2>Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:section class='wg-panel wg-panel-teal wg-title-white wg-panel-group' id='sectionId'></b:section>
{% endhighlight %}
