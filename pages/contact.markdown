---
title: Contact
layout: page

permalink: /contact
namespace: contact

show_nav: true
hide_hero: true
---

<div class="container is-max-desktop">
  <div class="columns">
    <div class="column">
      <div>
        <h3>{% t contact.inquiries %}</h3>
        <p>{% t contact.inquiries_text %}</p>
        <p><a href="mailto:geral@rizomacoop.pt">geral@rizomacoop.pt</a></p>        
      </div>
      <div class="mt-6">
        <h3>{% t contact.request %}</h3>
        <p>{% t contact.request_text %}</p>
        <p><a href="mailto:produtos@rizomacoop.pt">produtos@rizomacoop.pt</a></p>              
      </div>
      <div class="mt-6">
        <h3>{% t contact.social_networks %}</h3>
          <p class="display-inline mr-6"><a href="https://www.facebook.com/rizomacoop.pt" class="is-inline-block"><i class="fab fa-facebook fa-lg mr-2" style="vertical-align: middle;"></i> Facebook </a></p>
          <p class="display-inline"><a href="https://www.instagram.com/rizomacoop.pt/" class="is-inline-block"><i class="fab fa-instagram fa-lg mr-2" style="vertical-align: middle;"></i> Instagram </a></p>
      </div>
    </div>
    <div class="column">
      <div class="columns">
        <div class="column">
          <p class="has-text-weight-bold">{% t mercearia.find_us %}</p>
          {% tf mercearia/morada.md %}
        </div>
        <div class="column">
          <p class="has-text-weight-bold">{% t mercearia.open %}</p>
          {% tf mercearia/horarios.md %}
        </div>
      </div>
      <iframe width="100%" height="400" style="border:0; margin: auto;" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6225.147605044943!2d-9.137396!3d38.727593!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa93be3a590b34247!2sRizoma%20Cooperativa%20Integral!5e0!3m2!1sen!2sca!4v1651676159883!5m2!1sen!2sca"></iframe>
    </div>
  </div>
</div>
