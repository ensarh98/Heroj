from django.http import JsonResponse
from .models import FirstAidCase
from .models import FirstAidStep
from django.views.decorators.http import require_GET
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


@require_GET
def search_cases(request):
    query = request.GET.get("query", "")
    results = FirstAidCase.objects.filter(title__icontains=query)
    serialized_results = [
        {
            "id": case.id,
            "title": case.title,
            "steps": [
                {"step_number": step.step_number, "description": step.description}
                for step in case.steps.all()
            ],
        }
        for case in results
    ]
    return JsonResponse(serialized_results, safe=False)


cases_ordered_by_title = FirstAidCase.objects.order_by("title")

keyword = "rijec_za_pretragu"
steps_with_keyword = FirstAidStep.objects.filter(
    description__icontains=keyword
).select_related("case")

for step in steps_with_keyword:
    print(step.description)
    print(step.case.title)

some_word = "rijec"
cases_with_specific_word = FirstAidCase.objects.filter(title__icontains=some_word)

some_id = "id_slucaja"
cases_with_specific_id = FirstAidCase.objects.filter(id=some_id)
