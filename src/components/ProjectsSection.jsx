import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import Label from "./Label";
import Button from "./Button";
import { useGetProjects } from "../services/Sanity.service";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import { SliderNavButtons } from "./SliderNavButtons";

function ProjectsSection() {
	const projects = useGetProjects();
	const navButtonsRef = React.useRef(null);
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

	return (
		<section
			id="projects-section"
			className="flex flex-col justify-center my-28 rounded-ss-[70px] rounded-ee-[70px] py-28 gap-3 bg-center bg-cover bg-[url('/assets/backgrounds/blue-for-projects.webp')] bg-blend-luminosity"
		>
			<div className="px-16">
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
					<Slider
						className={"center mb-[14px]"}
						centerMode={true}
						centerPadding="0px"
						dots={false}
						infinite={true}
						speed={500}
						slidesToShow={4}
						slidesToScroll={1}
						arrows={false}
						ref={navButtonsRef}
						beforeChange= {(current, next) => setCurrentSlideIndex(next)}	
						variableWidth={true}
						adaptiveHeight={true}
					>
						{projects.map((project, index) => (
							<ProjectCard key={project.id} id={index} project={project} currentSlideIndex={currentSlideIndex} />
						))}
					</Slider>
					<SliderNavButtons
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
						navButtonsRef={navButtonsRef}
					/>
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
