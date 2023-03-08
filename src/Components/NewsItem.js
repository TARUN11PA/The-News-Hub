import React, { Component } from 'react'

export default class NewsItem extends Component {


  render() {
    let {title,discription,imageUrl , newsUrl , author,date , source} = this.props;

    return (<>
      <div className="container">
    <div className="card  my-3 mx-3"  >
      <img src={imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {source}
    <span class="visually-hidden">unread messages</span>
  </span>
          </h5>
            <p className="card-text">{discription}</p>
            <p className="card-text"><small className="textmuted">By {!author?"By unknown":author} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} rel="noreferrer" target="_blank" className="btn  btn-primary">Read More </a>
        </div>
    </div>    
    </div>
    </>
)
  }
}
