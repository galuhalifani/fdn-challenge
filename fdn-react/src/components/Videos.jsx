import video1 from '../assets/video-1.jpg'
import video2 from '../assets/video-2.jpg'
import video3 from '../assets/video-3.jpg'

export default function Videos() {
    return (
        <section id="latest-videos" className="cards-section">
            <h6 style={{fontWeight: 'bold'}}>Latest Videos</h6>
            <div className="d-flex justify-content-between">
            <p style={{fontSize: '14px', color: 'grey'}}>Watch and learn, ladies</p>
            <p style={{fontSize: '14px', color: 'red'}}>See More  &gt; </p>
            </div>
            <div className="d-flex justify-content-between" style={{height: '400px'}}>
            <img src={video1} />
            <div className="d-flex justify-content-between" style={{flexDirection: 'column'}}>
                <img src={video2} style={{height: '48%'}} />
                <img src={video3} style={{height: '48%'}} />
            </div>
            </div>
      </section>
    )
}