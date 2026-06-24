import json
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Load FAQs
with open("faq.json", "r", encoding="utf-8") as f:
    faqs = json.load(f)

# Extract questions
questions = [faq["question"] for faq in faqs]

# Create TF-IDF vectors
vectorizer = TfidfVectorizer()
faq_vectors = vectorizer.fit_transform(questions)

GREETINGS = {
    "hi",
    "hii",
    "hello",
    "hey",
    "good morning",
    "good afternoon",
    "good evening"
}


def get_answer(query):
    query = query.strip()

    # Handle greetings
    if query.lower() in GREETINGS:
        return (
            "Hello! 👋 I'm the University FAQ Assistant.\n\n"
            "I can help you with:\n"
            "• Admissions\n"
            "• Courses\n"
            "• Attendance\n"
            "• Hostel\n"
            "• Campus Facilities\n"
            "• Financial Aid\n"
            "• Examinations\n\n"
            "Try asking something like:\n"
            "- How do I apply for a hostel?\n"
            "- How can I check my attendance?\n"
            "- Where can I download my admit card?"
        )

    query_vector = vectorizer.transform([query])

    similarities = cosine_similarity(query_vector, faq_vectors)

    best_match_index = similarities.argmax()
    best_score = similarities[0][best_match_index]

    print(f"Query: {query}")
    print(f"Best Match: {questions[best_match_index]}")
    print(f"Score: {best_score}")

    if best_score < 0.5:
        return (
            "I couldn't find a relevant answer. 🤔\n\n"
            "You can ask me about:\n"
            "• Admissions\n"
            "• Courses\n"
            "• Attendance\n"
            "• Hostel\n"
            "• Campus Facilities\n"
            "• Financial Aid\n"
            "• Examinations"
        )

    return faqs[best_match_index]["answer"]


if __name__ == "__main__":
    while True:
        query = input("You: ")

        if query.lower() == "exit":
            print("Bot: Goodbye!")
            break

        print("Bot:", get_answer(query))