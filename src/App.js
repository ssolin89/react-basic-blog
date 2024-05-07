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

function App() {
  
  const post = '강남 우동 맛집';
  const [글제목, b] = useState('남성코트 추천');
  
  return (
    
    // return  안에는 병렬 태그 사용 금지
    
    <div className="App">
      <div className="blackNav">
        <h4 style={{color: 'red', fontSize: '16px'}}>블로그</h4>
      </div>
      <div className="list">
        <h4>글제목</h4>
        <p>5월 07일 발행</p>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
