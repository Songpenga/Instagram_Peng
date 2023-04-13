import './App.css'; //경로추가하는 방법
import Box from './box';
import Button from './components/loginButton';
import DataTable from "./components/dataTable";

{/*
  table를 만들어서 행으로 input, button insert

*/}
function App() {

  return (
    <main>

    <div className="App">
      <DataTable 
        headers={headers}
      />
    </div>

    <div className='container'>
      <div className='loginContainer'>

        <div className="loginLogo">     
        </div>
        
          <Box name = {'전화번호, 사용자 이름 또는 이메일'} />
          <Box name = {'비밀번호'}/>
          
          {/* 버튼 */}
          <div className='buttonArea'>
          <Button label = "로그인" styleClass="loginbutton" 
          onClick = {() => {alert('로그인!');}} disabled={false} />
          </div>

          <Box name = {' - 또는 - '}/> 

          {/* sns로그인 */}
          <div className='buttonArea'>
            <Button label = "카카오로그인" styleClass="loginbutton" 
            onClick = {() => {alert('카카오!');}} disabled={false} />

            <Button label = "네이버로그인" styleClass="loginbutton" 
            onClick = {() => {alert('네이버!');}} disabled={false} />

            <Button label = "구글로그인" styleClass="loginbutton" 
            onClick = {() => {alert('HEY GOOGLE!');}} disabled={false} />
          </div>
        </div>


      <div className='joinMemberContainer'>
        <Box name = {'가입하기'}/>
      </div>
    </div>
  </main>
  );
}

export default App;
