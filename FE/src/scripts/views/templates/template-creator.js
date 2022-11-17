/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
<h1>Detail Resto</h1>
<div class="resto-details>
  <div class="resto-info">
    <div class="container-detail">
      <article class="description">
        <h1>${resto.name}</h1>
        <div class="desc__content">
          <div class="thumbnail">
            <div class="resto-img">
              <img
              src="${CONFIG.SMALL_BASE_IMAGE_URL + resto.pictureId}"
                alt="Gambar restaurant ${resto.name}">
            </div>
          </div>
          <p>${resto.description}</p>
        </div>
      </article>

      <section class="info">
        <article class="main-info">
          <h2>Informasi</h2>
          <h3>Alamat</h3>
          <p>${resto.address}</p>
          <h3>Kota</h3>
          <p>${resto.city}</p>
          <h3>Rating</h3>
          <p>${resto.rating}</p>
          <h3>Ketegori Menu</h3>
          <ul>
            <li>${resto.categories.map((category) => category.name).join(' <li> ')}</li>
          </ul>
        </article>

        <article class="resto-menus">
          <h2>Daftar Menu</h2>
          <div class="menus">
            <div class="food">
              <h3>Makanan</h3>
              <ul>
                <li>${resto.menus.foods.map((food) => food.name).join(' <li> ')}</li>
              </ul>
            </div>
            <div class="drink">
              <h3>Minuman</h3>
              <ul>
                <li>${resto.menus.drinks.map((drink) => drink.name).join(' <li> ')}</li>
              </ul>
            </div>
          </div>
        </article>
      </section>
    </div>
  </div>
    <div class="resto-review">
      <h2>Reviews</h2>
      <ul>
        <li class="review-item">
          ${resto.customerReviews.map((review) => `
          <img
              src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
              alt="Foto dari akun ${review.name}"
              width="48"
              height="48"
              class="reviewer_photo"
              >
          <div class="review-content">
          <p class="reviewer_name">${review.name}</p>
          <p class="reviewer_date">${review.date}</p>
          <p class="reviewer_comment">"${review.review}"</p>
          </div>
          `).join('<br>')}
        </li>
      </ul>
    </div>
</div>
`;

const createRestoItemTemplate = (resto) => `
<article class="post-item">
        <span class="post-item_city">
             <b>${resto.city}</b>
           </span>
        <img class="post-item_thumbnail"
             src="${CONFIG.SMALL_BASE_IMAGE_URL + resto.pictureId}"
             alt="Gambar restaurant ${resto.name}">
        <div class="post-item_content">
          <p class="post-item_rating"><span class="material-symbols-outlined">
          star</span>${resto.rating}</p>
          <h1 class="post-item_title"><a href="/#/detail/${resto.id}">${resto.name}</a></h1>
          <p class="post-item_description">${resto.description}</p>
        </div>
      </article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like like-solid">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
