---
layout: docs
title: Sizing
description: Kelas-kelas untuk mengatur lebar suatu element dengan dukungan responsif.
group: utilities
---

Kelas-kelas untuk mengatur lebar suatu element dengan dukungan responsif.

## Options

`.w{none, -sm, -md, -lg, -xl}-{25, 50, 75, 100}`

- none: akan bekerja pada *extra small devices* (&lt;576px).
- sm: akan bekerja pada *small devices* (&ge;576px).
- md: akan bekerja pada *medium devices* (&ge;768px).
- lg: akan bekerja pada *large devices* (&ge;992px).
- xl: akan bekerja pada *extra large devices* (&ge;1200px).

- 25 = `width: 25%;`
- 50 = `width: 50%;`
- 75 = `width: 75%;`
- 100 = `width: 100%;`

**Catatan:** `.w-25`, `.w-50`, `.w-75`, dan `.w-100` adalah [kelas utilitas dari Bootstrap](https://v4-alpha.getbootstrap.com/utilities/sizing/).

## Example

Coba ubah ukuran *browser* Anda untuk melihat perubahannya.

<div class="bd-example bg-inverse">
  <div class="bg-faded text-gray p-1 mb-1 w-25 w-sm-50 w-md-75 w-lg-100">
    <div class="hidden-md-down hidden-xl-up"><code>.w-lg-100 (100%)</code></div>
    <div class="hidden-sm-down hidden-lg-up"><code>.w-md-75 (75%)</code></div>
    <div class="hidden-xs-down hidden-md-up"><code>.w-sm-50 (50%)</code></div>
    <div class="hidden-sm-up"><code>.w-25 (25%)</code></div>
  </div>
</div>

{% highlight html %}
<div class="w-25 w-sm-50 w-md-75 w-lg-100">
  <div class="hidden-md-down hidden-xl-up"><code>.w-lg-100 (100%)</code></div>
  <div class="hidden-sm-down hidden-lg-up"><code>.w-md-75 (75%)</code></div>
  <div class="hidden-xs-down hidden-md-up"><code>.w-sm-50 (50%)</code></div>
  <div class="hidden-sm-up"><code>.w-25 (25%)</code></div>
</div>
{% endhighlight %}
