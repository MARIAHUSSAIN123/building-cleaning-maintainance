import "./ClientsHero.css";
import { ArrowRight } from "lucide-react";
import hero from "../../assets/clean4.jpg";

export default function ClientsHero() {
  return (
    <section className="clientsHero">
      <img src={hero} alt="" className="heroImage" />

      <div className="heroOverlay"></div>

      <div className="heroContent">
        <span>Trusted Since 2008</span>

        <h1>
          Clients &
          <br />
          Partners
        </h1>

        <p>
          Building long-term partnerships through exceptional cleaning,
          maintenance, and facility management solutions.
        </p>

        <button>
          Become a Partner
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}