<template>
  <div class="container">
    <div class="row">
      <div class="slider-container">
        <swiper :options="swiperOptions" ref="mySwiper">
          <swiper-slide>
            <marquee class="slide-content">
              <img class="icon" src="https://skillicons.dev/icons?i=html" alt="HTML">
              <img class="icon" src="https://skillicons.dev/icons?i=css" alt="CSS">
              <img class="icon" src="https://skillicons.dev/icons?i=js" alt="JavaScript">
              <img class="icon" src="https://skillicons.dev/icons?i=php" alt="PHP">
              <img class="icon" src="https://skillicons.dev/icons?i=laravel" alt="Laravel">
              <img class="icon" src="https://skillicons.dev/icons?i=mysql" alt="MySQL">
              <img class="icon" src="https://skillicons.dev/icons?i=firebase" alt="Firebase">
              <img class="icon" src="https://skillicons.dev/icons?i=python" alt="Python">
              <img class="icon" src="https://skillicons.dev/icons?i=c" alt="C">
              <img class="icon" src="https://skillicons.dev/icons?i=cs" alt="C#">
              <img class="icon" src="https://skillicons.dev/icons?i=cpp" alt="C++">
              <img class="icon" src="https://skillicons.dev/icons?i=figma" alt="Figma">
              <img class="icon" src="https://skillicons.dev/icons?i=photoshop" alt="Photoshop">
              <img class="icon" src="https://skillicons.dev/icons?i=tailwindcss" alt="Tailwind CSS">
              <img class="icon" src="https://skillicons.dev/icons?i=bootstrap" alt="Bootstrap">
              <img class="icon" src="https://skillicons.dev/icons?i=vuejs" alt="Vue.js">
              <img class="icon" src="https://skillicons.dev/icons?i=vuetify" alt="Vuetify">
              <img class="icon" src="https://skillicons.dev/icons?i=git" alt="Git">
              <img class="icon" src="https://skillicons.dev/icons?i=github" alt="GitHub">
              <img class="icon" src="https://skillicons.dev/icons?i=gitlab" alt="GitLab">
              <img class="icon" src="https://skillicons.dev/icons?i=nodejs" alt="Node.js">
              <img class="icon" src="https://skillicons.dev/icons?i=postman" alt="Postman">
              <img class="icon" src="https://skillicons.dev/icons?i=vscode" alt="VS Code">
              <img class="icon" src="https://skillicons.dev/icons?i=visualstudio" alt="Visual Studio">
              <img class="icon" src="https://skillicons.dev/icons?i=powershell" alt="PowerShell">
              <img class="icon" src="https://skillicons.dev/icons?i=vercel" alt="Vercel">
              <img class="icon" src="https://skillicons.dev/icons?i=netlify" alt="Netlify">
              <img class="icon" src="https://skillicons.dev/icons?i=codepen" alt="CodePen">
              <img class="icon" src="https://skillicons.dev/icons?i=devto" alt="Dev.to">
              <img class="icon" src="https://skillicons.dev/icons?i=discord" alt="Discord">
              <img class="icon" src="https://skillicons.dev/icons?i=selenium" alt="Selenium">
              <img class="icon" src="https://skillicons.dev/icons?i=vite" alt="Vite">
              <img class="icon" src="https://skillicons.dev/icons?i=windows" alt="Windows">
              <img class="icon" src="https://skillicons.dev/icons?i=linux" alt="Linux">
            </marquee>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
        loop: true,
        autoplay: {
          delay: 3000,
        },
      },
    };
  },
  mounted() {
    const marquee = document.querySelector('.slide-content');
    const images = marquee.querySelectorAll('img');
    const duplicatedImages = [...images].map((img) => img.cloneNode(true));
    marquee.append(...duplicatedImages);
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.slider-container {
  width: 80%;
  margin: 0 auto;
}

.slide-content {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
  transition: box-shadow 0.3s; /* Add transition effect */
}

.slide-content:hover {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3); /* Increase box shadow on hover */
}

.slide-content img {
  max-width: 100px;
  height: auto;
  margin: 5px; /* Add margin between icons */
}

/* .icon {
  filter: grayscale(100%);
  opacity: 0.3;
}

.icon:hover {
  filter: none;
  opacity: 1;
} */
</style>
