/**
 * ============================================================
 *  ABDULKARIM'S PORTFOLIO DATA — EDIT THIS FILE TO UPDATE
 *  EVERYTHING (portfolio pages + resume) AUTOMATICALLY
 * ============================================================
 */
const PORTFOLIO = {

  // ── PERSONAL INFO ─────────────────────────────────────────
  name:       "Abdulkarim Ali Khamis",
  initials:   "AAK",
  title:      "Data Scientist & AI Engineer",
  email:      "abdulkarimali0001@gmail.com",
  phone:      "+1 234 567 8900",          // optional
  location:   "Sokcho, South Korea",
  linkedin:   "linkedin.com/in/abdulkarim",
  github:     "github.com/abdulkarimali0001",
  website:    "",                          // optional
  available:  true,                        // shows green dot
  availableText: "Open to full-time, freelance & research collaborations",

  // ── ABOUT ─────────────────────────────────────────────────
  about: [
    "Hello! I'm Abdulkarim Ali Khamis, a passionate Data Scientist and AI Engineer dedicated to building intelligent systems that solve real-world problems. I thrive at the intersection of mathematics, programming, and creativity.",
    "My journey into data science started with a deep curiosity about how machines can learn from data. Since then, I've worked across the full ML pipeline — from raw data collection and feature engineering to training production-grade models and deploying them at scale.",
    "I specialize in machine learning, deep learning, NLP, and MLOps. I love working on challenging problems that require both rigorous analytical thinking and bold creative approaches.",
    "Outside of work, you'll find me reading AI research papers, contributing to open-source projects, or thinking about the ethical dimensions of the AI systems we build."
  ],

  stats: [
    { num: "3+",  label: "Years Experience" },
    { num: "20+", label: "Projects Built" },
    { num: "5+",  label: "Domains Covered" },
    { num: "∞",   label: "Curiosity" },
  ],

  quickFacts: [
    { label: "Location",     value: "Sokcho, South Korea" },
    { label: "Education",    value: "B.Sc. Computer Science" },
    { label: "Experience",   value: "3+ Years in Data Science" },
    { label: "Languages",    value: "English, Korean, Swahili, Arabic" },
    { label: "Availability", value: "Full-time / Freelance" },
    { label: "Interests",    value: "AI Ethics, Research, OSS" },
  ],

  values: [
    { title: "Curiosity First",    desc: "I approach every problem with genuine curiosity — always asking 'why' before 'how'." },
    { title: "Data Integrity",     desc: "Clean, honest data and reproducible research are non-negotiable in my work." },
    { title: "Impact-Driven",      desc: "Every model I build should create tangible, measurable value in the real world." },
    { title: "Continuous Growth",  desc: "The field moves fast. I invest daily in learning, experimenting, and adapting." },
  ],

  // ── SKILLS ────────────────────────────────────────────────
  skillGroups: [
    {
      icon: "🧠", title: "Machine Learning", color: "c1",
      desc: "Classical ML algorithms, model selection, hyperparameter tuning and evaluation for production systems.",
      tags: ["Scikit-learn", "XGBoost", "LightGBM", "CatBoost", "Feature Engineering", "Cross-Validation"]
    },
    {
      icon: "🔥", title: "Deep Learning & AI", color: "c2",
      desc: "Neural network architectures, training pipelines, and fine-tuning large foundation models.",
      tags: ["PyTorch", "TensorFlow", "Keras", "Transformers", "CNNs", "RNNs / LSTMs"]
    },
    {
      icon: "💬", title: "NLP & LLMs", color: "c3",
      desc: "Natural language processing, large language models, RAG pipelines and prompt engineering.",
      tags: ["HuggingFace", "LangChain", "RAG", "Embeddings", "Fine-tuning", "FAISS / Chroma"]
    },
    {
      icon: "📊", title: "Data Engineering", color: "c4",
      desc: "Building robust data pipelines, ETL workflows and scalable data infrastructure.",
      tags: ["Python", "SQL", "Pandas", "PySpark", "Airflow", "dbt"]
    },
    {
      icon: "☁️", title: "MLOps & Cloud", color: "c5",
      desc: "Deploying and monitoring ML models in production with reproducible, scalable infrastructure.",
      tags: ["AWS / GCP", "Docker", "MLflow", "FastAPI", "CI/CD", "Kubernetes"]
    },
    {
      icon: "📈", title: "Analytics & Visualization", color: "c6",
      desc: "Communicating data insights through compelling visualizations and interactive dashboards.",
      tags: ["Tableau", "Power BI", "Plotly", "Matplotlib", "Seaborn", "Streamlit"]
    },
  ],

  proficiencies: [
    { name: "Python",                          pct: 95, colorClass: "c1f" },
    { name: "Machine Learning (Scikit / XGB)", pct: 90, colorClass: "c2f" },
    { name: "PyTorch / Deep Learning",         pct: 82, colorClass: "c3f" },
    { name: "SQL & Data Engineering",          pct: 85, colorClass: "c4f" },
    { name: "NLP / LLMs",                      pct: 80, colorClass: "c1f" },
    { name: "MLOps / Cloud Deployment",        pct: 75, colorClass: "c2f" },
  ],

  allTools: [
    "Python","R","SQL","Bash","PyTorch","TensorFlow","Scikit-learn","XGBoost",
    "LightGBM","Pandas","NumPy","Polars","PySpark","dbt","Airflow","HuggingFace",
    "LangChain","FastAPI","Streamlit","Docker","Kubernetes","MLflow","AWS","GCP",
    "Git","Linux","Tableau","Power BI","Plotly","PostgreSQL","MongoDB","Redis"
  ],

  // ── PROJECTS ──────────────────────────────────────────────
  projects: [
    {
      num: "project_01",
      title: "Customer Churn Prediction System",
      desc: "End-to-end ML pipeline that predicts customer churn with 94% accuracy. Includes feature engineering, model training with XGBoost, SHAP explainability, and a deployed REST API serving real-time predictions.",
      metric: "↑ 94% accuracy · 40% churn reduction",
      tags: ["Python", "XGBoost", "SHAP", "FastAPI", "Docker", "AWS"],
      status: "live",
      demo: "#",
      github: "#",
      color: "p1"
    },
    {
      num: "project_02",
      title: "LLM Document Intelligence Assistant",
      desc: "RAG-based chatbot enabling natural language queries over large document corpora. Built with LangChain, fine-tuned embeddings for domain-specific retrieval, and a Streamlit frontend.",
      metric: "↑ 10x faster doc search · 200+ docs indexed",
      tags: ["LangChain", "OpenAI", "FAISS", "Streamlit", "RAG"],
      status: "live",
      demo: "#",
      github: "#",
      color: "p2"
    },
    {
      num: "project_03",
      title: "Real-Time Fraud Detection Engine",
      desc: "Streaming anomaly detection system processing 10K+ transactions per second using an ensemble of Isolation Forest, AutoEncoder, and gradient-boosted classifier. Deployed on AWS with Kafka.",
      metric: "↓ 78% fraud reduction · 10K tx/sec",
      tags: ["Kafka", "PySpark", "AWS", "Isolation Forest", "AutoEncoder"],
      status: "live",
      demo: null,
      github: "#",
      color: "p3"
    },
    {
      num: "project_04",
      title: "Medical Image Segmentation with U-Net",
      desc: "Deep learning model for automated tumor segmentation from MRI scans using a modified U-Net architecture with attention gates. Trained on public datasets with extensive data augmentation.",
      metric: "↑ 0.89 Dice coefficient on validation set",
      tags: ["PyTorch", "U-Net", "Computer Vision", "Medical AI"],
      status: "wip",
      demo: null,
      github: "#",
      color: "p4"
    },
    {
      num: "project_05",
      title: "Sales Forecasting Dashboard",
      desc: "Time-series forecasting system combining Prophet, SARIMA, and LSTM ensemble for multi-product sales prediction. Interactive Plotly dashboard with scenario simulation for business planning.",
      metric: "↓ 15% MAPE vs. previous baseline",
      tags: ["Prophet", "LSTM", "Plotly", "Time Series", "Streamlit"],
      status: "live",
      demo: "#",
      github: "#",
      color: "p5"
    },
    {
      num: "project_06",
      title: "Arabic NLP Sentiment Classifier",
      desc: "Fine-tuned Arabic BERT (AraBERT) for multi-class sentiment analysis of social media text. Handles dialectal Arabic with custom preprocessing, achieving state-of-the-art results on benchmarks.",
      metric: "↑ 91.3% F1-score on Arabic Twitter dataset",
      tags: ["AraBERT", "HuggingFace", "NLP", "Fine-tuning", "Arabic"],
      status: "research",
      demo: null,
      github: "#",
      color: "p6"
    },
  ],

  // ── EXPERIENCE ────────────────────────────────────────────
  experience: [
    {
      role:    "Senior Data Scientist",
      company: "Tech Company Name",
      type:    "Full-time",
      dates:   "2023 — Present",
      bullets: [
        "Led ML initiatives that optimized core product features for 5M+ users.",
        "Built and deployed recommendation systems reducing user churn by 32%.",
        "Mentored 3 junior data scientists and defined team best practices.",
        "Established MLOps infrastructure cutting model deployment time by 60%.",
      ]
    },
    {
      role:    "Data Scientist",
      company: "Previous Company",
      type:    "Full-time",
      dates:   "2021 — 2023",
      bullets: [
        "Developed predictive models for supply chain optimization, saving $2M annually.",
        "Reduced operational costs by 20% through data-driven demand forecasting.",
        "Built an automated reporting pipeline saving 10+ hours/week.",
        "Collaborated with product, engineering, and leadership teams cross-functionally.",
      ]
    },
    {
      role:    "Data Analyst",
      company: "First Company",
      type:    "Full-time",
      dates:   "2020 — 2021",
      bullets: [
        "Built executive dashboards and KPI tracking reports in Power BI and Tableau.",
        "Performed exploratory data analysis to support strategic business decisions.",
        "Automated monthly reporting workflows using Python and SQL.",
      ]
    },
    {
      role:    "Data Science Intern",
      company: "Internship Company",
      type:    "Internship",
      dates:   "2019 — 2020",
      bullets: [
        "Assisted in building ML models for customer segmentation using K-Means.",
        "Conducted data cleaning and preprocessing on datasets of 1M+ records.",
      ]
    },
  ],

  education: [
    {
      degree: "M.Sc. Data Science (Part-time)",
      school: "Your University Name",
      years:  "2021 — 2023",
      detail: "Specialized in advanced ML, probabilistic modeling, and big data systems. Dissertation on real-time anomaly detection in financial data."
    },
    {
      degree: "B.Sc. Computer Science",
      school: "Your University Name",
      years:  "2015 — 2019",
      detail: "Graduated with First Class Honours. Thesis: Deep Learning for Medical Image Segmentation. Active member of the AI/ML research lab."
    },
  ],

  certifications: [
    { name: "AWS Certified ML Specialty",    issuer: "Amazon Web Services",    year: "2023" },
    { name: "Deep Learning Specialization",  issuer: "Coursera / DeepLearning.AI", year: "2022" },
    { name: "TensorFlow Developer",          issuer: "Google / Coursera",      year: "2022" },
    { name: "MLOps Fundamentals",            issuer: "Google Cloud",           year: "2023" },
    { name: "Data Engineering on GCP",       issuer: "Google Cloud",           year: "2021" },
    { name: "Applied Data Science",          issuer: "IBM / Coursera",         year: "2020" },
  ],

  languages: [
    { lang: "English", level: "Fluent" },
    { lang: "Arabic",  level: "Native" },
  ],
};
