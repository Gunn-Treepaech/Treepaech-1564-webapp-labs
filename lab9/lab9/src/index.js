import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function User(props){
  console.log(props);
    return (
        <div className='User'>
            <h1>Hello, {props.name}</h1>
            <h2>He lives in {props.location}</h2>
            <h3>He favorite exercise is {props.exercise}</h3>
        </div>
    );
}

const user = {
    name:"Treepaech Treechan",
    location:"Khon Kaen",
    exercise:"Jogging"
};

function App(){
    return (
        <User name={user.name} location={user.location} exercise={user.exercise}/>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);