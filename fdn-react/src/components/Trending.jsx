import trending from '../data/trending.json'

export default function Trending() {
    return (
        <section id="trending" className="cards-section">
            <h6 style={{fontWeight: 'bold'}}>Trending This Week</h6>
            <div className="d-flex justify-content-between">
            <p style={{fontSize: '14px', color: 'grey'}}>See our weekly most reviewed products</p>
            </div>

            <div id="trending-row" className="row">
                {
                    trending.map((trend, index) => 
                        <div key={index} className="col-sm-2 p-1">
                            <div className="card h-100" style={{border: 'unset'}}>
                            <img src={require(`../assets/trending-${index+1}.jpg`).default} className="card-img-top" alt="..." />
                            <div className="card-body" style={{padding: '0.75rem', alignItems: 'center'}}>
                                <div className="card-rating-trending d-flex">
                                <p className="rating">{trend.rating}</p>

                                    {
                                        [...Array(Math.floor(trend.rating))].map((e, i) => 
                                            <div className="stars d-flex" key={i}>
                                                <i style={{color: '#da284f', fontSize: '11px'}} className="fas fa-star" />
                                            </div>
                                        )
                                    }

                                    {
                                        [...Array(5 - Math.floor(trend.rating))].map((e, i) => 
                                            <div className="stars d-flex" key={i}>
                                                <i style={{color: 'lightgray', fontSize: '11px'}} className="fas fa-star" />
                                            </div>
                                        )
                                    }

                                <p className="no-of-review">({trend.rater})</p>
                                </div>
                                <h5 className="card-title">{trend.title}</h5>
                                <p className="card-text">{trend.description}</p>
                                <p className="sub-text">{trend.variant}</p>
                            </div>
                            </div>
                        </div>                    
                    )
                }

            </div>

            <div className="d-flex justify-content-between" style={{width: '12%', alignItems: 'center', margin: '0 auto', color: '#da284e5b', marginTop: '30px'}}>
            <i className="fas fa-chevron-left" />
            <i className="fas fa-circle" style={{color: '#da284f', fontSize: '8px', marginTop: 'auto', marginBottom: 'auto'}} />
            <i className="fas fa-circle" style={{fontSize: '8px'}} />
            <i className="fas fa-chevron-right" style={{color: '#da284f'}} />
            </div>
        </section>
    )
}