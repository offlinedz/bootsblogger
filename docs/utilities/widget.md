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

## Title

Kelas utilitas untuk judul widget.

### Hidden

Untuk menyembunyikan judul widget gunakan `.wg-title-hidden`.

<div class="bd-example">
  <div class="wg-panel wg-panel-orange wg-title-black wg-title-hidden">
    <div class="widget">
      <h2>Hidden</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:section class='wg-panel wg-panel-orange wg-title-black wg-title-hidden' id='sectionId'></b:section>
{% endhighlight %}

### Alignment

Terdapat tiga kelas untuk perataan judul widget, yaitu rata kiri `.wg-title-left`, rata tengah `.wg-title-center`, dan rata kanan `.wg-title-right`.

<div class="bd-example">
  <div class="wg-panel wg-panel-orange wg-title-black wg-title-left">
    <div class="widget">
      <h2>Left</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-panel wg-panel-orange wg-title-black wg-title-center">
    <div class="widget">
      <h2>Center</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-panel wg-panel-orange wg-title-black wg-title-right">
    <div class="widget">
      <h2>Right</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:section class='wg-panel wg-panel-orange wg-title-black wg-title-left' id='sectionId'></b:section>
<b:section class='wg-panel wg-panel-orange wg-title-black wg-title-center' id='sectionId'></b:section>
<b:section class='wg-panel wg-panel-orange wg-title-black wg-title-right' id='sectionId'></b:section>
{% endhighlight %}

### Font size

Untuk mengubah ukuran judul widget gunakan `.wg-title-{h1, h2, h3, h4, h5, h6}`.

<div class="bd-example">
  <div class="wg-panel wg-panel-orange wg-title-black wg-title-h1">
    <div class="widget">
      <h2>H1. Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-panel wg-panel-orange wg-title-black wg-title-h2">
    <div class="widget">
      <h2>H2. Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-panel wg-panel-orange wg-title-black wg-title-h3">
    <div class="widget">
      <h2>H3. Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-panel wg-panel-orange wg-title-black wg-title-h4">
    <div class="widget">
      <h2>H4. Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-panel wg-panel-orange wg-title-black wg-title-h5">
    <div class="widget">
      <h2>H5. Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-panel wg-panel-orange wg-title-black wg-title-h6">
    <div class="widget">
      <h2>H6. Widget title</h2>
      <div class="widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </div>
    </div><!-- /.widget -->
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:section class='wg-panel wg-panel-orange wg-title-black wg-title-h1' id='sectionId'></b:section>
<b:section class='wg-panel wg-panel-orange wg-title-black wg-title-h2' id='sectionId'></b:section>
<b:section class='wg-panel wg-panel-orange wg-title-black wg-title-h3' id='sectionId'></b:section>
<b:section class='wg-panel wg-panel-orange wg-title-black wg-title-h4' id='sectionId'></b:section>
<b:section class='wg-panel wg-panel-orange wg-title-black wg-title-h5' id='sectionId'></b:section>
<b:section class='wg-panel wg-panel-orange wg-title-black wg-title-h6' id='sectionId'></b:section>
{% endhighlight %}

### Color

