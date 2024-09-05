<template>
  <div class="container">
    
    <div class="custom-container">
      <div class="custom-header">
        <!-- SVG and Header Content -->
      </div>
      <div>Thank you for visiting my website. I would greatly appreciate any feedback you might have on my work. Please feel free to leave a comment. Thank you!</div>
    </div>

    <div class="btn-comment">
      <button class="comment-button" style="margin-top: 10px;" @click="toggleCommentForm" @dblclick="hideCommentForm">Comment</button>
      <p>to continue leaving a message</p>
    </div>

    <div v-if="isCommentFormVisible" class="comment-form">
      <input v-model="userName" type="text" placeholder="Enter your name" class="form-input" required>
      
      <input v-model="githubUsername" type="text" placeholder="Enter your GitHub username (optional)" class="form-input">

      <select v-model="gender" class="form-input">
        <option value="man">Man</option>
        <option value="woman">Woman</option>
      </select>
      
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
          <img class="avatar" :src="message.gender === 'man' ? '/src/assets/img/me/manavatar.jpg' : '/src/assets/img/me/womanavatar.jpg'" alt="User Avatar">
          <div class="comment-info">
            <span class="comment-author">
              {{ message.name }}
              <img v-if="message.verified === 1" src="/src/assets/img/testimonials/verified.png" height="22" width="22" alt="Verified" class="verified-icon">
            </span>
            <span v-if="message.githubUsername" class="github-username">@{{ message.githubUsername }}</span>
          </div>
          <span class="comment-timestamp">{{ formatDate(message.time) }}</span>
        </div>
        <div class="comment-body" v-html="formatMessage(message.message)">
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
    const githubUsername = ref('');
    const message = ref('');
    const gender = ref('man');
    const warning = ref(false);
    const success = ref(false);
    const messages = ref([]);
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
        githubUsername: githubUsername.value || '',
        gender: gender.value,
        time: serverTimestamp(),
        message: message.value,
        verified: 0,
      });
      message.value = '';
      userName.value = '';
      githubUsername.value = '';
      gender.value = 'man';
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

    const formatMessage = (message) => {
      // Regex to identify URLs and replace them with HTML <a> tags
      return message.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" class="highlight-user-link" target="_blank">$1</a>');
    };

    return {
      userName,
      githubUsername,
      message,
      gender,
      warning,
      success,
      postMessage,
      messages,
      formatDate,
      formatMessage,
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

select {
  appearance: none;
  background-repeat: no-repeat;
  background-position: calc(100% - 10px) center;
  padding-right: 30px;
  border: 1px solid var(--border);
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
  background-color: var(--color-background);
  color: var(--text);
}

select:focus {
  border-color: var(--text);
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
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.comment-timestamp {
  font-size: 0.875rem;
  color: var(--grey);
  margin-left: auto; /* Pushes the timestamp to the far right */
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
  color: var(--text);
  display: flex;
  align-items: center;
}

.comment-author img {
  margin-left: 0.2rem;
}

.github-username {
  font-size: 0.875rem;
  color: var(--grey);
  margin-top: -0.2rem;
}

.comment-body {
  white-space: pre-wrap;
  color: var(--color-text);
}

.highlight-user-link {
  text-decoration: underline;
  word-wrap: break-word;
}

.comment-body {
  overflow-wrap: break-word;
}

.comment-body a {
  display: inline;
  padding: 0.2rem;
  border-radius: 0.25rem;
}

@media (max-width: 600px) {
  .highlight-user-link {
    font-size: 0.875rem;
  }
  
  .comment-body {
    padding: 0.5rem;
  }
}
</style>
