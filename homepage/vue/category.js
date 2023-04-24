
  const appss = Vue.createApp({
    data() {
      return {
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
          itemsPerPage: 10
      }
    },
    computed: {
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
      }
    }
  });
  appss.mount('#category-all');