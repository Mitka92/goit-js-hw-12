import { fetchPhotos } from './js/pixabay-api';
import { renderPhotos } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import './css/styles.css';
import iconUrl from './img/octagon.svg';

let search = '';
let page = 1;
let totalPages;

const refs = {
  loader: document.querySelector('.loader'),
  galleryBox: document.querySelector('.gallery-box'),
  gallery: document.querySelector('.gallery'),
  form: document.querySelector('form'),
  btnMore: document.querySelector('.btn-more'),
};

const lightbox = new SimpleLightbox('.link-card', {
  captionsData: 'alt',
  captionDelay: 250,
});

const iziToastSet = {
  message: '',
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
  disableMoreBtn();
  search = refs.form.elements.search.value.trim();
  if (search === '') {
    return;
  }
  refs.gallery.innerHTML = '';
  page = 1;
  try {
    enableLoader();
    const photos = await fetchPhotos(search, page);
    disableLoader();
    totalPages = Math.ceil(photos.totalHits / 15);
    if (photos.hits.length > 0 && totalPages > 1) {
      renderPhotos(photos.hits, refs.gallery);
      lightbox.refresh();
      enableMoreBtn();
    } else if (photos.hits.length > 0) {
      renderPhotos(photos.hits, refs.gallery);
      lightbox.refresh();
    } else {
      iziToastSet.message =
        'Sorry, there are no images matching your search query. Please try again!';
      iziToast.show(iziToastSet);
      refs.gallery.innerHTML = '';
    }
  } catch (error) {
    console.log('Error:', error);
  }
  refs.form.reset();
});

refs.btnMore.addEventListener('click', async () => {
  page += 1;
  try {
    enableLoader();
    const photos = await fetchPhotos(search, page);
    disableLoader();
    renderPhotos(photos.hits, refs.gallery);
    scroll();
    if (page === totalPages) {
      disableMoreBtn();
      iziToastSet.message =
        "We're sorry, but you've reached the end of search results.";
      iziToast.show(iziToastSet);
    }
    lightbox.refresh();
  } catch (error) {
    console.log('Error:', error);
  }
});

function enableLoader() {
  refs.loader.classList.remove('hidden');
}
function disableLoader() {
  refs.loader.classList.add('hidden');
}
function enableMoreBtn() {
  refs.btnMore.classList.remove('hidden');
}
function disableMoreBtn() {
  refs.btnMore.classList.add('hidden');
}
function scroll() {
  window.scrollBy({
    top:
      document.querySelector('.gallery-item').getBoundingClientRect().height *
      2,
    left: 0,
    behavior: 'smooth',
  });
}
