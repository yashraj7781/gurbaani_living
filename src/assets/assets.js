import basket_icon from './basket_icon.png'
import logo from './logo.png'
import header_img from './header_img.png'
import search_icon from './search_icon.png'
import menu_1 from './menu_1.png'
import menu_2 from './menu_2.png'
import menu_3 from './menu_3.png'
import menu_4 from './menu_4.png'

import food_1 from './food_1.png'
import food_2 from './food_2.png'
import food_4 from './food_4.png'
import food_5 from './food_5.png'

 

import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'

export const assets = {
    logo,
    basket_icon,
    header_img,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon
}

export const menu_list = [
    {
        menu_name: "Akurdi",
        menu_image: menu_1
    },
    {
        menu_name: "Pimpri chinchwad",
        menu_image: menu_2
    },
    {
        menu_name: "Pune",
        menu_image: menu_3
    },
    {
        menu_name: "wakad",
        menu_image: menu_4
    }]
    

export const food_list = [
    
        {
            _id: "1",
            name: "B1 building",
            image: food_1,
            price: 4500,
            description: "B1 building is a good place to live in. Facilities include Wi-Fi, washing machine, CCTV, and 24/7 security.",
            category: "Akurdi"
        },
        {
            _id: "2",
            name: "B2 building",
            image: food_2,
            price: 6000,
            description: "B2 building is a good place to live in. Facilities include Wi-Fi, washing machine, CCTV, and air conditioning.",
            category: "wakad"
        },
        {
            _id: "3",
            name: "B5 building",
            image: food_2,
            price: 7000,
            description: "B5 building is a good place to live in. Facilities include Wi-Fi, washing machine, CCTV, and power backup.",
            category: "Pune"
        },
        {
            _id: "4",
            name: "B7 building",
            image: food_4,
            price: Math.floor(Math.random() * (10000 - 4500 + 1)) + 4500,
            description: "B7 building offers a peaceful and secure environment with essential amenities for a comfortable stay.",
            category: "Pimpri chinchwad"
        },
        {
            _id: "5",
            name: "B6 building",
            image: food_5,
            price: Math.floor(Math.random() * (10000 - 4500 + 1)) + 4500,
            description: "B6 building is designed for convenience and comfort, offering modern facilities like Wi-Fi and CCTV surveillance.",
            category: "Pimpri chinchwad"
        },
        {
            _id: "6",
            name: "B3 building",
            image: food_1,
            price: Math.floor(Math.random() * (10000 - 4500 + 1)) + 4500,
            description: "B3 building provides a modern living space with essential facilities like washing machines, Wi-Fi, and power backup.",
            category: "Akurdi"
        },
      
    ]
    