from flask import Flask, render_template, request, jsonify
import joblib
import re
import os
import json

app = Flask(__name__)

# Load model and vectorizer relative to this file so startup does not depend on cwd.
model_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'model')
model_path = os.path.join(model_dir, 'fake_news_model.pkl')
vectorizer_path = os.path.join(model_dir, 'tfidf_vectorizer.pkl')

try:
    model = joblib.load(model_path)
    vectorizer = joblib.load(vectorizer_path)
    print("✅ Model and vectorizer loaded successfully!")
except Exception as e:
    print(f"❌ Error loading model: {e}")
    model = None
    vectorizer = None

def clean_text(text):
    """Clean and preprocess input text"""
    text = text.lower()
    text = re.sub(r'https?://\S+|www\.\S+', '', text)
    text = re.sub(r'<.*?>', '', text)
    text = re.sub(r'[^a-zA-Z\s]', '', text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text

@app.route('/')
def index():
    """Render the main page"""
    return render_template('index.html',
                         github_url='https://github.com/InfinitePraveen/',
                         linkedin_url='https://www.linkedin.com/in/infinitepraveen/')

@app.route('/predict', methods=['POST'])
def predict():
    """Predict if news is fake or real"""
    try:
        # Get text from request
        data = request.get_json()
        text = data.get('text', '')
        
        if not text or len(text.strip()) < 10:
            return jsonify({
                'error': 'Please enter at least 10 characters.'
            }), 400
        
        # Clean and vectorize text
        if model is None or vectorizer is None:
            return jsonify({'error': 'Model is not loaded.'}), 500

        cleaned_text = clean_text(text)
        text_vector = vectorizer.transform([cleaned_text])

        # Make prediction
        prediction = model.predict(text_vector)[0]
        probabilities = model.predict_proba(text_vector)[0]
        
        # Prepare response
        result = {
            'prediction': int(prediction),
            'label': 'Real' if prediction == 1 else 'Fake',
            'confidence': float(max(probabilities)),
            'fake_probability': float(probabilities[0]),
            'real_probability': float(probabilities[1])
        }
        
        return jsonify(result)
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/health')
def health():
    """Health check endpoint"""
    return jsonify({'status': 'healthy'})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)