<div class="bd-example bg-inverse">
  <div class="wg-title-red mb-3">
    <div class="widget">
      <h2>Red</h2>
      <div class="widget-content">
        <p class="text-white">&lt;p class="text-white"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-title-pink mb-3">
    <div class="widget">
      <h2>Pink</h2>
      <div class="widget-content">
        <p class="text-white">&lt;p class="text-white"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-title-purple mb-3">
    <div class="widget">
      <h2>Purple</h2>
      <div class="widget-content">
        <p class="text-white">&lt;p class="text-white"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-title-deep-purple mb-3">
    <div class="widget">
      <h2>Deep Purple</h2>
      <div class="widget-content">
        <p class="text-white">&lt;p class="text-white"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-title-indigo mb-3">
    <div class="widget">
      <h2>Indigo</h2>
      <div class="widget-content">
        <p class="text-white">&lt;p class="text-white"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-title-blue mb-3">
    <div class="widget">
      <h2>Blue</h2>
      <div class="widget-content">
        <p class="text-white">&lt;p class="text-white"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-title-light-blue mb-3">
    <div class="widget">
      <h2>Light Blue</h2>
      <div class="widget-content">
        <p class="text-white">&lt;p class="text-white"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-basic wg-title-cyan">
    <div class="widget">
      <h2>Cyan</h2>
      <div class="widget-content">
        <p class="text-white">&lt;p class="text-white"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-title-teal mb-3">
    <div class="widget">
      <h2>Teal</h2>
      <div class="widget-content">
        <p class="text-white">&lt;p class="text-white"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-title-green mb-3">
    <div class="widget">
      <h2>Green</h2>
      <div class="widget-content">
        <p class="text-white">&lt;p class="text-white"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-title-light-green mb-3">
    <div class="widget">
      <h2>Light Green</h2>
      <div class="widget-content">
        <p class="text-white">&lt;p class="text-white"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-title-lime mb-3">
    <div class="widget">
      <h2>Lime</h2>
      <div class="widget-content">
        <p class="text-white">&lt;p class="text-white"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-title-yellow mb-3">
    <div class="widget">
      <h2>Yellow</h2>
      <div class="widget-content">
        <p class="text-white">&lt;p class="text-white"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-title-amber mb-3">
    <div class="widget">
      <h2>Amber</h2>
      <div class="widget-content">
        <p class="text-white">&lt;p class="text-white"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-title-orange mb-3">
    <div class="widget">
      <h2>Orange</h2>
      <div class="widget-content">
        <p class="text-white">&lt;p class="text-white"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-title-deep-orange mb-3">
    <div class="widget">
      <h2>Deep Orange</h2>
      <div class="widget-content">
        <p class="text-white">&lt;p class="text-white"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-title-brown mb-3">
    <div class="widget">
      <h2>Brown</h2>
      <div class="widget-content">
        <p class="text-white">&lt;p class="text-white"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-title-grey mb-3">
    <div class="widget">
      <h2>Grey</h2>
      <div class="widget-content">
        <p class="text-white">&lt;p class="text-white"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-title-light-grey mb-3">
    <div class="widget">
      <h2>Light Grey</h2>
      <div class="widget-content">
        <p class="text-white">&lt;p class="text-white"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-title-deep-grey mb-3">
    <div class="widget">
      <h2>Deep Grey</h2>
      <div class="widget-content">
        <p class="text-grey-800">&lt;p class="text-grey-800"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-title-blue-grey mb-3">
    <div class="widget">
      <h2>Blue Grey</h2>
      <div class="widget-content">
        <p class="text-white">&lt;p class="text-white"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-title-black mb-3">
    <div class="widget">
      <h2>Black</h2>
      <div class="widget-content">
        <p class="text-black">&lt;p class="text-black"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;</p>
      </div>
    </div><!-- /.widget -->
  </div>
  <div class="wg-title-white mb-3">
    <div class="widget">
      <h2>White</h2>
      <div class="widget-content">
        <p class="text-white">&lt;p class="text-white"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;</p>
      </div>
    </div><!-- /.widget -->
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:section class='wg-title-red' id='sectionId'></b:section>
<b:section class='wg-title-pink' id='sectionId'></b:section>
<b:section class='wg-title-purple' id='sectionId'></b:section>
<b:section class='wg-title-deep-purple' id='sectionId'></b:section>
<b:section class='wg-title-indigo' id='sectionId'></b:section>
<b:section class='wg-title-blue' id='sectionId'></b:section>
<b:section class='wg-title-light-blue' id='sectionId'></b:section>
<b:section class='wg-title-cyan' id='sectionId'></b:section>
<b:section class='wg-title-teal' id='sectionId'></b:section>
<b:section class='wg-title-green' id='sectionId'></b:section>
<b:section class='wg-title-light-green' id='sectionId'></b:section>
<b:section class='wg-title-lime' id='sectionId'></b:section>
<b:section class='wg-title-yellow' id='sectionId'></b:section>
<b:section class='wg-title-amber' id='sectionId'></b:section>
<b:section class='wg-title-orange' id='sectionId'></b:section>
<b:section class='wg-title-deep-orange' id='sectionId'></b:section>
<b:section class='wg-title-brown' id='sectionId'></b:section>
<b:section class='wg-title-grey' id='sectionId'></b:section>
<b:section class='wg-title-light-grey' id='sectionId'></b:section>
<b:section class='wg-title-deep-grey' id='sectionId'></b:section>
<b:section class='wg-title-blue-grey' id='sectionId'></b:section>
<b:section class='wg-title-black' id='sectionId'></b:section>
<b:section class='wg-title-white' id='sectionId'></b:section>
{% endhighlight %}

