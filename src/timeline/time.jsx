import React from "react";
import rules from "./../assets/rule.png";
import lens from "./../assets/lens.png";

const Stroke = () =>{
    return(
        <div className="h-[80px] w-[2px] stroke "></div>
    )
}
const Text = ({num}) =>{
  return (
    <p className="time h-[50px] w-[50px] rounded-full text-white flex items-center justify-center ">
      {num}
    </p>
  );
}
function Timeline() {
  return (
    <main className="flex flex-col  px-[70px] relative z-20 text-white h-auto  items-center w-full ">
      <header className="w-full flex flex-col items-center justify-center ">
        <h1 className=" font-[600] text-[20px]  ">Timeline</h1>
        <p className="text-center ">
          Here is the breakdown of the time we anticipate <br /> using for the
          upcoming event.
        </p>
      </header>
      <main className="w-full flex flex-col relative mb-20 gap-12 items-center justify-center  mt-10 ">
        <div className="flex w-[80%] relative mt-[100px]   justify-between   ">
          <div className="text-end w-[440px]  flex flex-col items-start ">
            <div className="flex justify-end flex-col ">
              <h1 className="txt text-[20px] font-[600] ">
                Hackathon Announcement
              </h1>
              <p className="text-[14px] ">
                The getlinked tech hackathon 1.0 is formally announced <br /> to
                the general public and teams begin to get ready to register
              </p>
            </div>
          </div>
          <div className="flex flex-col relative top-2 items-center gap-2 ">
            <Stroke/>
            <Text num={1} />
          </div>
          <div className=" w-[50%] flex  items-center  w-[600px] justify-start">
            <h1 className="txt text-[20px] font-[600] ">November 18, 2023</h1>
          </div>
        </div>

        <div className="flex flex-row-reverse w-[80%]   justify-between items-center  ">
          <div className="flex flex-col justify-start  w-[600px]  items-start ">
            <h1 className="txt text-[20px] font-[600] ">
              Teams Registration begins
            </h1>
            <p className="text-[14px] ">
              Interested teams can now show their interest in the <br />{" "}
              getlinked tech hackathon 1.0 2023 by proceeding to register
            </p>
          </div>
          <div className=" flex  items-end w-[440px]  justify-end">
            <h1 className="txt text-[20px] font-[600] ">November 18, 2023</h1>
          </div>
        </div>

        <div className="flex w-[80%]   justify-between   ">
          <div className="text-end w-[440px]  flex flex-col items-start ">
            <div className="flex justify-end translate-x-[98px] flex-col ">
              <h1 className="txt text-[20px] font-[600] ">
                Teams Registration ends
              </h1>
              <p className="text-[14px] ">
                Interested Participants are no longer Allowed to <br />
                register
              </p>
            </div>
          </div>
          <div className=" w-[50%] flex  items-center  w-[600px] justify-start">
            <h1 className="txt text-[20px] font-[600] ">November 18, 2023</h1>
          </div>
        </div>

        <div className="flex flex-row-reverse w-[80%]   justify-between items-center  ">
          <div className="flex flex-col justify-start  w-[600px]  items-start ">
            <h1 className="txt text-[20px] font-[600] ">
              Announcement of the accepted teams and ideas
            </h1>
            <p className="text-[14px] ">
              All teams whom idea has been accepted into getlinked tech <br />
              hackathon 1.0 2023 are formally announced
            </p>
          </div>
          <div className=" flex  items-end w-[440px]  justify-end">
            <h1 className="txt text-[20px] font-[600] ">November 18, 2023</h1>
          </div>
        </div>

        <div className="flex w-[80%]   justify-between   ">
          <div className="text-end w-[440px]  flex flex-col items-start ">
            <div className="flex justify-end flex-col ">
              <h1 className="txt text-[20px] font-[600] ">
                Getlinked Hackathon 1.0 Offically Begins
              </h1>
              <p className="text-[14px] ">
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions
              </p>
            </div>
          </div>
          <div className=" w-[50%] flex  items-center  w-[600px] justify-start">
            <h1 className="txt text-[20px] font-[600] ">November 18, 2023</h1>
          </div>
        </div>

        <div className="flex flex-row-reverse w-[80%]   justify-between items-center  ">
          <div className="flex flex-col justify-start  w-[600px]  items-start ">
            <h1 className="txt text-[20px] font-[600] ">Demo Day</h1>
            <p className="text-[14px] ">
              Teams get the opportunity to pitch their projects to judges. The{" "}
              <br />
              winner of the hackathon will also be announced on this day
            </p>
          </div>
          <div className=" flex  items-end w-[440px]  justify-end">
            <h1 className="txt text-[20px] font-[600] ">November 18, 2023</h1>
          </div>
        </div>

        <article className="flex flex-col gap-4 absolute top-6  -translate-x-20 items-center "></article>
      </main>
    </main>
  );
}

export default Timeline;
