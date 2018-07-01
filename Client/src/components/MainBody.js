import React, { Component } from "react";
import Saved from "./Saved";
import Search from "./Search";
import Results from "./Results";
import API from "../utils/api";

class MainBody extends Component {

  state = {
    topic: "",
    startYear: "",
    endYear: "",
    articles: [],
    saved: []
  };

  //get a list of all saved articles and update this.state.saved
  componentDidMount() {
    this.getSavedArticles()
  }

  //these methods keep track of topic, start and end years
  topicChange = (event) => {
    this.setState({ topic: event.target.value });
  }
  startYearChange = (event) => {
    this.setState({ startYear: event.target.value });
  }
  endYearChange = (event) => {
    this.setState({ endYear: event.target.value });
  }

  //get all articles from db
  getSavedArticles = () => {
    API.getArticle()
      .then((res) => {
        this.setState({ saved: res.data });
      });
  }

  // on submitting form, run api call to search NYT articles
  FormSubmit = (event) => {
    event.preventDefault();
    API.searchNYT(this.state.topic, this.state.startYear, this.state.endYear)
      .then((res) => {
        this.setState({ articles: res.data });
        console.log("this.state.articles: ", this.state.articles);
      });
  }

  //displays each search result
  displayArticles = () => {
    return this.state.articles.map(article => (
      <Results
        _id={article._id}
        key={article._id}
        title={article.headline.main}
        date={article.pub_date}
        url={article.web_url}
        SaveBtn={this.SaveBtn}
        getSavedArticles={this.getSavedArticles}
      />
    ));
  }

   // adds article to db when clicking save btn
  saveBtn = (id) => {
    const findArticleByID = this.state.articles.find((el) => el._id === id);
    console.log("findArticleByID: ", findArticleByID);
    const newSave = {title: findArticleByID.headline.main, date: findArticleByID.pub_date, url: findArticleByID.web_url};
    API.saveArticle(newSave)
    .then(this.getSavedArticles());
  }

//shows all saved articles
  displaySaved = () => {
    return this.state.saved.map(save => (
      <Saved
        _id={save._id}
        key={save._id}
        title={save.title}
        date={save.date}
        url={save.url}
        deleteBtn={this.deleteBtn}
        getSavedArticles={this.getSavedArticles}
      />
    ));
  }

  //remove saved article when delete is clicked
  deleteBtn = (id) => {
    API.deleteArticle(id)
      .then(this.getSavedArticles());
  }

  render() {
    return (

      <div className="main-contianer">
        <div className="content">
          <div className="jumbotron">
            <h1 className="text-center"><strong>NYT Article Search</strong></h1>
            <h2 className="text-center">Find articles by topic and time range; Save articles for later reading.</h2>
          </div>

          <Search
            topicChange={this.topicChange}
            startYearChange={this.startYearChange}
            endYearChange={this.endYearChange}
            formSubmit={this.formSubmit}
            displayArticles={this.displayArticles}
          />

          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">
                      <strong>Saved Articles</strong>
                    </h3>
                  </div>
                  <div className="panel-body">
                      {this.displaySaved()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }

}

export default MainBody;