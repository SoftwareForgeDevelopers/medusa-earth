import React from "react";
import Label from "./Label";
import BlogCard from "./BlogCard";
import Button from "./Button";

function BlogSection() {
  return (
    <section className="flex flex-col w-100vw gap-20 py-28 px-16">
      <div className="flex flex-col gap-[19px] h-[247px]">
        <Label text="Blog" />
        <h3 className="h-36 flex-row items-center text-[60px] text-var-dark-blue leading-snug">
          <span className="font-w-bold">Proyectos con impacto: </span>
          <span className="block">Ayudá a quienes más lo necesitan</span>
        </h3>
        <p className="h-[33px] text-[22px]">
          Descubre cómo podés ayudar a través de la energía renovable con Medusa
          Energy.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-x-10 gap-y-16">
        <BlogCard
          name="Project name here"
          date="14/03/24"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. "
          image="/assets/blog/man-with-solar-panels.webp"
        />
        <BlogCard
          name="Project name here"
          date="12/12/23"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo."
          image="/assets/blog/woman-with-solar-panels.webp"
        />
        <BlogCard
          name="Project name here"
          date="24/06/23"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo."
          image="/assets/blog/kids-with-books.webp"
        />
        <BlogCard
          name="Project name here"
          date="01/01/24"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo."
          image="/assets/blog/workers.webp"
        />
      </div>

      <div className="flex justify-center items-center">
        <Button type="white" styles="w-60 font-w-regular">
          Ver todos los artículos
          <span>
            <img
              src="/assets/icons/little-arrow-blue.webp"
              alt="arrow-up"
              className="w-5 h-4"
            />
          </span>
        </Button>
      </div>
    </section>
  );
}

export default BlogSection;
