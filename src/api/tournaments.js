import axios from 'axios'
import moment from 'moment'

const createTournament = ({ name, totalTeams, description, raffleTimestamp }) => {
  const payload = {
      nombre: name,
      max_equipos: totalTeams,
      descripcion: description,
      timestamp: raffleTimestamp,
    };

  return axios.post(`http://localhost:8000/generar`, {payload})
}

const getTournament = ({ tournamentId }) => {
  return {
    data: {
      nombre: 'Best torneo',
      n_equipos: 16,
      descripcion: 'This is the best tournament ever!',
      fecha_sorrteo: moment(),
    },
  }
}

const enrollTeam = ({ name }) => {
  return {
    data: {
      team_id: 2,
    },
  }
}

const getResults = ({ tournamentId }) => {
  return {
    data: {

    },
  }
}

const verifyTournament = ({}) => {
  return {
    data: {},
  }
}

export default {
  getTournament,
  createTournament,
  enrollTeam,
  getResults,
  verifyTournament,
}
