import Pedido from "./Pedido"
import Cartao from "./Cartao"
import Feedback from "./Feedback"

const App = () => {
  const textoOK = "Já chegou"
  const textoNOK = "Não chegou ainda"

  const funcaoOK = () => alert("Agradecemos a confirmação")
  const funcaoNOK = () => alert("Verificaremos o ocorrido")

  const componenteFeedback = (
    <Feedback
      textoOK={textoOK}
      textoNOK={textoNOK}
      funcaoOK={funcaoOK}
      funcaoNOK={funcaoNOK}
    />
  )

  return (
    <div className="container border mt-2">
      <div className="row">

        <div className="col-sm-12 col-lg-6 col-xxl-4">
          <Cartao
            cabecalho={new Date().toDateString()}>
            <Pedido
              data="22/02/2022"
              title="SSD"
              description="Um SSD de 512 GB"
              icon="fa-solid fa-hdd fa-2x"
            />
            {componenteFeedback}
          </Cartao>
        </div>

        <div className="col-sm-12 col-lg-6 col-xxl-4">
          <Cartao
            cabecalho={new Date().toDateString()}>
            <Pedido
              data="23/02/2022"
              title="Livro"
              description="Harry Potter"
              icon="fa-solid fa-book fa-2x"
            />
            {componenteFeedback}
          </Cartao>
        </div>

        <div className="col-sm-12 col-lg-6 col-xxl-4">
          <Cartao
            cabecalho={new Date().toDateString()}>
            <Pedido
              data="24/02/2022"
              title="Hipopótamo"
              description="Sim, um hipopótamo :)"
              icon="fa-solid fa-hippo fa-2x"
            />
            {componenteFeedback}
          </Cartao>
        </div>

        <div className="col-sm-12 col-lg-6 col-xxl-4">
          <Cartao
            cabecalho={new Date().toDateString()}><Pedido
              data="25/02/2022"
              title="Boneco de neve"
              description="Um boneco de neve que balança sozinho"
              icon="fa-solid fa-snowman fa-2x fa-shake"
            />
            {componenteFeedback}
          </Cartao>
        </div>

      </div>
      {/* <i class="fa-solid fa-hippo fa-4x fa-shake"></i> */}
    </div>
  )
}

export default App

// 900
// 1420
