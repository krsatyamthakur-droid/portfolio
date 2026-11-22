import burgerChickenCombo from './assets/food/burger-chicken-combo.webp'
import vegBurger from './assets/food/veg-burger.webp'
import classicCheeseBurger from './assets/food/classic-cheese-burger.webp'
import burgerLove from './assets/food/burger-love.jpg'
import goodFoodGoodMood from './assets/food/good-food-good-mood.jpg'
import burgerTime from './assets/food/burger-time.jpg'
import spicyBurger from './assets/food/spicy-burger.jpg'
import gardenVegBurger from './assets/food/garden-veg-burger.jpg'
import goldenCheeseBurger from './assets/food/golden-cheese-burger.jpg'
import supremePizza from './assets/food/supreme-pizza.jpg'
import margheritaPizza from './assets/food/margherita-pizza.jpg'
import spicyInfernoPizza from './assets/food/spicy-inferno-pizza.jpg'
import cheeseBurstPizza from './assets/food/cheese-burst-pizza.jpg'
import bbqChickenPizza from './assets/food/bbq-chicken-pizza.jpg'
import royalChickenBiryani from './assets/food/royal-chicken-biryani.jpg'
import spicyMuttonBiryani from './assets/food/spicy-mutton-biryani.jpg'
import vegBiryani from './assets/food/veg-biryani.jpg'
import lateNightBiryani from './assets/food/late-night-biryani.jpg'
import familyBiryani from './assets/food/family-biryani.jpg'

const burgers = [
  {
    title: 'Burger & Chicken Combo',
    image: burgerChickenCombo,
    width: 1254,
    height: 1254,
    alt: 'A cheeseburger and fried chicken beneath a white and yellow brush-lettered headline',
    description: 'The square composition gives the burger and fried chicken equal attention. Yellow brush lettering connects the headline and order prompt across the dark background.',
  },
  {
    title: 'Veg Burger',
    image: vegBurger,
    width: 1024,
    height: 1536,
    alt: 'A vegetable burger with lettuce, tomato, and red onion below a lime-green headline',
    description: 'Lime-green lettering and leaf illustrations distinguish the vegetarian post. A close crop brings the vegetables and texture of the patty into focus.',
  },
  {
    title: 'Classic Cheese Burger',
    image: classicCheeseBurger,
    width: 1024,
    height: 1536,
    alt: 'A tall poster with a cheeseburger, fries, and cream lettering accented with yellow',
    description: 'The warm yellow palette repeats the color of the melted cheese, and the oversized brush headline leaves the center of the frame to the burger.',
  },
  {
    title: 'Burger Love',
    image: burgerLove,
    width: 415,
    height: 652,
    alt: 'A burger surrounded by floating tomatoes and onions below white and yellow brush lettering',
    description: 'Floating ingredients frame the burger, while a hand-drawn crown and heart give the post a playful tone.',
  },
  {
    title: 'Good Food, Good Mood',
    image: goodFoodGoodMood,
    width: 417,
    height: 652,
    alt: 'Stacked black and yellow lettering on a cream background alongside a close-up of a cheeseburger',
    description: 'A cream backdrop makes the black headline easy to scan. The close crop on the burger puts the ingredients right beside the message.',
  },
  {
    title: 'Burger Time',
    image: burgerTime,
    width: 413,
    height: 652,
    alt: 'Yellow and white neon-style lettering above a burger, fries, and a drink',
    description: 'Neon lettering gives the post the feel of a diner after dark. Fries and a drink round out the meal in the composition.',
  },
  {
    title: 'Spicy Burger',
    image: spicyBurger,
    width: 415,
    height: 598,
    alt: 'A burger surrounded by red chilies against a textured red and black backdrop',
    description: 'Red brush lettering, textured shadows, and chilies signal heat before the viewer reads the headline.',
  },
  {
    title: 'Garden Veg Burger',
    image: gardenVegBurger,
    width: 417,
    height: 598,
    alt: 'A vegetable burger framed by green leaves and dark green lettering on cream',
    description: 'Leaf illustrations and a cream-and-green palette give the vegetarian option its own look within the burger series.',
  },
  {
    title: 'Golden Cheese Burger',
    image: goldenCheeseBurger,
    width: 413,
    height: 598,
    alt: 'A burger with melted cheese beneath a gold serif headline on black',
    description: 'Gold serif type picks up the color of the melted cheese. The dark backdrop keeps the headline and burger in focus.',
  },
]

