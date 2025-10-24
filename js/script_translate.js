// ========================================================================
// 1. DADOS DE TRADUÇÃO (translations)
// ========================================================================

const translations = {
	pt: {
		// setion 1: menu
		trad_menu1: "Home",
		trad_menu2: "About",
		trad_menu3: "Projects and Research",
		trad_menu4: "Contact",

		// setion 2: banner
		trad_banner1: "I am Lucas",
		trad_banner2: "Data Scientist",
		trad_banner3: "&",
		trad_banner4: "Feature Engineer",
		trad_banner5: "I solve complex problems that connect user experience with business security and risk, with solutions focused on Machine Learning and Artificial Intelligence.",

		// setion 3: button download
		btn_download: "Download CV",

		// setion 4: Features
		trad_features1: "Analytics & Data Science",
		trad_features2: "With advanced features, I help companies define the best direction, using analytics and data science to create a successful business.",
		trad_features3: "Management",
		trad_features4: "With strong strategic skills, I work in project management and governance throughout the analytics steps. I have excellent communication skills and articulate technical concepts with clarity and objectivity.",
		trad_features5: "Financial Modelling",
		trad_features6: "With experience in banking and acquiring, I provide specialized solutions that can ensure higher profits for the business with the application of advanced ML and AI techniques.",

		// setion 5: About Me
		trad_about: "About Me",
		trad_about2: "I currently work as a Senior Data Scientist at Banco Sicredi, a Brazilian financial institution with 10+ million customers. Previously, I was in positions of Data Analyst and Risk Modeling Analyst at Getnet Brasil S.A, working with a focus on strategic planning in the CRM and Fraud Prevention areas. In the academic environment, I am studying the Master's program in Computer Science, working in the research line of Algorithms and Optimization, but I also have a postgraduate degree in Data Science and a bachelor's degree in Accounting Sciences.",

		// setion 6: About Me - Icons
		trad_about_icon1: "Years of Experience",
		trad_about_icon2: "Programming Languages",
		trad_about_icon3: "Project Completed",

		// setion 7: Banner - Apresentation
		trad_banner_apr: "I connect data to advanced solutions that drive value",

		// setion 8: My skills
		trad_skills: "My Skills",
		trad_skills2: "Since the beginning of my journey with big data, I have acquired some skills. Below are some statistics that represent the level of understanding and utilization of the tools as a percentage.",

		// Títulos de colunas de habilidades (usados em todos os modais de skills)
		modal_skills_title1_python: "Usability and Applications",
		modal_skills_title2_python: "Functions, methods and resources used",

		modal_skills_title1_spark: "Usability and Applications",
		modal_skills_title2_spark: "Functions, methods and resources used",

		modal_skills_title1_sql: "Usability and Applications",
		modal_skills_title2_sql: "Functions, methods and resources used",

		modal_skills_title1_r: "Usability and Applications",
		modal_skills_title2_r: "Functions, methods and resources used",

		modal_skills_title1_databricks: "Usability and Applications",
		modal_skills_title2_databricks: "Functions, methods and resources used",

		modal_skills_title1_aws: "Usability and Applications",
		modal_skills_title2_aws: "Functions, methods and resources used",

		modal_skills_title1_tableau: "Usability and Applications",
		modal_skills_title2_tableau: "Functions, methods and resources used",

		modal_skills_title1_pbi: "Usability and Applications",
		modal_skills_title2_pbi: "Functions, methods and resources used",

		// ===================================
		// CONTEÚDO DOS MODAIS (Extraído dos anexos)
		// ===================================
		// Python
		modal_python_title: "Python",
		modal_python_r1c1: "Data Analysis and Manipulation",
		modal_python_r1c2: "Use libraries such as <em>Pandas</em> and <em>NumPy</em> to import, clean, and manipulate large volumes of structured and unstructured data.",
		modal_python_r2c1: "Machine Learning and AI",
		modal_python_r2c2: "Build predictive models with <em>Scikit-learn</em>, <em>TensorFlow</em>, and <em>PyTorch</em>; perform hyperparameter tuning and cross-validation.",
		modal_python_r3c1: "ETL and Automation",
		modal_python_r3c2: "Develop automated ETL pipelines using <em>Airflow</em>, <em>Luigi</em>, or custom Python scripts.",
		modal_python_r4c1: "Data Visualization",
		modal_python_r4c2: "Create interactive visualizations using <em>Matplotlib</em>, <em>Seaborn</em>, and <em>Plotly</em>.",
		modal_python_r5c1: "Data Integration and APIs",
		modal_python_r5c2: "Connect to systems and consume RESTful APIs for data ingestion and integration.",

		// PySpark (Apache Spark)
		modal_spark_title: "PySpark",
		modal_spark_r1c1: "Distributed Data Processing",
		modal_spark_r1c2: "Use <em>RDDs</em> and <em>DataFrames</em> to handle massive datasets in parallel across distributed clusters.",
		modal_spark_r2c1: "Large-Scale ETL",
		modal_spark_r2c2: "Perform data cleaning and transformation efficiently with native scalability; integrate with <em>Hadoop</em> and <em>Delta Lake</em>.",
		modal_spark_r3c1: "Machine Learning at Scale",
		modal_spark_r3c2: "Apply ML algorithms for classification, regression, and clustering using <em>MLlib</em>.",
		modal_spark_r4c1: "Multi-Language Integration",
		modal_spark_r4c2: "Native support for <em>Python, Scala, R</em>, and <em>SQL</em> for unified data analysis.",
		modal_spark_r5c1: "Real-Time Data Streaming",
		modal_spark_r5c2: "Process continuous data streams with <em>Structured Streaming</em> for near-real-time analytics.",

		// SQL
		modal_sql_title: "SQL",
		modal_sql_r1c1: "Data Querying and Manipulation",
		modal_sql_r1c2: "Create <em>SELECT, INSERT, UPDATE,</em> and <em>DELETE</em> statements to manage relational databases.",
		modal_sql_r2c1: "Relational Data Modeling",
		modal_sql_r2c2: "Define tables, primary/foreign keys, indexes, and constraints to maintain data integrity.",
		modal_sql_r3c1: "Analytical Querying",
		modal_sql_r3c2: "Use joins, aggregations, and window functions to extract insights and generate reports.",
		modal_sql_r4c1: "Views and Stored Procedures",
		modal_sql_r4c2: "Optimize query performance and standardize reusable analytical logic with views and stored procedures.",
		modal_sql_r5c1: "BI & ETL Integration",
		modal_sql_r5c2: "Connect seamlessly with tools such as <em>Power BI</em>, <em>Tableau</em>, and pipeline platforms.",

		// R Studio
		modal_rstudio_title: "R Studio",
		modal_rstudio_r1c1: "Advanced Statistical Analysis",
		modal_rstudio_r1c2: "Perform hypothesis testing, ANOVA, and regression analysis (linear, logistic, etc.).",
		modal_rstudio_r2c1: "Predictive Modeling & ML",
		modal_rstudio_r2c2: "Build and evaluate models using packages such as <em>caret</em>, <em>randomForest</em>, and <em>glmnet</em>.",
		modal_rstudio_r3c1: "Data Visualization",
		modal_rstudio_r3c2: "Create highly customizable and interactive plots with <em>ggplot2</em>, <em>plotly</em>, and <em>shiny</em>.",
		modal_rstudio_r4c1: "Data Cleaning & Preparation",
		modal_rstudio_r4c2: "Manipulate and prepare datasets using <em>dplyr</em>, <em>tidyr</em>, and <em>readr</em>.",
		modal_rstudio_r5c1: "Interactive Dashboards",
		modal_rstudio_r5c2: "Build analytical web applications and dashboards with <em>Shiny Apps</em>.",

		// Databricks
		modal_databricks_title: "Databricks",
		modal_databricks_r1c1: "Collaborative Data Engineering & Science",
		modal_databricks_r1c2: "Use interactive notebooks with Python, SQL, R, and Scala in a unified, team-based environment.",
		modal_databricks_r2c1: "ETL and Large-Scale Processing",
		modal_databricks_r2c2: "Ingest and transform massive datasets using <em>Apache Spark</em> and <em>Delta Lake</em>.",
		modal_databricks_r3c1: "Machine Learning at Scale",
		modal_databricks_r3c2: "Train, track, and deploy ML models with <em>MLflow</em> and <em>AutoML</em> capabilities.",
		modal_databricks_r4c1: "Cloud & Data Lake Integration",
		modal_databricks_r4c2: "Connect to <em>Azure</em>, <em>AWS</em>, and <em>GCP</em> for ingestion, governance, and management.",
		modal_databricks_r5c1: "Orchestration and Monitoring",
		modal_databricks_r5c2: "Automate and monitor end-to-end data workflows from ingestion to deployment.",

		// AWS Cloud
		modal_aws_title: "Cloud AWS",
		modal_aws_r1c1: "Data Storage and Management",
		modal_aws_r1c2: "Use <em>Amazon S3</em>, <em>RDS</em>, and <em>Redshift</em> to store and query structured and unstructured data.",
		modal_aws_r2c1: "ETL and Data Integration",
		modal_aws_r2c2: "Build automated pipelines with <em>AWS Glue</em>, <em>Data Pipeline</em>, and <em>Lambda</em>.",
		modal_aws_r3c1: "Machine Learning & AI",
		modal_aws_r3c2: "Train and deploy ML models with <em>SageMaker</em> for scalable predictive analytics.",
		modal_aws_r4c1: "Infrastructure & Scalability",
		modal_aws_r4c2: "Leverage <em>EC2</em>, <em>ECS</em>, and <em>EKS</em> to run analytical workloads at scale.",
		modal_aws_r5c1: "Monitoring & Security",
		modal_aws_r5c2: "Manage logging, auditing, and access control through <em>CloudWatch</em> and <em>IAM</em>.",

		// Tableau
		modal_tableau_title: "Tableau",
		modal_tableau_r1c1: "Data Visualization & Analytics",
		modal_tableau_r1c2: "Build dynamic dashboards and reports with highly interactive visuals.",
		modal_tableau_r2c1: "Data Connectivity",
		modal_tableau_r2c2: "Connect to SQL databases, spreadsheets, APIs, and cloud data warehouses.",
		modal_tableau_r3c1: "Calculated Metrics & KPIs",
		modal_tableau_r3c2: "Use <em>Tableau Calculated Fields</em> for advanced metrics and business KPIs.",
		modal_tableau_r4c1: "Data Storytelling",
		modal_tableau_r4c2: "Create executive dashboards and visual narratives for decision-making.",
		modal_tableau_r5c1: "Publishing & Collaboration",
		modal_tableau_r5c2: "Share dashboards securely through <em>Tableau Server</em> or <em>Tableau Cloud</em>.",

		// Power BI
		modal_powerbi_title: "Power BI",
		modal_powerbi_r1c1: "Data Modeling",
		modal_powerbi_r1c2: "Build robust data models by defining relationships (hierarchies and cardinalities) between multiple data tables.",
		modal_powerbi_r2c1: "Data Transformation & Cleansing (ETL)",
		modal_powerbi_r2c2: "Use <em>Power Query (M Language)</em> to connect, extract, clean, and transform data before loading into the model.",
		modal_powerbi_r3c1: "Metric & KPI Calculation",
		modal_powerbi_r3c2: "Create complex calculated columns and measures using <em>DAX (Data Analysis Expressions)</em> for business metrics (e.g., cumulative sales, market share).",
		modal_powerbi_r4c1: "Dashboard Creation & Sharing",
		modal_powerbi_r4c2: "Develop interactive reports and dashboards with a wide range of visuals and securely share them via <em>Power BI Service</em>.",
		modal_powerbi_r5c1: "Business Performance Reporting",
		modal_powerbi_r5c2: "Analyze sales, HR, finance, and operations performance, offering data exploration capabilities to end users.",

		// setion 9: Projects and Research - Title
		trad_project_research: 'Projects and Research',
		trad_proj_res_menu: 'All',
		trad_proj_res_menu1: 'Projects',
		trad_proj_res_menu2: 'Research',

		trad_proj_description_p1: "Note: ",
		trad_proj_description_details_p1: "Model that predicts results based on independent variables, finding linear relationships in data.",
		trad_proj_title_details_p1: "Linear regression model for the financial health of the business",
		trad_proj_date_details_p1: "jun 24",
		trad_tag_proj_p1: 'Projects',

		trad_proj_description_p3: "Note: ",
		trad_proj_description_details_p3: "The study compares the performance between two models: the Support Vector Classifier (SVC), traditionally used in supervised problems, and the Quantum Support Vector Classifier (QSVC) with quantum circuit.",
		trad_proj_title_details_p3: "Classification with Quantum Learning",
		trad_proj_date_details_p3: "jul 24",
		trad_tag_proj_p3: 'Projects',

		trad_res_description_p2: "Note: ",
		trad_res_description_details_p2: "This study presents a comparative analysis of LIME, Grad-CAM, and SHAP methods for explaining predictions in image classification models.",
		trad_res_title_details_p2: "Explicablility in IA: LIME, SHAP and Grad-CAM",
		trad_res_date_details_p2: "jun 25",
		trad_tag_res_p2: 'Research',

		trad_res_description_p4: "Note: ",
		trad_res_description_details_p4: "This work presents a Machine Learning-based approach using a Classical-Quantum hybrid architecture for the breast cancer classification task.",
		trad_res_title_details_p4: "Classical-Quantum hybrid architecture for cancer prediction",
		trad_res_date_details_p4: "jul 25",
		trad_tag_res_p4: 'Research',

		// setion 11: Button - Show more
		show_more_btn: 'Show more',

		// setion 12: My experience
		trad_my_experience: 'Experience',
		trad_my_experience_1: 'Data Scientist Mid - Risk & Fraud',
		trad_time_exp_1: 'Apr 2024 - Sep 2025',

		trad_my_experience_2: 'Fraud Prevention Modeling',
		trad_time_exp_2: 'Sep 2022 - Mar 2024',

		trad_my_experience_3: 'Data Analytics Mid',
		trad_time_exp_3: 'Jan 2020 - Dec 2020',

		trad_my_experience_4: 'Fraud Prevention Modeling',
		trad_time_exp_4: 'Jan 2019 - Dec 2019',

		trad_my_experience_5: 'Data Scientist Senior - Risk & Fraud',
		trad_time_exp_5: 'Oct 2025 - Present',

		// setion 12: My Education
		trad_education: 'Education',

		trad_education_1: 'Federal University of Rio Grande do Sul',
		trad_type_edu_1: "Master's degree (M.Sc.), Computer Science",

		trad_education_2: 'UniRitter University Center Ritter dos Reis',
		trad_type_edu_2: 'Post-graduation, Data Science',

		trad_education_3: 'UnInter International University Center',
		trad_type_edu_3: 'Bachelor of Science (B.Sc.), Accounting Sciences',

		trad_education_4: 'Alura',
		trad_type_edu_4: 'Specialization Courses',

		Course_1: 'Degree Deep Learning',
		Course_2: 'Degree Machine Learning Advanced',
		Course_3: 'Degree Natural language processing techniques',
		Course_4: 'Degree Apache Spark',
		Course_5: 'Degree Data Engineering with Databricks',
		Course_6: 'Degree Statistics with Python',
		Course_7: 'Degree Data Science',

		// setion 13: Contact Me
		trad_contact: 'Contact Me',
		trad_contact_1: 'I develop solutions from simple to advanced and I love what I do. Contact Me!',
		trad_contact_2: 'Name',
		trad_contact_3: 'E-mail',
		trad_contact_4: 'Phone',
		trad_contact_5: 'Your Message',

		// setion 13: Contact Me - Button - Send
		show_more_btn2: 'Send Message'
	},

	// --------------------------------------------------------------------
	// ** TRADUÇÃO EN (Português) **
	// --------------------------------------------------------------------

	en: {
		// setion 1: menu
		trad_menu1: "Início",
		trad_menu2: "Sobre mim",
		trad_menu3: "Projetos e Pesquisas",
		trad_menu4: "Contato",

		// setion 2: banner
		trad_banner1: "Olá, sou Lucas",
		trad_banner2: "Cientista de Dados",
		trad_banner3: "&",
		trad_banner4: "Engenheiro de ML",
		trad_banner5: "Eu resolvo problemas complexos que conectam a experiência do usuário junto a segurança e risco do negócio, com soluções focadas Machine Learning e Inteligência Artificial.",

		// setion 3: button download
		btn_download: "Baixe CV",

		// setion 4: Features
		trad_features1: "Análise & Ciência de Dados",
		trad_features2: "Com caracteristicas avançadas, ajudo empresas a definir a melhor direção, com o uso da análise e ciência de dados para criar um negócios bem sucedidos.",
		trad_features3: "Liderança",
		trad_features4: "Com fortes habilidades estratégicas, atuo em gestão de projetos e governança em toda as steps de analytics. Possuo excelentes habilidades de comunicação e articulo conceitos técnicos com clareza e objetividade.",
		trad_features5: "Modelagem Financeira",
		trad_features6: "Com experiência bancária e adquirência, forneço soluções especializadas que podem garantir maiores lucros para o negócio com a aplicação de técnicas avançadas de ML e IA.",

		// setion 5: About Me
		trad_about: "Sobre Mim",
		trad_about2: "Atualmente trabalho como Ciêntista de Dados no Banco Sicredi, instituição financeira brasileira com 8+ milhões de clientes. Anteriormente, estive em posições de Analista de Dados e Analista de modelagem de Risco na Getnet Brasil S.A, atuando com foco no planejamento estratégico das áreas de CRM e Prevenção a Fraudes. No meio acadêmico, estou cursando o programa de Mestrado em Ciência da Computação, atuando na linha de pesquisa de Algoritmos e Otimização, mas também possuo pós-graduação em Data Science e bacharelado em Ciências Contábeis.",

		// setion 6: About Me - Icons
		trad_about_icon1: "Anos de Experiência",
		trad_about_icon2: "Linguagens de Programação",
		trad_about_icon3: "Projetos Entregues",

		// setion 7: Banner - Apresentation
		trad_banner_apr: "Conecto dados a soluções avançadas que geram valor",

		// setion 8: My skills
		trad_skills: "Minhas Habilidades",
		trad_skills2: "Desde o início da minha jornada com big data, adqueri algumas habilidades. Abaixo estão algumas estatísticas que representam o nível de entendimento e utilização das ferramentas percentualmente.",

		// Títulos de colunas de habilidades (usados em todos os modais de skills)
		modal_skills_title1_python: "Usabilidade e Aplicações",
		modal_skills_title2_python: "Funções, métodos e recursos utilizados",

		modal_skills_title1_spark: "Usabilidade e Aplicações",
		modal_skills_title2_spark: "Funções, métodos e recursos utilizados",

		modal_skills_title1_sql: "Usabilidade e Aplicações",
		modal_skills_title2_sql: "Funções, métodos e recursos utilizados",

		modal_skills_title1_r: "Usabilidade e Aplicações",
		modal_skills_title2_r: "Funções, métodos e recursos utilizados",

		modal_skills_title1_databricks: "Usabilidade e Aplicações",
		modal_skills_title2_databricks: "Funções, métodos e recursos utilizados",

		modal_skills_title1_aws: "Usabilidade e Aplicações",
		modal_skills_title2_aws: "Funções, métodos e recursos utilizados",

		modal_skills_title1_tableau: "Usabilidade e Aplicações",
		modal_skills_title2_tableau: "Funções, métodos e recursos utilizados",

		modal_skills_title1_pbi: "Usabilidade e Aplicações",
		modal_skills_title2_pbi: "Funções, métodos e recursos utilizados",
		// ===================================
		// CONTEÚDO DOS MODAIS (Extraído dos anexos)
		// ===================================
		// Python
		modal_python_title: "Python",
		modal_python_r1c1: "Análise e Manipulação de Dados",
		modal_python_r1c2: "Utilizar bibliotecas como <em>Pandas</em> e <em>NumPy</em> para importar, limpar e manipular grandes volumes de dados estruturados e não estruturados.",
		modal_python_r2c1: "Machine Learning e Inteligência Artificial",
		modal_python_r2c2: "Implementar modelos preditivos com <em>Scikit-learn</em>, <em>TensorFlow</em> e <em>PyTorch</em>; realizar tuning de hiperparâmetros e validação cruzada.",
		modal_python_r3c1: "ETL e Automação de Processos",
		modal_python_r3c2: "Desenvolver pipelines de extração, transformação e carga automatizados com <em>Airflow</em>, <em>Luigi</em> ou scripts personalizados.",
		modal_python_r4c1: "Visualização de Dados",
		modal_python_r4c2: "Criar gráficos e dashboards interativos com <em>Matplotlib</em>, <em>Seaborn</em> e <em>Plotly</em> para apoiar análises exploratórias.",
		modal_python_r5c1: "Integração e APIs de Dados",
		modal_python_r5c2: "Conectar sistemas e consumir APIs RESTful para coleta e integração de dados externos.",

		// PySpark (Apache Spark)
		modal_spark_title: "PySpark",
		modal_spark_r1c1: "Processamento Distribuído de Dados",
		modal_spark_r1c2: "Utilizar <em>RDDs</em> e <em>DataFrames</em> para manipular grandes volumes de dados em clusters de forma paralela.",
		modal_spark_r2c1: "ETL e Processamento em Larga Escala",
		modal_spark_r2c2: "Executar tarefas de transformação e limpeza com alta performance; integração com <em>Hadoop</em> e <em>Delta Lake</em>.",
		modal_spark_r3c1: "Análise e Machine Learning em Cluster",
		modal_spark_r3c2: "Aplicar algoritmos de ML com <em>MLlib</em> para classificação, regressão e clustering.",
		modal_spark_r4c1: "Integração com Linguagens Diversas",
		modal_spark_r4c2: "Suporte nativo a <em>Python, Scala, R e SQL</em> para análise unificada.",
		modal_spark_r5c1: "Streaming e Processamento em Tempo Real",
		modal_spark_r5c2: "Processar fluxos contínuos de dados com <em>Structured Streaming</em>.",

		// SQL
		modal_sql_title: "SQL",
		modal_sql_r1c1: "Consulta e Manipulação de Dados",
		modal_sql_r1c2: "Criar instruções <em>SELECT, INSERT, UPDATE, DELETE</em> para gerenciar dados em bancos relacionais.",
		modal_sql_r2c1: "Modelagem de Dados Relacionais",
		modal_sql_r2c2: "Definir tabelas, chaves primárias e estrangeiras, índices e restrições para garantir integridade.",
		modal_sql_r3c1: "Análise de Dados via Query",
		modal_sql_r3c2: "Aplicar <em>joins</em>, agregações e funções de janela para gerar insights e relatórios.",
		modal_sql_r4c1: "Criação de Views e Stored Procedures",
		modal_sql_r4c2: "Otimizar desempenho e padronizar consultas analíticas.",
		modal_sql_r5c1: "Integração com BI e ETL",
		modal_sql_r5c2: "Conectar a ferramentas como <em>Power BI</em>, <em>Tableau</em> e pipelines <em>ETL</em>.",

		// R Studio
		modal_rstudio_title: "R Studio",
		modal_rstudio_r1c1: "Análise Estatística Avançada",
		modal_rstudio_r1c2: "Aplicar testes estatísticos, análise de variância e regressão linear e logística.",
		modal_rstudio_r2c1: "Modelagem Preditiva e Machine Learning",
		modal_rstudio_r2c2: "Criar e avaliar modelos com <em>caret</em>, <em>randomForest</em>, <em>glmnet</em> e outras bibliotecas.",
		modal_rstudio_r3c1: "Visualização de Dados",
		modal_rstudio_r3c2: "Criar gráficos interativos e personalizados com <em>ggplot2</em>, <em>plotly</em> e <em>shiny</em>.",
		modal_rstudio_r4c1: "ETL e Preparação de Dados",
		modal_rstudio_r4c2: "Manipular e limpar dados com <em>dplyr</em>, <em>tidyr</em> e <em>readr</em>.",
		modal_rstudio_r5c1: "Relatórios e Dashboards Interativos",
		modal_rstudio_r5c2: "Criar aplicações analíticas e painéis em tempo real com <em>Shiny Apps</em>.",

		// Databricks
		modal_databricks_title: "Databricks",
		modal_databricks_r1c1: "Engenharia e Ciência de Dados Colaborativa",
		modal_databricks_r1c2: "Utilizar <em>notebooks interativos</em> com Python, SQL, R e Scala em ambiente compartilhado.",
		modal_databricks_r2c1: "ETL e Processamento em Larga Escala",
		modal_databricks_r2c2: "Integrar e transformar dados com <em>Apache Spark</em> e <em>Delta Lake</em>.",
		modal_databricks_r3c1: "Machine Learning em Escala",
		modal_databricks_r3c2: "Treinar, versionar e implementar modelos com <em>MLflow</em> e <em>AutoML</em>.",
		modal_databricks_r4c1: "Integração com Cloud e Data Lakes",
		modal_databricks_r4c2: "Conectar a <em>Azure, AWS</em> e <em>GCP</em> para ingestão e governança de dados.",
		modal_databricks_r5c1: "Orquestração e Monitoramento de Pipelines",
		modal_databricks_r5c2: "Automatizar e monitorar fluxos de dados do ingestion ao deploy.",

		// AWS Cloud
		modal_aws_title: "Cloud AWS",
		modal_aws_r1c1: "Armazenamento e Gestão de Dados",
		modal_aws_r1c2: "Utilizar <em>Amazon S3</em>, <em>RDS</em> e <em>Redshift</em> para armazenar e consultar dados estruturados e não estruturados.",
		modal_aws_r2c1: "ETL e Integração de Dados",
		modal_aws_r2c2: "Criar pipelines automatizados com <em>AWS Glue</em>, <em>Data Pipeline</em> e <em>Lambda</em>.",
		modal_aws_r3c1: "Machine Learning e IA",
		modal_aws_r3c2: "Treinar e implantar modelos com <em>SageMaker</em>.",
		modal_aws_r4c1: "Infraestrutura e Escalabilidade",
		modal_aws_r4c2: "Utilizar <em>EC2</em>, <em>ECS</em> e <em>EKS</em> para execução escalável de workloads analíticos.",
		modal_aws_r5c1: "Monitoramento e Segurança de Dados",
		modal_aws_r5c2: "Gerenciar logs, auditorias e acessos com <em>CloudWatch</em> e <em>IAM</em>.",

		// Tableau
		modal_tableau_title: "Tableau",
		modal_tableau_r1c1: "Visualização e Análise de Dados",
		modal_tableau_r1c2: "Criar dashboards e relatórios dinâmicos com visualizações interativas.",
		modal_tableau_r2c1: "Integração com Fontes de Dados",
		modal_tableau_r2c2: "Conectar bancos SQL, planilhas, APIs e data warehouses.",
		modal_tableau_r3c1: "Cálculos e Métricas Dinâmicas",
		modal_tableau_r3c2: "Utilizar <em>Tableau Calculated Fields</em> para KPIs e indicadores customizados.",
		modal_tableau_r4c1: "Exploração e Storytelling de Dados",
		modal_tableau_r4c2: "Criar narrativas visuais e painéis executivos.",
		modal_tableau_r5c1: "Publicação e Colaboração",
		modal_tableau_r5c2: "Compartilhar dashboards no <em>Tableau Server</em> ou <em>Tableau Cloud</em>.",

		// Power BI
		modal_powerbi_title: "Power BI",
		modal_powerbi_r1c1: "Modelagem de Dados",
		modal_powerbi_r1c2: "Criar modelos de dados robustos definindo relações (hierarquias e cardinalidades) entre tabelas de diferentes fontes de dados.",
		modal_powerbi_r2c1: "Transformação e Limpeza de Dados (ETL)",
		modal_powerbi_r2c2: "Usar o <em>Power Query (M Language)</em> para conectar, extrair, limpar e transformar dados antes de carregá-los no modelo.",
		modal_powerbi_r3c1: "Cálculo de Métricas e KPIs",
		modal_powerbi_r3c2: "Criar colunas e medidas calculadas complexas usando a linguagem <em>DAX (Data Analysis Expressions)</em> para métricas de negócios (ex: vendas acumuladas, participação de mercado).",
		modal_powerbi_r4c1: "Criação e Compartilhamento de Dashboards",
		modal_powerbi_r4c2: "Desenvolver relatórios e painéis interativos com uma ampla variedade de visuais e compartilhá-los de forma segura através do <em>Power BI Service</em>.",
		modal_powerbi_r5c1: "Análise e Relatórios de Negócios",
		modal_powerbi_r5c2: "Analisar desempenho de vendas, RH, finanças e operações, e oferecer a capacidade de exploração de dados para usuários finais.",

		// setion 9: Projects and Research - Title
		trad_project_research: 'Projetos e Pesquisas',
		trad_proj_res_menu: 'Ambos',
		trad_proj_res_menu1: 'Projetos',
		trad_proj_res_menu2: 'Pesquisas',

		trad_proj_description_p1: "Nota: ",
		trad_proj_description_details_p1: "Modelo que prevê resultados com base em variáveis independentes, encontrando relações lineares entre os dados.",
		trad_proj_title_details_p1: "Modelo de regressão linear, para saúde financeira do negócio",
		trad_proj_date_details_p1: "jun 24",
		trad_tag_proj_p1: 'Projetos',

		trad_proj_description_p3: "Nota: ",
		trad_proj_description_details_p3: " O estudo compara o desempenho entre dois modelos: o Support Vector Classifier (SVC), tradicionalmente utilizado em problemas supervisionados, e o Quantum Support Vector Classifier (QSVC) com circuito quântico.",
		trad_proj_title_details_p3: "Classificação com Aprendizado Quântico",
		trad_proj_date_details_p3: "jul 24",
		trad_tag_proj_p3: 'Projetos',

		trad_res_description_p2: "Nota: ",
		trad_res_description_details_p2: "Este estudo apresenta uma análise comparativa dos métodos LIME, Grad-CAM e SHAP para explicar predições em modelosdeclassificação de imagens.",
		trad_res_title_details_p2: "Explicabilidade em IA: LIME, SHAP e Grad-CAM",
		trad_res_date_details_p2: "jun 25",
		trad_tag_res_p2: 'Pesquisas',

		trad_res_description_p4: "Nota: ",
		trad_res_description_details_p4: "Este trabalho apresenta uma abordagem baseada em aprendizado de máquina usando uma arquitetura híbrida clássica-quântica para a tarefa de classificação do câncer de mama.",
		trad_res_title_details_p4: "Arquitetura híbrida Classica-Quântica, para predição de cancer",
		trad_res_date_details_p4: "jul 25",
		trad_tag_res_p4: 'Pesquisas',

		// setion 11: Button - Show more
		show_more_btn: 'Exibir mais',

		// setion 12: My experience
		trad_my_experience: 'Experiências',
		trad_my_experience_1: 'Cientista de dados Pleno - Risk & Fraud',
		trad_time_exp_1: 'Abr 2024 - Set 2025',

		trad_my_experience_2: 'Analista de modelagem - Risk & Fraud',
		trad_time_exp_2: 'Set 2022 - Mar 2024',

		trad_my_experience_3: 'Analista de dados Pleno',
		trad_time_exp_3: 'Jan 2020 - Dez 2020',

		trad_my_experience_4: 'Analista de modelagem - Risk & Fraud',
		trad_time_exp_4: 'Jan 2019 - Dez 2019',

		trad_my_experience_5: 'Cientista de dados Senior - Risk & Fraud',
		trad_time_exp_5: 'Out 2025 - Atual',

		// setion 12: My Education
		trad_education: 'Educação',

		trad_education_1: 'Universidade Federal do Rio Grande do Sul',
		trad_type_edu_1: "Mestrado (M.Sc.), Ciência da Computação",

		trad_education_2: 'Centro Universitário Ritter dos Reis',
		trad_type_edu_2: 'Pós-graduação, Ciência de Dados',

		trad_education_3: 'Uninter Centro Universitário Internacional',
		trad_type_edu_3: 'Bacharelado (B.Sc.), Ciências Contábeis',

		trad_education_4: 'Alura',
		trad_type_edu_4: 'Cursos de Especialização',

		Course_1: 'Formação Deep Learning',
		Course_2: 'Formação Machine Learning Avançado',
		Course_3: 'Formação Técnicas de processamento de linguagem natural',
		Course_4: 'Formação Apache Spark',
		Course_5: 'Formação Engenharia de dados com Databricks',
		Course_6: 'Formação Estátisca com Python',
		Course_7: 'Formação Ciência de Dados',

		// setion 13: Contact Me
		trad_contact: 'Entre em Contato',
		trad_contact_1: 'Eu desenvolvo soluções do simples ao avançado e amo o que faço. Entre em contato comigo!',
		trad_contact_2: 'Nome',
		trad_contact_3: 'E-mail',
		trad_contact_4: 'Telefone',
		trad_contact_5: 'Sua Mensagem',

		// setion 13: Contact Me - Button - Send
		show_more_btn2: 'Enviar Mensagem'
	}
};

