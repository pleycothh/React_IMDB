import React from 'react';
import profileImage from './images/no_image.jpg';

//const Start = () => React.createElement('div', null, 'This is a little start')
// use react function without JSX example above 



function App () {
  return (
    <div className="App">
      <h1>My React App test</h1>
      <h2>Author: Ben Li 19930119</h2>
      <img src={profileImage} alt="my-img" />
      
    </div>
  );
 
}
// init commit
export default App;
