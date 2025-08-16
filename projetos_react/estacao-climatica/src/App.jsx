import React from 'react'
import Hippo from './Hippo'
import EstacaoClimatica from './EstacaoClimatica'
import Loading from './Loading'

class App extends React.Component {

  state = {
    latitude: null,
    longitude: null,
    season: null,
    icon: null,
    errorMessage: null
  }

  constructor(props) {
    super(props)
    this.state = {
      latitude: null,
      longitude: null,
      season: null,
      icon: null,
      errorMessage: null
    }
    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  seasons = {
    SUMMER: {
      icon: "fa-sun",
      name: "Verão"
    },
    WINTER: {
      icon: "fa-snowflake",
      name: "Inverno"
    },
    AUTUMN: {
      icon: "fa-leaf",
      name: "Outono"
    },
    FALL: {
      icon: "fa-fan",
      name: "Primavera"
    }
  }

  getSeason = (date, latitude) => {
    const currentYear = date.getFullYear()

    const date1 = new Date(currentYear, 5, 21)
    const date2 = new Date(currentYear, 8, 24)
    const date3 = new Date(currentYear, 11, 22)
    const date4 = new Date(currentYear, 2, 21)

    const isSouth = latitude < 0

    if (date >= date1 && date < date2) {
      return isSouth ? this.seasons.WINTER : this.seasons.SUMMER
    }
    if (date >= date2 && date < date3) {
      return isSouth ? this.seasons.FALL : this.seasons.AUTUMN
    }
    if (date >= date3 || date < date4) {
      return isSouth ? this.seasons.SUMMER : this.seasons.WINTER
    }
    return isSouth ? this.seasons.AUTUMN : this.seasons.FALL
  }

  getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const currentDate = new Date()
        const currentSeason = this.getSeason(currentDate, position.coords.latitude)
        const seasonIcon = currentSeason.icon

        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          season: currentSeason.name,
          icon: seasonIcon
        })
      },
      (error) => {
        this.setState({
          errorMessage: 'Tente novamente mais tarde'
        })
      }
    )
  }

  componentDidMount() {
    this.getLocation()
  }

  render() {
    return (
      <div className='container border mt-4 text-center'>
        <div className='row'>
          <div className='col-12'>
            <div className='justify-content-center d-flex'>
              <Hippo />
            </div>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-sm-12 col-lg-6 col xxl-4'>
            {
              (!this.state.latitude && !this.state.errorMessage) ?
                <Loading message='Por favor, responda à solicitação de localização'/>
                :
                this.state.errorMessage ?
                  <p className='border rounded p-2 fs-1 text-center'>
                    É preciso dar permissão para acesso à localização
                  </p>
                  :
                  <EstacaoClimatica
                    latitude={this.state.latitude}
                    longitude={this.state.longitude}
                    season={this.state.season}
                    icon={this.state.icon}
                    errorMessage={this.state.errorMessage}
                    getLocation={this.getLocation} />
            }
          </div>
        </div>
      </div>
    )
  }
}

export default App