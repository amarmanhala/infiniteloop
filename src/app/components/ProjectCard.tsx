import Link from "next/link";
import React from "react";

const ProjectCard = () => {
  return (
    <>
      <Link href="#">
        <div className="w-full">
          <div className="bg-amber-100 rounded-lg">
            <div className="h-80">1</div>
            <div className="bg-yellow-300 rounded-b-lg">
              <div className="flex w-full p-6 flex-col">
                <div>
                  <h3 className="text-3xl font-medium text-yellow-950 mb-1">
                    Dr Ink
                  </h3>
                </div>
                <div>
                  <p className="text-xl text-yellow-950">
                    A e-commerce web application
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProjectCard;
