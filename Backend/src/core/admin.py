from django.contrib import admin

from .models import (
    Country, Application, GalleryForm, Branch
)


@admin.register(Application)
class ApplicationAdmin(admin.ModelAdmin):
    list_display = ('name', 'short_name', 'tagline', 'is_active', 'created_on')


@admin.register(Country)
class CountryAdmin(admin.ModelAdmin):
    list_display = ('name', 'short_name', 'language', 'currency', 'phone_code', 'is_active', 'created_on')


@admin.register(GalleryForm)
class GalleryAdmin(admin.ModelAdmin):
    list_display = ('image',)
    
from .models import ContactMessage

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject', 'created_at')
    search_fields = ('name', 'email', 'subject')
    list_filter = ('subject', 'created_at')



@admin.register(Branch)
class BranchAdmin(admin.ModelAdmin):
    list_display = ('name', 'address', 'phone', 'rating', 'status')
    search_fields = ('name', 'address', 'phone')
    list_filter = ('status',)