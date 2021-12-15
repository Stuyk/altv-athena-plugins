<template>
  <div id="vue" class="search pa-8">
    <div class="result mb-8" v-for="(result, index) in pages" :key="index" @click="updatePath(result.path)">
      <div class="img" :style="getImageStyle(result.images[0])">
        <div class="img-gradient"></div>
      </div>
      <div class="details">
        <div class="premium overline pa-2 mt-3 mr-3 bolder" v-if="isPremium(result.keywords)">
          ${{result.price}}
        </div>
         <div class="free overline pa-2 mt-3 mr-3 bolder" v-else>
          Free
        </div>
        <div class="name pl-4 pt-4 grey--text text--lighten-4">
          {{ result.title }}
        </div>
        <div class="description pl-4 pt-4 grey--text text--lighten-2">
          {{ result.description }}
        </div>
        <div class="keywords pl-4 pb-4 pr-4">
          <span class="bolder grey--text subtitle-2">Author - {{ result.author }}</span>
          <span class="grey--text text--darken-1 subtitle-2">
            Keywords: {{ result.keywords.join(", ") }}
          </span>
        </div>
      </div>
    </div>
    <div class="empty-space"></div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    pages: {
      type: Array,
      required: true,
    }
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
    updatePath(path) {
        window.location.pathname = path
    }
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
  box-sizing: border-box;
  background: rgba(10, 10, 10, 1);
  background-image: url('/assets/bg.png');
  background-repeat: repeat;
  background-blend-mode: difference;
}

.search .result {
  position: relative;
  display: flex;
  flex-direction: row;
  min-height: 150px;
  max-height: 150px;
  border: 2px solid rgba(35, 35, 35, 1);
  border-radius: 6px;
  background: rgba(15, 15, 15, 1);
  box-sizing: border-box;
  overflow: hidden;
  transition: all .1s ease-in;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 1);
}

.search .result:hover > .details > .name {
  color: #2196F3 !important;
}

.search .result:hover > .details > .description {
  color: #64B5F6 !important;

}

.search .result:hover > .details > .premium, .search .result:hover > .details > .free {
  border-color: #2196F3;
  box-shadow: 0px 0px 5px #2196F3;
}

.search .result:hover {
  /* border: 2px solid #2196F3 !important; */
  background: rgba(25, 25, 25, 1);
  cursor: pointer;
  /* box-shadow: 0px 0px 5px #2196F3; */
}

.search .result .img {
  position: relative;
  min-width: 200px;
  max-width: 200px;
  min-height: 160px !important;
  max-height: 150px !important;
  background-size: cover;
  background-repeat: no-repeat;
  box-sizing: border-box;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.img-gradient {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(255,255,255,0) 50%,rgba(15,15,15,1) 100%);
  border-right: 2px solid rgba(0,0, 0, 0.3);
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

.details .premium, .free {
  position: absolute;
  right: 0px;
  top: 0px;
  text-align: center;
  text-shadow: 1px 1px black;
  font-size: 12px !important;
  box-sizing: border-box;
  border-radius: 6px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  transition: all .1s ease-in;
}

.empty-space {
    min-height: 12px;
}
</style>
