<template>
    <div id="header" class="header-wrapper">
        <div class="top">
            <a class="header-text bolder pl-3" href="/search">
                <img src="/favicon-32x32.png" height="25" width="25" class="pr-3" />
                <span>Athena Plugins</span>
            </a>
            <div class="header-right"></div>
        </div>
        <div class="bottom pb-4 pl-3 pr-3" v-if="!hideSearch">
            <input
                type="text"
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target['value'])"
                placeholder="Search for title, keywords, description, etc."
                class="pa-2"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        modelValue: {
            type: String,
            default: '',
            required: false
        },
        hideSearch: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data() {
        return {};
    },
    methods: {},
    mounted() {
        console.log('[Vue] -> Mounted Header.vue');
    }
};
</script>

<style scoped>
.header-wrapper {
    display: flex;
    flex-direction: column;
    width: 100vw;
    overflow: hidden;
    background: rgba(15, 15, 15, 1) !important;
    border-bottom: 2px solid rgba(25, 25, 25, 1);
    box-sizing: border-box;
}

.top {
    display: flex;
    flex-direction: row;
    width: 100vw;
    min-height: 50px;
    max-height: 50px;
    box-sizing: border-box;
    align-items: center;
    justify-items: center;
    align-content: center;
}

.bottom {
    display: flex;
    flex-direction: row;
    width: 100vw;
    min-height: 50px;
    max-height: 50px;
    box-sizing: border-box;
    align-items: center;
}

.header-text {
    display: flex;
    color: white;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: all 0.1s ease-in;
    align-items: center;
    align-content: center;
    justify-content: center;
    justify-items: center;
}

.header-text:hover {
    color: #2196f3;
    cursor: pointer;
}

.bottom input {
    width: 100%;
    border-radius: 6px !important;
    box-sizing: border-box;
    background: rgba(5, 5, 5, 1);
    border: 2px solid rgba(255, 255, 255, 0.2);
    color: white;
    font-family: 'Roboto', 'Arial';
}

.header .right {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
}
</style>
