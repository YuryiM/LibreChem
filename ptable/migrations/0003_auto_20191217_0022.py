# Generated by Django 2.2.7 on 2019-12-17 08:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ptable', '0002_auto_20191217_0021'),
    ]

    operations = [
        migrations.AlterField(
            model_name='element',
            name='description',
            field=models.TextField(default=''),
        ),
        migrations.AlterField(
            model_name='element',
            name='en_name',
            field=models.CharField(default='', max_length=20),
        ),
    ]