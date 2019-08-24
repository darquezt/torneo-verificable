import moment from 'moment'

const createTournament = ({ name, totalTeams, description, raffleDate, raffleTime }) => {
  return {
    data: {
      tournament_id: 1,
    },
  }
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
