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

