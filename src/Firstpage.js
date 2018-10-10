import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FirstPage extends Component {

render() {
	const {
		memo
	} = this.props;
	
    return (
      <div>
        <h1>Schedule</h1>
		{memo.length ? (
			<p>{memo[0].title}</p>
		) : (
			<p className="loading">LOADING</p>
		)}
   		<Link to={'/second'}>Second</Link>
      </div>
    )
  }
}

export default FirstPage;
