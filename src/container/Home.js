import React, { Component } from 'react';
import HomeCard from '../ui/HomeCard';
import {hashHistory} from 'react-router';



export default class Home extends Component {
  homeCardRelease = {
    title: 'Release',
    subTitle: 'Developer Release',
    text:'Primeiro Release em React',
    link:'Release' ,
    action: () => hashHistory.push('/release')
  };
  
  homeCardBacklog = {
    title: 'Backlog',
    subTitle: 'Developer Backlog',
    text:'Primeiro Backlog em React',
    link:'Backlog' ,
    action: () => hashHistory.push('/backlog')
  };
  
  homeCardSprint = {
    title: 'Sprint',
    subTitle: 'Developer Sprint',
    text:'Primeiro Sprint em React',
    link:'Sprint' ,
    action: () => hashHistory.push('/sprint')
  };




  render() {
    return (
      <div className="container text-center">
        <div className='row'   >
            <HomeCard
              title={this.homeCardRelease.title}
              subTitle={this.homeCardRelease.subTitle}
              text={this.homeCardRelease.text}
              link={this.homeCardRelease.link}
              action={this.homeCardRelease.action}
            />     

            <HomeCard
               {...this.homeCardBacklog}
            />     

            <HomeCard
              {...this.homeCardSprint}
            />       
                       
        </div>
      </div>
    );
  }
}
