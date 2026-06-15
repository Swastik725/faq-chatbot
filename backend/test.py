from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

questions = [
    "How do I reset my password",
    "How can I check my attendance",
    "When are semester exams conducted"
]

vectorizer = TfidfVectorizer()

faq_vectors = vectorizer.fit_transform(questions)

query = "I forgot my password"

query_vector = vectorizer.transform([query])

similarities = cosine_similarity(query_vector, faq_vectors)

print(similarities)