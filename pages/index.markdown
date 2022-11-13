---
title: Rizoma Coop
layout: page

permalink: /
namespace: root

show_nav: true
hide_hero: true
---

<div class="container is-max-desktop has-text-centered home my-5">
  <h1 class="mb-5">{% t home.title %}</h1>
  <h4 class="rizoma-green">{% t home.tagline %}</h4>
</div>

<div class="is-relative pb-6 home">
  <img src="/img/rizoma-hero.webp" width="100%" id="bg" title="Photo credits: © Inês Leote | Mensagem de Lisboa">
</div>

<div class="container is-max-widescreen has-text-centered home mt-6">
  <section class="text-content">
    <h2 class="mb-0">{% t home.about_us %}</h2>
    <hr class="line rizoma-red-bg" />
    <div class="about">{% tf home/about.md %}</div>
  </section>

  <section style="margin-top: 144px;">
    <h2 class="mb-0">{% t home.wwo %}</h2>
    <hr class="line rizoma-green-bg" />
    <div class="tile is-ancestor">
      <div class="tile is-4 is-vertical is-parent">
        <div class="tile is-child box">
          <img src="/img/oignon.png">
          <h3 class="mt-1">{% t home.wwo_local %}</h3>
          <p>{% t home.wwo_local_text %}</p>
        </div>
        <div class="tile is-child box">
          <img src="/img/brocoloi.png">
          <h3 class="mt-1">{% t home.wwo_transparency %}</h3>
          <p>{% t home.wwo_transparency_text %}</p>
        </div>
      </div>
      <div class="tile is-4 is-vertical is-parent">
        <div class="tile is-child box">
          <img src="/img/apple.png">
          <h3 class="mt-1">{% t home.wwo_prices %}</h3>
          <p>{% t home.wwo_prices_text %}</p>
        </div>
        <div class="tile is-child box">
          <img src="/img/strawberries.png">
          <h3 class="mt-1">{% t home.wwo_community %}</h3>
          <p>{% t home.wwo_community_text %}</p>
        </div>
      </div>
      <div class="tile is-4 is-vertical is-parent">
        <div class="tile is-child box">
          <img src="/img/orange.png">
          <h3 class="mt-1">{% t home.wwo_packaging %}</h3>
          <p>{% t home.wwo_packaging_text %}</p>
        </div>
        <div class="tile is-child box">
          <img src="/img/banana.png">
          <h3 class="mt-1">{% t home.wwo_education %}</h3>
          <p>{% t home.wwo_education_text %}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-pattern py-6" style="margin-top: 144px;">
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <div class="box">
          <h3 class="has-text-centered">{% t home.member %}</h3>
          <div class="is-flex is-align-items-center become-member">
            <h3 class="has-text-weight-bold is-size-1 rizoma-green">1</h3>
            <p>{% t home.member_shares %}</p>
          </div>
          <div class="is-flex is-align-items-center become-member">
            <div class="is-flex-grow-1">
              <h3 class="has-text-weight-bold is-size-1 rizoma-green">2</h3>
            </div>
            <p class="is-flex-grow-5">{% t home.member_work %}</p>
          </div>
          <div class="is-flex is-align-items-center become-member">
            <div class="is-flex-grow-1">
              <h3 class="has-text-weight-bold is-size-1 rizoma-green">3</h3>
            </div>
            <p class="is-flex-grow-5">{% t home.member_consume %}</p>
          </div>
          <a href="{% tl participar %}" class="button is-secondary my-3">{% t home.participate %}</a>
        </div>      
      </div>    
    </div>
  </section>

  <section class="mt-3 mb-0">
    <div class="has-text-centered">
      <h4><strong>{% t home.agradecemos %}</strong></h4>
      <div style="display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;">
      <a href="https://www.renovaramouraria.pt/" target="_blank" rel="noopener noreferrer" style="flex: 1;">
      <img src="/img/ram.jpg" style="max-width: 350px;" />
      </a>
      <a href="https://www.bairrossaudaveis.gov.pt/" target="_blank" rel="noopener noreferrer" style="flex: 1;">
      <img src="/img/bairros_saudaveis.svg" style="max-width: 350px;" />
      </a>
      </div>
    </div>
  </section>
</div>
