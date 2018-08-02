import React,{Component} from 'react';
import {connect} from 'react-redux';
import {deleteArticle,addArticle} from '../actions/index'



class connectedList extends Component{
    constructor(){
        super()
    }
    deleteItems(items){
     console.log(items);
     const {articles} = this.props;
     for(let index = 0; index<articles.length; index++){
        if(articles[index].id === items.id){
            console.log("value found  for ",articles[index].id);
            articles.splice(index,1);
        }
     }
     
     //this.props.addArticle(articles);
     this.props.deleteArticle(items)
    }
    render(){
        const {articles} = this.props;
        return(
            <div>
                <ul>
                    {articles.map(el=>(
                        <li className="list-group-item" key={el.id}>{el.title} <a onClick={this.deleteItems.bind(this,el)}>delete</a></li>
                    ))}
                </ul>
            </div>
        )
    }
   
}



const mapStateToProps = state =>{
    return {articles:state.articles}
}
// const mapDispatchToProps = {
//     deleteArticle
// }
const mapDispatchToProps = dispatch => {
    return {
        deleteArticle: article => dispatch(deleteArticle(article)),
        addArticle: article => dispatch(addArticle(article))
    };
  };

export default connect(mapStateToProps,mapDispatchToProps)(connectedList);