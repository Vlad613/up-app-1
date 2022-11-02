<template>
  <div
    :class="[
      'projects-block',
      { 'projects-block_projects-page': this.$route.path === '/project' },
    ]"
  >
    <!--    <span class="main-page__content-title-position block-title">{{-->
    <!--      title-->
    <!--    }}</span>-->
    <div
      v-if="this.$route.path === '/project'"
      class="description pages-content-margin-left-big"
    >
      <div class="description-title">
        <div class="content-title" v-html="projectsPage.title_content"></div>
      </div>
      <p class="content-p" v-html="projectsPage.description"></p>
    </div>

    <div :class="contentBlockClasses">
      <nuxt-link
        :to="'/project/' + item.id"
        :class="[
          'content-img-wrap',
          { 'content-img-wrap-big': bigClass(index) && checkProjectPage },
        ]"
        v-for="(item, index) in projectsList"
        v-if="checkProjectPage ? item : index < 4"
        :key="index"
      >
        <ScrollAnimation class="cover" translate :opacity="false">
          <img :src="getUrl(item.preview.url)" alt=""/>
        </ScrollAnimation>
        <div class="item-project-title">
          <span class="item-project-title-text">
            {{ item.title_card }}
          </span>
          <span class="item-project-title-text-2">
            {{ item.title }}
          </span>
        </div>
      </nuxt-link>
      <div :class="['special-container', getClass(projectView)]"
           v-for="(projectView, index) in projectsPage.projects_view" :key="`project_view${index}`"
           v-if="checkProjectPage">
        <nuxt-link
          :to="'/project/' + projectView.left.projects_list.id"
          :class="[
          'content-img-wrap', 'special'
        ]"
          v-if="projectView.left.projects_list"
        >
          <ScrollAnimation class="cover" translate :opacity="false" :scale="{start: 100, end: 110}" :translate-y="false">
            <img :src="getUrl(projectView.left.projects_list.preview.url)" alt=""/>
          </ScrollAnimation>
          <div class="item-project-title">
          <span class="item-project-title-text">
            {{ projectView.left.projects_list.title_card }}
          </span>
            <span class="item-project-title-text-2">
            {{ projectView.left.projects_list.title }}
          </span>
          </div>
        </nuxt-link>
        <nuxt-link
          :to="'/project/' + projectView.left[0].projects_list.id"
          :class="[
          'content-img-wrap', 'special'
        ]"
          v-if="projectView.left[0]"
        >
          <ScrollAnimation class="cover" translate :opacity="false" :scale="{start: 100, end: 110}" :translate-y="false">
            <img :src="getUrl(projectView.left[0].projects_list.preview.url)" alt=""/>
          </ScrollAnimation>
          <div class="item-project-title">
          <span class="item-project-title-text">
            {{ projectView.left[0].projects_list.title_card }}
          </span>
            <span class="item-project-title-text-2">
            {{ projectView.left[0].projects_list.title }}
          </span>
          </div>
        </nuxt-link>
        <nuxt-link
          :to="'/project/' + projectView.left[1].projects_list.id"
          :class="[
          'content-img-wrap', 'special'
        ]"
          v-if="projectView.left[1]"
        >
          <ScrollAnimation class="cover" translate :opacity="false" :scale="{start: 100, end: 110}" :translate-y="false">
            <img :src="getUrl(projectView.left[1].projects_list.preview.url)" alt=""/>
          </ScrollAnimation>
          <div class="item-project-title">
          <span class="item-project-title-text">
            {{ projectView.left[1].projects_list.title_card }}
          </span>
            <span class="item-project-title-text-2">
            {{ projectView.left[1].projects_list.title }}
          </span>
          </div>
        </nuxt-link>
        <nuxt-link
          :to="'/project/' + projectView.right.projects_list.id"
          :class="[
          'content-img-wrap', 'special'
        ]"
          v-if="projectView.right.projects_list"
        >
          <ScrollAnimation class="cover" translate :opacity="false" :scale="{start: 100, end: 110}" :translate-y="false">
            <img :src="getUrl(projectView.right.projects_list.preview.url)" alt=""/>
          </ScrollAnimation>
          <div class="item-project-title">
          <span class="item-project-title-text">
            {{ projectView.right.projects_list.title_card }}
          </span>
            <span class="item-project-title-text-2">
            {{ projectView.right.projects_list.title }}
          </span>
          </div>
        </nuxt-link>
        <nuxt-link
          :to="'/project/' + projectView.right[0].projects_list.id"
          :class="[
          'content-img-wrap', 'special'
        ]"
          v-if="projectView.right[0]"
        >
          <ScrollAnimation class="cover" translate :opacity="false" :scale="{start: 100, end: 110}" :translate-y="false">
            <img :src="getUrl(projectView.right[0].projects_list.preview.url)" alt=""/>
          </ScrollAnimation>
          <div class="item-project-title">
          <span class="item-project-title-text">
            {{ projectView.right[0].projects_list.title_card }}
          </span>
            <span class="item-project-title-text-2">
            {{ projectView.right[0].projects_list.title }}
          </span>
          </div>
        </nuxt-link>
        <nuxt-link
          :to="'/project/' + projectView.right[1].projects_list.id"
          :class="[
          'content-img-wrap', 'special'
        ]"
          v-if="projectView.right[1]"
        >
          <ScrollAnimation class="cover" translate :opacity="false" :scale="{start: 100, end: 110}" :translate-y="false">
            <img :src="getUrl(projectView.right[1].projects_list.preview.url)" alt=""/>
          </ScrollAnimation>
          <div class="item-project-title">
          <span class="item-project-title-text">
            {{ projectView.right[1].projects_list.title_card }}
          </span>
            <span class="item-project-title-text-2">
            {{ projectView.right[1].projects_list.title }}
          </span>
          </div>
        </nuxt-link>
      </div>
    </div>

    <div v-if="this.$route.path !== '/project'" class="project_btn_wrap">
      <nuxt-link :to="'/project'">
        <Content_btn title="Explore all projects"/>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import ScrollAnimation from './../ScrollAnimation';
