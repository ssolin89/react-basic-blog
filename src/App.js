import logo from './logo.svg';
import './App.css';

function App() {
  
  let post = '강남 우동 맛집';
  
  //JSX 문법 2
  // 변수를 html에 꽂아넣을때 {중괄호}
  // 데이터바인딩 형식 사용
  
  //JSX 문법 3
  // style 넣을땐 style= { {스타일명 : '값'} }
  // 오브젝트 형식으로 넣어줌

  
  
  return (
    <div className="App">
      <div className="blackNav">
        <h4  style={{color:'red'}}>블로그</h4>
      </div>
      
      <h4>{post}</h4>
    </div>
  );
}

export default App;
