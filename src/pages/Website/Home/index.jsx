/* eslint-disable jsx-a11y/anchor-is-valid */
import AuthLayout from "../../../components/layout/layout";
import homeHero from "../../../assets/images/home-hero.png";
import explore from "../../../assets/images/explore.png";
import exploreL from "../../../assets/images/explore-left.png";
import features from "../../../assets/images/features.png";
import appleStore from "../../../assets/icons/appleStore.svg";
import playStore from "../../../assets/icons/playStore.svg";
import "./style.scss";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen} from "@fortawesome/free-solid-svg-icons";
import Nav2 from "../../../components/Nav/Nav2";
import Footer from "../../../components/footer";

const Home = () => {
  return (
    <div className="home">
      <AuthLayout>
        <section className="flex hero">
          <Nav2 />
          <div className="inner">
            <div className="left textWrap">
              <h4>CONNECT WITH</h4>
              <h4 style={{marginLeft: "5rem"}}>BIRTHDAY MATES</h4>
              <h1>WORLDWIDE</h1>
              <p>
                Birthday mates allows you to celebrate with birthday mates from
                every part of the world. Come join the birthday community.
              </p>
              <div className="btn-wrap">
                <a className="store" href="#">
                  <img src={appleStore} alt="Download on applestore" />
                </a>
                <a className="store" href="#">
                  <img src={playStore} alt="Download on play store" />
                </a>
              </div>
            </div>
            <div className="right">
              <img src={homeHero} alt="" />
            </div>
          </div>
        </section>
      </AuthLayout>
      <section className="flex explore">
        <div className="inner">
          <div className="left textWrap">
            <h4>
              FInd and connect with birthday and month mates from all around the
              world
            </h4>
            <Link className="btn bg-primary clr-whiteClr" to="">
              EXPLORE!
            </Link>
          </div>
          <div className="right">
            <img src={explore} alt="explore" />
          </div>
        </div>
      </section>
      <section className="join flex">
        <div className="inner">
          <div className="left">
            <h1>
              CONNECT WITH
              <br /> BIRTHDAY MATES
              <br /> AROUND THE WORLD
            </h1>
            <Link to="" className="btn bg-whiteClr clr-primary">
              JOIN THE COMMUNITY
            </Link>
          </div>
        </div>
      </section>
      <AuthLayout>
        <section className="features flex">
          <div className="inner">
            <div className="features__wrap">
              <div className="features__card">
                <header className="clr-primary">
                  <FontAwesomeIcon icon={faPen} />
                  <h4>Post</h4>
                </header>
                <p>
                  Celebrate with your birthday mates by posting the highlights
                  of your birthday
                </p>
              </div>
              <div className="features__card">
                <header className="clr-primary">
                  <FontAwesomeIcon icon={faPen} />
                  <h4>Post</h4>
                </header>
                <p>
                  Celebrate with your birthday mates by posting the highlights
                  of your birthday
                </p>
              </div>
              <div className="features__card">
                <header className="clr-primary">
                  <FontAwesomeIcon icon={faPen} />
                  <h4>Post</h4>
                </header>
                <p>
                  Celebrate with your birthday mates by posting the highlights
                  of your birthday
                </p>
              </div>
            </div>
            <div className="features__img">
              <img src={features} alt="features" />
            </div>
          </div>
        </section>
      </AuthLayout>
      <section className="flex explore">
        <div className="inner">
          <div className="left">
            <img src={exploreL} alt="explore" />
          </div>
          <div className="right textWrap">
            <h4>
              FInd and connect with birthday and month mates from all around the
              world
            </h4>
            <Link className="btn bg-primary clr-whiteClr" to="">
              EXPLORE!
            </Link>
          </div>
        </div>
      </section>
      <section className="download">
        <div className="inner">
          <h1>Download for Android/iOS</h1>
          <div className="btn-wrap">
            <a className="store" href="#">
              <img src={appleStore} alt="Download on applestore" />
            </a>
            <a className="store" href="#">
              <img src={playStore} alt="Download on play store" />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
