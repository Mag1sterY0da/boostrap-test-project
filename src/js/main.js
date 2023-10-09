import 'bootstrap';

import '../scss/queries.scss';
import '../scss/styles.scss';

import closeIcon from '../assets/icons/close-list.svg';
import openIcon from '../assets/icons/open-list.svg';

const features = document.querySelectorAll('.feature');
features.forEach(feature => {
  feature.addEventListener('click', () => {
    toggleFeature(feature);
  });
});

const toggleFeature = feature => {
  const content = feature.querySelector('.feature-content');
  const image = feature.querySelector('.feature-icon');

  if (feature.classList.contains('opened')) {
    feature.classList.remove('opened');
    content.style.maxHeight = '0';
    image.setAttribute('src', openIcon);
  } else {
    closeAllFeatures(features);
    feature.classList.add('opened');
    content.style.maxHeight = content.scrollHeight + 'px';
    image.setAttribute('src', closeIcon);
  }
};

const closeAllFeatures = features => {
  features.forEach(feature => {
    if (feature.classList.contains('opened')) {
      feature.classList.remove('opened');
      const content = feature.querySelector('.feature-content');
      const image = feature.querySelector('.feature-icon');
      content.style.maxHeight = '0';
      image.setAttribute('src', openIcon);
    }
  });
};
