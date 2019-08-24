import axios from 'axios'
import moment from 'moment'

const createTournament = ({ name, totalTeams, description, raffleTimestamp }) => {
  const payload = {
    nombre: name,
    nEquipos: totalTeams,
    descripcion: description,
    fechaSorteo: 430,
  };

  return axios.post(`http://localhost:8000/generar`, payload)
}

const getTournament = ({ tournamentId }) => {
  return {
    data: {
      nombre: 'Best torneo',
      n_equipos: 16,
      descripcion: 'This is the best tournament ever!',
      fecha_sorteo: moment(),
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
