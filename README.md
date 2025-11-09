# CornHacks Fall 2025 - AI Disease Detector

This project has two major parts: a website that calculates the number of bananas a Central or South American counter could buy using their entire GDP in a specified year, and an AI that can classify banana leaf images for disease.

## Table of Contents

- [Installation](#installation)
- [Usage and Features](#usage-and-features)
- [Sources](#sources)


## Installation

To run the project:

```bash

# Clone the repository
git clone https://github.com/Zoorackzoos/cornhacks-2025-v2.git

# Navigate into the cornhacks-2025-v2 directory and run:
pip install -r requirements.txt

# Execute app.py in the server directory
python server/app.py

# Execute index.html
start src/html_files/menus/index.html

```


## Usage and Features

From the home page, you have two options; you may select either the 'Fun Page' or the AI Disease Detection page.
- In the 'Fun Page,' you may select either Central or South America.
    - You then must choose a specific country and year, and the program will calculate the number of bananas the country could buy for that year of their GDP.
- In the AI Disease Detection page, you may input an image of a banana leaf and the convolutional neural network will predict what disease the bana has, if any.
    - You may view a collection of sample test images in ```assets/test_images```.


## Sources
This project made use of the following dataset:

Mduma, N., & Elinisa, C. (2023). Banana Imagery Dataset - Tanzania [Data set]. Zenodo. https://doi.org/10.5281/zenodo.7670326
