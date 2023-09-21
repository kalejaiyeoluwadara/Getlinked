import React from 'react'
import ques from "./../assets/ques.png";
import lens from "./../assets/lens.png";
import Button from "../Button";

const quests = [
  {
    ques: "Can I work on a project I started before the hackaton",
    ans: "",
  },
  {
    ques: "What happens if I need help during the hackathon?",
    ans: "",
  },
  ,
  {
    ques: "What happens if I don't have an idea for a project?",
    ans: "",
  },
  {
    ques: "Can I join a team or do I have to come with one?",
    ans: "",
  },
  {
    ques: "What happens after the hackathon ends",
    ans: "",
  },
  {
    ques: "Can I work on a project I started before the hackathon?",
    ans: "",
  },
];
function Faq() {
  return (
    <main className="flex sm:flex-row flex-col sm:px-[70px] px-[20px] sm:mt-0 mt-20  pb-10 relative z-20 text-white h-auto justify-between  items-center w-full ">
      <article className="sm:w-[40%]">
        <div className={`absolute z-10 -right-[260px] -top-[200px] `}>
          <img src={lens} className=" h-[800px] w-[800px] " alt="" />
        </div>
        <div className=" relative z-20 sm:text-start text-center  ">
          <div className="text-[40px]  mb-8 leading-[50px] font-[700] ">
            <h1>Frequently Ask</h1>
            <h1 className="txt">Questions</h1>
          </div>
          <p>
            We got answers to the questions that you might want to ask
            about getlinked Hackathon 1.0
          </p>
        </div>

        <div className="flex flex-col mt-8 gap-2">
          {quests.map((d, id) => {
            return (
              <div className="bb relative flex py-3 ">
                <p className="text-[15px] sm:w-[100%] w-[80%] ">{d.ques}</p>
                <button className="txt absolute right-5 ">+</button>
              </div>
            );
          })}
        </div>
      </article>
      <div className="relative z-20 sm:mt-0 mt-20  flex items-end justify-end  ">
        <img src={ques} className="sm:h-[600px] h-[400px]  " alt="" />
      </div>
    </main>
  );
}

export default Faq
