<template>
  <nuxt-link :to="`/news-lists/${id}`" class="gallery-item">
    <div class="gallery-item-img-wrap">
      <img :src="getUrl(img)" alt="" />
    </div>
    <span class="date-text">{{ getDate(date) }}</span>
    <span class="title">{{ title }}</span>
    <div class="teg-container">
      <span class="text-very-small" v-for="item in tags">{{ item.title }}</span>
    </div>
  </nuxt-link>
</template>

<script>
  export default {
    name: 'Gallery_item',
    props: ['id', 'img', 'title', 'date', 'tags'],
    methods: {
      getUrl(url) {
        return `https://strapi.uparchitecture.nl${url}`;
      },
      getDate(date) {
        let y = new Date(date).getFullYear(),
          m = ('0' + (new Date(date).getMonth() + 1)).slice(-2),
          d = ('0' + new Date(date).getDate()).slice(-2);
        return `${d}.${m}.${y}`;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .gallery-item {
    position: relative;
    width: 375px;
    height: auto;
    display: flex;
    flex-direction: column;
    cursor: pointer;

    .gallery-item-img-wrap {
      width: 100%;
      height: 340px;
      overflow: hidden;
      position: relative;
      &:hover img {
        transform: scale(1.2);
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 0.3s;
        display: block;
        object-position: center;
      }
    }
    a {
      cursor: pointer;
    }
    .title {
      font-family: Garamond, serif;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 141%;
      letter-spacing: -0.04em;
      color: #000000;
      margin-top: 14px;
    }

    .teg-container {
      max-width: 280px;
      display: flex;
      margin-top: 2px;
      justify-content: space-between;
    }
  }

  .classNoMargin {
    margin-right: 0;
  }

  @media screen and (max-width: 1280px) {
    .gallery-item {
      width: 300px;

      .gallery-item-img-wrap {
        height: 240px;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .gallery-item {
      width: 290px;

      .gallery-item-img-wrap {
        height: 230px;
      }
    }
  }
</style>
