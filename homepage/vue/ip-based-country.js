const apps = Vue.createApp({
  data() {
    return {
      selectedCountry: '',
      countries: [],
      countryDetails: {},
      isLoading: true,
      showPopup: false,
      dropdownOpen: false,
      cities: {
        'LK': ['Jaffna', 'Kandy', 'Galle','Bentota','Dampulla',
      'Trincomalee','Ratnapura','Batticaloa','Colombo','Ampara','Kilinochchi',
      'Polannaruwa','Mullaitivu','Vavuniya'
      ],
        'NL': ['Amsterdam', 'Utrecht', 'Rotterdam','Almere','Breda',
        'Zaanstad','Arnhem','Arnhem','Heerlen'
        ],
        'Mexico': ['Mexico City', 'Guadalajara', 'Monterrey']
      },
    };
  },
  methods: {
    async fetchIPCountry() {
      try {
        const response = await axios.get('https://ipapi.co/json');
        const countryCode = response.data.country_code;
        this.selectedCountry = countryCode;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchCountryDetails() {
      try {
        const response = await axios.get(`https://restcountries.com/v2/alpha/${this.selectedCountry}`);
        this.countryDetails = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchCountries() {
      try {
        const response = await axios.get('https://restcountries.com/v2/all');
        this.countries = response.data.map((country) => ({
          name: country.name,
          alpha2Code: country.alpha2Code,
        }));
        await this.fetchIPCountry();
        await this.fetchCountryDetails();
        this.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    },
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
      if (this.dropdownOpen && this.selectedCities) {
        this.showPopup = true;
      } else {
        this.showPopup = false;
      }
    }
  },
  computed:{
    selectedCities: function () {
      return this.cities[this.selectedCountry] || [];
    }
  },
  mounted() {
    this.fetchCountries();
  },
});

apps.mount('#apps');