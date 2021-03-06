# π₯ WebGenie

<img src="https://user-images.githubusercontent.com/83770081/174787857-8d0a3ce2-dd8b-48a1-8480-5d946e4ab6f6.png" alt="brand logo" width=130 height=130/>

μΉμ¬μ΄νΈλ₯Ό λ§λ€κ³  μΆμ§λ§ λ§λλ κ³Όμ μ΄ λ³΅μ‘νκ³  μ΄λ €μ κ³ λ―Όνκ³  κ³μλμ?
μμ½κ² μΉμ¬μ΄νΈλ₯Ό λ§λ€ μ μλ μΉ μλν° μλΉμ€, **WebGenie**μλλ€!

WebGenieλ₯Ό ν΅ν΄ λͺ λ²μ ν΄λ¦­κ³Ό Drag and DropμΌλ‘ λ©μ§ μΉμ¬μ΄νΈλ₯Ό λ§λ€ μ μμ΅λλ€.
λν, μΉμ¬μ΄νΈλ₯Ό λ§λ  ν λ°°ν¬νκ² λλ©΄ κ³ μ ν μ£Όμλ₯Ό κ°κ² λμ΄ μΉκ΅¬λ€κ³Ό μ£Όλ³μ¬λλ€μκ² κ³΅μ ν  μ μμ΅λλ€.

`# No Coding` `# Beginner Friendly`

<br>

## π Contents

