# Vegan Detox Website


## 1.1.1 Background
The purpose of creating this website is to generate awareness for veganism and outline its health benefits, 
how we perceive the lifestyle and dispel myths that surround it. As per the specification this website includes HTML, CSS & elements of JavaScript.
The final product will also need to be mobile and desktop responsive. 


## 1.1.2 WireFrames

![](imgs/home_desktop.png)
![](imgs/about_desktop.png)
![](imgs/recipes_desktop.png)
![](imgs/contact_desktop.png)

![](imgs/home_mobile.png)
![](imgs/about_mobile.png)
![](imgs/recipes_mobile.png)
![](imgs/contact_mobile.png)



## 1.1.3 Colour Choices
##### 1) Black - #000000
Used for all paragraphs, headings, navbar tabs, and a hover effect for all buttons.

##### 2) Red - #cc0000
Text used to highlight the importance of filling out the form on the Contact Us page.


##### 3) White - #ffffff
Applied to the background of each page to utilize negative space, also used as the background for articles found on the Recipes and About Us pages.

##### 4) Green - #86be47
Used as an animated hover effect on the navbar and as the default background for buttons on all pages. Also, used as a shadow effect for the textboxes on the About Us page.


## 1.1.4 Accessibility
The following measures have been taken to ensure that Vegan Detox adheres to W3C's accessibility standards.

##### 1) Bright colours for short-sighted people
Bright red, green, and white are used throughout the website to ensure that each component is visible for the user and accessible if needs be. 

##### 2) Understandable e.g. to the point and not overly complicated
Only the bare minimum of text is available on the website. This is so as not to overburden the user with information. Less is more in this case.
Furthermore, just as much information is visually conveyed, if not more. 
 
Users also have the option to use the zoom in/out function on their PCs if they'd prefer to modify the size of the text. 

## 1.2.5 GDPR
##### 1) Creating a privacy policy
To ensure users can trust the legitimacy of Vegan Detox a privacy policy was created.
This is a legal requirement even though the site is not ecommerce related. As long as personal information is being collected e.g. email addresses, 
then a policy will be required to specify that we will not share or sell any personal information to third parties.  

Wireframes can be seen below: 

![](imgs/privacy_policy_desktop.png)
![](imgs/privacy_policy_mobile.png)



## 1.2.6 Distance Selling
Vegan Detox is not an ecommerce site; therefore, no information was conveyed in relation to distance selling.

## 1.2.7 Evaluation

#### To what extent did I tackle the problem that I set out to solve?
The subject tackled was veganism and the objective of the website was to assist the user in maintaining a vegan diet, a healthier lifestyle, and dispel myths associated with the consumption of vegan products, while encouraging users to try new meals that require little preparation. 


#### What problems were encountered along the way?
Few issues arose during the development stage, however, there were times when it became problematic to validate the HTML to conform to W3C’s standards. Some of the code that’d been composed was inaccurate and required further revision. The primary culprit was the JavaScript sliders found on all HTML pages except the index, message, and privacy policy. Being less familiar with JS than HTML and CSS proved challenging, but after reading a book called JavaScript & jQuery by Jon Duckett the sliders became easier to incorporate, that’s not to say they still weren’t challenging, but looking back I do believe they make the website appear more aesthetically pleasing, which hopefully will result in a steady stream of traffic.

JavaScript was also used on the Contact Us page to ensure the user types more than five characters in all boxes. The purpose of which was to collect as much information as possible with a degree of accuracy. Incorporating this code was straightforward and required little effort, however, problems began to arise when the user submitted the form. The idea had been to send the user to a separate page which reads “Your form has been successfully submitted!”. However, an error was made, because I’d forgotten to include the IDs on the HTML page, so when the external JS file that’d been created was called the screen showed “Page Cannot be Displayed”. After scanning the documents, I realised the error I’d made and when the IDs had been added the form executed the separate JS file correctly. 



#### How did I test the website/web-application on multiple devices, and what was discovered? 
When testing the website’s responsivity Cloud9 was used to run the application, both in its preview setting and on the Google Chrome browser. This was necessary to ensure that nothing was out of place or missing from the code e.g. images or links. 
During this process numerous flaws were discovered that required fixing. The most frequent of which was the navigation bars used on all pages. The idea behind this was to place the logo in the left corner of the screen and the tabs on the right. This proved excessively difficult and took quite a bit of time to facilitate, specifically on the media query for the mobile versions. For example, the desktop version of the navbar had the tabs on the right inline to demonstrate a clean and uncluttered look, however, the mobile version used block level elements instead so all the tabs would fit on the screen and appear uncluttered for the user. Upon reflection, this was definitely a mistake and a hamburger menu should have been applied instead since it is more user friendly and commonly used in the industry. If the hamburger menu had been utilized instead then Font Awesome would be used to apply the image of the menu and then CSS coding would be incorporated to store the tabs inside. This probably should be something to consider next time a website needs developing. 

Below are several screenshots, which indicate how well the website performed when audits were undertaken using the "inspect" option in Google Chrome. 
The outcome of these results was very positive e.g. no issues were highlighted in red e.g. meaning they would either run very slow or something needed amending in the script. 
The lowest score was 68 for accessibility on the Contact Us page (desktop). The reason listed for why the score was lower than previous tests was because headings were not included on the page, and the lang tag was missing from the HTML document, to attribute it to the English language.
Despite this, no page tested lower than 68 and with 21 tests coming up green and 19 coming up orange no further modification was needed. 
See screenshots below:



![](imgs/Home_desktop_audit.png)




![](imgs/Home_mobile_audit.png)




![](imgs/About_desktop_audit.png)




![](imgs/About_mobile_audit.png)





![](imgs/Recipes_desktop_audit.png)




![](imgs/Recipes_mobile_audit.png)




![](imgs/Contact_desktop_audit.png)




![](imgs/Contact_mobile_audit.png)





![](imgs/PP_desktop_audit.png)




![](imgs/PP_mobile_audit.png)


#### What informed my design choices?
From February-April 2019 I challenged myself to try veganism. During this time my body felt better for it, not only that, but the variety of delicious recipes which can be found online surprised me. This is how the idea of creating a website that offers various recipes and allows users to send in their own (on our approval) was formulated.          
Regarding the wireframes and the final design for Vegan Detox, the idea was to utilize common UI themes e.g. negative space on the About Us page, limited text and bright colours with good visual appeal. The bright colours would make the site not only attractive for casual viewers, but also useable for those with disabilities e.g. short-sighted individuals, thus conforming to W3C’s accessibility standards. 

I am particularly proud of the animation effects that occur when the user hovers over the navbar in both desktop and mobile versions. 
Being a fan of UX and having seen these effects used on other websites over the years I felt compelled to use it on this one somehow. That said, it took some time to comprehend how to create these effects in CSS. MDN (Mozilla Developer Network) was used to understand how to scale and configure the keyframes correctly.


Another aspect of the development process I thought went well was the consistent use of the colour green. This was used as a shadow effect for articles, the default colour for buttons, the hover effect on the navbar, and the colours used for the company logo. The logo was a bespoke creation made with Adobe Illustrator.
The finished version of Vegan Detox incorporates a modern feel; however, the buttons on the Recipes Page don’t link to anything yet and the social media buttons remain static. This is because the website is an assignment project and external sources weren’t a necessity, but if the site was ever to become a real blog and advocate for veganism then these links would be an integral method to garner traffic and establish relationships with fans of veganism.
