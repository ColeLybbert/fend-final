import '../styles/main.scss'

import { pixUpdate } from './pixUpdate';
import { weatherUpdate } from './weatherUpdate';
import { formListener } from './listener';

//Imported EventListener that runs weatherUpdate
document.addEventListener('DOMContentLoaded', function () {
  formListener(weatherUpdate, pixUpdate);
});