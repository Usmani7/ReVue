class Index extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
      Lang: "Javascript"
    };
  }
  onItemChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <p>{this.state.show ? this.state.Lang : "not language"}</p>
      </div>
    );
  }
}
