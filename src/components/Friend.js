import "../friend.css";
import "../App.css";
import React from "react";
import { Link } from "react-router-dom";

class friend extends React.Component {
  render() {
    return (
      <div id="content">
        <nav>
          <div className="sidebar">
            <ul className="option">
              <li>
                <span>
                  <img
                    src={process.env.PUBLIC_URL + "/img/친구.png"}
                    className="chat"
                    alt="chat"
                  />
                </span>
              </li>
              <Link to="/">
                <li>
                  <span>
                    <img
                      src={process.env.PUBLIC_URL + "/img/채팅방.png"}
                      className="chat"
                      alt="chat"
                    />
                  </span>
                </li>
              </Link>
              <li>
                <span>
                  <img
                    src={process.env.PUBLIC_URL + "/img/더보기.png"}
                    className="chat"
                    alt="chat"
                  />
                </span>
              </li>
              <li>
                <span>
                  <img
                    src={process.env.PUBLIC_URL + "/img/이모티콘.png"}
                    className="chat"
                    alt="chat"
                  />
                </span>
              </li>
              <li>
                <span>
                  <img
                    src={process.env.PUBLIC_URL + "/img/알림.png"}
                    className="chat"
                    alt="chat"
                  />
                </span>
              </li>
              <li>
                <span>
                  <img
                    src={process.env.PUBLIC_URL + "/img/설정.png"}
                    className="chat"
                    alt="chat"
                  />
                </span>
              </li>
            </ul>
          </div>
        </nav>
        {/* <!-- 헤더: 제목, 친구 찾기 버튼, 친구 추가 버튼 --> */}

        {/* <!-- 메인: 친구창 메인 내용 --> */}
        <main>
        <header>
          <h1>친구</h1>
        </header>
          {/* <!-- 나의 프로필 --> */}
          <div>
            <ul>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/pic/me.png"}
                  alt="나의프로필사진"
                />
                <div className="profile">
                  <p>김간장</p>
                  <p>상태메시지 영역</p>
                </div>
              </li>
            </ul>
          </div>
          {/* <!-- 즐겨찾기 프로필 모음--> */}
          <div>
            <div className="profile-title">
              <h2>즐겨찾기</h2>
            </div>
            <ul>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/pic/friend2.png"}
                  alt="친구2프로필사진"
                />
                <div className="profile">
                  <p>친구1</p>
                  <p></p>
                </div>
              </li>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/pic/friend2.png"}
                  alt="친구2프로필사진"
                />
                <div className="profile">
                  <p>친구2</p>
                  <p>지금 몇시니</p>
                </div>
              </li>
            </ul>
          </div>
          {/* <!-- 채널 프로필 모음--> */}
          <div>
            <div className="profile-title">
              <h2>채널</h2>
            </div>
            <ul>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/pic/channel.png"}
                  alt="채널프로필사진"
                />
                <div className="profile">
                  <p>채널</p>
                  <p>50</p>
                </div>
              </li>
            </ul>
          </div>
          {/* <!-- 친구 프로필 모음 --> */}
          <div>
            <div className="profile-title">
              <h2>친구</h2>
              <p>3</p>
            </div>
            <ul>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/pic/default.png"}
                  alt="친구3프로필사진"
                />
                <div className="profile">
                  <p>친구3</p>
                  <p>준비한 사진이 모두 떨어졌다</p>
                </div>
              </li>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/pic/friend1.png"}
                  alt="친구1프로필사진"
                />
                <div className="profile">
                  <p>친구1</p>
                  <p></p>
                </div>
              </li>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/pic/friend2.png"}
                  alt="친구2프로필사진"
                />
                <div className="profile">
                  <p>친구2</p>
                  <p>지금 몇시니</p>
                </div>
              </li>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/pic/default.png"}
                  alt="뫄뫄프로필사진"
                />
                <div className="profile">
                  <p>뫄뫄 부장님</p>
                  <p>카톡 X 연락 O</p>
                </div>
              </li>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/pic/default.png"}
                  alt="쀼프로필사진"
                />
                <div className="profile">
                  <p>쀼사원</p>
                  <p>제주도 여행 D-94</p>
                </div>
              </li>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/pic/default.png"}
                  alt="베프프로필사진"
                />
                <div className="profile">
                  <p>베프</p>
                  <p>
                    휴... 쓸말이 다 떨어졌는데 뭐라고 써야 줄이 넘어갈까. 줄이
                    넘어가면 이렇게 구성됨.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </main>
      </div>
    );
  }
}

export default friend;
