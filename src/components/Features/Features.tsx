import cardOne from "../../assets/images/app-feature-image-1.png"
import cardTwo from "../../assets/images/app-feature-image-2.png"
import cardThree from "../../assets/images/app-feature-image-3.png"
import featureOneIcon from "../../assets/images/app-feature-icon-1.png"
import featureTwoIcon from "../../assets/images/app-feature-icon-2.png"
import featureThreeIcon from "../../assets/images/app-feature-icon-3.png"
import arrowRight from "../../assets/icons/arrow-right.svg"
export default function Features() {
  return (
    <section className="m-auto max-w-[1180px] pb-[133px]">
      <div className="border-t"></div>
      <div className="flex justify-between flex-1 mt-[100px] pb-[88px]">
        <h2 className="font-avenir font-medium text-4xl leading-12.75">What you get on Setapp.</h2>
        <p className="font-avenir text-lg max-w-[600px] font-normal pl-[10px] pr-[45px] leading-8">With a single monthly subscription at $9.99, you get 240+ apps for
          your Mac.</p>
      </div>
      <div className="mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          <div className="md:col-span-2 bg-[#DF96AE] rounded-card overflow-hidden px-[10px]">
            <div className="flex items-center mt-[60px] ml-[60px] gap-5">
              <div>
                <img src={featureOneIcon} alt="" className="w-20 h-20" />
              </div>
              <div className="flex flex-col gap-1 text-[#26262B]">
                <h3 className="font-avenir font-semibold text-2xl">Keep your Mac clean</h3>
                <p className="font-avenir text-lg leading-8">Remove junk, scan for malware, wipe email attachments</p>
              </div>
            </div>
            <img src={cardOne} alt="Mac cleaning feature screenshot" className="px-[37px]" />
          </div>
          {/* 2. LEFT CARD */}
          <div className="bg-[#F4F0E4] rounded-card overflow-hidden flex flex-col">
            <img src={cardTwo} alt="Coding app feature display" />
            <div className="flex flex-col justify-start items-start mt-[60px] gap-5 mb-[53px] px-[60px]">
              <div>
                <img src={featureTwoIcon} alt="" className="w-[68px] h-[68px]" />
              </div>
              <div className="flex flex-col gap-1 text-[#26262B]">
                <h3 className="font-avenir font-semibold text-2xl">Write code</h3>
                <p className="font-avenir text-lg leading-8">Quickly access links to your meetings from menu bar</p>
              </div>
            </div>
          </div>
          {/* 3. RIGHT CARD */}
          <div className="bg-[#384C75] rounded-card overflow-hidden flex flex-col">
            <div className="flex flex-col justify-start items-start mt-[60px] gap-5 mb-[53px] px-[60px]">
              <div>
                <img src={featureThreeIcon} alt="" className="w-[68px] h-[68px]" />
              </div>
              <div className="flex flex-col gap-1 text-[#FFFFFF]">
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
        <a href="#" className="flex items-center gap-[11px] text-white font-avenir text-lg group cursor-pointer">
          <img src={arrowRight} alt="arrow-right" className="w-[27px] h-[21px]" />
          <span className="text-xl font-normal">View all superpowers</span>
        </a>
      </div>

      <div className="flex justify-between flex-1 mt-[100px] pb-[88px]">
        <h2 className="font-avenir font-semibold text-4xl leading-12.75">Your Setapp journey.</h2>
        <p className="font-avenir text-lg max-w-[600px] font-normal pl-[10px] pr-[45px] leading-8">Type in your task into Setapp search and get instant app
          recommendations.</p>
      </div>
      <div className="border-b"></div>
    </section>
  )
}