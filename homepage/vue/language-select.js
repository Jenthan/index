
const languages =  Vue.createApp({
  data(){
    return{
      selectedLanguage: "English", // Set default selection to "English"
      languages: ["German", "Spanish", "French", "English", "Japanese", "Korean", "Mandarin", "Russian"]
    }
  }
});
languages.mount('#language-select');