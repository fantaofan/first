<template>
  <div>这是my页面</div>
</template>
<script>
import { getAlist } from "../api/user";
export default {
  created() {
    getAlist().then(data => {
      console.log(data);
    });
  }
};
</script>
