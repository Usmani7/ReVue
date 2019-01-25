class Index extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }
  render() {
    itemname = this.state.items.map(item => {
      return <li key={item.id}>{item.name}</li>;
    });
    return (
      <div>
        <ul>{item.name}</ul>
      </div>
    );
  }
}
