export const resumePath = "/resume/vishal-panuganti-resume.pdf";

export const socials = [
  { label: "GitHub", href: "https://github.com/datajunkie-v" },
  { label: "LinkedIn", href: "https://linkedin.com/in/vishal-panuganti-6898443b7" },
  { label: "Email", href: "mailto:panugantivishal3.14@gmail.com" },
];

export type PortfolioProject = {
  number: string;
  slug: string;
  title: string;
  category: string;
  status: "Completed project" | "Proposed concept" | "Details coming soon";
  mark: string;
  description: string;
  tags: string[];
  flow: string[];
  details: string[];
  tagLabel: string;
};

export const projects: PortfolioProject[] = [
  {
    number: "01",
    slug: "recommendation-system",
    title: "Hybrid Recommendation System",
    category: "Recommender systems",
    status: "Completed project",
    mark: "SVD",
    description:
      "A hybrid recommendation engine combining collaborative filtering and content-based filtering for personalized product recommendations, with an interactive Taipy interface.",
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Cosine Similarity", "SVD", "Taipy"],
    tagLabel: "Technologies used",
    flow: ["Data", "Feature extraction", "Similarity", "Matrix factorization", "Ranking", "Taipy interface"],
    details: [
      "Combines collaborative filtering and content-based filtering for personalized product recommendations.",
      "Uses cosine similarity and matrix factorization (SVD) as recommendation methods.",
      "Includes an interactive interface built with Taipy.",
    ],
  },
  {
    number: "02",
    slug: "stock-market-forecasting",
    title: "Stock Market Forecasting System",
    category: "Time series · Applied AI",
    status: "Completed project",
    mark: "TFM",
    description:
      "A system for short- and long-term forecasting from historical market data, using Google TimesFM with evaluation and interactive visualization.",
    tags: ["Python", "Google TimesFM", "Time Series", "Jugaad Data API", "Plotly", "Git"],
    tagLabel: "Technologies used",
    flow: ["Market data", "Data ingestion", "Feature engineering", "TimesFM", "Forecast & evaluate", "Visualization"],
    details: [
      "Performs short-term and long-term forecasting from historical market data.",
      "Uses Google TimesFM, with data provided through the Jugaad Data API.",
      "Includes forecast evaluation and Plotly visualization.",
    ],
  },
  {
    number: "03",
    slug: "grounded-knowledge-assistant",
    title: "Grounded Knowledge Assistant",
    category: "Generative AI · RAG",
    status: "Proposed concept",
    mark: "RAG",
    description:
      "A planned retrieval-augmented assistant for searching a curated collection of technical documents and answering questions with source citations.",
    tags: ["Python", "RAG", "LLM API", "Embeddings", "Vector search", "FastAPI", "Streamlit"],
    tagLabel: "Suggested stack",
    flow: ["Documents", "Chunk & index", "Retrieve context", "Generate answer", "Cited response"],
    details: [
      "Concept: ingest a scoped document collection and make it searchable through natural-language questions.",
      "Retrieve relevant passages before generation so answers can be grounded in the source material.",
      "Return citations alongside responses, with evaluation focused on retrieval relevance and answer grounding.",
    ],
  },
  {
    number: "04",
    slug: "project-four",
    title: "Project title to come",
    category: "Reserved project",
    status: "Details coming soon",
    mark: "",
    description:
      "Reserved for a project you will add. Its description, workflow, and technologies are intentionally left unspecified.",
    tags: [],
    tagLabel: "Technologies",
    flow: [],
    details: [],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Techwave",
    place: "Hyderabad, Telangana",
    date: "Mar 2025 — Present",
    work: [
      {
        title: "Fulton Hogan · Infrastructure Defect Detection",
        summary:
          "Computer-vision workflows for infrastructure imagery, from dataset preparation and annotation QA through model evaluation and production pipeline support.",
        tags: ["NVIDIA TAO Toolkit", "PyTorch", "Ultralytics YOLO", "Azure DevOps"],
        points: [
          "Train and tune computer-vision models with augmentation, confidence-threshold optimization, and evaluation across prepared image datasets.",
          "Build pipeline components for image preprocessing, high-throughput inference, post-processing, and automated validation.",
          "Support debugging and deployment, collaborate across teams, and mentor junior engineers.",
        ],
      },
      {
        title: "ACT · Defect Monitoring & Operational BI",
        summary:
          "Operational reporting and defect monitoring through analytical data models, KPI reporting, and report automation.",
        tags: ["Power BI", "DAX", "Power Query", "Apache Superset", "Grafana"],
        points: [
          "Transform data and build analytical models for operational views and KPI reporting.",
          "Develop reporting workflows with Power BI, Superset, and Grafana.",
        ],
      },
    ],
  },
  {
    role: "Data Engineer Intern",
    company: "Schneider Electric",
    place: "Nashville, USA",
    date: "Jun 2021 — Oct 2021",
    work: [
      {
        title: "Oracle to Amazon RDS Migration",
        summary:
          "Migration readiness and batch data workflows across Oracle, Amazon RDS, Databricks, and Amazon S3.",
        tags: ["AWS Schema Conversion Tool", "Amazon RDS", "Databricks", "Amazon S3"],
        points: [
          "Analyzed database dependencies and migration readiness using AWS Schema Conversion Tool.",
          "Worked on conversion and compatibility remediation for tables, views, indexes, and SQL objects.",
          "Built ETL workflows and batch processing with Databricks and Amazon S3.",
        ],
      },
    ],
  },
];

