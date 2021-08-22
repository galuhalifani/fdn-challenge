export default function Groups() {
    return (
        <section id="popular-groups" className="cards-section">
            <h6 style={{fontWeight: 'bold'}}>Popular Groups</h6>
            <div className="d-flex justify-content-between">
                <p style={{fontSize: '14px', color: 'grey'}}>Where the beauty TALK are</p>
                <p style={{fontSize: '14px', color: 'red'}}>See More  &gt; </p>
            </div>

            <div id="groups-row" className="row">
                {
                    [...Array(4)].map((e, i) => 
                        <div className="col-sm-3 h-100">
                            <div className="card" style={{height: '90%', textAlign: 'center'}}>
                                <img src={require(`../assets/group-${i+1}.jpg`).default} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Embrace the Curl</h5>
                                    <img src="./assets/group-icons.jpg" className="card-img-top" style={{height: 'auto', width: '80%', marginTop: '20px', marginBottom: '15px'}} />
                                    <p className="card-text" style={{fontSize: '11px', marginTop: '5px'}}>May our curls pop and never stop!</p>
                                </div>
                            </div>
                        </div>                    
                    )
                }
            </div>
        </section>
    )
}