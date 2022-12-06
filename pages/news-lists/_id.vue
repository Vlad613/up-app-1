<template>
  <div class="item-news">
    <div class="title-img-wrap">
      <scroll-animation :opacity="false" cover>
        <img :src="getUrl(news.background_image.url)" alt=""/>
      </scroll-animation>
    </div>
    <div class="content">
      <span class="date-text">{{ getDate(news.date ? news.date : news.published_at) }}</span>
      <span class="item-project-title-text">{{ news.title }}</span>
    </div>

    <Tags_block :mainText="news.main_text"
                :tags="news.tags.tag"
                :presView="false"/>


    <div class="project-content">
      <div :class="`content-type-${index % 2 === 0 ? 1 : 2}`" v-for="(item, index) in news.news_image_block_1" :key="item.id" v-if="item.image || item.description">
        <div
          :class="[`content-type-${index % 2 === 0 ? 1 : 2}_img-wrap`]" v-if="item.image">
          <ScrollAnimation :opacity="false" v-if="item.image">
            <img :src="getUrl(item.image.url)" alt=""/>
          </ScrollAnimation>
        </div>
        <p
          v-if="item.description !== undefined && item.description && item.description !== ''"
          class="item-project_img-description_width
         item-project_img-description_margin-top
         content-p"
        >
          {{ item.description }}
        </p>
      </div>
    </div>

    <div class="paginator-wrap">
      <Paginator :page="'/news-lists'"
                 :elIndex="elIndex"
                 :elsArr="newsArr"/>
    </div>

  </div>
</template>

<script>
import Tags_block from "~/components/shared/Tags_block";
import ScrollAnimation from '../../components/ScrollAnimation';
import Arrow_Btn from '../../components/shared/elements/Arrow_Btn';
import Paginator from "~/components/shared/elements/Paginator";
import axiosOption from '~/services/axios';

export default {
  name: 'Item_News',
  components: {ScrollAnimation, Arrow_Btn, Tags_block, Paginator},
  async asyncData({error, params}) {
    try {
      const news = await axiosOption.getPage('news-lists/' + params.id);
      const newsArr = await axiosOption.getPage('news-lists');
      return {news: news.data, newsArr: newsArr.data};
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch blogs at this time',
      });
    }
  },
  head() {
    if(this.news.SEO) {
      return {
        title: this.news.SEO.seoTitle ? this.news.SEO.seoTitle : 'News Title',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.news.SEO.seoDescription ? this.news.SEO.seoDescription : 'Description',
          },
          {
            hid: 'fb:app_id',
            property: 'fb:app_id',
            content: 988674798283826,
          },
          {
            hid: 'og:title',
            property: 'og:title',
            content: this.news.SEO.seoTitle ? this.news.SEO.seoTitle : 'News Title',
          },
          {
            hid: 'og:url',
            property: 'og:url',
            content: 'http://localhost:3000',
          },
          {
            hid: 'og:type',
            property: 'og:type',
            content: 'website',
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: this.news.SEO.seoDescription ? this.news.SEO.seoDescription : 'Description',
          },
          {
            hid: 'og:site_name',
            property: 'og:site_name',
            content: 'up',
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content:
              'https://strapi.uparchitecture.nl/' +
              (this.news.SEO.seoImage
                ? this.news.SEO.seoImage.url
                : '/uploads/28_s5_cam001_211541b7b2.jpg'),
          },
          {
            name: 'twitter:title',
            content: this.news.SEO.seoTitle ? this.news.SEO.seoTitle : 'News Title',
          },
          {
            name: 'twitter:card',
            content: 'summary',
          },
          {
            name: 'twitter:description',
            content: this.news.SEO.seoDescription ? this.news.SEO.seoDescription : 'Description',
          },
          {
            name: 'twitter:site',
            content: 'website',
          },
          {
            name: 'twitter:image',
            content:
              'https://strapi.uparchitecture.nl/' +
              (this.news.SEO.seoImage
                ? this.news.SEO.seoImage.url
                : '/uploads/28_s5_cam001_211541b7b2.jpg'),
          },
        ],
      };
    } else {
      return {
        title: 'News Title',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Description',
          },
          {
            hid: 'fb:app_id',
            property: 'fb:app_id',
            content: 988674798283826,
          },
          {
            hid: 'og:title',
            property: 'og:title',
            content: 'News Title',
          },
          {
            hid: 'og:url',
            property: 'og:url',
            content: 'http://localhost:3000',
          },
          {
            hid: 'og:type',
            property: 'og:type',
            content: 'website',
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: 'Description',
          },
          {
            hid: 'og:site_name',
            property: 'og:site_name',
            content: 'up',
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content:
              'https://strapi.uparchitecture.nl/' +
              '/uploads/28_s5_cam001_211541b7b2.jpg',
          },
          {
            name: 'twitter:title',
            content: 'News Title',
          },
          {
            name: 'twitter:card',
            content: 'summary',
          },
          {
            name: 'twitter:description',
            content: 'Description',
          },
          {
            name: 'twitter:site',
            content: 'website',
          },
          {
            name: 'twitter:image',
            content:
              'https://strapi.uparchitecture.nl/' +
              '/uploads/28_s5_cam001_211541b7b2.jpg',
          },
        ],
      };
    }
  },

  data() {
    return {
      news: {},
    };
  },
  computed: {
    elIndex() {
      return this.newsArr.map(el => el.id).indexOf(this.news.id)
    }
  },
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
.item-news {
  width: 100%;
  display: flex;
  flex-direction: column;

  .title-img-wrap {
    position: relative;
    width: 100%;
    height: 730px;
    display: flex;
    align-items: center;
    transition: height 0.3s;
  }

  .content {
    display: flex;
    flex-direction: column;
    margin-left: var(--main-big-margin);
    margin-right: var(--main-mini-margin);

    .date-text {
      margin-top: 57px;
    }

    .item-project-title-text {
      color: black;
      margin-top: 11px;
      margin-bottom: 35px;
    }
  }

  .description-block{
    padding-top: 0;
  }

  .project-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    background-color: #fff;

    &.project-content-4 {
      background-color: transparent;
      position: relative;
      height: 100vh;
    }

    .content-type-1 {
      width: 100%;
      margin-right: var(--main-mini-margin);
      display: flex;
      flex-direction: column;
      margin-bottom: 144px;

      .content-type-1_img-wrap {
        max-width: calc(100% - var(--main-mini-margin));
        width: auto;
        height: fit-content;
        .scale-content {
          text-align: left;
        }
      }

      .content-p {
        margin-left: var(--main-big-margin);
      }
    }

    .content-type-2 {
      width: 70%;
      display: flex;
      flex-direction: column;
      align-self: flex-end;
      margin-bottom: 167px;

      .content-type-2_img-wrap {
        max-width: 100%;
        width: auto;
        height: fit-content;
        .scale-content {
          text-align: right;
        }
      }

      .content-p {
        align-self: flex-end;
        margin-right: var(--main-mini-margin);
      }
    }
    & > div:last-child {
      margin-bottom: 0;
    }
  }


  .paginator-wrap {
    align-self: center;
    margin-top: 157px;
    width: 150px;
  }
}

