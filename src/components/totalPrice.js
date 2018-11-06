import React from "react";

class totalPrice extends React.Component {
    render(){
        console.log(this.props)
  return (
    <div>
      <h1 type="submit" >
        ${this.props.data}
      </h1>
    </div>
  );
};
}

export default totalPrice;
