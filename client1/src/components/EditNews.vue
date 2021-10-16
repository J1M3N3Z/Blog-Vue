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
              <a href="/News" class="News-btn"
                >Volver <i class="bx bx-chevron-right"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <form >
      <h3>Editar Noticia</h3>

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
      <button class="btn btn-dark my-2" @click.prevent="editarNoticia">Guardar</button>
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
  created() {
    // obtener datos de id
    console.log(this.$route.params.id);
      this.axios.get(`/new/${this.$route.params.id}`)
      .then((res)=> {
        this.noticia= res.data}) 
  },

  methods: {    

    editarNoticia() {
        this.axios  
        .put(`/new/${this.$route.params.id}`, this.noticia)
        .then(() => {
          alert("Noticia Editada");
          // redirigir a la ruta /news
          // router push
          this.$router.push('/news')
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
  },
};
</script>