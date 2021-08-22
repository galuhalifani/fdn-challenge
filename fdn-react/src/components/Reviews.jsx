import {useSelector} from 'react-redux'
import {useState} from 'react'

export default function Reviews() {
    const [page, setPage] = useState(1)
    const select = useSelector
    const reviews = select(state => state.latestReviews)
    
    // pagination, split reviews into chunks
    let allReviews = []
    let pageCap = 2
    for (let i = 0; i < reviews.length; i+=pageCap) {
        console.log('PUSH')
        allReviews.push(reviews.slice(i, i+pageCap))
    }

    // console.log(allReviews, 'allReviews')
    // console.log(reviews, 'reviews')

    function changePage(e, newPage) {
        e.preventDefault()
        setPage(newPage)
    }

    function nextPage() {
        if (page < allReviews.length) {
            setPage(page + 1)
        }
    }

    function prevPage() {
        if (page > 1) {
            setPage(page - 1)
        }
    }

    return (
        <section id="latest-reviews" className="cards-section" style={{marginTop: 'unset'}}>
        <h6 style={{fontWeight: 'bold'}}>Latest Reviews</h6>
        <div className="d-flex justify-content-between">
          <div style={{width: '65%'}}>
            <div className="d-flex justify-content-between">
              <p style={{fontSize: '14px', color: 'grey'}}>So you can make better purchase decision</p>
              <p style={{fontSize: '14px', color: 'red'}}>See More  &gt; </p>
            </div>

            { 
                reviews.length > 1 ?
                <>
                <div id="latest-reviews-row" className="row">

                {
                    allReviews[page-1].map((review, index) => 
                        <div id="reviews-col" key={index} className="col-sm-6" style={{paddingTop: '0.5rem!important'}}>
                            <div className="card" style={{borderRadius: '15px'}}>
                            <div style={{margin: '0 auto', width: '90%', marginBottom: '10px'}}>
                                <div className="d-flex" style={{alignItems: 'center', marginTop: '15px'}}>
                                <img src={review.product.image} className="card-img-top card-img-reviews" alt="..." />
                                <div>
                                    <p style={{fontSize: '16px'}}><b>{review.product.name}</b></p>
                                    <p style={{fontSize: '14px'}}>{review.product.desc}</p>  
                                </div>
                                </div>
                                <hr style={{marginTop: '0.5rem', marginBottom: '1rem'}} />
                                <div className="card-body" style={{padding: 'unset', marginBottom: '15px'}}>
                                <div className="d-flex justify-content-between" style={{alignItems: 'center'}}>
                                    <div className="d-flex" style={{marginBottom: '10px'}}>

                                    {
                                        [...Array(Math.floor(review.star))].map((e, i) => 
                                            <i style={{color: '#da284f', fontSize: '11px'}} key={i} className="fas fa-star" />
                                        )
                                    }

                                    {
                                        [...Array(5 - Math.floor(review.star))].map((e, i) => 
                                            <i style={{color: 'lightgray', fontSize: '11px'}} key={i} className="fas fa-star" />
                                        )
                                    }

                                    </div>
                                    <p style={{color: 'lightgray'}}>2 hours ago</p>
                                </div>
                                <p id="review-text" className="sub-text">{review.comment}</p>
                                </div>
                            </div>
                            </div>
                            <div style={{textAlign: 'center', marginTop: '-20px', zIndex: 10, position: 'relative'}}>
                            <img src={require("../assets/reviewer.jpg").default} className="reviewer-pic" alt="..." />
                            <p style={{margin: 'unset'}}>{review.user}</p>
                            <p style={{margin: 'unset', fontSize: '12px', color: 'gray'}}>{review.profile[0]}, {review.profile[1]}, {review.profile[2]}, {review.profile[3]}</p>
                            </div>
                        </div>                    
                    )
                }

                </div>
                <div className="d-flex justify-content-between" style={{width: '25%', alignItems: 'center', margin: '0 auto', color: '#da284e5b', marginTop: '30px'}}>
                <i className="fas fa-chevron-left" style={page == 1 ? {color: '#da284e5b', cursor: 'pointer'} : {color: '#da284f', cursor: 'pointer'}} onClick={prevPage} />

                {
                    [...Array(allReviews.length)].map((e, index) => 
                        <i key={index} className="fas fa-circle" style={page == index+1 ? {color: '#da284f', fontSize: '8px', cursor: 'pointer'} : {color: '#da284e5b', cursor: 'pointer', fontSize: '8px'}} onClick={(e) => changePage(e, index+1)}/>               
                    )
                }
                <i className="fas fa-chevron-right" style={page == allReviews.length ? {color: '#da284e5b', cursor: 'pointer'} : {color: '#da284f', cursor: 'pointer'}} onClick={nextPage}/>
                </div>
                
            </>
            :
            null
            }

          </div>
          <div style={{width: '30%'}}>
            <div className="card h-100" style={{border: 'unset'}}>
              <div className="card-body" style={{paddingRight: 'unset'}}>
                <div id="mr" className="review-ads">
                  <div style={{fontSize: '26px', color: 'darkslategray'}}>MR 2<br />300x250</div>
                </div>
              </div>
            </div>
          </div>     
        </div>
      </section>
    )
}