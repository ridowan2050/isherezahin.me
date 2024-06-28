<template>
  <div class="container mx-auto mt-5 mb-5 mb-md-5 py-5 px-3 px-md-5">
    <div class="mb-5 mt-3 mt-md-5">
      <h1 class="text-white my-4 fw-bold text-green-800">About</h1>
      <p class="mb-4 title" style="--text-gray: var(--text-default);">👋 Hello! Assalamualikum; I'm Zahin, a passionate programmer who loves coding and tea.</p>
      <hr class="bg-light" />
    </div>

    <div class="w-100">
      <h3 id="who-am-i" class="scroll-m-32 text-white text-decoration-none">WHO AM I</h3>
      <p>I am a professional software engineer from Bangladesh, currently 21 years old, specializing in Laravel, Vue.js, Pest, Selenium, Puppeteer, and database management. My passion lies in mastering software testing techniques and game development.</p>
      <p>I embarked on my programming journey at the age of 15 and pursued formal education in computer science starting in 2019. While initially a hobby, I have honed my skills through extensive self-learning on platforms like YouTube. One of my preferred channels is <a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@edurekaIN">edureka!</a>, where I have gained proficiency in various programming languages.</p>
      <p>I excel in utilizing <a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://laravel.org/">Laravel</a> and <a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://vuejs.org/">Vue.js</a> to develop sophisticated websites. I leverage <a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://github.com">GitHub</a> for code management and hosting, followed by deployment on platforms such as <a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://vercel.com">Vercel</a> and <a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://netlify.org/">Netlify</a>.</p>
    </div>

    <h4 id="who-am-i" class="scroll-m-32 text-white text-decoration-none">About this site</h4>
    <ul>
      <li class="text-gray-400">Framework: <a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://vuejs.org/">Vue.js</a></li>
      <li class="text-gray-400">Deployment: <a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://netlify.app">Netlify</a></li>
      <li class="text-gray-400">Analytics: <a class="tech-color" target="_blank" rel="noopener noreferrer" href="#">Internet</a></li>
      <li class="text-gray-400">Styling: <a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://css.com">CSS</a></li>
    </ul>

    <h4 id="who-am-i" class="scroll-m-32 text-white text-decoration-none">Inspiration</h4>
    <p>Here are some websites that inspired me a lot to build a fantastic website.</p>
    <p>Refer to <a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://github.com/isherezahin/">README</a></p>

    <h4 id="who-am-i" class="scroll-m-32 text-white text-decoration-none">Social links</h4>
    <ul>
      <li class="text-gray-400"><a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://github.com/isherezahin">GitHub</a></li>
      <li class="text-gray-400"><a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/isherejahin/">Facebook</a></li>
      <li class="text-gray-400"><a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://instagram.com/isherezahin">Instagram</a></li>
      <li class="text-gray-400"><a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://x.com/isherezahin">X</a></li>
      <li class="text-gray-400"><a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://youtube.com/@isherezahin">YouTube</a></li>
    </ul>
    
    <h4 id="who-am-i" class="scroll-m-32 text-white text-decoration-none">Tech Stack</h4>
    <div class="tech-stack">
      <div class="tech">
        <img src="https://skillicons.dev/icons?i=html" alt="HTML"/>
        <div class="tooltip"><span class="tech-name">HTML:</span> The standard markup language for creating web pages.</div>
      </div>
      <div class="tech">
        <img src="https://skillicons.dev/icons?i=css" alt="CSS"/>
        <div class="tooltip"><span class="tech-name">CSS:</span> A style sheet language used for describing the presentation of a document written in HTML.</div>
      </div>
      <div class="tech">
        <img src="https://skillicons.dev/icons?i=nodejs" alt="Node.js"/>
        <div class="tooltip"><span class="tech-name">Node.js:</span> A JavaScript runtime built on Chrome's V8 JavaScript engine.</div>
      </div>
      <div class="tech">
        <img src="https://skillicons.dev/icons?i=vue" alt="Vue.js"/>
        <div class="tooltip"><span class="tech-name">Vue.js:</span> A progressive framework for building user interfaces.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutComponent',
  // Add any necessary data, methods, or computed properties here
}
</script>

<style scoped>
.scroll-m-32 {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.title {
  color: var(--text-gray);
}

p, li {
  font-size: 18px;
  color: var(--text-default);

}

.transition {
  transition: opacity 0.2s ease-in-out;
}
.rounded {
  border-radius: 0.5rem;
}

.text-gray-400 {
  color: var(--text-default);
}

a, h4 {
    font-weight: 600;
}

</style>
