
export default function Film({ columns,data }) {
  return <>
  <div className='row'>
        {data.map(obj =>
            <div className="col-3">
            <div className="card">
                    <img src={obj.Poster} alt="none"/>
                    <div className="card-body">
                    <h5 className="card-title">{obj.Title}</h5>
                    <p className="card-text">Type: {obj.Type}</p>
                    <p className="card-text">Year: {obj.Year}</p>
                   </div>
            </div>
           </div>)}        
  </div> </>
  
}