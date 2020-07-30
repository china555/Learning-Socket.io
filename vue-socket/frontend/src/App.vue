<template>
  <div class="flex-container">
    <sidebar />
    <chat />
  </div>
</template>

<style>
* {
  box-shadow: none;
}
.btn {
  width: 80px;
  height: 40px;
  border: 3px transparent;
  border-radius: 7px;
}
.btn:hover {
  cursor: pointer;
}
body {
  margin: 0;
}
.flex-container {
  display: flex;
  flex-wrap: wrap;
}
</style>
<script>
import sidebar from "@/components/sidebar.vue";
import chat from "@/views/chat.vue";
export default {
  components: {
    sidebar,
    chat
  }
};
</script>