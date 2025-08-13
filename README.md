# BrandPeek - Brand Discovery App

A React Native app built with Expo that showcases top brands with gradient-rich UI and smooth navigation. Aligns with the modern aesthetic of [nurdd.club](https://www.nurdd.club).

## Features
- Gradient backgrounds using `expo-linear-gradient`
- Fetch brand data from MockAPI backend
- Home screen with brand listings
- Brand detail screen with "Follow" button
- Responsive design for iOS & Android

## Live Demo
[![Open in Expo Snack](https://img.shields.io/badge/Expo_Snack-Open-blue?logo=expo)](https://snack.expo.dev/@faizul_hasan/brandpeek-app)

Scan QR code:  
![QR Code](https://qr.expo.dev/expo-go?owner=faizul_hasan&slug=brandpeek-app)

## Tech Stack
- React Native
- Expo
- JavaScript
- React Navigation
- MockAPI (Backend)

## Project Structure
/src
├── assets
├── components
├── constants # Colors, API configs
├── navigation # Stack navigator
├── screens # Home & BrandDetail
├── services # API calls
└── utils


## Setup Instructions

### 1. Run in Expo Snack
1. Click the [Expo Snack link](https://snack.expo.dev/@faizul_hasan/brandpeek-app)
2. Scan QR code with Expo Go app (iOS/Android)

#Backend Details
1. API: MockAPI.io

- Endpoint Brand List: https://689854bdddf05523e55e9f94.mockapi.io/brands/brands 
- Endpoint Brand Details: https://689854bdddf05523e55e9f94.mockapi.io/brands/brands?id=1

Sample Data (JSON): [
  {
    "id": 1,
    "name": "Nike",
    "logo": "https://logo.clearbit.com/nike.com",
    "description": "Just Do It. World's leading athletic brand.",
    "website": "https://nike.com",
    "founded": "1964",
    "headquarters": "Beaverton, Oregon, USA",
    "employees": "76,700"
  }
]