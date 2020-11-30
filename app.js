


class GroceryList extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      inCart: false,
      lookingAt: false
    };
  }
  onGroceryClick() {
    this.setState({
      inCart: !this.state.inCart
    });
  }

  onGroceryMouseOver() {
    this.setState({
      lookingAt: !this.state.lookingAt
    });
  }

  render() {
    var style = {
      textDecoration: this.state.inCart ? 'line-through' : 'none',
      'font-weight': this.state.lookingAt ? 'bold' : 'normal',
    };
  return (
      <li style={style}
       onClick={this.onGroceryClick.bind(this)}
       onMouseOver = {this.onGroceryMouseOver.bind(this)}
       onMouseOut = {this.onGroceryMouseOver.bind(this)} >
       {this.props.groceries} </li>
  );
  }
};

 var App = () => (
   <div>
      <h2>My Grocery List</h2>
      <ul>
      <GroceryList groceries = {'milk'} />
      <GroceryList groceries = {'eggs'} />
      <GroceryList groceries = {'tea'} />
      </ul>

   </div>
);

ReactDOM.render(<App/>, document.getElementById("app"));

