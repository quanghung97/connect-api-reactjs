import React, {Component} from 'react';
import callApi from './../../utils/apiCaller';
import { Link } from 'react-router-dom';

class ProductActionPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            id : '',
            txtName : '',
            txtPrice : '',
            chkbStatus : ''
        };
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        });
    }

    onSave = (event) => {
        event.preventDefault();
        var { txtName, txtPrice, chkbStatus } = this.state;
        var { history } = this.props;
        callApi('products', 'POST', {
            name : txtName,
            price : txtPrice,
            status : chkbStatus
        }).then(res => {
            history.goBack();
            // history.push("/");
        });
    }

    render() {

        var {txtName, txtPrice, chkbStatus} = this.state;

        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSave}>


                         <div className="form-group">
                            <label className="ml-1000">Tên sản phẩm: </label>
                            <input
                                type="text"
                                name="txtName"
                                value = {txtName}
                                onChange = {this.onChange}
                                className="form-control"
                                placeholder="Input field" />
                         </div>

                         <div className="form-group">
                            <label className="ml-1000">Giá: </label>
                            <input
                                type="number"
                                name="txtPrice"
                                value = {txtPrice}
                                onChange = {this.onChange}
                                className="form-control"
                                placeholder="Input field" />
                         </div>

                         <div className="form-group">
                            <label className="ml-1000">Trạng thái: </label>
                            <div className="checkbox form-group">
                                <label className="ml-300">
                                    <input
                                        type="checkbox"
                                        name="chkbStatus"
                                        value = {chkbStatus}
                                        onChange = {this.onChange}/>
                                    Còn Hàng
                                </label>
                            </div>
                         </div>
                            <Link to="/product-list" className="btn btn-info ml-1000 mr-10">Back</Link>
                         <button type="submit" className="btn btn-primary ml-1000">Save</button>
                </form>
            </div>
        );
    }

}

export default ProductActionPage;
