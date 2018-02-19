<template>

  <div class="loading">
    <div class="text">
      Loading
    </div>
    <div class="img">
    </div>
  </div>

</template>

<style>

.loading {
  height: 100%;
  text-align: -webkit-center;
  padding-top: 100px;
  position: absolute;
  width: 100%;
  top: 0px;
  background-color: rgba(255, 255, 255, 0.5);
}

.loading .text {
  color: #0033a0;
}

.loading .img {
    z-index: 10000;
    background-image: url('/static/img/loading.svg');
    animation: 2s rotate linear infinite;
    width: 50px;
    height: 50px;
    content: "";
    background-size: cover;
}

@keyframes rotate {
  0% {transform:rotate(0deg)}
  to {transform:rotate(1turn)}
}

</style>
