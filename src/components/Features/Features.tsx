import cardOne from "../../assets/images/app-feature-image-1.png"
import cardTwo from "../../assets/images/app-feature-image-2.png"
import cardThree from "../../assets/images/app-feature-image-3.png"
import featureOneIcon from "../../assets/images/app-feature-icon-1.png"
import featureTwoIcon from "../../assets/images/app-feature-icon-2.png"
import featureThreeIcon from "../../assets/images/app-feature-icon-3.png"
import arrowRight from "../../assets/icons/arrow-right.svg"
export default function Features() {
  return (
    <section className="m-auto max-w-360 px-6 md:px-12 lg:px-20 xl:px-32 pt-20.5 pb-32.75">
      <div className="border-t"></div>
      <div className="flex justify-between flex-1 items-center text-center md:text-start mt-24.75 pb-22 flex-col md:flex-row md:px-2.75">
        <h2 className="font-avenir font-medium text-4xl leading-12.75">What you get on Setapp.</h2>
        <p className="font-avenir text-lg max-w-xl font-normal pl-0 md:pl-2.75 pr-11 leading-8">With a single monthly subscription at $9.99, you get 240+ apps for
          your Mac.</p>
      </div>
      <div className="mx-auto mb-24.75">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="md:col-span-2 bg-feature-pink rounded-card overflow-hidden px-2.5">
            <div className="flex items-center mt-15 ml-15 gap-5">
              <div>
                <img src={featureOneIcon} alt="" className="w-20 h-20" />
              </div>
              <div className="flex flex-col gap-1 text-text-dark">
                <h3 className="font-avenir font-semibold text-2xl">Keep your Mac clean</h3>
                <p className="font-avenir text-lg leading-8">Remove junk, scan for malware, wipe email attachments</p>
              </div>
            </div>
            <img src={cardOne} alt="Mac cleaning feature screenshot" className="px-9.25" />
          </div>
          {/* 2. LEFT CARD */}
          <div className="bg-feature-beige rounded-card overflow-hidden flex flex-col">
            <img src={cardTwo} alt="Coding app feature display" />
            <div className="flex flex-col justify-start items-start gap-5 mb-13.25 px-15">
              <div>
                <img src={featureTwoIcon} alt="" className="w-17 h-17" />
              </div>
              <div className="flex flex-col gap-1 text-text-dark">
                <h3 className="font-avenir font-semibold text-2xl">Write code</h3>
                <p className="font-avenir text-lg leading-8">Quickly access links to your meetings from menu bar</p>
              </div>
            </div>
          </div>
          {/* 3. RIGHT CARD */}
          <div className="bg-feature-blue rounded-card overflow-hidden flex flex-col">
            <div className="flex flex-col justify-start items-start mt-15 gap-5 mb-13.25 px-15">
              <div>
                <img src={featureThreeIcon} alt="" className="w-17 h-17" />
              </div>
              <div className="flex flex-col gap-1 text-white">
                <h3 className="font-avenir font-semibold text-2xl">Join meetings in a click</h3>
                <p className="font-avenir text-lg leading-8">Quickly access links to your meetings from menu bar</p>
              </div>
            </div>
            <img src={cardThree} alt="Meeting scheduler feature preview" />
          </div>
        </div>
      </div>

      {/* View all superpowers link */}
      <div className="flex justify-center w-full m-y-[88px]">
        <a href="#" className="flex items-center gap-2.75 text-white font-avenir text-lg group cursor-pointer">
          <img src={arrowRight} alt="arrow-right" className="w-6.75 h-5.25" />
          <span className="text-xl font-normal">View all superpowers</span>
        </a>
      </div>

      <div className="flex justify-between flex-1 items-center text-center md:text-start mt-24.75 pb-22 flex-col md:flex-row md:px-2.75">
        <h2 className="font-avenir font-semibold text-4xl leading-12.75">Your Setapp journey.</h2>
        <p className="font-avenir text-lg max-w-150 font-normal pl-2.5 pr-11.25 leading-8">Type in your task into Setapp search and get instant app
          recommendations.</p>
      </div>
      <div className="border-b"></div>
    </section>
  )
}