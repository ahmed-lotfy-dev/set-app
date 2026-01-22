
type Props = {
  text: string;
  author: string;
  handle: string;
  socialIcon: string;
  bgColor: string;
}

export default function ReviewCard({ text, author, handle, socialIcon, bgColor }: Props) {
  return (
    <article
      className="text-text-dark rounded-card p-[7px] bg-card-bg flex flex-col justify-between"
    >
      <p
        className="flex-1 font-avenir font-normal text-[26px] leading-[36px] rounded-[14px] px-[22px] p-[38px] text-start text-white"
        style={{ backgroundColor: bgColor }}
      >
        {text}
      </p>

      <div className="flex items-center justify-between px-[7px] pb-[20px] pt-[38px]">
        <div className="px-5 pb-[4px]">
          <h4 className="font-avenir font-bold text-[16px] text-text-dark">
            {author}
          </h4>
          <p className="font-avenir text-[14px] text-text-dark/70">
            {handle}
          </p>
        </div>
        <div className="w-[20px] h-[32px] flex items-center justify-center mr-[20px]">
          <img src={socialIcon} alt="" className="w-full h-full object-contain" />
        </div>
      </div>
    </article>
  )
}