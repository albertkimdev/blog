---
templateKey: blog-post
title: 'Web app UI/UX case studies #1: Sign up / Sign in section'
date: 2018-10-06T19:39:56.507Z
image: /img/jumbotron.jpg
description: >-
  In this article series I will be dissecting and examining UI/UX components of
  web app start-ups. By examining how other developers and designers have
  implemented their UI/UX, we will be better able to create our own web apps and
  UI/UX.
tags:
  - UI UX
  - case studies
  - educational
  - nomadlist
  - indiehackers
  - producthunt
  - web design
---
This article will look at 3 different web apps that I am a fan of.

[NomadList.com](https://nomadlist.com/), [ProductHunt.com](https://www.producthunt.com/), and [IndieHackers.com](https://www.indiehackers.com/) are all web apps whose founders are active on Twitter and in the indie hacking community and I will be examining their UI/UX.

We will be examining the sign up/sign in section of these web apps. This section or component of a web app is crucial as it is how a person can become a user of your web app. 

If you are making a digital product that has user specific functionality then nailing the user sign up or registration UI/UX is crucial.

How should you make a sign up / sign in component? Should you create a new page or create a modal that pops up? Should you use Oauth services like Facebook and Twitter to let people create accounts? Do you use buttons for logins? What should the buttons look like?

Rather than answering these kinds of questions with opinions and statements, let’s look at examples of successful web apps with real paying users. 

Let’s begin by examining one of my favourite digital products: NomadList.com

## Nomad List

### Landing Page

_Desktop view_

![NomadList.com landing page](/img/nomadlist-landing-page-signup-buttons.png)

_Mobile view_

![NomadList.com landing page mobile view](/img/nomadlist-mobile-landing-page.png)

On the desktop landing page you see a navigation bar and on the right side there are two buttons, login and sign up.

In the mobile landing page, you have to press the logo in the top left corner to open the side navigation. 

In both desktop and mobile, there are 2 total destinations: Login and Sign up.

### Sign In

![nomadlist.com sign in screen](/img/nomadlist-signin.png)

When you click “Login” NomadList opens a full screen graphic with some options to login with Facebook, Twitter or Email. 

It also does not take you to a new route like nomadlist.com/signin, it just opens a full screen section with their login options.

The mobile view is pretty much the same, just with the buttons stacked vertically rather than horizontally.

### Sign up

![nomadlist.com sign up screen](/img/nomadlist-signup.png)

This is the sign up component for NomadList.

Once again, there is no new route like nomadlist.com/signup, it’s just a pop up modal with some information about benefits of signing up and a form to enter your credit card to continue.

This is one of the most confident sign up modals on the internet probably.

Rather than making it easy to continue, Pieter Levels has decided to make it hard. 

Most indie hackers or web app creators will have their sign up section like:

> \~\~^_^;;v heeeyyy may you pureeettty plss sign up for my vurrry pretttty website master?? Its fwreee fwree for you forever!! If you sign up now ill paypal you $5!!\~\~

VS Nomad List which is like:

> Enter your credit card information to continue.

The difference is apparent.

That was NomadList.com sign up/sign in UI/UX in a nutshell. There are buttons which open up pop up modals which allow for further functionality like registration or logging in.

Next up is IndieHackers.com!

## Indie Hackers

### Landing Page

_Desktop_

![indiehackers.com landing page](/img/indiehackers-landing-page.png)

_Mobile_

![indiehackers.com mobile landing page](/img/indiehackers-mobile-landing.png)

When you land on IndieHackers.com you are greeted with their message board. 

You also see a navigation menu at the top where you would expect it to be. On the right side of the navigation you see two buttons, one for Log In and one for Sign Up.

You also see another section for joining the community on the left side. 

The mobile landing page has the buttons to register or log in more visible than the desktop version. This is simply because of the position the buttons take in the layout. This was probably by design from Courtland Allen, the creator of Indie Hackers.

### Clicking Join Us

![null](/img/indiehackers-joinus.png)

When you click “join us” this full screen overlay appears.

It’s interesting because it’s different than the “sign up” button. Maybe Courtland is trying to test which section generates the most user registrations?

### Clicking Sign up

![null](/img/indiehackers-signup.png)

This is the overlay that appears when you click “Sign up”

Two different UI/UX components for registering a new user.

### Sign In Component

![null](/img/indiehackers-signin.png)

When you click the sign in button this modal appears. 

Once again, this web app does not have new pages or routes for user sign in/sign up functionality. Full screen modal type overlays are used for this functionality.

## Product Hunt

Next up is Product Hunt, one of the premiere destinations for finding digital products. 

![null](/img/producthunt-landing-desktop.png)

The desktop landing page of Product Hunt is a little similar to Indie Hackers (or is it the other way around?).

You see a navigation menu at the top and a section before the content with another button to sign up.

There are 3 total buttons, and 2 of them are Sign Up options, one is a Log In. The button colours are different.

![null](/img/producthunt-landing-mobile.png)

On the mobile landing page, it’s similar to Indie Hackers again. You see buttons to log in and sign up in the top right corner, and a section before the content trying to convince you to sign up.

### Product Hunt Sign Up / Sign In Modal

![null](/img/producthunt-modal.png)

When you click any of the 3 buttons to sign up or sign in, you are shown this pop up modal. 

The top right navigation buttons to sign in and sign up have a new route as producthunt.com/login for both buttons. It doesn’t take you to a new page, it just opens up this modal that allows you to log in or sign up using Oauth options with Facebook, Twitter, Google, or AngelList.

I really like this functionality and have implemented this style in my own website.

There are 3 paths (the 3 buttons on the landing page) that lead to 1 destination, this pop up modal for signing up and singing in.

When you go to producthunt.com/login, it shows this modal with a white background.

## Conclusion

In the end, I chose to copy ProductHunt's log in modal. I like the simplicity and the versatility. Rather than making a new page and different routes for logging in or registering, there is just 1 pop up modal that allows you to create an account or log in all the same using Oauth.

There you have it folks, an analysis of the sign in / sign up / registration / log in components of three different web apps.

I hope you learned something and if you like what you read, hit me up on twitter [@yongelee_](https://twitter.com/yongelee_) and I'll respond!
