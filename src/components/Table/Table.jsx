import React from 'react';
import './table.css';
import PropTypes from 'prop-types';

export const Table = ({ players }) => (
  <div>
    <table>
      <thead>
        <tr>
          <td className="table__head">Athlete</td>
          <td className="table__head">Age</td>
          <td className="table__head">Country</td>
          <td className="table__head">Date</td>
          <td className="table__head">Sport</td>
          <td className="table__head">Gold</td>
          <td className="table__head">Silver</td>
          <td className="table__head">Bronze</td>
          <td className="table__head">Total</td>
        </tr>
      </thead>
      <tbody>
        {
          players.map(player => (
            <tr key={Math.random()}>
              <td className="table__column">{player.athlete}</td>
              <td className="table__column">{player.age}</td>
              <td className="table__column">{player.country}</td>
              <td className="table__column">{player.date}</td>
              <td className="table__column">{player.sport}</td>
              <td className="table__column">{player.gold}</td>
              <td className="table__column">{player.silver}</td>
              <td className="table__column">{player.bronze}</td>
              <td className="table__column">{player.total}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
    )
  </div>
);

Table.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      athlete: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      country: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      sport: PropTypes.string.isRequired,
      gold: PropTypes.number.isRequired,
      silver: PropTypes.number.isRequired,
      bronze: PropTypes.number.isRequired,
      total: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
