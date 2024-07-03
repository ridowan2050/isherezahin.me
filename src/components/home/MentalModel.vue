<template>
    <section id="blog">
        <div class="container">
            <div class="row flex-column-reverse flex-md-row justify-content-between gap-4">
                <h1 class="headline">Latest Blog</h1>
            </div>
            <div class="row">
                <div class="col-md-6" v-for="blog in blogs" :key="blog.id">
                    <div class="container mt-5">
                        <div class="row flex-column-reverse flex-md-row justify-content-between gap-4">
                            <div class="col-12">
                                <article class="blog-card">
                                    <div class="blog-card__background">
                                        <div class="card__background--wrapper">
                                            <div class="card__background--main" :style="{ backgroundImage: `url(${blog.image})` }">
                                                <div class="card__background--layer"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="blog-card__head">
                                        <span class="date__box">
                                            <span class="date__day">{{ blog.day }}</span>
                                            <span class="date__month">{{ blog.month }}</span>
                                        </span>
                                    </div>
                                    <div class="blog-card__info">
                                        <div class="blog-details">
                                            <span class="blog-type">{{ blog.type }}</span>
                                            <span class="blog-date">{{ blog.fullDate }}</span>
                                        </div>
                                        <h2 class="white-head">{{ truncate(blog.title, 50) }}</h2>
                                        <p>{{ truncate(blog.excerpt, 100) }}</p>
                                        <p>
                                            <a href="blog.link" class="category"  target="blank">
                                                <span v-for="category in blog.categories" :key="category">{{ category }}</span>
                                            </a>
                                        </p>
                                        <a :href="blog.link" class="btn btn--with-icon" target="blank">
                                            <i class="btn-icon fa fa-long-arrow-right"></i>READ MORE
                                        </a>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="custom-btn">
                    <RouterLink to="/blogs" class="custom-button">See all blog</RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import appImage1 from '../../assets/img/blog/blog1.jpg';
import appImage2 from '../../assets/img/blog/blog2.jpg';

export default {
    name: 'BlogSection',
    data() {
        return {
            blogs: [
                {
                    id: 1,
                    day: '11',
                    month: 'JUNE',
                    fullDate: 'June 11, 2024',
                    title: 'The impure can never equal the pure.',
                    excerpt: 'যেসব পুরুষেরা কোনো নারীর নোংরা অতীতকে ভুলে গিয়ে তাকে মেনে নেওয়ার মন মানসিকতা রাখে সেসব পুরুষেরা সুস্পষ্টভাবে ক্ষমাশীল হলেও নিঃসন্দেহে তাদের মধ্যে গায়রত আর আত্মসম্মানবোধের অভাব আছে।',
                    image: appImage1,
                    link: '#',
                    categories: ['Purity', 'Integrity'],
                    type: 'Article'
                },
                {
                    id: 2,
                    day: '27',
                    month: 'March',
                    fullDate: 'March 27, 2023 ',
                    title: 'Past experiences shaping present journey anew',
                    excerpt: 'In 2020, I endured the most agonizing experience of my life, a moment that forever altered my perspective.',
                    image: appImage2,
                    link: 'https://www.facebook.com/100062477031346/videos/766194744780592',
                    categories: ['Life'],
                    type: 'Video'
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
.date__box {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--text);
    border: 4px solid var(--text);
    font-weight: bold;
    padding: 5px 10px;
}
.date__day {
    font-size: 22px;
}
.blog-card {
    padding: 30px;
    position: relative;
    border: 1px solid var(--border);
    transition: 300ms ease-in-out;
    border-radius: 10px;
}
.blog-card:hover 
.btn--with-icon i {
    background: var(--text);
}
.date__box {
    opacity: 0;
    transform: scale(0.5);
    transition: 300ms ease-in-out;
}
.blog-card__background,
.card__background--layer {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.blog-card__background {
    padding: 15px;
    background: transparent;
}
.card__background--wrapper {
    height: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 60%);
    position: relative;
    overflow: hidden;
}
.card__background--main {
    height: 100%;
    position: relative;
    transition: 300ms ease-in-out;
    background-repeat: no-repeat;
    background-size: 100%;
    border-radius: 10px;
}
.card__background--layer {
    z-index: 0;
    opacity: 0;
    background: rgba(51, 51, 51, 0.9);
    transition: 300ms ease-in-out;
}
.blog-card__head {
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.blog-card__info {
    z-index: 10;
    background: var(--color-bg);
    padding: 20px 15px;
}
.blog-card__info h2 {
    text-transform: uppercase;
}
.blog-card:hover .date__box {
    opacity: 1;
    transform: scale(1);
}
.blog-card:hover .card__background--main {
    transform: scale(1.2) rotate(5deg);
}
.blog-card:hover .card__background--layer {
    opacity: 1;
    cursor: help;
}
.category span {
    display: inline-block;
    background-color: var(--blackly);
    color: var(--text);
    padding: 5px 10px;
    margin-right: 5px;
    border-radius: 5px;
    font-size: 0.85em;
    transition: background-color 300ms ease;
}
.category span:hover {
    background-color: var(--grey);
}
.blog-details {
    margin-bottom: 10px;
    font-size: 0.9em;
    color: var(--grey);
}
.blog-type {
    font-weight: bold;
    margin-right: 10px;
}
.btn {
    background: var(--color-bg);
    color: var(--text);
    font-weight: bold;
    outline: none;
    box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.2);
    overflow: hidden;
    border-radius: 0;
    height: 50px;
    line-height: 50px;
    display: inline-block;
    padding: 0;
    border: none;
}
.btn:focus {
    box-shadow: none;
}
.btn:hover {
    color: var(--theme);
}
.btn--with-icon {
    padding-right: 20px;
}
.btn--with-icon i {
    padding: 0px 30px 0px 15px;
    margin-right: 10px;
    height: 50px;
    line-height: 50px;
    vertical-align: bottom;
    background: var(--theme);
    clip-path: polygon(0 0, 70% 0, 100% 100%, 0% 100%);
}
.btn--only-icon {
    width: 50px;
}
</style>
