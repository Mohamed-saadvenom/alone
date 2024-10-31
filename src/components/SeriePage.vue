<template>
  <div class="row container-fluid gap-2 justify-content-center">
    <NavbarPage />
    <div class="pb-4">
      <input
        v-model="keyword"
        @keypress.enter="findserie"
        type="search"
        class="w-100 p-3 rounded-5 bg-light"
        placeholder="Let's find your series"
      />
    </div>
    <div
      class="card col-lg-2 col-md-4 d-grid justify-content-center align-items-center"
      v-for="(item, index) of series.results"
      :key="index.id"
      style="background-color: black; max-height: 100%"
    >
      <RouterLink
        :to="{ name: 'seriesinfo', params: { id: item.id } }"
        class="link"
      >
        <img
          :src="'https://image.tmdb.org/t/p/w500' + item.poster_path"
          class=""
          alt="..."
          style="max-width: 100%"
          loading="lazy"
        />
        <div class="">
          <h5 class="pt-2" style="color: darkred; font-size: 25px">
            {{
              item.original_name.length > 15
                ? item.original_name.substring(0, 20) + "..."
                : item.original_name
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
      class="card col-lg-2 col-md-4 d-grid justify-content-center align-items-center"
      v-for="(item, index) of onair.results"
      :key="index.id"
      style="background-color: black; max-height: 100%"
    >
      <RouterLink
        :to="{ name: 'seriesinfo', params: { id: item.id } }"
        class="link"
      >
        <img
          :src="'https://image.tmdb.org/t/p/w500' + item.poster_path"
          class=""
          alt="..."
          style="max-width: 100%"
          loading="lazy"
        />
        <div class="">
          <h5 class="pt-2" style="color: darkred; font-size: 25px">
            {{
              item.original_name.length > 15
                ? item.original_name.substring(0, 20) + "..."
                : item.original_name
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
      class="card col-lg-2 col-md-4 d-grid justify-content-center align-items-center"
      v-for="(item, index) of populer.results"
      :key="index.id"
      style="background-color: black; max-height: 100%"
    >
      <RouterLink
        :to="{ name: 'seriesinfo', params: { id: item.id } }"
        class="link"
      >
        <img
          :src="'https://image.tmdb.org/t/p/w500' + item.poster_path"
          class=""
          alt="..."
          style="max-width: 100%"
          loading="lazy"
        />
        <div class="">
          <h5 class="pt-2" style="color: darkred; font-size: 25px">
            {{
              item.original_name.length > 15
                ? item.original_name.substring(0, 20) + "..."
                : item.original_name
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
      class="card col-lg-2 col-md-4 d-grid justify-content-center align-items-center"
      v-for="(item, index) of today.results"
      :key="index.id"
      style="background-color: black; max-height: 100%"
    >
      <RouterLink
        :to="{ name: 'seriesinfo', params: { id: item.id } }"
        class="link"
      >
        <img
          :src="'https://image.tmdb.org/t/p/w500' + item.poster_path"
          class=""
          alt="..."
          style="max-width: 100%"
          loading="lazy"
        />
        <div class="">
          <h5 class="pt-2" style="color: darkred; font-size: 20px">
            {{
              item.original_name.length > 15
                ? item.original_name.substring(0, 20) + "..."
                : item.original_name
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
</template>

<script>
import NavbarPage from "./NavbarPage.vue";
import axios from "axios";
export default {
  components: { NavbarPage },
  data() {
    return {
      series: [],
      onair: [],
      populer: [],
      today: [],
      allseries: [],
    };
  },
  mounted() {
    this.bringseries();
    this.onairserie();
    this.populerseries();
    this.todayseries();
  },
  created() {
    const seriesname = this.$route.params.keyword; // Assuming route-based ID retrieval
    if (seriesname) {
      this.seriesname = seriesname;

      this.findserie(seriesname);
    } else {
      console.error("No series ID provided in the route parameters.");
    }
  },
  methods: {
    bringseries() {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/tv/top_rated",
        params: { language: "en-US", page: "1", include_adult: "true", },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDdlMDEyMGJjMWU3M2ZiMmJiNTdiY2NlNTA5Yjk2OSIsIm5iZiI6MTcyOTY5MDY2OC45NzcyMjQsInN1YiI6IjY3MTAwZDgzNmJmZmExNGNmNDEwZjAyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e_oYIsp_vvpaCnhfPwbOgQjzdkfCCNhECKluz-IrVlk",
        },
      };

      axios
        .request(options)
        .then((res) => {
          this.series = res.data;
          if(this.series.length ===0){
            this.$router.push("/ErrorPage")
          }
          console.log(res.data);
        })
        .catch((err) => console.error(err));
    },
    onairserie() {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/tv/on_the_air",
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDdlMDEyMGJjMWU3M2ZiMmJiNTdiY2NlNTA5Yjk2OSIsIm5iZiI6MTcyOTY5MDY2OC45NzcyMjQsInN1YiI6IjY3MTAwZDgzNmJmZmExNGNmNDEwZjAyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e_oYIsp_vvpaCnhfPwbOgQjzdkfCCNhECKluz-IrVlk",
        },
      };

      axios
        .request(options)
        .then((res) => {
          this.onair = res.data;
        
        })
        .catch((err) => console.error(err));
    },
    populerseries() {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/tv/popular",
        params: { language: "en-US", page: "14" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDdlMDEyMGJjMWU3M2ZiMmJiNTdiY2NlNTA5Yjk2OSIsIm5iZiI6MTcyOTY5MDY2OC45NzcyMjQsInN1YiI6IjY3MTAwZDgzNmJmZmExNGNmNDEwZjAyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e_oYIsp_vvpaCnhfPwbOgQjzdkfCCNhECKluz-IrVlk",
        },
      };

      axios
        .request(options)
        .then((res) => {
          this.populer = res.data;
         
        })
        .catch((err) => console.error(err));
    },
    todayseries() {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/discover/tv",
        params: { language: "en-US", page: "6" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDdlMDEyMGJjMWU3M2ZiMmJiNTdiY2NlNTA5Yjk2OSIsIm5iZiI6MTcyOTY5MDY2OC45NzcyMjQsInN1YiI6IjY3MTAwZDgzNmJmZmExNGNmNDEwZjAyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e_oYIsp_vvpaCnhfPwbOgQjzdkfCCNhECKluz-IrVlk",
        },
      };

      axios
        .request(options)
        .then((res) => {
          this.today = res.data;
        
        })
        .catch((err) => console.error(err));
    },
    findserie() {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/search/tv",
        params: {
          include_adult: "false",
          language: "en-US",
          page: "1",
          query: this.keyword,
        },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDdlMDEyMGJjMWU3M2ZiMmJiNTdiY2NlNTA5Yjk2OSIsIm5iZiI6MTcyOTc5MTM4OS4zNTk0NDIsInN1YiI6IjY3MTAwZDgzNmJmZmExNGNmNDEwZjAyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ruy-3nB1yPUmDB07OzRN94aXTGM1fs-1GTyQ9y74QR8",
        },
      };

      axios
        .request(options)
        .then((res) => {
          this.allseries = res.data.results;
          this.$router.push(`/FindAllSeriesPage/:keyword`);

          // تأكد من تعيين البيانات بشكل صحيح
        })
        .catch((err) => console.error(err));
        
    },
  },
};
</script>
