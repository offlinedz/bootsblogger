---
layout: docs
title: Navmenu
description: Navmenu adalah pembungkus untuk navigasi dan elemen lainnya. Navmenu tampil secara vertikal.
group: components
---

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Basic example

Bungkus [konten](#supported-content) dengan `.navmenu`, dan tambahkan [skema warna](#color-schemes).

Navmenu-nav membutuhkan penggunaan [Bootstrap navs](https://v4-alpha.getbootstrap.com/components/navs/) untuk `.nav-item` dan `.nav-link`.

*Markup* navmenu-nav sangat fleksibel, Anda dapat menulisnya dengan beberapa cara berikut:

{% example html %}
<nav class="navmenu navmenu-light" style="background-color: #f7f7f7;">
  <a class="navmenu-brand" href="#">Bootsblogger</a>
  <!-- 1 -->
  <div class="navmenu-nav">
    <a class="nav-item nav-link" href="#">Nav item</a>
    <a class="nav-item nav-link" href="#">Nav item again</a>
    <a class="nav-item nav-link" href="#">Another nav item</a>
  </div>

  <!-- 2 -->
  <div class="navmenu-nav">
    <div class="nav-item">
      <a class="nav-link" href="#">Nav item</a>
    </div>
    <div class="nav-item">
      <a class="nav-link" href="#">Nav item again</a>
    </div>
    <div class="nav-item">
      <a class="nav-link" href="#">Another nav item</a>
    </div>
  </div>

  <!-- 3 -->
  <ul class="navmenu-nav">
    <li class="nav-item">
      <a class="nav-link" href="#">Nav item</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Nav item again</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Another nav item</a>
    </li>
  </ul>
</nav>
{% endexample %}

## Color schemes

Ubah warna navmenu dengan mengeset `background-color`, Anda dapat menggunakan kelas utilitas warna atau menggunakan *custom styles*.

Gunakan `.navmenu-light` atau `.navmenu-inverse` untuk menyesuaikan warna teks dengan warna latar belakang. `.navmenu-light` untuk latar belakang yang berwarna terang dan `.navmenu-inverse` untuk latar belakang yang berwarna gelap.

{% example html %}
<nav class="navmenu navmenu-light" style="background-color: #f7f7f7;">
  <a class="navmenu-brand" href="#">Bootsblogger</a>
  <div class="navmenu-nav">
    <a class="nav-item nav-link" href="#">Nav item</a>
    <a class="nav-item nav-link" href="#">Nav item again</a>
    <a class="nav-item nav-link" href="#">Another nav item</a>
  </div>

  <div class="navmenu-nav">
    <a class="nav-item nav-link active" href="#">Active</a>
    <a class="nav-item nav-link disabled" href="#">Disabled</a>
  </div>
</nav>
{% endexample %}

{% example html %}
<nav class="navmenu navmenu-inverse" style="background-color: #292b2c;">
  <a class="navmenu-brand" href="#">Bootsblogger</a>
  <div class="navmenu-nav">
    <a class="nav-item nav-link" href="#">Nav item</a>
    <a class="nav-item nav-link" href="#">Nav item again</a>
    <a class="nav-item nav-link" href="#">Another nav item</a>
  </div>

  <div class="navmenu-nav">
    <a class="nav-item nav-link active" href="#">Active</a>
    <a class="nav-item nav-link disabled" href="#">Disabled</a>
  </div>
</nav>
{% endexample %}

## Supported content

Konten yang dapat digunakan di dalam navmenu.

{% example html %}
<nav class="navmenu navmenu-light" style="background-color: #f7f7f7;">
  <!-- Brand -->
  <a class="navmenu-brand" href="#">Bootsblogger</a>

  <!-- Nav -->
  <div class="navmenu-nav">
    <a class="nav-item nav-link" href="#">Nav item</a>
    <a class="nav-item nav-link" href="#">Nav item again</a>
    <a class="nav-item nav-link" href="#">Another nav item</a>
  </div>

  <!-- Form -->
  <div class="navmenu-form">
    <form>
      <input class="form-control" type="text" placeholder="Search">
    </form>
  </div>

  <!-- Button -->
  <div class="navmenu-btn">
    <button type="button" class="btn btn-block btn-primary">Button</button>
  </div>

  <!-- Text -->
  <div class="navmenu-text">
    <p class="text-success">Hello, world!</p>
  </div>
</nav>
{% endexample %}

## Small nav

Nav item yang lebih kecil, tambahkan `.nav-link-sm` ke `.nav-link`.

{% example html %}
<nav class="navmenu navmenu-light" style="background-color: #f7f7f7;">
  <a class="navmenu-brand" href="#">Bootsblogger</a>
  <div class="navmenu-nav">
    <a class="nav-item nav-link nav-link-sm" href="#">Nav item</a>
    <a class="nav-item nav-link nav-link-sm" href="#">Nav item again</a>
    <a class="nav-item nav-link nav-link-sm" href="#">Another nav item</a>
  </div>
</nav>
{% endexample %}

Untuk memperkecil ukuran font dapat menggunakan `.small`:

{% example html %}
<nav class="navmenu navmenu-light" style="background-color: #f7f7f7;">
  <a class="navmenu-brand" href="#">Bootsblogger</a>
  <div class="navmenu-nav">
    <a class="nav-item nav-link nav-link-sm small" href="#">Nav item</a>
    <a class="nav-item nav-link nav-link-sm small" href="#">Nav item again</a>
    <a class="nav-item nav-link nav-link-sm small" href="#">Another nav item</a>
  </div>
</nav>
{% endexample %}

## Bordered

Nav item dengan `border` atas dan bawah, tambahkan `.nav-item-bordered` ke `.nav-item`.

{% example html %}
<nav class="navmenu navmenu-light" style="background-color: #f7f7f7;">
  <a class="navmenu-brand" href="#">Bootsblogger</a>
  <div class="navmenu-nav">
    <a class="nav-item nav-item-bordered nav-link" href="#">Nav item</a>
    <a class="nav-item nav-item-bordered nav-link" href="#">Nav item again</a>
    <a class="nav-item nav-item-bordered nav-link" href="#">Another nav item</a>
  </div>
</nav>
{% endexample %}

Atau:

{% example html %}
<nav class="navmenu navmenu-inverse" style="background-color: #292b2c;">
  <a class="navmenu-brand" href="#">Bootsblogger</a>
  <div class="navmenu-nav">
    <div class="nav-item nav-item-bordered">
      <a class="nav-link" href="#">Nav item</a>
    </div>
    <div class="nav-item nav-item-bordered">
      <a class="nav-link" href="#">Nav item again</a>
    </div>
    <div class="nav-item nav-item-bordered">
      <a class="nav-link" href="#">Another nav item</a>
    </div>
  </div>
</nav>
{% endexample %}

Dengan `.nav-link-sm`:

{% example html %}
<nav class="navmenu navmenu-light" style="background-color: #f7f7f7;">
  <a class="navmenu-brand" href="#">Bootsblogger</a>
  <div class="navmenu-nav">
    <a class="nav-item nav-item-bordered nav-link nav-link-sm" href="#">Nav item</a>
    <a class="nav-item nav-item-bordered nav-link nav-link-sm" href="#">Nav item again</a>
    <a class="nav-item nav-item-bordered nav-link nav-link-sm" href="#">Another nav item</a>
  </div>
</nav>
{% endexample %}

## Collapse

Menggunakan [Bootstrap collapse plugin](https://v4-alpha.getbootstrap.com/components/collapse/).

{% example html %}
<nav class="navmenu navmenu-light" style="background-color: #f7f7f7;">
  <a class="navmenu-brand" href="#">Bootsblogger</a>
  <div class="navmenu-nav">
    <a class="nav-item nav-link dropdown-toggle" data-toggle="collapse" href="#navmenuCollapseExample1" aria-expanded="false" aria-controls="navmenuCollapseExample1">
      Nav item collapse
    </a>
    <div class="collapse" id="navmenuCollapseExample1">
      <div style="border-left: 4px solid #ddd;">
        <a class="nav-item nav-link nav-link-sm small" href="#">Nav item</a>
        <a class="nav-item nav-link nav-link-sm small" href="#">Nav item again</a>
        <a class="nav-item nav-link nav-link-sm small" href="#">Another nav item</a>
      </div>
    </div>
    <a class="nav-item nav-link" href="#">Nav item again</a>
    <a class="nav-item nav-link" href="#">Another nav item</a>
  </div>
</nav>
{% endexample %}

{% example html %}
<nav class="navmenu navmenu-light" style="background-color: #f7f7f7;">
  <a class="navmenu-brand" href="#">Bootsblogger</a>
  <div class="navmenu-nav">
    <a class="nav-item nav-link dropdown-toggle" data-toggle="collapse" href="#navmenuCollapseExample2" aria-expanded="false" aria-controls="navmenuCollapseExample2">
      Nav item collapse
    </a>
    <div class="collapse" id="navmenuCollapseExample2">
      <a class="nav-item nav-item-bordered nav-link nav-link-sm small" href="#">Nav item</a>
      <a class="nav-item nav-item-bordered nav-link nav-link-sm small" href="#">Nav item again</a>
      <a class="nav-item nav-item-bordered nav-link nav-link-sm small" href="#">Another nav item</a>
    </div>
    <a class="nav-item nav-link" href="#">Nav item again</a>
    <a class="nav-item nav-link" href="#">Another nav item</a>
  </div>
</nav>
{% endexample %}

{% example html %}
<nav class="navmenu navmenu-inverse" style="background-color: #292b2c;">
  <a class="navmenu-brand" href="#">Bootsblogger</a>
  <div class="navmenu-nav">
    <div class="nav-item nav-item-bordered">
      <a class="nav-link dropdown-toggle" data-toggle="collapse" href="#navmenuCollapseExample3" aria-expanded="false" aria-controls="navmenuCollapseExample3">
        Nav item collapse
      </a>
      <div class="collapse" id="navmenuCollapseExample3">
        <div class="pb-2"><!-- padding bottom -->
          <a class="nav-item nav-link nav-link-sm small" href="#">Nav item</a>
          <a class="nav-item nav-link nav-link-sm small" href="#">Nav item again</a>
          <a class="nav-item nav-link nav-link-sm small" href="#">Another nav item</a>
        </div>
      </div>
    </div>
    <div class="nav-item nav-item-bordered">
      <a class="nav-link" href="#">Nav item again</a>
    </div>
    <div class="nav-item nav-item-bordered">
      <a class="nav-link" href="#">Another nav item</a>
    </div>
  </div>
</nav>
{% endexample %}

## Dropdowns

Menggunakan [Bootstrap dropdown plugin](https://v4-alpha.getbootstrap.com/components/dropdowns/).

{% example html %}
<nav class="navmenu navmenu-light" style="background-color: #f7f7f7;">
  <a class="navmenu-brand" href="#">Bootsblogger</a>
  <ul class="navmenu-nav">
    <li class="nav-item"><a class="nav-link" href="#">Nav item</a></li>
    <li class="nav-item"><a class="nav-link" href="#">Nav item again</a></li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navmenuDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown link
      </a>
      <div class="dropdown-menu" aria-labelledby="navmenuDropdownMenuLink">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </li>
    <li class="nav-item dropup">
      <a class="nav-link dropdown-toggle" href="#" id="navmenuDropupMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropup
      </a>
      <div class="dropdown-menu" aria-labelledby="navmenuDropupMenuLink">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </li>
  </ul>
</nav>
{% endexample %}

## Placement

{% example html %}
<nav class="navmenu navmenu-fixed-left navmenu-light" style="width: 15rem; background-color: #f7f7f7;">
  <a class="navmenu-brand" href="#">Fixed left</a>
  <div class="navmenu-nav">
    <a class="nav-item nav-link" href="#">Nav item</a>
    <a class="nav-item nav-link" href="#">Nav item again</a>
    <a class="nav-item nav-link" href="#">Another nav item</a>
  </div>
</nav>
{% endexample %}

{% example html %}
<nav class="navmenu navmenu-fixed-right navmenu-light" style="width: 15rem; background-color: #f7f7f7;">
  <a class="navmenu-brand" href="#">Fixed right</a>
  <div class="navmenu-nav">
    <a class="nav-item nav-link" href="#">Nav item</a>
    <a class="nav-item nav-link" href="#">Nav item again</a>
    <a class="nav-item nav-link" href="#">Another nav item</a>
  </div>
</nav>
{% endexample %}
