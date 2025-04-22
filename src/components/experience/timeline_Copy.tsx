// components/Timeline.js
import React from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

/**
 * timelineData: Array de eventos con campos:
 * - date: rango de fecha
 * - title: título del evento
 * - description: descripción breve
 * - iconSrc: ruta o URL de icono (32×32)
 */
const timelineData = [
  {
    date: 'March 2020 – April 2021',
    title: 'React.js Developer',
    description:
      'Developing and maintaining web applications using React.js and related technologies.',
    iconSrc: '/icons/starbucks.png',
  },
  {
    date: 'Jan 2021 – Feb 2022',
    title: 'React Native Developer',
    description:
      'Building mobile experiences with React Native and collaborating with cross-functional teams.',
    iconSrc: '/icons/tesla.png',
  },
  // Agrega aquí tus propios eventos con iconSrc, fechas y descripciones
];

export function Timeline() {
  return (
    <div className="relative mx-auto my-8 w-full max-w-4xl">
      {/* Línea central */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-1 bg-gray-200 dark:bg-gray-700" />
      </div>

      {timelineData.map((item, idx) => {
        const isLeft = idx % 2 === 0;
        return (
          <div key={idx} className="relative mb-12">
            {/* Fecha junto a la línea*/}
            <div
              className={`absolute top-0 z-10 w-1/2 text-sm font-medium text-gray-500 dark:text-gray-400 ${
                isLeft ? 'left-0 pr-8 text-right' : 'left-1/2 pl-8 text-left'
              }`}
            >
              {item.date}
            </div>

            {/* Icono sobre la línea */}
            <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 transform">
              <div className="flex items-center justify-center rounded-full bg-white dark:bg-gray-900 p-2 shadow-md">
                <Image
                  src={item.iconSrc}
                  alt={item.title + ' icon'}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </div>
            </div>

            {/* Card desplazada izquierda/derecha */}
            <div
              className={`mt-8 w-5/12 ${
                isLeft ? 'pr-8 ml-auto text-left' : 'pl-8'
              }`}
            >
              <Card className='bg-transparent'>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      })}
    </div>
  );
}