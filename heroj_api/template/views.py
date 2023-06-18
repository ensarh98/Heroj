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

        # Increment view count
        case.view_count = case.view_count + 1
        case.save()

        return JsonResponse(data)
    except FirstAidCase.DoesNotExist:
        return JsonResponse({"error": "Not found!"}, status=404)

@api_view(["GET"])
def searchForKeywords(request, words):
    if len(words) < 3:
        return JsonResponse([], safe=False)

    word_list = words.split()
    
    for word in word_list:
        keyword = None

        # Find keyword match
        keyword = Keywords.objects.filter(word__icontains=word).first()    
        if keyword == None:
            try:
                synonym = Synonyms.objects.get(synonym__icontains=word)
                keyword = synonym.word
            except Synonyms.DoesNotExist:
                if word == word_list[-1]:
                    return JsonResponse([], safe=False)
                else:
                    continue

        assocs = Assoc.objects.filter(keyword=keyword).order_by('-hit_count')

        data = []
        for assoc in assocs:
            data.append(assoc.json())

        return JsonResponse(data, safe=False)

@api_view(["GET"])
def getTopCases(request, count):
    cases = FirstAidCase.objects.all().order_by('-view_count')[:count]

    data = []
    for case in cases:
        data.append(case.json())

    return JsonResponse(data, safe=False)