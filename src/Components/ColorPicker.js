import React, {Component} from 'react';



class ColorPicker extends Component {

  render() { 
    return (  
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Color Picker</h3>
            </div>
            <div className="panel-body">
              <span className="active"></span>
              <span className=""></span>
              <span className=""></span>
              <span className=""></span>
            
              </div>
            </div>
          </div>
    );
  }
}
 
export default ColorPicker;