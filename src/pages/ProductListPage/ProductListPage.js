import React, {Component} from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import axios from 'axios';

class ProductListPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            products : []
        }
    }

    //life circle component call after component render first time and change state and Component render second time
    componentDidMount(){
        axios({
              method: 'get',
              url: 'http://5b827a172fd7f2001417913b.mockapi.io/api/products',
              data: null
          }).then(res => {
              console.log(res);
              this.setState({
                  products : res.data
              });
          }).catch(err => {
              console.log(err);
          });
    }

    render() {
        // var { products } = this.props;
        var {products} = this.state;

        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                     <button type="button" className="btn btn-info mb-10 ">Thêm Sản Phẩm</button>
                     <br />
                     <ProductList>
                         {this.showProducts(products)}
                     </ProductList>
            </div>
        );
    }

    showProducts = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                    />
                );
            });
        }
        return result;
    }
}

const mapStateToProps = (state) => {
    return {
        products : state.products
    }
}

export default connect(mapStateToProps, null)(ProductListPage);
