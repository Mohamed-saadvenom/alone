<template>
  <div class="navbar d-flex justify-content-between align-items-stretch">
    <div class="d-flex mx-2 justify-content-between align-items-center">
      <img
        src="../assets/logo.png"
        class="rounded-circle"
        style="width: 50px; height: 50px"
        alt=""
      />
      <h4 class="mx-2 logo-name">movies</h4>
    </div>

    <div class="links d-flex align-items-center">
      <RouterLink to="/DashboardPage">Home</RouterLink>
      <RouterLink to="/MoviePage">movies</RouterLink>
      <RouterLink to="/SeriesPage">series</RouterLink>
      <RouterLink to="/FindMoviePage/:keyword"><i class="fa-solid fa-magnifying-glass"></i></RouterLink>
      <RouterLink to="/">sign out</RouterLink>

     
    </div>
  </div>
</template>

<script>
export default { name: "NavbarPage" };
</script>
<style>
.navbar {
  background-color: black;
}
.logo-name {
  text-transform: uppercase;
  color: darkred;
}
.links {
  margin: 10px;
}
.links a {
  margin-left: 5px;
  text-decoration: none;
  color: darkred;
  padding: 5px;
  font-weight: 600;
  transition: 0.3s;
}
.links a:hover {
  background-color: darkred;
  color: #eee;
  padding: 5px;
  border-radius: 6px;
}
.dropdown {
  margin-left: 5px;
  text-decoration: none;
  color: darkred;
  padding: 5px;
  font-weight: 600;
  transition: 0.3s;
}
.dropdown:hover {
  background-color: darkred;
  color: #eee;
  border-radius: 6px;
}
</style>
