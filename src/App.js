import React from 'react';
import '../node_modules/bulma/css/bulma.min.css';
import './App.css';
import { Table } from './components/Table';

import { getAll } from './api/api';

class App extends React.Component {
  state = {
    players: [],
    year: 2000,
  }

  componentDidUpdate() {
    getAll()
      .then(people => (
        this.setState({
          // eslint-disable-next-line
          players: people.filter(person => person.year === this.state.year),
        })));
  }

  render() {
    const { players } = this.state;

    return (
      <div className="container">
        <h1 className="title is-2">Olympic Players</h1>
        <h2 className="title is-3">Year</h2>
        <div className="buttons">
          <button
            type="button"
            className="button is-primary"
            onClick={() => this.setState({ year: 2000 })
            }
          >
            2000
          </button>
          <button
            type="button"
            className="button is-primary"
            onClick={() => this.setState({ year: 2002 })}
          >
            2002
          </button>
          <button
            type="button"
            className="button is-primary"
            onClick={() => this.setState({ year: 2004 })}
          >
            2004
          </button>
          <button
            type="button"
            className="button is-primary"
            onClick={() => this.setState({ year: 2006 })}
          >
            2006
          </button>
          <button
            type="button"
            className="button is-primary"
            onClick={() => this.setState({ year: 2008 })}
          >
            2008
          </button>
          <button
            type="button"
            className="button is-primary"
            onClick={() => this.setState({ year: 2010 })}
          >
            2010
          </button>
          <button
            type="button"
            className="button is-primary"
            onClick={() => this.setState({ year: 2012 })}
          >
            2012
          </button>
        </div>
        {players.length > 0
        && <Table players={players} />}
      </div>
    );
  }
}

export default App;
