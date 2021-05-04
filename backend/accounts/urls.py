from django.urls import path
from . import views 

app_name = 'users'
urlpatterns = [
    path('view_all_list/', views.AllUsersListView.as_view(), name="all_user_list"),
    path('view_users_list/', views.UsersListView.as_view(), name="user_list_view"),
    path('view_admins_list/', views.AdminsListView.as_view(), name="admin_list_view"),
    path('view_superusers_list/', views.SuperusersListView.as_view(), name="superuser_list_view"),
    path('users_list/', views.UsersList.as_view(), name="user_list"),
    path('admins_list/', views.AdminsList.as_view(), name="admin_list"),
    path('superusers_list/', views.SuperusersList.as_view(), name="superuser_list"),
    

]
