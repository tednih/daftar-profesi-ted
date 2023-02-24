import React, { useState } from "react";
import { ReactComponent as BgHeader } from "../src/images/bg-header-desktop.svg";
import { Link } from "react-router-dom";

import Img1 from "../src/images/photosnap.svg";
import Img2 from "../src/images/manage.svg";
import Img3 from "../src/images/account.svg";
import Img4 from "../src/images/myhome.svg";
import Img5 from "../src/images/loop-studios.svg";
import Img6 from "../src/images/faceit.svg";
import Img7 from "../src/images/shortly.svg";
import Img8 from "../src/images/insure.svg";
import Img9 from "../src/images/eyecam-co.svg";
import Img10 from "../src/images/the-air-filter-company.svg";

const Profesis = [
  {
    id: 1,
    company: "Photosnap",
    logo: Img1,
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 2,
    company: "Manage",
    logo: Img2,
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"],
  },
  {
    id: 3,
    company: "Account",
    logo: Img3,
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
  {
    id: 4,
    company: "MyHome",
    logo: Img4,
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: Img5,
    new: false,
    featured: false,
    position: "Software Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["Ruby", "Sass"],
  },
  {
    id: 6,
    company: "FaceIt",
    logo: Img6,
    new: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["Ruby"],
    tools: ["RoR"],
  },
  {
    id: 7,
    company: "Shortly",
    logo: Img7,
    new: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"],
  },
  {
    id: 8,
    company: "Insure",
    logo: Img8,
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"],
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: Img9,
    new: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"],
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: Img10,
    new: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
];

const DataProfesi = () => {
  const [selectedLabelLanguage, setSelectedLabelLanguage] = useState([]);
  const [selectedLabelRole, setSelectedLabelRole] = useState([]);
  const [selectedLabelLevel, setSelectedLabelLevel] = useState([]);

  const filteredProfessions = Profesis.filter((profesi) => {
    if (
      selectedLabelRole.length === 0 &&
      selectedLabelLevel.length === 0 &&
      selectedLabelLanguage.length === 0
    ) {
      return true; // show all professions if no label is selected
    } else {
      const roleMatch = selectedLabelRole.some(
        (label) => label === profesi.role
      );
      const levelMatch = selectedLabelLevel.some(
        (label) => label === profesi.level
      );
      const languageMatch = selectedLabelLanguage.some((label) =>
        profesi.languages.includes(label)
      );
      return roleMatch || levelMatch || languageMatch;
    }
  });

  return (
    <div>
      <div className="lg:max-w-[1440px] items-center mx-auto">
        <header className=" bg-primary ">
          <BgHeader className="w-[375px] lg:w-[1440px] " />
        </header>

        <div className=" bg-LighGrayishBg flex h-auto">
          <div className="items-center lg:max-w-[1140px] max-w-[375px] m-auto w-full md:flex mt-[-45px] flex flex-col">
            <div
              className={`p-4 bg-white mb-5 w-full rounded-md shadow-md flex flex-row justify-between items-center ${
                selectedLabelRole.length === 0 &&
                selectedLabelLanguage.length === 0 &&
                selectedLabelLevel.length === 0
                  ? "hidden"
                  : ""
              }`}
            >
              <ul className="flex flex-wrap gap-2 lg:ml-6 ">
                {selectedLabelRole.map((role, index) => (
                  <li className="bg-LighGrayishTablet pl-2 rounded-md space-x-3">
                    <div className="text-VeryDarkGrayish flex justify-between items-center">
                      {role}
                      <button
                        className="ml-2 bg-primary w-9 h-9 rounded-r-md hover:bg-VeryDarkGrayish text-white"
                        onClick={() => {
                          const newRole = [...selectedLabelRole];
                          newRole.splice(index, 1);
                          setSelectedLabelRole(newRole);
                        }}
                      >
                        X
                      </button>
                    </div>
                  </li>
                ))}

                {selectedLabelLevel.map((level, index) => (
                  <li className="bg-LighGrayishTablet pl-2 rounded-md space-x-3">
                    <div className="text-VeryDarkGrayish flex justify-between items-center">
                      {level}
                      <button
                        className="ml-2 bg-primary w-9 h-9 rounded-r-md hover:bg-VeryDarkGrayish text-white"
                        onClick={() => {
                          const newRole = [...selectedLabelLevel];
                          newRole.splice(index, 1);
                          setSelectedLabelLevel(newRole);
                        }}
                      >
                        X
                      </button>
                    </div>
                  </li>
                ))}

                {selectedLabelLanguage.map((language, index) => (
                  <li className="bg-LighGrayishTablet pl-2 rounded-md space-x-3">
                    <div className="text-VeryDarkGrayish flex justify-between items-center">
                      {language}
                      <button
                        className="ml-2 bg-primary w-9 h-9 rounded-r-md hover:bg-VeryDarkGrayish text-white"
                        onClick={() => {
                          const newLanguages = [...selectedLabelLanguage];
                          newLanguages.splice(index, 1);
                          setSelectedLabelLanguage(newLanguages);
                        }}
                      >
                        X
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <Link
                to="/"
                className="hover:text-primary lg:mr-6 hover:underline"
                onClick={() => {
                  setSelectedLabelLanguage([]);
                  setSelectedLabelLevel([]);
                  setSelectedLabelRole([]);
                }}
              >
                Clear
              </Link>
            </div>

            {filteredProfessions.map((profesi, index) => (
              <div className="p-4 bg-white w-full rounded-md shadow-md my-5 lg:my-2 hover:border-l-4 border-l-primary">
                <div className="justify-between flex flex-col lg:flex-row lg:items-center w-full max-w-[375px] lg:max-w-full ">
                  <div>
                    <ul
                      className="flex flex-col gap-3 lg:ml-6 lg:flex-row"
                      key={index.id}
                    >
                      <li className="mt-[-38px] lg:mt-0 ">
                        <img
                          src={profesi.logo}
                          alt={profesi.company}
                          className="object-cover h-12 w-12 lg:w-20 lg:h-20 "
                        />
                      </li>

                      <li className="items-center pb-5 lg:pb-0">
                        <div className="flex flex-row gap-2 mb-3 lg:mb-1 text-primary">
                          <h2> {profesi.company} </h2>
                          {profesi.new ? (
                            <h2 className="text-white bg-primary px-3 rounded-full">
                              New
                            </h2>
                          ) : null}
                          {profesi.new ? (
                            <h2 className="text-white bg-VeryDarkGrayish px-3 rounded-full">
                              featured
                            </h2>
                          ) : null}
                        </div>
                        <a
                          href="/"
                          className="text-VeryDarkGrayish hover:text-primary text-2xl "
                        >
                          {profesi.position}
                        </a>
                        <div className="flex flex-row mt-3 lg:mt-0 space-x-4 sm:text-sm text-DarkGrayish">
                          <h2> {profesi.postedAt}</h2>
                          <h2> {profesi.contract} </h2>
                          <h2> {profesi.location} </h2>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-DarkGrayish w-full h-1 mb-5 lg:hidden"></div>
                  <div>
                    <div className="">
                      <ul className="flex flex-wrap gap-4 lg:flex-row lg:mr-6">
                        <li>
                          <button
                            className="bg-LighGrayishTablet text-primary hover:bg-primary hover:text-LighGrayishTablet py-2 px-2 rounded-md"
                            onClick={() =>
                              setSelectedLabelRole([
                                ...selectedLabelRole,
                                profesi.role,
                              ])
                            }
                          >
                            {profesi.role}
                          </button>
                        </li>
                        <li>
                          <button
                            className="bg-LighGrayishTablet text-primary hover:bg-primary hover:text-LighGrayishTablet py-2 px-2 rounded-md"
                            onClick={() =>
                              setSelectedLabelLevel([
                                ...selectedLabelLevel,
                                profesi.level,
                              ])
                            }
                          >
                            {profesi.level}
                          </button>
                        </li>

                        {profesi.languages.map((language, index) => (
                          <li key={index}>
                            <button
                              className="bg-LighGrayishTablet text-primary hover:bg-primary hover:text-LighGrayishTablet py-2 px-2 rounded-md"
                              onClick={() =>
                                setSelectedLabelLanguage([
                                  ...selectedLabelLanguage,
                                  language,
                                ])
                              }
                            >
                              {language}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataProfesi;
