import React,{useState} from 'react'
import Nav from '../nav/nav'
import Modal from '../modal';
import Mobile from '../nav/mobile';
import Main from '../body/main';
import Intro from '../intro/intro';
import Rules from '../rules/rules';
import Criteria from '../criteria/points';
import Timeline from '../timeline/time';
import Faq from '../ques/faq';
import Reward from '../reward/reward';
import Partners from '../partners/partners';
import Policy from '../policy/policy';
import Footer from '../footer/footer';
import Animate from '../animate';
function Admin() {
  const [modal,setModal] = useState(false)
  return (
    <div className="flex relative flex-col h-[100%] w-screen bac ">
      {/* <Nav /> */}
      {modal && <Modal modal={modal} setModal={setModal} />}
      <Mobile modal={modal} setModal={setModal} />
      <Animate>
        <Main />
      </Animate>
      <Intro />
      <div className="">
        <Rules />
      </div>
      <Criteria />
      <Faq />
      {/* <Timeline/> */}
      <Reward />
      <Partners />
      <Policy />
      <Footer />
    </div>
  );
}

export default Admin
