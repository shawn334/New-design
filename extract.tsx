import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from './src/context/LanguageContext';
import Home from './src/pages/Home';
import fs from 'fs';

const html = renderToString(
  <MemoryRouter initialEntries={['/']}>
    <LanguageProvider>
      <Home />
    </LanguageProvider>
  </MemoryRouter>
);

fs.writeFileSync('homepage-raw.html', html);
console.log('Done');
