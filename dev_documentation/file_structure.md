# file structure
```
project_root/    
├─ assets/
    └─ jungle-background.jpg        ← Background set as a Jungle
    └─ map_bg.png                   ← Background set as the Map of South and Central America
    └─ map_central.png              ← Image of Central America
    └─ map_south.png                ← Image of South America

├─ css/
    └─ ai_style.css                 ← styles for the AI Web Page
    └─ fun_pages.css                ← styles for Central and South America
    └─ style.css                    ← shared styles (background, buttons, etc.)
    
├─ dev_documentation/
    └─ file_structure.md            ← Markdown file for the entire file structure

├─ model/
    └─ banana_disease_model.h5      ← AI Model

├─ server/
    └─ app.py                       ← Starts and connects the neural network

├─ src/
    └─ html_files/
        └─ ai-page
            └─ ai_web.html          ← AI Page
        └─ fun_pages
            └─ central.html         ← Central America Fun Page (top-right)
            └─ south.html           ← South America Fun Page (bottom-right)
        └─ menus
            └─ central.html         ← Central America Fun Page (top-right)
            ├─ index.html           ← Main menu (bottom-left page)     
    └─ js_files/
        └─ central.js               ← Communicates and Implement Logic for Central America  
        └─ logic.js                 ← Communicates between the AI and the Web Page    
        └─ south.js                 ← Communnicates and Implement Logic for South America

├─ README.md                        ← Read me file that explains what the User needs to know
├─ requirements.txt                 ← Text file consisting of all dependencies needed to run

```
