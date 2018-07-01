import axios from "axios";

const api = {

  searchNYT: function(topic, startYear, endYear) {
    const apiKey = "1f60b8771a75487fb501f531821199bb";
    
    const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
    apiKey + "&q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "0101";

    return axios.get(queryURL);
  },

  // getss saved articles from the db
  getArticle: function() {
    return axios.get("/api/saved");
  },
  // Saves article to db
  saveArticle: function(articleObj) {
    return axios.post("/api/saved", articleObj);
  },
  // Deletes article in db
  deleteArticle: function(id) {
    return axios.delete(`/api/saved/${id}`);
  }
};

export default api;