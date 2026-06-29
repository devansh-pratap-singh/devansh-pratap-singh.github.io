// ─── Identity ─────────────────────────────────────────────────
export const meta = {
  name:     'Devansh Pratap Singh',
  role:     'Data Engineer',
  tagline:  'Turning messy, complicated data into something clear, structured, and beautiful.',
  email:    'mailto:devansh.pratap@gmail.com',
  linkedin: 'https://www.linkedin.com/in/devanshpratapsingh/',
  github:   'https://www.github.com/devansh-pratap-singh',
};

// ─── About ────────────────────────────────────────────────────
export const about = {
  pullQuote: 'I sit at the crossroads of engineering and storytelling - code is my toolkit, but the real goal is creating data that people can actually use and trust.',
  body: 'Clean data is like good coffee - it keeps everything else running smoothly. Currently building pipelines at Bizmetric and always open to connecting with people who see data as possibilities.',
};

// ─── Skills ───────────────────────────────────────────────────
export const skills = {
  groups: [
    {
      id: 'analysis',
      label: 'Analysis & Visualization',
      items: [
        { name: 'Python',        primary: true  },
        { name: 'R',             primary: true  },
        { name: 'SQL',           primary: true  },
        { name: 'Power BI',      primary: true },
        { name: 'Tableau',       primary: true },
        { name: 'Looker Studio', primary: true },
      ],
    },
    {
      id: 'cloud',
      label: 'Big Data & Cloud',
      items: [
        { name: 'Azure',   primary: true },
        { name: 'Fabric',  primary: true },
        { name: 'AWS',     primary: true  },
        { name: 'GCP',     primary: true  },
        { name: 'Spark',   primary: true  },
        { name: 'Airflow', primary: true },
      ],
    },
  ],
};

// ─── Experience ───────────────────────────────────────────────
export const experience = [
  {
    id:      'bizmetric',
    role:    'Data Engineer',
    company: 'Biz-Metric Partners Inc.',
    period:  'September 2025 - Present',
    current: true,
    bullets: [
      'Led gold layer development and client-specific reporting for a large-scale healthcare data migration, authoring SQL scripts to create Databricks gold layer views and building 10 customized Direct Query Power BI reports as part of a 16-person team migrating Wipro\'s Healthcare & Medicare division from on-prem PostgreSQL/Jasper to a medallion architecture on Microsoft Azure, Databricks, and Microsoft Fabric, resulting in 180+ standardized reports and 50 custom reports deployed across 30 enterprise customers.',
      'Engineered an end-to-end compliance automation solution for CITGO using Microsoft Fabric, reducing manual verification time by 90% (80 to 8 hours/month) for 500+ monthly store audits across 4,300 locations through automated data pipelines (PySpark), Azure Document Intelligence for receipt OCR processing, SQL stored procedures for data orchestration, and integrated Power BI/Power Apps/Power Automate for reporting and automated penalty notifications.',
      'Contributed to 5-person team building a proof-of-concept medallion architecture pipeline on Microsoft Fabric for Tetra Technologies Inc., developing PySpark transformations for data validation (silver layer) and enrichment (gold layer) with optimized incremental processing completing in under 20 minutes for 30-minute refresh intervals.'
    ],
  },
  {
    id:      'pulllogic',
    role:    'Data Science Intern',
    company: 'Pull Logic Inc.',
    period:  'June 2023 - August 2023',
    current: false,
    bullets: [
      'Architected and deployed scalable ETL pipelines using Python and SQL, to orchestrate seamless data workflows, achieving 99% data integrity, and reducing manual data processing by 80%.',
      'Built automated feature engineering pipelines in Python to preprocess and transform 10M+ sales records for ML models, reducing model training data preparation time by 60%.',
      'Engineered data integration layer connecting Delta Lake to Power BI using Python and SQL, enabling real-time analytics on 5TB+ of data and improving dashboard load performance by 50%.',
    ],
  },
  {
    id:      'wipro',
    role:    'Project Engineer',
    company: 'Wipro Limited',
    period:  'June 2021 - July 2022',
    current: false,
    bullets: [
      'Designed and maintained production-grade data processing pipelines using Python and SQL, optimizing query performance by 45% and scaling systems to handle 3x data volume growth without infrastructure changes.',
      'Developed RESTful APIs using Python to enable automated data extraction and integration across 10+ microservices, reducing manual data requests by 70% and report generation time by 50%.',
      'Re-architected ETL workflows by implementing incremental loading strategies and parallel processing, reducing end-to-end data processing time from 4 hours to 45 minutes (70% improvement)',
    ],
  },
];

// ─── Projects ─────────────────────────────────────────────────
export const projects = [
  {
    id:          'youtube-pipeline',
    title:       'AWS Based YouTube Data Pipeline',
    description: 'Cloud-based ETL pipeline using AWS (S3, Lambda, Glue, Athena) to process YouTube trending data. Automated with PySpark and SQL; Power BI dashboards visualise regional trends and engagement insights.',
    tags:        ['AWS', 'PySpark', 'SQL','Power BI'],
    url:         'https://www.linkedin.com/pulse/turning-youtube-trends-insights-aws-data-pipeline-pratap-singh-vbvdc',
    primary:     false,
  },
  {
    id:          'imdb-text',
    title:       'Text Analysis on IMDb Movie Reviews',
    description: 'Sentiment analysis and keyword extraction on IMDb reviews using Google BigQuery and Vertex AI generative models, delivering insights from large-scale text datasets.',
    tags:        ['BigQuery', 'Vertex AI', 'NLP'],
    url:         'https://www.linkedin.com/pulse/bigquery-gen-ai-match-made-data-heaven-devansh-pratap-singh-krilc',
    primary:     false,
  },
  {
    id:          'bank-data',
    title:       "Automating Data Compilation - World's Largest Banks",
    description: 'Python ETL script automating market capitalisation data for the top 10 global banks across multiple currencies, extracted from live sources.',
    tags:        ['Python', 'ETL', 'Web Scraping'],
    url:         'https://www.linkedin.com/pulse/automating-data-compilation-worlds-largest-banks-devansh-pratap-singh-3ogic',
    primary:     false,
  },
];

export const moreProjectsUrl = 'https://www.linkedin.com/in/devanshpratapsingh/';

// ─── Education ────────────────────────────────────────────────
export const education = [
  {
    id:     'ms-ba',
    degree: 'Master of Science in Business Analytics',
    school: 'The University of Texas at Dallas',
    period: 'August 2022 - May 2024',
  },
  {
    id:     'cert-bi',
    degree: 'Graduate Certificate in Business Intelligence and Data Mining',
    school: 'The University of Texas at Dallas',
    period: 'January 2024 - May 2024',
  },
  {
    id:     'btech',
    degree: 'Bachelor of Technology in Electrical and Electronics Engineering',
    school: 'National Institute of Technology, Jamshedpur',
    period: 'August 2017 - May 2021',
  },
];

// ─── Certifications ───────────────────────────────────────────
export const certifications = [
  {
    id:   'ibm',
    name: 'IBM Data Engineering Professional',
    url:  'https://www.linkedin.com/in/devanshpratapsingh/details/certifications/',
  },
  {
    id:   'fabric',
    name: 'Microsoft Certified: Fabric Data Engineer Associate',
    url:  'https://www.linkedin.com/in/devanshpratapsingh/details/certifications/',
  },
];

export const moreCertsUrl = 'https://www.linkedin.com/in/devanshpratapsingh/details/certifications/';