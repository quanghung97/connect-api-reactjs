import React, {Component} from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import callApi from './../../utils/apiCaller';
import { Link } from 'react-router-dom';
import { actFetchProductsRequest, actDeleteProductsRequest } from './../../actions/index';

class ProductListPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            products : []
        }
    }

    //life circle component call after component render first time and change state and Component render second time
    componentDidMount(){
        // callApi('products', 'GET', null).then(res => {
        //     // this.setState({
        //     //     products : res.data
        //     // });
        //     this.props.feacthAllProducts(res.data);
        // });
        this.props.feacthAllProducts();
    }

    onDelete = (id) => {
        this.props.onDeleteProduct(id);
    }

    render() {
         var { products } = this.props;
        // var {products} = this.state;

        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                     <Link to="/product/add" className="btn btn-info mb-10 ">Thêm Sản Phẩm</Link>
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
                        onDelete = {this.onDelete}
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

const mapDispatchToProps = (dispatch, props) => {
    return {
        feacthAllProducts : () => {
            dispatch(actFetchProductsRequest());
        },
        onDeleteProduct : (id) => {
            dispatch(actDeleteProductsRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
