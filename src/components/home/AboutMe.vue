<template>
  <section class="about">
    <h1 class="text-center">About Me</h1>
    <div class="row" style="border-top: 1px solid rgb(36, 36, 36);">
      <div class="col-md-6">
        <div class="location">
          <div class="row">
            <div class="location-title">
              <p><i class="bi bi-geo-alt-fill"></i> Bangladesh, Chittagong</p>
            </div>
          </div>
          <div class="row">
            <div class="map">
              <img src="../../assets/img/home/map.png" alt="Bangladesh" height="200px" class="img-fluid">
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="connect">
          <div class="d-flex align-items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 18px; height: 18px;" class="lucide lucide-link">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
            <h2 style="color: var(--color-default); font-size: 12px;">Connect</h2>
          </div>
          <ul style="padding: 20px;">
            <li><a href="https://www.github.com/IsHereZahin/" target="_blank"><i class="bi bi-github"></i> Github</a></li>
            <li><a href="https://www.linkedin.com/in/isherezahin/" target="_blank"><i class="bi bi-linkedin"></i> LinkedIn</a></li>
            <li><a href="https://www.youtube.com/@IsHereZahin" target="_blank"><i class="bi bi-youtube"></i> YouTube</a></li>
            <li><a href="https://www.twitter.com/IsHereZahin/" target="_blank"><i class="bi bi-twitter"></i> X</a></li>
            <li><a href="https://join.skype.com/invite/xeu3lGYMM8So" target="_blank"><i class="bi bi-skype"></i> Skype</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section class="tools about">
    <div class="row">
      <div class="borderli col-lg-6">
        <div class="stacks">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap size-[18px]">
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
            </svg>
            Languages and Tools
        </div>
        <div class="icon-marquee">
    <div class="marquee-container" ref="marqueeContainer">
      <div class="icon-wrapper" :style="{ transform: `translateX(${offset}px)` }">
        <img
          v-for="(icon, index) in icons"
          :key="index"
          :src="icon.url"
          :alt="icon.alt"
          class="size-10 icon"
        />
      </div>
    </div>
  </div>
    </div>
      <div class="col-lg-6">
        <div class="row">
          <div class="col-sm-6">
            <div class="borderli dark:-dark flex flex-col gap-6  p-4 lg:p-6">
              <div class="d-flex align-items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock size-[60px]"> <!-- Adjusted size here -->
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <h2 class="text-sm font-light m-0">Coding hours</h2>
              </div>
              <div class="hours text-center">3283hrs</div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="borderli flex flex-col gap-6">
              <div class="d-flex align-items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart size-[18px]">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
                <h2 class="text-sm font-light m-0">Fav. framework</h2>
              </div>
              <div class="d-flex align-items-center justify-content-center gap">
                <div class="tech-stack">
                  <div class="tech">
                    <img src="../../assets/img/home/laravel.png" alt="Laravel Logo" width="100" height="100">
                    <div class="tooltip">
                      <span class="tech-name">Laravel:</span> A PHP framework for web artisans.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="button-container">
        <RouterLink to="/about" class="custom-button">Know more about me</RouterLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        { url: 'https://skillicons.dev/icons?i=html5', alt: 'HTML5 Icon' },
        { url: 'https://skillicons.dev/icons?i=css3', alt: 'CSS3 Icon' },
        { url: 'https://skillicons.dev/icons?i=bootstrap', alt: 'Bootstrap Icon' },
        { url: 'https://skillicons.dev/icons?i=tailwindcss', alt: 'Tailwind CSS Icon' },
        { url: 'https://skillicons.dev/icons?i=javascript', alt: 'JavaScript Icon' },
        { url: 'https://skillicons.dev/icons?i=php', alt: 'PHP Icon' },
        { url: 'https://skillicons.dev/icons?i=python', alt: 'Python Icon' },
        { url: 'https://skillicons.dev/icons?i=cs', alt: 'C# Icon' },
        { url: 'https://skillicons.dev/icons?i=cpp', alt: 'C++ Icon' },
        { url: 'https://skillicons.dev/icons?i=vue', alt: 'Vue.js Icon' },
        { url: 'https://skillicons.dev/icons?i=nodejs', alt: 'Node.js Icon' },
        { url: 'https://skillicons.dev/icons?i=laravel', alt: 'Laravel Icon' },
        { url: 'https://skillicons.dev/icons?i=selenium', alt: 'Selenium Icon' },
        { url: 'https://skillicons.dev/icons?i=puppeteer', alt: 'Puppeteer Icon' },
        { url: 'https://skillicons.dev/icons?i=mysql', alt: 'MySQL Icon' },
        { url: 'https://skillicons.dev/icons?i=firebase', alt: 'Firebase Icon' },
        { url: 'https://skillicons.dev/icons?i=figma', alt: 'Figma Icon' },
        { url: 'https://skillicons.dev/icons?i=git', alt: 'Git Icon' },
        { url: 'https://skillicons.dev/icons?i=github', alt: 'GitHub Icon' },
        { url: 'https://skillicons.dev/icons?i=gitlab', alt: 'GitLab Icon' },
        { url: 'https://skillicons.dev/icons?i=postman', alt: 'Postman Icon' },
        { url: 'https://skillicons.dev/icons?i=vscode', alt: 'VS Code Icon' },
        { url: 'https://skillicons.dev/icons?i=vercel', alt: 'Vercel Icon' },
        { url: 'https://skillicons.dev/icons?i=netlify', alt: 'Netlify Icon' },
        { url: 'https://skillicons.dev/icons?i=windows', alt: 'Windows Icon' },
        { url: 'https://skillicons.dev/icons?i=linux', alt: 'Linux Icon' },
        { url: 'https://skillicons.dev/icons?i=discord', alt: 'Discord Icon' },
        { url: 'https://skillicons.dev/icons?i=chatgpt', alt: 'ChatGPT Icon' },
      ],
      offset: 0,
      animationDuration: 30, // Adjust as needed (seconds)
    };
  },
  mounted() {
    this.setupMarqueeAnimation();
  },
  methods: {
    setupMarqueeAnimation() {
      const containerWidth = this.$refs.marqueeContainer.offsetWidth;
      const totalWidth = this.icons.length * 100; // Assuming each icon is 100px wide

      if (totalWidth > containerWidth) {
        // Calculate animation duration based on total width
        this.animationDuration = (totalWidth / 100) * 10; // 10 seconds per 100px width
        this.startMarqueeAnimation();
      }
    },
    startMarqueeAnimation() {
      setInterval(() => {
        this.offset -= 1;
        if (Math.abs(this.offset) >= this.icons.length * 100) {
          this.offset = 0;
        }
      }, 50); // Adjust interval for smoother animation
    },
  },
};
</script>

