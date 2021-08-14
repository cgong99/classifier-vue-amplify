<template> 
  <h2>Patient Message Classifier</h2>
  <MessageBox/>
  <ProbChart/>
</template>

<script>
import MessageBox from './components/MessageBox.vue'
import ProbChart from './components/ProbChart.vue'
export default {
  name: 'App',
  components: {
    MessageBox,
    ProbChart
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 1000px;
  margin: 0 auto;
  color: #555;
}
</style>
