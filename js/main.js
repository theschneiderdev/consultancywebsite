/* =========================================================
   Setu Advisory — main.js
   Vanilla JS only. No dependencies, no build step.
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ---- Mobile navigation toggle ---- */
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    /* Close the menu when a link is chosen */
    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- Accordion (case study feedback Q&A) ---- */
  document.querySelectorAll('.accordion-trigger').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var expanded = trigger.getAttribute('aria-expanded') === 'true';
      var panel = trigger.closest('.accordion-item').querySelector('.accordion-panel');
      trigger.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      if (expanded) {
        panel.hidden = true;
      } else {
        panel.hidden = false;
      }
    });
  });

  /* ---- Contact form ----
     No backend is connected yet. On submit, this builds a
     mailto: link from the fields so the message opens in the
     visitor's own email client. Replace this with a real
     form handler (e.g. Cloudflare Pages Forms, Formspree, or
     a Worker) when one is ready. */
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var name = form.querySelector('#name').value.trim();
      var email = form.querySelector('#email').value.trim();
      var org = form.querySelector('#organisation').value.trim();
      var message = form.querySelector('#message').value.trim();
      var status = document.getElementById('form-status');

      if (!name || !email || !message) {
        status.textContent = 'Please fill in your name, email and message before sending.';
        status.setAttribute('data-state', 'error');
        return;
      }

      var recipient = 'thomas@setuadvisory.co.uk';
      var subject = encodeURIComponent('Enquiry from ' + name + (org ? ' (' + org + ')' : ''));
      var body = encodeURIComponent(
        message + '\n\n---\nName: ' + name + '\nEmail: ' + email + (org ? '\nOrganisation: ' + org : '')
      );

      window.location.href = 'mailto:' + recipient + '?subject=' + subject + '&body=' + body;

      status.textContent = 'Opening your email client to send this message…';
      status.setAttribute('data-state', 'success');
    });
  }

});
