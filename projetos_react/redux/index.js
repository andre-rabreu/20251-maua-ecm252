const redux = require("redux")
const { createStore, combineReducers } = redux

// ---------- AÇÕES ----------

// escrever uma função criadora de ação
// ela produz uma ação que representa a criação de um novo contrato
const createContract = (name, tax) => {
    return {
        type: "CRIAR_CONTRATO",
        payload: {
            name: name,
            tax: tax
        }
    }
}

// escrever uma nova criadora de ação
// ela serve para cancelar contratos, dado um nome
const cancelContract = (name) => {
    return {
        type: "CANCELAR_CONTRATO",
        payload: {
            name: name,
        }
    }
}

// escrever a função para solicitação de cashback
// ela também é criadora de ação
const requestCashback = (name, value) => ({
    type: "SOLICITAR_CASHBACK",
    payload: {
        name: name,
        value: value
    }
})

// ---------- REDUCERS ----------

const cashbackRequestHistory = (currentCashbackRequestHistory = [], action) => {
    return action.type == "SOLICITAR_CASHBACK"
        ? [...currentCashbackRequestHistory, action.payload]
        : currentCashbackRequestHistory
}

// resolver a manipulação do caixa, usando somente operadores ternários
const register = (moneyInRegister = 0, action) => {
    return action.type == "SOLICITAR_CASHBACK"
        ? moneyInRegister - action.payload.value
        : action.type == "CRIAR_CONTRATO"
            ? moneyInRegister + action.payload.tax
            : action.type == "CANCELAR_CONTRATO"
                ? moneyInRegister + 500
                : moneyInRegister
}

// fazer o próximo reducer
const contracts = (currentContractsList = [], action) => {
    return action.type === "CRIAR_CONTRATO" 
        ? [...currentContractsList, action.payload] 
        : action.type === "CANCELAR_CONTRATO"
            ? currentContractsList.filter(contract => contract.name !== action.payload.name)
            : currentContractsList
}

const reducers = combineReducers({
    cashbackRequestHistory,
    register,
    contracts
})

const store = createStore(reducers)

// - Cria um contrato para José
// - Cria um contrato para Maria
// - Solicita cashback de 10 para Maria
// - Solicita cashback de 20 para José
// - Cancela o contrato de Maria
// Detalhe: após cada atividade, exibir o estado atual

store.dispatch(createContract("José", 150))
console.log(store.getState())
store.dispatch(createContract("Maria", 200))
console.log(store.getState())
store.dispatch(requestCashback("Maria", 20))
console.log(store.getState())
store.dispatch(requestCashback("José", 10))
console.log(store.getState())
store.dispatch(cancelContract("Maria"))
console.log(store.getState())

// Alternativa: método subscribe
/*store.subscribe(() => console.log(`Estado: ${JSON.stringify(store.getState(), null, 2)}`))
store.dispatch(createContract("José", 150))
store.dispatch(createContract("Maria", 200))
store.dispatch(requestCashback("Maria", 20))
store.dispatch(requestCashback("José", 10))
store.dispatch(cancelContract("Maria"))*/

