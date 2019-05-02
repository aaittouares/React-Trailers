import React from 'react';
import ReactDom from 'react-dom';

const App = function(){
    return <div>Salut têtes de nases</div>
};

ReactDom.render(<App/>, document.querySelector('.container'));