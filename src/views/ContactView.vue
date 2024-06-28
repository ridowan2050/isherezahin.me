<template>
  <!-- ======= End Page Header ======= -->
  <div class="page-header d-flex align-items-center">
    <div class="container position-relative">
      <div class="row d-flex justify-content-center">
        <div class="col-lg-6 text-center">
          <h2>Contact Me</h2>
          <p>Have a question, need assistance, or interested in discussing your software quality needs? Feel free to reach out to me! As an experienced QA professional specializing in functional and automated testing, I ensure software quality from the unit to the feature level. Your satisfaction and the success of your project are my top priorities.</p>
          <p>Let's collaborate to ensure your software meets the highest standards of quality and functionality.</p>        
        </div>
      </div>
    </div>
  </div><!-- End Page Header -->

  <!-- ======= Contact Section ======= -->
  <section id="contact" class="contact">
    <div class="container">

      <div class="row gy-4 justify-content-center">

        <div class="col-lg-3">
          <div class="info-item d-flex">
            <i class="bi bi-geo-alt flex-shrink-0"></i>
            <div>
              <h4>Location:</h4>
              <p>Chandgaon, Chittagong, Bangladesh</p>
            </div>
          </div>
        </div><!-- End Info Item -->

        <div class="col-lg-3">
          <div class="info-item d-flex">
            <i class="bi bi-phone flex-shrink-0"></i>
            <div>
              <h4>Call:</h4>
              <p>+880 1581071393</p>
            </div>
          </div>
        </div><!-- End Info Item -->

        <div class="col-lg-3">
          <div class="info-item d-flex">
            <i class="bi bi-envelope flex-shrink-0"></i>
            <div>
              <h4>Email:</h4>
              <p>abuzahinmohammadnowsin@gmail.com</p>
            </div>
          </div>
        </div><!-- End Info Item -->

      </div>

      <div class="row justify-content-center mt-4">

        <div class="col-lg-9">
          <form class="php-email-form" @submit.prevent="sendMessage">
            <div class="row">
              <div class="col-md-6 form-group">
                <input type="text" v-model="name" class="form-control" placeholder="Your Name" required>
              </div>
              <div class="col-md-6 form-group mt-3 mt-md-0">
                <input type="email" v-model="email" class="form-control" placeholder="Your Email" required>
              </div>
            </div>
            <div class="form-group mt-3">
              <input type="text" v-model="subject" class="form-control" placeholder="Subject" required>
            </div>
            <div class="form-group mt-3">
              <textarea v-model="message" class="form-control" rows="5" placeholder="Message" required></textarea>
            </div>
            <div class="text-center">
              <button type="submit" id="sendButton" style="width: 200px;">{{ !loading ? 'Send Message' : 'Loading...' }}</button>
            </div>
            <p v-if="errorMessage" class="alert alert-danger text-center" style="color: red; margin-top: 5px;" role="alert">{{ errorMessage }}</p>
          </form>
        </div>

      </div>

    </div>
  </section><!-- End Contact Section -->
</template>


<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
      loading: false,
      errorMessage: '',
      successMessage: ''
    };
  },
  methods: {
    sendMessage() {
      // Simulate sending message (replace with actual form submission code)
      this.loading = true;
      setTimeout(() => {
        // Simulate error
        this.loading = false;
        this.errorMessage = 'An error occurred while sending your message. Please try again later.';
        setTimeout(() => {
          this.errorMessage = '';
        }, 10000); // Hide error message after 10 seconds

        // Reset all fields regardless of success or error
        this.name = '';
        this.email = '';
        this.subject = '';
        this.message = '';
      }, 2000); // Simulate 2 seconds delay
    }
  }
}
</script>
