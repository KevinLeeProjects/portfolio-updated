"use client";

import postBackend from '@/helpers/postBackend';
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";

import { FormData, Project, LoggedIn } from "@/types";

const AddProjectPage = () => {

  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    route: '',
    columnTitle: [''],
    value: [''],
  });

  const [gameOrProject, setGameOrProject] = useState('');

  const setProject = () => {
      setGameOrProject("addProject");
  }

  const setGame = () => {
      setGameOrProject("addGame");
  }

  const handleSubmit = async (e: any) => {
      e.preventDefault();
  
      const route = formData.route;
      console.log(JSON.stringify(formData));
      let newProject: Project = {
        route: formData.route,
      };

      for (let i = 0; i < formData.columnTitle.length; i++) {
        newProject[formData.columnTitle[i]] = formData.value[i];
      }
  
      try {
        // Change the URL to the correct API endpoint
        const response = postBackend(newProject, `${gameOrProject}/${route}`);
  
        console.log(JSON.stringify(newProject));
  
        if ((await response).ok) {
          console.log('Form submitted successfully');
          // Use the navigate function to redirect
          router.push("/");
        } else {
          console.error('Form submission failed');
          window.alert('Something went wrong');
          // Handle error (e.g., show an error message)
        }
      } catch (error) {
        console.error('An error occurred', error);
      }
  };

  const handleChange = (e:any) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
  };
  
  const addColumn = () => {
    setFormData({
      ...formData,
      columnTitle: [...formData.columnTitle, ''],
      value: [...formData.value, ''],
    });
  };
    
    
  const handleValueChange = (e: any, index: number) => {
    const newValue = [...formData.value];
    newValue[index] = e.target.value;
    setFormData({ ...formData, value: newValue });
  };

  const handleColumnTitleChange = (e: any, index: number) => {
    const newColumnTitle = [...formData.columnTitle];
    newColumnTitle[index] = e.target.value;
    setFormData({ ...formData, columnTitle: newColumnTitle });
  };

    return (
        <div className="
            overflow-auto
            h-[100dvh]
        ">
            <div className="
                hidden
                md:flex
                flex-col
                mt-[100px]
                ml-[5vw]
                border
                rounded-lg
                w-[90vw]
                h-fit
                items-center
                text-center
                justify-center
            ">
                <h1 className="mt-[75px] text-white text-4xl font-semibold">
                    {"Add Project or Game"}
                </h1>
                <form className="
                    mt-[100px]
                ">
                    <input
                        type="text"
                        name="route"
                        className="addProjectInput"
                        placeholder="Route"
                        required
                        value={formData.route}
                        onChange={(e) => handleChange(e)}
                    />
                    <div className="addProjects_line"></div>
                    <div className="addColumnContainer">
                    {formData.columnTitle?.map((column, index) => (
                        <div className="addInfoContainer" key={`pair-${index}`}>
                        <input
                            type="text"
                            name={`columnTitle${index + 1}`}
                            className="addColumnTitle"
                            placeholder={`Column Title ${index + 1}`}
                            value={formData.columnTitle[index]}
                            onChange={(e) => handleColumnTitleChange(e, index)}
                            key={index}
                        />
                        <div className="addProjects_line"></div>
                        <input
                            type="text"
                            name={`values${index + 1}`}
                            className="addValue"
                            placeholder={`Value ${index + 1}`}
                            value={formData.value[index]}
                            onChange={(e) => handleValueChange(e, index)}
                            key={index}
                        />
                        <div className="addProjects_line"></div>
                        </div>
                    ))}

                    </div>
                    <div className="addColumnButtonContainer">
                    <button className="addColumnButton" type="button" onClick={addColumn}>
                        Add More
                    </button>
                    </div>
                    <div className="addProjects_buttons">
                      <button className="addProjectButton" type="submit" onClick={setProject}>Add Project</button>
                      <button className="addGameButton" type="submit" onClick={setGame}>Add Game</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProjectPage;