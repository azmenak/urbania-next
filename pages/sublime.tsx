import { useState } from "react";

import Layout from "../components/Layout";

import {
  dimensions,
  construction,
  installation,
  technical,
  description,
  skus,
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
          {installation.map((item) => (
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

      <h2>Available Colours</h2>
      {skus.map((sku) => (
        <SublimeColor key={sku.id} {...sku} />
      ))}
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

const SublimeColor: React.FC<typeof skus[0]> = (sku) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="sku">
        <div className="product">
          <div
            className="img-container"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <img src={`/sublime/${sku.id}-banner@2x.jpg`} />
          </div>
          <div className="banner">
            <p className="banner-text">{sku.name}</p>
          </div>
        </div>

        <div className="details">
          <p>Grade: {sku.grade}</p>
          <p>{sku.description}</p>
        </div>
      </div>
      {isOpen && (
        <div
          className="overlay"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <img src={`/sublime/${sku.id}-large@2x.jpg`} />
        </div>
      )}
      <style jsx>{`
        .sku {
          margin-bottom: 3rem;
        }

        .product {
          position: relative;
        }

        .img-container {
          max-height: 300px;
          overflow: hidden;
          cursor: pointer;
        }

        .banner {
          position: absolute;
          z-index: 1;
          bottom: 0;
          display: flex;
          justify-content: space-between;
        }

        .banner p {
          background: #fff;
          color: #333;
          padding: 0.5rem 1rem;
          margin: 1.5rem;
          font-size: 24px;
          font-weight: 300;
        }

        .img-container img {
          width: 100%;
          transform: scale(1);
          transition: transform 0.5s ease-out;
        }

        @media (hover: hover) {
          .img-container:hover img {
            transform: scale(1.1);
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }

          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .overlay {
          position: fixed;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          z-index: 1000;
          display: flex;
          justify-content: center;
          align-content: center;
        }

        .overlay img {
          animation: fade-in 0.3s ease-out;
          max-width: 100%;
        }
      `}</style>
    </>
  );
};

export default Sublime;
