import React from 'react';
import 'bootstrap/less/bootstrap.less';
import Button from 'react-bootstrap/lib/Button';

class Dbox extends React.Component {
  constructor(props) {
  super(props);
    this.handleabout = handleabout.bind(this);
  }

  render() {
    return (<div>
        <h1>Hello</h1>
        <p>We are a group of students from the program Hola Code, this is a project that shows our desire to help returnees and people in the same situations we were once in. A group of 4 students composed by Alejandro Rodriguez, Eduardo Urrutia, Abimael
          Hernandez and Gerardo Nava. The best advice that I can give you is keep moving forward. You have already won in this life, because you are the only one who can be you. And that's the way it's supposed to be. Jesse</p>
        <div className="body"></div>
    </div>
)
}
};

export default Dbox