<style scoped>
.about {
  padding: 0 40px;
  margin-bottom: -60px;
}

h1 {
  color: var(--color-default);
  margin-bottom: 30px;
}

.row {
  padding: 20px;
  display: flex;
}

.col-md-6 {
  margin: auto;
  padding: 1.6rem;
}

.borderli {
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
  animation: fadeIn 0.5s ease-out;
}

.location {
  align-items: left;
  color: var(--text-gray);
  border-bottom: 1px solid var(--color-secondary);
}

.location-title {
  color: var(--color-default);
  font-size: 15px;
  margin-bottom: -20px;
}

.map img {
  height: 200px;
  width: auto;
  margin: auto;
  display: block;
  animation: moving 6s linear infinite;
}

@keyframes moving {
  0% { transform: translateX(0); }
  50% { transform: translateX(20px); }
  100% { transform: translateX(0); }
}

.connect {
  font-size: 18px;
  margin: auto;
  gap: 1rem;
}

.connect ul {
  list-style-type: none;
  padding-left: .5rem;
  padding-right: .5rem;
  gap: 1rem;
}

.connect ul li {
  margin-bottom: 10px;
}

.connect ul li i {
  margin-right: 20px;
}

.connect ul li a {
  color: var(--text-gray);
  font-size: 20px;
  text-decoration: none;
}

.connect ul li a:hover {
  color: var(--color-default);
}

/* Tools */
.stacks {
  font-size: 15px;
  color: var(--color-default);
}

.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

svg {
  margin: 10px;
  color: var(--color-default);
}
.flex-col {
  flex-direction: column;
}

.overflow-hidden {
  overflow: hidden;
}

.hours {
  font-size: 50px;
  font-weight: 600;
  color: var(--color-default);
}

.text-sm {
  font-size: 14px;
}

.font-light {
  font-weight: 300;
  color: var(--color-default);
}
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.button-container {
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-size: 1.5rem;
  font-weight: 500;
  transition: color 0.3s, background-color 0.3s;
  outline: none;
  border: 2px solid var(--border-input);
  background-color: transparent;
  color: var(--text-default);
  height: 2.5rem;
  padding: 15px 30px;
  border-radius: 0.75rem;
  cursor: pointer;
  text-decoration: none;
  margin-top: -60px;
}

.custom-button:hover {
  background-color: var(--color-secondary);
  color: var(--color-default);
}

.custom-button:focus-visible {
  box-shadow: 0 0 0 2px var(--color-secondary);
  outline: none;
}

.custom-button:disabled {
  pointer-events: none;
  opacity: 0.5;
}



















.size-10 {
    width: 40px;
    height: 40px;
}

.icon-marquee {
  width: 100%;
  padding: 20px 0;
  overflow: hidden;
}

/* Flex container for icons */
.flex {
  display: flex;
}

/* Icon styles */
.icon {
  width: 60px; /* Adjust icon size */
  height: auto;
}

/* Marquee animation styles */
.marquee-container {
  animation: marquee 20s linear infinite; /* Initial animation duration, will be updated dynamically */
}

/* Keyframes for marquee animation */
@keyframes marquee {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
