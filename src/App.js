import React from 'react';
import './App.css';
import Button from "./components/Button";
import bag1 from './assets/bag_1.png';
import bag2 from './assets/bag_2.png';
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';
import Product from "./components/Product";
import brand from './assets/brand.png';
import designers from './assets/our_story.png';
import Tile from './components/Tile';

function App() {

  return (
      <>
        <h1>Handbags & Purses</h1>
        <nav>
          <Button
            unclickable={false}
            buttonText="to the collection!"
          />
          <Button
              unclickable={false}
              buttonText="shop all bags"
          />
          <Button
              unclickable={true}
              buttonText="pre-orders"
          />
        </nav>
          <main>
              <Product
                bagLabel="Best seller"
                bagImage={bag1}
                bagTitle="The handy bag"
                bagPrice="€400,-"
              />
              <Product
                  bagLabel="Best seller"
                  bagImage={bag2}
                  bagTitle="The stylish bag"
                  bagPrice="€250,-"
              />
              <Product
                  bagLabel="New collection"
                  bagImage={bag3}
                  bagTitle="The simple bag"
                  bagPrice="€300,-"
              />
              <Product
                  bagLabel="New collection"
                  bagImage={bag4}
                  bagTitle="The trendy bag"
                  bagPrice="€150,-"
              />
          </main>
          <footer>
              <Tile title="The brand">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, sint.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, sint.</p>"
              </Tile>
              <Tile image={brand} imageDescription="the brand merchandise" />
              <Tile image={designers} imageDescription="The designers" />
              <Tile title="Our Story">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aliquid animi asperiores aspernatur dolorum eligendi eos et inventore minus molestias, nam, natus nobis non porro quaerat quis ratione voluptatibus.</p>
              </Tile>
          </footer>
      </>
  );
}

export default App;



