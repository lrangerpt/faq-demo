/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */


document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.faq-demo-accordion').forEach(accordion => {
    accordion.addEventListener('click', function (e) {
      const btn = e.target.closest('.faq-demo-question');
      if (!btn) return;
      const item = btn.closest('.faq-demo-item');
      const answer = item.querySelector('.faq-demo-answer');
      const expanded = btn.getAttribute('aria-expanded') === 'true';

      // Close all in this accordion only
      accordion.querySelectorAll('.faq-demo-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-demo-question').setAttribute('aria-expanded', 'false');
        i.querySelector('.faq-demo-answer').setAttribute('hidden', '');
      });

      // Open this one if it was closed
      if (!expanded) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        answer.removeAttribute('hidden');
      }
    });
  });
}); 
