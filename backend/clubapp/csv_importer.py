import csv
from datetime import datetime
import os, django
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")
django.setup()

from . import models 

def import_clubs(file_path):
    with open(file_path, 'r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            models.Club.objects.create(
                name=row['CLUB NAME'],
                description=row['CLUB DESCRIPTIONS'],
                insta=row['CLUB INSTAGRAM'],
                email=row['CLUB EMAIL'],
                website=row['CLUB WEBSITE']
            )

if __name__ == '__main__':
    csv_file_path = r'C:\Users\david\OneDrive\Documents\Desktop\lahacks2024\backend\clubapp\clubs_21.csv'  # Replace with your actual file path
    import_clubs(csv_file_path)