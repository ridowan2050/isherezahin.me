<template>
    <section id="project">
      <div class="container">
        <div class="row flex-column-reverse flex-md-row justify-content-between gap-4">
            <h1 class="headline">Latest Project</h1>
        </div>
        <div class="row">
          <div class="col-md-6" v-for="project in projects" :key="project.id">
            <div class="container mt-5">
              <div class="row flex-column-reverse flex-md-row justify-content-between gap-4">
                <div class="col-12">
                    <a :href="project.link" class="visit" target="_blank">
                        <article class="project-card">
                            <div class="project-card__background">
                            <div class="card__background--wrapper">
                                <div class="card__background--main" :style="{ backgroundImage: `url(${project.image})` }">
                                </div>
                            </div>
                            </div>
                            <div class="project-card__info">
                            <h2 class="text-white">{{ truncate(project.title, 50) }}</h2>
                            <span class="text-white mb-2">{{project.date}}</span>                            
                            <p>{{ truncate(project.excerpt, 100) }}</p>
                            <p>
                                <a :href="project.link" class="language" target="_blank">
                                <span v-for="language in project.categories" :key="language">{{ language }}</span>
                                </a>
                            </p>
                            </div>
                        </article>
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="custom-btn">
            <RouterLink to="/project" class="custom-button">See all projects</RouterLink>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import appImage1 from '../../assets/img/project/project1.jpg';
import appImage2 from '../../assets/img/project/project2.jpg';

export default {
  name: 'projectSection',
  data() {
    return {
      projects: [
        {
          id: 1,
          date: 'April 23, 2024',
          title: 'Git Analyzer',
          excerpt: 'This application helps you Discover the value your Github code brings to the world.',
          image: appImage1,
          link: 'https://git-analyzer.netlify.app/',
          categories: ['Vue', 'Github'],
          type: ['software', 'git']
        },
        {
          id: 2,
          date: 'October 7, 2023',
          title: 'E-commerce website',
          excerpt: 'E-commerce websites are one of my favorites works to do.',
          image: appImage2,
          link: 'https://food-ecommerce-website-dev-zahin.netlify.app/',
          categories: ['Website', 'UI/UX'],
          type: ['ui', 'ux', 'e-commerce']
        }
      ]
    };
  },
  methods: {
    truncate(text, length) {
      return text.length > length ? text.substring(0, length) + '...' : text;
    }
  }
};
</script>

<style scoped>
#project {
  padding: 50px 0;
}

.project-card {
  padding: 30px;
  position: relative;
  border: 1px solid var(--border-input);
  transition: 300ms ease-in-out;
  border-radius: 10px;
  margin-top: -50px;
}
.project-card:hover 
.btn--with-icon i {
  background: var(--text-default);
}
.project-card {
  position: relative;
  border: 1px solid var(--border-input);
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.project-card__background {
  position: relative;
  overflow: hidden;
  padding: 20px 20px 20px 20px;
}

.card__background--main {
  background-size: cover;
  background-position: center;
  height: 300px;
  border-radius: 20px;
  transition: transform 0.5s ease; /* Hover animation duration */
}

.project-card:hover .card__background--main {
  transform: scale(1.2); /* Scale up on hover */
}

.project-card__info {
  background-color: var(--color-bg);
  padding: 20px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.project-card__info h2 {
  font-weight: 600;
  color: var(--text-default);
  margin-bottom: 10px;
}

.project-card__info p {
  color: var(--text-gray);
  line-height: 1.6;
}

.language {
  display: inline-block;
}

.language span {
  font-size: 1rem;
  display: inline-block;
  color: var(--color-default);
  background-color: var(--border-input);
  padding: .5rem 1rem;
  margin-right: 5px;
  border-radius: 50px;
  transition: background-color 0.3s ease;
}

.language span:hover {
  border: 1px solid var(--text-gray);
  background-color: var(--color-secondary);
}
  
@media (max-width: 768px) {
  .project-card__info {
    padding: 15px;
  }
}
</style>
  