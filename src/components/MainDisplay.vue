<template>
    <div id="vue" class="main">
        <Header :hideSearch="true"></Header>
        <div class="zoom" v-if="zoom" @click="handleZoom(null)">
            <div class="zoom-image" :style="getSlideshowImage(-1)" />
        </div>
        <div class="content-wrapper">
            <div class="content">
                <div class="slideshow ma-4">
                    <div
                        class="slide fade-in"
                        @click="handleZoom(getImage(2))"
                        ref="slide0"
                        :style="getSlideshowImage(2)"
                    />
                    <div
                        class="slide slide-middle fade-in"
                        @click="handleZoom(getImage(0))"
                        ref="slide1"
                        :style="getSlideshowImage(0)"
                    />
                    <div
                        class="slide fade-in"
                        ref="slide2"
                        @click="handleZoom(getImage(1))"
                        :style="getSlideshowImage(1)"
                    />
                </div>
                <div class="panels">
                    <div class="inner-panel ma-4" lang="ts">
                        <slot />
                    </div>
                    <div class="inner-panel ma-4">
                        <a
                            class="getter pa-3 bolder"
                            :href="content.url"
                            target="_blank"
                            rel="noopener noreferrer"
                            v-if="content.price"
                            >BUY ${{ content.price }}</a
                        >

                        <a
                            class="getter pa-3 bolder"
                            :href="content.url"
                            target="_blank"
                            rel="noopener noreferrer"
                            v-else
                            >GET PLUGIN</a
                        >
                        <div class="grey--text overline mb-2 mt-6 text--darken-1">Author</div>
                        <span class="grey--text mr-2 subtitle-2" style="font-size: 14px">{{ content.author }}</span>
                        <div class="grey--text overline mb-2 mt-6 text--darken-1">Discord</div>
                        <div class="grey--text subtitle-2">
                            {{ content.disord ? content.discord : "Add 'discord' to FrontMatter" }}
                        </div>
                        <div class="grey--text overline mb-2 mt-6 text--darken-1">Keywords</div>
                        <div class="grey--text text--darken-2 subtitle-2">{{ content.keywords.join(', ') }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';

export default {
    name: 'MainDisplay',
    components: {
        Header
    },
    data() {
        return {
            isUpdating: false,
            zoom: false,
            search: '',
            imageIndex: 0,
            interval: null,
            defaultSlide: 'https://i.imgur.com/7QUmJI3.jpeg',
            images: []
        };
    },
    props: {
        content: {
            type: Object,
            required: true
        }
    },
    computed: {
        getSlideshowBackground() {
            if (!this.content || !this.content.images) {
                return '';
            }

            return `background-image: url('${this.content.images[this.imageIndex]}');`;
        }
    },
    methods: {
        getImage(index) {
            console.log(index);
            if (this.images[index] === null || this.images[index] === undefined) {
                return this.defaultSlide;
            }

            return this.images[index];
        },
        getSlideshowImage(index) {
            if (index <= -1) {
                return `background-image: url('${this.zoom}');`;
            }

            if (!this.images[index]) {
                return `background-image: url('${this.defaultSlide}');`;
            }

            return `background-image: url('${this.getImage(index)}');`;
        },
        handleZoom(url) {
            console.log(url);
            this.zoom = this.zoom ? null : url;
        },
        async sleep(ms) {
            return new Promise((r) => {
                setTimeout(() => {
                    r();
                }, ms);
            });
        },
        async updateSlide() {
            if (this.isUpdating) {
                return;
            }

            this.isUpdating = true;
            for (let i = 0; i <= 2; i++) {
                this.$refs[`slide${i}`].classList.remove('fade-in');
                this.$refs[`slide${i}`].classList.add('fade-out');
            }

            const images = [...this.images];
            const endImage = images.pop();
            images.unshift(endImage);
            this.images = images;

            await this.sleep(1500);

            this.$nextTick(() => {
                for (let i = 0; i <= 2; i++) {
                    this.$refs[`slide${i}`].classList.add('fade-in');
                    this.$refs[`slide${i}`].classList.remove('fade-out');
                }
            });

            this.isUpdating = false;
        },
        setupImages() {
            const images = [...this.content.images];
            if (images.length <= 1) {
                images.push(null);
                images.push(null);
            }

            this.images = images;
        }
    },
    watch: {
        zoom() {
            console.log('Toggled Image Zoom');
        }
    },
    mounted() {
        this.setupImages();

        this.interval = setInterval(() => {
            this.updateSlide();
        }, 8000);

        console.log('[Vue] -> Mounted App.vue');
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
@import '../styles/syntax.css';
</style>

<style scoped>
@import '../styles/mainDisplay/slideshow.css';

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
    font-family: 'Roboto', 'Arial';
}

.header .right {
    display: flex;
    flex-direction: row;
    min-width: 45%;
    max-width: 45%;
    box-sizing: border-box;
}

.main {
    display: flex;
    flex-direction: column;
    background-blend-mode: luminosity !important;
    background: url('/assets/bg.png'), linear-gradient(-45deg, #377ac7, #4ff0ff, #377ac7, #4ff0ff);
    background-repeat: repeat;
    animation: gradient 80s ease infinite;
}

@media only screen and (max-width: 900px) {
    .content-wrapper {
        padding-left: 0px !important;
        padding-right: 0px !important;
    }
}

.content-wrapper {
    display: flex;
    position: relative;
    min-height: calc(100vh - 36px);
    max-height: calc(100vh - 36px);
    width: 80%;
    box-sizing: border-box !important;
    align-self: center;
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
    background: rgba(15, 15, 15, 1);
    border-left: 6px solid rgba(0, 0, 0, 0.4);
    border-right: 6px solid rgba(0, 0, 0, 0.4);
}

@media only screen and (max-width: 900px) {
    .panels {
        display: flex !important;
        flex-direction: column !important;
        width: calc(100% - 36px);
    }

    .inner-panel:last-child {
        width: 100% !important;
    }
}

.panels {
    position: relative;
    display: flex;
    padding-top: 28px;
    box-sizing: border-box;
    flex-grow: 1;
    padding-bottom: 12px;
}

.inner-panel {
    display: flex;
    flex-direction: column;
    background: rgba(5, 5, 5, 1);
    border-radius: 6px;
    border: 3px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    padding: 24px;
    width: 100%;
}

.inner-panel:last-child {
    width: 50%;
}

.call-to-action {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    align-content: flex-end;
    justify-items: flex-end;
}

.getter {
    background: rgba(25, 25, 25, 1);
    border-radius: 6px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    text-decoration: none;
    color: white !important;
    transition: all 0.0125s ease-in;
    box-shadow: 0px 5px rgba(20, 20, 20, 1);
    text-align: center;
}

.getter:active {
    transform: scale(0.98) translateY(5px) !important;
    box-shadow: 0px 2px rgba(20, 20, 20, 1) !important;
}

.getter:hover {
    border-color: rgba(255, 255, 255, 0.5);
    text-shadow: 0px 0px 5px white;
    box-shadow: 0px 6px rgba(20, 20, 20, 1);
    transform: translateY(-1px);
}

.markdown {
    position: relative;
    font-family: 'Roboto';
    text-align: justify;
    min-height: 600px;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
</style>
