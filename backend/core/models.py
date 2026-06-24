from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    # Only 'recruiter' is used for registration; 'candidate' kept for legacy data only
    ROLE_CHOICES = (
        ('recruiter', 'Recruiter'),
    )
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='recruiter')
    company_name = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return f"{self.username} ({self.role})"

class Resume(models.Model):
    STATUS_CHOICES = (
        ('pending', 'Pending'),
        ('parsed', 'Parsed'),
        ('failed', 'Failed'),
    )
    # owner is nullable — candidate resumes have no account, recruiter-linked
    # resumes (uploaded on behalf of a candidate) set this to the recruiter.
    owner = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='resumes',
        null=True,
        blank=True,
    )
    file = models.FileField(upload_to='resumes/')
    uploaded_at = models.DateTimeField(auto_now_add=True)
    parsed_skills = models.JSONField(blank=True, null=True)
    parsed_education = models.JSONField(blank=True, null=True)
    parsed_experience = models.JSONField(blank=True, null=True)
    parsed_certifications = models.JSONField(blank=True, null=True)
    raw_text = models.TextField(blank=True, null=True)
    parse_status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='pending')

    def __str__(self):
        if self.owner:
            return f"Resume of {self.owner.username} - {self.parse_status}"
        return f"Anonymous Resume #{self.pk} - {self.parse_status}"

class JobDescription(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='jobs')
    title = models.CharField(max_length=255)
    company = models.CharField(max_length=255)
    raw_text = models.TextField()
    parsed_required_skills = models.JSONField(blank=True, null=True)
    parsed_certifications = models.JSONField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} at {self.company}"

class Match(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE, related_name='matches')
    job = models.ForeignKey(JobDescription, on_delete=models.CASCADE, related_name='matches')
    match_percentage = models.FloatField(blank=True, null=True)
    missing_skills = models.JSONField(blank=True, null=True)
    missing_certifications = models.JSONField(blank=True, null=True)
    explanation = models.TextField(blank=True, null=True)
    computed_at = models.DateTimeField(blank=True, null=True)

    def __str__(self):
        owner_name = self.resume.owner.username if self.resume.owner else "Anonymous"
        return f"Match: {owner_name} for {self.job.title} - {self.match_percentage}%"
