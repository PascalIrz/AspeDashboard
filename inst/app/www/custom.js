$(document).ready(function() {
  var iframe = document.getElementById('iframe_methodes');
  
  function injectBaseTarget() {
    try {
      var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      if (iframeDoc && !iframeDoc.querySelector('base[target="_blank"]')) {
        var base = iframeDoc.createElement('base');
        base.target = '_blank';
        iframeDoc.head.appendChild(base);
      }
    } catch (e) {
      console.error("Impossible d'accéder à l'iframe pour injecter base target:", e);
    }
  }

  if (iframe) {
    // Si l'iframe est déjà chargée
    if (iframe.contentDocument && iframe.contentDocument.readyState === 'complete') {
      injectBaseTarget();
    }
    
    // Au chargement (ou rechargement) de l'iframe
    iframe.onload = injectBaseTarget;
  }
});
