import React from "react";
import HalfMoonCurve from "@/app/components/HalfMoonCurve";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { RxCrossCircled } from "react-icons/rx";
import "./style.css";

const tableData = [
  {
    title: "Daily Reporting Of Leads Generated",
    icon1: (
      <IoIosCheckmarkCircleOutline className="inline-block text-green-500 text-3xl" />
    ),
    icon2: <RxCrossCircled className="inline-block text-red-500 text-3xl" />,
    icon3: (
      <HiOutlineQuestionMarkCircle className="inline-block text-yellow-500 text-3xl" />
    ),
  },
  {
    title: "No Access To Your Account Needed",
    icon1: (
      <IoIosCheckmarkCircleOutline className="inline-block text-green-500 text-3xl" />
    ),
    icon2: <RxCrossCircled className="inline-block text-red-500 text-3xl" />,
    icon3: <RxCrossCircled className="inline-block text-red-500 text-3xl" />,
  },
  {
    title: "LinkedIn Outreach",
    icon1: (
      <IoIosCheckmarkCircleOutline className="inline-block text-green-500 text-3xl" />
    ),
    icon2: <RxCrossCircled className="inline-block text-red-500 text-3xl" />,
    icon3: (
      <IoIosCheckmarkCircleOutline className="inline-block text-green-500 text-3xl" />
    ),
  },
  {
    title: "Manual Messaging From Our Team Post Automation",
    icon1: (
      <IoIosCheckmarkCircleOutline className="inline-block text-green-500 text-3xl" />
    ),
    icon2: <RxCrossCircled className="inline-block text-red-500 text-3xl" />,
    icon3: (
      <IoIosCheckmarkCircleOutline className="inline-block text-green-500 text-3xl" />
    ),
  },
  {
    title: "Access to 100% Of New Connections Generated",
    icon1: (
      <IoIosCheckmarkCircleOutline className="inline-block text-green-500 text-3xl" />
    ),
    icon2: <RxCrossCircled className="inline-block text-red-500 text-3xl" />,
    icon3: (
      <HiOutlineQuestionMarkCircle className="inline-block text-yellow-500 text-3xl" />
    ),
  },
  {
    title: "Personalised Email Followup",
    icon1: (
      <IoIosCheckmarkCircleOutline className="inline-block text-green-500 text-3xl" />
    ),
    icon2: <RxCrossCircled className="inline-block text-red-500 text-3xl" />,
    icon3: (
      <IoIosCheckmarkCircleOutline className="inline-block text-green-500 text-3xl" />
    ),
  },
  {
    title: "Twitter Followup",
    icon1: (
      <IoIosCheckmarkCircleOutline className="inline-block text-green-500 text-3xl" />
    ),
    icon2: <RxCrossCircled className="inline-block text-red-500 text-3xl" />,
    icon3: (
      <HiOutlineQuestionMarkCircle className="inline-block text-yellow-500 text-3xl" />
    ),
  },
  {
    title: "Voicemail Followup",
    icon1: (
      <IoIosCheckmarkCircleOutline className="inline-block text-green-500 text-3xl" />
    ),
    icon2: <RxCrossCircled className="inline-block text-red-500 text-3xl" />,
    icon3: (
      <HiOutlineQuestionMarkCircle className="inline-block text-yellow-500 text-3xl" />
    ),
  },
  {
    title: "Activity Reporting Dashboard",
    icon1: (
      <IoIosCheckmarkCircleOutline className="inline-block text-green-500 text-3xl" />
    ),
    icon2: <RxCrossCircled className="inline-block text-red-500 text-3xl" />,
    icon3: (
      <HiOutlineQuestionMarkCircle className="inline-block text-yellow-500 text-3xl" />
    ),
  },
  {
    title: "Inhouse Automation Software",
    icon1: (
      <IoIosCheckmarkCircleOutline className="inline-block text-green-500 text-3xl" />
    ),
    icon2: <RxCrossCircled className="inline-block text-red-500 text-3xl" />,
    icon3: <RxCrossCircled className="inline-block text-red-500 text-3xl" />,
  },
  {
    title: "Guaranteed Introductions",
    icon1: (
      <IoIosCheckmarkCircleOutline className="inline-block text-green-500 text-3xl" />
    ),
    icon2: <RxCrossCircled className="inline-block text-red-500 text-3xl" />,
    icon3: <RxCrossCircled className="inline-block text-red-500 text-3xl" />,
  },
];

const Page = () => {
  return (
    <>
      <div className="pt-[102px] lg:pt-[95px]"></div>
      <HalfMoonCurve
        headingBold="Why Data Peak Leads"
        heading="Vs Other Agencies"
        subHeading="Is Your Sales Team Hungry For More Qualified Leads? Let’s Chat!"
        showOnMobile={false}
      />

      <div className="pt-4 pb-16 md:pt-10 xl:py-20 default-container overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-black text-white">
            <tr className="text-center">
              <th className="table-header">Expertise</th>
              <th className="table-header">Data Peak Leads</th>
              <th className="table-header">Other Agencies</th>
              <th className="table-header">Inhouse</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <>
                <tr
                  key={index}
                  className={
                    index % 2 === 0 ? "bg-gray-100 text-center" : "text-center"
                  }
                >
                  <td className="table-data">{data.title}</td>
                  <td className="table-data">{data.icon1}</td>
                  <td className="table-data">{data.icon2}</td>
                  <td className="table-data">{data.icon3}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Page;
