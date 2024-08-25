import Navbar from "@/components/navbar/navbar";
import WorkBanner from "@/components/workBanner/workbanner";
import Image from "next/image";
import {Box, Typography} from '@mui/material';
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
    maxWidth="xl"
    sx={{
      minHeight:{xs:"100vh"}
    }}
    >
      <div className="flex relative flex-col items-center justify-center md:h-[calc(100vh-7rem)]">
        <div className="picAndText flex items-center w-full flex-col">
          <div className="intro mt-20 md:mt-2 flex flex-col-reverse md:flex-row justify-center items-center relative">
            <div className="statement flex-col p-4 text-xl text-justify">
                <Typography sx={
                  {
                    fontSize:{xs:"40px", md:"90px"},
                    fontWeight:400
                  }
                }>
                Pioneer Recruiters <br/> in Canada
                </Typography>
              <p className="md:text-lg mt-7 animate-fade-up animate-infinite">
              Find your perfect job match in Canada.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* {value.events.length && <EventComponent events={value.events} />} */}
    </Box>
  );
}

export default Page;
