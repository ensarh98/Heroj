from django.http import Http404
from django.http import JsonResponse
from rest_framework.decorators import api_view

from quiz.models import Questions, Answers


# Create your views here.

@api_view(['GET'])
def get_questions_and_answers(request):
    try:
        questions = Questions.objects.all()
        data = []
        for question in questions:
            answers = Answers.objects.filter(question=question)
            answer_list = [answer.answer for answer in answers]
            data.append({
                'id': question.id,
                'question': question.question_text,
                'answers': answer_list,
                'correctAnswerIndex': question.correctAnswerIndex,
                'answered': question.answered,
            })

        return JsonResponse({'data': data})
    except Questions.DoesNotExist:
        return Http404("Error retrieving question")


