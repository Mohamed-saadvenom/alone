<template>
  <div class="container">
    <NavbarPage />
   
  
    <div class="landing-page">
      <div>
        <h1>Movies</h1>
        <p>
          Movies move us like nothing else can, whether they’re scary, funny,
          dramatic, romantic or anywhere in-between. So many titles, so much to
          experience.
        </p>
      </div>
    </div>
    <h3 class="text-danger-subtle">Top Rated movies:-</h3>
    <swiper
      :watchSlidesProgress="true"
      :breakpoints="{
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // عندما يكون عرض الشاشة بين 640 و768 بيكسل
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // عندما يكون عرض الشاشة بين 768 و1024 بيكسل
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        // عندما يكون عرض الشاشة أكثر من 1024 بيكسل
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }"
      style="max-height: fit-content"
      class="pt-4 mySwiper"
    >
      <swiper-slide v-for="(item, index) in movies.results" :key="index">
        <div class="box mx-2 h-100 text-light">
          <RouterLink
            :to="{ name: 'infopage', params: { id: item.id } }"
            @click="bringdetails"
            class="link"
          >
            <img
              style="height: 100%; width: 100%; border-radius: 6px"
              :src="'https://image.tmdb.org/t/p/w500' + item.poster_path"
              alt=""
            />

            <h1 class="fs-5 d-flex text-left p-1" style="color: darkred">
              {{ item.title }}
            </h1>
            <p class="d-flex text-left p-1" style="color: darkred">
              {{ item.vote_average }}
              <i
                class="fa-solid fa-star mx-2 text-warning d-flex align-items-center"
              ></i>
            </p>
          </RouterLink>
        </div>
      </swiper-slide>
    </swiper>

    <h3 class="text-danger-subtle">Top Rated series:-</h3>
    <swiper
      :watchSlidesProgress="true"
      :breakpoints="{
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // عندما يكون عرض الشاشة بين 640 و768 بيكسل
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // عندما يكون عرض الشاشة بين 768 و1024 بيكسل
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        // عندما يكون عرض الشاشة أكثر من 1024 بيكسل
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }"
      style="max-height: fit-content"
      class="pt-4 mySwiper"
    >
      <swiper-slide v-for="(item, index) in series.results" :key="index">
        <div class="box mx-2 h-100 text-light">
          <RouterLink
            :to="{ name: 'seriesinfo', params: { id: item.id } }"
            @click="bringdetails"
            class="link"
          >
            <img
              style="height: 100%; width: 100%; border-radius: 6px"
              :src="'https://image.tmdb.org/t/p/w500' + item.poster_path"
              alt=""
            />
            <h1 class="fs-3 d-flex text-left p-2" style="color: darkred">
              {{ item.name }}
            </h1>
            <p class="d-flex text-left p-1" style="color: darkred">
              {{ item.vote_average }}
              <i
                class="fa-solid fa-star mx-2 text-warning d-flex align-items-center"
              ></i>
            </p>
          </RouterLink>
        </div>
      </swiper-slide>
    </swiper>
    <h3 class="text-danger-subtle">Watch tv:-</h3>
    <swiper
      :watchSlidesProgress="true"
      :breakpoints="{
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // عندما يكون عرض الشاشة بين 640 و768 بيكسل
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // عندما يكون عرض الشاشة بين 768 و1024 بيكسل
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        // عندما يكون عرض الشاشة أكثر من 1024 بيكسل
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }"
      style="max-height: fit-content"
      class="pt-4 mySwiper"
    >
      <swiper-slide v-for="(item, index) in tv.results" :key="index">
        <div class="box mx-2 h-100 text-light">
          <RouterLink
            :to="{ name: 'seriesinfo', params: { id: item.id } }"
            @click="bringdetails"
            class="link"
          >
            <img
              style="height: 100%; width: 100%; border-radius: 6px"
              :src="'https://image.tmdb.org/t/p/w500' + item.poster_path"
              alt=""
            />

            <h1 class="fs-5 d-flex text-left p-1" style="color: darkred">
              {{ item.original_name }}
            </h1>
            <p class="d-flex text-left p-1" style="color: darkred">
              {{ item.vote_average }}
              <i
                class="fa-solid fa-star mx-2 text-warning d-flex align-items-center"
              ></i>
            </p>
          </RouterLink>
        </div>
      </swiper-slide>
    </swiper>
    <h3 class="text-danger-subtle">Coming Soon:-</h3>
    <swiper
      :watchSlidesProgress="true"
      :breakpoints="{
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // عندما يكون عرض الشاشة بين 640 و768 بيكسل
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // عندما يكون عرض الشاشة بين 768 و1024 بيكسل
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        // عندما يكون عرض الشاشة أكثر من 1024 بيكسل
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }"
      style="max-height: fit-content"
      class="pt-4 mySwiper"
    >
      <swiper-slide v-for="(item, index) in come.results" :key="index">
        <div class="box mx-2 h-100 text-light">
          <RouterLink
            :to="{ name: 'infopage', params: { id: item.id } }"
            @click="bringdetails"
            class="link"
          >
            <img
              style="height: 100%; width: 100%; border-radius: 6px"
              :src="'https://image.tmdb.org/t/p/w500' + item.poster_path"
              alt=""
            />
            <h1 class="fs-5 d-flex text-left p-1" style="color: darkred">
              {{ item.title }}
            </h1>
          </RouterLink>
        </div>
      </swiper-slide>
    </swiper>
    <footer class="footer">
      <div class=" ">
        <h2 class="text-light">movie website</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam et est
          id sunt iusto earum molestiae praesentium.
        </p>
      </div>
      <div class="social">
        <h4 class="text-light">Social</h4>
        <div class="d-flex socialButton">
          <a><i class="fa-brands fa-instagram"></i></a>
          <a><i class="fa-brands fa-facebook"></i></a>
          <a><i class="fa-brands fa-twitter"></i></a>
          <a><i class="fa-brands fa-discord"></i></a>
        </div>
      </div>
    </footer>
  </div>
  <div class="copyright">
    <p>Copyright © 2022 All Right Reserved</p>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import axios from "axios";
