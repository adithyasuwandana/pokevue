<template>
  <div id="app" class="container is-widescreen">
    <div class="container">
      <div class="hero is-small is-primary ">
        <div class="hero-body">
          <nav class="level is-primary">
            <p class="level-item has-text-centered">
              <router-link to="/">Home</router-link>
            </p>
            <p class="level-item has-text-centered">
              <img
                src="https://bulma.io/images/bulma-type.png"
                alt=""
                style="height: 30px;"
              />
            </p>
            <p class="level-item has-text-centered">
              <router-link to="/pokemon">Pokemon</router-link>
            </p>
          </nav>
        </div>
      </div>

      <section class="section">
        <router-view></router-view>
      </section>

      <footer class="footer hero is-primary">
        <div class="content has-text-centered">
          <p>
            <strong>POKEMON</strong> by
            <a href="#">Pokemin</a>.
          </p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
