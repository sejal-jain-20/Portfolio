import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import {FaUserAlt} from "react-icons/fa";
import {MdOutlineWork} from "react-icons/md";

import "./../header.css";


const TimelineConstructor = () => {
  const [isactive, setisactive] = React.useState(true);
  const [isactive1, setisactive1] = React.useState(false);
 
  const handleclick = () => {
    setisactive(true);
    setisactive1(false);
  };

  const handleclick1 = () => {
    setisactive1(true);
    setisactive(false);
  };

  return (
    <div className="Container ">
      <div className="act ">
        <div className="act_title" id="activite">
          <h1 className="title">Activites</h1>
        </div>
        <div className="sub_title">
          <h2 className="Qua">Qualification</h2>
        </div>

        <div className="switch">
          <span className="subH" onClick={handleclick}>
           <FaUserAlt/> Personal |
          </span>{" "}
          <span className="subH" onClick={handleclick1}>
           <MdOutlineWork/> Work
          </span>
        </div>

        <div className={isactive ? "timeline1" : "timeline1off"}>
          <Timeline position="alternate">
            
            <TimelineItem>
              
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                // color="text.secondary"
              >
                 2019-2023
              </TimelineOppositeContent>
              <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                B.tech (INFORMATION TECHNOLOGY)
                </Typography>
                <Typography>KRISHNA ENGINEERING COLLEGE</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                // color="text.secondary"
              >
                2018-2019
              </TimelineOppositeContent>
              <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                INTERMEDIATE
                </Typography>
                <Typography>GEETA BAL BHARTI SR SEC
SCHOOL(CBSE)</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                // color="text.secondary"
              >
                 2016-2017
              </TimelineOppositeContent>
              <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                HIGH SCHOOL
                </Typography>
                <Typography>GEETA BAL BHARTI SR SEC
SCHOOL(CBSE)</Typography>
              </TimelineContent>
            </TimelineItem>
         
          </Timeline>
        </div>

        <div className={isactive1 ? "timeline2" : "timeline2off"}>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                // color="text.secondary"
              >
                Gurugram City in Haryana
              <p>08/2022 - 2023</p>
              
              </TimelineOppositeContent>
              <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                Software Developer Engineer 
                </Typography>
                <Typography>CrossTower India Pvt. Ltd.</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                // color="text.secondary"
              >
                Online
              <p>06/2021 - 07/2021 </p>
              </TimelineOppositeContent>
              
              <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                Tathastu Dsa Scholar Intern
                </Typography>
                <Typography>TwO WaiTs</Typography>
              </TimelineContent>
            </TimelineItem>
            
            
          </Timeline>
        </div>
      
      </div>
    </div>
  );
};
export default TimelineConstructor;
