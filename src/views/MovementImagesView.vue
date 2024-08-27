<template>
  <section id="blog" style="margin-top: 70px">
    <div class="container">
      <!-- Page Head -->
      <div class="row page-head gap-2">
        <h1 class="white-head fw-bold text-green-800">Blog</h1>
        <p>On my personal website and blog, I share notes, articles, and various thoughts on different subjects, including personal experiences.</p>
      </div>

      <div class="images-container">
        <div class="images-grid">
          <div class="images-item">
            <img src="../assets/img/me/home-image.jpg" alt="Description 1" />
          </div>
          <div class="images-item">
            <img src="../assets/img/me/home-image.jpg" alt="Description 2" />
          </div>
          <div class="images-item">
            <img src="../assets/img/me/home-image.jpg" alt="Description 3" />
          </div>
          <!-- Video Example -->
          <div class="images-item">
            <video class="images-video" src="../assets/BD-24/videos/video1.mp4" muted autoplay loop controls></video>
          </div>
          <!-- Add more images items here -->
        </div>
      </div>
    </div>
  </section>
  </template>
  
  <style scoped>
  /* Container Styling */
  .images-container {
    padding: 20px;
    background-color: #000; /* Matches the black background */
    max-width: 1200px; /* Limit container width on large screens */
    margin: auto; /* Center align the container */
  }
  
  /* Title Styling */
  .images-title {
    color: #00e6a5; /* Custom color */
    font-family: 'Arial', sans-serif; /* Customize your font */
    margin-bottom: 20px;
    text-align: center; /* Centered title */
  }
  
  /* Grid Layout */
  .images-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr); /* Default to single column */
    gap: 5px; /* Consistent gap */
  }
  
  /* images Item Styling */
  .images-item {
    position: relative; /* Needed for positioning the controls */
    overflow: hidden;
    border-radius: 5px; /* Rounded corners */
    transition: transform 0.3s ease; /* Smooth hover effect */
  }
  
  /* images Video Styling */
  .images-video {
    width: 100%;
    height: 100%;
    object-fit: contain; /* Ensure the video fits within its container */
    display: block;
    filter: grayscale(100%); /* Default to black and white */
    transition: filter 0.3s ease; /* Smooth transition to color */
  }
  
  /* images Image Styling */
  .images-item img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Maintain aspect ratio, cover space */
    display: block;
    filter: grayscale(100%); /* Default to black and white */
    transition: filter 0.3s ease; /* Smooth transition to color */
  }
  
  /* Hover Effect */
  .images-item:hover img,
  .images-item:hover .images-video {
    filter: grayscale(0%); /* Remove black and white filter on hover */
  }
  
  /* Media Queries for Responsiveness */
  @media (min-width: 501px) {
    .images-grid {
      grid-template-columns: repeat(2, 1fr); /* Show 2 items per row if screen width is more than 500px */
    }
  }
  
  @media (min-width: 601px) and (max-width: 1024px) {
    .images-grid {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Show multiple items on tablets */
    }
  }
  
  @media (min-width: 1025px) {
    .images-grid {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Wider columns on desktops */
    }
  }
  </style>
  
  <script>
  export default {
    // No additional methods needed for default controls
  };
  </script>