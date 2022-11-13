---
title: Mercearia
layout: page

permalink: /mercearia
namespace: mercearia

show_nav: true
hide_hero: true
---

<div class="container">
  <div class="columns ">
    <div class="column">
      <img src="/img/rizoma-entrance.jpg" />
    </div>
    <div class="column is-half px-6">
      <h2 class="mb-3">Mini-Rizoma</h2>
      <div class="columns" id="map">
        <div class="column">
          <p class="has-text-weight-bold">{% t mercearia.find_us %}</p>
          {% tf mercearia/morada.md %}
        </div>
        <div class="column">
          <p class="has-text-weight-bold">{% t mercearia.open %}</p>
          {% tf mercearia/horarios.md %}
        </div>
      </div>
      <div>
        <iframe width="100%" height="300px" style="border:0; margin: auto;" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJS7oOioczGQ0RcZdBYOzDL7o&key=AIzaSyDHSyAh1DmNuw8MpgGlH_C_-UwWsnWvibU"></iframe>        
      </div>
    </div>
  </div>
  <div class="text-content mt-6" >
    {% tf mercearia/intro.md %}
  </div>
  <div class="text-content mt-6">  
    {% tf mercearia/mini.md %}
  </div>
  <img src="/img/page-mercearia-inside.jpeg" class="mt-6" />
</div>
