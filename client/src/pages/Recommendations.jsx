import React from "react";
import Icon from "@mdi/react";
import { mdiFormatQuoteOpenOutline } from "@mdi/js";
import { Fade, Slide } from "react-awesome-reveal";

const myRecommendations = [
  {
    name: "Christina Gorton",
    title: "- Lead Technical Writer at ExamPro",
    message:
      "I was fortunate to work with Justin while he was a Section lead at Lambda School.  He and his co-section lead helped me manage a large classroom of around 150 students as well as seeing to the needs of the Team Leads that reported to them.  He was a pleasure to work with. He was kind and both gave and received feedback really well.  My job was made infinitely easier by having Justin on my team. He would be a great addition to any team.",
    linkedin: "https://www.linkedin.com/in/christinagorton/",
  },
  {
    name: "Brit Hemming",
    title: "- Web Development Instructor at Lambda School",
    message:
      "I worked with Justin at Lambda school as his manager during the Web26 cohort for approximately one month. Justin’s role was to manage a team of 22 team leads that were responsible for managing 8 students each. I can say that from a managers point of view Justin made my job easier and was an extremely valuable asset to the team, I never had to worry about him or any of the team leads and the with Justin in charge the cohort practically ran itself leaving me time to work on curriculum updates and other pressing issues. Justin is kind, compassionate, outspoken and professional. He provides critical feedback when needed and works hard to make sure that problems are solved quickly and efficiently",
    linkedin: "https://www.linkedin.com/in/brit-hemming-613b3551/",
  },
  {
    name: "Alex Parker",
    title: "- Students Products Lead at Lambda School",
    message:
      "Justin helped lead 8 teams of 8-10 cross functional product team members, helping me to guide them in principles of agile and manage their progress through our 8 weeks of applied learning called labs. I could not have survived without Justin and it was great to work with him. I appreciated his hard work and dedication to exceed expectations and really raise the bar of learning experience for the students he led. I can confidently recommend Justin and would hope we get to work together again some day.",
    linkedin: "https://www.linkedin.com/in/misterparker/",
  },
];

const Recommendations = () => {
  return (
    <div class="my-12">
      <h3 class="border-b-8 border-blue-500 text-4xl md:text-5xl inline-block mb-6">
        Recommendations
      </h3>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
        {myRecommendations.map((rec) => {
          return (
            <div class="rounded shadow-lg p-6 text-gray-700 h-full flex-col relative">
              <div class="mb-4 md:py-4 pl-4">
                <Fade triggerOnce delay={200}>
                  <Slide triggerOnce delay={500}>
                    <Icon
                      class="transition duration-500 ease-in-out transform focus:skew-x-12 hover:scale-150 cursor-pointer"
                      path={mdiFormatQuoteOpenOutline}
                      size={1.5}
                      color="#FFC83D"
                    />
                  </Slide>

                  <p class="text-md italic float-right">{rec.message}</p>
                </Fade>
              </div>
              <span class="pt-8 md:pt-0 pb-8 lg:absolute top-0 left-0 text-sm">
                <a
                  href={rec.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-2 py-1 text-blue-500 font-semibold ml-4 mr-1 text-xl  transition duration-500 ease-in-out hover:text-white hover:bg-blue-700 transform hover:-translate-y-1 hover:scale-110"
                >
                  {rec.name}
                </a>
                {rec.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recommendations;
