<template>
  <section id="blog" style="margin-top: 70px">
    <div class="container">
      <!-- Page Head -->
      <div class="row page-head gap-2">
        <h1 class="white-head fw-bold text-green-800">Blog</h1>
        <p>On my personal website and blog, I share notes, articles, and various thoughts on different subjects, including personal experiences.</p>
      </div>

      <!-- Search and Filters -->
      <div class="row filters mt-4">
        <div class="col-md-9">
          <p>{{ filteredBlogs.length }} out of {{ blogs.length }} blogs displayed</p>
        </div>
        <div class="col-md-3">
          <div class="text-end input-group custom-input-group">
            <span class="input-group-text">
              <i class="bi bi-search"></i>
            </span>
            <input type="text"
                  v-model="searchQuery"
                  placeholder="Search articles"
                  class="form-control"
                  data-bs-toggle="tooltip"
                  title="Search by title, category, type, date, month..."
                  data-bs-placement="bottom" />
          </div>
        </div>
      </div>
      <img src="../assets/img/home/about-shape-3.svg" loading="lazy" alt="" class="shape shape-3">
      <!-- Blog Cards -->
      <div class="row blog-posts">
        <div class="container">
            <div class="row gy-4">
              <div class="col-md-6 col-lg-4" v-for="blog in paginatedBlogs" :key="blog.id">
                    <div class="post-entry" data-aos-delay="100">
                        <a href="#" class="thumb d-block">
                            <img :src="blog.image" alt="Blog Image" class="img-fluid rounded">
                        </a>
                        <div class="post-content">
                            <div class="meta">
                                <a href="#" class="cat">{{ blog.type }}</a> •
                                <span class="date">{{ blog.date }}</span>
                            </div>
                            <h3>
                              <a :href="blog.link" target="blank">{{ truncate(blog.title, 50) }}</a>
                            </h3>
                            <p>{{ truncate(blog.excerpt, 100) }}</p>
                            <div class="d-flex author align-items-center">
                                <div class="pic">
                                    <img :src="blog.writerimage" alt="Writer Image" class="img-fluid rounded-circle">
                                </div>
                                <div class="author-name">
                                    <strong class="d-block">{{ blog.writername }}</strong>
                                    <span>{{ blog.writerdesignation }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="filteredBlogs.length === 0" class="col-12 text-center mt-5">
                  <p>
                    <span :style="{ color: 'var(--rad)' }">{{ searchQuery }}</span> not found. 
                    You can read my old page article 
                    <RouterLink to="/article" exact-active-class="active-link">Article</RouterLink>
                  </p>
                </div>
                <!-- Not Found Message -->
            </div>
        </div>
      </div>

      <!-- Pagination Section -->
      <div class="row" v-if="filteredBlogs.length > 0">
        <div class="page-pagination">
          <button :disabled="currentPage === 1" @click="currentPage--" class="pagination-btn">Previous</button>
          <span class="pagination-info">Page {{ currentPage }} of {{ totalPages }}</span>
          <span class="pagination-select">
            <select v-model="blogsPerPage" class="form-control">
              <option :value="5">5 per page</option>
              <option :value="10">10 per page</option>
              <option :value="20">20 per page</option>
            </select>
          </span>
          <button :disabled="currentPage === totalPages" @click="currentPage++" class="pagination-btn">Next</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import blogImage1 from '../assets/img/blog/blog1.jpg';
import writerImage1 from '../assets/img/me/profile-img.jpg';

import blogImage2 from '../assets/img/blog/blog2.jpg';
import writerImage2 from '../assets/img/me/profile-img.jpg';

import blogImage3 from '../assets/img/blog/blog3.jpg';
import writerImage3 from '../assets/img/me/profile-img.jpg';

import blogImage4 from '../assets/img/blog/blog4.jpg';
import writerImage4 from '../../public/manavatar.jpg';

import blogImage5 from '../assets/img/blog/blog5.jpg';
import writerImage5 from '../assets/img/me/profile-img.jpg';

export default {
  name: 'BlogSection',
  data() {
    return {
      blogs: [
        {
            id: 1,
            date: 'August 17, 2024',
            title: 'Anti-discrimination Students Movement',
            excerpt: 'The Anti-discrimination Students Movement is a student organization in Bangladesh that was formed during the 2024 Bangladesh quota reform movement. The group led the movement advocating for anti-discrimination policies.',
            image: blogImage1,
            link: '/bd-anti-discrimination-student-movement',
            type: 'Article',
            categories: ['Movement', 'Students', 'power', 'Article'],
            writerimage: writerImage1,
            writername: 'Abu Zahin',
            writerdesignation: 'SQA Engineer',
        },
        {
            id: 2,
            date: 'March 26, 2024',
            title: 'Mastering Laravel & Vue.js',
            excerpt: 'The web development landscape is constantly evolving, and developers need to adapt to stay ahead of the curve. Two powerful frameworks, Laravel (backend) and Vue.js (frontend), have emerged as popular choices for building dynamic and interactive web applications. Mastering this combination can significantly enhance your full-stack development skills and open doors to exciting job opportunities.',
            image: blogImage2,
            link: 'https://www.linkedin.com/pulse/how-unlock-your-web-development-superpowers-mastering-abu-zahin-sycic/',
            type: 'Article',
            categories: ['laravel', 'Vue', 'Article'],
            writerimage: writerImage2,
            writername: 'Abu Zahin',
            writerdesignation: 'SQA Engineer',
        },
        {
            id: 3,
            date: 'May 10, 2024',
            title: "A Beginner's Guide to Laravel Project Testing",
            excerpt: 'As a budding Laravel developer, diving into the world of testing might seem daunting. But fear not! Robust testing practices are the cornerstone of any successful Laravel project, and this guide will equip you with the essentials to get started.',
            image: blogImage3,
            link: 'https://www.linkedin.com/pulse/beginners-guide-laravel-project-testing-zahin--m31sc/',
            type: 'Article',
            categories: ['testing', 'Article'],
            writerimage: writerImage3,
            writername: 'Abu Zahin',
            writerdesignation: 'SQA Engineer',
        },
        {
            id: 4,
            date: 'June 11, 2024',
            title: "The impure can never equal the pure.",
            excerpt: 'যেসব পুরুষেরা কোনো নারীর নোংরা অতীতকে ভুলে গিয়ে তাকে মেনে নেওয়ার মন মানসিকতা রাখে সেসব পুরুষেরা সুস্পষ্টভাবে ক্ষমাশীল হলেও নিঃসন্দেহে তাদের মধ্যে গায়রত আর আত্মসম্মানবোধের অভাব আছে।',
            image: blogImage4,
            link: '#',
            type: 'Article',
            categories: ['Purity', 'Integrity', 'Article'],
            writerimage: writerImage4,
            writername: 'Be Real Man',
            writerdesignation: 'Social Writer',
        },
        {
            id: 5,
            date: 'March 27, 2023',
            title: "Past experiences shaping present journey anew",
            excerpt: 'In 2020, I endured the most agonizing experience of my life, a moment that forever altered my perspective.',
            image: blogImage5,
            link: '#',
            type: 'Video',
            categories: ['Life', 'Blog'],
            writerimage: writerImage5,
            writername: 'Abu Zahin',
            writerdesignation: 'SQA Engineer',
        },
        // Add more blog data as needed
      ],
      searchQuery: '',
      currentPage: 1,
      blogsPerPage: 20
    };
  },
  computed: {
    filteredBlogs() {
      if (!this.searchQuery) {
        return this.blogs;
      }
      const query = this.searchQuery.toLowerCase();
      return this.blogs.filter(blog => {
        return blog.title.toLowerCase().includes(query) ||
              blog.categories.some(category => category.toLowerCase().includes(query)) ||
              blog.type.toLowerCase().includes(query) ||
              blog.date.toLowerCase().includes(query);
      });
    },
    paginatedBlogs() {
      const start = (this.currentPage - 1) * this.blogsPerPage;
      const end = this.currentPage * this.blogsPerPage;
      return this.filteredBlogs.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredBlogs.length / this.blogsPerPage);
    }
  },
  methods: {
    truncate(text, length) {
      return text.length > length ? text.substring(0, length) + '...' : text;
    }
  },
};
</script>

