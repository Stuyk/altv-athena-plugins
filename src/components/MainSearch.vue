<template>
  <div id="vue" class="stack">
    <Header v-model="search"></Header>
    <div class="split">
      <Sidebar
        v-model="search"
        v-bind:categories="fetchCategories"
        :searchInput="search"
      />
      <template v-if="suggestions.length <= 0 && search.length <= 0">
        <Search :pages="pages" />
      </template>
      <template v-if="suggestions.length >= 1">
        <Search :pages="suggestions" />
      </template>
      <template v-if="suggestions.length <= 0 && search.length >= 1">
          <span class="zero-result bolder pt-6">
              0 Results
         </span>
      </template>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import Header from "./Header.vue";
import Search from "./Search.vue";
import { getCategories } from "../utility/categories";

export default {
  name: "MainSearch",
  components: {
    Header,
    Sidebar,
    Search,
  },
  data() {
    return {
      suggestions: [],
      search: "",
      pageToDisplay: false,
    };
  },
  props: {
    pages: {
      type: Array,
      required: false,
    },
  },
  computed: {
    fetchCategories() {
      return getCategories();
    },
  },
  methods: {},
  watch: {
    search(newValue, oldValue) {
      if (newValue === "") {
        this.suggestions = [];
        return;
      }

      const searchInput = newValue.split(" ");
      const suggestions = this.pages.filter((page) => {
        const title = page.name.replace(/ /g, "").toLowerCase();
        const descr = page.description.replace(/ /g, "").toLowerCase();
        const keywords = page.keywords.join("").toLowerCase();
        const fullSearch = title + descr + keywords;

        let wasFound = false;
        for (let i = 0; i < searchInput.length; i++) {
          const term = searchInput[i].toLowerCase();
          if (fullSearch.includes(term)) {
            wasFound = true;
            break;
          }
        }

        return wasFound;
      });

      this.suggestions = suggestions;
    },
  },
  mounted() {
    console.log("[Vue] -> Mounted App.vue");
  },
};
</script>

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

.zero-result {
    width: 100%;
    text-align: center;
    font-size: 36px;
}
</style>
