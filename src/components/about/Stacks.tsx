import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiNestjs,
  SiVuedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiBootstrap,
  SiPhp,
  SiDotnet,
  SiMysql,
  SiPostgresql,
  SiAmazonwebservices,
  SiGithub,
  SiFirebase,
  SiMoodle,
  SiLinux,
} from "@icons-pack/react-simple-icons";

export const TechStacksSection: React.FC = () => {
  const categories = [
    { name: "Frameworks", items: [SiNextdotjs, SiNestjs, SiVuedotjs] },
    {
      name: "Libraries",
      items: [SiReact, SiTailwindcss, SiTypescript, SiBootstrap],
    },
    { name: "Backends & DB", items: [SiPhp, SiDotnet, SiMysql, SiPostgresql] },
    {
      name: "Cloud & DevOps",
      items: [SiAmazonwebservices, SiGithub, SiFirebase],
    },
    { name: "Platform & OS", items: [SiMoodle, SiLinux] },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
          My Tech Stacks
        </h2>
      </div>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {categories.map((cat, idx) => (
          <SwiperSlide key={cat.name}>
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable={true}
              glareMaxOpacity={0.1}
              className="max-w-md mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
                  {cat.name}
                </h3>
                <div className="flex flex-wrap justify-center gap-6">
                  {cat.items.map((Icon, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }}
                      className="transition-transform"
                    >
                      <Icon size={48} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Tilt>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
