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
              <router-link to="/create" class="News-btn"
                >Agregar Noticia <i class="bx bx-chevron-right"></i
              ></router-link>
              <router-link to="/" class="News-btn"
                >Inicio <i class="bx bx-chevron-right"></i
              ></router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Descripcion</th>
          <th scope="col">Accion</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in news" :key="item._id">
          <th scope="row">{{ item._id }}</th>
          <td>{{ item.nombre }}</td>
          <td>{{ item.descripcion }}</td>
          <td>
            <button
              class="btn btn-danger mx-2"
              @click.prevent="eliminarnoticia(item._id)"
            >
              Eliminar
            </button>
            <router-link
              class="btn btn-warning mx-2"
              :to="{ name: 'EditNews', params: { id: item._id } }"
            >
              Editar
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: [],
    };
  },
  created() {
    this.listarnews();
  },

  methods: {
    listarnews() {
      this.axios
        .get("/new")
        .then((res) => {
          this.news = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
    eliminarnoticia(id) {
      this.axios
        .delete(`/new/${id}`)
        .then(() => {
          alert("Noticia eliminada");
          this.$router.go();
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
  },
};
</script>