---
layout: docs
title: Spacing
description: Kelas tambahan untuk Bootstrap spacing utilities.
group: utilities
---

Lihat dokumentasi [Bootstrap spacing utilities](https://v4-alpha.getbootstrap.com/utilities/spacing/).

## Negative margin

Format kelasnya tidak jauh berbeda, hanya menambahkan `n` pada `{property}`, format kelasnya adalah `.mn{sides}-{size}` untuk `xs` dan `.mn{sides}-{breakpoint}-{size}` untuk `sm`, `md`, `lg`, dan `xl`.

**Catatan:** kelas utilitas *margin* negatif tidak memiliki ukuran `0` (`.mn{sides}-0`).

### Examples

{% example html %}
<div class="p-3 bg-inverse">
  <div class="mnt-3 bg-faded" style="height: 100px;"></div>
</div>
{% endexample %}

{% example html %}
<div class="p-3 bg-inverse">
  <div class="mnr-3 bg-faded" style="height: 100px;"></div>
</div>
{% endexample %}

{% example html %}
<div class="p-3 bg-inverse">
  <div class="mnb-3 bg-faded" style="height: 100px;"></div>
</div>
{% endexample %}

{% example html %}
<div class="p-3 bg-inverse">
  <div class="mnl-3 bg-faded" style="height: 100px;"></div>
</div>
{% endexample %}

{% example html %}
<div class="p-3 bg-inverse">
  <div class="mnx-3 bg-faded" style="height: 100px;"></div>
</div>
{% endexample %}

{% example html %}
<div class="p-3 bg-inverse">
  <div class="mny-3 bg-faded" style="height: 100px;"></div>
</div>
{% endexample %}

{% example html %}
<div class="p-3 bg-inverse">
  <div class="mn-3 bg-faded" style="height: 100px;"></div>
</div>
{% endexample %}
