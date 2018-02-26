import React, {Component} from 'react';
import '../styles/App.css';
import '../styles/svgBackgrounds.css'

import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Paper from 'material-ui/Paper';


const buttonStyle = {
  color: "#dff9fb"
}


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '80em',
    overflowY: 'auto',
  },
};

const paperStyle = {
  height: '10em',
  width: '10em',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const tilesData = [
  {
    img: 'https://images.unsplash.com/photo-1500759285222-a95626b934cb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=15641eda0c2356f833f0c21dcfa3ddc8&auto=format&fit=crop&w=2100&q=80',
    title: 'Cuba',
    author: 'Havana',
  },
  {
    img: 'https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5f393936aef538204adbdb152665340c&auto=format&fit=crop&w=2052&q=80',
    title: 'Japan',
    author: 'Kyoto',
  },
  {
    img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9144d03989599996b0108a4fa2f32dca&auto=format&fit=crop&w=2100&q=80',
    title: 'United Arab Emirates',
    author: 'Dubai',
  },
  {
    img: 'https://images.unsplash.com/photo-1468082547792-d37c6c74003e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=04607b80e98457e2d96649099f3d7581&auto=format&fit=crop&w=2110&q=80',
    title: 'Thailand',
    author: 'Karabi',
  },
  {
    img: 'https://images.unsplash.com/photo-1467250123231-1813550b3fd5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b46e0fd78194e0502052a7e51ef453ae&auto=format&fit=crop&w=2989&q=80',
    title: 'New York',
    author: 'New York',
  },
  {
    img: 'https://images.unsplash.com/photo-1469284390178-5ff99261c5b5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1862e7560412a1a52e9a5564c72eb3e9&auto=format&fit=crop&w=2104&q=80',
    title: 'Greece',
    author: 'Shipwreck Beach'}
];


class Landing extends Component {

  render() {
    return (
      <div>

      <div className="heroWelcome">
        <h1 className="heroHeading">Trendy Vacation Agency</h1>

        <h2 className="heroText">
          Bespoke heirloom sustainable airport trends. Book a tofu vexillologists or the next location where a Phish coverband wearing normcore athleisure ironicly, before they gentrify it!
        </h2>

      </div>

      <div className="callToAction circutBoard">

        <h1>Sign up today!</h1>
        <h3>
          you havent lived life until you have had vegan bacon flavored vapes on the coast of California at Montery Bay, taking your lyft to a hidden coffee shop that makes artisan coffee and disruption mediation to organic farm to table diesel engines
        </h3>
        <RaisedButton label="Sign Up" backgroundColor="#6ab04c" labelStyle={buttonStyle}/>

      </div>

      <div className="about">
        <div className="aboutContainer">

          <h1 id= "aboutHeading"> Your Humble Accommodations </h1>
            <section className = 'offerings'>
              <h1><span>Shaman activated charcoal</span></h1>
              <p>
                Thundercats sustainable gochujang, literally hell of schlitz plaid shaman. Affogato live-edge la croix, schlitz leggings chartreuse artisan pinterest photo booth sriracha hella kinfolk fixie godard pabst. 3 wolf moon kinfolk unicorn beard bespoke cray. Viral lo-fi thundercats waistcoat, put a bird on it mixtape blog organic deep v chicharrones tote bag cray jean shorts selfies shabby chic.</p>
            </section>


            <section className = 'offerings'>
              <h1><span>Vegan plaid letterpress</span></h1>
              <p>Shabby chic authentic chillwave single-origin coffee 3 wolf moon salvia kogi lyft narwhal before they sold out brunch coloring book. Disrupt meditation activated charcoal sriracha pour-over post-ironic, YOLO enamel pin bespoke affogato cardigan. Everyday carry normcore retro, wolf ennui fashion axe offal mlkshk roof party craft beer small batch</p>
            </section>


            <section className = 'offerings'>
              <h1><span>Four dollar toast polaroid</span></h1>
              <p>Sustainable single-origin coffee pitchfork readymade, jean shorts etsy chia +1 bicycle rights edison bulb put a bird on it man bun 3 wolf moon polaroid. Lomo air plant actually neutra selfies polaroid cronut 3 wolf moon coloring book 90's vape kickstarter readymade meggings celiac.</p>
            </section>


            <section className = 'offerings'>
              <h1><span>Ethical kickstarter whatever trust fund</span></h1>
              <p>Typewriter tofu listicle paleo fixie plaid street art iPhone succulents affogato swag offal. Four loko edison bulb synth, sustainable neutra intelligentsia waistcoat cardigan. Brooklyn unicorn narwhal organic celiac fashion axe jianbing godard pinterest bicycle rights ramps salvia migas kale chips crucifix.</p>
            </section>


        </div>



      </div>

      <div className = 'popularPlaces' style={styles.root}>
        <h1> Popular Locations </h1>
        <GridList
          cols={2}
          cellHeight={200}
          padding={1}
          style={styles.gridList}
        >
          {tilesData.map((tile) => (
            <GridTile

              key={tile.img}
              title={tile.title}
              actionIcon={
                <IconButton>
                  <StarBorder color="white" />
              </IconButton>}
              actionPosition="left"
              titlePosition="top"
              titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              cols={tile.featured ? 2 : 1}
              rows={tile.featured ? 2 : 1}
            >
              <img src={tile.img} />
            </GridTile>
          ))}
        </GridList>
      </div>


      <div className="carriers royal">
        <div className='carriersContainer'>
          <section>
            <h1> Our Carrier Parners</h1>
            <h2> Fly confidently with the most exclusive and Independent Airlines, ensuring your "You've problably never heard of them" status and that you never find your Gate</h2>
          </section>
          <ul>
            <li>

              <h1>Authentic Quinoa Hell</h1>
              <Paper id = 'AQH' style={paperStyle} zDepth={4} circle={true} />
            </li>

            <li>

              <h1>Wolf Moon Salvia</h1>
              <Paper id = 'WMS' style={paperStyle} zDepth={4} circle={true} />
            </li>



            <li>

              <h1>Put a bird on it Man Bun</h1>
              <Paper id = 'MB' style={paperStyle} zDepth={4} circle={true} />
            </li>
          </ul>
        </div>



      </div>

      <div className="contactContainer topography">
        <section>
          <ul className="contact">
            <li>
              <h3>Address</h3>
              <span>12345 Somewhere Road #654<br/>
                Nashville, TN 00000-0000<br/>
                USA</span>
            </li>
            <li>
              <h3>Email</h3>
              <span>user@untitled.tld</span>
            </li>
            <li>
              <h3>Phone</h3>
              <span>(000) 000-0000</span>
            </li>
          </ul>
        </section>
      </div>

    </div>
  );
  }

}

export default Landing;
