import Layout from "../components/Layout";
import { COLORS } from "../constants";

const Index = () => (
  <Layout>
    <h1>CHIC AUTHENTIQUE</h1>
    <img src="/stock/two-people-lying-on-floor-slide@2x.jpg" />
    <style jsx>{`
      h1 {
        color: ${COLORS.GRAY};
        font-family: "Fira Sans", "Kohinoor Devanagari", "Trebuchet MS",
          sans-serif;
        font-weight: 400;
        font-size: 44px;
      }
      img {
        max-width: 100%;
      }
    `}</style>
  </Layout>
);

export default Index;
