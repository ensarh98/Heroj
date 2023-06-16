from django.db import models

# Create your models here.
class Questions(models.Model):
    question_text = models.TextField()
    correctAnswerIndex = models.IntegerField()
    answered = models.BooleanField(default=False)


class Answers(models.Model):
    question = models.ForeignKey(Questions, on_delete=models.CASCADE)
    answer = models.CharField(max_length=255)
