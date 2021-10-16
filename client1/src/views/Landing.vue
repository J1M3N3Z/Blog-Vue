<template>
  <div>
    <main id="main">
      <!-- ======= About Section ======= -->
      <section id="about" class="about">
        <!-- <about></about> -->
      </section>
      <!-- End About Section -->

      <!-- ======= Services Section ======= -->
      <section id="services" class="services">
        <services></services>
      </section>
      <!-- End Services Section -->

      <!-- ======= News Section ======= -->
      <section id="News" class="News">
        <div class="container" data-aos="zoom-in">
              <div class="text-center">
                <h3>Noticias</h3>
              <div class="page">
              <router-link to="/News" class="News-btn"
              >Ir a Noticias <i class="bx bx-chevron-right"></i
              ></router-link>
        </div>
            </div>
        </div>
        
      </section>

      <!-- End News Section -->

      <!-- ======= Counts Section ======= -->
      <section id="counts" class="counts">
        <counts></counts>
      </section>
      <!-- End Counts Section -->

      <!-- ======= Cta Section ======= -->
      <section id="cta" class="cta">
        <cta></cta>
      </section>
      <!-- End Cta Section -->

      <!-- ======= Portfolio Section ======= -->
      <section id="portfolio" class="portfolio">
        <portfolio></portfolio>
      </section>
      <!-- End Portfolio Section -->

      <!-- ======= Team Section ======= -->
      <section id="team" class="team">
        <team></team>
      </section>
      <!-- End Team Section -->

      <!-- ======= Contact Section ======= -->
      <section id="contact" class="contact">
        <contact></contact>
      </section>
      <!-- End Contact Section -->
    </main>
    <!-- End #main -->
  </div>
</template>


<script>
// import News from "./News.vue";
// import navbar from "../components/navbar.vue";
//
// import about from "./About.vue"
import services from "./services.vue";
import counts from "./counts.vue";
import cta from "./cta.vue";
import portfolio from "./portfolio.vue";
import team from "./team.vue";
import contact from "./contact.vue";

export default {
  name: "App",
  components: {
    //News,
    // navbar,
    //hero,
    // about,
    services,
    counts,
    cta,
    portfolio,
    team,
    contact,
  },
};
</script>