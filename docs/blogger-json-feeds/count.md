---
layout: docs
title: Count
description: Untuk menampilkan jumlah posting dan komentar.
group: blogger-json-feeds
---

Untuk menampilkan jumlah posting dan komentar.

Nama fungsi: `count`.

## Examples

### Jumlah semua posting

{% example html %}
<p>Jumlah semua posting = <script src="https://blogger.googleblog.com/feeds/posts/summary?max-results=0&amp;alt=json-in-script&amp;callback=count"></script></p>
{% endexample %}

### Jumlah posting berdasarkan label

{% example html %}
<p>Jumlah posting dengan label <strong>Blogger</strong> = <script src="https://blogger.googleblog.com/feeds/posts/summary/-/Blogger?max-results=0&amp;alt=json-in-script&amp;callback=count"></script></p>
{% endexample %}

### Jumlah semua komentar

{% example html %}
<p>Jumlah semua komentar = <script src="https://blogger.googleblog.com/feeds/comments/summary?max-results=0&amp;alt=json-in-script&amp;callback=count"></script></p>
{% endexample %}

### Jumlah komentar dari posting tertentu

{% example html %}
<p>Jumlah komentar dari posting dengan judul: More custom template flexibility, ID: <code>6241485945632143555</code> = <script src="https://blogger.googleblog.com/feeds/6241485945632143555/comments/summary?max-results=0&amp;alt=json-in-script&amp;callback=count"></script></p>
{% endexample %}

**Catatan:** fungsi ini hanya dapat menghitung komentar yang ada di dalam sistem komentar bawaan Blogger.
