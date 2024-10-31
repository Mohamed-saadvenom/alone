<template>
  <NavbarPage />
  <div class="container-fluid p-2 text-white">
    <div>
      <input
        v-model="keyword"
        @keypress.enter="searchmovies"
        type="search"
        class="w-100 p-3 rounded-5 mb-4 bg-light"
        placeholder="Let's find your movie"
      />
    </div>
    <div v-if="isloading" class="loading-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="row gap-2 justify-content-center">
      <div
        class="card col-lg-2 col-md-3 d-grid justify-content-center align-items-center"
        v-for="(item, index) of allmovies"
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
      keyword: "",
      allmovies: [],
      isloading: false,
    };
  },
  mounted() {
    this.searchmovies();
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
    searchmovies() {
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/search/movie`,
        params: {
          query: this.keyword,
          include_adult: "true",
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
          if(this.allmovies==0){
            return this.isloading=true
          }else{
            return this.isloading=false
          }

          // تأكد من تعيين البيانات بشكل صحيح
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style>
.loading-ellipsis {
  display: block;
  position: relative;
  width: 80px;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
}
.loading-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: rgb(47, 2, 2);
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.loading-ellipsis div:nth-child(1) {
  left: 8px;
  animation: loading-ellipsis1 0.6s infinite;
}
.loading-ellipsis div:nth-child(2) {
  left: 8px;
  animation: loading-ellipsis2 0.6s infinite;
}
.loading-ellipsis div:nth-child(3) {
  left: 32px;
  animation: loading-ellipsis2 0.6s infinite;
}
.loading-ellipsis div:nth-child(4) {
  left: 56px;
  animation: loading-ellipsis3 0.6s infinite;
}
@keyframes loading-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes loading-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes loading-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>
