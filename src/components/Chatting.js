// eslint-disable-next-line
import "../App.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Chatting extends React.Component {
  render() {
    return (
      // <div>안녕하세요.</div>
      <div className="App">
        <div className="sidebar">
          <ul className="option">
            <Link to="/friend">
              <li>
                <span>
                  <img
                    src={process.env.PUBLIC_URL + "/img/친구.png"}
                    className="chat"
                    alt="chat"
                  />
                </span>
              </li>
            </Link>
            <li>
              <span>
                <img
                  src={process.env.PUBLIC_URL + "/img/채팅방.png"}
                  className="chat"
                  alt="chat"
                />
              </span>
            </li>
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
                ></img>
              </span>
            </li>
            <li>
              <span>
                <img
                  src={process.env.PUBLIC_URL + "/img/알림.png"}
                  className="chat"
                  alt="chat"
                ></img>
              </span>
            </li>
            <li>
              <span>
                <img
                  src={process.env.PUBLIC_URL + "/img/설정.png"}
                  className="chat"
                  alt="chat"
                ></img>
              </span>
            </li>
          </ul>
        </div>
        <div className="container">
          <br></br>
          <div className="header">
            <h1>채팅</h1>
            <span>
              <img
                src={process.env.PUBLIC_URL + "/img/화살표.png"}
                className="chat"
                alt="chat"
              ></img>
            </span>
            <div className="icon">
              <span>
                <img
                  src={process.env.PUBLIC_URL + "/img/돋보기.png"}
                  className="chat"
                  alt="chat"
                ></img>
              </span>
              <span>
                <img
                  src={process.env.PUBLIC_URL + "/img/오픈채팅.png"}
                  className="chat"
                  alt="chat"
                ></img>
              </span>
              <span>
                <img
                  src={process.env.PUBLIC_URL + "/img/추가.png"}
                  className="chat"
                  alt="chat"
                ></img>
              </span>
            </div>
          </div>
          <hr></hr>
          <div className="chat">
            <Link to="/chat">
              <div className="person1">
                <span>
                  <img
                    src={process.env.PUBLIC_URL + "/img/프로필.png"}
                    className="chat"
                    alt="chat"
                  ></img>
                </span>
                <div className="person1text">
                  <span>
                    <h3>서태영</h3>
                    <h5>오후 8:05</h5>
                    <p>ㅎ2</p>
                  </span>
                </div>
              </div>
            </Link>
            <div className="person2">
              <span>
                <img
                  src={process.env.PUBLIC_URL + "/img/프로필.png"}
                  className="chat"
                  alt="chat"
                ></img>
              </span>
              <div className="person2text">
                <span>
                  <h3>함지민</h3>
                  <h5>오후 7:05</h5>
                  <p>안녕하세요</p>
                </span>
              </div>
            </div>
            <div className="person3">
              <span>
                <img
                  src={process.env.PUBLIC_URL + "/img/프로필.png"}
                  className="chat"
                  alt="chat"
                ></img>
              </span>
              <div className="person3text">
                <span>
                  <h3>함지민</h3>
                  <h5>오후 5:05</h5>
                  <p>안녕하세요</p>
                </span>
              </div>
            </div>
            <div className="person4">
              <span>
                <img
                  src={process.env.PUBLIC_URL + "/img/프로필.png"}
                  className="chat"
                  alt="chat"
                ></img>
              </span>
              <div className="person4text">
                <span>
                  <h3>함지민</h3>
                  <h5>오후 4:05</h5>
                  <p>안녕하세요</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chatting;
// export default function App() {

//   return (
//     <div className='App'>

//       <div className='sidebar'>
//           <ul className='option'>
//             <li><span><img src="./img/친구.png" className='chat'></img></span></li>
//             <li><span><img src="./img/채팅방.png" className='chat'></img></span></li>
//             <li><span><img src="./img/더보기.png" className='chat'></img></span></li>
//             <li><span><img src="./img/이모티콘.png" className='chat'></img></span></li>
//             <li><span><img src="./img/알림.png" className='chat'></img></span></li>
//             <li><span><img src="./img/설정.png" className='chat'></img></span></li>
//           </ul>
//       </div>
//       <div className='container'>
//         <br></br>
//         <div className='header'>
//         <h1>채팅</h1>
//         <span><img src="./img/화살표.png" className='chat'></img></span>
//         <div className='icon'>
//           <span><img src="./img/돋보기.png" className='chat'></img></span>
//           <span><img src="./img/오픈채팅.png" className='chat'></img></span>
//           <span><img src="./img/추가.png" className='chat'></img></span>
//         </div>
//         </div>
//         <hr></hr>
//         <div className='chat'>
//         <div className='person1'>
//         <span><img src="./img/프로필.png" className='chat'></img></span>
//         <div className='person1text'>
//           <span>
//               <h3>함지민</h3>
//               <h5>오후 8:05</h5>
//               <p>안녕하세요</p>
//           </span>
//         </div>
//         </div>
//         <div className='person2'>
//         <span><img src="./img/프로필.png" className='chat'></img></span>
//         <div className='person2text'>
//           <span>
//               <h3>함지민</h3>
//               <h5>오후 7:05</h5>
//               <p>안녕하세요</p>
//           </span>
//         </div>
//         </div>
//         <div className='person3'>
//         <span><img src="./img/프로필.png" className='chat'></img></span>
//         <div className='person3text'>
//           <span>
//               <h3>함지민</h3>
//               <h5>오후 5:05</h5>
//               <p>안녕하세요</p>
//           </span>
//         </div>
//         </div>
//         <div className='person4'>
//         <span><img src="./img/프로필.png" className='chat'></img></span>
//         <div className='person4text'>
//           <span>
//               <h3>함지민</h3>
//               <h5>오후 4:05</h5>
//               <p>안녕하세요</p>
//           </span>
//         </div>
//         </div>
//         </div>
//       </div>
//     </div>
//   )
// }
// // eslint-disable-next-line
// import '../App.css';
// import React, { Component } from 'react';
// //import {Link} from 'react-router-dom';

// class Chatting extends React.Component{
//   render() {
//     return (
//     // <div>안녕하세요.</div>
//       <div className='App'>

//       <div className='sidebar'>
//           <ul className='option'>
//             <li><span><img src="./img/친구.png" className='chat'></img></span></li>
//             <li><span><img src="./img/채팅방.png" className='chat'></img></span></li>
//             <li><span><img src="./img/더보기.png" className='chat'></img></span></li>
//             <li><span><img src="./img/이모티콘.png" className='chat'></img></span></li>
//             <li><span><img src="./img/알림.png" className='chat'></img></span></li>
//             <li><span><img src="./img/설정.png" className='chat'></img></span></li>
//           </ul>
//       </div>
//       <div className='container'>
//         <br></br>
//         <div className='header'>
//         <h1>채팅</h1>
//         <span><img src="./img/화살표.png" className='chat'></img></span>
//         <div className='icon'>
//           <span><img src="./img/돋보기.png" className='chat'></img></span>
//           <span><img src="./img/오픈채팅.png" className='chat'></img></span>
//           <span><img src="./img/추가.png" className='chat'></img></span>
//         </div>
//         </div>
//         <hr></hr>
//         <div className='chat'>
//         <div className='person1'>
//         <span><img src="./img/프로필.png" className='chat'></img></span>
//         <div className='person1text'>
//           <span>
//               <h3>함지민</h3>
//               <h5>오후 8:05</h5>
//               <p>안녕하세요</p>
//           </span>
//         </div>
//         </div>
//         <div className='person2'>
//         <span><img src="./img/프로필.png" className='chat'></img></span>
//         <div className='person2text'>
//           <span>
//               <h3>함지민</h3>
//               <h5>오후 7:05</h5>
//               <p>안녕하세요</p>
//           </span>
//         </div>
//         </div>
//         <div className='person3'>
//         <span><img src="./img/프로필.png" className='chat'></img></span>
//         <div className='person3text'>
//           <span>
//               <h3>함지민</h3>
//               <h5>오후 5:05</h5>
//               <p>안녕하세요</p>
//           </span>
//         </div>
//         </div>
//         <div className='person4'>
//         <span><img src="./img/프로필.png" className='chat'></img></span>
//         <div className='person4text'>
//           <span>
//               <h3>함지민</h3>
//               <h5>오후 4:05</h5>
//               <p>안녕하세요</p>
//           </span>
//         </div>
//         </div>
//         </div>
//       </div>
//     </div>
//     );
//   }
// }

// export default Chatting;
// // export default function App() {

// //   return (
// //     <div className='App'>

// //       <div className='sidebar'>
// //           <ul className='option'>
// //             <li><span><img src="./img/친구.png" className='chat'></img></span></li>
// //             <li><span><img src="./img/채팅방.png" className='chat'></img></span></li>
// //             <li><span><img src="./img/더보기.png" className='chat'></img></span></li>
// //             <li><span><img src="./img/이모티콘.png" className='chat'></img></span></li>
// //             <li><span><img src="./img/알림.png" className='chat'></img></span></li>
// //             <li><span><img src="./img/설정.png" className='chat'></img></span></li>
// //           </ul>
// //       </div>
// //       <div className='container'>
// //         <br></br>
// //         <div className='header'>
// //         <h1>채팅</h1>
// //         <span><img src="./img/화살표.png" className='chat'></img></span>
// //         <div className='icon'>
// //           <span><img src="./img/돋보기.png" className='chat'></img></span>
// //           <span><img src="./img/오픈채팅.png" className='chat'></img></span>
// //           <span><img src="./img/추가.png" className='chat'></img></span>
// //         </div>
// //         </div>
// //         <hr></hr>
// //         <div className='chat'>
// //         <div className='person1'>
// //         <span><img src="./img/프로필.png" className='chat'></img></span>
// //         <div className='person1text'>
// //           <span>
// //               <h3>함지민</h3>
// //               <h5>오후 8:05</h5>
// //               <p>안녕하세요</p>
// //           </span>
// //         </div>
// //         </div>
// //         <div className='person2'>
// //         <span><img src="./img/프로필.png" className='chat'></img></span>
// //         <div className='person2text'>
// //           <span>
// //               <h3>함지민</h3>
// //               <h5>오후 7:05</h5>
// //               <p>안녕하세요</p>
// //           </span>
// //         </div>
// //         </div>
// //         <div className='person3'>
// //         <span><img src="./img/프로필.png" className='chat'></img></span>
// //         <div className='person3text'>
// //           <span>
// //               <h3>함지민</h3>
// //               <h5>오후 5:05</h5>
// //               <p>안녕하세요</p>
// //           </span>
// //         </div>
// //         </div>
// //         <div className='person4'>
// //         <span><img src="./img/프로필.png" className='chat'></img></span>
// //         <div className='person4text'>
// //           <span>
// //               <h3>함지민</h3>
// //               <h5>오후 4:05</h5>
// //               <p>안녕하세요</p>
// //           </span>
// //         </div>
// //         </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }
