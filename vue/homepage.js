const home = Vue.createApp({
    data() {
      return {
        selectedCountry: '',
        countries: [],
        countryDetails: {},
        isLoading: true,
        showPopup: false,
        dropdownOpen: false,
        selectedLanguage: "English", // Set default selection to "English"
        languages: ["German", "Spanish", "French", "English", "Japanese", "Korean", "Mandarin", "Russian"],
        cities: {
          'LK': [
            {id: 1, name:'Jaffna'},
            {id: 2, name:'Kandy'}, 
            {id: 3, name:'Galle'},
            {id: 4, name:'Bentota'},
            {id: 5, name:'Dampulla'},
            {id: 6, name:'Trincomalee'},
            {id: 7, name:'Ratnapura'}, 
            {id: 8, name:'Batticaloa'},
            {id: 9, name:'Colombo'},
            {id: 10, name:'Ampara'},
            {id: 11, name:'Kilinochchi'},
            {id: 12, name:'Kandy'}, 
            {id: 13, name:'Galle'},
            {id: 14, name:'Bentota'},
            {id: 15, name:'Dampulla'},
            {id: 16, name:'Polannaruwa'},
            {id: 17, name:'Mullaitivu'}, 
            {id: 18, name:'Vavuniya'},
            {id: 19, name:'kaluththurai'},
            {id: 10, name:'puththalam'},
        ],
          'NL': [
            {id: 1, name:'Amsterdam'},
            {id: 2, name:'Utrecht'}, 
            {id: 3, name:'Rotterdam'},
            {id: 4, name:'Almere'},
            {id: 5, name:'Breda'},
            {id: 6, name:'Zaanstad'},
            {id: 7, name:'Arnhem'}, 
            {id: 8, name:'Zwolle'},
            {id: 9, name:'Heerlen'},
            {id: 10, name:'Zwolle'},
            {id: 11, name:'Ede'},
            {id: 12, name:'Gouda'}, 
            {id: 13, name:'Delft'},
            {id: 14, name:'Heerlen'},
            {id: 15, name:'Deventer'},
            {id: 16, name:'Zaandam'},
            {id: 17, name:'Kampen'}, 
            {id: 18, name:'Sittard'},
            {id: 19, name:'kerkrade'},
            {id: 20, name:'Zutphen'},
            
          ],
        },
  
        galleryItems: [
          { id: 1,city_id:1,categoryId:1, name: 'cake', price: 250, title:'Healthy Baking products here',image:'images/bakery-1.jpeg',discount:20 },
          { id: 2,city_id:1,categoryId:6, name: 'Earphone', price: 250, title:'This is first product',image: 'images/earphone.png',discount:10 },
          { id: 3,city_id:1,categoryId:10, name: 'Car', price: 25000000, title:'Good Condition vechiles are here', image: 'images/car-1.jpeg',discount:8 },
          { id: 4,city_id:1,categoryId:8, name: 'Soild Restorant', price: 250000, title:'Best service here', image: 'images/hotel-1.jpeg',discount:3 },
          { id: 5,city_id:2,categoryId:6, name: 'Laptop', price: 5000, title:'Laptops Repairing', image: 'images/laptop.png',discount:25 },
          { id: 6,city_id:2,categoryId:8, name: 'Mathan Restorant', price: 5000, title:'High quality foods', image: 'images/res-1.jpeg',discount:30 },
          { id: 7,city_id:3,categoryId:1, name: 'Thai foods', price: 5000, title:'Thailand foods are available', image: 'images/res-2.jpeg',discount:30 },
          { id: 8,city_id:4,categoryId:1, name: 'chainess Resoart', price: 9999, title:'Teast Chiness healthy foods', image: 'images/res-3.jpeg',discount:30 },
          { id: 9,city_id:4,categoryId:1, name: 'Indian Resoart', price: 2500, title:'Indian style foods avilable with cheep price', image: 'images/res-5.jpeg',discount:30 },
          { id: 10,city_id:5,categoryId:3, name: 'New Resoart', price: 2500, title:'All country style foods avilable with cheep price', image: 'images/res-4.jpeg',discount:30 },
          { id: 11,city_id:5,categoryId:4, name: 'Beach Resoart', price: 10000, title:'Very Beautiful Beach resoart', image: 'images/tur-1.jpeg',discount:30 },
          { id: 12,city_id:5,categoryId:6, name: 'I-watch', price: 1000, title:'Very Beautiful Watches selling and repaire', image: 'images/watch3.png',discount:30 },
        ],
        selectedCityId: 1,
        categoryItems: [
            { id: 1, name: 'Food',image: 'icon/food.png'},
            { id: 2, name: 'Healthcare',image: 'icon/healthcare.png'},
            { id: 3, name: 'Personalcare',image: 'icon/Personalcare.png'},
            { id: 4, name: 'Travels',image: 'icon/travels.png'},
            { id: 5, name: 'Automobile',image: 'icon/Automobile.png'},
            { id: 6, name: 'Business Support',image: 'icon/business_support.png'},
            { id: 7, name: 'Construction',image: 'icon/Construction.png'},
            { id: 8, name: 'Entertainment',image: 'icon/Entertainment.png'},
            { id: 9, name: 'Home Garden',image: 'icon/home_garden.png'},
            { id: 10, name: 'Manufacturing',image: 'icon/manufacturing.png'},
            { id: 11, name: 'Personalcare',image: 'icon/Personalcare.png'},
            { id: 12, name: 'Retail',image: 'icon/Retail_copy.png'},
            { id: 13, name: 'Wholesale',image: 'icon/whole_sale.png'},
            { id: 14, name: 'Food',image: 'icon/food.png'},
            { id: 15, name: 'Healthcare',image: 'icon/healthcare.png'},
            { id: 16, name: 'Personalcare',image: 'icon/Personalcare.png'},
            { id: 17, name: 'Travels',image: 'icon/travels.png'},
            { id: 18, name: 'Automobile',image: 'icon/Automobile.png'},
            { id: 19, name: 'Construction',image: 'icon/Construction.png'},
            { id: 20, name: 'Entertainment',image: 'icon/Entertainment.png'},
            { id: 21, name: 'Home Garden',image: 'icon/home_garden.png'},
            { id: 22, name: 'Manufacturing',image: 'icon/manufacturing.png'},
            { id: 23, name: 'Personalcare',image: 'icon/Personalcare.png'},
            { id: 24, name: 'Retail',image: 'icon/Retail_copy.png'},
            { id: 25, name: 'Wholesale',image: 'icon/whole_sale.png'},
            { id: 23, name: 'Personalcare',image: 'icon/Personalcare.png'},
            { id: 24, name: 'Retail',image: 'icon/Retail_copy.png'},
            { id: 25, name: 'Wholesale',image: 'icon/whole_sale.png'},
          ],
        currentPage: 1,
        itemsPerPage: 10,
        query: '',
        selectedCategoryId: '',
        showModalRegLogin: false
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
      },
      selectCity(cities) {
      // console.log(cities.id);
        this.selectedCityId = cities;
      },
      selectCategory(categoryId) {
        // console.log(categoryId);
          this.selectedCategoryId = categoryId;
        }
    },
    computed:{
      selectedCities: function () {
        return this.cities[this.selectedCountry] || [];
      },
      filteredgalleryItems() {
       // console.log(this.selectedCityId);
        return this.galleryItems.filter(item => item.city_id == this.selectedCityId);
      },
      totalPages() {
        return Math.ceil(this.categoryItems.length / this.itemsPerPage);
      },
      pages() {
        const pages = [];
        for (let i = 1; i <= this.totalPages; i++) {
          pages.push(i);
        }
        return pages;
      },
      displayedImages() {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        console.log(this.categoryItems.slice(startIndex, endIndex));
        return this.categoryItems.slice(startIndex, endIndex);
      },
      filteredProducts() {
        if (this.query) {
          return this.galleryItems.filter(item => {
            const lowerQuery = this.query.toLowerCase();
            return item.name.toLowerCase().includes(lowerQuery) || 
              item.price.toString().includes(lowerQuery);
          });
        } else if(this.selectedCategoryId) {
         // console.log(this.selectedCategoryId);
         return this.galleryItems.filter(item => item.categoryId == this.selectedCategoryId);
        }else{
            return this.galleryItems; 
        }
      },
    },
    mounted() {
      this.fetchCountries();
    },

  });
  
  home.mount('#homepage');