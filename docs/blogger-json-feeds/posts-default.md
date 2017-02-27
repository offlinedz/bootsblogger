---
layout: docs
title: Posts - default
description: Menampilkan data JSON posting dan halaman statis menggunakan komponen posting.
group: blogger-json-feeds
---

Menampilkan data JSON posting dan halaman statis menggunakan komponen [posting]({{ site.baseurl }}/components/posts/).

## Config

Nama fungsi: `postsDefault`.

{% highlight html %}
<script>
var config = {
  containerID: 'id',

  clickable: {
    active: true|false
  },
  content: {
    numchars: 'full'|number|0 to disable,
    title: {
      tag: 'h1|h2|h3|h4|h5|h6',
      link: {
        active: true|false,
        style: 'post-title-link'
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
    placement: 'meta|header|footer',
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
    placement: 'meta|header|footer',
    before: '<i class="fa fa-clock-o" aria-hidden="true"></i> Posted on ',
    after: '',
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  },
  numComments: {
    active: true|false,
    placement: 'meta|header|footer',
    before: '<i class="fa fa-comments" aria-hidden="true"></i> ',
    after: ''
  },
  labels: {
    active: true|false,
    placement: 'meta|header|footer',
    before: '<i class="fa fa-tags" aria-hidden="true"></i> Labels: ',
    after: '',
    none: 'Unlabelled'
  },
  thumbnail: {
    active: true|false,
    placement: 'image-only|top|right|bottom|left|overlay',
    rightLeft: 'post-horizontal-sm thumbnail-sm-5 thumbnail-md-4 thumbnail-lg-3 thumbnail-xl-3',
    size: '512',
    none: 'https://placehold.it/512/eee/777?text=NO+IMAGE+AVAILABLE',
    cover: {
      active: true|false,
      minheight: '150'
    }
  },
  group: {
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
    post: 'Add class to `.post`',
    image: 'Add class to `.post-img-*`',
    content: 'Add class to `.post-content`',
    meta: 'Add class to `.post-meta`',
    header: 'Add class to `.post-header`',
    footer: 'Add class to `.post-footer`'
  }
}
</script>
{% endhighlight %}

**Catatan:** `group`, `columns`, dan `grid` pilih salah satu yang bernilai `true` atau semua `false`.

## Example

{% example html %}
<div class="" id="example-result-container">
  <div class="text-center">Loading...</div>
</div>
<script>
var config = {
  containerID: 'example-result-container',

  clickable: {
    active: false
  },
  content: {
    numchars: 100,
    title: {
      tag: 'h3',
      link: {
        active: true,
        style: 'post-title-link'
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
    placement: 'meta',
    before: '<i class="fa fa-clock-o"></i> ',
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
    rightLeft: '',
    size: '512',
    none: 'https://placehold.it/512/eee/777?text=NO+IMAGE+AVAILABLE',
    cover: {
      active: true,
      minheight: '150'
    }
  },
  group: {
    active: false
  },
  columns: {
    active: false
  },
  grid: {
    active: true,
    column: 'col-sm-6'
  },
  classes: {
    post: '',
    image: '',
    content: '',
    meta: '',
    header: '',
    footer: ''
  }
}
</script>
<script src="https://blogger.googleblog.com/feeds/posts/default?orderby=published&amp;start-index=1&amp;max-results=2&amp;alt=json-in-script&amp;callback=postsDefault"></script>
{% endexample %}
