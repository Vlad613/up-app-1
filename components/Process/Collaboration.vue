<template>
  <div class="collaboration">
    <span class="block-title">collaboration</span>
    <span class="content-title process_content-title_margin">{{
      data.title
    }}</span>

    <div class="content-block">
      <div class="content-column-1">
        <p class="content-p" v-html="data.description" />
      </div>
      <div class="content-column-2">
        <div class="img-wrap process_img-wrap_height">
          <scroll-animation :opacity="false">
            <img :src="getUrl(data.image.url)" alt="" />
          </scroll-animation>
        </div>

        <p
          class="content-p process_img-description_margin-top process_img-description_width" v-html="data.description_image"
        >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Collaboration',
    props: {
      data: {
        type: Object,
        default: {},
      },
    },
    methods: {
      getUrl(url) {
        return `https://strapi.uparchitecture.nl${url}`;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .collaboration {
    display: flex;
    flex-direction: column;
    margin-bottom: 288px;

    .block-title {
      margin-left: var(--main-big-margin);
    }

    .content-block {
      display: flex;
      width: 100%;

      .content-column-1 {
        display: flex;
        flex-direction: column;
        width: calc(
          270px + var(--main-big-margin) + var(--main-very-mini-margin)
        );

        .content-p {
          display: flex;
          width: 270px;
          margin-left: var(--main-big-margin);
          margin-right: var(--main-very-mini-margin);
        }
      }

      .content-column-2 {
        width: calc(
          100% - 270px - var(--main-big-margin) - var(--main-very-mini-margin)
        );
        display: flex;
        flex-direction: column;

        .img-wrap {
          width: 100%;
        }

        .content-p {
          width: calc(100% - var(--main-mini-margin));
        }

        .content-p {
          align-self: flex-end;
          margin-right: var(--main-mini-margin);
          margin-left: 0;
        }
      }
    }
  }

  @media screen and (max-width: 1280px) {
    .collaboration {
      margin-bottom: 182px;
      .content-block {
        display: flex;
        width: 100%;
        .content-column-1 {
          width: calc(50% + var(--main-very-mini-margin) / 2);
          .content-p {
            margin-left: var(--main-big-margin);
            margin-right: var(--main-very-mini-margin);
            width: unset;
          }
        }
        .content-column-2 {
          width: calc(50% - var(--main-very-mini-margin) / 2);
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .collaboration {
      margin-bottom: 114px;
      .content-title {
        margin-bottom: 72px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .collaboration {
      margin-bottom: 104px;
      .content-title {
        margin-top: 40px;
        margin-bottom: 18px;
      }
    }
  }
  @media screen and (max-width: 428px) {
    .collaboration {
      margin-bottom: 117px;
      .content-title {
        margin-top: 83px;
        margin-bottom: 50px;
      }
      .content-block {
        flex-direction: column;
        .content-column-1 {
          width: unset;
          margin-bottom: 50px;
        }
        .content-column-2 {
          width: unset;
          .content-p {
            width: unset;
            margin-left: var(--main-big-margin);
          }
        }
      }
    }
  }
</style>
