import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <VerticalTimeline lineColor="#282c34">
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(240, 206, 96)', color: '#282c34' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
          date="2023 - 2024"
          iconStyle={{ background: 'rgb(240, 206, 96)', color: '#282c34' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">AEC - Programmer Analyst</h3>
          <h4 className="vertical-timeline-element-subtitle">LaSalle College, CA</h4>
          <p>
            Web and Software Develpment, Database Creation and Management, Technologies
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(240, 206, 96)', color: '#282c34' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
          date="2021 – 2023"
          iconStyle={{ background: 'rgb(240, 206, 96)', color: '#282c34' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Senior Business Analyst</h3>
          <h4 className="vertical-timeline-element-subtitle">Vitória, BR</h4>
          <p>
          Data Analysis, Reporting, Dashboard Implementation, Efficiency Optimization, SAP Modules (BW, SD, FICA, WM, CRM, Billing), Communication Skills
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(240, 206, 96)', color: '#282c34' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
          date="2018 - 2021"
          iconStyle={{ background: 'rgb(240, 206, 96)', color: '#282c34' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Business Analyst</h3>
          <h4 className="vertical-timeline-element-subtitle">Vitória, BR</h4>
          <p>
            Leadership, Task Automation, Product Owner, Team Work
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(240, 206, 96)', color: '#282c34' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
          date="2011 - 2016"
          iconStyle={{ background: 'rgb(240, 206, 96)', color: '#282c34' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Civil Engineering</h3>
          <h4 className="vertical-timeline-element-subtitle">Multivix, BR</h4>
          <p>
            Creative Direction, User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(240, 206, 96)', color: '#282c34' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </section>
  );
}

export default Experience;
