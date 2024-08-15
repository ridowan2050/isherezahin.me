<template>
  <section id="bd-24" style="margin-top: 70px">
    <div class="container">
      <!-- ======= Intro Single ======= -->
      <section class="intro-single">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-8">
              <div class="title-single-box">
                <h1 class="title-single">Bangladesh Anti Discrimination Student Movement</h1>
                <span class="color-text-a">Article Details</span>
              </div>
            </div>
            <div class="col-md-12 col-lg-4">
              <nav class="breadcrumb-box d-flex justify-content-lg-end">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <RouterLink to="/" exact-active-class="active-link">Home</RouterLink>
                  </li>
                  <li class="breadcrumb-item active">BD-24</li>
                </ol>
              </nav>
            </div>
          </div>

          <div class="row">
            <img src="../../assets/img/blog/Bangladesh_quota_reform_movement_2024.jpg" class="fi">
          </div>

          <div class="row">
            <div class="text-center fi-title">
              <span class="bold-a">Author:</span> Morgan Jimenez <span class="bold">Category:</span> Travel <span class="bold">Date:</span> 19 Apr. 2017
            </div>
          </div>

          <div class="content">
            <div class="m-l-r">
              <div class="row">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis assumenda <span class="bold">corporis</span> quam ducimus aut quis eaque commodi debitis? Veniam autem quidem vel aliquid, suscipit sed provident dicta. Aut, perspiciatis est?</p>
              </div>

              <div class="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore expedita repudiandae odio vitae? Suscipit animi, eligendi error dignissimos ducimus beatae repellendus maxime tempora vero reiciendis unde nihil sequi dolor nostrum vitae a ea quisquam quae nobis numquam blanditiis voluptas quam?</div>

              <div class="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore expedita repudiandae odio vitae?</div>

              <div class="title-single-box m-5">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <div class="author">- Albert Vargas Author</div>
              </div>

              <div class="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore expedita repudiandae odio vitae? Suscipit animi, eligendi error dignissimos ducimus beatae repellendus maxime tempora vero reiciendis unde nihil sequi dolor nostrum vitae a ea quisquam quae nobis numquam blanditiis voluptas quam?</div>

              <div id="social">
                <span>Share:</span>
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped>
.intro-single .title-single-box {
  padding: 1rem 0 1rem 2rem;
}

.intro-single .title-single-box {
  border-left: 3px solid #4AB102;
}

.intro-single .title-single-box .title-single {
  font-weight: 600;
  font-size: 2.2rem;
}

.intro-single .breadcrumb-box {
  padding: 1rem 0 0 0.5rem;
}

.intro-single .breadcrumb {
  background-color: transparent;
  padding-right: 0;
  padding-left: 0;
}

a {
  text-decoration: none;
  color: #4AB102;
}

/* Image */
.fi {
  width: 100%;
  height: auto;
  margin-top: 5%;
  object-fit: cover;
}

/* Responsive for larger screens (desktop) */
@media (min-width: 992px) {
  .fi {
    height: 500px;
  }

  .m-l-r {
    margin-left: 10%;
    margin-right: 10%;
  }
}

.fi-title {
  padding: 20px;
}

.fi-title .bold {
  font-weight: 800;
  margin-left: 1%;
}

.fi-title .bold-a {
  font-weight: 800;
  margin-left: 0;
}

.m-l-r {
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 5%;
}

.m-l-r p {
  font-size: 35px;
}

.bold {
  font-weight: bolder;
}

.m-l-r .p {
  margin-top: 5%;
  color: gray;
}

.title-single-box p {
  font-size: 25px;
}

.author {
  font-size: 30px;
  background: gainsboro;
}

/* social */
#social {
  margin-top: 5%;
  font-size: 20px;
}

#social a {
  color: black;
  margin-left: 2%;
}

#social a:hover {
  color: #4AB102;
}

/* Comments */
.title-single div {
  font-size: 35px;
  font-weight: 900;
}

.underline {
  color: white;
  margin-top: 3px;
  width: 150px;
  border-top: 4px solid #4AB102;
}

/* Comment Person */
.img-fluid {
  height: 100px;
  width: 100px;
  border-radius: 50%;
}

.comment-person .name {
  font-size: 25px;
}

.comment-person .date {
  color: rgb(133, 133, 133);
  font-size: 20px;
}

.comment-person .reply {
  color: #4AB102;
  background: gainsboro;
  padding: 5px 15px;
  cursor: pointer;
  transition: 0.2s;
}

.comment-person .reply:hover {
  color: white;
  background: #4AB102;
}

.comment-person .reply-comment {
  margin: 50px 100px;
}
</style>
