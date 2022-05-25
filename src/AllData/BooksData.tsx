import b1 from "../images/cardImage1.png";
import b2 from "../images/cardImage2.png";
import b3 from "../images/cardImage3.png";
import b4 from "../images/4.png";
import b5 from "../images/5.png";
import b6 from "../images/6.png";
import b7 from "../images/7.png";
import b8 from "../images/8.png";
import b9 from "../images/9.png";
import b10 from "../images/1.png";
import b11 from "../images/2.png";
import b12 from "../images/3.png";

const bookData = [
  {
    id: 1,
    title: "Being Boss",
    author: "Kathleen Shannon and Emily",
    image: b1,
    minutes: "13-minute read",
    addToLib: true,
    isFinished: false,
    type: {
      trending: true,
      justAdded: false,
      featured: false, 
    }
  },
  {
    id: 2,
    title: "Beyond Entrepreneurship",
    author: "Jim Collins & Bill Lazier",
    image: b2,
    minutes: "13-minute read",
    reads: "1.9k reads",
    addToLib: true,
    isFinished: false,
    type: {
      trending: true,
      justAdded: false,
      featured: false, 
    }
  },
  {
    id: 3,
    title: "Employee to Entrepreneur",
    author: "Steve Glaveski",
    image: b3,
    minutes: "14-minute read",
    reads: "1.9k reads",
    addToLib: true,
    isFinished: false,
    type: {
      trending: true,
      justAdded: false,
      featured: false, 
    }
  },
  {
    id: 4,
    title: "The Fate of Food",
    author: "Amanda Little",
    image: b4,
    minutes: "12-minute read",
    reads: "16k reads",
    addToLib: false,
    isFinished: false,
    type: {
      trending: true,
      justAdded: false,
      featured: false, 
    }
  },
  {
    id: 5,
    title: "Lives of the Stoics",
    author: "Ryan Holiday, Stephen Hansel",
    image: b5,
    minutes: "13-minute read",
    addToLib: true,
    isFinished: false,
    type: {
      trending: true,
      justAdded: false,
      featured: false, 
    }
  },
  {
    id: 6,
    title: "Loving Your Business",
    author: "Debble King",
    image: b6,
    minutes: "13-minute read",
    addToLib: false,
    isFinished: false,
    type: {
      trending: true,
      justAdded: false,
      featured: false, 
    }
  },
  {
    id: 7,
    title: "The Lonely Century",
    author: "Noreena Hertz",
    image: b7,
    minutes: "15-minute read",
    addToLib: true,
    isFinished: false,
    type: {
      trending: false,
      justAdded: true,
      featured: false, 
    }
  },
  {
    id: 8,
    title: "Eat Better, Feel Better",
    author: "Giada De Laurentiis",
    image: b8,
    minutes: "13-minute read",
    reads: "1.9k reads",
    addToLib: true,
    isFinished: false,
    type: {
      trending: false,
      justAdded: true,
      featured: false, 
    }
  },
  {
    id: 9,
    title: "Dropshipping",
    author: "James Moore",
    image: b9,
    minutes: "12-minute read",
    addToLib: true,
    isFinished: false,
    type: {
      trending: false,
      justAdded: true,
      featured: false, 
    }
  },
  {
    id: 10,
    title: "Bring Your Human to Work",
    author: "Eria Keswin",
    image: b10,
    minutes: "13-minute read",
    addToLib: true,
    isFinished: false,
    type: {
      trending: false,
      justAdded: false,
      featured: true, 
    }
  },
  {
    id: 11,
    title: "Beyond Entrepreneurship",
    author: "Jim Collins & Bill Lazier",
    image: b11,
    minutes: "15-minute read",
    addToLib: true,
    isFinished: false,
    type: {
      trending: false,
      justAdded: false,
      featured: true, 
    }
  },
  {
    id: 12,
    title: "Doesn't Hurt to Ask",
    author: "Trey Gowdy",
    image: b12,
    minutes: "13-minute read",
    addToLib: true,
    isFinished: false,
    type: {
      trending: false,
      justAdded: false,
      featured: true, 
    }
  },
];

export default bookData;