import Content_btn from './elements/Content_btn';

import axios from 'axios';

export default {
  name: 'Projects',
  components: {ScrollAnimation, Content_btn},
  async fetch() {
    function compare(a, b) {
      if (a.sort < b.sort) {
        return -1;
      }
      if (a.sort > b.sort) {
        return 1;
      }
      return 0;
    }

    this.projectsList = await fetch(
      'https://strapi-up.verodigital.site/projects-lists',
    ).then(res => res.json());
    this.projectsList = this.projectsList.sort(compare)
    this.projectsPage = await fetch(
      'https://strapi-up.verodigital.site/project',
    ).then(res => res.json());
  },

  data() {
    return {
      projectsList: {},
      projectsPage: {},
    };
  },
  methods: {
    getUrl(url) {
      return `https://strapi-up.verodigital.site${url}`;
    },
    bigClass(idx) {
      return idx === 0 || idx === 5;
    },
    getClass(prjectView) {
      if (prjectView.__component.includes('2left-1right')) {
        return 'special-container_2left-1right'
      }
      if (prjectView.__component.includes('1left-2right')) {
        return 'special-container_1left-2right'
      }
      if (prjectView.__component.includes('1left-1right')) {
        return 'special-container_1left-1right'
      }
      return ''
    }
  },
  computed: {
    title() {
      return this.$route.path === '/project'
        ? 'projects'
        : 'featured projects';
    },
    checkProjectPage() {
      return this.$route.path === '/project';
    },
    contentBlockClasses() {
      return [
        'content-block',
        'main-content-margin-left-right',
        {'content-block-project-page-margin-top': this.checkProjectPage},
        {'content-block-project-page-margin-bottom': this.checkProjectPage},
        {'project-block-leave-one': this.checkProjectPage}
      ];
    },
  },
};
</script>

