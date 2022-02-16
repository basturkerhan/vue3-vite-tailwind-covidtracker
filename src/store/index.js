import { createStore } from "vuex";
import appAxios from "../utils/appAxios";

const store = createStore({
  state: {
    countries: [],
    worldDatas: [],
  },

  mutations: {
    loadCountries(state, data) {
      state.countries = data;
    },
    loadWorldDatas(state, data) {
      state.worldDatas = data;
    },
  },

  actions: {
    async getCountries(context) {
      const response = await appAxios.get("/npm-covid-data/countries");
      const data = await response.data.map((country) => {
        delete country.Test_Percentage;
        delete country.TwoLetterSymbol;
        delete country.Recovery_Proporation;
        return country;
      });
      context.commit("loadCountries", data);
    },

    async getWorldDatas(context) {
      const response = await appAxios.get("/npm-covid-data/world");
      const {
        ActiveCases,
        NewCases,
        NewDeaths,
        NewRecovered,
        Serious_Critical,
        TotalCases,
        TotalDeaths,
        TotalRecovered,
      } = response.data[0];

      context.commit("loadWorldDatas", {
        ActiveCases,
        NewCases,
        NewDeaths,
        NewRecovered,
        Serious_Critical,
        TotalCases,
        TotalDeaths,
        TotalRecovered,
      });
    },
  },

  getters: {
    _getSliderItems: (state) =>
      state.countries.map((country) => {
        const {
          Country,
          NewCases,
          NewDeaths,
          Infection_Risk,
          NewRecovered,
          ThreeLetterSymbol,
        } = country;
        return {
          Country,
          NewCases,
          NewDeaths,
          Infection_Risk,
          NewRecovered,
          ThreeLetterSymbol,
        };
      }),

    _getAllTimeCasesInWorld: (state) => {
      const {
        ActiveCases,
        Serious_Critical,
        TotalCases,
        TotalDeaths,
        TotalRecovered,
      } = state.worldDatas;
      return {
        ActiveCases,
        Serious_Critical,
        TotalCases,
        TotalDeaths,
        TotalRecovered,
      };
    },

    _getNewCasesInWorld: (state) => {
      const { NewCases, NewDeaths, NewRecovered } = state.worldDatas;
      return { NewCases, NewDeaths, NewRecovered };
    },
  },
});

export default store;