// ========================================================================
// 2. FUNÇÃO DE TRADUÇÃO DE MODAIS
// ========================================================================

/**
 * Traduz o conteúdo interno de todos os modais de habilidade.
 * @param {string} lang - O código do idioma ('pt' ou 'en').
 */
function translateModalContent(lang) {
	const t = translations[lang];

	// Mapeamento de todas as chaves de tradução dos modais
	// O JS itera sobre estas chaves e as traduz no elemento HTML correspondente (pelo ID)
	const modalMaps = {
		// titles
		'modal_skills_title1_python': t.modal_skills_title1_python, 'modal_skills_title2_python': t.modal_skills_title2_python,
		'modal_skills_title1_spark': t.modal_skills_title1_spark, 'modal_skills_title2_spark': t.modal_skills_title2_spark,
		'modal_skills_title1_sql': t.modal_skills_title1_sql, 'modal_skills_title2_sql': t.modal_skills_title2_sql,
		'modal_skills_title1_r': t.modal_skills_title1_r, 'modal_skills_title2_r': t.modal_skills_title2_r,
		'modal_skills_title1_databricks': t.modal_skills_title1_databricks, 'modal_skills_title2_databricks': t.modal_skills_title2_databricks,
		'modal_skills_title1_aws': t.modal_skills_title1_aws, 'modal_skills_title2_aws': t.modal_skills_title2_aws,
		'modal_skills_title1_tableau': t.modal_skills_title1_tableau, 'modal_skills_title2_tableau': t.modal_skills_title2_tableau,
		'modal_skills_title1_pbi': t.modal_skills_title1_pbi, 'modal_skills_title2_pbi': t.modal_skills_title2_pbi,

		// ===================================
		// CONTEÚDO DOS MODAIS
		// ===================================

		// Python
		'modal_python_title': t.modal_python_title, 'modal_python_r1c1': t.modal_python_r1c1, 'modal_python_r1c2': t.modal_python_r1c2, 'modal_python_r2c1': t.modal_python_r2c1, 'modal_python_r2c2': t.modal_python_r2c2, 'modal_python_r3c1': t.modal_python_r3c1, 'modal_python_r3c2': t.modal_python_r3c2, 'modal_python_r4c1': t.modal_python_r4c1, 'modal_python_r4c2': t.modal_python_r4c2, 'modal_python_r5c1': t.modal_python_r5c1, 'modal_python_r5c2': t.modal_python_r5c2,
		// PySpark (Spark)
		'modal_spark_title': t.modal_spark_title, 'modal_spark_r1c1': t.modal_spark_r1c1, 'modal_spark_r1c2': t.modal_spark_r1c2, 'modal_spark_r2c1': t.modal_spark_r2c1, 'modal_spark_r2c2': t.modal_spark_r2c2, 'modal_spark_r3c1': t.modal_spark_r3c1, 'modal_spark_r3c2': t.modal_spark_r3c2, 'modal_spark_r4c1': t.modal_spark_r4c1, 'modal_spark_r4c2': t.modal_spark_r4c2, 'modal_spark_r5c1': t.modal_spark_r5c1, 'modal_spark_r5c2': t.modal_spark_r5c2,
		// SQL
		'modal_sql_title': t.modal_sql_title, 'modal_sql_r1c1': t.modal_sql_r1c1, 'modal_sql_r1c2': t.modal_sql_r1c2, 'modal_sql_r2c1': t.modal_sql_r2c1, 'modal_sql_r2c2': t.modal_sql_r2c2, 'modal_sql_r3c1': t.modal_sql_r3c1, 'modal_sql_r3c2': t.modal_sql_r3c2, 'modal_sql_r4c1': t.modal_sql_r4c1, 'modal_sql_r4c2': t.modal_sql_r4c2, 'modal_sql_r5c1': t.modal_sql_r5c1, 'modal_sql_r5c2': t.modal_sql_r5c2,
		// R Studio
		'modal_rstudio_title': t.modal_rstudio_title, 'modal_rstudio_r1c1': t.modal_rstudio_r1c1, 'modal_rstudio_r1c2': t.modal_rstudio_r1c2, 'modal_rstudio_r2c1': t.modal_rstudio_r2c1, 'modal_rstudio_r2c2': t.modal_rstudio_r2c2, 'modal_rstudio_r3c1': t.modal_rstudio_r3c1, 'modal_rstudio_r3c2': t.modal_rstudio_r3c2, 'modal_rstudio_r4c1': t.modal_rstudio_r4c1, 'modal_rstudio_r4c2': t.modal_rstudio_r4c2, 'modal_rstudio_r5c1': t.modal_rstudio_r5c1, 'modal_rstudio_r5c2': t.modal_rstudio_r5c2,
		// Databricks
		'modal_databricks_title': t.modal_databricks_title, 'modal_databricks_r1c1': t.modal_databricks_r1c1, 'modal_databricks_r1c2': t.modal_databricks_r1c2, 'modal_databricks_r2c1': t.modal_databricks_r2c1, 'modal_databricks_r2c2': t.modal_databricks_r2c2, 'modal_databricks_r3c1': t.modal_databricks_r3c1, 'modal_databricks_r3c2': t.modal_databricks_r3c2, 'modal_databricks_r4c1': t.modal_databricks_r4c1, 'modal_databricks_r4c2': t.modal_databricks_r4c2, 'modal_databricks_r5c1': t.modal_databricks_r5c1, 'modal_databricks_r5c2': t.modal_databricks_r5c2,
		// AWS Cloud
		'modal_aws_title': t.modal_aws_title, 'modal_aws_r1c1': t.modal_aws_r1c1, 'modal_aws_r1c2': t.modal_aws_r1c2, 'modal_aws_r2c1': t.modal_aws_r2c1, 'modal_aws_r2c2': t.modal_aws_r2c2, 'modal_aws_r3c1': t.modal_aws_r3c1, 'modal_aws_r3c2': t.modal_aws_r3c2, 'modal_aws_r4c1': t.modal_aws_r4c1, 'modal_aws_r4c2': t.modal_aws_r4c2, 'modal_aws_r5c1': t.modal_aws_r5c1, 'modal_aws_r5c2': t.modal_aws_r5c2,
		// Tableau
		'modal_tableau_title': t.modal_tableau_title, 'modal_tableau_r1c1': t.modal_tableau_r1c1, 'modal_tableau_r1c2': t.modal_tableau_r1c2, 'modal_tableau_r2c1': t.modal_tableau_r2c1, 'modal_tableau_r2c2': t.modal_tableau_r2c2, 'modal_tableau_r3c1': t.modal_tableau_r3c1, 'modal_tableau_r3c2': t.modal_tableau_r3c2, 'modal_tableau_r4c1': t.modal_tableau_r4c1, 'modal_tableau_r4c2': t.modal_tableau_r4c2, 'modal_tableau_r5c1': t.modal_tableau_r5c1, 'modal_tableau_r5c2': t.modal_tableau_r5c2,
		// Power BI
		'modal_powerbi_title': t.modal_powerbi_title, 'modal_powerbi_r1c1': t.modal_powerbi_r1c1, 'modal_powerbi_r1c2': t.modal_powerbi_r1c2, 'modal_powerbi_r2c1': t.modal_powerbi_r2c1, 'modal_powerbi_r2c2': t.modal_powerbi_r2c2, 'modal_powerbi_r3c1': t.modal_powerbi_r3c1, 'modal_powerbi_r3c2': t.modal_powerbi_r3c2, 'modal_powerbi_r4c1': t.modal_powerbi_r4c1, 'modal_powerbi_r4c2': t.modal_powerbi_r4c2, 'modal_powerbi_r5c1': t.modal_powerbi_r5c1, 'modal_powerbi_r5c2': t.modal_powerbi_r5c2,
	};

	// Itera sobre o mapa e traduz os elementos que possuem o ID correspondente.
	for (const id in modalMaps) {
		const element = document.getElementById(id);
		if (element) {
			// Usa innerHTML para permitir o uso de tags HTML (como <em>) nos textos de tradução.
			element.innerHTML = modalMaps[id];
		}
	}
}


