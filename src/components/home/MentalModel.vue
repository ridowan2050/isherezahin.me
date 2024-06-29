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
                                        <h2 class="text-white">{{ truncate(blog.title, 50) }}</h2>
                                        <p>{{ truncate(blog.excerpt, 100) }}</p>
                                        <a :href="blog.link" class="btn btn--with-icon">
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
import appImage from '../../assets/img/portfolio/app-1.jpg';

export default {
    name: 'BlogSection',
    data() {
        return {
            blogs: [
                {
                    id: 1,
                    day: '11',
                    month: 'JAN',
                    title: 'HARVICK GETS WHAT HE NEEDS, JOHNSON AMONG',
                    excerpt: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque vero libero voluptatibus earum? Alias dignissimos quo cum, nulla esse facere atque, blanditiis doloribus at sunt quas, repellendus vel? Et, hic!',
                    image: appImage,
                    link: '#'
                },
                {
                    id: 2,
                    day: '12',
                    month: 'FEB',
                    title: 'ANOTHER EXCITING RACE, NEW RECORDS SET',
                    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel.',
                    image: 'https://via.placeholder.com/600x400', // Placeholder image URL
                    link: '#'
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
    color: var(--text-default);
    border: 4px solid var(--text-default);
    font-weight: bold;
    padding: 5px 10px;
}
.date__day {
    font-size: 22px;
}
.blog-card {
    padding: 30px;
    position: relative;
    border: 1px solid var(--border-input);
    transition: 300ms ease-in-out;
    border-radius: 10px;
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
    background: var(--color-bg);
    display: flex;
    align-items: flex-end;
    justify-content: center;
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
    background-size: cover;
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
a.icon-link {
    color: var(--text-default);
    transition: 200ms ease-in-out;
}
a.icon-link i {
    color: var(--color-primary);
}
a.icon-link:hover {
    color: var(--color-primary);
    text-decoration: none;
}
.btn {
    background: var(--color-bg);
    color: var(--text-default);
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
    color: var(--color-primary);
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
    color: white;
    background: var(--color-primary);
    clip-path: polygon(0 0, 70% 0, 100% 100%, 0% 100%);
}
.btn--only-icon {
    width: 50px;
}
</style>
