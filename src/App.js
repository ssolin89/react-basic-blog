import logo from './logo.svg';
import './App.scss';
import {useState} from "react";

//JSX 문법 2
// 변수를 html에 꽂아넣을때 {중괄호}
// 데이터바인딩 형식 사용

//JSX 문법 3
// style 넣을땐 style= { {스타일명 : '값'} }
// 오브젝트 형식으로 넣어줌

// state 만드는법
// 1. import {useState}
// 2. useState(보관할 자료)
// 3. cont [작명,작명]

// state 만드는 이유?
// 데이터바인딩이 변경되었을때 그 변경사항이 자동으로 html을 바뀌게 해준다.
// state는 변경이 일어나면 state가 포함된 html을 자동으로 재랜더링 해주기 때문이다.

// state 를 사용하는 곳은?
// 자주 변경될 것 같은 데이터들은 state에 저장 했다가
// html에 {데이터바인딩} 해놓기

function App() {
  
  const post = '강남 우동 맛집';
  const [글제목, b] = useState(['남성코트 추천', '강남 우동맛집', '파이썬 독학']);
  
  return (
    <div className="App">
      <div className="blackNav">
        <h4>ReactLogo</h4>
      </div>
      <div className="list">
        <h4>{글제목[0]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
