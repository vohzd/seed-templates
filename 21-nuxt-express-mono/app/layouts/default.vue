<template>
  <section>
    <nuxt class="main-view" />
  </section>
</template>


<script>

export default {
};
</script>

<style lang="css">

@font-face {
  font-family: "Inconsolata";
  src: url("~static/fonts/inconsolata.ttf");
  font-weight: normal;
  font-style: normal;
}

body {
  background: #232529;
  color: white;
  font-family: "Inconsolata", monospace;
  margin: 0;
}

a {
  letter-spacing: 3px;
  text-decoration: none;
  color: #be7a0b;
  text-align: center;
}

.pink {
  color: #f586b5;
}

button {
  padding: 24px;
  outline: none;
  border-radius: 2px;
  box-shadow: inset 0 0 2px 2px rgba(2, 17, 7, 0.12);
  border: 0px;
  background: rgba(52, 155, 86, 0.35);
  color: white;
  font-family: "Inconsolata", monospace;
  transition: 0.4s all;
}

button:hover {
  box-shadow: inset 0 0 16px 16px rgba(10, 58, 26, 0.15);
  background: rgba(34, 107, 58, 0.35);
}

input {
  padding: 24px;
  width: calc(100% - 48px);
  outline: none;
  border: 0px;
  background: rgba(131, 131, 131, 0.1);
  color: white;
  font-family: "Inconsolata", monospace;
  transition: 0.4s all;
}

button[disabled] {
  background: rgba(164, 55, 116, 0.12);
}

button:hover {
  cursor: pointer;
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
.c30 {
  float: left;
  width: 30%;
}

.c33 {
  float: left;
  width: 33%;
}


.c40 {
  float: left;
  width: 40%;
}

.c50 {
  float: left;
  width: 50%;
}

.c60 {
  float: left;
  width: 60%;
}

.nuxt-link-exact-active {
  opacity: 0.5;
}

.scroll {
  overflow-y: scroll;
  overflow-x: hidden;
}

@media (max-width: 1600px) {
  .main-view {
    width: 80%;
  }
}

@media (max-width: 1000px) {
  .main-view {
    width: 96%;
    margin: 0 2%;
  }
}
</style>
