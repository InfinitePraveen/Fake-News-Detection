// Character count
document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('news-text');
    const charCount = document.getElementById('char-count');
    
    textarea.addEventListener('input', function() {
        charCount.textContent = this.value.length;
    });
});

// Predict function
async function predictNews() {
    const textarea = document.getElementById('news-text');
    const text = textarea.value.trim();
    
    // Validate input
    if (text.length < 10) {
        alert('Please enter at least 10 characters.');
        return;
    }
    
    // Show loading
    document.getElementById('loading').classList.remove('hidden');
    document.getElementById('results').classList.add('hidden');
    document.getElementById('predict-btn').disabled = true;
    
    try {
        const response = await fetch('/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: text })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            displayResults(data);
        } else {
            alert(data.error || 'An error occurred.');
        }
    } catch (error) {
        alert('Network error. Please try again.');
        console.error('Error:', error);
    } finally {
        document.getElementById('loading').classList.add('hidden');
        document.getElementById('predict-btn').disabled = false;
    }
}

function displayResults(data) {
    // Show results
    const resultsDiv = document.getElementById('results');
    resultsDiv.classList.remove('hidden');
    
    // Update badge
    const badge = document.getElementById('result-badge');
    const isFake = data.label === 'Fake';
    badge.textContent = data.label;
    badge.className = 'badge ' + (isFake ? 'fake' : 'real');
    
    // Update confidence bar
    const confidenceFill = document.getElementById('confidence-fill');
    const confidenceText = document.getElementById('confidence-text');
    const confidence = Math.round(data.confidence * 100);
    confidenceFill.style.width = confidence + '%';
    confidenceFill.className = 'progress-fill ' + (isFake ? 'fake' : 'real');
    confidenceText.textContent = confidence + '%';
    
    // Update probabilities
    document.getElementById('fake-prob').textContent = Math.round(data.fake_probability * 100) + '%';
    document.getElementById('real-prob').textContent = Math.round(data.real_probability * 100) + '%';
    
    // Scroll to results
    resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Enter key support (Ctrl+Enter to submit)
document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('news-text');
    textarea.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
            e.preventDefault();
            predictNews();
        }
    });
});