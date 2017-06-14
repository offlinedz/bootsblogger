---
layout: docs
title: Sizing
description: Kelas tambahan untuk Bootstrap sizing utilities.
group: utilities
---

Baca dokumentasi [Bootstrap sizing utilities](https://v4-alpha.getbootstrap.com/utilities/sizing/).

## Responsive width

Format kelasnya tidak jauh berbeda, hanya menambahkan `{breakpoint}`, format kelasnya adalah `.w-{sm|md|lg|xl}-{25|50|75|100}`.

### Examples

Ubah ukuran layar *browser* Anda untuk melihat perubahannya.

{% example html %}
<div class="w-25 w-sm-50 w-md-75 w-lg-100 p-3 bg-faded">
  <div class="d-none d-lg-block"><code>.w-lg-100 (100%)</code></div>
  <div class="d-none d-md-block d-lg-none"><code>.w-md-75 (75%)</code></div>
  <div class="d-none d-sm-block d-md-none"><code>.w-sm-50 (50%)</code></div>
  <div class="d-sm-none"><code>.w-25 (25%)</code></div>
</div>
{% endexample %}
