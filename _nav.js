/* Copia estática: no hay servidor Next que sirva los payloads de navegación.
   React intercepta el click en cualquier <a href="/...">, así que movemos el
   destino a data-href: sin href, su router lo ignora y navegamos a mano. */
(function () {
  function desactivar(raiz) {
    var as = (raiz || document).querySelectorAll('a[href^="/"]:not([data-href])');
    for (var i = 0; i < as.length; i++) {
      var a = as[i];
      if (a.target === "_blank" || a.hasAttribute("download")) continue;
      a.setAttribute("data-href", a.getAttribute("href"));
      a.removeAttribute("href");
      a.style.cursor = "pointer";
    }
  }
  function ir(e) {
    var a = e.target && e.target.closest ? e.target.closest("a[data-href]") : null;
    if (!a) return;
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    e.stopPropagation();
    window.location.replace(a.getAttribute("data-href"));
  }
  document.addEventListener("click", ir, true);
  function arrancar() {
    desactivar(document);
    // React repinta: volvemos a desactivar lo que vaya apareciendo
    new MutationObserver(function () { desactivar(document); })
      .observe(document.documentElement, { childList: true, subtree: true });
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", arrancar);
  } else { arrancar(); }
})();
