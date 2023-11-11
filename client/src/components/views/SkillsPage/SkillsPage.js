import React from 'react'
import java from '../../../img/java.png'
import js from '../../../img/js.png'
import python from '../../../img/python.png'
import html from '../../../img/html.png'
import css from '../../../img/css.png'
import es6 from '../../../img/es6.png'
import nodejs from '../../../img/nodejs.png'
import react from '../../../img/react.png'
import spring from '../../../img/spring.png'
import android from '../../../img/android.png'
import django from '../../../img/django.png'
import mysql from '../../../img/mysql.png'
import mac from '../../../img/mac.png'
import linux from '../../../img/linux.png'
import docker from '../../../img/docker.png'
import ec2 from '../../../img/ec2.png'
import sketch from '../../../img/sketch.png'
import xd from '../../../img/xd.png'


function SkillsPage(){
    return (
        <div id="skills" className="skills-page">
        <p className="skills-title">SKILLS</p>
        <p className="language-title">PROGRAMMING LANGUAGE</p>
        <div className="language-box">
          <div className="language-item">
            <img src={java} alt="java" />
          </div>
          <div className="language-item">
            <img src={js} alt="javascript" />
          </div>
          <div className="language-item">
            <img src={python} alt="python" />
          </div>
        </div>
        <p className="language-title">WEB SKILLS</p>
        <div className="language-box">
          <div className="language-item">
            <img src={html} alt="python" />
          </div>
          <div className="language-item">
            <img src={css} alt="python" />
          </div>
          <div className="language-item">
            <img src={es6} alt="python" />
          </div>
          <div className="language-item">
            <img src={nodejs} alt="python" />
          </div>
          <div className="language-item">
            <img src={react} alt="python" /> 
          </div>
        </div>
        <p className="language-title">FRAMEWORK</p>
        <div className="language-box">
          <div className="language-item">
            <img src={spring} alt="python" /></div>
          <div className="language-item">
            <img src={android} alt="python" /></div>
          <div className="language-item">
            <img src={django} alt="python" /></div>
        </div>
        <p className="language-title">DATABASE &amp; OS</p>
        <div className="language-box">
          <div className="language-item">
            <img src={mysql} alt="mysql" />
          </div>
          <div className="language-item">
            <img src={mac} alt="mac" />
          </div>
          <div className="language-item">
            <img src={linux} alt="linux" />
          </div>
        </div>
        <p className="language-title">ETC</p>
        <div className="language-box">
          <div className="language-item">
            <img src={docker} alt="docker" />
          </div>
          <div className="language-item">
            <img src={ec2} alt="ec2" />
          </div>
          <div className="language-item">
            <img src={sketch} alt="sketch" />
          </div>
          <div className="language-item">
            <img src={xd} alt="xd" />
          </div>
        </div>
      </div>
    )
}

export default SkillsPage