<template>
  <div class="triple-spinner"></div>
</template>

<script>
export default {
  name: "Loading"
}
</script>

<style scoped>
.triple-spinner {
  display: block;
  position: relative;
  width: 125px;
  height: 125px;
  border-radius: 50%;
  border: 4px solid transparent;
  border-top: 4px solid #FF5722;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

.triple-spinner::before,
.triple-spinner::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  border: 4px solid transparent;
}
.triple-spinner::before {
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  border-top-color: #FF9800;
  -webkit-animation: spin 3s linear infinite;
  animation: spin 3.5s linear infinite;
}
.triple-spinner::after {
  top: 15px;
  left: 15px;
  right: 15px;
  bottom: 15px;
  border-top-color: #FFC107;
  -webkit-animation: spin 1.5s linear infinite;
  animation: spin 1.75s linear infinite;
}



@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}


@keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>