export const skillGroups = [
  {
    title: "Languages & Frameworks",
    skills: ["Python", "R", "SQL", "PyTorch", "TensorFlow", "Scikit-learn", "NumPy", "Pandas", "SciPy", "OpenCV", "NVIDIA TAO Toolkit", "Ultralytics YOLO"],
  },
  {
    title: "AI / ML & Data Science",
    skills: ["Machine Learning", "Deep Learning", "Generative AI", "LLMs", "RAG", "Prompt Engineering", "AI Agents", "NLP", "Computer Vision", "OCR", "Recommendation Systems", "Time Series Forecasting"],
  },
  {
    title: "Cloud / DevOps / BI",
    skills: ["AWS", "RDS", "S3", "AWS SCT", "Azure", "Azure DevOps", "Databricks", "Docker", "CI/CD", "Linux", "Git", "Power BI", "Tableau", "Apache Superset", "Grafana", "Microsoft Fabric"],
  },
];

export const skillMatrix = [
  { title: "Machine Learning", note: "Statistical and predictive systems", core: ["PyTorch", "Scikit-learn", "TensorFlow"], more: ["Machine Learning", "Deep Learning", "Neural Networks", "Transformers", "Gradient Boosted Trees", "Time Series Forecasting", "Recommendation Systems", "GPU / CUDA Fundamentals", "NumPy", "Pandas", "SciPy", "R"] },
  { title: "Generative AI", note: "Language and multimodal intelligence", core: ["LLMs", "RAG", "AI Agents"], more: ["Generative AI", "Prompt Engineering", "Vector Databases", "LLM Fine-tuning", "Multimodal AI", "Multi-agent Systems", "Cost Optimization", "NLP"] },
  { title: "Computer Vision", note: "Machines that understand visual information", core: ["Ultralytics YOLO", "OpenCV", "OCR"], more: ["Computer Vision", "Object Detection", "Segmentation", "Image Classification", "Albumentations", "NVIDIA TAO Toolkit", "Edge Deployment", "ONNX", "TensorRT"] },
  { title: "Data & Analytics", note: "The foundation behind intelligent systems", core: ["Python", "SQL", "Spark / PySpark"], more: ["Kafka", "Databricks", "Power BI", "Tableau", "Apache Superset", "Grafana", "Microsoft Fabric"] },
  { title: "Cloud & Infrastructure", note: "Where models run in production", core: ["AWS", "Azure", "Docker"], more: ["S3", "EC2", "RDS", "AWS SCT", "SageMaker", "Bedrock", "Lambda", "IAM", "CloudWatch", "Containerization"] },
  { title: "Engineering & MLOps", note: "Shipping reliable, maintainable systems", core: ["Git / GitHub", "FastAPI", "CI/CD for ML"], more: ["API Design", "Code Review", "Testing", "Azure DevOps", "Linux"] },
];

export const lifecycle = ["Data", "Model", "Intelligence", "Deployment", "Insight"];

export const education = [
  { date: "2019 — 2021", title: "Master of Science in Data Science", detail: "University of Maryland, Baltimore County", mark: "MS", coursework: ["Data Management", "Big Data Tools and Architecture", "Machine Learning", "Deep Learning", "Data Structures and Algorithms", "Natural Language Processing", "Computer Vision"] },
  { date: "2015 — 2019", title: "B.Tech in Computer Science", detail: "Sreyas Institute of Engineering and Technology", mark: "B.Tech", coursework: ["Operating Systems", "Computer Networks", "Cyber Security", "Probability and Statistics", "Software Engineering"] },
];

export const languages = ["English", "Hindi", "Telugu", "Japanese"];

export const certification = "Microsoft Certified: Power BI Data Analyst Associate";