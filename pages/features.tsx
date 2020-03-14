import Layout from "../components/Layout";

import { description, features } from "../data/features";

const Features = () => (
  <Layout>
    <h1>Product Features</h1>
    {description}
    <div className="features">
      {features.map(feature => (
        <div className="feature" key={feature.img}>
          <div className="img-wrapper">
            <img src={`/features/${feature.img}-feature@2x.png`} />
          </div>
          <p>{feature.body}</p>
        </div>
      ))}
    </div>
    <style jsx>{`
      .features {
        margin-top: 4rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(min(20rem, 100%), 1fr));
        grid-gap: 2rem;
      }

      .img-wrapper {
        display: flex;
        justify-content: center;
      }

      .feature img {
        height: 60px;
      }
    `}</style>
  </Layout>
);

export default Features;
