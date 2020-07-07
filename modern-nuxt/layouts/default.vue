<template>
  <section>
    <top-toolbar></top-toolbar>
    <nuxt class="main-view mtx" />
  </section>
</template>


<script>
import TopToolbar from "~/components/TopToolbar.vue";

import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    "top-toolbar": TopToolbar
  },
};
</script>

<style lang="css">

:root {
  --orange-hex: #f1e9cf;
  --orange-hex-darker: #8c793c;
  --orange-r: 241;
  --orange-g: 233;
  --orange-b: 207;
  --blue-hex: #258bc9;
  --blue-r: 37;
  --blue-g: 139;
  --blue-b: 201;
  --plyr-audio-control-background-hover: var(--orange-hex-darker)
}

:root {
    --text: white;
    --link: #be7a0b;
    --button: #753751;
    --background: #232529;
  }

html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}ul{list-style:none}button,input,select,textarea{margin:0}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0;text-align:left}

@font-face {
  font-family: "Inconsolata";
  src: url("~static/fonts/inconsolata.ttf");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "nova";
  src: url("~static/fonts/nova.ttf");
  font-weight: normal;
  font-style: normal;
}

body {
  background: var(--background);
  color: var(--text);
  font-family: "Inconsolata", monospace;
  margin: 0;
}

pre {
  font-family: "Inconsolata", monospace;
  line-height: 110%;
  margin: 0px;
  white-space: pre-wrap;
}

a {
  letter-spacing: 3px;
  text-decoration: none;
  color: var(--link);
}

a:focus {
    outline:0;
}

a:active,
a:hover {
    outline: 0;
    opacity: 0.7;
}

h1 {
  font-size: 28px;
}

h2 {
  font-size: 22px;
}


button {
  padding: 24px;
  outline: none;
  border-radius: 3px;
  border: 0px;
  background: var(--button);
  color: white;
  font-family: "Inconsolata", monospace;
  transition: 0.4s all;
}


input, textarea {
  padding: 24px;
  width: 100%;
  border-radius: 3px;
  outline: none;
  border: 0px;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-family: "Inconsolata", monospace;
  transition: 0.4s all;
}


input:focus, textarea:focus {
  background: rgba(255, 255, 255, 0.12);
}

textarea {
  resize: vertical;
}

button[disabled] {
  background: rgba(164, 55, 116, 0.04);
}

button:hover:not(:disabled) {
  transform: scale(1.15);
  cursor: pointer;
  box-shadow: inset 0 0 8px 32px rgba(0, 0, 0, 0.05);

}

button::-moz-focus-inner {
  border: 0;
}

.relative {
  position: relative;
}

.main-view {
  margin: auto;
  width: 50%;
  height: 100vh;
}

.mt {
  margin-top: 16px;
}

.mb {
  margin-bottom: 16px;
}

.ml {
  margin-left: 16px;
}

.mr {
  margin-right: 16px;
}

.mtx {
  margin-top: 128px;
}

.mbx {
  margin-bottom: 128px;
}

.pad {
  padding: 32px;
  display: inline-block;
}

.row {
  width: 100%;
  float: left;
}


.center {
  text-align: center;
}

.c40 {
  float: left;
  width: 40%;
}

.c48 {
  float: left;
  width: 48%;
}

.c50 {
  float: left;
  width: 50%;
}

.c60 {
  float: left;
  width: 60%;
}
.c75 {
  float: left;
  width: 75%;
}

.c33 {
  float: left;
  width: 33%;
}

.c30 {
  float: left;
  width: 30%;
}

.c25 {
  float: left;
  width: 25%;
}

.absolute-top-right {
  position: absolute;
  top: 0;
  right: 0;
}

.nuxt-link-exact-active {
  opacity: 0.33;
}

.scroll {
  overflow-y: scroll;
  overflow-x: hidden;
}

.massive {
  font-size: 28px;
}

.medium {
  font-size: 12px;
}

.tiny {
  font-size: 10px;
}

.tags {
  display: inline-block;
}

.min-height {
    min-height: 400px;
}

.tag {
  padding: 6px;
  float: left;
  margin-right: 6px;
  margin-bottom: 6px;
  font-size: 10px;
  line-height: 16px;
  background: rgba(255,255,255,0.1);
}

.flex-wrapper {
  display: flex;
}

.flex-column {
  flex-direction: column;
}

.flex-item {
  flex: 1;
}


  .lds-ellipsis div {
      position: absolute;
      top: 1px;
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background: rgba(0,0,0,0.15);
      animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
      left: 6px;
      animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
      left: 6px;
      animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
      left: 26px;
      animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
      left: 45px;
      animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
      0% {
          transform: scale(0);
     }
      100% {
          transform: scale(1);
     }
  }
  @keyframes lds-ellipsis3 {
      0% {
          transform: scale(1);
     }
      100% {
          transform: scale(0);
     }
  }
  @keyframes lds-ellipsis2 {
      0% {
          transform: translate(0, 0);
     }
      100% {
          transform: translate(19px, 0);
     }
  }

  .main-logo {
    font-family: "nova";
    font-size: 256px;
    text-align: center;
  }


@media (max-width: 1600px) {
  .main-view {
    width: 80%;
  }

  .main-logo {
    font-size: 196px;
  }

}

@media (max-width: 1000px) {
  .main-view {
    width: 96%;
    margin-left: 2%;
    margin-right: 2%;
  }

  .main-logo {
    font-size: 128px;
  }
}
</style>
