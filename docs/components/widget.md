---
layout: docs
title: Widget
description: Komponen untuk tampilan widget.
group: components
---

Komponen untuk tampilan widget.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Base class

Komponen widget membutuhkan penggunaan kelas dasar `.wg`. `.wg` hanya mengatur `margin` dan ukuran judul widget (dapat diubah menggunakan kelas pengubah [ukuran judul widget](#font-size)).

**Catatan:** komponen widget tidak mengubah warna konten yang berada di dalamnya (di dalam `.widget-content`), dalam beberapa widget Anda perlu menyesuaikannya.

<div class="bd-example">
  <div class="wg">
    <div class="widget">
      <h2>Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:section class='wg' id='sectionId'></b:section>
{% endhighlight %}

## Widget title

Kelas-kelas untuk mengatur judul widget—warna, ukuran, perataan, dan menyembunyikan judul widget.

### Color

Kelas-kelas yang tersedia untuk mengubah warna judul widget.

<div class="bd-example bd-example-widget text-white">
  <div class="wg wg-title-gray-light">
    <div class="widget">
      <h2>Gray Light</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-title-gray-dark">
    <div class="widget">
      <h2>Gray Dark</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-title-white">
    <div class="widget">
      <h2>White</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-title-black">
    <div class="widget">
      <h2>Black</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-title-red">
    <div class="widget">
      <h2>Red</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-title-orange">
    <div class="widget">
      <h2>Orange</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-title-yellow">
    <div class="widget">
      <h2>Yellow</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-title-green">
    <div class="widget">
      <h2>Green</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-title-blue">
    <div class="widget">
      <h2>Blue</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-title-teal">
    <div class="widget">
      <h2>Teal</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-title-pink">
    <div class="widget">
      <h2>Pink</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-title-purple">
    <div class="widget">
      <h2>Purple</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:section class='wg wg-title-gray-light' id='sectionId'></b:section>
<b:section class='wg wg-title-gray-dark' id='sectionId'></b:section>
<b:section class='wg wg-title-white' id='sectionId'></b:section>
<b:section class='wg wg-title-black' id='sectionId'></b:section>
<b:section class='wg wg-title-red' id='sectionId'></b:section>
<b:section class='wg wg-title-orange' id='sectionId'></b:section>
<b:section class='wg wg-title-yellow' id='sectionId'></b:section>
<b:section class='wg wg-title-green' id='sectionId'></b:section>
<b:section class='wg wg-title-blue' id='sectionId'></b:section>
<b:section class='wg wg-title-teal' id='sectionId'></b:section>
<b:section class='wg wg-title-pink' id='sectionId'></b:section>
<b:section class='wg wg-title-purple' id='sectionId'></b:section>
{% endhighlight %}

### Font size

Untuk mengubah ukuran judul widget gunakan `.wg-title{-h1|-h2|-h3|-h4|-h5|-h6}`.

<div class="bd-example">
  <div class="wg wg-title-h1">
    <div class="widget">
      <h2>H1. Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-title-h2">
    <div class="widget">
      <h2>H2. Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-title-h3">
    <div class="widget">
      <h2>H3. Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-title-h4">
    <div class="widget">
      <h2>H4. Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-title-h5">
    <div class="widget">
      <h2>H5. Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-title-h6">
    <div class="widget">
      <h2>H6. Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:section class='wg wg-title-h1' id='sectionId'></b:section>
<b:section class='wg wg-title-h2' id='sectionId'></b:section>
<b:section class='wg wg-title-h3' id='sectionId'></b:section>
<b:section class='wg wg-title-h4' id='sectionId'></b:section>
<b:section class='wg wg-title-h5' id='sectionId'></b:section>
<b:section class='wg wg-title-h6' id='sectionId'></b:section>
{% endhighlight %}

### Alignment

Terdapat tiga kelas untuk perataan judul widget, yaitu rata kiri `.wg-title-left`, rata tengah `.wg-title-center`, dan rata kanan `.wg-title-right`.

<div class="bd-example">
  <div class="wg wg-title-left">
    <div class="widget">
      <h2>Left</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-title-center">
    <div class="widget">
      <h2>Center</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-title-right">
    <div class="widget">
      <h2>Right</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:section class='wg wg-title-left' id='sectionId'></b:section>
<b:section class='wg wg-title-center' id='sectionId'></b:section>
<b:section class='wg wg-title-right' id='sectionId'></b:section>
{% endhighlight %}

### Hide

Untuk menyembunyikan judul widget gunakan `.wg-title-hide`.

<div class="bd-example">
  <div class="wg wg-title-hide">
    <div class="widget">
      <h2>Hidden</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:section class='wg wg-title-hide' id='sectionId'></b:section>
{% endhighlight %}

## Widget box

### Basic example

Gunakan `.wg-box`, `.wg-box-{color}`, dan [`.wg-title-{color}`](#color).

<div class="bd-example bd-example-widget text-muted">
  <div class="wg wg-box wg-box-gray-light wg-title-gray-dark">
    <div class="widget">
      <h2>Gray Light</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-box wg-box-gray-dark wg-title-gray-light">
    <div class="widget">
      <h2>Gray Dark</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-box wg-box-white wg-title-black">
    <div class="widget">
      <h2>White</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-box wg-box-black wg-title-white">
    <div class="widget">
      <h2>Black</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-box wg-box-red wg-title-white">
    <div class="widget">
      <h2>Red</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-box wg-box-orange wg-title-white">
    <div class="widget">
      <h2>Orange</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-box wg-box-yellow wg-title-white">
    <div class="widget">
      <h2>Yellow</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-box wg-box-green wg-title-white">
    <div class="widget">
      <h2>Green</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-box wg-box-blue wg-title-white">
    <div class="widget">
      <h2>Blue</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-box wg-box-teal wg-title-white">
    <div class="widget">
      <h2>Teal</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-box wg-box-pink wg-title-white">
    <div class="widget">
      <h2>Pink</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-box wg-box-purple wg-title-white">
    <div class="widget">
      <h2>Purple</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:section class='wg wg-box wg-box-gray-light wg-title-gray-dark' id='sectionId'></b:section>
<b:section class='wg wg-box wg-box-gray-dark wg-title-gray-light' id='sectionId'></b:section>
<b:section class='wg wg-box wg-box-white wg-title-black' id='sectionId'></b:section>
<b:section class='wg wg-box wg-box-black wg-title-white' id='sectionId'></b:section>
<b:section class='wg wg-box wg-box-red wg-title-white' id='sectionId'></b:section>
<b:section class='wg wg-box wg-box-orange wg-title-white' id='sectionId'></b:section>
<b:section class='wg wg-box wg-box-yellow wg-title-white' id='sectionId'></b:section>
<b:section class='wg wg-box wg-box-green wg-title-white' id='sectionId'></b:section>
<b:section class='wg wg-box wg-box-blue wg-title-white' id='sectionId'></b:section>
<b:section class='wg wg-box wg-box-teal wg-title-white' id='sectionId'></b:section>
<b:section class='wg wg-box wg-box-pink wg-title-white' id='sectionId'></b:section>
<b:section class='wg wg-box wg-box-purple wg-title-white' id='sectionId'></b:section>
{% endhighlight %}

### Outline variants

Ubah `.wg-box-{color}` menjadi `.wg-box-outline-{color}`.

<div class="bd-example bd-example-widget text-white">
  <div class="wg wg-box wg-box-outline-gray-light wg-title-gray-light">
    <div class="widget">
      <h2>Gray Light</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-box wg-box-outline-gray-dark wg-title-gray-dark">
    <div class="widget">
      <h2>Gray Dark</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-box wg-box-outline-white wg-title-white">
    <div class="widget">
      <h2>White</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-box wg-box-outline-black wg-title-black">
    <div class="widget">
      <h2>Black</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-box wg-box-outline-red wg-title-red">
    <div class="widget">
      <h2>Red</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-box wg-box-outline-orange wg-title-orange">
    <div class="widget">
      <h2>Orange</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-box wg-box-outline-yellow wg-title-yellow">
    <div class="widget">
      <h2>Yellow</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-box wg-box-outline-green wg-title-green">
    <div class="widget">
      <h2>Green</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-box wg-box-outline-blue wg-title-blue">
    <div class="widget">
      <h2>Blue</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-box wg-box-outline-teal wg-title-teal">
    <div class="widget">
      <h2>Teal</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-box wg-box-outline-pink wg-title-pink">
    <div class="widget">
      <h2>Pink</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-box wg-box-outline-purple wg-title-purple">
    <div class="widget">
      <h2>Purple</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:section class='wg wg-box wg-box-outline-{color} wg-title-{color}' id='sectionId'></b:section>
{% endhighlight %}

### List groups

Buat list group (flush) di dalam widget box.

<div class="bd-example">
  <div class="wg wg-box wg-box-white wg-title-gray-dark">
    <div class="widget">
      <h2>Widget title</h2>
      <div class="widget-content">
        <div class="list-group list-group-flush">
          <a class="list-group-item list-group-item-action" href="#">Cras justo odio</a>
          <a class="list-group-item list-group-item-action" href="#">Dapibus ac facilisis in</a>
          <a class="list-group-item list-group-item-action" href="#">Morbi leo risus</a>
          <a class="list-group-item list-group-item-action" href="#">Porta ac consectetur ac</a>
          <a class="list-group-item list-group-item-action" href="#">Vestibulum at eros</a>
        </div>
      </div>
    </div><!-- /.widget -->
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:section class='wg wg-box wg-box-white wg-title-gray-dark' id='sectionId'></b:section>
{% endhighlight %}

Tambahkan gadget **HTML/JavaScript**. Kemudian, buat list group menggunakan `.list-group-flush`, lihat contoh di bawah ini.

{% highlight html %}
<div class="list-group list-group-flush">
  <a class="list-group-item list-group-item-action" href="#">Cras justo odio</a>
  <a class="list-group-item list-group-item-action" href="#">Dapibus ac facilisis in</a>
  <a class="list-group-item list-group-item-action" href="#">Morbi leo risus</a>
  <a class="list-group-item list-group-item-action" href="#">Porta ac consectetur ac</a>
  <a class="list-group-item list-group-item-action" href="#">Vestibulum at eros</a>
</div>
{% endhighlight %}

## Widget panel

### Basic example

Gunakan `.wg-panel`, `.wg-panel-{color}`, dan [`.wg-title-{color}`](#color).

<div class="bd-example bd-example-widget text-gray-dark">
  <div class="wg wg-panel wg-panel-gray-light wg-title-gray-dark">
    <div class="widget">
      <h2>Gray Light</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-panel wg-panel-gray-dark wg-title-gray-light">
    <div class="widget">
      <h2>Gray Dark</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-panel wg-panel-white wg-title-black">
    <div class="widget">
      <h2>White</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-panel wg-panel-black wg-title-white">
    <div class="widget">
      <h2>Black</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-panel wg-panel-red wg-title-white">
    <div class="widget">
      <h2>Red</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-panel wg-panel-orange wg-title-white">
    <div class="widget">
      <h2>Orange</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-panel wg-panel-yellow wg-title-white">
    <div class="widget">
      <h2>Yellow</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-panel wg-panel-green wg-title-white">
    <div class="widget">
      <h2>Green</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-panel wg-panel-blue wg-title-white">
    <div class="widget">
      <h2>Blue</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-panel wg-panel-teal wg-title-white">
    <div class="widget">
      <h2>Teal</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-panel wg-panel-pink wg-title-white">
    <div class="widget">
      <h2>Pink</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-panel wg-panel-purple wg-title-white">
    <div class="widget">
      <h2>Purple</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:section class='wg wg-panel wg-panel-gray-light wg-title-gray-dark' id='sectionId'></b:section>
<b:section class='wg wg-panel wg-panel-gray-dark wg-title-gray-light' id='sectionId'></b:section>
<b:section class='wg wg-panel wg-panel-white wg-title-black' id='sectionId'></b:section>
<b:section class='wg wg-panel wg-panel-black wg-title-white' id='sectionId'></b:section>
<b:section class='wg wg-panel wg-panel-red wg-title-white' id='sectionId'></b:section>
<b:section class='wg wg-panel wg-panel-orange wg-title-white' id='sectionId'></b:section>
<b:section class='wg wg-panel wg-panel-yellow wg-title-white' id='sectionId'></b:section>
<b:section class='wg wg-panel wg-panel-green wg-title-white' id='sectionId'></b:section>
<b:section class='wg wg-panel wg-panel-blue wg-title-white' id='sectionId'></b:section>
<b:section class='wg wg-panel wg-panel-teal wg-title-white' id='sectionId'></b:section>
<b:section class='wg wg-panel wg-panel-pink wg-title-white' id='sectionId'></b:section>
<b:section class='wg wg-panel wg-panel-purple wg-title-white' id='sectionId'></b:section>
{% endhighlight %}

### Outline variants

Ubah `.wg-panel-{color}` menjadi `.wg-panel-outline-{color}`.

<div class="bd-example bd-example-widget text-white">
  <div class="wg wg-panel wg-panel-outline-gray-light wg-title-gray-light">
    <div class="widget">
      <h2>Gray Light</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-panel wg-panel-outline-gray-dark wg-title-gray-dark">
    <div class="widget">
      <h2>Gray Dark</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-panel wg-panel-outline-white wg-title-white">
    <div class="widget">
      <h2>White</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-panel wg-panel-outline-black wg-title-black">
    <div class="widget">
      <h2>Black</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-panel wg-panel-outline-red wg-title-red">
    <div class="widget">
      <h2>Red</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-panel wg-panel-outline-orange wg-title-orange">
    <div class="widget">
      <h2>Orange</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-panel wg-panel-outline-yellow wg-title-yellow">
    <div class="widget">
      <h2>Yellow</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-panel wg-panel-outline-green wg-title-green">
    <div class="widget">
      <h2>Green</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-panel wg-panel-outline-blue wg-title-blue">
    <div class="widget">
      <h2>Blue</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-panel wg-panel-outline-teal wg-title-teal">
    <div class="widget">
      <h2>Teal</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-panel wg-panel-outline-pink wg-title-pink">
    <div class="widget">
      <h2>Pink</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-panel wg-panel-outline-purple wg-title-purple">
    <div class="widget">
      <h2>Purple</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:section class='wg wg-panel wg-panel-outline-{color} wg-title-{color}' id='sectionId'></b:section>
{% endhighlight %}

### Transparent contents

Gunakan `.wg-panel-{color}` dan tambahkan `.wg-panel-transparent`.

<div class="bd-example bd-example-widget text-white">
  <div class="wg wg-panel wg-panel-purple wg-panel-transparent wg-title-white">
    <div class="widget">
      <h2>Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg wg-panel wg-panel-orange wg-panel-transparent wg-title-black">
    <div class="widget">
      <h2>Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:section class='wg wg-panel wg-panel-purple wg-title-white wg-panel-transparent' id='sectionId'></b:section>
<b:section class='wg wg-panel wg-panel-orange wg-title-black wg-panel-transparent' id='sectionId'></b:section>
{% endhighlight %}

### Group

Tambahkan `.wg-panel-group`.

<div class="bd-example bd-example-widget text-gray-dark">
  <div class="wg wg-panel wg-panel-teal wg-title-white wg-panel-group">
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
<b:section class='wg wg-panel wg-panel-teal wg-title-white wg-panel-group' id='sectionId'></b:section>
{% endhighlight %}

### List groups

Buat list group (flush) di dalam widget panel.

<div class="bd-example">
  <div class="wg wg-panel wg-panel-purple wg-title-white">
    <div class="widget">
      <h2>Widget title</h2>
      <div class="widget-content">
        <div class="list-group list-group-flush">
          <a class="list-group-item list-group-item-action" href="#">Cras justo odio</a>
          <a class="list-group-item list-group-item-action" href="#">Dapibus ac facilisis in</a>
          <a class="list-group-item list-group-item-action" href="#">Morbi leo risus</a>
          <a class="list-group-item list-group-item-action" href="#">Porta ac consectetur ac</a>
          <a class="list-group-item list-group-item-action" href="#">Vestibulum at eros</a>
        </div>
      </div>
    </div><!-- /.widget -->
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:section class='wg wg-panel wg-panel-purple wg-title-white' id='sectionId'></b:section>
{% endhighlight %}

Tambahkan gadget **HTML/JavaScript**. Kemudian, buat list group menggunakan `.list-group-flush`, lihat contoh di bawah ini.

{% highlight html %}
<div class="list-group list-group-flush">
  <a class="list-group-item list-group-item-action" href="#">Cras justo odio</a>
  <a class="list-group-item list-group-item-action" href="#">Dapibus ac facilisis in</a>
  <a class="list-group-item list-group-item-action" href="#">Morbi leo risus</a>
  <a class="list-group-item list-group-item-action" href="#">Porta ac consectetur ac</a>
  <a class="list-group-item list-group-item-action" href="#">Vestibulum at eros</a>
</div>
{% endhighlight %}

## Columns

Gunakan `.wg-columns`.

Hanya bekerja pada perangkat kecil (`sm`) ke atas.

- Pada perangkat sedang (`md`) ke atas (&ge;768px) akan tampil tiga kolom.
- Pada perangkat kecil (`sm`) ke atas (&ge;576px) akan tampil dua kolom.
- Pada perangkat sangat kecil (`xs`) ke bawah (&lt;576px) hanya tampil satu kolom.

### Example

Urutan widget dimulai dari atas ke bawah dan dari kiri ke kanan.

<div class="bd-example bd-example-widget text-gray-dark">
  <div class="wg wg-columns wg-box wg-box-orange wg-title-black">
    <div class="widget">
      <h2>Widget title 1</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
    <div class="widget">
      <h2>Widget title 2</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
    <div class="widget">
      <h2>Widget title 3</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
    <div class="widget">
      <h2>Widget title 4</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
    <div class="widget">
      <h2>Widget title 5</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
    <div class="widget">
      <h2>Widget title 6</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:section class='wg wg-columns wg-box wg-box-orange wg-title-black' id='sectionId'></b:section>
{% endhighlight %}

## Grid

Sistem grid untuk widget.

### Options

<table class="table table-bordered table-striped table-responsive">
  <thead>
    <tr>
      <th></th>
      <th class="text-center">
        Extra small<br>
        <small>&lt;576px</small>
      </th>
      <th class="text-center">
        Small<br>
        <small>&ge;576px</small>
      </th>
      <th class="text-center">
        Medium<br>
        <small>&ge;768px</small>
      </th>
      <th class="text-center">
        Large<br>
        <small>&ge;992px</small>
      </th>
      <th class="text-center">
        Extra large<br>
        <small>&ge;1200px</small>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="text-nowrap" scope="row">Grid behavior</th>
      <td>Horizontal at all times</td>
      <td colspan="4">Collapsed to start, horizontal above breakpoints</td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">Class prefix</th>
      <td><code>.wg-</code></td>
      <td><code>.wg-sm-</code></td>
      <td><code>.wg-md-</code></td>
      <td><code>.wg-lg-</code></td>
      <td><code>.wg-xl-</code></td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row"># of columns</th>
      <td colspan="5">12</td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">Gutter width</th>
      <td colspan="5">30px (15px on each side of a column)</td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">Offsets</th>
      <td colspan="5">No</td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">Column ordering</th>
      <td colspan="5">No</td>
    </tr>
  </tbody>
</table>

Grid widget menggunakan `calc()` untuk mengkalkulasi lebar dan jarak widget. Menggunakan `calc()` adalah untuk menghindari penggunaan `padding` pada `.widget`, agar tidak terjadi konflik dengan CSS widget lainnya.

### Examples

<div class="bd-example bd-example-widget text-white">
  <div class="wg wg-title-white wg-sm-6 wg-md-4 wg-lg-3 wg-grid-example">
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
    <div class="widget">
      <h2>Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:section class='wg wg-title-white wg-sm-6 wg-md-4 wg-lg-3' id='sectionId'></b:section>
{% endhighlight %}

<div class="bd-example bd-example-widget text-gray-dark">
  <div class="wg wg-box wg-box-orange wg-title-black wg-sm-6 wg-md-4 wg-grid-example">
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
    <div class="widget">
      <h2>Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:section class='wg wg-box wg-box-orange wg-title-black wg-sm-6 wg-md-4' id='sectionId'></b:section>
{% endhighlight %}

<div class="bd-example bd-example-widget text-gray-dark">
  <div class="wg wg-panel wg-panel-orange wg-title-black wg-sm-6 wg-grid-example">
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
    <div class="widget">
      <h2>Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:section class='wg wg-panel wg-panel-orange wg-title-black wg-sm-6' id='sectionId'></b:section>
{% endhighlight %}
