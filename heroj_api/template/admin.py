from django.contrib import admin
from .models import FirstAidCase, FirstAidStep


class FirstAidStepInline(admin.TabularInline):
    model = FirstAidStep
    extra = 1


class FirstAidCaseAdmin(admin.ModelAdmin):
    inlines = [FirstAidStepInline]


admin.site.register(FirstAidCase, FirstAidCaseAdmin)
