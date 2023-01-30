import '../styles/main.scss'

import { pixUpdate } from './pixUpdate';
import { weatherUpdate } from './weatherUpdate';
import { formListener } from './listener';

//Imported EventListener that runs weatherUpdate
document.addEventListener('DOMContentLoaded', function () {
  formListener(weatherUpdate, pixUpdate);
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}