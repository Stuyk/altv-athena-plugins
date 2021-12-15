<template>
  <div id="vue" class="search pa-3">
    <div class="result mb-3" v-for="(result, index) in pages" :key="index">
      <div class="img" :style="getImageStyle(result.images[0])">
        <div class="img-gradient"></div>
      </div>
      <div class="details">
        <div
          class="premium overline pt-2 pb-2 bolder"
          v-if="isPremium(result.keywords)"
        >
          Premium
        </div>
        <div class="name pl-4 pt-4 grey--text text--lighten-4">
          {{ result.name }}
          <div class="price" v-if="isPremium(result.keywords)">
            <span class="pl-3 pr-3">|</span>
            <span class="green--text">${{ result.price }}</span>
          </div>
        </div>
        <div class="description pl-4 pt-4 grey--text text--lighten-2">
          {{ result.description }}
        </div>
        <div class="keywords pl-4 pb-4 pr-4">
          <span class="bolder amber--text">Author - {{ result.author }}</span>
          <span class="amber--text text--accent-4">
            Keywords: {{ result.keywords.join(", ") }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    pages: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getImageStyle(url) {
      return `background-image: url('${url}');`;
    },
    isPremium(keywords) {
      if (keywords.includes("premium")) {
        return true;
      }

      return false;
    },
  },
  mounted() {
    console.log("[Vue] -> Mounted Search.vue");
  },
};
</script>

<style scoped>
.search {
  min-height: calc(100vh - 25px);
  max-height: calc(100vh - 25px);
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  background: rgba(10, 10, 10, 1) !important;
  box-sizing: border-box;
}

.search .result {
  position: relative;
  display: flex;
  flex-direction: row;
  min-height: 150px;
  max-height: 150px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(15, 15, 15, 1);
  box-sizing: border-box;
  overflow: hidden;
}

.search .result:hover {
  border: 2px solid #ffc107 !important;
  background: rgba(25, 25, 25, 1);
  cursor: pointer;
  box-shadow: 0px 5px 5px black;
}

.search .result .img {
  position: relative;
  min-width: 200px;
  max-width: 200px;
  min-height: 150px !important;
  max-height: 150px !important;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border-right: 2px solid rgba(40, 40, 40, 1);
  box-sizing: border-box;
}

.img-gradient {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(0, 0, 0, 0) 50%
  );
}

.result .details {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 150px;
  max-height: 150px;
  box-sizing: border-box;
}

.result .name {
  display: flex;
  position: relative;
  font-size: 24px;
  font-weight: bold;
  flex-grow: 1;
  box-sizing: border-box;
}

.result .description {
  display: flex;
  position: relative;
  font-size: 16px;
  text-align: left;
  height: 100%;
  box-sizing: border-box;
}

.result .keywords {
  display: flex;
  position: relative;
  box-sizing: border-box;
  justify-content: space-between;
  width: 100%;
}

.details .premium {
  position: absolute;
  right: -108px;
  top: 3px;
  width: 300px;
  text-align: center;
  transform: rotateZ(25deg);
  background: #ffbd07;
  text-shadow: 1px 1px 2px black;
  font-size: 12px !important;
  border-top: 4px solid rgba(0, 0, 0, 0.3);
  border-bottom: 4px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
}
</style>
