import "../chat-room.css";
import React, { useState, useRef } from 'react';



function Chating() {

    const [input, setInput] = useState('');
    const [lists, setLists] = useState([]);
    const [nextId, setNextId] = useState(0);
    const inputName = useRef(null);
  
    /* 이벤트들 */
  
    /* input값에 문자 입력할 때 마다 실행 되는 이벤트 함수*/
    const onChange = (e) => {
      setInput(e.target.value);
    };
  
    /* enter or 확인 버튼 클릭 시 발생하는 이벤트 함수*/
    const submit = (e) => {
      e.preventDefault();  //새로고침 방지
      const about_lists = lists.concat({ //원래 있는 리스트에 붙여주기
        id: nextId,
        text: input,
      });
      setNextId(nextId + 1); //id값 +1
  
      /*방금 붙여준 리스트까지 포함 된 리스트로 세팅하기*/
      setLists(about_lists); 
      setInput(''); //input 태그안에 있는 문자 지워주기
    };
  
    /* 리스트들 화면에 띄우기 위해 map으로 반복 요소 불러오기 */
    const input_list = lists.map((list) => (
      <div
        /*고유 key값 주기*/
        key={list.id}     >
        {list.text}
      </div>
    ));

  return (
    <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

    <div id="chat-room">
        <div className="message-box">
            <div className="message-group" data-date-str="2014년 12월 10일 일요일">
                <div className="chat-message other">
                    <section><i className="fa fa-user"></i></section>
                    <span>서태영</span>
                    <div>안녕</div>
                </div>
                
                <div className="chat-message mine">
                    <section><i className="fa fa-user"></i></section>
                    <span>함지민</span>
                    <div>안녕</div>
                </div>
            </div>
            
            <div className="message-group" data-date-str="2014년 12월 11일 월요일">
                <div className="chat-message other">
                <section><i className="fa fa-user"></i></section>
                    <span>서태영</span>
                    <div>2308 서태영</div>
                </div>
                
                <div className="chat-message mine">
                    <section><i className="fa fa-user"></i></section>
                    <span>함지민</span>
                    <div>2313 함지민</div>
                </div>
                <br></br>
                <div className="chat-message mine">
                    <section><i className="fa fa-user"></i></section>
                    <span>함지민</span>
                    {input_list}<br></br>
                </div>
            </div>
        </div>
        <div className="input-box">
            <form onSubmit={submit}>
              <input type="text"
                  name="list"
                  id="text-input"
                  value={input}
                  onChange={onChange}
                  ref={inputName}/>
            
            <div className="btn-plus">
                <i className="fa fa-plus" aria-hidden="true"></i>
            </div>
            <div className="btn-emo">
                <i className="fa fa-smile-o" aria-hidden="true"></i>
            </div>
            <div>
                <button className="btn-submit" type="submit">전송</button>
            </div>
            </form>
        </div>
    </div>
    </div>
  );
};

export default Chating;