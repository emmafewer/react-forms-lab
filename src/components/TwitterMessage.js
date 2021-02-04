import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleMessage = event => {
    this.setState({
      message: event.target.value
    })
  }

  characterCounter = () => {
    return <span>{this.props.maxChars - this.state.message.length}</span>
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleMessage}/>
        {this.characterCounter()}
      </div>
    );
  }
}

export default TwitterMessage;
