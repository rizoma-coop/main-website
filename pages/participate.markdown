---
title: Participar
layout: page

permalink: /participar
namespace: participar

show_nav: true
hide_hero: true
---

<div class="container is-max-desktop">
  <section>
    <div class="has-text-centered">
      <h2>{% t participate.title %}</h2>
      <hr class="line rizoma-red-bg" />
    </div>
    <div class="text-content">
      <p>{% t participate.intro %}</p>
      <div class="has-text-centered mt-3">
        <img src="img/page-participar-meeting.jpg">
      </div>
      <h3 class="mt-6">{% t participate.member_title %}</h3>
      {% tf participar/member.md %}
    </div>
  </section>
  <section>
    <div class="has-text-centered" class="mt-6">
      <div class="has-text-centered">
        <h2>{% t participate.give_a_hand %}</h2>
        <hr class="line rizoma-green-bg" />    
      </div>
      <div class="text-content">
        {% tf participar/hand.md %}
      </div>
    </div>
  </section>
  <section id="support" class="mt-6">
    <div class="has-text-centered">
      <h2>{% t participate.support_us %}</h2>
      <hr class="line rizoma-red-bg" />    
    </div>
    <div class="columns">
      <div class="column has-text-left">
        {% tf participar/support.md %}
      </div>
      <div class="column">
        <article class="message">
          <div class="message-header donate-header">
            <p class="rizoma-green m-0">{% t participate.donate_by_transfer %}</p>
            <span class="tag rizoma-red">{% t participate.donate_no_fee %}</span>
          </div>
          <div class="message-body has-text-left" style="overflow-y: scroll;">
            <div class="block">
            <label class="label">{% t participate.donate_account_holder %}</label>
            <p class="tags has-addons is-inline-flex copy-text tooltipped tooltipped-s is-flex-wrap-nowrap" data-clipboard-target="#account-name" aria-label="Click to copy"><span class="tag is-medium" id="account-name" >Rizoma Cooperativa Integral CRL</span> <a class="tag is-medium"><i class="fas fa-copy"></i></a></p>            
            </div>
            <div class="block">
              <label class="label">IBAN</label>
              <p class="tags has-addons is-inline-flex copy-text tooltipped tooltipped-s is-flex-wrap-nowrap" data-clipboard-target="#account-iban" aria-label="Click to copy"><span class="tag is-medium" id="account-iban">PT50 0045 9011 4033 3611 7526 1</span> <a class="tag is-medium"><i class="fas fa-copy"></i></a></p>
            </div>
            <div class="block">            
              <label class="label">BIC/SWIFT</label>
              <p class="tags has-addons tooltipped tooltipped-s copy-text is-inline-flex is-flex-wrap-nowraps" data-clipboard-target="#account-swift" aria-label="Click to copy"><span class="tag is-medium" id="account-swift" >CCCMPTPL</span> <a class="tag is-medium"><i class="fas fa-copy"></i></a></p>
            </div>
          </div>
        </article>
        <article class="message">
          <div class="message-header donate-header">
            <p class="rizoma-green m-0">{% t participate.donate_mbway %}</p>
            <span class="tag rizoma-red">{% t participate.donate_no_fee %}</span>
          </div>
          <div class="message-body has-text-left" style="overflow-y: scroll;">
            <div class="block">
            <label class="label">{% t participate.phone_number %}</label>
            <p class="tags has-addons is-inline-flex copy-text tooltipped tooltipped-s is-flex-wrap-nowrap" data-clipboard-target="#mbway" aria-label="Click to copy"><span class="tag is-medium" id="mbway" >928 145 440</span> <a class="tag is-medium"><i class="fas fa-copy"></i></a></p>            
            </div>
          </div>
        </article>
        <article class="message">
          <div class="message-header donate-header">
            <p class="rizoma-green m-0">{% t participate.donate_by_card %} </p>
            <span class="tag rizoma-red">{% t participate.donate_fee %}</span>
          </div>
          <div class="message-body has-text-left">
            <div class="field">
              <label class="label">{% t participate.donate_select_amount %}</label>
              <div class="control donate-form">
                <div class="select">
                  <select id="select-amount" required>
                    <option value="">{% t participate.donate_select_amount %}</option>
                    <option value="10">10€</option>
                    <option value="20">20€</option>
                    <option value="50">50€</option>
                    <option value="100">100€</option>
                    <option value="200">200€</option>                    
                    <option value="500">500€</option>
                    <option value="1000">1000€</option>
                  </select>
                </div>
                <button class="button is-primary" id="submit-donation" disabled>{% t participate.donate %}&nbsp;<span id="donate-amount"></span></button>
                <div class='error-message'></div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</div>
