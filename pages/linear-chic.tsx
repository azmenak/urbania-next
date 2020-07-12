import { useState } from "react";

import Layout from "../components/Layout";

import {
  dimensions,
  construction,
  installation,
  technical,
  description,
  skus,
} from "../data/linear-chic";

const LEFT_COLUMN = 240;
const RIGHT_COLUMN = 400;

const LinearChic = () => (
  <Layout>
    <div className="page-grid">
      <h2>Specs</h2>
      <h1>URBANIA Linear Chic Product Collection</h1>
      <div>
        <div className="spec-grid">
          <div className="header">Dimentions</div>
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

          <div className="header">Construction</div>
          <div>Top Layer</div>
          <div>{construction.top}</div>

          <div>Core Material</div>
          <div>{construction.core}</div>

          <div className="header">Installation</div>
          <ul>
            {installation.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="header">Technical Details</div>
          <div>Moisture Content</div>
          <div>{technical.moisture}</div>

          <div>Assembly</div>
          <div>{technical.assembly}</div>

          <div>Packaging</div>
          <div />
          <div className="packaging-header">{technical.packaging[0].label}</div>
          <div>
            {technical.packaging[0].metric} m<sup>2</sup> per box
            <br />({technical.packaging[0].imperial} ft<sup>2</sup>)
          </div>
          <div className="packaging-header">{technical.packaging[1].label}</div>
          <div>
            {technical.packaging[1].metric} m<sup>2</sup> per box
            <br />({technical.packaging[1].imperial} ft<sup>2</sup>)
          </div>
        </div>
      </div>
      <div>
        {description}

        <h2>Available Colours</h2>
        {skus.map((sku) => (
          <LinearChicColor key={sku.id} {...sku} />
        ))}
      </div>
    </div>
    <style jsx>{`
      .page-grid {
        display: grid;
        grid-template-columns: minmax(${LEFT_COLUMN}px, min-content) minmax(
            ${RIGHT_COLUMN}px,
            max-content
          );
        grid-column-gap: 2rem;
      }

      h2 {
        align-self: flex-end;
        font-weight: 100;
      }

      h1 {
        font-weight: 100;
      }

      @media (max-width: ${LEFT_COLUMN + RIGHT_COLUMN + 16 + 70}px) {
        .page-grid {
          display: block;
        }

        h2 {
          display: none;
        }
      }

      .spec-grid {
        display: grid;
        grid-template-columns: auto auto;
        grid-column-gap: 1rem;
        grid-row-gap: 0.5rem;
      }

      .spec-grid .header {
        grid-column: 1/-1;
        margin-top: 1rem;
        color: #bf824d;
        text-transform: uppercase;
        font-weight: 600;
      }

      ul {
        padding-inline-start: 1rem;
        margin: 0;
        grid-column: 1/-1;
      }

      .packaging-header {
        padding-left: 1rem;
        padding-top: 4px;
      }
    `}</style>
  </Layout>
);

const LinearChicColor: React.FC<typeof skus[0]> = (sku) => {
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
            <img src={`/linear-chic/${sku.id}-banner@2x.jpg`} />
          </div>
          <div className="banner">
            <p className="banner-text">{sku.name}</p>
          </div>
        </div>

        <div className="details">
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
          <img src={`/linear-chic/${sku.id}-large@2x.jpg`} />
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
          max-width: 100%;
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

export default LinearChic;
