---
layout: docs
title: Sizing
description: Kelas tambahan untuk Bootstrap sizing utilities.
group: utilities
---

Kelas tambahan untuk [Bootstrap sizing utilities](https://v4-alpha.getbootstrap.com/utilities/sizing/).

## Responsive width

Format kelasnya tidak jauh berbeda dengan [Bootstrap sizing utilities](https://v4-alpha.getbootstrap.com/utilities/sizing/), hanya menambahkan `{breakpoint}`, format kelasnya adalah `.w-{breakpoint}-{25, 50, 75, 100}`.

### Example

Ubah ukuran layar *browser* Anda untuk melihat perubahannya.

<div class="bd-example bg-inverse">
  <div class="bg-grey-100 p-3 w-25 w-sm-50 w-md-75 w-lg-100">
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
