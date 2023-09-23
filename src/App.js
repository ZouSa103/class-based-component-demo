import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Dennis MacAlistair Ritchie',
        bio: 'Dennis Ritchie (1941-2011) was a legendary computer scientist and software developer known for his significant contributions to the field of computer science. He is best known for creating the C programming language and for his instrumental role in the development of the Unix operating system.',
        imgSrc: 'https://th.bing.com/th/id/R.f6627d646752c61ad2be73ed98fe4f7e?rik=9Y3k4%2fh45gjdzQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-twoKroRsv5Q%2fTpbpeFAvMCI%2fAAAAAAAADIo%2fASllbSP4uYY%2fs400%2fdennis-ritchie.jpg&ehk=aEkRDmgpQnaaxKfcQAV23MzIKOEQuRxxeTz0xmNdAf8%3d&risl=&pid=ImgRaw&r=0',
        profession: 'Software Developer and Computer Scientist',
      },
      show: false,
      timeSinceMount: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1,
      }));
    }, 1000); // Mettre à jour toutes les secondes (1000 millisecondes)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { person, show, timeSinceMount } = this.state;
<p>Time since mount: {timeSinceMount} seconds</p>

    return (
      <div>
        <button className="toggle-button" onClick={this.toggleShow}>
          Toggle Profile
        </button>
        {show && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Time since mount: {timeSinceMount} seconds</p>
      </div>
    );
  }
}

export default App;
