import React from 'react'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      latitude: null,
      longitude: null,
      season: null,
      date: null,
      icon: null,
      errorMessage: null
    }
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
          date: currentDate.toLocaleDateString(),
          icon: seasonIcon
        })
      },
      (error) => {
        this.setState({
          errorMessage: "Tente novamente mais tarde"
        })
      }
    )
  }

  // componentDidMount() {
  //   this.getLocation()
  // }

  render() {
    return (
      <div className="container border mt-4 text-center">
        <div className="row">
          <div className="col-12">
            <div className="justify-content-center d-flex">
              <i className="fa-hippo fas fa-4x" />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-lg-6 col xxl-4">
            <div className="card">
              <div className="card-body">
                <div
                  className="d-flex align-items-center border rounded mb-2"
                  style={{ height: '6rem' }}>
                  <i className={`fas fa-5x ${this.state.icon}`} />
                  <p className="w-75 ms-3 text-center fs-1">
                    {this.state.season}
                  </p>
                </div>
                <div>
                  <p className="text-center">
                    {
                      this.state.latitude ?
                        `Coordenadas: ${this.state.latitude}, ${this.state.longitude}. Data: ${this.state.date}` :
                        this.state.errorMessage ?
                          `${this.state.errorMessage}` :
                          "Clique no botão para saber a sua estação"
                    }
                  </p>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn btn-outline-primary w-100 mt-2"
                    onClick={() => this.getLocation()}>
                    Qual a minha estação?
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App