from django.contrib import admin

from .models import User

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display= [ 'email', 'id', 'first_name', 'last_name', 'is_superuser', 'is_staff']
    search_fields = [ 'email', 'id', 'first_name', 'last_name', 'is_superuser', 'is_staff']

