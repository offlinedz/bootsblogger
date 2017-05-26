---
layout: docs
title: Navmenu
description: Navmenu adalah pembungkus untuk navigasi dan elemen lainnya.
group: components
---

Navmenu adalah pembungkus untuk navigasi dan elemen lainnya. Navmenu tampil secara vertikal.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Basic example

Bungkus semua konten dengan `.navmenu`, dan tambahkan [skema warna](#color-schemes).

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
</nav>
{% endexample %}

## Supported content

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
    <p class="text-success">Bootsblogger is awesome.</p>
  </div>
</nav>
{% endexample %}

## Dropdowns

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
