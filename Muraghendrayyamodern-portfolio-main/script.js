const portfolio = {
  name: "Muraghendrayya Kadlimath",
  title: "Data Analyst",
  bio: "Data Analyst with 3.5 years of experience in SQL, Python, and BI tools like Tableau and Power BI. Skilled in data cleaning, trend analysis, and transforming raw data into strategic business insights. Experienced in building impactful dashboards and ensuring data accuracy for informed decision-making.",
  email: "muragha1998@gmail.com",
  contact: "+91 7349355734",
  github: "https://github.com/Muraghendrayya",
  X: "#", // You can add your Twitter/X link here

  skills: [
    "Power BI",
    "Power BI Report Builder",
    "SQL (MySQL, MS SQL Server)",
    "Python (Pandas, NumPy)",
    "Tableau",
    "Power Query",
    "Advanced Excel (Pivot Tables, VBA Macros)",
    "ETL (Extract, Transform, Load)",
    "Data Cleaning & Visualization",
    "Statistical Analysis",
    "Jira",
    "Atlas",
    "PyCharm",
    "Jupyter Notebook"
  ],

  experience: [
    {
      company: "Cognizant Technology Solutions",
      title: "Data Analyst",
      duration: "Dec 2021 – Apr 2025",
      logo: "images/cognizant.png", // Add your company logo
      responsibilities: [
        "Developed Power BI dashboards to visualize team KPIs and business performance.",
        "Built ETL workflows using Python and SQL for audit and performance data automation.",
        "Integrated multiple data sources using SQL and Power Query.",
        "Implemented row-level security and optimized Power BI models for performance.",
        "Conducted ad-hoc data analysis for audits and performance improvements."
      ]
    },
    {
      company: "AI Variant",
      title: "Intern (HR Analytics)",
      duration: "May 2021 – Dec 2021",
      logo: "images/aivariant.png", // Add your company logo
      responsibilities: [
        "Analyzed attrition, compensation, and job satisfaction trends across departments.",
        "Created dynamic dashboards in Tableau and Power BI for HR insights.",
        "Provided recommendations to improve employee retention strategies."
      ]
    }
  ],

  projects: [
    {
      name: "Superstore Sales and Orders Analysis",
      platform: "github",
      link: "YOUR_SUPERSTORE_LINK",
      desc: "Interactive Power BI dashboard with revenue, profit, category, and region analysis, plus YoY growth insights."
    },
    {
      name: "TAT vs Production Analysis",
      platform: "github",
      link: "YOUR_TAT_LINK",
      desc: "Analyzed TAT, incentives, and output using SQL & Excel, delivering insights that improved productivity by 12%."
    },
    {
      name: "Interactive GIS Mapping Data Project",
      platform: "github",
      link: "YOUR_GIS_LINK",
      desc: "Built a geospatial analysis dashboard using Python, Folium, and Power BI to visualize regional data trends with location-based filtering and hotspot detection."
    }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  const $ = (id) => document.getElementById(id);
  $("name").textContent = portfolio.name;
  $("nameInline").textContent = portfolio.name;
  $("title").textContent = portfolio.title;
  $("bio").textContent = portfolio.bio;
  $("emailLink").textContent = portfolio.email;
  $("emailLink").href = "mailto:" + portfolio.email;
  $("contactNumber").textContent = portfolio.contact;
  $("contactNumber").href = "tel:" + portfolio.contact.replace(/\s+/g, "");
  $("github").href = portfolio.github;
  $("X").href = portfolio.X;
  $("year").textContent = new Date().getFullYear();

  const skillsList = $("skillsList");
  portfolio.skills.forEach((skill) => {
    const div = document.createElement("div");
    div.className =
      "bg-purple-100 text-purple-800 text-sm px-4 py-2 rounded-full";
    div.textContent = skill;
    skillsList.appendChild(div);
  });

  const experienceList = $("experienceList");
  portfolio.experience.forEach((exp) => {
    const div = document.createElement("div");
    div.className =
      "max-w-md mx-auto text-center p-6 border border-purple-200 rounded-xl shadow bg-white";
    div.innerHTML = `
      <img src="${exp.logo}" alt="${exp.company} Logo" class="w-20 h-20 mx-auto mb-4 rounded-md object-contain border border-gray-300 shadow" />
      <h4 class="text-xl font-semibold text-purple-700">${exp.company}</h4>
      <p class="text-teal-600 font-medium mt-1">${exp.title}</p>
      <p class="text-sm text-gray-500 mb-4">${exp.duration}</p>
      <ul class="list-disc text-left list-inside text-sm text-gray-700 space-y-1">
        ${exp.responsibilities.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    `;
    experienceList.appendChild(div);
  });

  const projectsList = $("projectsList");
  portfolio.projects.forEach((project) => {
    const iconClass =
      project.platform === "github" ? "fab fa-github" : "fas fa-bolt";

    const div = document.createElement("div");
    div.className = "bg-white border border-purple-200 rounded-xl p-4 shadow";
    div.innerHTML = `
      <div class="flex items-center gap-3 mb-2">
        <i class="${iconClass} text-purple-600 text-xl"></i>
        <h4 class="text-xl font-semibold text-purple-700">${project.name}</h4>
      </div>
      <a href="${project.link}" target="_blank" class="text-teal-600 hover:underline break-words">View Project -></a>
      <hr style="height: 1px; background-color: grey; border: none;">
      <p class="text-sm text-gray-600 mb-2">${project.desc}</p>
    `;
    projectsList.appendChild(div);
  });
});
