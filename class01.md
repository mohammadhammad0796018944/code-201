
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Read: 03 - Structure web pages with HTML</title>
    
    
<h1>Read: 03 - Structure web pages with HTML</h1>
<h2>  Summary </h2>
# HTML & CSS
  
 # When you visit a website, the web server
 hosting that site could be anywhere in the
 world. In order for you to find the location of
 the web server, your browser will first connect
 to a Domain Name System (DNS) serveR.
 ![HOW AT WRKING]( https://cdn.hswstatic.com/gif/internet-diagram.gif)

 # The connecting way like this stepes

 1.When you connect to the web,you do so via an Internet ServiceProvider (ISP). You type a
domain name or web addressinto your browser to visit a site 

2.Your computer contacts a network of servers called Domain Name System (DNS)servers.

3.The unique number that the
DNS server returns to your
computer allows your browser
to contact the web server
that hosts the website you
requested

4.The web server then sends the
page you requested back to your
web browser.


# HTM L Us es Elements to Describe the Structure of Pages

![htm lock like](https://data-flair.training/blogs/wp-content/uploads/sites/2/2020/06/HTML-elements.jpg)


# the eleant in html

  1.tages like<p></p>
    the mean of <p></p> is

    left-angle bracket     
    (less-than sign)    
    RIGHT -angle bracket
    (MORE -than sign)
    (p) is  the character
    <p> opening tag

  2.Attributes element
  Attributes provide additional information
  about the contents of an element. They appear
  on the opening tag of the element and are
  made up of two parts: a name and a value,
  separated by an equals sign.
  
  # Headings and paragraphs
    Headings are used to describe the contents below them, it can be a single word or a phrase. In HTML there are six types of headings that are used for various sizes of text.
  # Bold, italic, emphasis
    I have previously pointed out, that HTML should not be used to affect the look and feel of you web page. Just as you can make words or sentences bold or italic in Word, you can do so using HTML. Up until now, the <b> element, the <i> element, the <em> element, and the <strong> have been purely presentational, but with HTML5, a semantic meaning have been added to these four elements

  # ctural and semantic markup
    he page "Cultural and semantic markup" does not exist. You can ask for it to be created, but consider checking the search results below to see whether the topic is already covered
    
# The List 
  Numbered lists
  Bullet lists
  Definition lists

# Ordered lists 
 are lists where each item in the list is numbered. For example, the list might be a set of steps for a recipe that must be performed in order, or a legal contract where each point needs to be identified by a section number

 <ol> The ordered list is created with the <ol> element
 <li> Each item in the list is placed between an opening <li> tag and a closing </li> tag. (The listands for list item.)


# Unordered lists
are lists that begin with a bullet point (rather than characters that indicate order)

<ul>The unordered list is created with the <ul> element
<li> Each item in the list is placed between an opening <li> tag and a closing </li> tag. (The listands for list item.)


# Definition lists are made up of a set of terms along with the
definitions for each of those terms
<dl> The definition list is created with the <dl> element and usually consists of a series of terms and their definitions
<dt> This is used to contain the term being defined (the definitionterm).
<dd> This is used to contain the definition.

# Links
 Creating links between pages
 Linking to other sites
 Email links
 
# Creating links between pages
 Links are the defining feature of the web because they allow you to move from one web page to another — enabling the
very idea of browsing or surfing
lie this ((<a href="http://www.imdb.com">IMDB</a>))
The text between the opening <a> tag and closing </a> tag is known as link text. Where possible, your link text should
explain where visitors will be taken if they click on it

# Images
How to add images to pages
Choosing the right format
Optimizing images for the web

# Tables
 # How to create tables
 # What information suits tables
 # How to represent complex data in tables
  The <table> element is used
to create a table. The contents
of the table are written out row
by row.

# Forms
 ow to collect information from visitors
 Different kinds of form controls
 New HTML5 form controls

# How Forms Work 
<form>
Form controls live inside a
<form> element. This element
should always carry the action
attribute and will usually have a
method and id attribute to
 
 action
Every <form> element requires
an action attribute. Its value
is the URL for the page on the
server that will receive the
information in the form when it
is submitted.
 
 # Extra Markup
 Specifying different versions of HTML
 Identifying and grouping elements
 Comments, meta information and iframes

 # Escape Characters
   Therefore, if you want these
characters to appear on your
page you need to use what are
termed "escape" characters
(also known as escape codes or
entity references) For
example, if you want to include a
copyright symbol on a web page
you can use either &copy; or
&#169;.

# Flash, Video & Audio
In order to use this file
on a web page it has to be saved
in a different format known
as SWF the Flash movie in your page.
Traditionally, this code used the
HTML <object> and <embed>
tags 

# Introducing CSS
 What CSS does
 How CSS works
 Rules, properties, and values

 CSS allows you to create rules that specify how the content of
an element should appear appear in gray using the Arial typeface, or that all level one
headings should be in a blue, italic, Times typeface 

# color
The color property allows you
to specify the color of text inside
an element. You can specify any
color in CSS in one of three ways
like this
 h1 {
color: DarkCyan;}
/* hex code */

# Text
The formatting of your text can have a significant effect
on how readable your pages are. As we look through these
properties I will also give you some design tips on how to
display your type.

# in txt you can change 
Size of Type
Type Scales 

# Boxes
th e box about the width height like 
<div>
<p>The Moog company pioneered the commercial
manufacture of modular voltage-controlled
analog synthesizer systems in the early
1950s.</p>
</div>

# Border, Margin and padding

# Every box has three available properties that can be adjusted to control its appearance

 Border
 Margin
 Padding

 # Lists, Tables and Forms
 
 list-style-type
 list-style-image
 list-style-position

# Layout
 the page what look like 

 # Screen Sizes
 Different visitors to your site will have different sized screens that show
different amounts of information, so your design needs to be able to
work on a range of different sized screens

# Page Sizes
Because screen sizes and display resolutions vary so much, web
designers often try to create pages of around 960-1000 pixels wide
(since most users will be able to see designs this wide on their screens).

# Liquid Layouts
Liquid layout designs
stretch and contract
as the user increases
or decreases the
size of their browser
window. They tend to
use percentages

# HTML5 Layout
They are covered here (rather than with the other HTML
elements you met earlier in the book) because you'll find
it easier to understand how they can be used now that you
have seen how CSS can control the layout a page. These
new elements are going to play an important part in creating
layouts going forward

# Process & Design
It looks at who might be visiting your site and how to ensure
the pages feature the information those visitors need. It also
covers some key aspects of design theory to help you create
professional looking sites

# Example Site Map
# About
History
Foundation
Future Pl ans
# Articles
News
Book Reviews
Press
Interviews
# Visit
Location
Opening Times
Tickets
# Shop Contact
Books
Gifts
# Contact

# Example Wireframe
its like  the apint in paper 

# Practical Information
 There are entire books written about each of the topics
covered in this chapter but I will introduce you to the key
themes that each subject deals with and give you pointers for
what you need to be considering. You will see 
 







</head>
<body>
    
</body>
</html>













