<template>
  <div class="item-project">
    <transition name="nav-menu-fade" appear>
      <Img_Modal v-if="MODAL_IMG_IS_ACTIVE" :images="project.presentation" />
    </transition>
    <div class="title-img-wrap">
      <div class="project-title">
        <span class="main-page_start-text">{{ project.title }}</span>
        <span class="main-page_small-text">{{ project.title_card }}</span>
      </div>
      <scroll-animation :opacity="false" cover>
        <img :src="getUrl(project.background_image.url)" alt="" class="dekstop"/>
        <img :src="getUrl(project.background_image_mobile ? project.background_image_mobile.url : project.background_image.url)" alt="" class="mobile"/>
      </scroll-animation>
      <div class="arrow" @click="scrollTo">
        <img src="/arrow-down.svg" alt="" />
      </div>
    </div>

    <client-only>
      <Tags_block
        :mainText="project.description"
        :tags="project.tags.tag"
        :presView="true"
      />

      <Item_Project_Content
        v-for="(item, index) in project.project_content"
        :key="index"
        :project="item"
      />
    </client-only>

    <div class="paginator-wrap">
      <Paginator :page="'/project'" :elIndex="elIndex" :elsArr="projectArr" />
    </div>

    <News />
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

  import Img_Modal from '~/components/Img_Modal';
  import Paginator from '~/components/shared/elements/Paginator';
  import Tags_block from '~/components/shared/Tags_block';
  import News from '../../components/shared/News';
  import Item_Project_Content from '../../components/Item_Project/Item_Project_Content';
  import Arrow_Btn from '../../components/shared/elements/Arrow_Btn';
  import axiosOption from '~/services/axios';

  export default {
    name: 'single-project',
    components: {
      Img_Modal,
      News,
      Item_Project_Content,
      Arrow_Btn,
      Tags_block,
      Paginator,
    },
    async asyncData({ error, params }) {
      try {
        const project = await axiosOption.getPage(
          'projects-lists/' + params.id,
        );
        const projectArr = await axiosOption.getPage('projects-lists');
        return { project: project.data, projectArr: projectArr.data };
      } catch (e) {
        error({
          statusCode: 503,
          message: 'Unable to fetch blogs at this time',
        });
      }
    },
    head() {
      if(this.project.SEO) {
        return {
          title: this.project.SEO.seoTitle,
          meta: [
            {
              hid: 'description',
              name: 'description',
              content: this.project.SEO.seoDescription,
            },
            {
              hid: 'fb:app_id',
              property: 'fb:app_id',
              content: 988674798283826,
            },
            {
              hid: 'og:title',
              property: 'og:title',
              content: this.project.SEO.seoTitle,
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
              content: this.project.SEO.seoDescription,
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
                (this.project.SEO.seoImage
                  ? this.project.SEO.seoImage.url
                  : '/uploads/28_s5_cam001_211541b7b2.jpg'),
            },
            {
              name: 'twitter:title',
              content: this.project.SEO.seoTitle,
            },
            {
              name: 'twitter:card',
              content: 'summary',
            },
            {
              name: 'twitter:description',
              content: this.project.SEO.seoDescription,
            },
            {
              name: 'twitter:site',
              content: 'website',
            },
            {
              name: 'twitter:image',
              content:
                'https://strapi.uparchitecture.nl/' +
                (this.project.SEO.seoImage
                  ? this.project.SEO.seoImage.url
                  : '/uploads/28_s5_cam001_211541b7b2.jpg'),
            },
          ],
        };
      }
      else {
        return {
          title: 'UP',
          meta: [
            {
              hid: 'description',
              name: 'description',
              content: 'UP',
            },
            {
              hid: 'fb:app_id',
              property: 'fb:app_id',
              content: 988674798283826,
            },
            {
              hid: 'og:title',
              property: 'og:title',
              content: 'UP',
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
              content: 'UP',
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
              content: 'UP',
            },
            {
              name: 'twitter:card',
              content: 'summary',
            },
            {
              name: 'twitter:description',
              content: 'UP',
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
        project: {},
      };
    },
    mounted() {
    if(process.client) {
      // add event listener for ESC key press and close modal
      document.addEventListener('keyup', this.closeModal);

    }},
    methods: {
      ...mapActions('app', ['setModalImgIsActive']),
      closeModal(e) {
        if (e.keyCode === 27 && this.MODAL_IMG_IS_ACTIVE) {
          this.setModalImgIsActive(false);
        }
      },
      scrollTo() {
        if (process.client) {
          const href = document.getElementsByClassName('description-block')[0];
          const offsetTop = href.offsetTop + 100;

          scroll({
            top: offsetTop,
            behavior: 'smooth',
          });
        }
      },
      getUrl(url) {
        return `https://strapi.uparchitecture.nl${url}`;
      },
    },
    computed: {
      ...mapGetters('app', ['MODAL_IMG_IS_ACTIVE']),

      elIndex() {
        return this.projectArr.map(el => el.id).indexOf(this.project.id);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .item-project {
    width: 100%;
    display: flex;
    flex-direction: column;

    .nav-menu-fade-enter,
    .nav-menu-fade-leave-to {
      opacity: 0;
      transform: scale(0);
    }

    .nav-menu-fade-enter-active,
    .nav-menu-fade-leave-active {
      transition: transform 0s, opacity 0s;
    }

    .title-img-wrap {
      position: relative;
      width: 100%;
      height: var(--winHeight);
      display: flex;
      align-items: center;
      transition: height 0.3s;
      .arrow {
        position: absolute;
        bottom: 50px;
        left: 50%;
        transform: translatex(-50%);
        z-index: 2;
        cursor: pointer;
        img {
          transition: 0.2s transform ease-in-out;
          @media (min-width: 429px) {
            width: 36px;
            height: 20px;
          }
        }
        &:hover img {
          transform: translateY(5px);
        }
      }
      .project-title {
        margin-right: var(--main-mini-margin);
        margin-left: var(--main-big-margin);
        position: absolute;
        display: flex;
        flex-direction: column;
        z-index: 1;
        @media (max-width: 428px) {
          margin-left: var(--main-big-margin);
        }
        @media (max-height: 500px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
          margin-left: var(--main-big-margin);
        }
      }
      img {
        width: 100%;
        object-fit: cover;
        filter: brightness(0.75);
      }
    }

    .paginator-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 180px;
      background-color: #fff;

      .paginator {
        align-self: center;
        width: 150px;
      }
    }
  }

  @media screen and (max-width: 1280px) {
    .item-project {
      .paginator-wrap {
        padding-bottom: 100px !important;
      }
    }
  }
</style>
