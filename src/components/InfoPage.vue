<template>
  <NavbarPage />
  <div class="container p-2 text-white">
    <div
      style="height: fit-content"
      class="all gap-5 d-flex flex-md-row flex-sm-column flex-xs-column"
      v-for="(item, index) in [information]"
      :key="index.id"
    >
      <img
        :src="'https://image.tmdb.org/t/p/w500' + item.poster_path"
        class="h-25"
        alt="..."
        style
      />
      <div class="p-3 infobox">
        <h5
          class="fs-2 text-capitalize fw-bold"
          style="
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: darkred;
          "
        >
          {{ item.title }}
        </h5>
        <div class="box">
          <span class="pe-2" style="color: gray"
            >{{ item.release_date }} ||</span
          >
          <span class="pe-2" style="color: gray">{{ item.runtime }}m ||</span>
          <span style="color: gray">{{ item.genres.name }}</span>
        </div>
        <p class="lh-2 title-info-synopsis pt-2">
          {{ item.overview }}
        </p>
        <div class="d-flex justify-content-between align-items-center pt-3">
          <a :href="item.homepage" target="-blank" class="btn btn-primary"
            ><i class="fa-solid fa-play"></i> watch trailler</a
          >
          <RouterLink to="/MoviePage" class="btn">All movies</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavbarPage from "./NavbarPage.vue";
import axios from "axios";
export default {
  components: {
    NavbarPage,
  },
  data() {
    return {
      information: [],
      movieId: [],
      seriesid: [],
      seriesinfo: [],
    };
  },

  created() {
    const movieId = this.$route.params.id; // Assuming route-based ID retrieval
    if (movieId) {
      this.movieId = movieId;

      this.bringinfo(movieId);
    } else {
      console.error("No movie ID provided in the route parameters.");
    }
  },

  methods: {
    bringinfo(id) {
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}`,
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDdlMDEyMGJjMWU3M2ZiMmJiNTdiY2NlNTA5Yjk2OSIsIm5iZiI6MTcyOTUxMjQ4MS4zODA4NTYsInN1YiI6IjY3MTAwZDgzNmJmZmExNGNmNDEwZjAyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZhTrcTNBwD74VNwS7DxOUuPxnazBextRn5QQyNuWFiw",
        },
      };

      axios
        .request(options)
        .then((response) => {
          this.information = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    bringsereiesinfo(seriesid) {
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${seriesid}`,
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDdlMDEyMGJjMWU3M2ZiMmJiNTdiY2NlNTA5Yjk2OSIsIm5iZiI6MTcyOTY5MDY2OC45NzcyMjQsInN1YiI6IjY3MTAwZDgzNmJmZmExNGNmNDEwZjAyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e_oYIsp_vvpaCnhfPwbOgQjzdkfCCNhECKluz-IrVlk",
        },
      };

      axios
        .request(options)
        .then((res) => {
          this.seriesinfo = res.data;
        })
        .catch((err) => console.error(err));

    },
  },
};
</script>
<style>
@media screen and (max-width: 600px) {
  .infobox {
    width: 100%;
  }
  .all {
    display: flex;
    flex-direction: column;
  }
  img {
    width: 100%;
    height: auto;
  }
}
.btn {
  background-color: transparent;
  transition: 0.3s;
  border: none;
  color: darkred;
}
.btn:hover {
  background-color: darkred;
  color: black;
}
.infobox p {
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 1px;
}
</style>
