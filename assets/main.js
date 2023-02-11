const currentTheme = localStorage.getItem('tera-theme');
if (currentTheme) {
  document.documentElement.setAttribute('tera-theme', currentTheme);
} else if (window.matchMedia('(prefers-color-scheme: dark)')) {
  // Set default OS Theme
  // document.documentElement.setAttribute('tera-theme', 'dark');
}

function setDarkMode() {
  localStorage.setItem('tera-theme', 'dark');
  document.documentElement.setAttribute('tera-theme', 'dark');
  sendGAEvent('set_theme', 'dark', 'dark');
}

function setLightMode() {
  localStorage.setItem('tera-theme', 'light');
  document.documentElement.setAttribute('tera-theme', 'light');
  sendGAEvent('set_theme', 'light', 'light');
}