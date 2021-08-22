import {useSelector} from 'react-redux'

export default function Articles() {
    const select = useSelector
    const articles = select(state => state.latestArticles)

    // first letter of article author to be changed to capital letter
    articles.map(article => {
        let author = `${article.author[0].toUpperCase()}${article.author.substring(1)}`
        return article.author = author
    })

    return (
        <section id="latest-articles" className="cards-section">
        <h6 style={{fontWeight: 'bold'}}>Latest Articles</h6>
        <div className="d-flex justify-content-between">
          <p style={{fontSize: '14px', color: 'grey'}}>So you can make better purchase decision</p>
          <p style={{fontSize: '14px', color: 'red'}}>See More  &gt; </p>
        </div>
        <div id="articles-row" className="row" style={{justifyContent: 'unset'}}>
            {
                articles.map((article, index) => 
                    <div id="articles-col" key={index} className="col-sm-4 p-3" style={{paddingBottom: 'unset!important'}}>
                        <div className="card h-100" style={{borderRadius: '15px'}}>
                        <img src={require(`../assets/article-${index+1}.jpg`).default} className="card-img-top card-img-article" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{article.title}</h5>
                            <p className="sub-text">{article.author} | {article.published_at}</p>
                        </div>
                        </div>
                    </div>                
                )
            }

        </div>
        </section>
    )
}