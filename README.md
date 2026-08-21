# 📰 Fake News Detection

A Machine Learning and Natural Language Processing project that detects whether a news article is **Fake** or **Real** based on its textual content.

The project includes a complete machine learning workflow covering **data exploration, preprocessing, feature engineering, model training, evaluation, hyperparameter tuning, final model export, and web application deployment**.

---

## 📌 Overview

The rapid spread of misinformation through digital platforms has made it increasingly difficult to distinguish genuine news from fabricated or misleading information.

This project aims to build an automated **Fake News Detection System** using Natural Language Processing (NLP) and Machine Learning techniques.

The system processes news article text, extracts meaningful textual features, trains classification models, evaluates their performance, and provides predictions through a web-based interface.

---

## ✨ Features

* 🔍 Exploratory Data Analysis (EDA)
* 🧹 Text preprocessing and cleaning
* 📝 Natural Language Processing
* 🔤 Feature engineering and text vectorization
* 🤖 Machine Learning model training
* 📊 Model evaluation and comparison
* ⚙️ Hyperparameter tuning
* 💾 Final model export
* 🌐 Flask-based web application
* 📰 Real-time Fake/Real news prediction
* 📁 Organized notebook-based workflow

---

## 🗂️ Project Structure

```text
Fake-News-Detection/
│
├── data/
│   ├── WELFake_Dataset.csv
│   └── preprocessed_news.csv
│
├── notebooks/
│   ├── 01_data_exploration.ipynb
│   ├── 02_data_preprocessing.ipynb
│   ├── 03_feature_engineering.ipynb
│   ├── 04_model_training.ipynb
│   ├── 05_model_evaluation.ipynb
│   ├── 06_hyperparameter_tuning.ipynb
│   └── 07_final_model_export.ipynb
│
├── webapp/
│   ├── model/
│   ├── static/
│   ├── templates/
│   └── app.py
│
├── .gitattributes
├── LICENSE
├── README.md
└── requirements.txt
```

The repository currently follows a seven-notebook workflow from exploration through final model export, with a separate Flask web application under `webapp/`.

---

## 🔄 Machine Learning Workflow

```text
Raw News Dataset
       │
       ▼
Data Exploration
       │
       ▼
Data Cleaning & Preprocessing
       │
       ▼
Feature Engineering
       │
       ▼
Model Training
       │
       ▼
Model Evaluation
       │
       ▼
Hyperparameter Tuning
       │
       ▼
Final Model Export
       │
       ▼
Flask Web Application
       │
       ▼
Fake / Real Prediction
```

---

## 📊 Dataset

The project uses the **WELFake Dataset**, which is available in the `data/` directory as:

```text
WELFake_Dataset.csv
```

A preprocessed version is also included:

```text
preprocessed_news.csv
```

The repository's data directory contains both of these datasets.

### Dataset Features

The dataset contains information related to news articles, including textual content used for classification.

The primary objective is to learn the relationship between news text and its corresponding authenticity label.

### Target

The classification task is:

* **Fake** — News identified as unreliable/fake
* **Real** — News identified as genuine/real

---

## 🧹 Data Preprocessing

The preprocessing stage prepares raw news content for machine learning.

Typical preprocessing operations include:

* Handling missing values
* Removing unnecessary characters
* Converting text to lowercase
* Removing punctuation
* Removing unwanted whitespace
* Removing stopwords where appropriate
* Text normalization
* Preparing cleaned text for feature extraction

The complete preprocessing workflow is available in:

```text
notebooks/02_data_preprocessing.ipynb
```

---

## 🔤 Feature Engineering

Since machine learning algorithms require numerical input, textual news content must be transformed into numerical features.

The feature engineering stage focuses on converting processed text into a representation suitable for classification.

This stage is implemented in:

```text
notebooks/03_feature_engineering.ipynb
```

---

## 🤖 Model Training

The model training stage uses the engineered features to train classification algorithms capable of distinguishing fake news from real news.

Training experiments are contained in:

```text
notebooks/04_model_training.ipynb
```

The trained models are subsequently evaluated and optimized before the final model is exported for deployment.

---

## 📈 Model Evaluation

Model performance is evaluated using appropriate classification metrics.

Common evaluation metrics include:

* Accuracy
* Precision
* Recall
* F1-Score
* Confusion Matrix

The evaluation workflow is available in:

```text
notebooks/05_model_evaluation.ipynb
```

---

## ⚙️ Hyperparameter Tuning

To improve model performance, hyperparameter optimization is performed on the selected machine learning models.

The tuning process is available in:

```text
notebooks/06_hyperparameter_tuning.ipynb
```

The best-performing configuration can then be selected for the final deployment model.

---

## 💾 Final Model Export

After completing model training, evaluation, and optimization, the final model is prepared for deployment.

The export process is handled in:

```text
notebooks/07_final_model_export.ipynb
```

