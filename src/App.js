import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { increment, decrement } from "./redux/actions/counter";
import AnotherValue from "./components/anotherValue";
import { getData } from "./redux/actions/getPhoto";

function App(props) {
  const getDataFromProps = props.getData

  React.useEffect(() => {
    getDataFromProps()
  }, [getDataFromProps]);

  console.log(props)

  return (
    <div className="App">
      <h1>{props.value}</h1>

      <section>
        <button onClick={props.increment}> + </button>
        <br />
        <button onClick={props.decrement}> - </button>
      </section>
      <AnotherValue />
      {props.isLoading && <div>Loading</div>}
      {props.photos && 
       props.photos.map((data, i)=>(
        <div key= {i}>
          <img src={data.picture.medium} alt="user"/>
        </div>
       ))}
       

    </div>
  );
}
const mapStateToProps = state => {
  console.log(state)
  return {
    value: state.counter.value,
    photos: state.photos.data.results,
    isLoading: state.photos.isLoading,
    error: state.photos.error
  };
};
const mapDispatchToProps = { increment, decrement, getData };
export default connect(mapStateToProps, mapDispatchToProps)(App);