@media screen and (max-width: 1280px) {
  .item-news {
    .project-content {
      .content-type-1 {
        margin-right: 0;
        margin-bottom: 57px;

        .content-type-1_img-wrap {
          width: 100%;
        }
      }

      .content-type-2 {
        margin-bottom: 57px;
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .item-news {
    .title-img-wrap {
      height: 520px;
    }

    .content {
      .date-text {
        margin-top: 60px;
      }

      .item-project-title-text {
        margin-bottom: 64px;
      }

      //.news-img-wrap {
      //  height: 440px;
      //  margin: 117px 0 100px 0;
      //}
    }

    .project-content {
      .content-type-1 {
        margin-bottom: 90px;
      }

      .content-type-2 {
        width: 73%;
        margin-bottom: 90px;
      }
    }

    .paginator-wrap {
      margin-top: 160px;
    }
  }
}

@media screen and (max-width: 768px) {
  .item-news {
    .title-img-wrap {
      height: 546px;
    }

    .content {
      .date-text {
        margin-top: 40px;
      }

      .item-project-title-text {
        margin-bottom: 43px;
      }

      //.news-img-wrap {
      //  margin: 41px 0 41px 0;
      //}
    }

    .project-content {
      .content-type-1 {
        margin-bottom: 60px;

        .content-p {
          align-self: flex-end;
          margin-right: var(--main-mini-margin);
        }
      }

      .content-type-2 {
        width: 72%;
        margin-bottom: 60px;
      }
    }

    .paginator-wrap {
      margin-top: 90px;
    }
  }
}

@media screen and (max-width: 428px) {
  .item-news {
    .title-img-wrap {
      height: 420px;
    }

    .content {
      .date-text {
        margin-top: 60px;
      }

      .item-project-title-text {
        margin-bottom: 33px;
      }

      //.news-img-wrap {
      //  margin: 30px 0 30px 0;
      //}
    }

    .project-content {
      .content-type-1 {
        margin-bottom: 50px;
      }

      .content-type-2 {
        width: 100%;
        margin-bottom: 50px;

        .content-p {
          margin-left: var(--main-big-margin);
        }
      }
    }

    .paginator-wrap {
      margin-top: 100px;
    }
  }
}
</style>
