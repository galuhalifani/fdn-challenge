import footer from '../assets/footer.jpg'

export default function Footer() {
    return (
        <div>

        {/* TOP BRANDS */}
        <section id="brands" className="cards-section">
          <h6 style={{fontWeight: 'bold'}}>Top Brands</h6>
          <div className="d-flex justify-content-between">
            <p style={{fontSize: '14px', color: 'grey'}}>We all know and love</p>
            <p style={{fontSize: '14px', color: 'red'}}>See More  &gt; </p>
          </div>
          <div id="brand-row" className="d-flex justify-content-between">
              {
                  [...Array(6)].map((e, i) =>   
                      <img src={require(`../assets/brand-${i+1}.jpg`).default} style={{height: '55px'}} />                  
                  )
              }
          </div>
        </section>

        {/* CLOSING */}
        <section id="closing" className="cards-section">
          <h6 style={{fontSize: '16px', fontWeight: 'bold'}}>Female Daily - Find everything you want to know about beauty on Female Daily</h6>
          <p style={{fontSize: '16px', marginBottom: 'unset'}}>Product Reviews, Tips &amp; Tricks, Expert and Consumer Opinions, Beauty Tutorials, Discussions, Beauty Workshops, anything!</p>
          <p style={{fontSize: '16px', marginTop: 'unset'}}>We are here to be your friendly solution to all things beauty, inside and out!</p>
        </section>
        <hr />

        {/* FOOTER */}
        <div id="footer" style={{marginBottom: '2%'}}>
          <img src={footer} style={{objectFit: 'contain'}} />
        </div>

        {/* FOOTER BANNER */}
        <section id="footer-banner" className="ads-banner">
          <div id="top-frame" className="top-bottom-frame">Bottom Frame 970x50, 468x60, 320x50</div>
        </section>
      </div>
    )
}