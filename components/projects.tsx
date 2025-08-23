import Image from "next/image";
import Section from "./shared/section";

const projectsList = [
  {
    title: "Simple Polls",
    subtitle:
      "A simple web application built using Next.js and MongoDB for creating, sharing and analyzing polls.",
    image: "simple-polls.png",
  },
  {
    title: "Cloud 69",
    subtitle:
      "A google drive-like app built using React and Firebase for storing and sharing files.",
    image: "cloud69.jpg",
  },
  {
    title: "Easy WAEC",
    subtitle:
      "A simple website built with vanilla HTML, CSS and JavaScript for students to check thier WAEC results",
    image: "easy-waec.jpg",
  },
  {
    title: "Image To PDF",
    subtitle:
      "A simple utility application build with vanilla HTML, CSS and JavaScript to for easy conversion of images to PDF",
    image: "image-to-pdf.jpg",
  },
  {
    title: "NeoScores",
    subtitle:
      "A simple app built with React Native and Express JS for real time football score update.",
    image: "",
  },
  {
    title: "Read Aloud",
    subtitle:
      "A simple app built with React Native, text-to-speech API and Expo Speech API for convert images to text and read them out loud.",
    image: "",
  },
];

export default function Projects() {
  return (
    <div id="projects">
      <Section
        heading="Delivered Projects"
        subheading="ACCOMPLISHMENTS"
        secondary="Listed below are some of the most representative projects I've worked
          on. They range from basic web design for presentation sites to
          advanced fullstack development."
      >
        <div className="grid md:grid-cols-3 gap-8">
          {projectsList.map(({ title, image, subtitle }, index) => (
            <div key={index}>
              <Image
                src={`/images/${image}`}
                width={300}
                height={150}
                alt=""
                className="w-full aspect-video object-contain"
              />
              <p className="text-primary text-2xl font-bold">{title}</p>
              <p className="text-muted-foreground">{subtitle}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
