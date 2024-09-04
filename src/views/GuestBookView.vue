<template>
  <main>
    <section>
      <div style="margin-top: 70px;">
        <h1>Guestbook</h1>
        <p>Welcome to my Guestbook! You can tell me anything here!</p>
        <PostMessage />
      </div>
    </section>
  </main>
</template>

<script>
import PostMessage from '../components/PostMessage.vue';

export default {
  components: { PostMessage}
};
</script>
