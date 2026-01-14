import heroImage from "../../assets/images/testimonia-person-image.png"

type Props = {}

export default function Testimonials({ }: Props) {
  return (
    <section className="w-full bg-linear-to-b from-[#26262B] from-50% to-white to-50% px-6">
      <div className="max-w-[1240px] mx-auto">

        {/* Testimonial Card */}
        <div className="bg-[#7D6488] rounded-[32px] overflow-hidden min-h-[500px]">
          <div className="flex items-center justify-between">
            <div>
              <img src={heroImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 