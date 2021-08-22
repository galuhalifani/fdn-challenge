import {useSelector} from 'react-redux'

export default function EditorChoice() {
    const select = useSelector
    const editorCard = select(state => state.editorCard)

    // change editor name to capital first letter
    editorCard.map(card => {
        let firstCapitalName = ''

        firstCapitalName += `${card.editor[0].toUpperCase()}${card.editor.substring(1)}`
        return card.editor = firstCapitalName
    })

    // console.log(editorCard, 'editorcard')

    return (
        <section id="editors-choice" className="cards-section">
            <h6 style={{fontWeight: 'bold'}}>Editor's Choice</h6>
            <p style={{fontSize: '14px', color: 'grey'}}>Curated with love</p>
            <div id="editors-choice-row" className="row">

            {
                editorCard.map((card, index) => 
                    <div className="col p-2" key={index}>
                        <div className="editor d-flex">
                        <img src={require(`../assets/curator-${index+1}.jpg`).default} className="editor-pic" alt="..." style={{marginBottom: '-11px'}} />
                        <div className="editor-detail">
                            <p className="editor-name">{card.editor}</p>
                            <p className="editor-role">{card.role}</p>
                        </div>
                        </div>
                        <div className="card" style={{height: '90%'}}>
                        <img src={card.product.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="card-rating d-flex">
                            <p className="rating">{card.product.rating}</p>

                            {
                               [...Array(Math.floor(card.product.rating))].map((e, i) => 
                                <div className="stars d-flex" key={i}>
                                    <i style={{color: '#da284f', fontSize: '11px'}} className="fas fa-star" />
                                </div>
                               )
                            }

                            {
                               [...Array(5 - Math.floor(card.product.rating))].map((e, i) => 
                                <div className="stars d-flex" key={i}>
                                    <i style={{color: 'lightgray', fontSize: '11px'}} className="fas fa-star" />
                                </div>
                               )
                            }

                            <p className="no-of-review">(7)</p>
                            </div>
                            <h5 className="card-title">{card.product.name}</h5>
                            {/* <p className="card-text">{card.product.description}</p> */}
                            <p className="sub-text">{card.product.description}</p>
                        </div>
                        </div>
                    </div> 
                )
            }

            </div>
        </section>
    )
}