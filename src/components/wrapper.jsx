export default class Wrapper extends React.Component {
  render () {
    return (
      <div>
        <h1>Hello Worlds</h1>
      </div>
    );
  }
}
ReactDOM.render(<Wrapper />, document.getElementById('app'));
