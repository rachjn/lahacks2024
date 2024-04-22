
from bs4 import BeautifulSoup
import requests
import csv
import re
from PIL import Image 

page_to_scrape = requests.get("https://community.ucla.edu/studentorgs/music") 
soup = BeautifulSoup(page_to_scrape.text, "lxml")
# club_names = soup.findAll("div", class_ = "row bold")

# club_links = soup.findAll()

club_links= []
club_names = soup.findAll("strong", attrs={"class": "h4"})
club_descriptions = []
club_instas = []
club_contacts = []
club_photos = []

for link in soup.find_all('a'):
    if "/studentorg/" in link.__str__():
        # print(link.get('href'))
        club_links.append(link.get('href'))

file = open("clubs_26_music.csv", "w")
writer = csv.writer(file)

writer.writerow(["CLUB NAME", "CLUB DESCRIPTIONS", "CLUB INSTAGRAM", "CLUB EMAIL", "CLUB WEBSITE", "CLUB PHOTOS"])

for club_link in club_links:
    page1_to_scrape = requests.get("https://community.ucla.edu"+club_link)
    soup1 = BeautifulSoup(page1_to_scrape.text, "lxml")
    club_descriptions.append(soup1.findAll("p", attrs={"class": "org-description"}))
    # for link in soup1.find_all("nav", attrs={"aria-label":"Social Links"}):
    is_there = False
    for link in soup1.find_all('a'):
        if "instagram" in link.__str__():
            club_instas.append(link.get('href'))
            is_there = True
    if not is_there:
        club_instas.append(" ")
    
    club_contacts.append(soup1.findAll("p", attrs={"class" : "contact"}))
    
    p = False
    for pht in soup1.find_all("img"):
        if ".jpg" in pht.__str__():
            club_photos.append(pht.get('src'))
            p = True
    if not p:
        club_photos.append(" ")
    # for c in soup1.findAll("p", attrs={"class" : "contact"}):
    #     if "gmail" 

# print(club_photos)
# print(type(club_photos[0]))

# for i in range(len(club_descriptions)):
#     club_descriptions[i].__str__()[club_descriptions[i].find(">"):club_descriptions[i].find("/").strip("<")]
# print(club_descriptions)

pattern = r'\b(?:https?://|www\.)\S+\b|\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
emails = []
websites = []

for club_contact in club_contacts:
    cc = club_contact.__str__()
    matches = re.findall(pattern, cc)
    
    w = False
    e = False
    for match in matches:
        if match.startswith('http') or match.startswith('www'):
            m = match[0:match.find('\"')]
            websites.append(m)
            w = True
        # elif match.endswith('.com') or match.endswith('.edu'):
        #     emails.append(match)
        #     e = True
        else:
            e = True
    if e:
        emails.append(match)
 
    if not w:
        websites.append(" ")

# print(websites)
i = 0
for club_name, club_description, club_insta, email, website, club_photo in zip(club_names, club_descriptions, club_instas, emails, websites, club_photos):
    # print(club_name.text + " - " + club_description + " - " + club_insta+ " - " + club_contact.__str__())
    images = requests.get("https://community.ucla.edu"+club_photo).content
    f = open(i.__str__()+'.jpg', 'wb')
    f.write(images) 
    f.close() 
    img = Image.open(i.__str__()+'.jpg')
    img.show()
    i+=1
    cd = club_description.__str__()
    writer.writerow([club_name.text, cd[cd.find(">"):cd.find("/")].strip("<>"), club_insta, email, website, club_photo])
   
file.close()