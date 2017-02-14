---
layout: docs
title: Build tools
description: Bootsblogger menggunakan Grunt, untuk membangun CSS, JavaScript, template, dan Jekyll untuk menulis dokumentasi.
group: getting-started
---

Bootsblogger menggunakan [Grunt](http://gruntjs.com), untuk membangun CSS, JavaScript, template, dan Jekyll untuk menulis dokumentasi. Di dalam Gruntfile, terdapat kumpulan perintah Grunt yang akan memberikan kemudahan dalam bekerja dengan Bootsblogger, seperti untuk kompilasi kode, menjalankan pengujian, dan lainnya.

## Tooling setup

Untuk dapat bekerja dengan Bootsblogger dan menjalankan dokumentasi secara lokal, Anda membutuhkan kode sumber Bootsblogger, Node, dan Grunt. Ikuti langkah-langkah di bawah ini:

1. [Unduh dan pasang Node](https://nodejs.org/download), yang digunakan untuk manajemen dependensi.
2. Pasang *Grunt command line tools*, `grunt-cli`, dengan menjalankan perintah `npm install -g grunt-cli` pada *command line*.
3. Dari *command line*, pindah ke direktori `/bootsblogger` dan jalankan perintah `npm install` untuk instalasi dependensi yang sudah terdaftar di dalam berkas `package.json`.
4. [Pasang Ruby](https://www.ruby-lang.org/en/documentation/installation/), kemudian pasang [Bundler](https://bundler.io/) dengan perintah `gem install bundler`, dan terakhir jalankan perintah `bundle install`. Ini akan memasang semua dependensi Ruby, seperti Jekyll dan *plugins*.
  - **Pengguna Windows:** Baca [*unofficial guide* ini](http://jekyll-windows.juthilo.com/) agar Jekyll berjalan lancar tanpa masalah.

Setelah selesai, Anda akan dapat menjalankan berbagai perintah Grunt yang tersedia.

## Using Grunt

Beberapa perintah Grunt yang dapat Anda gunakan:

| Task | Description |
| --- | --- |
| `grunt` | Jalankan perintah `grunt` untuk menjalankan pengujian secara lokal dan kompilasi CSS dan JavaScript Bootstrap dan Bootsblogger ke dalam `/template-src/includes/assets`; kompilasi template ke dalam`/dist`; kompilasi aset dokumentasi. **Menggunakan [Sass (grunt-contrib-sass)](https://github.com/gruntjs/grunt-contrib-sass), [Autoprefixer](https://github.com/postcss/autoprefixer), [UglifyJS (grunt-contrib-uglify)](https://github.com/gruntjs/grunt-contrib-uglify), dan [bake (grunt-bake)](https://github.com/MathiasPaumgarten/grunt-bake).** |
| `grunt dist` | `grunt dist` akan membuat direktori `/dist` dan `/template-src/includes/assets/<bootstrap dan bootsblogger>` dengan berkas terkompilasi. **Menggunakan [Sass (grunt-contrib-sass)](https://github.com/gruntjs/grunt-contrib-sass), [Autoprefixer](https://github.com/postcss/autoprefixer), [UglifyJS (grunt-contrib-uglify)](https://github.com/gruntjs/grunt-contrib-uglify), dan [bake (grunt-bake)](https://github.com/MathiasPaumgarten/grunt-bake).** |
| `grunt test` | Menjalankan [scss-lint (grunt-scss-lint)](https://github.com/ahmednuaman/grunt-scss-lint), [JSCS (grunt-jscs)](https://github.com/jscs-dev/grunt-jscs), [HTML validation (grunt-html)](https://github.com/jzaefferer/grunt-html), dan [HTML validation (grunt-htmlhint)](https://github.com/yaniswang/grunt-htmlhint) (digunakan untuk CI). |
| `grunt docs` | Membangun dan menguji CSS, JavaScript, dan aset lainnya yang digunakan dalam menjalankan dokumentasi secara lokal via `jekyll serve`. |
| `grunt watch` | Ini adalah metode paling nyaman untuk memonitor perubahan pada berkas template, Sass, dan JavaScript dan secara otomatis akan melakukan pengujian dan kompilasi setiap kali Anda menyimpannya. |

## Local documentation

Menjalankan dokumentasi secara lokal membutuhkan penggunaan Jekyll. Berikut adalah cara untuk memulainya:

1. Pastikan sudah menyelesaikan [*tooling setup*](#tooling-setup) di atas untuk instalasi Jekyll (*the site builder*) dan dependensi Ruby lainnya dengan `bundle install`.
2. Dari direktori `/bootsblogger`, jalankan perintah `bundle exec jekyll serve`.
3. Buka <http://localhost:9001> di *browser* Anda, selesai.

Pelajari lebih lanjut tentang penggunaan Jekyll dengan membaca [dokumentasinya](https://jekyllrb.com/docs/home/).

## Troubleshooting

Jika Anda mendapat masalah ketika instalasi, hapus direktori `node_modules` dan jalankan kembali perintah `npm install`.
