import React from 'react'
import "./IntroText.css";
import { TypeAnimation } from "react-type-animation";

function IntroText() {
  return (
    <div className="intro">
        <div className="rem7 bold"><div className="space-between"><div>We</div> <div className="sub-line dim lighter"><div></div>are a bunch of widly passionate young minds</div></div></div>
        <TypeAnimation className="rem7 bold"
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Think',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Create',
        1000,
        'Innovate',
        1000,
        'Design',
        1000,
        'Develop',
        1000,
        'Code',
        1000,
        'Imagine',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ display: 'inline-block' }}
      repeat={Infinity}
    />
      </div>
  )
}

export default IntroText
