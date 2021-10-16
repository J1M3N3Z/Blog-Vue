<template>
  <div>
    <header id="header" class="fixed-top header-transparent">
      <div class="container d-flex align-items-center justify-content-between">
        <div class="logo">
          <h1 class="text-light">
            <a href=""><span>DAVIDCELL</span></a>
          </h1>
          <!-- Uncomment below if you prefer to use an image logo -->
          <!-- <a href="index.html"><img src="../assets/img/logo.png" alt="" class="img-fluid"></a> -->
        </div>

        <section id="navbar" class="navbar">
          <navbar></navbar>
        </section>
      </div>
    </header>
    <!-- ======= Hero Section ======= -->
    <section id="hero" class="hero">
      <hero></hero>
    </section>
    <!-- End Hero -->

    <router-view />

    <div class="mt-5 p-5"/>
    <!-- ======= Footer ======= -->
    <footer id="footer" class="mt-5">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="footer-info">
                <img src="./views/mision.png" class="img-fluid" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="copyright">
          &copy; Copyright <strong><span>Squadfree</span></strong
          >. All Rights Reserved
        </div>
        <div class="credits">
          <!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you purchased the pro version. -->
          <!-- Licensing information: https://bootstrapmade.com/license/ -->
          <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/squadfree-free-bootstrap-template-creative/ -->
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
    <!-- End Footer -->
    <a
      href="#"
      class="back-to-top d-flex align-items-center justify-content-center"
      ><i class="bi bi-arrow-up-short"></i
    ></a>
  </div>
</template>

<script>
import hero from "@/components/hero.vue";

export default {
  components: {
    hero,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
