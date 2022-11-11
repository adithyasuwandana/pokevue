import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import qs from 'querystring'
// import _ from 'lodash'

Vue.use(Vuex)

// const apiKey = process.env.VUE_APP_API_KEY

const store = new Vuex.Store({
  state: {
    pokemonCollection: {},
    // pokemonDetail: {},
    // currentLocation: {},
    // drawer: null,
    isFetching: false,
    errorMessage: null
  },
  actions: {
    fetchPokemon({ commit }, payload) {
    //   payload.appid = apiKey
    //   payload = '?' + qs.stringify(_.pickBy(payload, _.identity))
      const url = `https://pokeapi.co/api/v2/pokemon`

      commit('FETCHING')
      axios.get(url)
        .then(res => {
        //   const { name, coord } = res.data
        //   commit('SET_WEATHERS', res.data)
        //   commit('SET_CURRENT_LOCATION', { name, ...coord })

            const { results } = res.data;
            const poke = results.map((mon) => {
                const id = mon.url.split("pokemon/")[1].split("/")[0];
                return {
                    nama: mon.name,
                    gambar: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`,
                };
            });
            commit('SET_POKEMON', poke)
            console.log(payload)
        })
        .catch(err => commit('SET_ERROR',  err.message))
        .finally(() => commit('FETCHED'))
    },
    // fetchWeatherDetail({ commit }, payload) {
    //   payload.appid = apiKey
    //   payload = '?' + qs.stringify(_.pickBy(payload, _.identity))
    //   const url = `/data/2.5/onecall${payload}`

    //   commit('FETCHING')
    //   axios.get(url)
    //     .then(res => commit('SET_WEATHER_DETAIL', res.data))
    //     .catch(err => commit('SET_ERROR',  err.message))
    //     .finally(() => commit('FETCHED'))
    // }
  },
  mutations: {
    toggleDrawer: state => {
      state.drawer = !state.drawer
      return state
    },
    resetState: state => {
      state.isFetching = false
      state.errorMessage = null
      return state
    },
    FETCHING: state => {
      state.isFetching = true
      return state
    },
    FETCHED: state => {
      state.isFetching = false
      return state
    },
    SET_CURRENT_LOCATION: (state, data) => {
      state.currentLocation = data
      return state
    },
    SET_POKEMON: (state, data) => {
      state.pokemonCollection = data
      return state
    },
    // SET_POKEMON_DETAIL: (state, data) => {
    //   state.pokemonDetail = data
    //   return state
    // },
    SET_ERROR: (state, message) => {
      state.errorMessage = message
      return state
    },

  },
  getters: {
    drawer: state => state.drawer,
    pokemonCollection: state => state.pokemonCollection,
    // weatherDetail: state => state.weatherDetail,
    isLoading: state => state.isFetching,
    currentLocation: state => state.currentLocation
  }
})

export default store