<template>
  <div class="container-fluid">
    <NavbarPage />
    <div class="pb-4">
      <input
        v-model="keyword"
        @keypress.enter="searchmovies"
        type="search"
        class="w-100 p-3 rounded-5 bg-light"
        placeholder="Let's find your movie"
      />
    </div>
    <div class="row gap-2 justify-content-center">
      <div
        class="card col-lg-2 col-md-3 d-grid justify-content-center align-items-center"
        v-for="(item, index) of movies.results"
        :key="index.id"
        style="background-color: black"
      >
        <RouterLink
          :to="{ name: 'infopage', params: { id: item.id } }"
          class="link"
        >
          <img
            :src="'https://image.tmdb.org/t/p/w500' + item.poster_path"
            alt="..."
            style="width: 100%; height: 100%"
            loading="lazy"
          />
          <div class="card-body">
            <h5 class="card-title" style="color: darkred; font-size: 25px">
              {{
                item.title.length > 10
                  ? item.title.substring(0, 20) + "..."
                  : item.title
              }}
            </h5>
            <span style="color: darkred"
              >{{ item.vote_average }}
              <i class="fa-solid fa-star" style="color: gold"></i>
            </span>
          </div>
        </RouterLink>
      </div>
      <div
        class="card col-lg-2 col-md-3 d-grid justify-content-center align-items-center"
        v-for="(item, index) of popularVideos.results"
        :key="index.id"
        style="background-color: black"
      >
        <RouterLink
          :to="{ name: 'infopage', params: { id: item.id } }"
          class="link"
        >
          <img
            :src="'https://image.tmdb.org/t/p/w500' + item.poster_path"
            alt="..."
            style="width: 100%; height: 100%"
            loading="lazy"
          />
          <div class="card-body">
            <h5 class="card-title" style="color: darkred; font-size: 25px">
              {{
                item.title.length > 10
                  ? item.title.substring(0, 20) + "..."
                  : item.title
              }}
            </h5>
            <span style="color: darkred"
              >{{ item.vote_average }}
              <i class="fa-solid fa-star" style="color: gold"></i>
            </span>
          </div>
        </RouterLink>
      </div>
      <div
        class="card col-lg-2 col-md-3 d-grid justify-content-center align-items-center"
        v-for="(item, index) of latest.results"
        :key="index.id"
        style="background-color: black"
      >
        <RouterLink
          :to="{ name: 'infopage', params: { id: item.id } }"
          class="link"
        >
          <img
            :src="'https://image.tmdb.org/t/p/w500' + item.poster_path"
            alt="..."
            style="width: 100%; height: 100%"
            loading="lazy"
          />
          <div class="card-body">
            <h5 class="card-title" style="color: darkred; font-size: 25px">
              {{
                item.title.length > 10
                  ? item.title.substring(0, 20) + "..."
                  : item.title
              }}
            </h5>
            <span style="color: darkred"
              >{{ item.vote_average }}
              <i class="fa-solid fa-star" style="color: gold"></i>
            </span>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import NavbarPage from "./NavbarPage.vue";

export default {
  components: {
    NavbarPage,
  },
  data() {
    return {
      movies: [],
      popularVideos: [],
      latest: [],
      keyword: "",
    };
  },
  mounted() {
    this.bringmovies();
    this.latestmovies();
    this.popular();
  },
  created() {
    const moviename = this.$route.params.keyword; // Assuming route-based ID retrieval
    if (moviename) {
      this.moviename = moviename;

      this.searchmovies(moviename);
    } else {
      console.error("No movie ID provided in the route parameters.");
    }
  },
  methods: {
    bringmovies() {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/discover/movie",
        params: {
          include_adult: "false",
          include_video: "true",
          language: "en-US",
          page: "13",
          sort_by: "popularity.desc",
        },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDdlMDEyMGJjMWU3M2ZiMmJiNTdiY2NlNTA5Yjk2OSIsIm5iZiI6MTcyOTM3Mjk3OS40MjM0MDYsInN1YiI6IjY3MTAwZDgzNmJmZmExNGNmNDEwZjAyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xmF9ej2agn1VO_y9d2wMEY9yy6ThEG-hh1Cpx9cbCeI",
        },
      };

      axios
        .request(options)
        .then((response) => {
          this.movies = response.data;
         
        })
        .catch((error) => {
          console.error(error);

        });
    },
    latestmovies() {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/top_rated",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDdlMDEyMGJjMWU3M2ZiMmJiNTdiY2NlNTA5Yjk2OSIsIm5iZiI6MTcyOTY5MDY2OC45NzcyMjQsInN1YiI6IjY3MTAwZDgzNmJmZmExNGNmNDEwZjAyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e_oYIsp_vvpaCnhfPwbOgQjzdkfCCNhECKluz-IrVlk",
        },
      };

      axios
        .request(options)
        .then((res) => {
          this.latest = res.data;
         
        })
        .catch((err) => console.error(err));

    },
    popular() {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/popular",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDdlMDEyMGJjMWU3M2ZiMmJiNTdiY2NlNTA5Yjk2OSIsIm5iZiI6MTcyOTY5MDY2OC45NzcyMjQsInN1YiI6IjY3MTAwZDgzNmJmZmExNGNmNDEwZjAyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e_oYIsp_vvpaCnhfPwbOgQjzdkfCCNhECKluz-IrVlk",
        },
      };

      axios
        .request(options)
        .then((res) => {
          this.popularVideos = res.data;
       
        })
        .catch((err) => console.error(err));

    },
    searchmovies() {
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/search/movie`,
        params: {
          query: this.keyword,
          include_adult: "false",
          language: "en-US",
          page: "1",
        },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDdlMDEyMGJjMWU3M2ZiMmJiNTdiY2NlNTA5Yjk2OSIsIm5iZiI6MTcyOTY5MDY2OC45NzcyMjQsInN1YiI6IjY3MTAwZDgzNmJmZmExNGNmNDEwZjAyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e_oYIsp_vvpaCnhfPwbOgQjzdkfCCNhECKluz-IrVlk",
        },
      };

      axios
        .request(options)
        .then((res) => {
          this.allmovies = res.data.results;
          this.$router.push(`/FindMoviePage/:keyword`);
         
          // تأكد من تعيين البيانات بشكل صحيح
        })
        .catch((err) => console.error(err));

    },
  },
};
</script>
<style>
.link {
  text-decoration: none;
}
</style>
