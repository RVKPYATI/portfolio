import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//components
import { Social } from "@/components/Social";
import { Photo } from "@/components/Photo";
import { Stats } from "@/components/Stats";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Fullstack разработчик</span>
            <h1 className="h1 mb-6">
              Привет я<br />
              <span className="text-accent">Василий Русанов</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 ">
              Я имею навыки в создании электронных приложений и владею языком
              программирования JavaScript и другими технологиями
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant={"outline"}
                size={"lg"}
                className="uppercase flex items-center gap-2"
              >
                <span>Скачать Резюме</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="h-9 w-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:trainsition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* foto */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
