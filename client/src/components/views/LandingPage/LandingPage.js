import React, {useEffect} from 'react'
import axios from 'axios';
import naver from '../../../img/naver.png'
import github from '../../../img/github.png'
import {Link} from "react-router-dom";

function LandingPage() {
    //랜딩페이지에 들어오자마자 실행됨
    useEffect(()=>{
        axios.get('/api/hello')
        .then(response =>{   console.log(response) })
    }, [])


    return (
    <div className="main-page">
    <p className="typing-text">WELCOME TO MY PORTFOLIO SITE.</p> 
     <p className="typing"></p> 

    <div className="icon-box-top">
      <div className="icon-top-button red"></div>
      <div className="icon-top-button gold"></div>
      <div className="icon-top-button green"></div>
    </div>
    <div className="icon-box">
      
      <div className="icon-wrapper">
        <Link to='/about'><div className="icon-folder" data-title="ABOUT"></div></Link>
        <Link to='/skills'><div className="icon-folder" data-title="SKILLS"></div></Link>
        <Link to='/works'><div className="icon-folder" data-title="WORKS"></div></Link>
      </div>
      <div className="icon-wrapper">
          <a href="https://blog.naver.com/sknglee22" target="_blank"><img className="icon-item-box naver" src={naver}/></a>
         <p className="naver-text">BLOG</p>
        <a href="https://github.com/sang-gyeong" target="_blank"> <img className="icon-item-box github" src={github}/></a>
        <p className="github-text">GITHUB</p>
        <div className="icon-item-box"></div>
      </div>
    </div> 
  </div>
    );

        
    var typingText = document.querySelector(".typing-text");
    var typ = document.querySelector(".typing");

    var typingBool = false; 
    var typingIdx=0; 
    var typingTxt = typingText.textContent; // 타이핑될 텍스트를 가져온다 
    typingTxt=typingTxt.split(""); // 한글자씩 자른다. 


     if(typingBool===false){ // 타이핑이 진행되지 않았다면 
       typingBool=true; 
       var tyInt = setInterval(typing,150); // 반복동작 
     } 

     function typing(){ 
       if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
         typ.append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
         typingIdx++; 
       } else{ 
         clearInterval(tyInt); //끝나면 반복종료 
       } 
     }  

     typing();



}

export default LandingPage


