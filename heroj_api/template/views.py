from django.http import JsonResponse
from .models import Assoc, FirstAidCase, Keywords, Synonyms
from rest_framework.decorators import api_view


@api_view(["GET"])
def result_view(request, id):
    try:
        case = FirstAidCase.objects.get(id=id)
        data = {"id": case.id, "title": case.title, "steps": []}
        steps = case.steps.all()
        for step in steps:
            step_data = {
                "step_number": step.step_number,
                "description": step.description,
            }
            data["steps"].append(step_data)
        return JsonResponse(data)
    except FirstAidCase.DoesNotExist:
        return JsonResponse({"error": "Not found!"}, status=404)

@api_view(["GET"])
def searchFor(request, words):
    word_list = words.split()
    word = words[0]

    keyword = None

    # Find keyword match
    keyword = Keywords.objects.filter(word=word).first()    
    if keyword == None:
        try:
            synonym = Synonyms.objects.get(synonym=word)
            keyword = synonym.word
        except Synonyms.DoesNotExist:
            return JsonResponse({"error": "Not found!"}, status=404)

    Assoc.objects.filter(keyword=keyword)

