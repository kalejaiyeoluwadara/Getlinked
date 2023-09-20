import React from 'react'
import Nav from '../nav/nav'
import Main from '../body/main';
import Intro from '../intro/intro';
import Rules from '../rules/rules';
import Criteria from '../criteria/points';
import Timeline from '../timeline/time';
import Faq from '../ques/faq';
import Reward from '../reward/reward';
import Partners from '../partners/partners';
import Policy from '../policy/policy';
function Admin() {
  return (
    <div className="flex flex-col h-[100%] w-screen bac ">
      <Nav />
      <Main/>
      <Intro/>
      <Rules/>
      <Criteria/>
      <Faq/>
      {/* <Timeline/> */}
      <Reward/>
      <Partners/>
      <Policy/>
    </div>
  );
}

export default Admin
