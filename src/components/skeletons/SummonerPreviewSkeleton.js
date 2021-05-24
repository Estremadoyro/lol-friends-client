import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import "../../styles/SummonerPreviewSkeletonDesktop.css";
export const SummonerPreviewSkeleton = () => {
  return (
    <>
      <div className="summoner-card-desktop" id="summoner-card-desktop-id">
        <div className={`summoner-card-container summoner-border-silver shadow-lg`} id="summoner-card-id">
          <div className="row">
            <div className={`col-8 summoner-card-image-container summoner-border-right-silver`}>
              <div className="summoner-card-region-level">
                <span
                  className={`summoner-card-region-skeleton summoner-border-sm-silver summoner-region-silver`}
                  style={{ borderWidth: "3px" }}
                >
                  <SkeletonTheme color="#000">
                    <Skeleton width={50} />
                  </SkeletonTheme>
                </span>
                <span className={`summoner-card-level summoner-border-sm-silver`} style={{ borderWidth: "3px" }}>
                  <SkeletonTheme color="#000">
                    <Skeleton width={50} />
                  </SkeletonTheme>
                </span>
              </div>
              <div className="summoner-card-image-skeleton">
                <SkeletonTheme color="#80989d">
                  <Skeleton height={180} width={180} />
                </SkeletonTheme>
              </div>
              <span className={`summoner-card-name summoner-bg-silver`}>
                <SkeletonTheme color="#80989d">
                  <Skeleton width={180} height={30} />
                </SkeletonTheme>
              </span>
            </div>
            <div className={`col-3 summoner-border-right-silver`}>
              {[0, 1].map((_, index) => (
                <div className="summoner-card-info" key={index}>
                  <div className="league-shield">
                    <SkeletonTheme color="#80989d">
                      <Skeleton width={85} height={70} />
                    </SkeletonTheme>
                  </div>
                  <div className="league-queue-division">
                    <div className="league-queue">
                      <SkeletonTheme color="#000">
                        <Skeleton width={90} />
                      </SkeletonTheme>
                    </div>
                    <div className={`league-division `}>
                      {/* {queue.leagueDivision} */}
                      <SkeletonTheme color="#80989d">
                        <Skeleton />
                      </SkeletonTheme>
                    </div>
                  </div>
                  <div className="league-stats">
                    {/* {/* <SummonerPreviewWinrate winrate={queue.winRate} /> */}
                    <div className={`league-winrate summoner-winrate-gray`}>
                      <Skeleton width={66} height={30} />
                    </div>
                    {/* <SummonerPreviewCardLP leaguePoints={queue.leaguePoints} promos={queue.promos} /> */}
                    <div className="league-lp">
                      <SkeletonTheme color="#000">
                        <Skeleton width={70} height={20} />
                      </SkeletonTheme>
                    </div>
                  </div>
                  <div className="league-bar-container">
                    {/* <SummonerPreviewCardWinLossBar wins={queue.wins} losses={queue.losses} winrate={queue.winRate} /> */}
                    <div className="league-win-loss-bar">
                      <div className="league-wins-skeleton" style={{ width: "50%" }}>
                        <SkeletonTheme color="rgba(68, 168, 235, 1)">
                          <Skeleton />
                        </SkeletonTheme>
                      </div>
                      <div className="league-losses-skeleton" style={{ width: "50%" }}>
                        <SkeletonTheme color="rgba(255, 129, 155, 1)">
                          <Skeleton />
                        </SkeletonTheme>
                      </div>
                    </div>
                    <Skeleton />
                  </div>
                </div>
              ))}
            </div>
            <div className="col-1 summoner-card-mastery">
              {[0, 1, 2, 3].map((_, index) => (
                <div className="summoner-card-mastery-champion" key={index}>
                  <div className="champion-icon-skeleton">
                    <SkeletonTheme color="#80989d">
                      <Skeleton circle={true} height={50} />
                    </SkeletonTheme>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
