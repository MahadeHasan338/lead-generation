import { didact_gothic } from "@/app/fonts";
import Link from "next/link";

const Cards = ({ data }: any) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 xl:gap-20">
      {data &&
        data.map((card: any) => (
          <div
            key={card.id}
            className="border border-[#f7f7f7] hover:bg-[#F4F4F4] transition-all duration-300 rounded-[20px] p-10 md:p-5 lg:p-10 bg-white text-center xl:text-left"
          >
            <span className="inline-block">{card.icon}</span>
            <h6
              className={`${didact_gothic.className} text-[22px] font-semibold mt-10 mb-[9px]`}
            >
              {card.title}
            </h6>
            <p className="text-[18px] leading-[26px] text-[#333]">
              {card.description}
            </p>
            {card?.link && (
              <Link href={card?.link}>
                <button className="uppercase mt-8 text-[12px] text-[#242424] font-semibold tracking-[2px] underline underline-offset-8 decoration-primary decoration-2 hover:decoration-[#242424] hover:text-primary transition-all duration-300">
                  Learn more
                </button>
              </Link>
            )}
          </div>
        ))}
    </div>
  );
};

export default Cards;
