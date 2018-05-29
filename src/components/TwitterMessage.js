import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {message: {}};
  }

  setMessage = event => {
    this.setState({ message: event.target.value });
  };
  
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
        value={this.state.message}
      onChange={this.setMessage}

         />
         <span>{this.props.maxChars - this.state.message.length}</span>
      </div>
    );
  }
}

export default TwitterMessage;
