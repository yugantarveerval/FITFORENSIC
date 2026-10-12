# FitForensic - Gym & Fitness Website

> *The only crime scene you'll want to be at.*

FitForensic is a responsive, single-page gym and fitness website with a crime-scene theme (yellow tape, chalk outlines and evidence markers). It is built with plain **HTML, CSS and basic JavaScript**, with no frameworks or libraries. It was made as a B.Tech MSE project.

## Features

- **Crime-scene hero section** with a themed introduction and call-to-action buttons
- **Health information** with four tips (nutrition, hydration, sleep, warm-up / cool-down)
- **Hydration calculator** that tells you how much water to drink each day
- **Membership plans:** Basic, Standard and Premium
- **Fitness equipment** section with six illustrated cards
- **Fitness programs** section with six illustrated cards
- **Weekly fitness plan** table and a sample daily diet
- **Join form** that generates a **printable registration slip**
- **Responsive design** that works on desktop, tablet and mobile
- **13 SVG illustrations** (hero banner, 6 equipment, 6 programs)

## Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Page structure and content |
| CSS3 | Layout (Flexbox and Grid), theme, responsiveness, print styles |
| JavaScript (basic) | Water calculator, form handling, showing and hiding the slip |
| SVG | Illustrations in the `images` folder |

## Project Structure

```
fitforensic/
├── index.html     # structure and content of the website
├── style.css      # design, layout, responsive and print styles
├── script.js      # JavaScript (water calculator and registration slip)
├── README.md      # this file
└── images/
    ├── hero.svg
    ├── equip-treadmill.svg
    ├── equip-bike.svg
    ├── equip-barbell.svg
    ├── equip-dumbbell.svg
    ├── equip-cable.svg
    ├── equip-kettlebell.svg
    ├── prog-weightloss.svg
    ├── prog-musclegain.svg
    ├── prog-hiit.svg
    ├── prog-yoga.svg
    ├── prog-beginner.svg
    └── prog-functional.svg
```

## How to Run

1. Download or unzip the project folder.
2. Keep `index.html`, `style.css`, `script.js` and the `images` folder together.
3. Double-click `index.html` to open it in any modern browser (Chrome, Edge, Firefox).

No installation or server is needed.

## How It Works

### Hydration calculator
1. The user enters their weight and chooses whether they are working out today.
2. `calculateWater()` multiplies the weight by 33 ml.
3. If it is a workout day, it adds 500 ml.
4. The result is displayed on the page.

### Registration slip
1. The user fills in name, phone, plan, duration, program and start date.
2. On **Register Now**, `submitForm()` checks that the name is not empty.
3. The values are copied into the registration slip, and the total fee is calculated as *monthly fee × number of months*.
4. The website is hidden and the slip is shown.
5. **Print Slip** calls `window.print()`. The print styles (`@media print`) hide the buttons so only the slip is printed.
6. **Back to Website** shows the website again.

### Membership plans

| Plan | Price | Highlights |
|------|-------|------------|
| Basic | Rs. 999 / month | Gym floor, equipment, locker, 6-10 AM slot |
| Standard | Rs. 1,999 / month | Basic + all-day access, group classes, monthly check-up |
| Premium | Rs. 3,499 / month | Standard + personal trainer, diet chart, steam and sauna |

## Customisation

- **Change the theme colour:** replace `#ffd400` in `style.css`.
- **Change plan prices:** edit the `.price` text in `index.html` and the `value` of each `<option>` in the plan dropdown.
- **Change the water rule:** edit `* 33` or `+ 500` in `script.js`.
- **Use real photos:** put images in the `images` folder and update the `src` of the `<img>` tags in `index.html`.

## Limitations

- It is a front-end only project: there is no server or database, so form data is not saved.
- Phone and email are not validated; only the name is checked.
- The water recommendation is a rough guide, not medical advice.

## Future Improvements

- Back-end and database to store member registrations
- Full form validation
- Online payment for memberships
- Trainer profiles and class booking
- A BMI or calorie calculator

## Author

Yuganter Veerwal
## Link
https://fitforensic.vercel.app