const pizza = [
  {
    title: 'Supreme Pizza',
    image: supremePizza,
    width: 625,
    height: 661,
    alt: 'A slice lifted from a supreme pizza with a cheese pull, neon lettering, and a movie clapperboard',
    description: 'A cheese pull gives the image movement. The neon headline and movie props frame the pizza as a movie-night order.',
  },
  {
    title: 'Margherita Pizza',
    image: margheritaPizza,
    width: 625,
    height: 661,
    alt: 'A Margherita pizza topped with basil in front of a warm brick oven',
    description: 'Basil, tomatoes, and a lit brick oven set the scene. The yellow headline echoes the warmth of the oven.',
  },
  {
    title: 'Spicy Inferno Pizza',
    image: spicyInfernoPizza,
    width: 401,
    height: 590,
    alt: 'A spicy pizza against a dark backdrop with flames, peppers, and a red-and-yellow headline',
    description: 'Flames and red brush strokes communicate heat. The yellow order prompt stays easy to spot against the darker lower edge.',
  },
  {
    title: 'Cheese Burst Pizza',
    image: cheeseBurstPizza,
    width: 447,
    height: 590,
    alt: 'A pizza slice lifted high with strands of melted cheese below a yellow headline',
    description: 'The lifted slice makes the cheese pull the main visual. Yellow lettering carries the same color from the topping into the headline.',
  },
  {
    title: 'BBQ Chicken Pizza',
    image: bbqChickenPizza,
    width: 400,
    height: 590,
    alt: 'A barbecue chicken pizza beneath a yellow brush headline with smoke curling at the right',
    description: 'Smoke and a dark backdrop suggest the barbecue flavor. The chicken illustration gives the headline a quick visual cue.',
  },
]

const biryani = [
  {
    title: 'Royal Chicken Biryani',
    image: royalChickenBiryani,
    width: 622,
    height: 624,
    alt: 'Chicken biryani in a copper serving bowl beneath gold serif lettering and an ornate arch',
    description: 'An ornate arch, copper bowl, and gold serif lettering create a celebratory setting for the chicken biryani.',
  },
  {
    title: 'Spicy Mutton Biryani',
    image: spicyMuttonBiryani,
    width: 627,
    height: 624,
    alt: 'Mutton biryani surrounded by red chilies and spice against a dark backdrop',
    description: 'Red chilies and scattered spices frame the bowl. Angled brush lettering gives this variant a sharper, more energetic composition.',
  },
  {
    title: 'Veg Biryani',
    image: vegBiryani,
    width: 412,
    height: 627,
    alt: 'Vegetable biryani served in a green bowl against a softly lit backdrop with herbs',
    description: 'Soft light, fresh greens, and a green serving bowl carry the vegetarian theme from the lettering into the food scene.',
  },
  {
    title: 'Late-Night Biryani',
    image: lateNightBiryani,
    width: 418,
    height: 627,
    alt: 'A BurgerHaven biryani takeaway box set in front of a softly lit street at night',
    description: 'Street lights and a takeaway box make the late-night occasion clear. A crescent moon and handwritten lettering reinforce the setting.',
  },
  {
    title: 'Family Biryani',
    image: familyBiryani,
    width: 414,
    height: 627,
    alt: 'Biryani in a large patterned clay pot with a family dining in the background',
    description: 'A large clay pot sets up the idea of a shared meal. The softly blurred diners keep the focus on the food while giving it a family setting.',
  },
]

export const foodCategories = [
  { title: 'Burgers', posts: burgers },
  { title: 'Pizza', posts: pizza },
  { title: 'Biryani', posts: biryani },
]
