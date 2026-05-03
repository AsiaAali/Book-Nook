
var admin = require("firebase-admin");
var serviceAccount = require("../secret-admin-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const db = admin.firestore();

const shopItems = [
    {
        id: 'br-bow-photo',
        name: "Bow Photo",
        price: 10,
        room: 'bedroom',
        category: 'photo',
        placement: 'wall-item',
        image: 'bedroom/br-bow-photo'
    },
    {
        id: 'desk-bunny',
        name: "Bunny",
        price: 70,
        room: 'desk',
        category: 'knick-knack',
        placement: 'desk-item',
        image: 'desk/desk-bunny.png'
    },
    {
        id: 'br-checker-bed-blue',
        name: "Checker Twin Bed",
        price: 35,
        room: 'bedroom',
        category: 'bed',
        placement: 'floor-item',
        image: 'bedroom/br-checker-bed-blue',
        variants: [
            {
                id: 'br-checker-bed-orange',
                image: 'bedroom/br-checker-bed-orange',
            },
            {
                id: 'br-checker-bed-green',
                image: 'bedroom/br-checker-bed-green',
            },
            {
                id: 'br-checker-bed-pink',
                image: 'bedroom/br-checker-bed-pink',
            },
        ]
    },
    {
        id: 'desk-aglaonema',
        name: "Aglaonema",
        price: 20,
        room: 'desk',
        category: 'plant',
        placement: 'desk-item',
        image: 'desk/desk-plant-aglaonema.png'
    },
    {
        id: 'desk-monstera',
        name: "Monstera",
        price: 20,
        room: 'desk',
        category: 'plant',
        placement: 'desk-item',
        image: 'desk/desk-plant-monstera.png'
    },
    {
        id: 'desk-peace-lily',
        name: "Peace Lily",
        price: 20,
        room: 'desk',
        category: 'plant',
        placement: 'desk-item',
        image: 'desk/desk-plant-peacelily.png'
    },
    {
        id: 'br-flower-photo',
        name: "Flower Photo",
        price: 10,
        room: 'bedroom',
        category: 'photo',
        placement: 'desk-item',
        image: 'bedroom/br-flower-photo.png'
    },
    {
        id: 'desk-flower-photo',
        name: "Flower Photo",
        price: 5,
        room: 'desk',
        category: 'photo',
        placement: 'desk-item',
        image: 'desk/white-frame-desk-photo.png'
    },
    {
        id: 'br-circle-flower-rug',
        name: "Flower Rug",
        price: 25,
        room: 'bedroom',
        category: 'rug',
        placement: 'floor-item',
        image: 'bedroom/br-circle-rug.png'
    },
    {
        id: 'desk-flower-lamp',
        name: "Flower Rug",
        price: 55,
        room: 'desk',
        category: 'rug',
        placement: 'desk-item',
        image: 'desk/desk-flower-lamp.png'
    },
    {
        id: 'br-frilly-bed-pink',
        name: "Frilly Queen Bed",
        price: 105,
        room: 'bedroom',
        category: 'bed',
        placement: 'floor-item',
        image: 'bedroom/br-frilly-bed-pink.png',
        variants:[
            {
                id: 'br-frilly-bed-blue',
                image: 'bedroom/br-frilly-bed-blue.png'
            },
            {
                id: 'br-frilly-bed-green',
                image: 'bedroom/br-frilly-bed-green.png'
            },
            {
                id: 'br-frilly-bed-red',
                image: 'bedroom/br-frilly-bed-red.png'
            },
        ]
    },
    {
        id: 'br-squiggly-table',
        name: "Mini Coffee Table",
        price: 60,
        room: 'bedroom',
        category: 'table',
        placement: 'floor-item',
        image: 'bedroom/br-coffee-table.png'
    },
    {
        id: 'desk-mini-pc-blue',
        name: "Mini PC",
        price: 100,
        room: 'desk',
        category: 'knick-knack',
        placement: 'desk-item',
        image: 'desk/blue-desk-mini-comp.png',
        variants:[
            {
                id: 'desk-mini-pc-purple',
                image: 'desk/purple-desk-mini-comp.png'
            },
            {
                id: 'desk-mini-pc-pink',
                image: 'desk/pink-desk-mini-comp.png'
            },
            {
                id: 'desk-mini-pc-green',
                image: 'desk/green-desk-mini-comp.png'
            },
        ]  
    },
    {
        id: 'br-plain-table',
        name: "Plain Table",
        price: 10,
        room: 'bedroom',
        category: 'table',
        placement: 'floor-item',
        image: 'bedroom/br-plain-table.png'
    },
    {
        id: 'br-plain-bed',
        name: "Plain Bed",
        price: 0,
        room: 'bedroom',
        category: 'bed',
        placement: 'floor-item',
        image: 'bedroom/br-plain-bed.png'
    },
    {
        id: 'desk-photo-cluster',
        name: "Photo Cluster",
        price: 10,
        room: 'desk',
        category: 'photo',
        placement: 'wall-item',
        image: 'bedroom/desk-wall-photos.png'
    },
    {
        id: 'desk-retro-radio',
        name: "Retro Radio",
        price: 50,
        room: 'desk',
        category: 'knick-knack',
        placement: 'floor-item',
        image: 'bedroom/desk-radio.png'
    },
    {
        id: 'br-square-rug-darkblue',
        name: "Very Square Rug",
        price: 25,
        room: 'bedroom',
        category: 'rug',
        placement: 'floor-item',
        image: 'bedroom/br-square-rug-darkblue.png',
        variants: [
            {
                id: 'br-square-rug-lightblue',
                image: 'bedroom/br-square-rug-lightblue.png',
            },
            {
                id: 'br-square-rug-green',
                image: 'bedroom/br-square-rug-green.png',
            },
            {
                id: 'br-square-rug-orange',
                image: 'bedroom/br-square-rug-orange.png',
            },
        ]
    },
    {
        id: 'wallpaper-cutesy-blue',
        name: "Cutsey Blue",
        price: 20,
        room: ['desk', 'bedroom'],
        category: 'wallpaper',
        placement: 'background',
        image: 'desl/desk-wallpaper-1.png'
    },
    {
        id: 'wallpaper-classic-taupe',
        name: "Classic Taupe",
        price: 20,
        room: ['desk', 'bedroom'],
        category: 'wallpaper',
        placement: 'background',
        image: 'desk/desk-wallpaper-2.png'
    },
    {
        id: 'wallpaper-Plain-Solid',
        name: "Plain Solid",
        price: 20,
        room: ['desk', 'bedroom'],
        category: 'wallpaper',
        placement: 'background',
        image: 'desk/plain-solid.png',
    },
    {
        id: 'br-wood-floor-medium',
        name: "Wood Floor",
        price: 20,
        room: 'bedroom',
        category: 'flooring',
        placement: 'floor',
        image: 'bedroom/br-floor-wood-medium.png',
        variants:[
            {
                id: 'br-wood-floor-grey',
                image: 'bedroom/br-floor-wood-grey.png'
            },
            {
                id: 'br-wood-floor-light',
                image: 'bedroom/br-floor-wood-light.png'
            },
            {
                id: 'br-wood-floor-dark',
                image: 'bedroom/br-floor-wood-dark.png'
            },
        ]
    },

];

async function uploadData() {
  console.log("Starting upload...");
  
    for (const item of shopItems) {
        try {
            const plainObject = { ...item };
            
            await db.collection('ShopItems').doc(plainObject.id).set(plainObject);
            console.log(`Uploaded: ${plainObject.name}`);
        } catch (error) {
            console.error(`Error uploading ${item.id}:`);
        }
    }
  
  console.log("All done!");
  process.exit();
}

uploadData();
