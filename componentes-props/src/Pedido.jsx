const Pedido = (props) => {
    return (
        <div className="card">
            <div className="card-header text-muted">{props.data}</div>
            <div className="card-body d-flex">
                <div className="d-flex justify-content-center flex-column">
                    <i className={props.icon}></i>
                </div>
                <div className="flex-grow-1 py-3 ms-3">
                    <h4 className="text-center">{props.title}</h4>
                    <p className="text-center">{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Pedido