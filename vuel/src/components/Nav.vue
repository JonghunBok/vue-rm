<template>
  <div id="wrap">
    <section class="left">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </section>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  }
}
</script>

<style>
*{margin: 0; padding:0;}
#wrap{
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  margin: 0 auto;
}
.left {
  display: flex;
  order: 1;
  width: 15%;
  height: 600px;
  flex-flow: column nowrap;
}
.left div{
  flex: 1 1 0;
}
.left div:first-child {
  background: red;
}
.left div:nth-child(2) {
  background: #fa3382
}
.left div:nth-child(3){
  background: #facad2
}
.left div:last-child {
  background: pink;
}
</style>
