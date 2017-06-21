---
layout: docs
title: Assets
description: CSS, JavaScript, dan lainnya.
group: core-template
---

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Core CSS and JavaScript

CSS dan JavaScript inti.

### Bootstrap CSS

- Source: Compiled

###### Source

{% highlight plaintext %}
template-src/core/assets/css/bootstrap/bootstrap.min.css
{% endhighlight %}

###### Includable

CSS Bootstrap dikompilasi dari kode sumber, oleh karena itu, CSS Bootstrap disertakan menggunakan tag `<style>` HTML (Internal style sheet).

{% highlight html %}
<b:includable id='css.bootstrap'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:include name='css.bootstrap'/>
{% endhighlight %}

### Bootstrap JS

- Source: <abbr title="Content Delivery Network">CDN</abbr>

###### Source

Lihat `template-src/config.json`:

{% highlight json %}
{
  "blog": {
    "cdn": {
      "bootstrapJs": "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js",
      "bootstrapJs_hash": "sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn"
    }
  }
}
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='js.bootstrap'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:include name='js.bootstrap'/>
{% endhighlight %}

### Bootsblogger CSS

- Source: Compiled

###### Source

{% highlight plaintext %}
template-src/core/assets/css/bootsblogger/bootsblogger.min.css
{% endhighlight %}

###### Includable

CSS Bootsblogger dikompilasi dari kode sumber, oleh karena itu, CSS Bootsblogger disertakan menggunakan tag `<style>` HTML (Internal style sheet).

{% highlight html %}
<b:includable id='css.bootsblogger'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:include name='css.bootsblogger'/>
{% endhighlight %}

## Images and Icons

Aset untuk keperluan gambar dan ikon.

### Font Awesome

Beberapa bagian kode inti Bootsblogger menggunakan ikon Font Awesome, oleh karena itu, Font Awesome harus digunakan.

- Homepage: <http://fontawesome.io>
- Source: <abbr title="Content Delivery Network">CDN</abbr>
- Version: `4.7.0`

###### Source

Lihat `template-src/config.json`:

{% highlight json %}
{
  "blog": {
    "cdn": {
      "fontAwesome": "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
      "fontAwesome_hash": "sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
    }
  }
}
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='css.fontAwesome'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:include name='css.fontAwesome'/>
{% endhighlight %}

## Dependencies

Aset yang harus digunakan untuk mendukung *plugin* (khususnya *plugin* Bootstrap) agar dapat bekerja.

### jQuery

- Homepage: <https://jquery.com>
- Source: <abbr title="Content Delivery Network">CDN</abbr>
- Version: `3.1.1`

###### Source

Lihat `template-src/config.json`:

{% highlight json %}
{
  "blog": {
    "cdn": {
      "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js",
      "jquery_hash": "sha384-3ceskX3iaEnIogmQchP8opvBy3Mi7Ce34nWjpBIwVTHfGYWQS9jwHDVRnpKKHJg7"
    }
  }
}
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='js.jquery'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:include name='js.jquery'/>
{% endhighlight %}

### Popper.js

- Homepage: <https://popper.js.org>
- Source: <abbr title="Content Delivery Network">CDN</abbr>
- Version: `1.10.1`

###### Source

Lihat `template-src/config.json`:

{% highlight json %}
{
  "blog": {
    "cdn": {
      "popper": "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.10.1/umd/popper.min.js",
      "popper_hash": "sha256-nxD3NU7Wocq19nG7DTQAx9troUwVoxjUhYrAhFSO3HM="
    }
  }
}
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='js.popper'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:include name='js.popper'/>
{% endhighlight %}

## Example usage: CSS and JavaScript

Untuk penggunaan CSS dan JavaScript, penempatannya harus diperhatikan.

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Bootstrap CSS first, then Bootsblogger CSS, then Font Awesome. -->
    <b:include name='css.bootstrap'/>
    <b:include name='css.bootsblogger'/>
    <b:include name='css.fontAwesome'/>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- jQuery first, then Popper.js, then Bootstrap JS. -->
    <b:include name='js.jquery'/>
    <b:include name='js.popper'/>
    <b:include name='js.bootstrap'/>
  </body>
</html>
{% endhighlight %}
