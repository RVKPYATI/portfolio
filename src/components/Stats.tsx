"use client";

import { FC } from "react";
import CountUp from "react-countup";

interface StatsType {
  num: number;
  text: string;
}

const stats: StatsType[] = [
  {
    num: 3,
    text: "Года опыта",
  },
  {
    num: 15,
    text: "Проектов выполнено",
  },
  {
    num: 8,
    text: "Освоенных технологий",
  },
  {
    num: 500,
    text: "Коммитов кода",
  },
];

export const Stats: FC = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 gap-4 justify-center items-center xl:justify-start"
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  }`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
