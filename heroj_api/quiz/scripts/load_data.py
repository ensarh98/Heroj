import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'heroj_api.settings')
django.setup()


from quiz.models import Questions, Answers
import json
from django.db import transaction


BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
path_to_json = os.path.join(BASE_DIR, 'fixtures', 'questions.json')


with open(path_to_json, 'r',  encoding='utf-8') as f:
    data = json.load(f)


with transaction.atomic():
    for item in data:

        question = Questions.objects.create(
            question_text=item['question'],
            correctAnswerIndex=item['correctAnswerIndex'],
            answered=item['answered']
        )

        for answer_text in item['answers']:
            answer = Answers.objects.create(
                question=question,
                answer=answer_text
            )

