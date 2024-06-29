<template>
  <!-- ======= End Page Header ======= -->
  <div class="page-header d-flex align-items-center">
    <div class="container position-relative">
      <div class="row d-flex justify-content-center">
        <div class="col-lg-9 text-center">
          <h2>About</h2>
          <p>{{ aboutText }}</p>
          <RouterLink to="/contact" class="cta-btn">Available for hire</RouterLink>
        </div>
      </div>
    </div>
  </div>
  <!-- End Page Header -->

  <!-- ======= About Section ======= -->
  <section id="about" class="about">
    <div class="container">
      <div class="row gy-4 justify-content-center">
        <div class="col-lg-4">
          <img :src="profileImg" class="img-fluid" alt="Profile Image">
        </div>
        <div class="col-lg-5 content">
          <h2>{{ title }}</h2>
          <p class="fst-italic py-3">{{ description }}</p>
          <div class="row">
            <div class="col-lg-12">
              <ul>
                <li>
                  <i class="bi bi-chevron-right"></i> <strong style="color: hsla(160, 100%, 37%, 1)">Abu Zahin Mohammad Nowsin</strong><br><span></span>
                </li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <ul>
                <li v-for="(item, index) in personalInfoLeft" :key="index">
                  <i class="bi bi-chevron-right"></i> <strong>{{ item.label }}</strong><br><span>{{ item.value }}</span>
                </li>
              </ul>
            </div>
            <div class="col-lg-6">
              <ul>
                <li v-for="(item, index) in personalInfoRight" :key="index">
                  <i class="bi bi-chevron-right"></i> <strong>{{ item.label }}</strong><br><span>{{ item.value }}</span>
                </li>
              </ul>
            </div>
          </div>
          <p class="py-3">{{ additionalInfo }}</p>
        </div>
      </div>
    </div>
  </section>
  <div class="d-flex align-items-center">
    <div class="container position-relative">
      <div class="row d-flex justify-content-center">
        <div class="col-lg-9 text-center">
          <p>{{ conclusion }}</p>
        </div>
      </div>
    </div>
  </div>
  <!-- End About Section -->
</template>

<script>
import profileImg from '@/assets/img/profile-img.jpg';

export default {
  data() {
    return {
      aboutText: "Full-stack developer with a passion for innovation and tackling complex challenges. Hands-on experience and a keen eye for detail ensure exceptional results. Thrive in collaborative environments and leverage strong communication skills to drive projects forward. Committed to continuous learning and staying ahead of the industry curve. Eager to contribute to a company making a meaningful impact. Let's connect!",
      profileImg, // Imported image
      title: "An enthusiastic software engineer from Bangladesh.",
      description: "Experienced QA Professional Specializing in Functional & Automated Testing, Ensuring Software Quality from Unit to Feature Level",
      personalInfoLeft: [
        { label: "Birthday:", value: "23 November" },
        { label: "Degree:", value: "Diploma in CSE" },
        { label: "Phone:", value: "+880 158 107 1393" },
        { label: "City:", value: "Chittagong, BD" }
      ],
      personalInfoRight: [
        { label: "Age:", value: "21" },
        { label: "Website:", value: "www.isherezahin.netlify.com" },
        { label: "Email:", value: "abuzahinmohammadnowsin@gmail.com" },
        { label: "Freelance:", value: "Available" }
      ],
      additionalInfo: "Proficient in a wide range of programming languages, including PHP, C, JavaScript, Python, and C++. Experienced in using frameworks such as Laravel and Vue.js for web development projects. Skilled in both frontend and backend development, with a strong focus on creating responsive and user-friendly interfaces. Familiarize with various testing frameworks and methodologies, including Selenium, Agile testing practices, and additional testing frameworks such as Pest, PHPUnit for unit testing, and feature testing.",
      conclusion: "With a solid foundation in software engineering and a commitment to excellence, I am dedicated to driving innovation and achieving success in every project I undertake. Let's collaborate and build something great together!"
    };
  }
};
</script>
