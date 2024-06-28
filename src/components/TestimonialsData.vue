<template>
<div class="row title">
  <h1 class="text-center"><span class="title-1 underline">STRONG</span> <span class="title-2">TESTIMONIALS</span></h1>
  <p class="text-center" style="font-size: 15px">What my clients and colleagues are saying</p>
</div>
  <div class="outerdiv">
    <div class="innerdiv">
      <!-- Testimonial 1 -->
      <div class="div1 eachdiv">
        <div class="userdetails">
          <div class="imgbox">
            <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-daniel.jpg" alt="">
          </div>
          <div class="detbox">
            <p class="name">Daniel Clifford</p>
            <p class="designation">Verified Graduate</p>
          </div>
        </div>
        <div class="review">
          <h4>Exceptional Problem-Solving Skills</h4>
          <p>“ Working with Zahin has been an absolute pleasure, largely owing to his exceptional problem-solving prowess. He demonstrates a remarkable ability to navigate through intricate challenges within our Laravel and Vue projects effortlessly. Zahin consistently provides innovative solutions that not only streamline processes but also enhance overall efficiency and effectiveness. His analytical skills are truly commendable, enabling him to tackle even the most daunting issues head-on. Zahin's contributions have been instrumental in the successful completion of numerous projects, underscoring his invaluable role within our team. ”</p>
        </div>
      </div>

      <!-- Testimonial 2 -->
      <div class="div2 eachdiv">
        <div class="userdetails">
          <div class="imgbox">
            <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jonathan.jpg" alt="">
          </div>
          <div class="detbox">
            <p class="name">Jonathan Walters</p>
            <p class="designation">Verified Graduate</p>
          </div>
        </div>
        <div class="review">
          <h4>Strong Vue.js Expertise</h4>
          <p>“ Zahin's Vue.js expertise ensures robust front-end solutions with clean, maintainable code and proactive adoption of innovations, keeping our projects cutting-edge and user-friendly. ”</p>
        </div>
      </div>

      <!-- Testimonial 3 -->
      <div class="div3 eachdiv">
        <div class="userdetails">
          <div class="imgbox">
            <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-kira.jpg" alt="">
          </div>
          <div class="detbox">
            <p class="name dark">Kira Whittle</p>
            <p class="designation dark">Verified Graduate</p>
          </div>
        </div>
        <div class="review dark">
          <h4>Reliable Laravel Development</h4>
          <p>Unwavering Reliability. Exceptional Results. Zahin consistently delivers top-notch Laravel solutions, expertly crafted to meet your project's specific needs. His meticulous attention to detail ensures scalable and efficient backend architectures, built to last. Clean Code. Seamless Collaboration. Zahin's code is not just functional, it's beautiful. Well-structured and easy to understand, it fosters smooth collaboration and simplifies future maintenance. His commitment to clean code reflects his deep understanding of software craftsmanship and his dedication to delivering superior results.</p>
        </div>
      </div>

      <!-- Testimonial 4 -->
      <div class="div4 eachdiv">
        <div class="userdetails">
          <div class="imgbox">
            <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg" alt="">
          </div>
          <div class="detbox">
            <p class="name dark">Jeanette Harmon</p>
            <p class="designation dark">Verified Graduate</p>
          </div>
        </div>
        <div class="review dark">
          <h4>Effective Team Member</h4>
          <p>“ Zahin is a strong team member: communicates well, participates actively, and brings valuable insights. He tackles challenges, helps others, and improves the team's development process. ”</p>
        </div>
      </div>

      <!-- Testimonial 5 -->
      <div class="div5 eachdiv">
        <div class="userdetails">
          <div class="imgbox">
            <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-patrick.jpg" alt="">
          </div>
          <div class="detbox">
            <p class="name">Patrick Abrams</p>
            <p class="designation">Verified Graduate</p>
          </div>
        </div>
        <div class="review">
          <h4>Impressed by Zahin's Work Ethic and Expertise</h4>
          <p>“ Zahin goes above and beyond the typical developer. Not only is his Laravel proficiency impressive, but his dedication to the project's success is truly commendable. He takes the time to understand your specific requirements and translates them into a solution that is both functional and elegant. Communication is clear and concise, making the development process smooth and collaborative. Highly recommend Zahin for any Laravel project! ”</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@500;600&display=swap');

  /* Rest of your CSS styles */
  a:link, a:active, a:visited, a:hover {
    color: #3f51b5;
  }
  .title{
    margin-bottom: -20px;
  }
  h1 {
    margin-top: 60PX;
    font-size: 50px;
    line-height: 1;
    padding: 20px;
  }
  .title-1{
    color: gray;
    font-weight: bold;
  }
  .title-2 {
    color: #41B883;
    font-weight: bold;
  }
  .underline{
    margin-top: 3px;
    border-bottom: 4px solid #41B883;
  }

  .outerdiv {
    width: 100%;
    min-height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .innerdiv {
    transform: scale(0.9);
    margin: 1rem;
    display: grid;
    grid-gap: 1.5rem;
    grid-template-rows: repeat(2, 22rem);
    grid-template-columns: repeat(4, 17rem);
  }

  .eachdiv {
    padding: 1rem 2rem;
    border-radius: 0.8rem;
    box-shadow: 5px 5px 20px rgba(109, 107, 107, 0.42); /* Changed shadow color */
    color: white;
  }

  .div1 {
    background: #733FC8;
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    background-image: url('https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/bg-pattern-quotation.svg');
    background-repeat: no-repeat;
    background-position: 25rem center; /* Changed background position */
  }

  .div2 {
    background: #49556B;
    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }

  .div3 {
    background: white;
    grid-column: 4 / 5;
    grid-row: 1 / 3;
    color: black;
  }

  .div4 {
    background: white;
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    color: black;
  }

  .div5 {
    background: #18202D;
    grid-column: 2 / 4;
    grid-row: 2 / 3;
  }

  .userdetails {
    display: flex;
    align-items: center; /* Center align user details */
  }

  .imgbox {
    margin-right: 1rem;
  }

  .imgbox img {
    border-radius: 50%;
    width: 3rem; /* Increased image size for better visibility */
    border: 2px solid #cec5c5;
  }

  .detbox {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .detbox p {
    margin: 0;
  }

  .detbox .name {
    color: hsl(0, 0%, 81%);
    font-size: 1rem; /* Increased font size for better readability */
    margin-bottom: 0.5rem; /* Reduced margin for better spacing */
    font-weight: 600;
  }

  .detbox .name.dark {
    color: #49505A;
  }

  .detbox .designation {
    color: hsl(0, 0%, 81%);
    opacity: 50%;
    font-size: 0.9rem; /* Increased font size for better readability */
  }

  .detbox .designation.dark {
    color: #49505A;
  }

  .review h4 {
    font-size: 1.3rem; /* Adjusted font size for consistency */
    color: #F3DEFF;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 0.5rem; /* Reduced margin for better spacing */
  }

  .review.dark h4 {
    color: #4B5258;
  }

  .review p {
    font-size: 0.9rem; /* Adjusted font size for consistency */
    color: #F3DEFF;
    font-weight: 500;
    opacity: 50%;
    line-height: 1.5;
  }

  .review.dark p {
    color: #0e0e0e;
  }

  @media only screen and (max-width: 1000px) {
    .innerdiv {
      transform: scale(0.7);
    }
  }

  @media only screen and (max-width: 800px) {
    .innerdiv {
      transform: scale(0.6);
    }
  }

  @media only screen and (max-width: 650px) {
    .div1 {
      background-position: 10rem center; /* Changed background position */
    }
    .innerdiv {
      display: flex;
      flex-direction: column;
      transform: scale(1);
      margin: 2rem;
      margin-bottom: 5rem;
    }
    h1 {
      font-size: 20px;
    }
  }
</style>
