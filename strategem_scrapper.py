'''
    Scrapper for helldivers fandom strategem page
    ---------------------------------------------
    Created by Ethan Shealey

    How to use: Simply run strategem_scrapper.py and wait for the program
                to finish, then the data will be loaded into src/data/stratagems.json
'''
import requests
from bs4 import BeautifulSoup as Soup

ARROW_UP = "Arrow 4 U"
ARROW_DOWN = "Arrow 1 D"
ARROW_LEFT = "Arrow 2 L"
ARROW_RIGHT = "Arrow 3 R"

UP = "UP"
DOWN = "DOWN"
RIGHT = "RIGHT"
LEFT = "LEFT"

EXCEPTION_LIST = [
    "Illumination Flare"
]

class Stratagem:
    def __init__(self, image, name, code, cooldown, uses, activation, lookup, category):
        self.image = image
        self.name = name
        self.code = code
        self.cooldown = cooldown
        self.uses = uses
        self.activation = activation
        self.lookup = lookup
        self.category = category
    
    def __repr__(self) -> str:
        return str({
                    "image": self.image, 
                    "name": self.name,
                    "code": self.code,
                    "cooldown": self.cooldown,
                    "uses": self.uses,
                    "activation": self.activation,
                    "lookup": self.lookup,
                    "category": self.category
        })

def constructStratagem(rows, category):

    rows = [rows[x:x+6] for x in range(0, len(rows), 6)]
    table_list = []

    for row in rows:

        # NAME
        name = row[1].text.strip().replace('"', '\\"').replace("'", '\\"')

        # IMAGE
        image = Soup(str(row), "html.parser")
        image = image.find("img")
        if(image.has_attr("data-src")):
            image = str(image["data-src"])
        else:
            image = str(image["src"])
        
        # DOWNLOAD IMAGE
        filename = ''.join([x for x in name.replace(" ", "_") if x.isalnum() or x == '_' ]) + ".jpg"
        with open("public/images/stratagems/" + filename, "wb+") as image_file:
            image_file.write(requests.get(image).content)

        # Code
        code = parseControls(row[2])

        # Cooldown
        cooldown = row[3].text.strip()

        # Uses
        uses = row[4].text.strip()

        #Activiation
        activation = row[5].text.strip()

        category = category.split(":")
        if len(category) > 1:
            category = category[1].strip()
        else:
            category = category[0].strip()

        stratagem = Stratagem(filename, name, code, cooldown, uses, activation, filename.split('.')[0], category)
        
        if stratagem.name not in EXCEPTION_LIST:
            table_list.append(stratagem)

    return table_list

def parseControls(data):
    data = Soup(str(data), "html.parser")
    data = data.findAll("img", alt=True)
    code_list = []
    for arrow in data:
        if arrow["alt"] == ARROW_UP:
            code_list.append(UP)
        elif arrow["alt"] == ARROW_DOWN:
            code_list.append(DOWN)
        elif arrow["alt"] == ARROW_RIGHT:
            code_list.append(RIGHT)
        elif arrow["alt"] == ARROW_LEFT:
            code_list.append(LEFT)
    
    return code_list

fandom_content = requests.get('https://helldivers.fandom.com/wiki/Stratagem_Codes_(Helldivers_2)').content
soup = Soup(fandom_content, "html.parser")
tables = soup.findAll("table")

stratagems = []

for table in tables:
    table_content = Soup(str(table), "html.parser")
    rows = list(table_content.findAll("td"))
    header = list(table_content.findAll("th"))[0].text.strip()
    stratagems += constructStratagem(rows, header)

with open("src/data/stratagems.json", "w+") as file:
    file.write(str(stratagems).replace("'", '"').replace('\\"', '\"'))