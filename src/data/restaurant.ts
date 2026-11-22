/**
 * All restaurant content lives here so it is easy to edit in VS Code.
 * Contact details below are DEMO data — replace them with the real ones.
 */
import burgerTruffle from "@/assets/burger-truffle.jpg";
import burgerClassic from "@/assets/burger-classic.jpg";
import pizzaMargherita from "@/assets/pizza-margherita.jpg";
import pizzaPepperoni from "@/assets/pizza-pepperoni.jpg";
import pastaAlfredo from "@/assets/pasta-alfredo.jpg";
import pastaArrabbiata from "@/assets/pasta-arrabbiata.jpg";
import drinkMango from "@/assets/drink-mango.jpg";
import drinkLatte from "@/assets/drink-latte.jpg";

export const restaurant = {
  name: "Urban Bites Karachi",
  tagline: "Bold flavours. Warm nights. Your table in the city.",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Reservations", href: "#reservations" },
  { label: "Contact", href: "#contact" },
] as const;

export const menuCategories = ["Burgers", "Pizza", "Pasta", "Drinks"] as const;
export type MenuCategory = (typeof menuCategories)[number];

export type MenuItem = {
  name: string;
  description: string;
  price: number; // in Pakistani Rupees
  category: MenuCategory;
  image: string;
  tag?: string;
};

export const menuItems: MenuItem[] = [
  {
    name: "Smoky Truffle Burger",
    description: "Angus beef patty, Swiss cheese, caramelised onions and shaved black truffle on brioche.",
    price: 1890,
    category: "Burgers",
    image: burgerTruffle,
    tag: "Chef's pick",
  },
  {
    name: "Urban Double Cheese",
    description: "Two smashed patties, cheddar, pickles, tomato and house sauce. Served with fries.",
    price: 1450,
    category: "Burgers",
    image: burgerClassic,
  },
  {
    name: "Margherita Napoletana",
    description: "San Marzano tomato, fresh mozzarella and basil on a wood-fired, charred crust.",
    price: 1650,
    category: "Pizza",
    image: pizzaMargherita,
  },
  {
    name: "Hot Honey Pepperoni",
    description: "Crispy beef pepperoni, mozzarella, chilli flakes and a drizzle of hot honey.",
    price: 1950,
    category: "Pizza",
    image: pizzaPepperoni,
    tag: "Best seller",
  },
  {
    name: "Chicken Alfredo",
    description: "Fettuccine in a silky parmesan cream sauce with grilled chicken and black pepper.",
    price: 1550,
    category: "Pasta",
    image: pastaAlfredo,
  },
  {
    name: "Penne Arrabbiata",
    description: "Penne tossed in a spicy garlic-tomato sauce, finished with basil and parmesan.",
    price: 1350,
    category: "Pasta",
    image: pastaArrabbiata,
  },
  {
    name: "Mango Passion Cooler",
    description: "Fresh mango, passion fruit, mint and a squeeze of orange over crushed ice.",
    price: 650,
    category: "Drinks",
    image: drinkMango,
  },
  {
    name: "Iced Caramel Latte",
    description: "Double espresso, chilled milk and house caramel, topped with whipped cream.",
    price: 750,
    category: "Drinks",
    image: drinkLatte,
  },
];

export function formatPrice(price: number) {
  return `Rs. ${price.toLocaleString("en-PK")}`;
}

/** DEMO contact details — replace before going live. */
export const contactInfo = {
  address: "Plot 24, MM Alam Road, Gulberg III, Karachi (demo address)",
  phone: "+92 300 0000000 (demo)",
  email: "hello@urbanbites.example (demo)",
};

export const openingHours = [
  { days: "Monday – Thursday", hours: "12:00 PM – 11:00 PM" },
  { days: "Friday – Saturday", hours: "12:00 PM – 12:30 AM" },
  { days: "Sunday", hours: "1:00 PM – 11:00 PM" },
];

/** Time slots offered in the reservation form. */
export const reservationTimes = [
  "12:30", "13:00", "13:30", "14:00", "14:30", "15:00",
  "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00",
];

export const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "TikTok", href: "https://tiktok.com" },
] as const;
