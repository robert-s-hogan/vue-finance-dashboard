// src/components/Settings.vue
<template>
  <div>
    <h2>Settings</h2>
    <form @submit.prevent="saveSettings">
      <label for="username">Username:</label>
      <input id="username" v-model="username" type="text" />

      <label for="email">Email:</label>
      <input id="email" v-model="email" type="email" />

      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "AccountSettings",
  setup() {
    const username = ref<string>("");
    const email = ref<string>("");

    const saveSettings = () => {
      // Implement save logic here
      console.log(`Settings saved: ${username.value}, ${email.value}`);
    };

    return {
      username,
      email,
      saveSettings,
    };
  },
});
</script>

<style scoped>
/* Your styles here */
</style>
