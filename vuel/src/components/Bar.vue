<template>
  <svg class='bar' width="100" height="20" >
    <rect :width="percent" height="20"></rect>
    <text x="50" y="15"> {{ percent }} %</text>
  </svg>
</template>

<script>
export default {
  name: 'Bar',
  props: {
    percent: Number
  },

  mounted () {
  }
}
</script>
