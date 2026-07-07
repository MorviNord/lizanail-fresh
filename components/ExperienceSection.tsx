import { ExperienceData } from "../constants/ExperienceData.tsx";

export default function ExperienceSection() {
  return (
    <section class="flex flex-col gap-8 text-white mt-8">
      <h2 class="text-3xl">Опыт работы:</h2>
      {ExperienceData.map((item, index) => (
        <div key={index} class="flex flex-col gap-4">
          <div class="text-[18px] flex flex-col gap-1">
            <h3 class="text-[20px] text-blue text-">{item.company}</h3>
            <h4>{item.location}</h4>
            <h5 class="text-[16px] text-gray-400">
              {item.period}
            </h5>
          </div>
          <div>
            <h4 class="text-2xl mb-2">{item.position}</h4>
            <ul>
              {item.responsibilities.map((resp, i) => <li key={i}>— {resp}
              </li>)}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
