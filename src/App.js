import './App.css'; //경로추가하는 방법
import Box from './box';


function App() {

  let post = '여행 가고 싶다'; //서버에서 가져 올 정보

  return (
    <main>


    <div className='container'>
      <div className='loginContainer'>

        <div className="loginLogo">     
        </div>
        
          <Box name = {'전화번호, 사용자 이름 또는 이메일'} />
          <Box name = {'비밀번호'}/>
          
          {/* 버튼 */}
          <Box name = {'로그인'}/>
          <Box name = {' - 또는 - '}/> 
          {/* sns로그인 */}
          <Box name = {'카카오로그인'}/>
          <Box name = {'네이버로그인'}/>
          <Box name = {'구글로그인'}/>
        </div>


      <div className='joinMemberContainer'>
        <Box name = {'가입하기'}/>
      </div>
    </div>
  </main>
  );
}

export default App;
