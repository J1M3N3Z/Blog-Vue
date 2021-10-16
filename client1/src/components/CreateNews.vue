<template>
  <div class="container">
    <section id="News" class="News">
      <div class="container">
        <div class="row no-gutters">
          <div
            class="content col-xl-5 d-flex align-items-stretch"
            data-aos="fade-up"
          >
            <div class="content">
              <h3>Noticias</h3>
              <a href="#" class="News-btn">
                News <i class="bx bx-chevron-right"> </i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <form @submit.prevent="agregarNoticia">
      <h3>Agregar Noticia</h3>

      <input
        type="text"
        class="form-control my-2"
        placeholder="Nombre"
        v-model="noticia.nombre"
      />
      <input
        type="text"
        class="form-control my-2"
        placeholder="Descripcion"
        v-model="noticia.descripcion"
      />
      <button class="btn btn-dark my-2" type="submit">Agregar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      noticia: { nombre: "", descripcion: "" },
    };
  },

  methods: {
    agregarNoticia() {
      this.axios
        .post("/new-publication", this.noticia)
        .then(() => {
          alert("Noticia Guardada");
          // redirigir a la ruta /news
          this.$router.push("/news");
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
  },
};
</script>