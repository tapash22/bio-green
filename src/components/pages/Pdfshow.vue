<template>
<div class="pdf">
  <pdf src="../../assets/pdf/c++.pdf"></pdf>
</div>
</template>

<script>
import pdf from 'vue-pdf'

export default {
  components: {
    pdf
  }
}

</script>

<style scoped>
.pdf{
  width: 100%;
  height: 500px;
  padding: 0;
  margin: 0;
}
</style>