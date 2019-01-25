class Index extends Component {
  onItemClick = () => {
    console.log("Button Clicked");
  };
  render() {
    return (
      <div>
        <button onClick={this.onItemClick}>Submit</button>
      </div>
    );
  }
}
