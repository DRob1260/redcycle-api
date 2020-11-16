# Generated by Django 3.1.3 on 2020-11-15 23:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('redcycle', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='location',
            name='authorUuid',
            field=models.ForeignKey(default='a74a9b77-7c9d-4f86-8a12-0a37150621fd', on_delete=django.db.models.deletion.CASCADE, to='redcycle.account'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='location',
            name='description',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='location',
            name='postalCode',
            field=models.CharField(default='61761', max_length=6),
            preserve_default=False,
        ),
    ]
