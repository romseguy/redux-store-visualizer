import visualizer from 'd3-state-visualizer';
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/todos';

class App extends Component {
  render() {
    const { state, todos, dispatch } = this.props;
    const actions = bindActionCreators(TodoActions, dispatch);
    const { components: { TreeChart } } = visualizer;

    return (
      <div>
        <TreeChart
          state={state}
          id='todosState'
          aspectRatio={0.5}
          isSorted={false}
          heightBetweenNodesCoeff={1}
          widthBetweenNodesCoeff={1.5}
          style={{ 'border-bottom': '1px solid #ededed', width: 'auto' }}
          tooltipOptions={{ offset: {left: 30, top: 10}, indentationSize: 2}}
          />
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
      </div>
    );
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    state,
    todos: state.todos
  };
}

export default connect(mapStateToProps)(App);
