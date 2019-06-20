import React from "react";
import { connect } from "react-redux";
import { fetchAPI } from "../actions";
import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.fetchAPI();
  }

  render() {
    if (this.props.isLoading ? <h1> Loading CharacterList...</h1> : null) {
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}
const mstp = state => ({
  error: state.charsReducer.error,
  isLoading: state.charsReducer.isLoading,
  characters: state.charsReducer.characters
});
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mstp /* mapStateToProps replaces null here */,
  { fetchAPI } /* action creators go here */
)(CharacterListView);
