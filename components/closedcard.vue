<template>
  <div class="card-container"></div>
</template>

<script>
export default {
  name: 'ClosedCard',
  props: ['value', 'suite'],
}
</script>

<style lang="scss" scoped>
.card-container {
  width: 150px;
  height: 250px;
  background-color: red;
  color: black;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;

  .card-suite {
    height: 20%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
  .card-value {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    height: 60%;
  }
}
</style>
