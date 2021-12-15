<template>
  <div id="header" class="header">
    <div class="left pl-4 pr-4 bolder">
      <span>Athena Plugins</span>
    </div>
    <div class="middle pt-2 pb-2 pr-4">
      <input
        type="text"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target['value'])"
        placeholder="Search for title, keywords, description, etc."
        class="pa-2"
      />
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    modelValue: {
      type: String,
      default: "",
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
  },
  mounted() {
      console.log('[Vue] -> Mounted Header.vue')
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
  min-width: 200px;
  max-width: 25vw;
  box-sizing: border-box;
  align-content: center;
  align-items: center;
}

.header .middle {
  display: flex;
  flex-direction: row;
  width: 100%;
  box-sizing: border-box;
}

.header .middle input {
  width: 100%;
  border-radius: 6px !important;
  box-sizing: border-box;
  background: rgba(5, 5, 5, 1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: white;
  font-family: "Roboto", "Arial";
}

.header .right {
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
}
</style>
