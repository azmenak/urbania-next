import Layout from "../components/Layout";

import {
  dimensions,
  construction,
  installation,
  technical,
  description
} from "../data/sublime";

const Sublime = () => (
  <Layout>
    <p>Sublime Page</p>
    <h2>Specs</h2>
    <dl>
      <dt>Dimentions</dt>
      <dd>
        <div className="grid">
          <div>Width</div>
          <div>
            {dimensions.width.metric} ({dimensions.width.imperial})
          </div>
          <div>Length</div>
          <div>
            {dimensions.length.metric} ({dimensions.length.imperial})
          </div>
          <div>Thickness</div>
          <div>
            {dimensions.thickness.metric} ({dimensions.thickness.imperial})
          </div>
        </div>
      </dd>

      <dt>Construction</dt>
      <dd>
        <div className="grid">
          <div>Top Layer</div>
          <div>{construction.top}</div>

          <div>Core Material</div>
          <div>{construction.core}</div>
        </div>
      </dd>

      <dt>Installation</dt>
      <dd>
        <ul>
          {installation.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </dd>

      <dt>Technical Details</dt>
      <dd>
        <div className="grid">
          <div>Moisture Content</div>
          <div>{technical.moisture}</div>

          <div>Assembly</div>
          <div>{technical.assembly}</div>

          <div>Packaging</div>
          <div>
            {technical.packaging.metric} m<sup>2</sup> per box
            <br />({technical.packaging.imperial} ft<sup>2</sup>)
          </div>
        </div>
      </dd>
    </dl>
    <div>
      <h1>URBANIA Sublime Product Collection</h1>
      {description}
    </div>
    <style jsx>{`
      .grid {
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 1rem;
      }
    `}</style>
  </Layout>
);

export default Sublime;