import NavbarPage from "./NavbarPage.vue";

export default {
  components: {
    NavbarPage,
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  data() {
    return {
      movies: [],
      series: [],
      tv: [],
      come: [],
      keyword: "",
      moviename: [],
    };
  },

  mounted() {
    this.bringmovies();
    this.bringseries();
    this.bringtv();
    this.upcomping();
  },
  methods: {
    bringmovies() {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/top_rated",
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDdlMDEyMGJjMWU3M2ZiMmJiNTdiY2NlNTA5Yjk2OSIsIm5iZiI6MTcyOTI4NTUzMC42NzgzNDUsInN1YiI6IjY3MTAwZDgzNmJmZmExNGNmNDEwZjAyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0PHASuNY8U6vnGDufZFhZaE7EWkN4MZLTpRn6rlD37I",
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
    bringseries() {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/tv/top_rated",
        params: { language: "en-US", page: "6" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDdlMDEyMGJjMWU3M2ZiMmJiNTdiY2NlNTA5Yjk2OSIsIm5iZiI6MTcyOTI4NTUzMC42NzgzNDUsInN1YiI6IjY3MTAwZDgzNmJmZmExNGNmNDEwZjAyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0PHASuNY8U6vnGDufZFhZaE7EWkN4MZLTpRn6rlD37I",
        },
      };

      axios
        .request(options)
        .then((response) => {
          this.series = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    bringtv() {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/discover/tv",
        params: {
          include_adult: "false",
          include_null_first_air_dates: "false",
          language: "en-US",
          page: "17",
          sort_by: "popularity.desc",
        },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDdlMDEyMGJjMWU3M2ZiMmJiNTdiY2NlNTA5Yjk2OSIsIm5iZiI6MTcyOTI4NTUzMC42NzgzNDUsInN1YiI6IjY3MTAwZDgzNmJmZmExNGNmNDEwZjAyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0PHASuNY8U6vnGDufZFhZaE7EWkN4MZLTpRn6rlD37I",
        },
      };

      axios
        .request(options)
        .then((response) => {
          this.tv = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    upcomping() {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/upcoming",
        params: { language: "en-US", page: "2" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDdlMDEyMGJjMWU3M2ZiMmJiNTdiY2NlNTA5Yjk2OSIsIm5iZiI6MTcyOTI4NTUzMC42NzgzNDUsInN1YiI6IjY3MTAwZDgzNmJmZmExNGNmNDEwZjAyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0PHASuNY8U6vnGDufZFhZaE7EWkN4MZLTpRn6rlD37I",
        },
      };

      axios
        .request(options)
        .then((response) => {
          this.come = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
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
h3 {
  color: darkred;
  font-weight: 900;
}
.firstswiper{
  width: 100% ;
}
.swiper {
  height: 25%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;

  /* Center slide text vertically */
  display: flex;
  justify-content: space-around;
}

.swiper-slide img {
  display: block;
  background-color: black;
  object-fit: fill;
  height: 50%;
}
.landing-page div {
  max-width: 500px;
  padding: 40px;
}
.landing-page h1 {
  margin-bottom: 20px;
  font-size: 40px;
  line-height: 1.4;
  font-weight: normal;
  color: darkred;
  text-transform: uppercase;
  font-weight: 900;
}
.landing-page p {
  font-size: 14px;
  line-height: 2;
  color: #fff;
}
.copyright {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  height: 80px;
  background-color: rgb(10, 10, 10);
  color: rgb(255, 255, 255, 0.7);
  font-size: 0.8em;
}
.footer .socialButton {
  display: flex;
  align-items: center;
  gap: 25px;
  cursor: pointer;
  width: fit-content;
  margin-top: 30px;
}

.footer .socialButton i {
  font-size: 1.9em;
  text-decoration: none;
  color: rgb(255, 255, 255);
  transition: 0.3s;
  opacity: 0.5;
  transform: translateY(0);
}
.footer .socialButton i:hover {
  opacity: 1;
  transform: translateY(-4px);
}
.footer div {
  width: 20%;

  /* flex-direction: ; */
  gap: 15px;
  flex-grow: 1;
}
.footer h2,
.footer h4 {
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
}
.footer p {
  margin: 20px 0;
  color: #504d4d;
  font-size: 0.9em;
  line-height: 1.8em;
}
.footer {
  padding: 70px 0 0;
  gap: 12px;
  box-sizing: border-box;
  width: 100%;
  font-size: 1em;
  display: flex;
  justify-content: space-between;
}
@media only screen and (max-width: 574px) {
  .footer {
    display: flex;
    flex-direction: column;
  }
  .footer div {
    width: 100%;
  }
}
</style>
