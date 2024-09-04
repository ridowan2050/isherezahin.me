<template>
  <div class="container">
    
    <div class="custom-container">
      <div class="custom-header">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pin size-4" style="transform: rotate(30deg);">
          <line x1="12" x2="12" y1="17" y2="22"></line>
          <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"></path>
        </svg>
        Pinned
      </div>
      <div>Thank you for visiting my website. I would greatly appreciate any feedback you might have on my work. Please feel free to leave a comment. Thank you!</div>
    </div>

    <div class="btn-comment">
      <button class="comment-button" style="margin-top: 10px;" @click="toggleCommentForm" @dblclick="hideCommentForm">Comment</button>
      <p>to continue leaving a message</p>
    </div>

    <div v-if="isCommentFormVisible" class="comment-form">
      <input v-model="userName" type="text" placeholder="Enter your name" class="form-input" required>
      <textarea v-model="message" placeholder="Write your message here..." class="form-textarea" required></textarea>
      <div class="post-btn">
        <button @click="postMessage" class="post-button" :disabled="isPostButtonDisabled">Post Comment</button>
      </div>
      <p v-if="warning" class="alert alert-warning">Warning: You cannot post an empty comment.</p>
      <p v-if="success" class="alert alert-success">Comment posted successfully!</p>
    </div>

    <div class="comments-list">
      <div v-for="message in messages" :key="message.id" class="comment">
        <div class="comment-header">
          <img class="avatar" :src="message.avatar || defaultAvatar" alt="User Avatar">
          <div class="comment-info">
            <span class="comment-author">{{ message.name }}</span>
            <span class="comment-timestamp">{{ formatDate(message.time) }}</span>
          </div>
        </div>
        <div class="comment-body">
          {{ message.message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { db, collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from '../firebase';

export default {
  setup() {
    const userName = ref('');
    const message = ref('');
    const warning = ref(false);
    const success = ref(false);
    const messages = ref([]);
    const defaultAvatar = '/src/assets/img/me/manavatar.jpg';
    const isCommentFormVisible = ref(false);

    const toggleCommentForm = () => {
      isCommentFormVisible.value = !isCommentFormVisible.value;
    };

    const hideCommentForm = () => {
      isCommentFormVisible.value = false;
    };

    const postMessage = async () => {
      if (message.value.trim() === '') {
        warning.value = true;
        setTimeout(() => (warning.value = false), 3000);
        return;
      }
      if (userName.value.trim() === '') {
        userName.value = 'Anonymous';
      }
      await addDoc(collection(db, 'messages'), {
        name: userName.value,
        time: serverTimestamp(),
        message: message.value,
        avatar: defaultAvatar // Set the avatar to the default image
      });
      message.value = '';
      userName.value = '';
      success.value = true;
      setTimeout(() => (success.value = false), 2000);
    };

    onMounted(() => {
      const q = query(collection(db, 'messages'), orderBy('time', 'desc'));
      onSnapshot(q, (snapshot) => {
        messages.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      });
    });

    const formatDate = (timestamp) => {
      const date = new Date(timestamp.toDate());
      return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    };

    return {
      userName,
      message,
      warning,
      success,
      postMessage,
      messages,
      formatDate,
      defaultAvatar,
      isCommentFormVisible,
      toggleCommentForm,
      hideCommentForm,
    };
  },
};
</script>

<style scoped>
.custom-container {
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  padding: 1.5rem 1rem;
  background: linear-gradient(to right, #02a963, #00bfff) 5%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 0.5px solid var(--border);
}

.custom-header {
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-comment {
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.comment-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-size: 0.875rem;
  font-weight: 500;
  transition: color 0.3s, background-color 0.3s;
  outline: none;
  border: none;
  background: linear-gradient(to right, #02a963, #00bfff);
  color: var(--text);
  line-height: 1.25rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  text-decoration: none;
}

.comment-button:hover {
  background-color: var(--blackly);
  color: var(--white);
}

p {
  padding-top: 27px;
}

.container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  background-color: var(--color-background);
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px var(--color-bg);
}

.comment-form {
  margin-bottom: 2rem;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid var(--color-border);
  background-color: var(--color-background);
  color: var(--color-text);
  font-size: 1rem;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
  margin-bottom: 1rem;
}

.form-textarea {
  height: 100px;
  resize: vertical;
}

.post-btn {
  display: flex;
  justify-content: flex-end;
}

.post-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-size: 0.875rem;
  font-weight: 500;
  transition: color 0.3s, background-color 0.3s;
  outline: none;
  border: 2px solid var(--color-border);
  background-color: transparent;
  color: var(--text);
  line-height: 1.25rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  text-decoration: none;
}

.post-button:hover {
  background-color: var(--blackly);
  color: var(--white);
}

.alert {
  margin-top: 1rem;
  padding: 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  text-align: center;
}

.alert-warning {
  color: var(--rad);
}

.alert-success {
  color: var(--theme);
}

.comments-list {
  margin-top: 2rem;
}

.comment {
  padding: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 0.375rem;
  margin-bottom: 1rem;
  background-color: var(--color-background);
}

.comment-header {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 0.75rem;
  object-fit: cover;
}

.comment-info {
  display: flex;
  flex-direction: column;
}

.comment-author {
  font-weight: bold;
  color: var(--color-heading);
}

.comment-timestamp {
  font-size: 0.875rem;
  color: var(--grey);
}

.comment-body {
  white-space: pre-wrap;
  color: var(--color-text);
}
</style>
