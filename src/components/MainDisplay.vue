<template>
  <div id="vue" class="main">
    <Header :hideSearch="true"></Header>
    <div class="content-wrapper">
      <!-- <span class="go-back">
        Back
      </span> -->
      <div class="content">
        <div class="slideshow" :style="getSlideshowBackground" />
        
        <div class="markdown pl-12 pr-12 pt-3 pb-12" lang="ts">
          <div class="call-to-action">
            <a class="getter pa-3 bolder" :href="content.url" target="_blank" rel="noopener noreferrer" v-if="content.price">BUY ${{ content.price }}</a>
            <a class="getter pa-3 bolder" :href="content.url" target="_blank" rel="noopener noreferrer" v-else>GET PLUGIN</a>
            <span class="grey--text mt-2 mr-2">{{content.author }}</span>
          </div>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";

export default {
  name: "MainDisplay",
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
      if (!this.content || !this.content.images) {
        return '';
      }

      return `background-image: url('${this.content.images[this.imageIndex]}');`
    }
  },
  methods: {
    updateSlide() {
      if (!this.content || !this.content.images) {
        this.imageIndex = 0;
        return;
      }

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

    console.log("[Vue] -> Mounted App.vue");
  },
  unmounted() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
};
</script>

<style>
astro-fragment h1, astro-fragment h2, astro-fragment h3, astro-fragment h4, astro-fragment h5, astro-fragment h6 {
  color: #ffc107 !important;
}

astro-fragment a {
  color: #2196F3 !important;
  text-decoration: none;
}

astro-fragment a:hover {
  color: #64B5F6 !important;
}

pre {
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  box-sizing: border-box;
  padding: 12px;
  font-size: 14px;
}

code:not(pre > code) {
  background: rgba(0, 0, 0, 0.2);
  font-size: 14px;
  padding: 3px;
  border-radius: 6px;
  box-sizing: border-box;
}

.language-css > code,
.language-sass > code,
.language-scss > code {
  color: #fd9170;
}

[class*='language-'] .namespace {
  opacity: 0.7;
}

.token.plain-text,
[class*='language-bash'] span.token,
[class*='language-shell'] span.token {
  color: hsla(var(--color-gray-90), 1);
}

[class*='language-bash'] span.token,
[class*='language-shell'] span.token {
  font-style: bold;
}

.token.prolog,
.token.comment,
[class*='language-bash'] span.token.comment,
[class*='language-shell'] span.token.comment {
  color: hsla(var(--color-gray-70), 1);
}

.token.selector,
.token.tag,
.token.unit,
.token.url,
.token.variable,
.token.entity,
.token.deleted {
  color: #fa5e5b;
}

.token.boolean,
.token.constant,
.token.doctype,
.token.number,
.token.regex,
.token.builtin,
.token.class,
.token.hexcode,
.token.class-name,
.token.attr-name {
  color: hsla(var(--color-yellow), 1);
}

.token.atrule,
.token.attribute,
.token.attr-value .token.punctuation,
.token.attr-value,
.token.pseudo-class,
.token.pseudo-element,
.token.string {
  color: hsla(var(--color-green), 1);
}

.token.symbol,
.token.function,
.token.id,
.token.important {
  color: hsla(var(--color-blue), 1);
}

.token.important,
.token.id {
  font-weight: bold;
}

.token.cdata,
.token.char,
.token.property {
  color: #23b1af;
}

.token.inserted {
  color: hsla(var(--color-green), 1);
}

.token.keyword {
  color: #ff657c;
  font-style: italic;
}

.token.operator {
  color: hsla(var(--color-gray-70), 1);
}

.token.attr-value .token.attr-equals,
.token.punctuation {
  color: hsla(var(--color-gray-80), 1);
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

.main {
  background: rgba(10, 10, 10, 1) !important;
}

@media only screen and (max-width: 800px) {
  .content-wrapper {
     padding-left: 0px !important;
     padding-right: 0px !important;
  }
 
}

.content-wrapper {
  position: relative;
  min-height: calc(100vh - 36px);
  max-height: calc(100vh - 36px);
  width: 100%;
  background: rgba(10, 10, 10, 1);
  padding-left: 200px;
  padding-right: 200px;
  box-sizing: border-box !important;
  background-image: url('/assets/bg.png');
  background-repeat: repeat;
  background-blend-mode: difference;
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
  background: rgba(25, 25, 25, 1);
  border-left: 6px solid rgba(0, 0, 0, 0.4);
  border-right: 6px solid rgba(0, 0, 0, 0.4);
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
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  background-size: auto;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  box-sizing: border-box;
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-items: center;
  margin-right: 4px;
  margin-left: 4px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
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
  position: relative;
  font-family: 'Roboto';
  text-align: justify;
}

.call-to-action {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  align-content: flex-end;
  justify-items: flex-end;
  right: 0;
  padding-top: 18px;
  padding-right: 12px;
}

.getter {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  text-decoration: none;
  color: white !important;
}

.getter:hover {
  color: #2196F3 !important;
  border-color: #2196F3;
  box-shadow: 0px 0px 5px #2196F3;
}

</style>
