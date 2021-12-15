<template>
  <div id="vue" class="sidebar">
    <div class="options">
      <div
        class="option"
        v-for="(keyword, index) in categories"
        :key="index"
      >
        <span
          class="pl-4 pt-3 pb-3 overline keyword"
          :class="getKeywordClass(keyword)"
          @click="$emit('update:modelValue', keyword)"
        >
          {{ keyword }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    categories: {
      type: Array,
    },
    modelValue: {
      type: String,
      default: "",
      required: true,
    },
    searchInput: {
      type: String,
      default: "",
      required: true,
    },
  },
  methods: {
    getKeywordClass(keyword) {
      if (this.searchInput.includes(keyword)) {
        return { "search-highlight": true };
      }

      return {};
    },
  },
  mounted() {
    console.log("[Vue] -> Mounted Sidebar.vue");
  },
};
</script>

<style scoped>
.sidebar {
  min-height: calc(100vh - 25px);
  max-height: calc(100vh - 25px);
  min-width: 150px;
  max-width: 150px;
  overflow-y: scroll;
  overflow-x: hidden;
  background: rgba(15, 15, 15, 1) !important;
  direction: rtl;
}

.sidebar .options {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.option {
  display: flex;
  direction: ltr;
  width: 100%;
  flex-grow: 1;
  text-align: left;
}

.option:hover {
  color: #2196F3;
  text-shadow: 0 0 10px #2196F3;
}

.option:hover {
  cursor: pointer;
}

.search-highlight {
  border-right: 4px solid #2196F3;
  width: 100%;
  color: #2196F3;
  text-shadow: 0 0 5px #2196F3;
}
</style>
