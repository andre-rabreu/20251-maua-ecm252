import Busca from "./components/Busca"
import React from "react"
import env from "react-dotenv"
// import { createClient } from "pexels"
import pexelsClient from "./utils/PexelsClient"
import ListaImagens from "./components/ListaImagens"
import PexelsLogo from "./components/PexelsLogo"

export default class App extends React.Component {

  // pexelsClient = null

  state = {
    photos: []
  }

  // onSearch = (term) => {
  //   this.pexelsClient.photos.search({
  //     query: term
  //   })
  //   .then(result => this.setState({photos: result.photos}))
  // }

  onSearch = (term) => {
    pexelsClient.get("/search", {
      params: {
        query: term,
        per_page: 16
      }
    })
      .then(result => this.setState({ photos: result.data.photos }))
  }

  componentDidMount() {
    console.log(env.PEXELS_KEY)
    // this.pexelsClient = createClient(env.PEXELS_KEY)
  }

  render() {
    return (
      <div className="grid justify-content-center w-9 m-auto border-round border-1 border-200" >
        <div className="col-12">
          <PexelsLogo />
        </div>
        <div className="col-12">
          <h1>Exibir uma lista de...</h1>
        </div>
        <div className="col-12">
          <Busca onSearch={this.onSearch} />
        </div>
        <div className="col-12">
          <div className="grid">
            <ListaImagens imgStyle={"md:col-6 lg:col-4 xl:col-3"} photos={this.state.photos} />
          </div>
        </div>
      </div>
    )
  }
}