The exported model is used by the web application for making predictions on new news content.

---

## 🌐 Web Application

The project includes a **Flask-based web application** for interacting with the trained model.

The application is located in:

```text
webapp/
```

Its main components include:

```text
webapp/
├── model/
├── static/
├── templates/
└── app.py
```

The Flask application loads the trained model and provides a user interface through which users can submit news content for classification.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/InfinitePraveen/Fake-News-Detection.git
```

### 2. Navigate to the Project Directory

```bash
cd Fake-News-Detection
```

### 3. Create a Virtual Environment

```bash
python -m venv venv
```

Activate the environment.

**Windows:**

```bash
venv\Scripts\activate
```

**Linux/macOS:**

```bash
source venv/bin/activate
```

### 4. Install Dependencies

```bash
pip install -r requirements.txt
```

### 5. Run the Notebooks

Open the notebooks using Jupyter:

```bash
jupyter notebook
```

Run the notebooks in the following order:

```text
01_data_exploration.ipynb
02_data_preprocessing.ipynb
03_feature_engineering.ipynb
04_model_training.ipynb
05_model_evaluation.ipynb
06_hyperparameter_tuning.ipynb
07_final_model_export.ipynb
```

---

## ▶️ Running the Web Application

Navigate to the web application directory:

```bash
cd webapp
```

Run the Flask application:

```bash
python app.py
```

The application will start on the local Flask development server.

Open the displayed local URL in your web browser and enter news content to obtain a prediction.

---

## 🛠️ Technologies Used

### Programming Language

* Python

### Data Science

* Pandas
* NumPy

### Data Visualization

* Matplotlib
* Seaborn

### Machine Learning

* Scikit-learn

### Natural Language Processing

* NLP techniques
* Text preprocessing
* Text feature extraction

### Development Environment

* Jupyter Notebook
* Python Virtual Environment

### Web Development

* Flask
* HTML
* CSS
* JavaScript

---

## 📚 Notebook Description

| Notebook                         | Purpose                                               |
| -------------------------------- | ----------------------------------------------------- |
| `01_data_exploration.ipynb`      | Explore the dataset and understand its structure      |
| `02_data_preprocessing.ipynb`    | Clean and preprocess news text                        |
| `03_feature_engineering.ipynb`   | Transform textual data into machine-learning features |
| `04_model_training.ipynb`        | Train classification models                           |
| `05_model_evaluation.ipynb`      | Evaluate and compare model performance                |
| `06_hyperparameter_tuning.ipynb` | Optimize model hyperparameters                        |
| `07_final_model_export.ipynb`    | Export the final model for deployment                 |

---

## 🎯 Project Objectives

The primary objectives of this project are to:

1. Understand the characteristics of fake and real news.
2. Explore and preprocess a real-world news dataset.
3. Apply Natural Language Processing techniques to textual data.
4. Engineer useful features for classification.
5. Train machine learning models for fake news detection.
6. Compare model performance using classification metrics.
7. Optimize the selected model through hyperparameter tuning.
8. Export the final model for practical use.
9. Deploy the model through a simple web application.

---

## ⚠️ Disclaimer

This project is intended for **educational and research purposes**.

A machine learning prediction should not be treated as definitive proof that a news article is true or false. Real-world fact checking requires additional evidence, reliable sources, contextual analysis, and human verification.

---

## 🔮 Future Improvements

Potential improvements include:

* Implementing transformer-based models such as BERT
* Adding multilingual fake news detection
* Incorporating source credibility features
* Adding explainable AI techniques
* Improving handling of unseen topics and domains
* Adding confidence scores to predictions
* Building a REST API
* Deploying the application to a cloud platform
* Adding automated model retraining
* Integrating external fact-checking sources

---

## 🤝 Contributing

Contributions are welcome!

If you would like to improve this project:

1. Fork the repository.
2. Create a new branch.

```bash
git checkout -b feature/your-feature
```

3. Make your changes.
4. Commit your changes.

```bash
git commit -m "Add your feature"
```

5. Push the branch.

```bash
git push origin feature/your-feature
```

6. Open a Pull Request.

---

## 📄 License

This project is licensed under the **MIT License**.

See the [`LICENSE`](LICENSE) file for more information. The repository currently includes an MIT license.

---

## 👨‍💻 Author

### Praveen Kumar

Data Science & Machine Learning Enthusiast

* GitHub: [InfinitePraveen](https://github.com/InfinitePraveen)
* LinkedIn: [InfinitePraveen](https://www.linkedin.com/in/infinitepraveen/)

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

**Repository:**
https://github.com/InfinitePraveen/Fake-News-Detection

---

### 📌 Keywords

`Fake News Detection` · `Machine Learning` · `Natural Language Processing` · `NLP` · `Text Classification` · `Scikit-learn` · `Python` · `Flask` · `Data Science` · `Artificial Intelligence` · `Misinformation Detection`