// ========================================================================
// 3. FUNÇÃO PRINCIPAL DE TRADUÇÃO (changeLanguage)
// ========================================================================

function changeLanguage(lang) {
	// CORREÇÃO CRÍTICA: Declara a variável 't' para que o código abaixo funcione.
	const t = translations[lang];

	// setion 1: menu
	document.getElementById('trad_menu1').textContent = t.trad_menu1;
	document.getElementById('trad_menu2').textContent = t.trad_menu2;
	document.getElementById('trad_menu3').textContent = t.trad_menu3;
	document.getElementById('trad_menu4').textContent = t.trad_menu4;

	// setion 2: banner
	document.getElementById('trad_banner1').textContent = t.trad_banner1;
	document.getElementById('trad_banner2').textContent = t.trad_banner2;
	document.getElementById('trad_banner3').textContent = t.trad_banner3;
	document.getElementById('trad_banner4').textContent = t.trad_banner4;
	document.getElementById('trad_banner5').textContent = t.trad_banner5;

	// setion 3: button download
	document.getElementById('btn_download').textContent = t.btn_download;

	// setion 4: Features
	document.getElementById('trad_features1').textContent = t.trad_features1;
	document.getElementById('trad_features2').textContent = t.trad_features2;
	document.getElementById('trad_features3').textContent = t.trad_features3;
	document.getElementById('trad_features4').textContent = t.trad_features4;
	document.getElementById('trad_features5').textContent = t.trad_features5;
	document.getElementById('trad_features6').textContent = t.trad_features6;

	// setion 5: About Me
	document.getElementById('trad_about').textContent = t.trad_about;
	document.getElementById('trad_about2').textContent = t.trad_about2;

	// setion 6: About Me - Icons
	document.getElementById('trad_about_icon1').textContent = t.trad_about_icon1;
	document.getElementById('trad_about_icon2').textContent = t.trad_about_icon2;
	document.getElementById('trad_about_icon3').textContent = t.trad_about_icon3;

	// setion 7: Banner - Apresentation
	document.getElementById('trad_banner_apr').textContent = t.trad_banner_apr;

	// setion 8: My skills (títulos de coluna, que são compartilhados)
	document.getElementById('trad_skills').textContent = t.trad_skills;
	document.getElementById('trad_skills2').textContent = t.trad_skills2;

	// document.getElementById('trad_skills_title_1').textContent = t.trad_skills_title_1;
	// document.getElementById('trad_skills_title_2').textContent = t.trad_skills_title_2;

	// =================================================================
	// CHAVE DA SOLUÇÃO: CHAMA A TRADUÇÃO DOS MODAIS AQUI
	// =================================================================
	translateModalContent(lang);

	// setion 9: Projects and Research - Title
	document.getElementById('trad_project_research').textContent = t.trad_project_research;

	// setion 10: Projects and Research - menu selection
	document.getElementById('trad_proj_res_menu').textContent = t.trad_proj_res_menu;
	document.getElementById('trad_proj_res_menu1').textContent = t.trad_proj_res_menu1;
	document.getElementById('trad_proj_res_menu2').textContent = t.trad_proj_res_menu2;

	// setion *: Projects and Research - Projects Description
	document.getElementById('trad_proj_description_details_p1').textContent = t.trad_proj_description_details_p1;
	document.getElementById('trad_proj_title_details_p1').textContent = t.trad_proj_title_details_p1;
	document.getElementById('trad_proj_date_details_p1').textContent = t.trad_proj_date_details_p1;
	document.getElementById('trad_proj_description_p1').textContent = t.trad_proj_description_p1;
	document.getElementById('trad_tag_proj_p1').textContent = t.trad_tag_proj_p1;
	document.getElementById('trad_proj_description_details_p3').textContent = t.trad_proj_description_details_p3;
	document.getElementById('trad_proj_title_details_p3').textContent = t.trad_proj_title_details_p3;
	document.getElementById('trad_proj_date_details_p3').textContent = t.trad_proj_date_details_p3;
	document.getElementById('trad_proj_description_p3').textContent = t.trad_proj_description_p3;
	document.getElementById('trad_tag_proj_p3').textContent = t.trad_tag_proj_p3;

	// setion *: Projects and Research - Research Description
	document.getElementById('trad_res_description_details_p2').textContent = t.trad_res_description_details_p2;
	document.getElementById('trad_res_title_details_p2').textContent = t.trad_res_title_details_p2;
	document.getElementById('trad_res_date_details_p2').textContent = t.trad_res_date_details_p2;
	document.getElementById('trad_res_description_p2').textContent = t.trad_res_description_p2;
	document.getElementById('trad_tag_res_p2').textContent = t.trad_tag_res_p2;
	document.getElementById('trad_res_description_details_p4').textContent = t.trad_res_description_details_p4;
	document.getElementById('trad_res_title_details_p4').textContent = t.trad_res_title_details_p4;
	document.getElementById('trad_res_date_details_p4').textContent = t.trad_res_date_details_p4;
	document.getElementById('trad_res_description_p4').textContent = t.trad_res_description_p4;
	document.getElementById('trad_tag_res_p4').textContent = t.trad_tag_res_p4;

	// setion 11: Button - Show more
	document.getElementById('show_more_btn').textContent = t.show_more_btn;

	// setion 12: My experience
	document.getElementById('trad_my_experience').textContent = t.trad_my_experience;
	document.getElementById('trad_my_experience_1').textContent = t.trad_my_experience_1;
	document.getElementById('trad_time_exp_1').textContent = t.trad_time_exp_1;
	document.getElementById('trad_my_experience_2').textContent = t.trad_my_experience_2;
	document.getElementById('trad_time_exp_2').textContent = t.trad_time_exp_2;
	document.getElementById('trad_my_experience_3').textContent = t.trad_my_experience_3;
	document.getElementById('trad_time_exp_3').textContent = t.trad_time_exp_3;
	document.getElementById('trad_my_experience_4').textContent = t.trad_my_experience_4;
	document.getElementById('trad_time_exp_4').textContent = t.trad_time_exp_4;
	document.getElementById('trad_my_experience_5').textContent = t.trad_my_experience_5;
	document.getElementById('trad_time_exp_5').textContent = t.trad_time_exp_5;

	//setion 13: My Education
	document.getElementById('trad_education').textContent = t.trad_education;
	document.getElementById('trad_education_1').textContent = t.trad_education_1;
	document.getElementById('trad_type_edu_1').textContent = t.trad_type_edu_1;
	document.getElementById('trad_education_2').textContent = t.trad_education_2;
	document.getElementById('trad_type_edu_2').textContent = t.trad_type_edu_2;
	document.getElementById('trad_education_3').textContent = t.trad_education_3;
	document.getElementById('trad_type_edu_3').textContent = t.trad_type_edu_3;
	document.getElementById('trad_education_4').textContent = t.trad_education_4;
	document.getElementById('trad_type_edu_4').textContent = t.trad_type_edu_4;
	document.getElementById('Course_1').textContent = t.Course_1;
	document.getElementById('Course_2').textContent = t.Course_2;
	document.getElementById('Course_3').textContent = t.Course_3;
	document.getElementById('Course_4').textContent = t.Course_4;
	document.getElementById('Course_5').textContent = t.Course_5;
	document.getElementById('Course_6').textContent = t.Course_6;
	document.getElementById('Course_7').textContent = t.Course_7;

	// setion 13: Contact Me
	document.getElementById('trad_contact').textContent = t.trad_contact;
	document.getElementById('trad_contact_1').textContent = t.trad_contact_1;
	document.getElementById('trad_contact_2').textContent = t.trad_contact_2;
	document.getElementById('trad_contact_3').textContent = t.trad_contact_3;
	document.getElementById('trad_contact_4').textContent = t.trad_contact_4;
	document.getElementById('trad_contact_5').textContent = t.trad_contact_5;

	// setion 13: Contact Me - Button - Send
	document.getElementById('show_more_btn2').textContent = t.show_more_btn2;

	// Função para alterar o idioma e atualizar o link de download
	const downloadLink = document.getElementById('download_style');
	if (downloadLink && downloadLink.tagName === 'A') {
		const newHref = `./doc/${lang}/Lucas Fazioni - CV.pdf`;
		downloadLink.setAttribute('href', newHref);
	}
	const downloadLink_1 = document.getElementById('download_style_1');
	if (downloadLink_1 && downloadLink_1.tagName === 'A') {
		const newHref = `./doc/${lang}/Lucas Fazioni - CV.pdf`;
		downloadLink_1.setAttribute('href', newHref);
	}
}

