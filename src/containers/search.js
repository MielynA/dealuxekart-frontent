import React from 'react';
import axios from 'axios'; 
import Result from '../components/result';
import { Button, Container, InputGroup, Input, } from 'reactstrap';


export default class Search extends React.Component {
     constructor(props){
         super(props)
         this.state = {
            searchInput: '',
            alert: false,
            message: '',
            results: [],
         }
     }

     handleSearchText = (e) => {
        e.preventDefault();
        if(this.state.searchInput === ''){
            this.setState({
                // alert: true,
                message: 'Your search is not valid'
            })
        } else {
            this.props.history.push(`/result/${this.state.searchInput}/${e.target.value}`);
            this.setState({
                searchInput: '',
                // alert: false,
            })
        }
       
    }

   setSearchInput = (e) => {
    this.setState({searchInput: e.target.value})
    console.log(e.target.value)
   }

    componentDidMount() {
        axios.get('http://localhost:5001/product/').then((data)=>{
            this.setState({results: data.data.data},()=>{
                console.log(this.state)
            })
            
        }).catch((error)=> {
            // console.log(error);
        })
    }
  
//    getSearchInfo = () => {
//        axios.get('http://localhost:5001/product/').then((data)=> {
//            this.setState({results: data.data.data}, ()=> {
//                console.log('this is get info' ,this.state)
//            })
//        }).catch ((error) => {

//        })
//    }

    render(){
        const { searchInput, } = this.state
        const noResult= <div className="alert alert-secondary" role="alert">
        No Search Results yet!
      </div>;
      const result = <div className='row'>
      {
        this.state.results.map((e, i) => {
          return <Result id={e.productid} image={e.imgurl.pic} title={e.categoryname} />;
        })
      }
    </div>

        return(
            <React.Fragment>
                <Container>
                    <InputGroup>
                    <Input value={searchInput} placeholder='Search' onChange={this.setSearchInput} type='text' name='searchInput' onClick={this.getSearchInfo}>
                        {
                            this.state.results.length === 0 ? noResult : result
                        }
                    </Input>
                    </InputGroup>
                </Container>
            </React.Fragment>
        );
    }
}