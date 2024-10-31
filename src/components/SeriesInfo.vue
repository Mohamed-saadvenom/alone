<template>
  <NavbarPage />
  <div class="container p-2 text-white">
    <div
      style="height: fit-content"
      class="all gap-5 d-flex flex-md-row flex-sm-column flex-xs-column"
      v-for="(serie, index) in [seriesinfo]"
      :key="index.id"
    >
      <img
        :src="'https://image.tmdb.org/t/p/w500' + serie.poster_path"
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
          {{ serie.name }}
        </h5>
        <span style="color: darkred;" class="py-5 fs-3"
          >{{ serie.vote_average }} <i class="fa-solid fa-star " style="color: gold;"></i
        ></span>
        <div class="box py-4">
          <span class="pe-2" style="color: gray"
            >{{ serie.first_air_date }} ||</span
          >
          <span class="pe-2" style="color: gray"
            >{{ serie.episode_run_time }}m for episode ||
          </span>
          <span style="color: gray" class="pe-2"
            >{{ serie.genres.name }} ||</span
          >
          <span style="color: gray" class="pe-3"
            >{{ serie.number_of_episodes }} Episode ||
          </span>
          <span style="color: gray" class="pe-2"
            >{{ serie.number_of_seasons }} season</span
          >
        </div>
        <p class="lh-2 title-info-synopsis pt-2">
          {{ serie.overview }}
        </p>
        <div class="d-flex justify-content-between align-items-center pt-3">
          <a :href="serie.homepage" target="-blank" class=" btn btn-primary"
            ><i class="fa-solid fa-play"></i> watch trailler</a
          >
          <RouterLink to="/SeriesPage" class="btn">All series</RouterLink>
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
    const seriesid = this.$route.params.id; // Assuming route-based ID retrieval
    if (seriesid) {
      this.seriesid = seriesid;

      this.bringsereiesinfo(seriesid);
    } else {
      console.error("No movie ID provided in the route parameters.");
    }
  },

  methods: {
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