<style scoped>
.filters {
  padding-bottom: 20px;
}
.custom-input-group {
  display: flex;
  align-items: center;
  border: 1px solid var(--border);
  border-radius: 5px;
  width: 100%;
  transition: border-color 0.3s;
}

.custom-input-group:focus-within {
  border-color: var(--theme);
}

.custom-input-group .input-group-text {
  border: none; 
  padding: 10px 15px;
  background: transparent;
  color: var(--text);
}

.custom-input-group .input-group-text i {
  color: var(--text);
}

.custom-input-group .form-control {
  border: none;
  padding: 10px 15px;
  outline: none;
  color: var(--text);
  background: transparent;
  flex: 1;
}

.custom-input-group .form-control::placeholder {
  color: var(--grey);
}

@media (max-width: 575px) {
  .custom-input-group {
    width: 100%;
  }
}

.blog-posts .post-entry .thumb {
  margin-bottom: 20px;
}

.blog-posts .post-entry .thumb img {
  transition: 0.3s all ease;
}

.blog-posts .post-entry .thumb:hover img {
  opacity: 0.8;
}

.blog-posts .post-entry .meta {
  font-size: 12px;
  margin-bottom: 20px;
}

.blog-posts .post-entry .meta .cat {
  text-transform: uppercase;
  font-weight: normal;
  color: var(--color-text);
}

.blog-posts .post-entry .meta .date {
  color: color-mix(in srgb, var(--color-text), transparent 25%);
}

.blog-posts .post-entry .post-content {
  padding-left: 30px;
  padding-right: 30px;
}

.blog-posts .post-entry .post-content h3 {
  font-size: 18px;
  line-height: 1.2;
}

.blog-posts .post-entry .post-content h3 a {
  color: var(--color-text);
}

.blog-posts .post-entry .post-content h3 a:hover {
  color: var(--color-border-hover);
}

.blog-posts .post-entry .post-content p{
  font-size: 15px;
  color: var(--color-background-soft);
  padding-left: 5px;
  padding-right: 5px;
}

.blog-posts .author .pic {
  flex: 0 0 50px;
  margin-right: 20px;
}

.blog-posts .author .author-name {
  line-height: 1.3;
}

.blog-posts .author .author-name strong {
  color: var(--color-text);
  font-weight: normal;
}

.blog-posts .author .author-name span {
  font-size: 14px;
  color: color-mix(in srgb, var(--color-text), transparent 25%);
}

.page-pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 10px;
  background: var(--color-bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.pagination-btn {
  background: var(--color-bg);
  color: var(--text);
  border: 1px solid var(--border);
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
}

.pagination-btn:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.pagination-btn:hover:not(:disabled) {
  background: var(--theme);
  color: var(--text);
}

.pagination-info {
  font-size: 0.9em;
  color: var(--grey);
}

.pagination-select .form-control {
  border: none;
  padding: 5px 10px;
  background: transparent;
  color: var(--grey);
}

.pagination-select .form-control option {
  background: var(--color-bg);
  color: var(--text);
}
</style>
