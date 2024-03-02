import HalfMoonCurve from "../../components/HalfMoonCurve";

const LinkedinLeadGeneration = async () => {
  return (
    <>
      <HalfMoonCurve
        headingBold="LinkedIn"
        heading="Lead Generation"
        subHeading="Reach Out To 600 Qualified Prospects Per MONTH With Our Linkedin Lead Generation Services"
        showOnMobile={false}
      />

      <div className="default-container xl:my-20 mb-16 mt-5">
        <div className="flex flex-col justify-center items-center xl:flex-row gap-y-10 xl:gap-y-0 xl:gap-x-10">
          <div className="basis-1/2 order-2 h-full w-full">
            <div
              className="relative overflow-hidden"
              style={{ paddingTop: "56.25%", height: 0 }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-[30px]"
                src="https://www.youtube.com/embed/ZKskqzAxEFs?si=cXc5LV3w3w63nzh_&amp;start=15"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="order-1 xl:order-2 basis-1/2 text-center xl:text-left">
            <p className="default-text-style py-[15px]">
              LinkedIn is a thriving platform filled with regular users — 500
              million+ of them. That’s a HUGE source of high-quality leads
              waiting to be nurtured.
            </p>
            <p className="default-text-style pb-[15px]">
              As one of the leading LinkedIn Lead Generation companies in the
              UK, we’ll capture those leads, for you to turn into new sources of
              business and revenue.
            </p>
            <p className="default-text-style pb-[15px]">
              Alternatively, drop me a line in social media below and I’ll get
              back to you ASAP!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinkedinLeadGeneration;
