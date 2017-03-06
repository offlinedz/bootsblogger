---
layout: docs
title: Colors
description: Kelas-kelas untuk mengubah warna teks, latar belakang, dan border.
group: utilities
redirect_from: "/utilities/"
---

Kelas-kelas untuk mengubah warna teks, latar belakang, dan border.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Notation

Dengan kelas utilitas warna Anda dapat mengubah warna teks, latar belakang, dan border. Format kelasnya adalah `.{prop}-{color}-{level}`.

`{prop}`:

- `text` - untuk mengubah warna teks (`color`).
- `bg` - untuk mengubah warna latar belakang (`background-color`).
- `border` - untuk mengubah warna border (`border-color`).

`{color}`:

- `red`
- `pink`
- `purple`
- `deep-purple`
- `indigo`
- `blue`
- `light-blue`
- `cyan`
- `teal`
- `green`
- `light-green`
- `lime`
- `yellow`
- `amber`
- `orange`
- `deep-orange`
- `brown`
- `grey`
- `blue-grey`

`{level}`:

- `50`
- `100`
- `200`
- `300`
- `400`
- `500` - primary color.
- `600`
- `700`
- `800`
- `900`

Example:

- `text-red-500`
- `bg-deep-orange-500`
- `border-green-500`

### Hover and focus states

Ubah `.{prop}-{color}-{level}` menjadi `.{prop}-hover-{color}-{level}` untuk memberikan `hover` dan `focus` *states*.

Example:

- `text-hover-red-500`
- `bg-hover-deep-orange-500`
- `border-hover-green-500`

## Colors

