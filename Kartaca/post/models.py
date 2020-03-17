from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify

class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=150)
    location = models.CharField(max_length=200)
    travel_date = models.DateTimeField(blank=True, null=True)
    notes = models.TextField(max_length=1500)
    slug = models.SlugField(unique=True, max_length=150, editable=False)

    def __str__(self):
        return self.title

    def get_slug(self):
        slug = slugify(self.title.replace("ı", "i"))
        unique = slug
        number = 1

        while Post.objects.filter(slug=unique).exists():
            unique = '{}-{}'.format(slug, number)
            number += 1
        return unique

    def save(self, *args, **kwargs):
        self.slug = self.get_slug()
        return super(Post, self).save(*args, **kwargs)