import React, {Component} from 'react';

class ProductActionPage extends Component {

    // constructor(props){
    //     super(props);
    //     this.state({
    //         aaa : ''
    //     });
    // }
    //
    // onChange = (event) => {
    //     var target = event.target;
    //     var name = target.name;
    // }

    render() {

        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form>


                         <div className="form-group">
                            <label className="ml-1000">Tên sản phẩm: </label>
                            <input type="text" className="form-control" placeholder="Input field" />
                         </div>

                         <div className="form-group">
                            <label className="ml-1000">Giá: </label>
                            <input type="text" className="form-control" placeholder="Input field" />
                         </div>

                         <div className="form-group">
                            <label className="ml-1000">Trạng thái: </label>
                            <div className="checkbox form-group">
                                <label className="ml-300">
                                    <input type="checkbox"/>
                                    Còn Hàng
                                </label>
                            </div>
                         </div>

                         <button type="submit" className="btn btn-primary ml-1000">Save</button>
                </form>
            </div>
        );
    }

}

export default ProductActionPage;
