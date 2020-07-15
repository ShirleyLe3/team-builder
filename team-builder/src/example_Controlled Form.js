class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        submit: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
    handleSubmit(event) {
      // change code below this line
      this.setState({
        input: event.target.value
      });
      // change code above this line
    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            { /* change code below this line */ }
            
           <input type="text" value={this.state.value} onChange={this.handleChange}/>
            { /* change code above this line */ }
            <button type='submit'>Submit!</button>
          </form>
          { /* change code below this line */ }
          <h1>controlled input:{this.state.handleSubmit}</h1>
          { /* change code above this line */ }
        </div>
      );
    }
  };
  