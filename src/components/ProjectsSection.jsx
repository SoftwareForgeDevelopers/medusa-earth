import ProjectCard from "./ProjectCard";
import Label from "./Label";
import Button from "./Button";
import { useGetProjects } from "../services/Sanity.service";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { SwiperNavButtons } from "./SwiperNavButtons";

function ProjectsSection() {
  const projects = useGetProjects();
  return (
    <section
      id="projects-section"
      className="flex flex-col justify-center my-28 py-20 px-[25px] rounded-ss-[70px] rounded-ee-[70px] gap-3 bg-center bg-cover bg-[url('/assets/backgrounds/blue-for-projects.webp')] bg-blend-luminosity desktop:py-28 desktop:px-16">
      <div className="flex flex-col">
        <Label text="Proyectos" white={true} />

        <div className="flex flex-col items-center justify-between mt-3 text-white desktop:flex-row desktop:h-36 desktop:mt-0">
          <h3 className="flex flex-col font-w-bold mb-4 text-[40px] text-center laptop:text-5xl desktop:mb-0 desktop:text-left">
            <span className="block">Explorá Nuestro</span>
            <span className="block">Futuro Energético</span>
          </h3>
          <p className="max-w-[412px] mb-8 text-[18px] text-center desktop:mb-0 desktop:text-left">
            Explora proyectos innovadores que están impulsando el cambio hacia
            un futuro más sostenible en energía renovable.
          </p>
          <Button
            type="white-without-border"
            styles="h-12 w-52 flex-shrink-0 font-w-regular text-[18px]">
            Explorar Proyectos
            <span>
              <img
                src="/assets/icons/little-arrow-blue.webp"
                alt="Arrow Right"
                className="w-5"
              />
            </span>
          </Button>
        </div>
      </div>

      <div className="h-full w-full">
        <div className="lg:mx-auto max-w-[1500px] mx-[1.5rem]">
          <Swiper
            modules={[EffectCoverflow, Navigation]}
            effect={"coverflow"}
            loop={false}
            spaceBetween={0}
            slidesPerView={6}
            centeredSlides={true}
            grabCursor={true}
            coverflowEffect={{
              scale: 0.95,
              depth: -5,
              rotate: 0,
              stretch: 5,
              slideShadows: false,
            }}
            onInit={(swiper) => {
              swiper.slideTo(1);
            }}
            className="coverflow"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 300,
              },
            }}>
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="mb-[14px]">
                <ProjectCard key={project.id} project={project} />
              </SwiperSlide>
            ))}
            <SwiperNavButtons
              config={{
                borderColor: "var-grey-blue",
                arrowColor: "var-grey-blue",
                backgroundColor: "var-grey-blue-transparent",
                borderColorHover: "var-white",
                arrowColorHover: "var-dark-blue",
                backgroundColorHover: "var-white",
                borderColorPressed: "var-white",
                arrowColorPressed: "var-dark-blue",
                backgroundColorPressed: "var-white",
              }}
            />
          </Swiper>
        </div>
      </div>

      {/* <div className="flex justify-center h-full w-full">
        <Swiper
          modules={[Pagination, Navigation]}
          loop={false}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          centeredSlides={true}
          grabCursor={true}
          onInit={(swiper) => {
            swiper.slideTo(1);
          }}>
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard key={project.id} project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}

      {/* <div className="flex justify-center h-full w-full gap-6 relative">
        {projects.slice(0, 3).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div> */}
    </section>
  );
}

export default ProjectsSection;
