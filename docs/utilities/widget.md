---
layout: docs
title: Widget
description: Kelas-kelas utilitas untuk widget.
group: utilities
---

Kelas-kelas utilitas untuk widget.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Hidden

Gunakan `.wg-title-hidden` untuk menyembunyikan judul widget.

<div class="bd-example">
  <div class="wg-panel wg-panel-orange wg-title-hidden">
    <div class="widget">
      <h2>Hidden</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:section class='wg-panel wg-panel-orange wg-title-hidden' id='sectionId'></b:section>
{% endhighlight %}

## Alignment

Terdapat tiga kelas untuk perataan judul widget, yaitu rata kiri `.wg-title-left`, rata tengah `.wg-title-center`, dan rata kanan `.wg-title-right`.

<div class="bd-example">
  <div class="wg-panel wg-panel-orange wg-title-left">
    <div class="widget">
      <h2>Left</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-panel wg-panel-orange wg-title-center">
    <div class="widget">
      <h2>Center</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-panel wg-panel-orange wg-title-right">
    <div class="widget">
      <h2>Right</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:section class='wg-panel wg-panel-orange wg-title-left' id='sectionId'></b:section>
<b:section class='wg-panel wg-panel-orange wg-title-center' id='sectionId'></b:section>
<b:section class='wg-panel wg-panel-orange wg-title-right' id='sectionId'></b:section>
{% endhighlight %}

## Font size

Kelas-kelas untuk mengubah ukuran judul widget. `wg-title-h1` - `.wg-title-h6`.

<div class="bd-example">
  <div class="wg-panel wg-panel-orange wg-title-h1">
    <div class="widget">
      <h2>H1. Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-panel wg-panel-orange wg-title-h2">
    <div class="widget">
      <h2>H2. Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-panel wg-panel-orange wg-title-h3">
    <div class="widget">
      <h2>H3. Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-panel wg-panel-orange wg-title-h4">
    <div class="widget">
      <h2>H4. Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-panel wg-panel-orange wg-title-h5">
    <div class="widget">
      <h2>H5. Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-panel wg-panel-orange wg-title-h6">
    <div class="widget">
      <h2>H6. Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:section class='wg-panel wg-panel-orange wg-title-h1' id='sectionId'></b:section>
<b:section class='wg-panel wg-panel-orange wg-title-h2' id='sectionId'></b:section>
<b:section class='wg-panel wg-panel-orange wg-title-h3' id='sectionId'></b:section>
<b:section class='wg-panel wg-panel-orange wg-title-h4' id='sectionId'></b:section>
<b:section class='wg-panel wg-panel-orange wg-title-h5' id='sectionId'></b:section>
<b:section class='wg-panel wg-panel-orange wg-title-h6' id='sectionId'></b:section>
{% endhighlight %}

## Columns

Tampilan kolom widget seperti [Masonry](http://masonry.desandro.com/) dengan hanya menggunakan CSS. 

### Examples

Gunakan `.wg-columns`.

Hanya diterapkan pada perangkat kecil ke atas. Pada perangkat kecil ke atas (&ge;576px) akan tampil dua kolom dan pada perangkat sedang ke atas (&ge;768px) akan tampil tiga kolom, pada perangkat sangat kecil (&lt;576px) hanya tampil satu kolom.

Urutan widget dimulai dari atas ke bawah dan dari kiri ke kanan.

<div class="bd-example">
  <div class="wg-columns wg-panel wg-panel-teal">
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
<b:section class='wg-panel wg-panel-teal wg-columns' id='sectionId'></b:section>
{% endhighlight %}

<div class="bd-example">
  <div class="wg-columns wg-box wg-box-faded">
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
<b:section class='wg-box wg-box-faded wg-columns' id='sectionId'></b:section>
{% endhighlight %}

<div class="bd-example">
  <div class="wg-columns wg-basic wg-basic-blue">
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
<b:section class='wg-basic wg-basic-blue wg-columns' id='sectionId'></b:section>
{% endhighlight %}

## Grid

Sistem grid untuk widget.

### Grid options

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

### Examples

<div class="bd-example">
  <div class="wg-panel wg-panel-orange wg-sm-6 wg-md-4 wg-lg-3 wg-grid-example">
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
<b:section class='wg-panel wg-panel-orange wg-sm-6 wg-md-4 wg-lg-3' id='sectionId'></b:section>
{% endhighlight %}

<div class="bd-example">
  <div class="wg-box wg-box-faded wg-sm-6 wg-md-4 wg-grid-example">
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
<b:section class='wg-box wg-box-faded wg-sm-6 wg-md-4' id='sectionId'></b:section>
{% endhighlight %}

<div class="bd-example">
  <div class="wg-basic wg-basic-teal wg-sm-6 wg-grid-example">
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
<b:section class='wg-basic wg-basic-teal wg-sm-6' id='sectionId'></b:section>
{% endhighlight %}

### Notes

Grid widget menggunakan `calc()` untuk mengkalkulasi lebar dan jarak widget, lihat dukungan *browser* untuk [calc()](http://caniuse.com/#feat=calc). Menggunakan `calc()` adalah untuk menghindari penggunaan `padding` pada `.widget`, agar tidak merusak tampilan komponen widget lainnya, dikarenakan komponen widget lainnya seperti [widget panel]({{ site.baseurl }}/components/widget-panel/), [widget box]({{ site.baseurl }}/components/widget-box/) menerapkan CSS pada `.widget`, juga agar tidak mengganggu ketika Anda membuat komponen baru untuk widget. 
