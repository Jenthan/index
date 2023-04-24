var app = new Vue({
    el: '#country-select',
    data: {
      countries: ['USA', 'Canada', 'Mexico'],
      cities: {
        'USA': ['New York', 'Los Angeles', 'Chicago'],
        'Canada': ['Toronto', 'Montreal', 'Vancouver'],
        'Mexico': ['Mexico City', 'Guadalajara', 'Monterrey']
      },
      selectedCountry: ''
    },
    computed: {
      selectedCities: function () {
        return this.cities[this.selectedCountry] || [];
      }
    }
  });