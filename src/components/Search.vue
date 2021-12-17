<template>
    <div id="vue" class="search">
        <div class="result" v-for="(result, index) in pages" :key="index" @click="updatePath(result.path)">
            <div class="img-wrapper">
                <div class="img" :style="getImageStyle(result.images[0])" />
            </div>
            <div class="details mr-2">
                <div class="name pl-4 grey--text text--lighten-4">
                    <span>{{ result.title }}</span>
                    <span class="bolder grey--text subtitle-2 mt-2 pl-2">Author - {{ result.author }}</span>
                </div>
                <div class="description pl-4 pt-4 grey--text text--lighten-2">
                    {{ result.description }}
                </div>
                <div class="keywords pl-4 pb-4 pr-4">
                    <span class="grey--text text--darken-1 subtitle-2">
                        Keywords: {{ result.keywords.join(', ') }}
                    </span>
                </div>
            </div>
            <div class="premium overline pa-2 mt-3 mr-3 bolder" v-if="isPremium(result.keywords)">
                ${{ result.price }}
            </div>
            <div class="free overline pa-2 mt-3 mr-3 bolder" v-else>Free</div>
        </div>
        <div class="empty-space"></div>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
    props: {
        pages: {
            type: Array,
            required: true
        }
    },
    methods: {
        getImageStyle(url) {
            return `background-image: url('${url}');`;
        },
        isPremium(keywords) {
            if (keywords.includes('premium')) {
                return true;
            }

            return false;
        },
        updatePath(path) {
            window.location.pathname = path;
        }
    },
    mounted() {
        console.log('[Vue] -> Mounted Search.vue');
    }
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
}

.search .result {
    position: relative;
    display: flex;
    flex-direction: row;
    min-height: 150px;
    max-height: 150px;
    border-bottom: 2px solid rgba(35, 35, 35, 1);
    background: rgba(15, 15, 15, 1);
    box-sizing: border-box;
    overflow: hidden;
    transition: all 0.1s ease-in;
    padding: 12px;
    border-left: 6px solid rgba(255, 255, 255, 0) !important;
}

.search .result:hover > .details > .name {
    color: #2196f3 !important;
}

.search .result:hover > .details > .description {
    color: #64b5f6 !important;
}

.search .result:hover > .details > .premium,
.search .result:hover > .details > .free {
    border-color: #2196f3;
    box-shadow: 0px 0px 5px #2196f3;
}

.search .result:hover {
    border-left: 6px solid rgba(255, 255, 255, 0.2) !important;
    background: rgba(25, 25, 25, 1);
    cursor: pointer;
}

.search .result .img {
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    background-size: cover;
    background-position: 50% 50%;
}

.search .result .img-wrapper {
    min-width: 200px;
    position: relative;
    box-sizing: border-box;
    overflow: hidden !important;
    border-radius: 6px;
    border: 2px solid rgba(40, 40, 40, 1);
}

.result .details {
    display: flex;
    position: relative;
    flex-direction: column;
    flex-grow: 1;
    min-height: 150px;
    max-height: 150px;
    box-sizing: border-box;
}

.result .name {
    display: flex;
    flex-wrap: wrap;
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
    box-sizing: border-box;
}

.result .keywords {
    display: flex;
    position: relative;
    box-sizing: border-box;
    justify-content: space-between;
    height: 100%;
    width: 100%;
}

.details .premium,
.free {
    position: relative;
    text-align: center;
    text-shadow: 1px 1px black;
    font-size: 12px !important;
    box-sizing: border-box;
    border-radius: 6px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    transition: all 0.1s ease-in;
    max-height: 32px;
    top: -12px;
    right: -12px;
}

.empty-space {
    min-height: 150px;
    min-width: 100%;
}
</style>
