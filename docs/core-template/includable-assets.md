---
layout: docs
title: Includable - Assets
description: CSS, JavaScript, icons, dan lainnya.
group: core-template
---

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## CSS and JavaScript

### Bootstrap CSS

###### Source <small>(Compiled)</small>

{% highlight plaintext %}
template-src/includable/assets/css/bootstrap/bootstrap.min.css
{% endhighlight %}

###### Includable <small>(Internal style sheet)</small>

{% highlight html %}
<b:includable id='css.bootstrap'>...</b:includable>
{% endhighlight %}

###### Usage <small>(Required)</small>

{% highlight html %}
<b:include name='css.bootstrap'/>
{% endhighlight %}

### Bootstrap JS

###### Source <small>(<abbr title="Content Delivery Network">CDN</abbr>)</small>

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

###### Usage <small>(Required)</small>

{% highlight html %}
<b:include name='js.bootstrap'/>
{% endhighlight %}

### Bootsblogger CSS

###### Source <small>(Compiled)</small>

{% highlight plaintext %}
template-src/includable/assets/css/bootsblogger/bootsblogger.min.css
{% endhighlight %}

###### Includable <small>(Internal style sheet)</small>

{% highlight html %}
<b:includable id='css.bootsblogger'>...</b:includable>
{% endhighlight %}

###### Usage <small>(Required)</small>

{% highlight html %}
<b:include name='css.bootsblogger'/>
{% endhighlight %}

### Font Awesome

<http://fontawesome.io>

###### Source <small>(<abbr title="Content Delivery Network">CDN</abbr>)</small>

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

###### Usage <small>(Required)</small>

{% highlight html %}
<b:include name='css.fontAwesome'/>
{% endhighlight %}

## Icons

### Blogger <small>(Inline SVG)</small>

###### Source

{% highlight plaintext %}
template-src/includable/assets/icons/icons.blogger.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='icons.blogger'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:include data='{ width: number, height: number, fillBg: "#ff5722", fillB: "#fff", class: "class-name" }' name='icons.blogger'/>
{% endhighlight %}

**Example:**

<div class="bd-example">
  <svg class="align-middle" width="24" height="24" viewBox="0 0 612 612" xmlns="http://www.w3.org/2000/svg" focusable="false">
    <title>Blogger</title>
    <path fill="#ff5722" d="M612, 510c0, 56.1-45.9, 102-102, 102H102C45.9, 612, 0, 566.1, 0, 510V102C0, 45.9, 45.9, 0, 102, 0h408 c56.1, 0, 102, 45.9, 102, 102V510z"></path>
    <path fill="#fff" d="m 483.32742, 262.81768 c -7.88887, -3.44838 -41.73045, 0.38183 -51.13171, -8.29282 -6.63342, -6.25243 -7.05677, -17.56407 -9.6465, -32.65819 -4.33566, -25.27222 -6.14292, -30.99964 -10.65377, -40.95102 -16.41131, -35.46224 -55.75058, -65.82947 -91.48993, -65.82947 l -82.8361, 0 c -65.17519, 0 -118.42655, 54.35078 -118.42655, 120.6814 l 0, 140.71541 c 0, 66.2113 53.25136, 120.43083 118.42655, 120.43083 l 136.10207, 0 c 65.17226, 0 118.06159, -54.21953 118.43823, -120.43083 l 0.74743, -97.4615 c 0, 0 0, -12.05144 -9.52972, -16.20381 m -244.26024, -49.11258 65.67737, 0 c 12.5311, 0 22.68271, 10.33321 22.68271, 22.95738 0, 12.63611 -10.15161, 23.08864 -22.68271, 23.08864 l -65.67737, 0 c -12.53111, 0 -22.6827, -10.45253 -22.6827, -23.08864 0.003, -12.62417 10.15451, -22.95738 22.6827, -22.95738 m 133.47731, 183.9574 -133.47731, 0 c -12.53111, 0 -22.6827, -10.46447 -22.6827, -22.95739 0, -12.6361 10.15159, -22.96932 22.6827, -22.96932 l 133.47731, 0 c 12.40265, 0 22.55132, 10.33322 22.55132, 22.96932 0.003, 12.49292 -10.14867, 22.95739 -22.55132, 22.95739"></path>
  </svg>
  Blogger
