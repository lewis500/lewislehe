//@flow
import React, { Component } from "react";
import style from "./styleApp.css";

const Citation = ({ url, title, coauthor, journal, year }) => (
  <p>
    {year}&nbsp;
    <a href={url}>{title}</a>&nbsp;{coauthor}&nbsp;
    <span>{journal}</span>
  </p>
);

const Vis = ({ url, imgUrl, title }) => (
  <div className={style.vis}>
  <div style={{width: "80%"}}>
    <a href={url} target="__blank">
      <div
        className={style.thumb}
        style={{
          backgroundImage: imgUrl
        }}
      />
    </a>
    </div>
    <div>{title}</div>
  </div>
);

export default class App extends Component {
  render() {
    return (
      <div className={style.main}>
        <div className={style.row}>
          <div className={style.sideBar}>
            <div className={style.image}>
              <img src="./me.jpg" />
            </div>
            <div className={style.details}>
              <div>Lewis Lehe</div>
              <div>lehe at illinois dot edu</div>
            </div>
          </div>
          <div className={style.big}>
            <div className={style.listItem}>
              <p className={style.me}>
                I'm a assistant professor in the Transportation Systems group in the department of Civil and Environmental Engineering at University of Illinois, Urbana-Champaign. I study transportation economics and engineering. I'm from
                Birmingham, Alabama.
              </p>
            </div>
            <div className={style.listItem}>
              <div className={style.listTitle}>Publications</div>
              <Citation
                journal="Transportation Research Part B"
                title="Distance-dependent congestion pricing for downtown zones"
                url="https://www.sciencedirect.com/science/article/pii/S0191261515000387"
                coauthor="(w/ Carlos Daganzo)"
                year={2015}
              />
              <Citation
                journal="Transportation Research Part B"
                title="Traffic on signalized streets"
                url="https://www.sciencedirect.com/science/article/pii/S0191261515302423"
                coauthor="(w/ Carlos Daganzo)"
                year="2016"
              />
              <Citation
                journal="Transportation Research Part B"
                title="Adaptive offsets for signalized streets"
                url="https://www.sciencedirect.com/science/article/pii/S2352146517303125"
                coauthor="(w/ Carlos Daganzo & Juan Argote-Cabanero)"
                year="2017"
              />
              <Citation
                journal="Journal of Transport and Land Use"
                title="Feedback and the use of land for parking"
                url="https://www.jtlu.org/index.php/jtlu/article/view/835"
                coauthor=""
                year="2017"
              />
              <Citation
                journal="Economics of Transportation"
                title="Downtown tolls and the distribution of trip lengths"
                url="https://www.sciencedirect.com/science/article/pii/S2212012217300679"
                coauthor=""
                year="2017"
              />
            </div>
            <div className={style.listItem}>
              <div className={style.listTitle}>In-progress research</div>
              <p>Downtown congestion pricing in practice</p>
              <p>Downtown congestion pricing and equity</p>
              <p>
                How minimum parking requirements make housing more expensive
                (forthcoming at&nbsp;
                <span>Journal of Transport and Land Use</span>)
              </p>
              <p>Driver earnings and taxi medallion values</p>
            </div>

            <div className={style.listItem}>
              <div className={style.listTitle}>Visualizations</div>
              <div className={style.visRow}>
                <Vis
                  url="https://ww2.kqed.org/lowdown/2013/11/12/traffic-waves/"
                  imgUrl="url(./thumbs/waves.png)"
                  title="Traffic Waves"
                />
                <Vis
                  url="http://setosa.io/bus"
                  imgUrl="url(./thumbs/bus.png)"
                  title="Bus Bunching"
                />
              </div>
              <div className={style.visRow}>
                <Vis
                  url="http://setosa.io/blog/2014/09/02/gridlock/"
                  imgUrl="url(./thumbs/gridlock.png)"
                  title="Gridlock vs. Bottlenecks"
                />
                <Vis
                  url="http://lewis500.github.io/macro"
                  imgUrl="url(./thumbs/fed.png)"
                  title="Federal Reserve"
                />
              </div>
              <div className={style.visRow}>
                <Vis
                  url="http://lewis500.github.io/diffeq/"
                  imgUrl="url(./thumbs/odes.png)"
                  title="Differential Equations"
                />
                <Vis
                  url="http://lewis500.github.io/socialsecurity"
                  imgUrl="url(./thumbs/ss.png)"
                  title="Social Security"
                />
              </div>
            </div>
            <div className={style.listItem}>
              <div className={style.listTitle}>Education</div>
              <p>2010 B.S. Mathematics-Economics, U. Pittsburgh</p>
              <p>2012 M.A. Transport Economics, U. Leeds</p>
              <p>2013 M.S. Civil & Environmental Engineering, UC Berkeley</p>
              <p>2016 Ph.D. Civil & Environmental Engineering, UC Berkeley</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
