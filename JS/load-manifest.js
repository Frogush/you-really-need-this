(function () {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const manifestPath = isDark
    ? './Images/site-dark.webmanifest'
    : './Images/site-light.webmanifest';

  const link = document.createElement('link');
  link.rel = 'manifest';
  link.href = manifestPath;
  document.head.appendChild(link);
})();