const Child = ({data , buttonName ,eventHandl})=>{
    return(
        <div className="card-group">
            <div className="card">
              <img src={data.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.body}</p>
                <button type="button" className="btn btn-primary" onClick={()=> eventHandl(data.id)} >{buttonName}</button>
                <p className="card-text">
                  <small className="text-body-secondary">{data.author}</small>
                </p>
              </div>
            </div>
          </div>
    )
}
export default Child    