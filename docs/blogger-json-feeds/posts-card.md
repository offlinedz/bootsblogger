---
layout: docs
title: Posts - cards
description: Menampilkan data JSON posting dan halaman statis menggunakan komponen Bootstrap cards.
group: blogger-json-feeds
---

Menampilkan data JSON posting dan halaman statis menggunakan komponen [Bootstrap cards](https://v4-alpha.getbootstrap.com/components/card/).

## Config

Nama fungsi: `postsCard`.

{% highlight html %}
<script>
var config = {
  containerID: 'id',

  content: {
    numchars: 'full'|number|0 to disable,
    title: {
      tag: 'h1|h2|h3|h4|h5|h6',
      link: {
        active: true|false,
        style: ''
      }
    },
    more: {
      active: true|false,
      text: 'Read more',
      style: 'btn btn-primary'
    }
  },
  author: {
    active: true|false,
    placement: 'header|footer',
    before: '<i class="fa fa-user" aria-hidden="true"></i> Posted by ',
    after: '',
    none: 'Anonymous',
    avatar: {
      active: true|false,
      size: '24'
    }
  },
  date: {
    active: true|false,
    placement: 'header|footer',
    before: '<i class="fa fa-clock-o" aria-hidden="true"></i> Posted on ',
    after: '',
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  },
  numComments: {
    active: true|false,
    placement: 'header|footer',
    before: '<i class="fa fa-comments" aria-hidden="true"></i> ',
    after: ''
  },
  labels: {
    active: true|false,
    placement: 'header|footer',
    before: '<i class="fa fa-tags" aria-hidden="true"></i> Labels: ',
    after: '',
    none: 'Unlabelled'
  },
  thumbnail: {
    active: true|false,
    placement: 'top|bottom',
    size: '512',
    none: 'https://placehold.it/512/eee/777?text=NO+IMAGE+AVAILABLE'
  },
  group: {
    active: true|false
  },
  deck: {
    active: true|false
  },
  columns: {
    active: true|false
  },
  grid: {
    active: true|false,
    column: 'col'
  },
  classes: {
    card: 'Add class to `.card`',
    image: 'Add class to `.card-img-*`',
    content: 'Add class to `.card-block`',
    header: 'Add class to `.card-header`',
    footer: 'Add class to `.card-footer`'
  }
}
</script>
{% endhighlight %}

**Catatan:** `group`, `deck`, `columns`, dan `grid` pilih salah satu yang bernilai `true` atau semua `false`.

## Example

{% example html %}
<div class="" id="example-result-container">
  <div class="text-center">Loading...</div>
</div>
<script>
var config = {
  containerID: 'example-result-container',

  content: {
    numchars: 100,
    title: {
      tag: 'h3',
      link: {
        active: false,
        style: ''
      }
    },
    more: {
      active: true,
      text: 'Read more',
      style: 'btn btn-primary'
    }
  },
  author: {
    active: false,
    placement: '',
    before: '',
    after: '',
    none: '',
    avatar: {
      active: false,
      size: ''
    }
  },
  date: {
    active: true,
    placement: 'footer',
    before: '',
    after: '',
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  },
  numComments: {
    active: false,
    placement: '',
    before: '',
    after: ''
  },
  labels: {
    active: false,
    placement: '',
    before: '',
    after: '',
    none: ''
  },
  thumbnail: {
    active: true,
    placement: 'top',
    size: '512',
    none: 'https://placehold.it/512/eee/777?text=NO+IMAGE+AVAILABLE'
  },
  group: {
    active: true
  },
  deck: {
    active: false
  },
  columns: {
    active: false
  },
  grid: {
    active: false,
    column: ''
  },
  classes: {
    card: 'mb-3',
    image: 'img-fluid',
    content: '',
    header: '',
    footer: 'text-center text-muted'
  }
}
</script>
<script src="https://blogger.googleblog.com/feeds/posts/default?orderby=published&amp;start-index=1&amp;max-results=3&amp;alt=json-in-script&amp;callback=postsCard"></script>
{% endexample %}
