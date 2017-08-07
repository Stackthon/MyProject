import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';

const suggestion1 = [{coordinate:{latitude: 40.7141, longitude: -74.0090}, name: "Rosa Mexicano", Address: "41 Murray Street", Phone: '(212) 977-7700', Description: 'Upscale, modern and authentic Mexican cuisine dedicated to delivering the best ingredients and service around the country.'},
								{coordinate:{latitude: 40.7150, longitude: -74.0152}, name: "Regal Cinemas", Address: "102 North End Avenue", Phone: '(844) 462-7342', Description: 'Check movie times, buy tickets, find theatre locations, get gift cards, watch trailers, and more online for Regal Cinemas, Edwards & United Artists Theatres'},
								{coordinate:{latitude: 40.7533, longitude: -73.9968}, name: "Skylight Diner", Address: "402 West 34th", Phone: '(212)-244-0395', Description: 'From the saturnine rings atop the silvery gray pillars to the flying-saucer light fixtures suspended above the dark blue booths, the Skylight Diner evinces a retro view of the future'},
								{coordinate:{latitude: 40.7591, longitude: -73.9898}, name: 'Robert Bagel', Address: '160 Riverside', Phone: '(212) 579-3660', Description: 'The best Bagel in NYC'},
								{coordinate:{latitude: 40.7603, longitude: -73.9933}, name: 'Hard Rock Cafe', Address: '1510 Broadway', Phone: '(212-343-3355)' , Description: 'Located in the center of New York City and the heart of Times Square, Hard Rock Cafe New York will rock your senses with tantalizing food and drinks and an awe-inspiring collection of music memorabilia'},
								{coordinate:{latitude: 40.7133, longitude: -74.0134}, name: 'One World Observatory', Address: '1 World Trade Center', Phone: '(877) 731-8782', Description: 'There are a million things to experience in New York City and only one way to truly see them all. Start by ascending to the top of the tallest building in the Western Hemisphere in less than 60 seconds; look toward the horizon and feel the City’s invincible spirit'},
								{coordinate:{latitude: 40.7590, longitude: -73.9795}, name: 'Top of the Rock Observation Deck', Address: '30 Rockefeller Center', Phone: '(877)-692-7625', Description: 'Ascend 70 floors into the sky and take in sweeping 360-degree city views from our three indoor and outdoor viewing decks'},
								{coordinate:{latitude: 40.7306, longitude: -73.9352}, name: 'Pisillo Italian Panini', Address: '97 Nassau St', Phone: '(212) 227-3104', Description: 'This is a new concept of "Fast Food", they only use fresh and high quality Italian products. The bread they use comes from on of the finest bakeries in Bensonhurst, Brooklyn, which has been in business for 30 years'},
								{coordinate:{latitude: 40.7081, longitude: -74.0078}, name: 'Blue Ribbon Federal Grill', Address: '84 William Street', Phone: '(212) 337-0404', Description: 'The Bromberg Brothers and the team behind Blue Ribbon Bakery Kitchen bring their eclectic downtown energy to the heart of the Financial District'},
								{coordinate:{latitude: 40.7484, longitude: -73.9857}, name: 'Empire State Building', Address: '350 5th Avenue', Phone: '(212) 736-3100', Description: 'The Empire State Building is a 102-story skyscraper located on Fifth Avenue between West 33rd and 34th Streets in Midtown, Manhattan, New York City. It has a roof height of 1,250 feet (381 m), and with its antenna included, it stands a total of 1,454 feet (443.2 m) tall'},
								{coordinate:{latitude: 40.7766, longitude: -73.9521}, name: 'The Metropolitan Museum of Art', Address: '1000 5th Ave', Phone: '1 (800) 662-3397', Description:'The Metropolitan Museum of Art, colloquially "the Met," is located in New York City and is the largest art museum in the United States, and is among the most visited art museums in the world. Its permanent collection contains over two million works, divided among seventeen curatorial departments'},
								{coordinate:{latitude: 40.7422, longitude: -74.0051}, name: 'Chelsea Market', Address: '75 9th Avenue', Phone: '(212)-652-2110', Description: 'A block long and a block wide and just a short walk from the Hudson River in the area of Manhattan known as the Meatpacking District, Chelsea Market has become in just fifteen years one of the greatest indoor food halls of the world, with more than thirty-five vendors purveying everything from soup to nuts, wine to coffee, cheese to cheesecake'},
								{coordinate:{latitude: 40.7125, longitude: -73.9567}, name: 'Full Circle Bar', Address: '318 Grand St', Phone: '(347) 725-4588', Description: 'This Skee-Ball-themed bar in Williamsburg is a haven for kitschy, nostalgia-driven boozing. The beer offerings skew cheap and cheerful, with five standard taps supplemented by 17 canned brews kept in ice-filled coolers behind the bar'}]

const suggestion2 = [{coordinate: {latitude: 40.7536, longitude: -73.9832}, name: "Bryant Park", Address: 'Bryant Park'},
								{coordinate:{latitude: 40.7603, longitude: -73.9933}, name: 'Broadway Shows', Address: 'Dance and shows'},
								,
								{coordinate:{latitude: 40.7587, longitude: -73.9787}, name: 'The Rink At Rockefeller Center', Address: '600 5th Ave'}]






export default suggestion1;