import React from "react"

import FoundingStory from "../assets/Images/FoundingStory.png"
import BannerImage1 from "../assets/Images/damag1.jpg"
import BannerImage2 from "../assets/Images/damage22.jpg"
import BannerImage3 from "../assets/Images/damage33.jpg"

import Footer from "../components/common/Footer"
import ContactFormSection from "../components/core/AboutPage/ContactFormSection"

import Quote from "../components/core/AboutPage/Quote"
import StatsComponenet from "../components/core/AboutPage/Stats"
import HighlightText from "../components/core/HomePage/HighlightText"
import Img from "../components/common/Img"

import { motion } from 'framer-motion';
import { fadeIn } from "../components/common/motionFrameVarients"





const About = () => {
  return (
    <div>
      <section className="bg-richblack-700">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <motion.header
            className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]"
          >
            <motion.p
              variants={fadeIn('down', 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.1 }}
            >Aircraft Maintenance
              <HighlightText text={"Optimization Platform"} />
            </motion.p>

            <motion.p
              variants={fadeIn('up', 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.1 }}
              className="mx-auto mt-5 text-center text-base font-medium  lg:w-[95%]">
              Elevating aviation maintenance with innovative solutions for enhanced efficiency, safety, and reliability in every flight. Experience the future of maintenance today."
            </motion.p>
          </motion.header>

          <div className="sm:h-[70px] lg:h-[150px]"></div>

          <div className=" absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
            <Img src={BannerImage1} alt="" />
            <Img src={BannerImage2} alt="" />
            <Img src={BannerImage3} alt="" />
          </div>
        </div>
      </section>

      <section className="border-b border-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px] "></div>
          <Quote />
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            <motion.div
              variants={fadeIn('right', 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.1 }}
              className="my-24 flex lg:w-[50%] flex-col gap-10">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Founding Story
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              Our journey began with a simple yet powerful idea: to revolutionize aircraft maintenance. Fueled by a passion for innovation and a commitment to safety, we set out to create a platform that would redefine how airlines approach maintenance challenges. With dedication and perseverance, we transformed this vision into reality, offering cutting-edge solutions that empower airlines to optimize their operations and enhance safety standards.
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              Today, we continue to push the boundaries of what's possible, driven by our founding mission to make air travel safer and more efficient for everyone.
              </p>
            </motion.div>

            <motion.div
             variants={fadeIn('left', 0.1)}
             initial='hidden'
             whileInView={'show'}
             viewport={{ once: false, amount: 0.1 }}
            >
              <Img
                src={FoundingStory}
                alt="FoundingStory"
                className="shadow-[0_0_20px_0] shadow-[#FC6767]"
              />
            </motion.div>
          </div>

          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Vision
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              Our vision is to lead the way in transforming aircraft maintenance into a seamless and proactive process, where potential issues are anticipated and addressed before they escalate. We strive to create a future where airlines can rely on advanced data analytics and predictive maintenance techniques to optimize their operations, minimize downtime, and maximize safety. By pioneering innovative solutions and fostering a culture of continuous improvement, we aim to shape the future of aviation maintenance and contribute to a safer and more sustainable industry for generations to come.
              </p>
            </div>

            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
                Our Mission
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              To set new standards in aircraft maintenance, ensuring the highest levels of safety and efficiency for the aviation industry. We're committed to leveraging advanced technology and expertise to deliver innovative solutions that empower airlines to maintain their fleets with precision and confidence. Through our dedication to excellence, we aim to enhance the reliability and sustainability of air travel worldwide, safeguarding the well-being of passengers and crew alike.</p>
            </div>
          </div>
        </div>
      </section>

      <StatsComponenet />

      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">

        <ContactFormSection />
      </section>
      {/* Empty div for space */}
      <div style={{ height: "49px" }}></div>

      {/* footer */}
      <Footer />
    </div>
  )
}

export default About