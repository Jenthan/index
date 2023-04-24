const app = Vue.createApp({
    data() {
      return {
        products: [
          { id: 1, name: 'Product A', category: 'Category 1', price: 10.99 },
          { id: 2, name: 'Product B', category: 'Category 2', price: 15.99 },
          { id: 3, name: 'Product C', category: 'Category 1', price: 8.99 },
          { id: 4, name: 'Product D', category: 'Category 2', price: 12.99 }
        ],
        categories: [
          { id: 1, name: 'Category 1' },
          { id: 2, name: 'Category 2' }
        ],
        selectedCategory: 'Category 1'
      }
    },
    computed: {
      filteredProducts() {
        return this.products.filter(product => product.category === this.selectedCategory)
      }
    },
    methods: {
      selectCategory(category) {
        console.log(category);
        this.selectedCategory = category.name
      }
    }
  })
  app.mount('#app')