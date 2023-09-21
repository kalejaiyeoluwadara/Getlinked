import React from "react";
import cri from "./../assets/cri.png";
import lens from "./../assets/lens.png";
import Button from "../Button";
function Criteria() {
  return (
    <main className="flex sm:flex-row flex-col sm:px-[70px] px-[20px] pb-10 relative z-20 text-white h-auto  items-center w-full ">
      <div className="sm:w-[50%] relative z-20 flex items-end justify-end  ">
        <img src={cri} className="sm:h-[600px] h-[400px] " alt="" />
      </div>
      <div className={`absolute z-10 -left-[60px] top-[200px] `}>
        <img src={lens} className=" h-[800px] w-[800px] " alt="" />
      </div>
      <div className="sm:w-[50%] sm:text-start text-center relative z-20  ">
        <div className="text-[40px] mb-8 leading-[50px] font-[700] ">
          <h1>Judging Criteria </h1>
          <h1 className="txt">Key attributes</h1>
        </div>
        <article className="flex flex-col gap-8 ">
          <p>
            <span className=" font-[600] txt">Innovation and Creativity:</span>
            Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features.
          </p>
          <p>
            <span className=" font-[600] txt">Functionality</span>
            Assess how well the solution works. Does it perform its intended
            functions effectively and without major issues? Judges would
            consider the completeness and robustness of the solution.
          </p>
          <p>
            <span className=" font-[600] txt">Impact and Relevance:</span>
            Determine the potential impact of the solution in the real world.
            Does it address a significant problem, and is it relevant to the
            target audience? Judges would assess the potential social, economic,
            or environmental benefits.
          </p>
          <p>
            <span className=" font-[600] txt">Technical Complexity:</span>
            Evaluate the technical sophistication of the solution. Judges would
            consider the complexity of the code, the use of advanced
            technologies or algorithms, and the scalability of the solution.
          </p>
          <p>
            <span className=" font-[600] txt">
              Adherence to Hackathon Rules:
            </span>
            Judges will Ensure that the team adhered to the rules and guidelines
            of the hackathon, including deadlines, use of specific technologies
            or APIs, and any other competition-specific requirements.
          </p>
        </article>
        <div className="mt-[30px] sm:block flex items-center justify-center " >
          <Button name={"Read More"} />
        </div>
      </div>
    </main>
  );
}

export default Criteria;
