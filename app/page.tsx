import Navbar from "@/components/navbar/navbar";
import WorkBanner from "@/components/workBanner/workbanner";
import Image from "next/image";
import {Box} from '@mui/material';
import { Anton } from "next/font/google";
import Events from "./model/events.modle";
import { connect } from "./config/db.config";
import EventComponent from "@/components/events/events";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--anton-font",
});

async function Page() {
  // const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/events?page=1`, {
  //   cache: "no-store",
  // });
  // const value = await data.json();
  return (
    <Box
      // className={`parent scroll-smooth flex w-full flex-col items-center md:max-w-5xl`}
    >
      <div className="flex relative flex-col items-center justify-center md:h-[calc(100vh-7rem)]">
        <div className="picAndText flex items-center w-full flex-col">
          <div className="intro mt-2 md:mt-2 flex flex-col-reverse md:flex-row justify-center items-center relative">
            <div className="statement flex-col p-4 md:w-2/3 text-xl text-justify">
              <div className="text-4xl md:text-8xl mt-2">sava HR</div>
              <p className="md:text-lg mt-7 animate-fade-up animate-infinite">
                A dedicated community builder and career management professional
                who excels in fostering connections and providing expert
                guidance in job development, resume writing, and career
                mentorship. With close to three decades of experience in
                corporate sales, business development, and resource management,
                Ranjith brings a wealth of knowledge to his professional
                endeavors.{" "}
              </p>
              <p className="md:text-lg mt-7 animate-fade-up animate-infinite">
                As a Past President of Junior Chamber International – JCI
                Ottawa, Ranjith focuses on supporting diverse individuals,
                including new immigrants, recent graduates, and job seekers,
                through various initiatives. He is actively involved in youth
                leadership programs and serves on various nonprofit
                organizations as a mentor and board member, showcasing his
                commitment to shaping the leaders of tomorrow.
              </p>
              {/* <p className="md:text-lg mt-7 animate-fade-up animate-infinite">
                Throughout his career, Ranjith has assisted over 1,000 new
                graduates and newcomers in Ottawa in finding job opportunities
                in the business and IT security industries. His proficiency in
                community outreach and stakeholder development enables him to
                build new collaborations, driving solutions for nonprofits and
                business leaders alike. Ranjith wishes to be your #networKING,
                passionately connecting people in a world where uncompromised
                digital trust is essential.
              </p> */}
            </div>
          </div>
        </div>
      </div>
      {/* {value.events.length && <EventComponent events={value.events} />} */}
    </Box>
  );
}

export default Page;
