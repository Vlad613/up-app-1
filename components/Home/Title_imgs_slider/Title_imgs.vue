<template>
  <transition-group
    tag="div"
    class="main-page_title-imgs__container"
    name="slide-images"
  >
    <div
      v-for="(item, key, idx) in data"
      v-show="slideIdx >= idx"
      :key="key"
      :class="['block-wrap', 'block-wrap-' + key]"
    >
      <div class="block">
        <div class="start-span_with-logo_wrap" ref="startSpanWithLogoWrap">
          <transitionGroup
            tag="div"
            class="translateY-group"
            name="translateY-opacity"
          >
            <start_span_item
              v-for="(text, k) in data[key].text_iteration"
              v-if="slideText[key] >= k + 1"
              :key="k"
              :text="text.text"
              textStyleClass="start-text"
            />
            <span
              v-if="slideText[key] >= data[key].text_iteration.length + 1"
              :key="data[key].text_iteration.length + 1"
              style="display: block"
            >
              <start_span_item
                v-if="data[key].link"
                :text="data[key].link.name || ''"
                textStyleClass="small-text"
                :link="data[key].link.link || ''"
              />
            </span>
          </transitionGroup>
        </div>
        <div class="arrow" @click="scrollTo" v-if="slideIdx != 0">
          <img src="/arrow-down.svg" alt="" />
        </div>
        <img
          class="title-imgs_img desktop"
          :src="getUrl(data[key].background_image.url)"
          alt=""
        />
        <img
          class="title-imgs_img mobile"
          :src="getUrl(data[key].background_image_mobile ? data[key].background_image_mobile.url : data[key].background_image.url)"
          alt=""
        />
      </div>
    </div>
  </transition-group>
</template>

<script>
  import start_span_item from './start_span_item';
  export default {
    props: {
      data: {
        type: Object,
        default: {},
      },
    },
    name: 'Title_imgs',
    data() {
      return {
        keyData: Object.keys(this.data),
        slideInt: 0,
        slideIdx: 0,
        slideText: {
          one: 0,
          two: 0,
          three: 0,
          four: 0,
        },
      };
    },
    components: { start_span_item },
    created() {
      this.$store.dispatch('app/setLogoStartHeight', true);
    },
    mounted() {
      this.keyData.map((key, idx) => {
        let textItemLength = this.data[key].text_iteration.length;

        if (this.data[key].link) {
          textItemLength++;
        }

        this.slideInt += textItemLength + 2;

        this.changeSlide(key, this.slideInt, textItemLength);
      });
    },
    methods: {
      scrollTo() {
        if (process.client) {
          const href = document.getElementById('studio');
          const offsetTop = href.offsetTop + 100;

          scroll({
            top: offsetTop,
            behavior: 'smooth',
          });
        }
      },
      changeSlide(key, length) {
        if (key === 'one') {
          this.changeSlideText(this.keyData[this.slideIdx]);
        }
        setTimeout(() => {
          this.slideIdx++;
          if (key === 'one') {
            this.$store.dispatch('app/setLogoStartHeight', false);
          }
          if (key !== 'four') {
            this.changeSlideText(this.keyData[this.slideIdx]);
          }
        }, 1000 * (length));
      },
      changeSlideText(key) {
        let interval = setInterval(() => {
          let textItemLength = this.data[key].text_iteration.length;

          if (this.data[key].link) {
            textItemLength++;
          }

          if (textItemLength === this.slideText[key]) {
            clearInterval(interval);
          } else {
            this.slideText[key]++;
          }
        }, 1000);
      },
      getUrl(url) {
        return `https://strapi.uparchitecture.nl${url}`;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .main-page_title-imgs__container {
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 500;
    height: var(--winHeight);
    .block-wrap:first-child {
      height: var(--winHeight);
    }

    .block-wrap {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      height: var(--winHeight);
      background-color: #fff;
      &.block-wrap-one {
        .block {
          .start-span_with-logo_wrap {
            top: 50vh;
          }
        }
      }
      .block {
        top: 0;
        left: 0;
        width: 100%;
        height: var(--winHeight);
        overflow: hidden;
        display: flex;
        position: sticky;
        transition: height 0.3s;

        .title-imgs_img {
          position: absolute;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
          filter: brightness(0.82);
        }
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
        .start-span_with-logo_wrap {
          position: absolute;
          top: 40vh;
          left: var(--main-big-margin);
          display: flex;
          flex-direction: column;
          z-index: 10;
        }

        .start-span_wrap {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        }
      }

      .block-fixed {
        position: fixed;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .main-page_title-imgs__container {
      .block-wrap {
        .block {
          .start-span_with-logo_wrap {
            left: var(--main-big-margin);
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .main-page_title-imgs__container {
      .block-wrap {
        .block {
          .start-span_with-logo_wrap {
            left: var(--main-big-margin);
          }
        }
      }
    }
  }
  @media screen and (max-width: 528px) {
    .main-page_title-imgs__container {
      .block-wrap {
        .block {
          .start-span_with-logo_wrap {
            left: var(--main-big-margin);
          }
        }
      }
    }
  }
  .translateY-opacity-enter-active,
  .translateY-opacity-leave-active {
    transition: all 1s;
  }
  .translateY-opacity-enter, .translateY-opacity-leave-to /* .list-leave-active до версии 2.1.8 */ {
    opacity: 0;
    transform: translateY(70px);
  }

  .slide-images-enter-active,
  .slide-images-leave-active {
    transition: transform 1s;
  }
  .slide-images-enter,
  .slide-images-leave-to {
    transform: translateY(100%);
  }
  @media screen and (max-width: 528px) {
    .main-page_title-imgs__container {
      .block-wrap {
        .block {
          .start-span_with-logo_wrap {
            margin-right: 10px;
            left: var(--main-big-margin);
            top: 20vh;
            /*<!--transform: translateY(-50%);-->*/
            .start-text {
              font-size: 38px;
            }
          }
        }
      }
    }
  }
  @media (max-height: 500px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) and (max-width: 768px) {
    .main-page_title-imgs__container {
      .block-wrap {
        .block {
          .start-span_with-logo_wrap {
            top: 25vh;
          }
        }
      }
    }
  }
</style>
