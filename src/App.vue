<template>
  <div id="app">
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  max-width: 1200px;
  height: 100vh;
  width: 100vw;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

button {
  margin: 10px;
  padding: 15px 30px;
  font-size: 18px;
  color: #fff;
  background-color: #ff5722;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  background-color: #ff784e;
  transform: scale(1.05);
}

button:focus {
  outline: none;
}
</style>
