---
layout: docs
title: Custom card
description: Fitur tambahan untuk komponen card yang tidak disediakan oleh Bootstrap, yang sangat berguna untuk sebuah blog.
group: components
redirect_from: "/components/"
---

Baca dokumentasi [Bootstrap card](https://v4-alpha.getbootstrap.com/components/card/).

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Title links

Gunakan `.card-title-link`.

{% example html %}
<div class="card mb-3">
  <div class="card-block">
    <h2 class="card-title"><a class="card-title-link" href="#">Card title</a></h2>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </div>
</div>

<div class="card card-inverse card-primary">
  <div class="card-block">
    <h2 class="card-title"><a class="card-title-link" href="#">Card title</a></h2>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </div>
</div>
{% endexample %}

## Left and right image caps

Untuk membuat gambar dan konten tampil secara horizontal membutuhkan penggunaan sistem grid dan kelas-kelas berikut:

Gambar:

- `.card-img-left`
- `.card-img-right`

Elemen pembungkus untuk `.card-img-left` dan `.card-img-right`:

- `.card-block-img-left`
- `.card-block-img-left-sm`
- `.card-block-img-left-md`
- `.card-block-img-left-lg`
- `.card-block-img-left-xl`
- `.card-block-img-right`
- `.card-block-img-right-sm`
- `.card-block-img-right-md`
- `.card-block-img-right-lg`
- `.card-block-img-right-xl`

### Examples

Pelajari beberapa contoh di bawah ini.

#### Non-responsive

<div class="bd-example">
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-3 col-sm-4">
        <div class="card-block-img-left">
          <img class="card-img-left" data-src="holder.js/100px180/?auto=yes" alt="Card image cap">
        </div>
      </div>
      <div class="col-9 col-sm-8">
        <div class="card-block">
          <h4 class="card-title">Card title</h4>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="row no-gutters">
      <div class="col-9 col-sm-8">
        <div class="card-block">
          <h4 class="card-title">Card title</h4>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
      <div class="col-3 col-sm-4">
        <div class="card-block-img-right">
          <img class="card-img-right" data-src="holder.js/100px180/?auto=yes" alt="Card image cap">
        </div>
      </div>
    </div>
  </div>
</div>

{% highlight html %}
<div class="card mb-3">
  <div class="row no-gutters">
    <div class="col-3 col-sm-4">
      <div class="card-block-img-left">
        <img class="card-img-left" src="..." alt="...">
      </div>
    </div>
    <div class="col-9 col-sm-8">
      <div class="card-block">
        <h4 class="card-title">...</h4>
        <p class="card-text">...</p>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="row no-gutters">
    <div class="col-9 col-sm-8">
      <div class="card-block">
      <h4 class="card-title">...</h4>
      <p class="card-text">...</p>
      </div>
    </div>
    <div class="col-3 col-sm-4">
      <div class="card-block-img-right">
        <img class="card-img-right" src="..." alt="...">
      </div>
    </div>
  </div>
</div>
{% endhighlight %}

#### Responsive

<div class="bd-example">
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-sm-3 col-md-4">
        <div class="card-block-img-left-sm">
          <img class="card-img-left" data-src="holder.js/100px180/?auto=yes" alt="Card image cap">
        </div>
      </div>
      <div class="col-sm-9 col-md-8">
        <div class="card-block">
          <h4 class="card-title">Card title</h4>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="row no-gutters">
      <div class="col-md-9 col-lg-8">
        <div class="card-block">
          <h4 class="card-title">Card title</h4>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
      <div class="col-md-3 col-lg-4">
        <div class="card-block-img-right-md">
          <img class="card-img-right" data-src="holder.js/100px180/?auto=yes" alt="Card image cap">
        </div>
      </div>
    </div>
  </div>
</div>

{% highlight html %}
<!-- `sm` -->
<div class="card mb-3">
  <div class="row no-gutters">
    <div class="col-sm-3 col-md-4">
      <div class="card-block-img-left-sm">
        <img class="card-img-left" src="..." alt="...">
      </div>
    </div>
    <div class="col-sm-9 col-md-8">
      <div class="card-block">
        <h4 class="card-title">...</h4>
        <p class="card-text">...</p>
      </div>
    </div>
  </div>
</div>

<!-- `md` -->
<div class="card">
  <div class="row no-gutters">
    <div class="col-md-9 col-lg-8">
      <div class="card-block">
      <h4 class="card-title">...</h4>
      <p class="card-text">...</p>
      </div>
    </div>
    <div class="col-md-3 col-lg-4">
      <div class="card-block-img-right-md">
        <img class="card-img-right" src="..." alt="...">
      </div>
    </div>
  </div>
</div>
{% endhighlight %}

#### Background images

Tampilkan gambar dengan CSS `background-image`. Tambahkan `.card-img-cover`. Membutuhkan penggunaan CSS `min-height`.

<div class="bd-example">
  <div class="card">
    <div class="row no-gutters">
      <div class="col-sm-3 col-md-4">
        <div class="card-block-img-left-sm card-img-cover holderjs" style="min-height: 180px;" data-background-src="?holder.js/800x180/?text=B"></div>
      </div>
      <div class="col-sm-9 col-md-8">
        <div class="card-block">
          <h4 class="card-title">Card title</h4>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </div>
  </div>
</div>

{% highlight html %}
<div class="card">
  <div class="row no-gutters">
    <div class="col-sm-3 col-md-4">
      <div class="card-block-img-left-sm card-img-cover" style="min-height: 180px; background-image: url(...);"></div>
    </div>
    <div class="col-sm-9 col-md-8">
      <div class="card-block">
        <h4 class="card-title">...</h4>
        <p class="card-text">...</p>
      </div>
    </div>
  </div>
</div>
{% endhighlight %}
