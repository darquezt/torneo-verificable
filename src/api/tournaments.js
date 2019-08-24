import axios from 'axios'
import moment from 'moment'

const createTournament = ({ name, totalTeams, description, raffleTimestamp }) => {
  const payload = {
    nombre: name,
    nEquipos: totalTeams,
    descripcion: description,
    fechaSorteo: raffleTimestamp,
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
  return axios.get(`http://localhost:8000/grupos?id=${tournamentId}`)
}

const verifyTournament = ({idPulso, datosIni}) => {
  return axios.get(`http://127.0.0.1:8000/verificar?id_pulso=${idPulso}&datos_iniciales=${datosIni}`)
}

const sortTournament = ({ tournamentId }) => {
  return axios.post(
    'http://localhost:8000/sortear',
    {
      id: tournamentId,
    },
  )
}

export default {
  getTournament,
  createTournament,
  enrollTeam,
  getResults,
  verifyTournament,
  sortTournament,
}
