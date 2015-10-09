import React from 'react';

const CODE_ENTER = 13;

class TextInput extends React.Component {

  static propTypes = {
    onSave: React.PropTypes.func.isRequired,
    value: React.PropTypes.string,
    placeholder: React.PropTypes.string
  };

  static defaultProps = {
    value: ''
  };

  state = {
    value: this.props.value
  };

  render() {
    return (
      <input type="text"
        value={this.state.value}
        onChange={this._onChange}
        placeholder={this.props.placeholder}
        onKeyDown={this._onKeyDown} />
    );
  }

  _onChange = (e) => {
    this.setState({value: e.target.value});
  }

  _onSave = () => {
    var text = this.state.value.trim();
    this.props.onSave(text);
    this.setState({value: ''});
  }

  _onKeyDown = (e) => {
    if (e.keyCode === CODE_ENTER) {
      this._onSave();
    }
  }
}

export default TextInput;
