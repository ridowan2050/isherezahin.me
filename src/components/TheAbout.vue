<template>
    <section id="project" style="margin-top: 70px">
    <div class="container">
      <!-- Page Head -->
      <div class="row page-head gap-2">
        <h1 class="text-white fw-bold text-green-800">About</h1>
        <p>👋 Hello! Assalamualikum; I'm Zahin, a passionate programmer who loves coding and tea.</p>
      </div>
      <img src="../assets/img/home/about-shape-3.svg" loading="lazy" alt="" class="shape shape-3">
      <div class="w-100">
        <h3 class="scroll-m-32 text-white text-decoration-none theme-color"><a href="#how-am-i">WHO AM I</a></h3>
        <p>I am a professional software engineer from Bangladesh, currently 21 years old, specializing in Laravel, Vue.js, Pest, Selenium, Puppeteer, and database management. My passion lies in mastering software testing techniques and game development.</p>
        <p>I embarked on my programming journey at the age of 15 and pursued formal education in computer science starting in 2019. While initially a hobby, I have honed my skills through extensive self-learning on platforms like YouTube. One of my preferred channels is <a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@edurekaIN">edureka!</a>, where I have gained proficiency in various programming languages.</p>
        <p>I excel in utilizing <a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://laravel.org/">Laravel</a> and <a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://vuejs.org/">Vue.js</a> to develop sophisticated websites. I leverage <a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://github.com">GitHub</a> for code management and hosting, followed by deployment on platforms such as <a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://vercel.com">Vercel</a> and <a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://netlify.org/">Netlify</a>.</p>
      </div>

      <h5 class="scroll-m-32 text-white text-decoration-none">What I'm Up To</h5>
      <ul>
        <li class="text-gray-400">
          Currently employed as a Software Tester at 
          <a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://github.com/isherezahin">Iconic Solutions Pvt.</a>
        </li>
        <li class="text-gray-400">
          Serving as a mentor, providing revision-style mentorship at 
          <a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/ITExpertsChonkhulaPara/">IT Expert</a>
        </li>
        <li class="text-gray-400">
          In my spare time, I am developing a freelancing marketplace platform.
        </li>
        <li class="text-gray-400">
          Traveling to beautiful destinations and enjoying quality time with friends whenever possible.
        </li>
        <li class="text-gray-400">Continuously learning to enhance my skills and stay updated with the latest in technology.</li>
      </ul>
      <h4 class="scroll-m-32 text-white text-decoration-none">Social links</h4>
      <ul>
        <li class="text-gray-400"><a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://github.com/isherezahin">GitHub</a></li>
        <li class="text-gray-400"><a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/isherejahin/">Facebook</a></li>
        <li class="text-gray-400"><a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://instagram.com/isherezahin">Instagram</a></li>
        <li class="text-gray-400"><a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://x.com/isherezahin">X</a></li>
        <li class="text-gray-400"><a class="tech-color" target="_blank" rel="noopener noreferrer" href="https://youtube.com/@isherezahin">YouTube</a></li>
      </ul>
      
      <h4 class="scroll-m-32 text-white text-decoration-none">Tech Stack</h4>
      <div class="tech-stack">
        <div class="tech">
            <img src="https://skillicons.dev/icons?i=vscode" alt="Visual Studio Code"/>
            <div class="tooltip"><span class="tech-name">Visual Studio Code:</span> A source-code editor made by Microsoft.</div>
        </div>
        <div class="tech">
            <img src="https://skillicons.dev/icons?i=git" alt="Git"/>
            <div class="tooltip"><span class="tech-name">Git:</span> A distributed version control system for tracking changes in source code.</div>
        </div>
        <div class="tech">
            <img src="https://skillicons.dev/icons?i=cs" alt="C#"/>
            <div class="tooltip"><span class="tech-name">C#:</span> A modern, object-oriented programming language developed by Microsoft.</div>
        </div>
        <div class="tech">
            <img src="https://skillicons.dev/icons?i=laravel" alt="Laravel"/>
            <div class="tooltip"><span class="tech-name">Laravel:</span> A PHP framework for web artisans.</div>
        </div>
        <div class="tech">
            <img src="https://skillicons.dev/icons?i=vue" alt="Vue.js"/>
            <div class="tooltip"><span class="tech-name">Vue.js:</span> A progressive framework for building user interfaces.</div>
        </div>
        <div class="tech">
            <img src="https://skillicons.dev/icons?i=figma" alt="Figma"/>
            <div class="tooltip"><span class="tech-name">Figma:</span> A collaborative interface design tool.</div>
        </div>
        <div class="tech">
            <img src="https://skillicons.dev/icons?i=selenium" alt="Selenium"/>
            <div class="tooltip"><span class="tech-name">Selenium:</span> A portable framework for testing web applications.</div>
        </div>
        <div class="tech">
            <img src="https://skillicons.dev/icons?i=linux" alt="Linux"/>
            <div class="tooltip"><span class="tech-name">Linux:</span> An open-source Unix-like operating system.</div>
        </div>
        <div class="tech">
            <img src="https://skillicons.dev/icons?i=windows" alt="Windows"/>
            <div class="tooltip"><span class="tech-name">Windows:</span> A group of several proprietary graphical operating system families developed by Microsoft.</div>
        </div>
      </div>
      <h4 class="scroll-m-32 text-white text-decoration-none" style="margin-bottom: 4px;">Contact</h4>
      <p>Do contact me if you need my opinion about software testing, web development, especially frontend works. <br>I’ll be happy to help! (find my Skype ID in the footer)</p>
    </div>
    </section>
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
  color: var(--text);
}

.transition {
  transition: opacity 0.2s ease-in-out;
}
.rounded {
  border-radius: 0.5rem;
}

.text-gray-400 {
  color: var(--text);
}

a, h4 {
    font-weight: 600;
}

</style>
