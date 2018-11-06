import React from "react";

class SubmitButton extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.action}>Calculate!</button>
      </div>
    );
  }
}

export default SubmitButton;