</div>

{% highlight html %}
<b:include data='{ width: 24, height: 24, fillBg: "#ff5722", fillB: "#fff", class: "align-middle" }' name='icons.blogger'/> Blogger
{% endhighlight %}

### Bootsblogger <small>(Inline SVG)</small>

###### Source
{% highlight plaintext %}
template-src/includable/assets/icons/icons.bootsblogger.xml
{% endhighlight %}

###### Includable

{% highlight html %}
<b:includable id='icons.bootsblogger'>...</b:includable>
{% endhighlight %}

###### Usage

{% highlight html %}
<b:include data='{ width: number, height: number, class: "class-name" }' name='icons.bootsblogger'/>
{% endhighlight %}

**Example:**

<div class="bd-example">
  <svg class="align-middle" width="24" height="24" viewBox="0 0 612 612" xmlns="http://www.w3.org/2000/svg" focusable="false">
    <title>Blogger</title>
    <path fill="#563D7C" d="M612, 510c0, 56.1-45.9, 102-102, 102H102C45.9, 612, 0, 566.1, 0, 510V102C0, 45.9, 45.9, 0, 102, 0h408 c56.1, 0, 102, 45.9, 102, 102V510z"></path>
    <path fill="#fff" d="m 483.32742, 262.81768 c -7.88887, -3.44838 -41.73045, 0.38183 -51.13171, -8.29282 -6.63342, -6.25243 -7.05677, -17.56407 -9.6465, -32.65819 -4.33566, -25.27222 -6.14292, -30.99964 -10.65377, -40.95102 -16.41131, -35.46224 -55.75058, -65.82947 -91.48993, -65.82947 l -82.8361, 0 c -65.17519, 0 -118.42655, 54.35078 -118.42655, 120.6814 l 0, 140.71541 c 0, 66.2113 53.25136, 120.43083 118.42655, 120.43083 l 136.10207, 0 c 65.17226, 0 118.06159, -54.21953 118.43823, -120.43083 l 0.74743, -97.4615 c 0, 0 0, -12.05144 -9.52972, -16.20381 m -244.26024, -49.11258 65.67737, 0 c 12.5311, 0 22.68271, 10.33321 22.68271, 22.95738 0, 12.63611 -10.15161, 23.08864 -22.68271, 23.08864 l -65.67737, 0 c -12.53111, 0 -22.6827, -10.45253 -22.6827, -23.08864 0.003, -12.62417 10.15451, -22.95738 22.6827, -22.95738 m 133.47731, 183.9574 -133.47731, 0 c -12.53111, 0 -22.6827, -10.46447 -22.6827, -22.95739 0, -12.6361 10.15159, -22.96932 22.6827, -22.96932 l 133.47731, 0 c 12.40265, 0 22.55132, 10.33322 22.55132, 22.96932 0.003, 12.49292 -10.14867, 22.95739 -22.55132, 22.95739"></path>
  </svg>
  Bootsblogger
</div>

{% highlight html %}
<b:include data='{ width: 24, height: 24, class: "align-middle" }' name='icons.bootsblogger'/> Bootsblogger
{% endhighlight %}

## Dependencies

### jQuery

<https://jquery.com>

###### Source <small>(<abbr title="Content Delivery Network">CDN</abbr>)</small>

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

###### Usage <small>(Required)</small>

{% highlight html %}
<b:include name='js.jquery'/>
{% endhighlight %}

### Popper.js

<https://popper.js.org>

###### Source <small>(<abbr title="Content Delivery Network">CDN</abbr>)</small>

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

###### Usage <small>(Required)</small>

{% highlight html %}
<b:include name='js.popper'/>
{% endhighlight %}

## Example usage: CSS and JavaScript

Untuk penggunaan CSS dan JavaScript, penempatannya harus diperhatikan.

{% highlight html %}
<!DOCTYPE html>
<html>
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