// ========================================================================
// 4. LISTENERS DE EVENTOS (Abertura do Modal e Troca de Idioma)
// ========================================================================

document.addEventListener('DOMContentLoaded', () => {
	// Tenta obter o estado do elemento 'language-toggle' (que deve ser um checkbox ou switch)
	const langToggle = document.getElementById('language-toggle');

	// Define o idioma inicial: 'en' se o toggle estiver marcado (checked), senão 'pt'. Padrão 'pt'.
	const initialLang = (langToggle && langToggle.checked) ? 'en' : 'pt';

	// 1. Chama a tradução inicial para a página e para os modais (CRUCIAL)
	changeLanguage(initialLang);

	// 2. Listener de Troca de Idioma (se o elemento existir)
	langToggle?.addEventListener('change', function () {
		if (this.checked) {
			changeLanguage('en');
		} else {
			changeLanguage('pt');
		}
	});

	// 3. Lógica de Abertura e Fechamento de Modais

	const skillCards = document.querySelectorAll('.skill-card');
	const modals = document.querySelectorAll('.modal-overlay');

	// Add click event for each skill card
	skillCards.forEach(card => {
		card.addEventListener('click', () => {
			const cardId = card.id;
			// Associa o ID do card (e.g., 'pythonCard') ao ID do modal (e.g., 'pythonModal')
			const modalId = cardId.replace('Card', 'Modal');
			const modal = document.getElementById(modalId);
			if (modal) {
				modal.style.display = 'flex';
			}
		});
	});

	// Add close functionality for all modals
	modals.forEach(modal => {
		const closeBtn = modal.querySelector('.modal-close-btn');

		// Close when clicking the X button
		if (closeBtn) {
			closeBtn.addEventListener('click', () => {
				modal.style.display = 'none';
			});
		}

		// Close when clicking outside modal content
		modal.addEventListener('click', (event) => {
			if (event.target === modal) {
				modal.style.display = 'none';
			}
		});
	});
});