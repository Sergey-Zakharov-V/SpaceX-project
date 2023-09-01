from django.db import models


class MenuOptions(models.Model):
    title = models.CharField(max_length=14, blank=False, null=False)
    link = models.URLField()

    def __str__(self):
        return self.title


class AdvantagesOptions(models.Model):
    top_text = models.CharField(max_length=14, blank=False, null=False)
    middle_text = models.CharField(max_length=14, blank=False, null=False)
    bottom_text = models.CharField(max_length=14, blank=False, null=False)

    def __str__(self):
        return self.top_text

