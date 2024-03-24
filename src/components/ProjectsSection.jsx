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

function ProjectsSection() {
  const projects = useGetProjects();
  return (
    <section
      id="projects-section"
      className="flex flex-col justify-center my-28 rounded-ss-[70px] rounded-ee-[70px] py-28 px-16 gap-3 bg-center bg-cover bg-[url('/assets/backgrounds/blue-for-projects.webp')] bg-blend-luminosity">
      <div>
        <Label text="Proyectos" white={true} />

        <div className="flex h-36  items-center justify-between gap-4 text-white">
          <h3 className="flex flex-col text-5xl font-w-bold ">
            <span className="block">Explorá Nuestro</span>
            <span className="block">Futuro Energético</span>
          </h3>
          <p className="w-[412px] text-[18px]">
            Explora proyectos innovadores que están impulsando el cambio hacia
            un futuro más sostenible en energía renovable.
          </p>
          <Button
            type="white-without-border"
            styles="w-52 font-w-regular text-[18px]">
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

      {/* <div className="h-full w-full">
        <div className="lg:mx-auto max-w-[1500px] mx-[1.5rem]">
          <Swiper
            modules={[EffectCoverflow, Pagination, Navigation]}
            effect={"coverflow"}
            loop={false}
            spaceBetween={200}
            slidesPerView={3}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            centeredSlides={true}
            grabCursor={true}
            coverflowEffect={{
              rotate: 0,
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
              // 640: {
              //   slidesPerView: 1,
              //   spaceBetween: 20,
              // },
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
              <SwiperSlide key={index}>
                <ProjectCard key={project.id} project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div> */}

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
          {projects.slice(0, 3).map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard key={project.id} project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}

      <div className="flex justify-center h-full w-full gap-6 relative">
        {projects.slice(0, 3).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div></div>
    </section>
  );
}

export default ProjectsSection;
