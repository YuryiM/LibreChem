# Generated by Django 2.2.7 on 2019-12-17 09:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ptable', '0003_auto_20191217_0022'),
    ]

    operations = [
        migrations.AlterField(
            model_name='element',
            name='critical_point',
            field=models.DecimalField(decimal_places=15, default=1.0, max_digits=30),
        ),
    ]