## Columns

Gunakan `.wg-columns`.

Hanya bekerja pada perangkat kecil (`sm`) ke atas.

- Pada perangkat sedang (`md`) ke atas (&ge;768px) akan tampil tiga kolom.
- Pada perangkat kecil (`sm`) ke atas (&ge;576px) akan tampil dua kolom.
- Pada perangkat sangat kecil (`xs`) ke bawah (&lt;576px) hanya tampil satu kolom.

### Examples

Urutan widget dimulai dari atas ke bawah dan dari kiri ke kanan.

<div class="bd-example">
  <div class="wg-columns wg-box wg-box-amber wg-title-black">
    <div class="widget">
      <h2>Widget title 1</h2>
      <div class="widget-content">
        <p class="text-black">&lt;p class="text-black"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;</p>
      </div>
    </div><!-- /.widget -->
    <div class="widget">
      <h2>Widget title 2</h2>
      <div class="widget-content">
        <p class="text-black">&lt;p class="text-black"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;</p>
        <p class="text-black">&lt;p class="text-black"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;</p>
      </div>
    </div><!-- /.widget -->
    <div class="widget">
      <h2>Widget title 3</h2>
      <div class="widget-content">
        <p class="text-black">&lt;p class="text-black"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;</p>
        <p class="text-black">&lt;p class="text-black"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;</p>
        <p class="text-black">&lt;p class="text-black"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;</p>
      </div>
    </div><!-- /.widget -->
    <div class="widget">
      <h2>Widget title 4</h2>
      <div class="widget-content">
        <p class="text-black">&lt;p class="text-black"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;</p>
      </div>
    </div><!-- /.widget -->
    <div class="widget">
      <h2>Widget title 5</h2>
      <div class="widget-content">
        <p class="text-black">&lt;p class="text-black"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;</p>
        <p class="text-black">&lt;p class="text-black"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;</p>
      </div>
    </div><!-- /.widget -->
    <div class="widget">
      <h2>Widget title 6</h2>
      <div class="widget-content">
        <p class="text-black">&lt;p class="text-black"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;</p>
      </div>
    </div><!-- /.widget -->
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:section class='wg-box wg-box-amber wg-title-black wg-columns' id='sectionId'></b:section>
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

Grid widget menggunakan `calc()` untuk mengkalkulasi lebar dan jarak widget. Menggunakan `calc()` adalah untuk menghindari penggunaan `padding` pada `.widget`, agar tidak terjadi konflik dengan CSS widget lainnya.

### Examples

<div class="bd-example">
  <div class="wg-panel wg-panel-orange wg-title-black wg-sm-6 wg-md-4 wg-lg-3 wg-grid-example">
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
<b:section class='wg-panel wg-panel-orange wg-title-black wg-sm-6 wg-md-4 wg-lg-3' id='sectionId'></b:section>
{% endhighlight %}

<div class="bd-example">
  <div class="wg-box wg-box-amber wg-title-black wg-sm-6 wg-md-4 wg-grid-example">
    <div class="widget">
      <h2>Widget title</h2>
      <div class="widget-content">
        <p class="text-black">&lt;p class="text-black"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;</p>
      </div>
    </div><!-- /.widget -->
    <div class="widget">
      <h2>Widget title</h2>
      <div class="widget-content">
        <p class="text-black">&lt;p class="text-black"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;</p>
      </div>
    </div><!-- /.widget -->
    <div class="widget">
      <h2>Widget title</h2>
      <div class="widget-content">
        <p class="text-black">&lt;p class="text-black"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;</p>
      </div>
    </div><!-- /.widget -->
  </div>
</div><!-- /.bd-example -->

{% highlight html %}
<b:section class='wg-box wg-box-amber wg-title-black wg-sm-6 wg-md-4' id='sectionId'></b:section>
{% endhighlight %}

<div class="bd-example">
  <div class="wg-basic wg-title-teal wg-sm-6 wg-grid-example">
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
<b:section class='wg-basic wg-title-teal wg-sm-6' id='sectionId'></b:section>
{% endhighlight %}
