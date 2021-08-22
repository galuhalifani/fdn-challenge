import Articles from '../components/Articles'
import EditorChoice from '../components/EditorChoice'
import Groups from '../components/Groups'
import Matches from '../components/Matches'
import Reviews from '../components/Reviews'
import Trending from '../components/Trending'
import Videos from '../components/Videos'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <>
        {/* HEADER */}
        <section className="header">
          <p>SKINCARE</p>
          <p>MAKEUP</p>
          <p>BODY</p>
          <p>HAIR</p>
          <p>FRAGRANCE</p>
          <p>NAILS</p>
          <p>TOOLS</p>
          <p>BRANDS</p>
        </section>
        <hr style={{margin: 'unset', marginTop: '0.5rem'}} />

        {/* ADS BANNER */}
        <section id="ads-banner" className="ads-banner">
          <div id="top-frame" className="top-bottom-frame">Top Frame 970x50</div>
          <div id="billboard" className="big-ads">Billboard 970x250</div>
        </section>

        <EditorChoice/>
        <Matches/>

        {/* ADS BANNER 2 */}
        <section id="ads-banner-2" className="ads-banner">
          <div id="horizontal" className="big-ads">
            <div>Horizontal 970x250<br />(Internal Campaign Only)</div>
          </div>
        </section>

        <Articles />
        <Reviews />
        <Groups/>
        <Videos/>
        <Trending/>
        <Footer/>
        </>
    )
}