new Vue({
    el: "#reg",
    data: {
      showModal: false
    }
  });

  
const registration =  Vue.createApp({
  data(){
    return{
      selectedLanguage: "English", // Set default selection to "English"
      languages: ["German", "Spanish", "French", "English", "Japanese", "Korean", "Mandarin", "Russian"]
    }
  }
});
registration.mount('#reg');