Pemilihan warna menggunakan [Material Design color palette](https://material.io/guidelines/style/color.html#color-color-palette).

<div class="row">
  <div class="col-sm-6">
    <ul class="list-unstyled">
      <li class="bg-red-500 text-white p-3">
        <span class="d-block font-weight-bold mb-5">Red</span>
        <span>500</span>
        <span class="float-right">#f44336</span>
      </li>
      <li class="bg-red-50 text-black p-3">
        <span>50</span>
        <span class="float-right">#ffebee</span>
      </li>
      <li class="bg-red-100 text-black p-3">
        <span>100</span>
        <span class="float-right">#ffcdd2</span>
      </li>
      <li class="bg-red-200 text-black p-3">
        <span>200</span>
        <span class="float-right">#ef9a9a</span>
      </li>
      <li class="bg-red-300 text-black p-3">
        <span>300</span>
        <span class="float-right">#e57373</span>
      </li>
      <li class="bg-red-400 text-white p-3">
        <span>400</span>
        <span class="float-right">#ef5350</span>
      </li>
      <li class="bg-red-500 text-white p-3">
        <span>500</span>
        <span class="float-right">#f44336</span>
      </li>
      <li class="bg-red-600 text-white p-3">
        <span>600</span>
        <span class="float-right">#e53935</span>
      </li>
      <li class="bg-red-700 text-white p-3">
        <span>700</span>
        <span class="float-right">#d32f2f</span>
      </li>
      <li class="bg-red-800 text-white p-3">
        <span>800</span>
        <span class="float-right">#c62828</span>
      </li>
      <li class="bg-red-900 text-white p-3">
        <span>900</span>
        <span class="float-right">#b71c1c</span>
      </li>
    </ul>
  </div>
  <div class="col-sm-6">
    <ul class="list-unstyled">
      <li class="bg-pink-500 text-white p-3">
        <span class="d-block font-weight-bold mb-5">Pink</span>
        <span>500</span>
        <span class="float-right">#e91e63</span>
      </li>
      <li class="bg-pink-50 text-black p-3">
        <span>50</span>
        <span class="float-right">#fce4ec</span>
      </li>
      <li class="bg-pink-100 text-black p-3">
        <span>100</span>
        <span class="float-right">#f8bbd0</span>
      </li>
      <li class="bg-pink-200 text-black p-3">
        <span>200</span>
        <span class="float-right">#f48fb1</span>
      </li>
      <li class="bg-pink-300 text-white p-3">
        <span>300</span>
        <span class="float-right">#f06292</span>
      </li>
      <li class="bg-pink-400 text-white p-3">
        <span>400</span>
        <span class="float-right">#ec407a</span>
      </li>
      <li class="bg-pink-500 text-white p-3">
        <span>500</span>
        <span class="float-right">#e91e63</span>
      </li>
      <li class="bg-pink-600 text-white p-3">
        <span>600</span>
        <span class="float-right">#d81b60</span>
      </li>
      <li class="bg-pink-700 text-white p-3">
        <span>700</span>
        <span class="float-right">#c2185b</span>
      </li>
      <li class="bg-pink-800 text-white p-3">
        <span>800</span>
        <span class="float-right">#ad1457</span>
      </li>
      <li class="bg-pink-900 text-white p-3">
        <span>900</span>
        <span class="float-right">#880e4f</span>
      </li>
    </ul>
  </div>
  <div class="col-sm-6">
    <ul class="list-unstyled">
      <li class="bg-purple-500 text-white p-3">
        <span class="d-block font-weight-bold mb-5">Purple</span>
        <span>500</span>
        <span class="float-right">#9c27b0</span>
      </li>
      <li class="bg-purple-50 text-black p-3">
        <span>50</span>
        <span class="float-right">#f3e5f5</span>
      </li>
      <li class="bg-purple-100 text-black p-3">
        <span>100</span>
        <span class="float-right">#e1bee7</span>
      </li>
      <li class="bg-purple-200 text-black p-3">
        <span>200</span>
        <span class="float-right">#ce93d8</span>
      </li>
      <li class="bg-purple-300 text-white p-3">
        <span>300</span>
        <span class="float-right">#ba68c8</span>
      </li>
      <li class="bg-purple-400 text-white p-3">
        <span>400</span>
        <span class="float-right">#ab47bc</span>
      </li>
      <li class="bg-purple-500 text-white p-3">
        <span>500</span>
        <span class="float-right">#9c27b0</span>
      </li>
      <li class="bg-purple-600 text-white p-3">
        <span>600</span>
        <span class="float-right">#8e24aa</span>
      </li>
      <li class="bg-purple-700 text-white p-3">
        <span>700</span>
        <span class="float-right">#7b1fa2</span>
      </li>
      <li class="bg-purple-800 text-white p-3">
        <span>800</span>
        <span class="float-right">#6a1b9a</span>
      </li>
      <li class="bg-purple-900 text-white p-3">
        <span>900</span>
        <span class="float-right">#4a148c</span>
      </li>
    </ul>
  </div>
  <div class="col-sm-6">
    <ul class="list-unstyled">
      <li class="bg-deep-purple-500 text-white p-3">
        <span class="d-block font-weight-bold mb-5">Deep Purple</span>
        <span>500</span>
        <span class="float-right">#673ab7</span>
      </li>
      <li class="bg-deep-purple-50 text-black p-3">
        <span>50</span>
        <span class="float-right">#ede7f6</span>
      </li>
      <li class="bg-deep-purple-100 text-black p-3">
        <span>100</span>
        <span class="float-right">#d1c4e9</span>
      </li>
      <li class="bg-deep-purple-200 text-black p-3">
        <span>200</span>
        <span class="float-right">#b39ddb</span>
      </li>
      <li class="bg-deep-purple-300 text-white p-3">
        <span>300</span>
        <span class="float-right">#9575cd</span>
      </li>
      <li class="bg-deep-purple-400 text-white p-3">
        <span>400</span>
        <span class="float-right">#7e57c2</span>
      </li>
      <li class="bg-deep-purple-500 text-white p-3">
        <span>500</span>
        <span class="float-right">#673ab7</span>
      </li>
      <li class="bg-deep-purple-600 text-white p-3">
        <span>600</span>
        <span class="float-right">#5e35b1</span>
      </li>
      <li class="bg-deep-purple-700 text-white p-3">
        <span>700</span>
        <span class="float-right">#512da8</span>
      </li>
      <li class="bg-deep-purple-800 text-white p-3">
        <span>800</span>
        <span class="float-right">#4527a0</span>
      </li>
      <li class="bg-deep-purple-900 text-white p-3">
        <span>900</span>
        <span class="float-right">#311b92</span>
      </li>
    </ul>
  </div>
  <div class="col-sm-6">
    <ul class="list-unstyled">
      <li class="bg-indigo-500 text-white p-3">
        <span class="d-block font-weight-bold mb-5">Indigo</span>
        <span>500</span>
        <span class="float-right">#3f51b5</span>
      </li>
      <li class="bg-indigo-50 text-black p-3">
        <span>50</span>
        <span class="float-right">#e8eaf6</span>
      </li>
      <li class="bg-indigo-100 text-black p-3">
        <span>100</span>
        <span class="float-right">#c5cae9</span>
      </li>
      <li class="bg-indigo-200 text-black p-3">
        <span>200</span>
        <span class="float-right">#9fa8da</span>
      </li>
      <li class="bg-indigo-300 text-white p-3">
        <span>300</span>
        <span class="float-right">#7986cb</span>
      </li>
      <li class="bg-indigo-400 text-white p-3">
        <span>400</span>
        <span class="float-right">#5c6bc0</span>
      </li>
      <li class="bg-indigo-500 text-white p-3">
        <span>500</span>
        <span class="float-right">#3f51b5</span>
      </li>
      <li class="bg-indigo-600 text-white p-3">
        <span>600</span>
        <span class="float-right">#3949ab</span>
      </li>
      <li class="bg-indigo-700 text-white p-3">
        <span>700</span>
        <span class="float-right">#303f9f</span>
      </li>
      <li class="bg-indigo-800 text-white p-3">
        <span>800</span>
        <span class="float-right">#283593</span>
      </li>
      <li class="bg-indigo-900 text-white p-3">
        <span>900</span>
        <span class="float-right">#1a237e</span>
      </li>
    </ul>
  </div>
  <div class="col-sm-6">
    <ul class="list-unstyled">
      <li class="bg-blue-500 text-white p-3">
        <span class="d-block font-weight-bold mb-5">Blue</span>
        <span>500</span>
        <span class="float-right">#2196f3</span>
      </li>
      <li class="bg-blue-50 text-black p-3">
        <span>50</span>
        <span class="float-right">#e3f2fd</span>
      </li>
      <li class="bg-blue-100 text-black p-3">
        <span>100</span>
        <span class="float-right">#bbdefb</span>
      </li>
      <li class="bg-blue-200 text-black p-3">
        <span>200</span>
        <span class="float-right">#90caf9</span>
      </li>
      <li class="bg-blue-300 text-black p-3">
        <span>300</span>
        <span class="float-right">#64b5f6</span>
      </li>
      <li class="bg-blue-400 text-black p-3">
        <span>400</span>
        <span class="float-right">#42a5f5</span>
      </li>
      <li class="bg-blue-500 text-white p-3">
        <span>500</span>
        <span class="float-right">#2196f3</span>
      </li>
      <li class="bg-blue-600 text-white p-3">
        <span>600</span>
        <span class="float-right">#1e88e5</span>
      </li>
      <li class="bg-blue-700 text-white p-3">
        <span>700</span>
        <span class="float-right">#1976d2</span>
      </li>
      <li class="bg-blue-800 text-white p-3">
        <span>800</span>
        <span class="float-right">#1565c0</span>
      </li>
      <li class="bg-blue-900 text-white p-3">
        <span>900</span>
        <span class="float-right">#0d47a1</span>
      </li>
    </ul>
  </div>
  <div class="col-sm-6">
    <ul class="list-unstyled">
      <li class="bg-light-blue-500 text-black p-3">
        <span class="d-block font-weight-bold mb-5">Light Blue</span>
        <span>500</span>
        <span class="float-right">#03a9f4</span>
      </li>
      <li class="bg-light-blue-50 text-black p-3">
        <span>50</span>
        <span class="float-right">#e1f5fe</span>
      </li>
      <li class="bg-light-blue-100 text-black p-3">
        <span>100</span>
        <span class="float-right">#b3e5fc</span>
      </li>
      <li class="bg-light-blue-200 text-black p-3">
        <span>200</span>
        <span class="float-right">#81d4fa</span>
      </li>
      <li class="bg-light-blue-300 text-black p-3">
        <span>300</span>
        <span class="float-right">#4fc3f7</span>
      </li>
      <li class="bg-light-blue-400 text-black p-3">
        <span>400</span>
        <span class="float-right">#29b6f6</span>
      </li>
      <li class="bg-light-blue-500 text-black p-3">
        <span>500</span>
        <span class="float-right">#03a9f4</span>
      </li>
      <li class="bg-light-blue-600 text-white p-3">
        <span>600</span>
        <span class="float-right">#039be5</span>
      </li>
      <li class="bg-light-blue-700 text-white p-3">
        <span>700</span>
        <span class="float-right">#0288d1</span>
      </li>
      <li class="bg-light-blue-800 text-white p-3">
        <span>800</span>
        <span class="float-right">#0277bd</span>
      </li>
      <li class="bg-light-blue-900 text-white p-3">
        <span>900</span>
        <span class="float-right">#01579b</span>
      </li>
    </ul>
  </div>
  <div class="col-sm-6">
    <ul class="list-unstyled">
      <li class="bg-cyan-500 text-black p-3">
        <span class="d-block font-weight-bold mb-5">Cyan</span>
        <span>500</span>
        <span class="float-right">#00bcd4</span>
      </li>
      <li class="bg-cyan-50 text-black p-3">
        <span>50</span>
        <span class="float-right">#e0f7fa</span>
      </li>
      <li class="bg-cyan-100 text-black p-3">
        <span>100</span>
        <span class="float-right">#b2ebf2</span>
      </li>
      <li class="bg-cyan-200 text-black p-3">
        <span>200</span>
        <span class="float-right">#80deea</span>
      </li>
      <li class="bg-cyan-300 text-black p-3">
        <span>300</span>
        <span class="float-right">#4dd0e1</span>
      </li>
      <li class="bg-cyan-400 text-black p-3">
        <span>400</span>
        <span class="float-right">#26c6da</span>
      </li>
      <li class="bg-cyan-500 text-black p-3">
        <span>500</span>
        <span class="float-right">#00bcd4</span>
      </li>
      <li class="bg-cyan-600 text-black p-3">
        <span>600</span>
        <span class="float-right">#00acc1</span>
      </li>
      <li class="bg-cyan-700 text-white p-3">
        <span>700</span>
        <span class="float-right">#0097a7</span>
      </li>
      <li class="bg-cyan-800 text-white p-3">
        <span>800</span>
        <span class="float-right">#00838f</span>
      </li>
      <li class="bg-cyan-900 text-white p-3">
        <span>900</span>
        <span class="float-right">#006064</span>
      </li>
    </ul>
  </div>
  <div class="col-sm-6">
    <ul class="list-unstyled">
      <li class="bg-teal-500 text-white p-3">
        <span class="d-block font-weight-bold mb-5">Teal</span>
        <span>500</span>
        <span class="float-right">#009688</span>
      </li>
      <li class="bg-teal-50 text-black p-3">
        <span>50</span>
        <span class="float-right">#e0f2f1</span>
      </li>
      <li class="bg-teal-100 text-black p-3">
        <span>100</span>
        <span class="float-right">#b2dfdb</span>
      </li>
      <li class="bg-teal-200 text-black p-3">
        <span>200</span>
        <span class="float-right">#80cbc4</span>
      </li>
      <li class="bg-teal-300 text-black p-3">
        <span>300</span>
        <span class="float-right">#4db6ac</span>
      </li>
      <li class="bg-teal-400 text-black p-3">
        <span>400</span>
        <span class="float-right">#26a69a</span>
      </li>
      <li class="bg-teal-500 text-white p-3">
        <span>500</span>
        <span class="float-right">#009688</span>
      </li>
      <li class="bg-teal-600 text-white p-3">
        <span>600</span>
        <span class="float-right">#00897b</span>
      </li>
      <li class="bg-teal-700 text-white p-3">
        <span>700</span>
        <span class="float-right">#00796b</span>
      </li>
      <li class="bg-teal-800 text-white p-3">
        <span>800</span>
        <span class="float-right">#00695c</span>
      </li>
      <li class="bg-teal-900 text-white p-3">
        <span>900</span>
        <span class="float-right">#004d40</span>
      </li>
    </ul>
  </div>
  <div class="col-sm-6">
    <ul class="list-unstyled">
      <li class="bg-green-500 text-black p-3">
        <span class="d-block font-weight-bold mb-5">Green</span>
        <span>500</span>
        <span class="float-right">#4caf50</span>
      </li>
      <li class="bg-green-50 text-black p-3">
        <span>50</span>
        <span class="float-right">#e8f5e9</span>
      </li>
      <li class="bg-green-100 text-black p-3">
        <span>100</span>
        <span class="float-right">#c8e6c9</span>
      </li>
      <li class="bg-green-200 text-black p-3">
        <span>200</span>
        <span class="float-right">#a5d6a7</span>
      </li>
      <li class="bg-green-300 text-black p-3">
        <span>300</span>
        <span class="float-right">#81c784</span>
      </li>
      <li class="bg-green-400 text-black p-3">
        <span>400</span>
        <span class="float-right">#66bb6a</span>
      </li>
      <li class="bg-green-500 text-black p-3">
        <span>500</span>
        <span class="float-right">#4caf50</span>
      </li>
      <li class="bg-green-600 text-white p-3">
        <span>600</span>
        <span class="float-right">#43a047</span>
      </li>
      <li class="bg-green-700 text-white p-3">
        <span>700</span>
        <span class="float-right">#388e3c</span>
      </li>
      <li class="bg-green-800 text-white p-3">
        <span>800</span>
        <span class="float-right">#2e7d32</span>
      </li>
      <li class="bg-green-900 text-white p-3">
        <span>900</span>
        <span class="float-right">#1b5e20</span>
      </li>
    </ul>
  </div>
  <div class="col-sm-6">
    <ul class="list-unstyled">
      <li class="bg-light-green-500 text-black p-3">
        <span class="d-block font-weight-bold mb-5">Light Green</span>
        <span>500</span>
        <span class="float-right">#8bc34a</span>
      </li>
      <li class="bg-light-green-50 text-black p-3">
        <span>50</span>
        <span class="float-right">#f1f8e9</span>
      </li>
      <li class="bg-light-green-100 text-black p-3">
        <span>100</span>
        <span class="float-right">#dcedc8</span>
      </li>
      <li class="bg-light-green-200 text-black p-3">
        <span>200</span>
        <span class="float-right">#c5e1a5</span>
      </li>
      <li class="bg-light-green-300 text-black p-3">
        <span>300</span>
        <span class="float-right">#aed581</span>
      </li>
      <li class="bg-light-green-400 text-black p-3">
        <span>400</span>
        <span class="float-right">#9ccc65</span>
      </li>
      <li class="bg-light-green-500 text-black p-3">
        <span>500</span>
        <span class="float-right">#8bc34a</span>
      </li>
      <li class="bg-light-green-600 text-black p-3">
        <span>600</span>
        <span class="float-right">#7cb342</span>
      </li>
      <li class="bg-light-green-700 text-white p-3">
        <span>700</span>
        <span class="float-right">#689f38</span>
      </li>
      <li class="bg-light-green-800 text-white p-3">
        <span>800</span>
        <span class="float-right">#558b2f</span>
      </li>
      <li class="bg-light-green-900 text-white p-3">
        <span>900</span>
        <span class="float-right">#33691e</span>
      </li>
    </ul>
  </div>
  <div class="col-sm-6">
    <ul class="list-unstyled">
      <li class="bg-lime-500 text-black p-3">
        <span class="d-block font-weight-bold mb-5">Lime</span>
        <span>500</span>
        <span class="float-right">#cddc39</span>
      </li>
      <li class="bg-lime-50 text-black p-3">
        <span>50</span>
        <span class="float-right">#f9fbe7</span>
      </li>
      <li class="bg-lime-100 text-black p-3">
        <span>100</span>
        <span class="float-right">#f0f4c3</span>
      </li>
      <li class="bg-lime-200 text-black p-3">
        <span>200</span>
        <span class="float-right">#e6ee9c</span>
      </li>
      <li class="bg-lime-300 text-black p-3">
        <span>300</span>
        <span class="float-right">#dce775</span>
      </li>
      <li class="bg-lime-400 text-black p-3">
        <span>400</span>
        <span class="float-right">#d4e157</span>
      </li>
      <li class="bg-lime-500 text-black p-3">
        <span>500</span>
        <span class="float-right">#cddc39</span>
      </li>
      <li class="bg-lime-600 text-black p-3">
        <span>600</span>
        <span class="float-right">#c0ca33</span>
      </li>
      <li class="bg-lime-700 text-black p-3">
        <span>700</span>
        <span class="float-right">#afb42b</span>
      </li>
      <li class="bg-lime-800 text-black p-3">
        <span>800</span>
        <span class="float-right">#9e9d24</span>
      </li>
      <li class="bg-lime-900 text-white p-3">
        <span>900</span>
        <span class="float-right">#827717</span>
      </li>
    </ul>
  </div>
  <div class="col-sm-6">
    <ul class="list-unstyled">
      <li class="bg-yellow-500 text-black p-3">
        <span class="d-block font-weight-bold mb-5">Yellow</span>
        <span>500</span>
        <span class="float-right">#ffeb3b</span>
      </li>
      <li class="bg-yellow-50 text-black p-3">
        <span>50</span>
        <span class="float-right">#fffde7</span>
      </li>
      <li class="bg-yellow-100 text-black p-3">
        <span>100</span>
        <span class="float-right">#fff9c4</span>
      </li>
      <li class="bg-yellow-200 text-black p-3">
        <span>200</span>
        <span class="float-right">#fff59d</span>
      </li>
      <li class="bg-yellow-300 text-black p-3">
        <span>300</span>
        <span class="float-right">#fff176</span>
      </li>
      <li class="bg-yellow-400 text-black p-3">
        <span>400</span>
        <span class="float-right">#ffee58</span>
      </li>
      <li class="bg-yellow-500 text-black p-3">
        <span>500</span>
        <span class="float-right">#ffeb3b</span>
      </li>
      <li class="bg-yellow-600 text-black p-3">
        <span>600</span>
        <span class="float-right">#fdd835</span>
      </li>
      <li class="bg-yellow-700 text-black p-3">
        <span>700</span>
        <span class="float-right">#fbc02d</span>
      </li>
      <li class="bg-yellow-800 text-black p-3">
        <span>800</span>
        <span class="float-right">#f9a825</span>
      </li>
      <li class="bg-yellow-900 text-black p-3">
        <span>900</span>
        <span class="float-right">#f57f17</span>
      </li>
    </ul>
  </div>
  <div class="col-sm-6">
    <ul class="list-unstyled">
      <li class="bg-amber-500 text-black p-3">
        <span class="d-block font-weight-bold mb-5">Amber</span>
        <span>500</span>
        <span class="float-right">#ffc107</span>
      </li>
      <li class="bg-amber-50 text-black p-3">
        <span>50</span>
        <span class="float-right">#fff8e1</span>
      </li>
      <li class="bg-amber-100 text-black p-3">
        <span>100</span>
        <span class="float-right">#ffecb3</span>
      </li>
      <li class="bg-amber-200 text-black p-3">
        <span>200</span>
        <span class="float-right">#ffe082</span>
      </li>
      <li class="bg-amber-300 text-black p-3">
        <span>300</span>
        <span class="float-right">#ffd54f</span>
      </li>
      <li class="bg-amber-400 text-black p-3">
        <span>400</span>
        <span class="float-right">#ffca28</span>
      </li>
      <li class="bg-amber-500 text-black p-3">
        <span>500</span>
        <span class="float-right">#ffc107</span>
      </li>
      <li class="bg-amber-600 text-black p-3">
        <span>600</span>
        <span class="float-right">#ffb300</span>
      </li>
      <li class="bg-amber-700 text-black p-3">
        <span>700</span>
        <span class="float-right">#ffa000</span>
      </li>
      <li class="bg-amber-800 text-black p-3">
        <span>800</span>
        <span class="float-right">#ff8f00</span>
      </li>
      <li class="bg-amber-900 text-black p-3">
        <span>900</span>
        <span class="float-right">#ff6f00</span>
      </li>
    </ul>
  </div>
  <div class="col-sm-6">
    <ul class="list-unstyled">
      <li class="bg-orange-500 text-black p-3">
        <span class="d-block font-weight-bold mb-5">Orange</span>
        <span>500</span>
        <span class="float-right">#ff9800</span>
      </li>
      <li class="bg-orange-50 text-black p-3">
        <span>50</span>
        <span class="float-right">#fff3e0</span>
      </li>
      <li class="bg-orange-100 text-black p-3">
        <span>100</span>
        <span class="float-right">#ffe0b2</span>
      </li>
      <li class="bg-orange-200 text-black p-3">
        <span>200</span>
        <span class="float-right">#ffcc80</span>
      </li>
      <li class="bg-orange-300 text-black p-3">
        <span>300</span>
        <span class="float-right">#ffb74d</span>
      </li>
      <li class="bg-orange-400 text-black p-3">
        <span>400</span>
        <span class="float-right">#ffa726</span>
      </li>
      <li class="bg-orange-500 text-black p-3">
        <span>500</span>
        <span class="float-right">#ff9800</span>
      </li>
      <li class="bg-orange-600 text-black p-3">
        <span>600</span>
        <span class="float-right">#fb8c00</span>
      </li>
      <li class="bg-orange-700 text-black p-3">
        <span>700</span>
        <span class="float-right">#f57c00</span>
      </li>
      <li class="bg-orange-800 text-white p-3">
        <span>800</span>
        <span class="float-right">#ef6c00</span>
      </li>
      <li class="bg-orange-900 text-white p-3">
        <span>900</span>
        <span class="float-right">#e65100</span>
      </li>
    </ul>
  </div>
  <div class="col-sm-6">
    <ul class="list-unstyled">
      <li class="bg-deep-orange-500 text-white p-3">
        <span class="d-block font-weight-bold mb-5">Deep Orange</span>
        <span>500</span>
        <span class="float-right">#ff5722</span>
      </li>
      <li class="bg-deep-orange-50 text-black p-3">
        <span>50</span>
        <span class="float-right">#fbe9e7</span>
      </li>
      <li class="bg-deep-orange-100 text-black p-3">
        <span>100</span>
        <span class="float-right">#ffccbc</span>
      </li>
      <li class="bg-deep-orange-200 text-black p-3">
        <span>200</span>
        <span class="float-right">#ffab91</span>
      </li>
      <li class="bg-deep-orange-300 textext-black p-3">
        <span>300</span>
        <span class="float-right">#ff8a65</span>
      </li>
      <li class="bg-deep-orange-400 text-black p-3">
        <span>400</span>
        <span class="float-right">#ff7043</span>
      </li>
      <li class="bg-deep-orange-500 text-white p-3">
        <span>500</span>
        <span class="float-right">#ff5722</span>
      </li>
      <li class="bg-deep-orange-600 text-white p-3">
        <span>600</span>
        <span class="float-right">#f4511e</span>
      </li>
      <li class="bg-deep-orange-700 text-white p-3">
        <span>700</span>
        <span class="float-right">#e64a19</span>
      </li>
      <li class="bg-deep-orange-800 text-white p-3">
        <span>800</span>
        <span class="float-right">#d84315</span>
      </li>
      <li class="bg-deep-orange-900 text-white p-3">
        <span>900</span>
        <span class="float-right">#bf360c</span>
      </li>
    </ul>
  </div>
  <div class="col-sm-6">
    <ul class="list-unstyled">
      <li class="bg-brown-500 text-white p-3">
        <span class="d-block font-weight-bold mb-5">Brown</span>
        <span>500</span>
        <span class="float-right">#795548</span>
      </li>
      <li class="bg-brown-50 text-black p-3">
        <span>50</span>
        <span class="float-right">#efebe9</span>
      </li>
      <li class="bg-brown-100 text-black p-3">
        <span>100</span>
        <span class="float-right">#d7ccc8</span>
      </li>
      <li class="bg-brown-200 text-black p-3">
        <span>200</span>
        <span class="float-right">#bcaaa4</span>
      </li>
      <li class="bg-brown-300 text-white p-3">
        <span>300</span>
        <span class="float-right">#a1887f</span>
      </li>
      <li class="bg-brown-400 text-white p-3">
        <span>400</span>
        <span class="float-right">#8d6e63</span>
      </li>
      <li class="bg-brown-500 text-white p-3">
        <span>500</span>
        <span class="float-right">#795548</span>
      </li>
      <li class="bg-brown-600 text-white p-3">
        <span>600</span>
        <span class="float-right">#6d4c41</span>
      </li>
      <li class="bg-brown-700 text-white p-3">
        <span>700</span>
        <span class="float-right">#5d4037</span>
      </li>
      <li class="bg-brown-800 text-white p-3">
        <span>800</span>
        <span class="float-right">#4e342e</span>
      </li>
      <li class="bg-brown-900 text-white p-3">
        <span>900</span>
        <span class="float-right">#3e2723</span>
      </li>
    </ul>
  </div>
  <div class="col-sm-6">
    <ul class="list-unstyled">
      <li class="bg-grey-500 text-black p-3">
        <span class="d-block font-weight-bold mb-5">Grey</span>
        <span>500</span>
        <span class="float-right">#9e9e9e</span>
      </li>
      <li class="bg-grey-50 text-black p-3">
        <span>50</span>
        <span class="float-right">#fafafa</span>
      </li>
      <li class="bg-grey-100 text-black p-3">
        <span>100</span>
        <span class="float-right">#f5f5f5</span>
      </li>
      <li class="bg-grey-200 text-black p-3">
        <span>200</span>
        <span class="float-right">#eee</span>
      </li>
      <li class="bg-grey-300 text-black p-3">
        <span>300</span>
        <span class="float-right">#e0e0e0</span>
      </li>
      <li class="bg-grey-400 text-black p-3">
        <span>400</span>
        <span class="float-right">#bdbdbd</span>
      </li>
      <li class="bg-grey-500 text-black p-3">
        <span>500</span>
        <span class="float-right">#9e9e9e</span>
      </li>
      <li class="bg-grey-600 text-white p-3">
        <span>600</span>
        <span class="float-right">#757575</span>
      </li>
      <li class="bg-grey-700 text-white p-3">
        <span>700</span>
        <span class="float-right">#616161</span>
      </li>
      <li class="bg-grey-800 text-white p-3">
        <span>800</span>
        <span class="float-right">#424242</span>
      </li>
      <li class="bg-grey-900 text-white p-3">
        <span>900</span>
        <span class="float-right">#212121</span>
      </li>
    </ul>
  </div>
  <div class="col-sm-6">
    <ul class="list-unstyled">
      <li class="bg-blue-grey-500 text-white p-3">
        <span class="d-block font-weight-bold mb-5">Blue Grey</span>
        <span>500</span>
        <span class="float-right">#607d8b</span>
      </li>
      <li class="bg-blue-grey-50 text-black p-3">
        <span>50</span>
        <span class="float-right">#eceff1</span>
      </li>
      <li class="bg-blue-grey-100 text-black p-3">
        <span>100</span>
        <span class="float-right">#cfd8dc</span>
      </li>
      <li class="bg-blue-grey-200 text-black p-3">
        <span>200</span>
        <span class="float-right">#b0bec5</span>
      </li>
      <li class="bg-blue-grey-300 text-black p-3">
        <span>300</span>
        <span class="float-right">#90a4ae</span>
      </li>
      <li class="bg-blue-grey-400 text-white p-3">
        <span>400</span>
        <span class="float-right">#78909c</span>
      </li>
      <li class="bg-blue-grey-500 text-white p-3">
        <span>500</span>
        <span class="float-right">#607d8b</span>
      </li>
      <li class="bg-blue-grey-600 text-white p-3">
        <span>600</span>
        <span class="float-right">#546e7a</span>
      </li>
      <li class="bg-blue-grey-700 text-white p-3">
        <span>700</span>
        <span class="float-right">#455a64</span>
      </li>
      <li class="bg-blue-grey-800 text-white p-3">
        <span>800</span>
        <span class="float-right">#37474f</span>
      </li>
      <li class="bg-blue-grey-900 text-white p-3">
        <span>900</span>
        <span class="float-right">#263238</span>
      </li>
    </ul>
  </div>
</div><!-- /.row -->

Untuk warna `black` dan `white` penamaan kelasnya sedikit berbeda, karena tidak memiliki level.

<div class="row bg-grey-200 p-3 mb-3">
  <div class="col-sm-6">
    <ul class="list-unstyled mb-sm-0">
      <li class="bg-grey-100 text-grey-700 p-2"><code>.{prop}-black</code> and <code>.{prop}-hover-black</code></li>
      <li class="bg-black text-white p-3">
        <span class="d-block font-weight-bold mb-5">Black</span>
        <span>None</span>
        <span class="float-right">#000</span>
      </li>
    </ul>
  </div>
  <div class="col-sm-6">
    <ul class="list-unstyled mb-0">
      <li class="bg-grey-100 text-grey-700 p-2"><code>.{prop}-white</code> and <code>.{prop}-hover-white</code></li>
      <li class="bg-white text-black p-3">
        <span class="d-block font-weight-bold mb-5">White</span>
        <span>None</span>
        <span class="float-right">#fff</span>
      </li>
    </ul>
  </div>
</div>

## Example text colors

{% example html %}
<p class="text-red-500">Lorem ipsum dolor sit amet.</p>
<p class="text-pink-500">Lorem ipsum dolor sit amet.</p>
<p class="text-purple-500">Lorem ipsum dolor sit amet.</p>
{% endexample %}

Links.

{% example html %}
<a class="text-red-500 text-hover-red-800" href="#">Red link</a>
<a class="text-pink-500 text-hover-pink-800" href="#">Pink link</a>
<a class="text-purple-500 text-hover-purple-800" href="#">Purple link</a>
<a class="text-grey-500 text-hover-blue-500" href="#">Mix and match</a>
{% endexample %}

## Example background colors

{% example html %}
<p class="bg-red-500 text-white p-3 mb-3">Lorem ipsum dolor sit amet.</p>
<p class="bg-pink-500 text-white p-3 mb-3">Lorem ipsum dolor sit amet.</p>
<p class="bg-purple-500 text-white p-3 mb-3">Lorem ipsum dolor sit amet.</p>
{% endexample %}

Links.

{% example html %}
<a class="bg-red-500 bg-hover-red-800 text-white d-block p-3 mb-3" href="#">Red link</a>
<a class="bg-pink-500 bg-hover-pink-800 text-white d-block p-3 mb-3" href="#">Pink link</a>
<a class="bg-purple-500 bg-hover-purple-800 text-white d-block p-3 mb-3" href="#">Purple link</a>
<a class="bg-orange-500 bg-hover-purple-500 text-white text-hover-orange-500 d-block p-3 mb-3" href="#">Mix and match</a>
{% endexample %}

## Example border colors

{% example html %}
<p class="border-red-500 p-3 mb-3" style="border: 2px solid transparent;">Lorem ipsum dolor sit amet.</p>
<p class="border-pink-500 p-3 mb-3" style="border: 2px solid transparent;">Lorem ipsum dolor sit amet.</p>
<p class="border-purple-500 p-3 mb-3" style="border: 2px solid transparent;">Lorem ipsum dolor sit amet.</p>
{% endexample %}

Links.

{% example html %}
<a class="border-red-100 border-hover-red-500 text-grey-700 d-block p-3 mb-3" href="#" style="border: 2px solid transparent;">Red link</a>
<a class="border-pink-100 border-hover-pink-500 text-grey-700 d-block p-3 mb-3" href="#" style="border: 2px solid transparent;">Pink link</a>
<a class="border-purple-100 border-hover-purple-500 text-grey-700 d-block p-3 mb-3" href="#" style="border: 2px solid transparent;">Purple link</a>
<a class="border-orange-500 border-hover-purple-500 text-grey-700 text-hover-purple-500 d-block p-3 mb-3" href="#" style="border: 2px solid transparent;">Mix and match</a>
{% endexample %}
