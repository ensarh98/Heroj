from django.db import models


class FirstAidCase(models.Model):
    id = models.CharField(max_length=255, primary_key=True)
    title = models.CharField(max_length=255)
    view_count = models.IntegerField(default=0)

    def __str__(self):
        return self.title
    
    def json(self):
        return {
            'id': self.id,
            'title': self.title,
            'view_count': self.view_count
        }

class FirstAidStep(models.Model):
    case = models.ForeignKey(
        FirstAidCase, on_delete=models.CASCADE, related_name="steps"
    )
    step_number = models.PositiveIntegerField()
    description = models.TextField()

    def __str__(self):
        return f"Step {self.step_number} of {self.case.title}"

class Keywords(models.Model):
    word = models.CharField(max_length=255, primary_key=True)

class Synonyms(models.Model):
    synonym = models.CharField(max_length=255, primary_key=True)
    word = models.ForeignKey(Keywords, on_delete=models.CASCADE)

class Assoc(models.Model):
    keyword = models.ForeignKey(Keywords, on_delete=models.CASCADE)
    case = models.ForeignKey(FirstAidCase, on_delete=models.CASCADE)
    hit_count = models.IntegerField()

    def json(self):
        return {
            'id': self.pk,
            'keyword': self.keyword.word,
            'case': {
                'id': self.case.id,
                'title': self.case.title
            },
            'hit_count': self.hit_count,
        }
