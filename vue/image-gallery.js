 // Create a new Vue instance
 
  const app = Vue.createApp({
    data() {
      return {
        galleryItems: [
          { id: 1, name: 'cake', price: 250, title:'Healthy Baking products here',image:'images/bakery-1.jpeg',discount:20 },
          { id: 2, name: 'Earphone', price: 250, title:'This is first product',image: 'images/earphone.png',discount:10 },
          { id: 3, name: 'Car', price: 25000000, title:'Good Condition vechiles are here', image: 'images/car-1.jpeg',discount:8 },
          { id: 4, name: 'Soild Restorant', price: 250000, title:'Best service here', image: 'images/hotel-1.jpeg',discount:3 },
          { id: 5, name: 'Laptop', price: 5000, title:'Laptops Repairing', image: 'images/laptop.png',discount:25 },
          { id: 6, name: 'Mathan Restorant', price: 5000, title:'High quality foods', image: 'images/res-1.jpeg',discount:30 },
          { id: 7, name: 'Thai foods', price: 5000, title:'Thailand foods are available', image: 'images/res-2.jpeg',discount:30 },
          { id: 8, name: 'chainess Resoart', price: 9999, title:'Teast Chiness healthy foods', image: 'images/res-3.jpeg',discount:30 },
          { id: 9, name: 'Indian Resoart', price: 2500, title:'Indian style foods avilable with cheep price', image: 'images/res-5.jpeg',discount:30 },
          { id: 10, name: 'New Resoart', price: 2500, title:'All country style foods avilable with cheep price', image: 'images/res-4.jpeg',discount:30 },
          { id: 11, name: 'Beach Resoart', price: 10000, title:'Very Beautiful Beach resoart', image: 'images/tur-1.jpeg',discount:30 },
          { id: 12, name: 'I-watch', price: 1000, title:'Very Beautiful Watches selling and repaire', image: 'images/watch3.png',discount:30 },
        ],
        query: ''
      }
    },
    computed: {
        filteredProducts() {
          if (this.query) {
            return this.galleryItems.filter(item => {
              const lowerQuery = this.query.toLowerCase();
              return item.name.toLowerCase().includes(lowerQuery) || 
                item.price.toString().includes(lowerQuery);
            });
          } else {
            return this.galleryItems;
          }
        }
      }
  });
  app.mount('#app');


  