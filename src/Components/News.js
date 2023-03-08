import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {
   
    
    constructor(props){
        super(props);
        this.state={
            articles : [],
            page:1,
           loading: false,
        }
        document.title=`${this.titleCase(this.props.category)}- The News Hub`
      }

      titleCase=(str)=> {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            // You do not need to check if i is larger than splitStr length, as your for does that for you
            // Assign it back to the array
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
        // Directly return the joined string
        return splitStr.join(' '); 
     }
     

    async updateNews(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=35dc7741ce534a35a9deac7769a7380d&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json()
  
      this.setState({
  
      loading : false,
      articles : parsedData.articles,
    
      })

      }
      async componentDidMount(){
        this.updateNews();
   
      }

  handlePrevClick= async()=> {
    
    this.setState(
      {
        page:this.state.page -1,
      }
    )
    this.updateNews();
      }



      handleNextClick=async()=> {
       
        this.setState(
          {
            page:this.state.page -1,
          }
        )
        this.updateNews();
          
      }

  render() {
    return (
      <div className="container my-3">
        <h2 className='text-center'>Top Headlines - {this.titleCase(this.props.category)}</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
        { !this.state.loading && this.state.articles.map((element)=>{
         return  <div className="col-md-4" key={element.url}>
                <NewsItem title ={element.title} desc={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source = {element.source.name}/>
        </div>  })}
          
        
        </div>
         <div className="container d-flex justify-content-between ">
         <button type="button" disabled={this.state.page<=1}  className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous </button>
         <button type="button"  disabled={( Math.ceil(this.state.totalResults/this.props.pageSize) <this.state.page +1 ) }className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
         </div>
      </div>
    )
  }
}


News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}


