import Pedido from "./Pedido"

const App = () => {
  return (
    <div className="container border mt-2">
      <div className="row">

        <div className="col-sm-12 col-lg-6 col-xxl-3">
          <Pedido
            data="22/02/2022"
            title="SSD"
            description="Um SSD de 512 GB"
            icon="fa-solid fa-hdd fa-2x"
          />
        </div>

        <div className="col-sm-12 col-lg-6 col-xxl-3">
          <Pedido
            data="23/02/2022"
            title="Livro"
            description="Harry Potter"
            icon="fa-solid fa-book fa-2x"
          />
        </div>

        <div className="col-sm-12 col-lg-6 col-xxl-3">
          <Pedido
            data="24/02/2022"
            title="Hipopótamo"
            description="Sim, um hipopótamo :)"
            icon="fa-solid fa-hippo fa-2x"
          />
        </div>

        <div className="col-sm-12 col-lg-6 col-xxl-3">
          <Pedido
            data="25/02/2022"
            title="Boneco de neve"
            description="Um boneco de neve que balança sozinho"
            icon="fa-solid fa-snowman fa-2x fa-shake"
          />
        </div>

      </div>
      {/* <i class="fa-solid fa-hippo fa-4x fa-shake"></i> */}
    </div>
  )
}

export default App

// 900
// 1420
