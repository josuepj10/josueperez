"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Briefcase, GraduationCap } from "lucide-react";

import { useTranslations } from "next-intl";

export const Timeline = () => {
  const t = useTranslations("Nav"); // Traducciones del grupo "Nav"

  return (
    <div className="max-w-screen-xl mx-auto font-mono mb-10">
      <h2 className="text-2xl md:text-4xl font-bold mb-8 ml-3 md:ml-0">
        {t("experience")}.
      </h2>

      <VerticalTimeline lineColor="var(--color-primary)">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022"
          contentStyle={{
            background: "transparent",
            color: "var(--color-foreground)",
            border: "2px solid var(--color-ring)",
          }}
          contentArrowStyle={{
            borderRight: "7px solid var(--color-primary)",
          }}
          iconStyle={{
            background: "var(--color-background)",
            color: "var(--color-primary)",
            border: "2px solid var(--color-primary)",
          }}
          icon={<GraduationCap />}
        >
          <h3 className="vertical-timeline-element-title font-semibold">
            Ingeniería Informática
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Universidad Estatal a Distancia (UNED)
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="06/2022 – Actualidad"
          contentStyle={{
            background: "transparent",
            color: "var(--color-foreground)",
            border: "2px solid var(--color-ring)",
          }}
          contentArrowStyle={{
            borderRight: "7px solid var(--color-primary)",
          }}
          iconStyle={{
            background: "var(--color-background)",
            color: "var(--color-primary)",
            border: "2px solid var(--color-primary)",
          }}
          icon={<Briefcase />}
        >
          <h3 className="vertical-timeline-element-title font-semibold">
            Ingeniero Informático & Project Manager
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Aacrom University / Instituto Costarricense de Turismo
          </h4>
          <p>
            Lidero y desarrollo el sitio web institucional del Instituto
            Costarricense de Turismo (ICT), gestionando el ciclo completo del
            proyecto: desde la planificación y recolección de requisitos hasta
            la implementación técnica. Trabajo con un stack LAMP extendido,
            integrando Vue.js para el frontend y Slim/Twig para la arquitectura
            backend, garantizando entregables alineados a los objetivos del
            cliente.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="12/2023 – 03/2024"
          contentStyle={{
            background: "transparent",
            color: "var(--color-foreground)",
            border: "2px solid var(--color-ring)",
          }}
          contentArrowStyle={{
            borderRight: "7px solid var(--color-primary)",
          }}
          iconStyle={{
            background: "var(--color-background)",
            color: "var(--color-primary)",
            border: "2px solid var(--color-primary)",
          }}
          icon={<Briefcase />}
        >
          <h3 className="vertical-timeline-element-title font-semibold">
            Full Stack Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Bizflow SRL</h4>
          <p>
            Desarrollo de una app web para automatización de procesos,
            optimización de interfaz y creación de un módulo de gestión de
            proyectos, mejorando la eficiencia operativa.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2024"
          contentStyle={{
            background: "transparent",
            color: "var(--color-foreground)",
            border: "2px solid var(--color-ring)",
          }}
          contentArrowStyle={{
            borderRight: "7px solid var(--color-primary)",
          }}
          iconStyle={{
            background: "var(--color-background)",
            color: "var(--color-primary)",
            border: "2px solid var(--color-primary)",
          }}
          icon={<GraduationCap />}
        >
          <h3 className="vertical-timeline-element-title font-semibold">
            Certification Moodle Admin & Developer Skills
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Moodle Academy</h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
