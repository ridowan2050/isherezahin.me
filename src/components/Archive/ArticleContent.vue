<template>
  <div class="news-container" style="margin-top: 70px">
    <h1>Recent News</h1>
    <div class="filter">
      <button 
        v-for="category in ['All', ...uniqueCategories]" 
        :key="category" 
        :class="['filter-button', { active: selectedCategory === category }]" 
        @click="selectCategory(category)"
      >
        {{ category }}
      </button>
    </div>
    <div class="articles">
      <div class="article" v-for="(article, index) in filteredArticles" :key="index">
        <h2>{{ article.title }}</h2>
        <p class="content">{{ truncateContent(article.content) }}</p>
        <p v-for="(category, index) in article.categories" :key="category" class="category" style="display: none;">
        {{ category }}<span v-if="index < article.categories.length - 1">, </span>        
        </p>        
        <p class="datetime">{{ article.date }} - <span class="time">{{ article.time }}</span></p>
        <a :href="articleLink(article.link)" target="_blank" class="read-more">Read more <i class="bi bi-arrow-right"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          title: "A Beginner's Guide to Laravel Project Testing",
          content: 'As a budding Laravel developer, diving into the world of testing might seem daunting. But fear not! Robust testing practices are the cornerstone of any successful Laravel project, and this guide will equip you with the essentials to get started.',
          link: 'https://www.linkedin.com/pulse/beginners-guide-laravel-project-testing-zahin--m31sc/?trackingId=aS4kq4FwR7WY7Q%2F70Ho1aw%3D%3D',
          date: 'May 10, 2024',
          time: '10:00 AM',
          categories: ['Laravel', 'Testing']
        },
        {
          title: "Innovative Solutions in Full-Stack Development",
          content: 'In the rapidly evolving field of software development, innovation is key. Discover how full-stack developers can leverage cutting-edge technologies and methodologies to create innovative solutions that address complex challenges and drive project success.',
          link: '',
          date: 'April 15, 2024',
          time: '9:00 AM',
          categories: ['Full-Stack Development']
        },
                {
          title: 'Mastering Laravel & Vue.js',
          content: 'The web development landscape is constantly evolving, and developers need to adapt to stay ahead of the curve. Two powerful frameworks, Laravel (backend) and Vue.js (frontend), have emerged as popular choices for building dynamic and interactive web applications. Mastering this combination can significantly enhance your full-stack development skills and open doors to exciting job opportunities.',
          link: 'https://www.linkedin.com/pulse/how-unlock-your-web-development-superpowers-mastering-abu-zahin-sycic/',
          date: 'March 26, 2024',
          time: '2:30 PM',
          categories: ['Full-Stack Development', 'Laravel', 'Vue']
        },
        {
          title: "Effective Collaboration in Agile Teams",
          content: 'Collaboration is essential in agile development environments. Learn the best practices for effective communication and teamwork that can help agile teams thrive and deliver exceptional results in software projects.',
          link: '',
          date: 'February 20, 2024',
          time: '11:30 AM',
          categories: ['Agile Development']
        },
      ],
      selectedCategory: 'All',
      filteredArticles: []
    };
  },
  computed: {
    uniqueCategories() {
      const categories = this.articles.flatMap(article => article.categories);
      return [...new Set(categories)];
    }
  },
  methods: {
    truncateContent(content) {
      const words = content.split(' ');
      const truncatedContent = words.slice(0, 20).join(' ') + '...'; // Adjust the number of words as needed
      return truncatedContent;
    },
    articleLink(link) {
      return link ? link : '/404';
    },
    selectCategory(category) {
      this.selectedCategory = category;
      this.filterArticles();
    },
    filterArticles() {
      if (this.selectedCategory === 'All') {
        this.filteredArticles = this.articles;
      } else {
        this.filteredArticles = this.articles.filter(article => article.categories.includes(this.selectedCategory));
      }
    }
  },
  mounted() {
    this.filterArticles();
  }
};
</script>

<style scoped>
.news-container {
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  padding: 20px 0;
  font-size: 2em;
  color: var(--grey);
}

.filter {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 10px;
}

.filter-button {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  color: var(--white);
  background-color: var(--blackly);
}

.filter-button:hover {
  background-color: var(--blackly);
  color: var(--white);
  transform: scale(1.05);
}

.filter-button.active {
  background-color: var(--theme);
  color: var(--white);
}

.articles {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.article {
  width: 100%;
  border-bottom: 1px solid var(--white);
  padding: 20px;
  margin-bottom: 20px;
  transition: background-color 0.3s;
}

.article h2 {
  color: var(--white);
  font-size: 1.5em;
  margin-bottom: 10px;
}

.article p.content {
  line-height: 1.5;
  color: var(--white);
}

.article .datetime {
  font-size: 0.9em;
  color: var(--text);
}

.article .time {
  font-weight: bold;
}

.article .read-more {
  text-decoration: none;
  font-weight: bold;
  color: var(--theme);
}

.article .read-more:hover {
  color: var(--theme);
}

.bi-arrow-right {
  margin-left: 5px;
}

.category {
  display: inline-block;
  color: var(--text);
  margin-right: 5px;
}
</style>