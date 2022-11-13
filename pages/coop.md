---
title: Coop
layout: page

permalink: /coop
namespace: coop

show_nav: true
hide_hero: true
---

<div class="container is-max-desktop">
  <section>
    <div class="has-text-centered">
      <h2>{% t coop.title %}</h2>
      <hr class="line rizoma-red-bg" />
    </div>
    <div class="text-content ">
      {% tf coop/integral.md %}
    </div>
    <div class="text-content">
      <h3 class="mt-6">{% t coop.org_title %}</h3>
      <div>{% tf coop/org.md %}</div>
      <img src="/img/rizoma-org.jpg" style="max-width: 100%;"/>
      <p class="has-text-centered is-italic has-small-text">{% t coop.gt_img_title %}</p>
    </div>
    <div class="text-content" id="regulamentos">
      <h3 class="mt-6">{% t coop.regulamentos %}</h3>
      <ul>
        <li><a href="https://drive.google.com/file/d/1VDfE4NUdFcWA9kMOVt411-v2CVuenM5K/view" target="_blank">{% t coop.regulamentos_interno %}</a></li>
        <li><a href="https://drive.google.com/file/d/12SmzltFmv51Rw_99WI2HBRfe4fhHNgbE/view" target="_blank">{% t coop.regulamentos_consumo %}</a></li>
      </ul>
    </div>
    <div class="text-content" id="outros documentos">
      <h3 class="mt-6">{% t coop.otherdocs %}</h3>
      <ul>
        <li><a href="https://drive.google.com/file/d/1vPFQLXCPlIvpncpBXMUmIHDUwlPDJWux/view?usp=share_link" target="_blank">{% t coop.otherdocs_estatuto %}</a></li>
      </ul>
    </div>
  </section>
</div>
