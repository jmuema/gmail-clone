import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import SendMail from './SendMail';
import Login from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import EmailList from './EmailList';
import Mail from './Mail';
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from "./features/userSlice";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);


  return (
    <Router>
      {!user ? (
        <Login/> 
      ):( 
        <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />

          <Switch>
            <Route path="/mail">

              <Mail />
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>
        {sendMessageIsOpen &&  <SendMail/>}
       
      </div>

      )}


    </Router>


  );
}

export default App;
