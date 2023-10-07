import 'bootstrap';

import '../scss/styles.scss';
import '../scss/queries.scss';

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
    image.setAttribute('src', './assets/icons/open-list.svg');
  } else {
    closeAllFeatures(features);
    feature.classList.add('opened');
    content.style.maxHeight = content.scrollHeight + 'px';
    image.setAttribute('src', './assets/icons/close-list.svg');
  }
};

const closeAllFeatures = features => {
  features.forEach(feature => {
    if (feature.classList.contains('opened')) {
      feature.classList.remove('opened');
      const content = feature.querySelector('.feature-content');
      const image = feature.querySelector('.feature-icon');
      content.style.maxHeight = '0';
      image.setAttribute('src', './assets/icons/open-list.svg');
    }
  });
};
