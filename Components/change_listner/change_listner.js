class Index extends Component {
  constructor() {
    super();
    this.state = {
      item: ""
    };
  }
  onItemChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <input name="item" onChange={this.onItemChange}>
          Submit
        </input>
        <p>{this.state.item}</p>
      </div>
    );
  }
}
