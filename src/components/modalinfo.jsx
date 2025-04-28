const ModalInfo = ({data, close}) => {
    return(
        <div style={{position: "fixed", left: "50%", top: "35%", transform: "translate(-50%, -35%) ", background: "black", color: "white", zIndex: "999" }}>
            <button onClick={close}>X</button>
            <img src={data.image} alt={data.name} />
            <h1><strong>Name: </strong>{data.name}</h1>
            <p><strong>Status: </strong>{data.status}</p>
            <p><strong>Espécies: </strong>{data.species}</p>
            <p><strong>Tipo: </strong>{data.type}</p>
            <p><strong>Origin: </strong>{data.origin.name}</p>
            <p><strong>location: </strong>{data.location.name}</p>
            <p><strong>Created: </strong>{new Date(data.created).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric"
            })}</p>
        </div>
    )
}

export default ModalInfo