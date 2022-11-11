<template>
  <div id="Pokemon">
    <div>
      <strong class="title is-4">POKEMON</strong>
    </div>

    <div class="tile is-ancestor columns is-multiline">
      <div
        class="tile is-parent column is-3"
        v-for="(mon, id) in poke"
        :key="id"
      >
        <article class="tile is-child box">
          <p class="title is-5">{{ mon.nama }}</p>
          <img :src="mon.gambar" />
        </article>
      </div>
    </div>

    <b-pagination
      :total="total"
      v-model="current"
      :range-before="rangeBefore"
      :range-after="rangeAfter"
      :order="order"
      :size="size"
      :simple="isSimple"
      :rounded="isRounded"
      :per-page="perPage"
      :icon-prev="prevIcon"
      :icon-next="nextIcon"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
    >
    </b-pagination>

    <!--
        <div class="tile is-danger" v-for="(mon, id) in poke" :key="id">
        {{ mon.nama }}
        <img :src="mon.gambar" />
        </div>
    -->
  </div>
</template>

<script>
import axios from "axios";
import {mapActions, mapGetters} from 'vuex';

export default {
  data() {
    return {
      poke: null,
      total: 200,
      current: 10,
      perPage: 10,
      rangeBefore: 3,
      rangeAfter: 1,
      order: "",
      size: "",
      isSimple: false,
      isRounded: false,
      prevIcon: "chevron-left",
      nextIcon: "chevron-right",
    };
  },

  computed: {
    ...mapGetters([ 'pokemonCollection' ])
  },

  methods: {
    ...mapActions({ fetchPokemon: 'fetchPokemon' }),
    bebas() {
      console.log('test')
      axios
        .get("https://pokeapi.co/api/v2/pokemon")
        //   .then((response) => (this.poke = response))
        .then((response) => {
          const { results } = response.data;
          this.poke = results.map((mon) => {
            const id = mon.url.split("pokemon/")[1].split("/")[0];
            return {
              nama: mon.name,
              gambar: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`,
            };
          });
        })
        .catch((error) => {
          console.error(error.message);
        });
      // this.fetchPokemon('test')
      console.log("asd", this);
    }
  },

  mounted() {
    this.bebas()
  },
};

// mounted() {
//     axios
//       .get("https://pokeapi.co/api/v2/pokemon")
//       .then((response) => {
//           const { results } = response.data
//           this.poke = results.map((item) => {

//               return{
//                   name: item.name
//               }
//           })
//       })
//        .catch(error => {
//           console.error(error.message)
//       })
//   }
</script>
