import React from "react";
import "../chat.css";
export default (props) => {
  return (
    <main>
      <div id="chat-body">
        {/* <!-- 설정바(최소화, 닫기 버튼 등) --> */}
        <div class="setting_bar">
          <i class="icon-window-minimize" alt="최소화버튼" title="최소화"></i>
          <i class="icon-window-maximize" alt="최대화버튼" title="최대화"></i>
          <i class="icon-cancel" alt="닫기버튼" title="닫기"></i>
        </div>
        {/* <!-- 알림, 메뉴 기능 --> */}
        <div class="main-menu">
          <i class="icon-bell" title="알림"></i>
          <i class="icon-ellipsis" title="메뉴"></i>
        </div>
        {/* <!-- 프로필 사진, 프로필명 --> */}
        <header>
          <img class="profile-img" src="./img/프로필.png" alt="쀼프로필사진" />

          <div class="profile-col">
            <span class="profile-name">최은결</span>
            <div class="sub-menu">
              <i class="icon-box" title="채팅방 서랍"></i>
              <i class="icon-search" title="검색"></i>
            </div>
          </div>
        </header>
        <main>
          {/* <!-- 고정된 공지사항 영역 --> */}
          <div class="notice-bar">
            <i class="icon-bullhorn"></i>
            <span>멘트를 고정해놓는 곳입니다.</span>
            <i class="icon-down-open-big"></i>
          </div>
          {/* <!-- 채팅 내용 시작 --> */}
          <div class="chat-content">
            {/* <!-- 메시지 시작 날짜 --> */}
            <div class="date-line">
              <time datetime="2021-03-29">2021년 3월 29일 월요일</time>
            </div>
            {/* <!-- 채팅 내용 --> */}
            <div class="main-chat">
              <div class="friend-chat">
                <img
                  class="profile-img"
                  src={process.env.PUBLIC_URL + "/img/프로필.png"}
                  alt="쀼프로필사진"
                />
                <div class="friend-chat-col">
                  <span class="profile-name">최은결</span>
                  <span class="balloon">뭐함?</span>
                </div>
                <time datetime="07:30:00+09:00">오전 7:30</time>
              </div>
              <div class="me-chat">
                <div class="me-chat-col">
                  <span class="balloon">뭐하겠냐</span>
                </div>
                <time datetime="07:32:00+09:00">오전 7:32</time>
              </div>
              <div class="friend-chat">
                <img
                  class="profile-img"
                  src={process.env.PUBLIC_URL + "/img/프로필.png"}
                  alt="쀼프로필사진"
                />
                <div class="friend-chat-col">
                  <span class="profile-name">최은결</span>
                  <span class="balloon">아 ㅇㅋ</span>
                </div>
                <time datetime="07:33:00+09:00">오전 7:33</time>
              </div>
            </div>
          </div>
          {/* 채팅 입력창 --> */}
          <div class="insert-content">
            <form name="chatform">
              <textarea name="chat-insert"></textarea>
              <input type="submit" class="chat-submit" value="전송" />
            </form>
          </div>
        </main>
      </div>
    </main>
  );
};
