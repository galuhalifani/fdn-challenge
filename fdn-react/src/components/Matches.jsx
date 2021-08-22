import matches from '../data/matches.json'

export default function Matches() {
    // console.log(matches, 'MATCHES')

    return (
        <section id="matches">
            <div className="matches d-flex" style={{justifyContent: 'flex-start', alignItems: 'flex-end'}}>
            <img className="matches-banner" src={require("../assets/matches.jpg").default} alt="match banner"/>

            <div id="matches-row" className="row">

            {
                matches.map((match, index) => 
                    <div id="matches-col" key={index} className="col-sm-3 p-2" style={{marginRight: '15px', width: '26%'}}>
                        <div className="card h-100" style={{borderRadius: '15px'}}>
                            <img src={require(`../assets/matches-${index+1}.jpg`).default} className="card-img-top" alt="match item" />
                            <div className="card-body">
                                <p style={{color: '#da284f', fontWeight: 'bold'}}>Match Skin Type</p>
                                <div className="card-rating d-flex" style={{width: '80%'}}>
                                <p className="rating">{match.rating}</p>

                                {
                                [...Array(Math.floor(match.rating))].map((e, i) => 
                                    <div className="stars d-flex" key={i}>
                                        <i style={{color: '#da284f', fontSize: '11px'}} className="fas fa-star" />
                                    </div>
                                )
                                }

                                {
                                [...Array(5 - Math.floor(match.rating))].map((e, i) => 
                                    <div className="stars d-flex" key={i}>
                                        <i style={{color: 'lightgray', fontSize: '11px'}} className="fas fa-star" />
                                    </div>
                                )
                                }

                                <p className="no-of-review">(7)</p>
                                </div>
                                <h5 className="card-title">{match.title}</h5>
                                <p className="card-text">{match.description}</p>
                                <p className="sub-text">{match.variant}</p>
                            </div>
                        </div>
                    </div>                
                )
            }


            </div>

            </div>
        </section>
    )
}