import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import List from './List';



ReactDOM.render(
  <React.StrictMode>
  		<div>
			<h1>An old-fashioned Rolodex in Node+React</h1>
			<List />
		</div>
  </React.StrictMode>,
  document.getElementById('root')
);
