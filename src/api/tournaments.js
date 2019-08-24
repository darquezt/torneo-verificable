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
  return axios.get(`http://localhost:8000/torneo?id=${tournamentId}`)
}

const enrollTeam = ({ idtorneo, nombre_equipo }) => {
  const payload = {
      id_torneo: idtorneo,
      nombre_equipo: nombre_equipo,
    };

  return axios.post(`http://localhost:8000/inscribir`, payload)
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
