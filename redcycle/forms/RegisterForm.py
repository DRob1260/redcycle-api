from django.contrib.auth import authenticate, get_user_model
from django import forms

User = get_user_model()

class UsersRegisterForm(forms.ModelForm):
    class Meta:
        model = User
        fields = [
            "firstName",
            "lastName",
            "email",
            "confirm_email",
            "password",
		]

    firstName = forms.CharField();
    lastName = forms.CharField();
    email = forms.EmailField(label = "Email");
    confirm_email = forms.EmailField(label = "Confirm Email");
    password = forms.CharField(widget = forms.PasswordInput);


    def __init__(self, *args, **kwargs):
        super(UsersRegisterForm, self).__init__(*args, **kwargs)
        self.fields['firstName'].widget.attrs.update({
            'class': 'form-control',
            "name":"firstName"})
        self.fields['lastName'].widget.attrs.update({
            'class': 'form-control',
            "name":"lastName"})
        self.fields['email'].widget.attrs.update({
            'class': 'form-control',
            "name":"email"})
        self.fields['confirm_email'].widget.attrs.update({
            'class': 'form-control',
            "name":"confirm_email"})
        self.fields['password'].widget.attrs.update({
            'class': 'form-control',
            "name":"password"})


    def clean(self, *args, **keyargs):
        email = self.cleaned_data.get("email")
        confirm_email = self.cleaned_data.get("confirm_email")
        firstName = self.cleaned_data.get("firstName")
        lastName = self.cleaned_data.get("lastName")
        password = self.cleaned_data.get("password")

        if email != confirm_email:
            raise forms.ValidationError("Email must match")

        email_qs = User.objects.filter(email=email)
        if email_qs.exists():
            raise forms.ValidationError("Email is already registered")

        #you can add more validations for password

        if len(password) < 6:
            raise forms.ValidationError("Password must be greater than 6 characters")


        return super(UsersRegisterForm, self).clean(*args, **keyargs)