- [π₯ WebGenie](#-webgenie)
- [π Link](#-link)
- [π Preview](#-preview)
- [π Getting Started](#-getting-started)
- [π‘ Motivation](#-motivation)
- [π Features](#-features)
- [π  Tech Stacks](#-tech-stacks)
- [π Planning](#-planning)
- [π Technical Log](#-technical-log)
- [π₯ κ°λ°μ μκ°](#-μ°Έμ¬ν-κ°λ°μ-μκ°)

<br>

## π Link

**Deploy**

- [WebGenie](https://webgenie.online)

<br>

**Git Repository**

- [Frontend](https://github.com/Web-Genie/WebGenie-webgenie-frontend)
- [Backend](https://github.com/Web-Genie/WebGenie-webgenie-backend)

<br>

## π Preview

https://user-images.githubusercontent.com/83770081/174348067-990a70fe-b2d2-4fbf-a981-a8ced8ef0ba7.mp4

<br>

### π Getting Started

- **_Frontend(React)_**

1. νλ‘μ νΈλ₯Ό λ€μ΄ λ°μ ν νλ‘μ νΈ ν΄λ λ΄μμ λͺλ Ήμ΄λ₯Ό μ€νν©λλ€.

```
npm install
npm start
```

2. νκ²½λ³μ νμΌ(.env)μ μμ±νκ³  μλμ κ°μ΄ μλ ₯ν΄μΌ ν©λλ€.

```
REACT_APP_API_KEY=<FIREBASE_API_KEY>
REACT_APP_AUTH_DOMAIN=<FIREBASE_AUTH_DOMAIN>
REACT_APP_PROJECT_ID=<FIREBASE_PROJECT_ID>
REACT_APP_FIREBASE_STORAGEBUCKET=<FIREBASE_STORAGE_BUCKET>
REACT_APP_FIREBASE_MESSAGINGSENDERID=<FIREBASE_MESSAGING_SENDER_ID>
REACT_APP_ID=<FIREBASE_APP_ID>
REACT_APP_FIREBASE_MEASUREMENTID=<FIREBASE_MEASUREMENT_ID>
REACT_APP_API_ENDPOINT_URL=<BASE_URL>
```

- **_Backend(Express)_**

1.  νλ‘μ νΈλ₯Ό λ€μ΄ λ°μ ν νλ‘μ νΈ ν΄λ λ΄μμ λͺλ Ήμ΄λ₯Ό μ€νν©λλ€.

```
npm install
npm start
```

2.  νκ²½λ³μ νμΌ(.env)μ μμ±νκ³  μλμ κ°μ΄ μλ ₯ν΄μΌ ν©λλ€.

```
TYPE=<FIREBASE_TYPE>
PROJECT_ID=<FIREBASE_PROJECT_ID>
PRIVATE_KEY_ID=<FIREBASE_KEY_ID>
PRIVATE_KEY=<FIREBASE_PRIVATE_KEY>
CLIENT_EMAIL=<FIREBASE_CLIENT_EMAIL>
CLIENT_ID=<FIREBASE_CLIENT_ID>
AUTH_URI=<FIREBASE_AUTH_URI>
TOKEN_URI=<FIREBASE_TOKEN_URI>
AUTH_PROVIDER_X509_CERT_URL=<FIREBASE_AUTH_PROVIDER_CERT_URL>
CLIENT_X509_CERT_URL=<FIREBASE_CLIENT_CERT_URL>
MONGO_URI=<MONGO_URI>
```

  <br>

## π‘ Motivation

μ¬μ©μλ‘μ λΉμ°νκ² μ¬κΈ°λ©° μ¬μ©ν΄μλ κ²λ€μ μ°λ¦¬κ° κ°μ§ κΈ°μ λ‘ κ΅¬νν΄λ³΄λ κ²μ΄ μ΄λ¨κΉ? λΌλ μκ°μμ μΆλ°νμμ΅λλ€. κ³Όκ±°μ μΉμ¬μ΄νΈλ₯Ό λ§λ€ μΌμ΄ μκΈ°λ©΄ μ μΌ λ¨Όμ  μ λ¬Έμ§μμ΄ λ§μ§ μμλ κ°λ¨νκ² λ§λ€ μ μλ νλ«νΌμ μ°Ύμλ³΄μκ³  κ·Έ νλ«νΌμ ν΅ν΄ μ’μ κ²½νμ νμμ΅λλ€. μ΄λ° μ’μ κ²½νμ μ°λ¦¬κ° μλΉμ€ ν΄λ³Έλ€λ©΄ μ΄λ¨μ§μ λν΄ μλΌν΄ λ³΄μκ³ , μ§κΈκΉμ§ λ¬΄μ¬μ½ μ¬μ©ν΄μλ Drag and Dropκ³Ό Resizingκ³Ό κ°μ κΈ°λ₯λ€μ κ΅¬νν΄λ³΄λ©΄ μ’κ² λ€λ μκ°μ΄ λ€μ΄ μ΄λ₯Ό κ΅¬μ²΄νμμΌ λ³΄μμ΅λλ€.

μ¬μ©μλ νΈλ¦¬νκ² μΉ μ¬μ΄νΈλ₯Ό λ§λ€ μ μκ³  μ ν¬λ DOM, Javascript, Reactμ λν΄ κΉκ² κ³ λ―Όνκ³  κ³΅λΆν  μ μμ κ² κ°μ WebGenieλ₯Ό λ§λ€κ² λμμ΅λλ€.

<br>

## π Features

- **_Drag and Drop_**

https://user-images.githubusercontent.com/83874298/174587981-67191f49-f0d9-43f5-9d8c-d43a02624973.mov

```
ννλ¦Ώμ μ¬λ €λμ font, image, buttonμ drag and dropμ μ΄μ©νμ¬ μμ μμ¬λ‘ μ΄λμν¬ μ μμ΅λλ€.
```

- **_Resizing_**

https://user-images.githubusercontent.com/83874298/174588209-b25bb9b6-0d0e-47d7-9863-b5a5173fe1cc.mov

```
ννλ¦Ώμ μ¬λ €λμ font, image, buttonμ ν΄λ¦­νμ¬, Mouse Down λ μνμμ λ§μ°μ€λ₯Ό μΌμͺ½μΌλ‘ μ΄λμν€λ©΄, ν¬κΈ°λ₯Ό κ°μμν€κ³  μ€λ₯Έμͺ½μΌλ‘ μ΄λμν€λ©΄ ν¬κΈ°λ₯Ό μ¦κ°μν΅λλ€.

```

- **_Font, Image, Button, Background change_**

https://user-images.githubusercontent.com/83874298/174590723-0e6029e8-4bd1-4f04-af36-75388161cc1c.mov

https://user-images.githubusercontent.com/83874298/174588727-0c680b81-cd71-4278-9b84-24485a0f930d.mov

```
κΈκΌ΄, κΈμ ν¬κΈ°, κΈμ μμ, κΈμ μ λ ¬, κΈμ μ€νμΌμ λ°κΏ μ μμ΅λλ€.

μ΄λ―Έμ§λ₯Ό μ»΄ν¨ν°μμ, URLμ ν΅ν΄ λ£μ μ μκ³  μ΄λ―Έμ§ ν¬λͺλ, λ°κΈ°, blurλ₯Ό μ‘°μ ν  μ μμ΅λλ€.

ννλ¦Ώ λ°°κ²½μ μμμ λ³κ²½ν  μ μμ΅λλ€.
```

- **_Version Log_**

https://user-images.githubusercontent.com/83874298/174588843-cead772e-bedd-4e05-87c1-35fb0e34b660.mov

```
saved version log λ²νΌμ λλ₯΄λ©΄ μ¬μ©μκ° μ μ₯νλ μμ μ κΈ°λ‘μ΄ λνλλ©° μ΅κ·Ό μμ λΆν° κ³Όκ±°λ‘ μ΄μ΄μ§κ² λ©λλ€.

νΉμ  μμ μ ν΄λ¦­νκ² λλ©΄ κ·Έλ μ¬μ©μκ° μ μ₯νλ ννλ¦ΏμΌλ‘ λμκ°κ² λ©λλ€.
```

- **_Keypress Event_**

https://user-images.githubusercontent.com/83874298/174589140-168a0093-8f5a-40ad-a43e-c83c1a47baf6.mov

```
λ²νΌκ³Ό μ΄λ―Έμ§, κΈμλ₯Ό ν΄λ¦­ν ν Ctrl + Cλ₯Ό νλ©΄ λ³΅μ¬, Ctrl + Vλ₯Ό νλ©΄ λΆμ¬λ£κΈ°, Ctrl + Zλ₯Ό λλ₯΄λ©΄ μ΄μ  μμ μΌλ‘ λμκ°κ² λ©λλ€.
```

- **_Deploy_**

https://user-images.githubusercontent.com/83874298/174589248-77c93c3e-049b-4520-ad1f-82ae39c180ec.mov

```
μ¬μ©μκ° publish λ²νΌμ λλ₯΄λ©΄ κ³ μ ν URLμ μμ±ν΄μ£Όλ©° λ€λ₯Έ μ¬λλ€μκ² μμ μ μΉμ¬μ΄νΈ μ£Όμλ₯Ό κ³΅μ ν  μ μμ΅λλ€.
```

<br>

## π  Tech Stacks

**_Frontend_**

- React
- React-router-dom
- styled-components
- Prop-Types

**_Backend_**

- Node.js
- Express
- MongoDB
- Mongoose

**_Testing_**

- Jest
- React Testing Library
- Mocha, Chai, Supertest

**_Deployment_**

- Netlify
- AWS Elastic Beanstalk

<br>

## π Planning

**_νλ‘μ νΈ κΈ°κ°_**

**2022λ 5μ 30μΌ ~ 6μ 16μΌ**

- 5μ 30μΌ ~ 6μ 2μΌ : μμ΄λμ΄ κΈ°ν, λͺ©μ μμ±, μ μμΌ μ€νλ¦°νΈ νλ μμ±
- 6μ 3μΌ ~ 6μ 16μΌ : κ°λ° μ§ν, λ°°ν¬, νμ€νΈ μμ±

<br>

## π Technical Log

### React + DOM Manipulation

μ΄λ² νλ‘μ νΈμ ν΅μ¬ κΈ°λ₯μΈ Drag and Dropκ³Ό Resizing κΈ°λ₯ λͺ¨λ DOM μ‘°μμ νμλ‘νμ΅λλ€. μ‘°μ¬λ₯Ό ν΄λ³Έ κ²°κ³Ό HTML Drag and Drop APIλ₯Ό μκ² λμκ³  μ΄κ²μ μ¬μ©ν΄μ μ¬μ©μκ° μμ λ‘­κ² λλκ·Ένμ¬ μμ ν  μμλ€μ μλν° νλ©΄μ μ¬λ €λ μ μλ κΈ°λ₯ κ΅¬νμ νμμ΅λλ€. μλν° νλ©΄ λ΄λΆμ μ¬λ €μ§ μμλ€μ μμΉλ₯Ό λ§μ°μ€ μ΄λ²€νΈμ ν΄λ¦­ν μμμ DOMRectλ₯Ό μ΄μ©νμ¬ μ€μκ°μΌλ‘ λ³κ²½νμμ΅λλ€.

### μΆ©λνλ DOM Elements

Drag and Dropμ ν΅ν΄ μ‘°μλλ μμ κ°μ μΆ©λμ΄ μμμ΅λλ€. HTML μμλ€μ documentμ νλ¦μ λ°λΌμΌ νκΈ° λλ¬Έμ κ° μλ¦¬λ¨ΌνΈλ§μ blockμ΄ μ‘΄μ¬νμ΅λλ€. νμ§λ§ μ΄ λ¬Έμ λ₯Ό CSS `position:absolute` μμ±μ μ μ©ν¨μΌλ‘μ¨ μλ¦¬λ¨ΌνΈλ€μ μΌλ°μ μΈ document νλ¦μμ μ κ±°νλ κ²μΌλ‘ ν΄κ²°ν  μ μμκ³ , μμ λ‘μ΄ Drag and Dropμ κ΅¬νν  μ μμμ΅λλ€. μ΄ν μλ¦¬λ¨ΌνΈλ€μ΄ μμλλ‘ μ€μ²©λμ΄ μμ΄λ μΆκ°μ μΈ λ¬Έμ λ λ°μνμ§ μμμ΅λλ€.

### Code Injection λ°©μ§

μ¬μ©μκ° μμν HTML μ½λλ₯Ό μ μ₯ν΄μ£Όλ λ‘μ§μ κΈ°λ°μΌλ‘ κΈ°λ₯μ κ΅¬ννμκΈ° λλ¬Έμ μ μ₯λ μ½λλ₯Ό λ€μ λΆλ¬μ€λ κ³Όμ μμ _Code Injection_ μ΄ κ°λ₯ν  κ²μΌλ‘ νλ¨νμμ΅λλ€. μ¬μ©μμ μ μ₯λ μ½λλ₯Ό λ€μ DOMμ κ·Έλ €μ£Όλ κ³Όμ μμ μμ±μ½λλ₯Ό λ°©μ§νκΈ° μν΄ dompurifyλΌλ λΌμ΄λΈλ¬λ¦¬λ₯Ό μ¬μ©νκ² λμμ΅λλ€. μ¬μ©μμ μ½λλ₯Ό DOMμ κ·Έλ €μ£ΌκΈ° μ μ μμ±μ½λλ₯Ό νν°λ§ν΄μ£Όκ³  κ·Έλ €μ£Όλ μμμ κ±°μΉ¨μΌλ‘μ¨ μμ±μ½λκ° μλ HTML μ½λκ° μ¬μ©μ Editorμ μ μ©λ©λλ€.

### Drag and Drop μ΄μ©ν μμλ€μ μμΉ λͺ¨λ  νλ©΄ ν¬κΈ° λμ

μ¬μ©μκ° λ§μ°μ€λ‘ μ‘°μν μμλ€μ μμΉλ₯Ό μ‘μμ£Όλ κ²μ λ§μ°μ€ μ΄λ²€νΈκ° μ κ³΅νλ μ’ν κΈ°μ€μΌλ‘ κ³μ°νμ¬ px λ¨μλ‘ μ μ©νμμ΅λλ€. νμ§λ§ κ΅¬νν Editor ν¬κΈ°μ λΉμ¨μ΄ μΌλ°μ μΈ νλ©΄κ³Ό λ¬λκΈ° λλ¬Έμ μ€μ λ‘ νλ©΄ ν¬κΈ°κ° μ»€μ§κ±°λ μμμ§ κ²½μ°, μλ¦¬λ¨ΌνΈλ€μ μμΉκ° μ§μμ μΌλ‘ λ³νλ λ¬Έμ κ° μμμ΅λλ€. μ΄ λ¬Έμ λ₯Ό κ·Ήλ³΅νκΈ° μν΄μλ νλ©΄μ ν¬κΈ°μ λΉμ¨μ λ°λΌ μμΉλ₯Ό μ‘μμ€ νμκ° μμμ΅λλ€.

μ΅μ’μ μΌλ‘ κ²°μ ν ν΄κ²°λ°©λ²μ ν΄λΉ μλ¦¬λ¨ΌνΈμ λΆλͺ¨ width, height κΈ°μ€μΌλ‘ νΌμΌνΈλ₯Ό μ΄μ©νλ κ²μ΄μμ΅λλ€. νλ¨μ λ‘μ§μΌλ‘ μλ¦¬λ¨ΌνΈμ leftμ topμ μ΄μ©νμ¬ μ΅μ’μΌλ‘ μμΉμμΌμ€ λ percentageλ₯Ό μ μ©νμ΅λλ€. κ·Έ κ²°κ³Ό μλ¦¬λ¨ΌνΈλ€μ λΆλͺ¨μ ν¬κΈ° κΈ°λ°μΌλ‘ μμΉνκ² λ©λλ€.

```
...
const parentContainerWidth = parentRef.current.getBoundingClientRect().width;
const parentContainerHeight = parentRef.current.getBoundingClientRect().height;

targetRef.current.style.left = `${(coordinates.x / parentContainerWidth) * 100}%`;
targetRef.current.style.top = `${(coordinates.y / parentContainerHeight) * 100}%`;
...
```

<br>

## π₯ μ°Έμ¬ν κ°λ°μ μκ°

<p align="center">
<img src="https://user-images.githubusercontent.com/83770081/174786680-e0001bcb-11b0-4c4b-acba-8cc2e240f837.png" alt="κ°λ°μ μκ° μ΄λ―Έμ§" text-align="center" height=320 width=720/>
</p>
