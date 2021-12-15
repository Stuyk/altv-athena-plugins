<template>
  <div id="vue">
    <Header :hideSearch="true" class="shadow"></Header>
    <div class="content shadow">
      <span class="go-back">
        Back
      </span>
      <div class="slideshow" :style="getSlideshowBackground">
        <div class="slideshow-info">
          <div class="title">{{ content.title }}</div>
          <div class="desc pt-4">{{ content.description }}</div>
        </div>
      </div>
      <div class="markdown pl-6 pr-6 pt-3">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";

export default {
  name: "MainSearch",
  components: {
    Header,
  },
  data() {
    return {
      search: '',
      imageIndex: 0,
      interval: null
    };
  },
  props: {
    content: {
      type: Object,
      required: true,
    }
  },
  computed: {
    getSlideshowBackground() {
      return `background-image: url('${this.content.images[this.imageIndex]}');`
    }
  },
  methods: {
    updateSlide() {
      if (this.imageIndex + 1 >= this.content.images.length) {
        this.imageIndex = 0;
      } else {
        this.imageIndex += 1;
      }
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.updateSlide();
    }, 3000);

    console.log(this.content);
    console.log("[Vue] -> Mounted App.vue");
  },
  unmounted() {
    clearInterval(this.interval);
  }
};
</script>

<style>
pre {
  font-size: 16px !important;
}
</style>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  width: 100vw;
  min-height: 50px;
  max-height: 50px;
  overflow: hidden;
  background: rgba(15, 15, 15, 1) !important;
  border-bottom: 2px solid rgba(25, 25, 25, 1);
  box-sizing: border-box;
}

.header .left {
  display: flex;
  flex-direction: row;
  min-width: 15%;
  max-width: 15%;
  box-sizing: border-box;
  align-content: center;
  align-items: center;
}

.header .middle {
  display: flex;
  flex-direction: row;
  min-width: 40%;
  max-width: 40%;
  box-sizing: border-box;
}

.header .middle input {
  width: 100%;
  border-radius: 6px !important;
  box-sizing: border-box;
  background: rgba(15, 15, 15, 1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: white;
  font-family: "Roboto", "Arial";
}

.header .right {
  display: flex;
  flex-direction: row;
  min-width: 45%;
  max-width: 45%;
  box-sizing: border-box;
}

.content {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 36px);
  max-height: calc(100vh - 36px);
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  box-sizing: border-box;
}

.go-back {
  position: absolute;
  left: 0;
  top: 0;
  font-size: 24px;
}

.go-back:hover {
  cursor: pointer;
}

.go-back::before {
  content: '🠐 ';
}

.slideshow {
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 300px;
  box-shadow: inset 0px 5px 10px black;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  box-sizing: border-box;
  border-bottom: 4px solid rgba(255, 255, 255, 0.2);
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-items: center;
}

.slideshow .slideshow-info {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  text-shadow: 0px 0px 5px black, 0px 0px 10px black;
  text-align: center;
}

.slideshow-info .title {
  font-size: 36px !important;
}

.markdown {
  font-family: 'Roboto';
  text-align: justify;
}
</style>
