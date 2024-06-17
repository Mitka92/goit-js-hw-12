import { fetchPhotos } from './js/pixabay-api';
import { renderPhotos } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import './css/styles.css';
import iconUrl from './img/octagon.svg';

const refs = {
  loader: document.querySelector('.loader'),
  galleryBox: document.querySelector('.gallery-box'),
  gallery: document.querySelector('.gallery'),
  form: document.querySelector('form'),
};

const lightbox = new SimpleLightbox('.link-card', {
  captionsData: 'alt',
  captionDelay: 250,
});

const iziToastSet = {
  message:
    'Sorry, there are no images matching your search query. Please try again!',
  backgroundColor: ' #EF4040',
  maxWidth: '432px',
  messageColor: '#FAFAFB',
  messageSize: '16',
  messageLineHeight: '24',
  position: 'topRight',
  iconUrl,
  progressBarColor: '#B51B1B',
};

refs.form.addEventListener('submit', async e => {
  e.preventDefault();
  const search = refs.form.elements.search.value.trim();
  if (search === '') {
    return;
  }

  try {
    enableLoader();
    const photos = await fetchPhotos(search);
    disableLoader();
    if (photos.hits.length > 0) {
      renderPhotos(photos.hits, refs.gallery);
      lightbox.refresh();
    } else {
      iziToast.show(iziToastSet);
      refs.gallery.innerHTML = '';
    }
  } catch (error) {
    console.log('Error:', error);
  }
  refs.form.reset();
});

function enableLoader() {
  refs.galleryBox.style.display = 'none';
  refs.loader.style.display = 'block';
}
function disableLoader() {
  refs.loader.style.display = 'none';
  refs.galleryBox.style.display = 'block';
}
