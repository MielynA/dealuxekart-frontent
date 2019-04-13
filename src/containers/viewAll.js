import React from 'react'; 
import axios from 'axios';
import { Button, Container, InputGroup, Input, } from 'reactstrap';
import Result from '../components/result'
import InfiniteScroll from 'react-infinite-scroller'
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button"
//import Search from '../containers/search';



export default class ViewAll extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            productsAll: [],
            addToCart: [],
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
            this.props.history.push(`/result/${this.state.searchInput}`);
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
            this.setState({productsAll: data.data.data},()=>{
                console.log(this.state)
            })
            
        }).catch((error)=> {
            // console.log(error);
        })
    }
  
   getSearchInfo = () => {
       axios.get('http://localhost:5001/product/').then((data)=> {
           this.setState({results: data.data.data}, ()=> {
               console.log('this is get info' ,this.state)
           })
       }).catch ((error) => {

       })
   }
    handToggle = (index) => {
        const {addToCart} = this.state
        const getProducts = this.state.productsAll[index]
        addToCart.push(getProducts)
        localStorage.setItem('addedCartItems',JSON.stringify(addToCart))
        this.setState({addToCart: addToCart})
       
    }
    // newUser = () => {
    //     const {email, customerId } =this.state;
    //     axios.post('http://localhost:5001/privatecustomer', {
    //       username: "Amaya",
    //       password: "admin123",
    //       email: "amaya@email.com",
    //       billingAdd: "Kew Gardens", 
    //       city: "NY",
    //       state:"NYC ",
    //       creditCard: 1234444,

    //     })
    //  }


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
               {/* <Search /> */}
                <Container>
                    <InputGroup>
                    <Input value={searchInput} placeholder='Search' onChange={this.setSearchInput} type='text' name='searchInput' onClick={this.getSearchInfo}>
                        {
                            this.state.results.length === 0 ? noResult : result
                        }
                    </Input>
                    </InputGroup>
                </Container>
                <InfiniteScroll
                 pageStart={0}
                 loadMore={this.state.productsAll}
                 hasMore={true || false}
                 loader={""}>
                {
                    this.state.productsAll.map((products, i)=>{
                        console.log('this is the list of products',products)
                            return (
                                <React.Fragment>   
                             <div className = 'mr-5 mt-5 ml-5 mb-5'>
                            <div style={{columns: '2 auto'}}>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                            <div style={{textTransform: 'lowercase', fontWeight: 'normal'}}>
                            <img style={{width: '45%'}}src={products.imgurl.pic} alt =''/>
                            <div>{products.productname}</div>
                            <div>{products.categorydesc}</div>
                            <div style={{color:"red"}}> $ {products.unitprice}</div>                 
                            <Button onClick={e=>this.handToggle(i)}>Add to Cart</Button>    

                            </div>
                            </div>
                            </div>
                            </div>
                            <hr></hr>
                            
                             </React.Fragment>
                             
                                )
                    })
                }  
                </InfiniteScroll> 
            </React.Fragment>
        ); 
    }



}