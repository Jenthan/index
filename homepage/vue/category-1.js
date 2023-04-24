const app_category = Vue.createApp({
    data() {
      return {
        images: [
          'image1.jpg',
          'image2.jpg',
          'image3.jpg',
          'image4.jpg',
          'image5.jpg',
          'image6.jpg',
          'image7.jpg',
          'image8.jpg',
          'image9.jpg',
          'image10.jpg',
          'image11.jpg',
          'image12.jpg',
          'image13.jpg',
          'image14.jpg',
          'image15.jpg',
          'image16.jpg',
          'image17.jpg',
          'image18.jpg',
          'image19.jpg',
          'image20.jpg'
        ],
        currentPage: 1,
        itemsPerPage: 5
      }
    },
    computed: {
      totalPages() {
        return Math.ceil(this.images.length / this.itemsPerPage);
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
        return this.images.slice(startIndex, endIndex);
      }
    }
  });
  app_category.mount('#app-category');