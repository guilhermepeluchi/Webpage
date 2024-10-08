import React from 'react';

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {/* Adicione os cartões de habilidades aqui */}
        {[
          { title: "Programming Languages", skills: ["C#", "Java", "JavaScript", "PHP", "Python", "SQL"] },
          { title: "Frameworks", skills: ["ASP.Net Core MVC", "React", "Bootstrap"] },
          { title: "ORM (Object Relational Mapper)", skills: ["Entity Framework", "ADO.Net", "Dapper"] },
          { title: "Databases", skills: ["SQL Server", "MySQL", "Oracle", "MongoDB"] },
          { title: "Cloud Services", skills: ["Microsoft Azure", "AWS"] },
          { title: "Mobile", skills: ["iOS (Swift + Xcode)", "Android (Java + Android Studio)"] },
          { title: "Version Control", skills: ["GitHub"] },
        ].map(({ title, skills }) => (
          <div className="skill-card" key={title}>
            <h3>{title}</h3>
            <ul>
              {skills.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
