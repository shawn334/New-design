import fs from 'fs';
import path from 'path';

const rawHtml = fs.readFileSync('homepage-raw.html', 'utf-8');

// Find the CSS file in dist/assets
const distAssets = fs.readdirSync('dist/assets');
const cssFile = distAssets.find(file => file.endsWith('.css'));
const cssContent = fs.readFileSync(path.join('dist/assets', cssFile), 'utf-8');

const finalHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Translia - Homepage</title>
  <style>
    ${cssContent}
  </style>
  <script>
    // Theme toggle logic
    function toggleTheme() {
      const isDark = document.documentElement.classList.contains('dark');
      if (isDark) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
    }

    // Initialize theme
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Attach event listeners after DOM is loaded
    document.addEventListener('DOMContentLoaded', () => {
      const themeToggles = document.querySelectorAll('.theme-toggle');
      themeToggles.forEach(toggle => {
        toggle.addEventListener('click', toggleTheme);
      });
    });
  </script>
</head>
<body class="bg-brand-deep text-slate-300 font-sans antialiased transition-colors duration-500">
  <div id="root">${rawHtml}</div>
</body>
</html>`;

fs.writeFileSync('translia-homepage.html', finalHtml);
console.log('Combined HTML created successfully at translia-homepage.html');
