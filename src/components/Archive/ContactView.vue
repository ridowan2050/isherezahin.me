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
<style scoped>
/*--------------------------------------------------------------
# Contact Section
--------------------------------------------------------------*/
.contact .info-item+.info-item {
  margin-top: 40px;
}

.contact .info-item i {
  font-size: 20px;
  color: var(--theme);
  float: left;
  width: 44px;
  height: 44px;
  background: var(--color-bg);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
  margin-right: 15px;
}

.contact .info-item h4 {
  padding: 0;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 5px;
  color: var(--text);
}

.contact .info-item p {
  padding: 0;
  margin-bottom: 0;
  font-size: 14px;
  color: var(--white);
}

.contact .info-item:hover i {
  background: var(--theme);
  color: var(--white);
}

.contact .php-email-form {
  width: 100%;
}

.contact .php-email-form .form-group {
  padding-bottom: 8px;
}

.contact .php-email-form .error-message {
  display: none;
  color: var(--white);
  background: var(--rad);
  text-align: left;
  padding: 15px;
  font-weight: 600;
}

.contact .php-email-form .error-message br+br {
  margin-top: 25px;
}

.contact .php-email-form .sent-message {
  display: none;
  color: var(--white);
  background: var(--theme);
  text-align: center;
  padding: 15px;
  font-weight: 600;
}

.contact .php-email-form .loading {
  display: none;
  background: var(--blackly);
  text-align: center;
  padding: 15px;
  color: var(--text);
}

.contact .php-email-form .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid var(--theme);
  border-top-color: var(--blackly);
  animation: animate-loading 1s linear infinite;
}

.contact .php-email-form input,
.contact .php-email-form textarea {
  border-radius: 4px;
  box-shadow: none;
  font-size: 14px;
  background-color: var(--white);
  border: 1px solid var(--text);
  color: var(--blackly);
}

.contact .php-email-form input {
  height: 44px;
}

.contact .php-email-form textarea {
  padding: 10px 12px;
}

.contact .php-email-form button[type=submit] {
  background: var(--theme);
  border: 0;
  padding: 10px 35px;
  color: var(--white);
  transition: 0.4s;
  border-radius: 4px;
}

.contact .php-email-form button[type=submit]:hover {
  background: var(--theme);
}

@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
