document.querySelectorAll('.language-switch a').forEach(link => {
  const update = () => { const target = new URL(link.getAttribute('href'), location.href); target.hash = location.hash; link.href = target.href; };
  update(); window.addEventListener('hashchange', update);
});
