<template>
  <div :class="['img-modal', {zoomModal: zoom}]">
    <div class="content">

      <transition-group name="modal-image" class="image-list">
        <img
          v-for="(item, index) in images"
          v-if="idx === index && item"
          :key="item.id"
          :class="[{ largeImage: largeImage },{zoom: zoom}, 'img-span']"
          :src="getUrl(item.url)"
          :alt="item.alternativeText"
          :title="item.name"
        />
      </transition-group>
    </div>
    <div :class="['btn-span', {zoomWhite: zoom}]">
      <button @click="setModalImgIsActive">
        <svg
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 2L32 32M32 2L2 32" stroke="black" stroke-width="4" />
        </svg>
      </button>
      <div class="item-project_description_value zoom-btn" @click="zoom = !zoom">{{ zoom ? 'back' : 'zoom' }}</div>
    </div>
    <div :class="['paginator', {zoomWhite: zoom}]">
      <div class="arrow-wrap">
        <button class="btn-left" @click="idxDown()">
          <svg
            width="21"
            height="16"
            viewBox="0 0 21 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.292892 7.2929C-0.0976315 7.68342 -0.0976314 8.31658 0.292893 8.70711L6.65686 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928933C7.68054 0.538409 7.04738 0.538409 6.65685 0.928933L0.292892 7.2929ZM21 7L1 7L1 9L21 9L21 7Z"
              fill="#000"
            />
          </svg>
        </button>
        <button class="btn-right" @click="idxUp()">
          <svg
            width="21"
            height="16"
            viewBox="0 0 21 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.2929L14.3431 0.928933C13.9526 0.538409 13.3195 0.538409 12.9289 0.928933C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM-8.74228e-08 9L20 9L20 7L8.74228e-08 7L-8.74228e-08 9Z"
              fill="#000"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import Arrow_Btn from './shared/elements/Arrow_Btn';

  export default {
    name: 'Img_Modal',
    props: {
      images: Array,
      url: String,
    },
    components: { Arrow_Btn },
    data() {
      return {
        idx: 0,
        largeImage: true,
        zoom: false
      };
    },
    methods: {
      ...mapActions('app', ['setModalImgIsActive']),
      getUrl(url) {
        return `https://strapi-up.verodigital.site${url}`;
      },
      idxUp() {
        if (this.idx !== this.images.length - 1) {
          this.idx++;
        } else {
          this.idx = 0;
        }
      },
      idxDown() {
        if (this.idx !== 0) {
          this.idx--;
        } else {
          this.idx = this.images.length - 1;
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .img-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--winHeight);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255,255,255, 0.9);
    z-index: 1000;
    &.zoomModal {
      overflow: visible;
    }
    .content {
      width: 80%;
      position: relative;

      .image-list {
        height: calc(var(--winHeight) - 50px);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        img {
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
          &.largeImage {
            object-fit: contain;
            object-position: 50% 50%;
            max-width: 100%;
            max-height: 100%;
            &.zoom {
              object-fit: cover;
              object-position: 50% 50%;
              max-width: 100vw;
              max-height: 100vh;
              min-width: 100vw;
              min-height: 100vh;
              width: 100vw;
              height: 100vw;
            }
          }
        }
      }
    }
    .paginator {
      display: flex;
      position: absolute;
      box-sizing: border-box;
      bottom: 50px;
      left: 50px;
      width: calc(100% - 50px * 2);

      .arrow-wrap {
        width: 100%;

        .btn-left,
        .btn-right {
          width: 33px;
          min-width: unset;
          margin: 0;
          svg {
            height: 25px;
            width: auto;
          }
        }
      }
      &.zoomWhite {
        svg {
          path {
            fill: #fff;
          }
        }
      }
    }
    .btn-span {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      position: absolute;
      top: 50px;
      left: 50px;
      width: calc(100% - 50px * 2);
      z-index: 2;
      & > div {
        cursor: pointer;
        color: black;
        line-height: 1;
      }
      &.zoomWhite {
        svg {
          path {
            stroke: #fff;
          }
        }
        & > div {
          color: white;
        }
      }
      .zoom-btn {
        height: fit-content;
      }
      button {
        width: 30px;
        height: 30px;
        cursor: pointer;
      }
    }
  }

  .modal-image-enter-active,
  .modal-image-leave-active {
    transition: opacity 1s;
  }

  .modal-image-enter,
  .modal-image-leave-to {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>
