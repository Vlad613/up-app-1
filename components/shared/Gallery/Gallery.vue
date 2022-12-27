<template>
  <div class="carousel-wrapper" id="spinnerBlock">
    <client-only>
      <swiper class="swiper" :options="swiperOption" @ready="onSwiperRedied">
        <swiper-slide class="slider-item d-project-item" v-for="(item, index) in news" :key="index">
          <Gallery_item :id="item.id" :img="item.background_image.url" :title="item.short_title"
            :date="item.date ? item.date : item.published_at" :tags="item.tags_news" />
        </swiper-slide>
      </swiper>
    </client-only>
  </div>
</template>

<script>
import Gallery_item from './Gallery_item';

export default {
  name: 'Gallery',
  components: { Gallery_item },

  async fetch() {
    const results = await fetch(
      'https://strapi.uparchitecture.nl/news-lists',
    ).then(res => res.json());
    results.sort(function (a, b) {
      // Convert the date strings to dates
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      // Compare the dates and return a value based on the comparison
      if (dateA > dateB) {
        return -1;
      } else if (dateA < dateB) {
        return 1;
      } else {
        return 0;
      }
    });
    const padding = results.length - 4
    const lastElements = results.splice(results.length - padding, padding);
    results.unshift(...lastElements);
    this.news = results;
    for (let i = 0; i < this.news.length; i++) {
      console.log(this.news[i].date)
    }
  },

  data() {
    return {
      news: {},
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        loop: true,
        loopedSlides: 5,
        freeMode: true,
        centeredSlides: true,
      },
    };
  },
  methods: {
    onSwiperRedied(swiper) {
      setTimeout(function () {
        swiper.slideReset();
      }, 500);
    },
  },
};
</script>

<style scoped>
.carousel-wrapper {
  width: 100%;
  overflow: hidden;
  cursor: none;
}

.img-wrapper {
  min-height: 300px;
  outline: 0;
}

.img-wrapper img {
  pointer-events: none;
}

.slider-item {
  width: auto;
}
</style>