<style lang="scss">
.projects-block {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 210px;

  .description {
    display: flex;
    flex-direction: column;
    margin-right: var(--main-mini-margin);

    .description-title {
      margin-top: 83px;
      margin-bottom: 35px;

      br {
        display: none;
        @media (max-width: 1440px) {
          display: block;
        }
      }
    }

    .content-p {
      white-space: pre-line;
    }
  }

  .content-block {
    margin-top: var(--main-very-mini-margin);
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .special-container {
      width: 100%;
      display: grid;
      gap: var(--main-very-mini-margin);
      margin-bottom: var(--main-very-mini-margin);
      &.special-container_2left-1right {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas:
        "child1 child2"
        "child3 child2";
        a {
          &:nth-child(1) {
            grid-area: child1;
            height: 0;
            padding-top: 64.04%;
            .scale-wrapper {
              position: absolute;
              top: 0;
              left: 0;
            }
          }
          &:nth-child(2) {
            grid-area: child2;
            height: 100%;
          }
          &:nth-child(3) {
            grid-area: child3;
            padding-top: 64.04%;
            height: 0;
            .scale-wrapper {
              position: absolute;
              top: 0;
              left: 0;
            }
          }
        }
      }
      &.special-container_1left-2right {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas:
        "child1 child2"
        "child1 child3";
        a {
          &:nth-child(1) {
            grid-area: child1;
            height: 100%;
          }
          &:nth-child(2) {
            grid-area: child2;
            height: 0;
            padding-top: 64.04%;
            .scale-wrapper {
              position: absolute;
              top: 0;
              left: 0;
            }
          }
          &:nth-child(3) {
            grid-area: child3;
            height: 0;
            padding-top: 64.04%;
            .scale-wrapper {
              position: absolute;
              top: 0;
              left: 0;
            }
          }
        }
      }
      &.special-container_1left-1right {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        grid-template-areas:
        "child1 child2";
        a {
          &:nth-child(1) {
            grid-area: child1;
            height: 0;
            padding-top: 64.04%;
            .scale-wrapper {
              position: absolute;
              top: 0;
              left: 0;
            }
          }
          &:nth-child(2) {
            grid-area: child2;
            height: 0;
            padding-top: 64.04%;
            .scale-wrapper {
              position: absolute;
              top: 0;
              left: 0;
            }
          }
        }
      }
      @media (max-width: 1024px) {
        display: none;
      }
    }
    &.project-block-leave-one {
      a:not(.special) {
        display: none;
        @media (max-width: 1024px) {
          display: flex;
        }

        &:nth-child(1) {
          display: flex;
        }
      }

      a.special {
        display: flex;
        width: 100%;
        margin-bottom: 0;
        overflow: hidden;
        @media (max-width: 1024px) {
          display: none;
        }
      }
    }

    .content-img-wrap {
      position: relative;
      width: calc((100% - var(--main-very-mini-margin)) / 2);
      height: 740px;
      margin-bottom: var(--main-very-mini-margin);
      display: flex;
      @media (max-width: 1440px) {
        height: 640px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        min-height: 100%;
      }

      & .image-scale-block_wrap .image-scale-img {
        cursor: pointer;
      }

      .item-project-title {
        position: absolute;
        bottom: 60px;
        left: 60px;
        cursor: pointer;
        display: flex;
        flex-direction: column;

        .item-project-title-text {
          font-family: SFProDisplay;
        }

        .item-project-title-text-2,
        .item-project-title-text {
          cursor: pointer;
        }
      }
    }

    .content-img-wrap-big {
      width: 100%;
      margin-bottom: 100px;
      margin-top: 40px;

      & > div {
        width: inherit;
      }

      img {
        width: 100%;
      }
    }
  }

  .content-block-project-page-margin-top {
    margin-top: 42px;
  }

  .content-block-project-page-margin-bottom {
    margin-bottom: 2px;
  }

  .project_btn_wrap {
    width: max-content;
    height: max-content;
    margin-right: var(--main-big-margin);
    align-self: flex-end;
  }
}

.projects-block_projects-page {
  margin-bottom: 100px;
}

@media screen and (max-width: 1280px) {
  .projects-block {
    .description {
      .description-title {
        flex-direction: column;
        margin-bottom: 19px;
        white-space: unset;
      }
    }

    .content-block {
      margin-bottom: 0;

      .content-img-wrap {
        height: 520px;
      }

      .content-img-wrap-big {
        width: 100%;
        margin-bottom: 100px;
        margin-top: 60px;
      }
    }
  }
  .content-block-project-page-margin-top {
    margin-top: 40px !important;
  }
  .projects-block_projects-page {
    margin-bottom: 60px;
  }
}

@media screen and (max-width: 1024px) {
  .projects-block {
    margin-bottom: 111px;

    .description {
      .description-title {
        margin-bottom: 40px;
      }
    }

    .content-block {
      margin-top: 57px;

      .content-img-wrap {
        height: 560px;
      }

      .content-img-wrap-big {
        width: 100%;
        margin-bottom: 100px;
        margin-top: 60px;
        height: 526px;
      }
    }

    .content-block-project-page-margin-top {
      margin-top: 40px !important;
    }
  }
}

@media screen and (max-width: 768px) {
  .projects-block {
    margin-bottom: 84px;

    .description {
      .description-title {
        margin-top: 50px;
      }
    }

    .content-block {
      margin-top: 124px;

      .content-img-wrap {
        height: 440px;

        .item-project-title {
          bottom: 30px;
          left: 48px;
        }
      }

      .content-img-wrap-big {
        width: 100%;
        margin-bottom: 50px;
        margin-top: 50px;
      }
    }

    .content-block-project-page-margin-top {
      margin-top: 0 !important;
    }
  }
}

@media screen and (max-width: 428px) {
  .projects-block {
    margin-bottom: 131px;

    .description {
      .description-title {
        margin-top: 82px;
        margin-bottom: 30px;
      }
    }

    .content-block {
      margin-top: 30px !important;
      margin-left: 0;
      margin-right: 0;

      .content-img-wrap {
        width: 100%;
        margin-bottom: 50px;
        height: 470px;

        img {
          filter: brightness(0.8);
        }

        .item-project-title {
          bottom: 60px;
          left: 60px;
          width: unset;
        }
      }

      .content-img-wrap-big {
        width: 100%;
        margin-bottom: 50px;
        margin-top: 0;
      }
    }

    .project_btn_wrap {
      align-self: flex-start;
      margin-right: 0;
      margin-left: var(--main-big-margin);
    }
  }
}
</style>
