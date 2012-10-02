---
layout: post
title: Random D&D Characters, Huzzah!
category: blog
date: 2012-09-17 10:00 PM
tags:
    - d&d
    - od&d
    - greyhawk
    - webapp
---

A month or so ago I wrote a small Python script to generate D&D characters. Making a character for the older editions of the game is fairly straightforward, the only part most people find slow is picking equipment. In D&D you start the game with 3d6 x 10 gold. With that starting gold you have to decide what to buy. For new players I think this can be intimidating. Brendan of Untimately posted a pretty great [table for picking equipment][equipment] randomly: he basically did the work of buying equipment for each possible starting gold value and class. Using that table you can spit out reasonable random characters that are good to go quite quickly. Over the weekend I took my basic script and turned it into [a little web application][character].

Right now it only picks from the 4 human classes, but should otherwise work quite well. It can also generate characters using the [1974 "Little Brown Book" rules][lbb], or the rules taking [Greyhawk][greyhawk] into account. I would describe that support as "preliminary". (If there are any obvious mistakes, please let me know.) When I have a bit more time, I plan to add support for letting you pick the class you want to play.

If you have any feedback about the applicaiton, please get in touch. Otherwise, enjoy.


[equipment]: http://untimately.blogspot.ca/2012/07/od-equipment.html
[character]: http://character.totalpartykill.ca/
[lbb]: http://character.totalpartykill.ca/lbb
[greyhawk]: http://character.totalpartykill.ca/greyhawk
