from django.db import models
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.base_user import AbstractBaseUser
from django.utils.translation  import ugettext_lazy as _

from .managers import UserManager





class User(AbstractBaseUser, PermissionsMixin):
    GENDER = (
        ("MALE", "male"), 
        ("FEMALE", "female"),
        ("SOMETHING_ELSE", "something else"),
        )
    email = models.EmailField(_('email'), unique=True)
    first_name = models.CharField(_('name'), max_length=50, blank=True)
    last_name = models.CharField(_('lastname'), max_length=50, blank=True)
    data_joined = models.DateTimeField(_("Registered"), auto_now_add=True)
    is_active = models.BooleanField(_("is_active"), default=False)
    age = models.IntegerField(_("age"), blank=True, default=0)
    gender = models.CharField(_("gender"),  choices=GENDER, max_length=14, default="MALE")
    is_staff = models.BooleanField(_("admin"), default=False)
    
    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    class Meta:
        verbose_name = _('user')
        verbose_name_plural = _('users')

    def get_full_name(self):
        return "{0} {1}".format(self.first_name, self.last_name)
    

