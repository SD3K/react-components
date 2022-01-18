var App = () => {
  return(<div>
    <GroceryList groceryItems={['milk', 'bread']}/>
  </div>);
};

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }

  onItemHover() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
    fontWeight: this.state.done ? 'bold' : 'normal'
    };

    return (
    <li style={style} onMouseEnter={this.onItemHover.bind(this)} onMouseLeave={this.onItemHover.bind(this)}>{this.props.groceryItems}</li>
    );
	}
}

var GroceryList = (props) => {
  return(<ul>
    {props.groceryItems.map(items =>
      <GroceryListItem groceryItems={items}/>
    )}
  </ul>);
}

ReactDOM.render(<App />, document.getElementById("app"));