Arris Password of the Day Generator
===================================
[![NPM](https://nodei.co/npm/arrispwgen.png)](https://nodei.co/npm/arrispwgen/)

[![NPM Version](https://img.shields.io/npm/v/arrispwgen.svg?style=flat)](https://npmjs.org/package/arrispwgen)
[![License](http://img.shields.io/npm/l/arrispwgen.svg?style=flat)](LICENSE)
[![Build Status](https://travis-ci.org/borfast/arrispwgen.svg?branch=master)](https://travis-ci.org/borfast/arrispwgen)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/borfast/arrispwgen/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/borfast/arrispwgen/?branch=master)
[![Dependency Status](https://david-dm.org/borfast/arrispwgen.svg)](https://david-dm.org/borfast/arrispwgen)
[![devDependency Status](https://david-dm.org/borfast/arrispwgen/dev-status.svg)](https://david-dm.org/borfast/arrispwgen#info=devDependencies)

Do you need an Arris modem password? Are you stuck with your Arris modem, in a message that says "in order to access advanced features you must enter the password of the day"? Then you came to the right place!

## Description

This is a an Arris password of the day generator for various Arris cable modems.

I created this because a cable modem died on me and my ISP, Cabovisão (now called Nowo - if you're in Portugal, I highly recommend them), brought me a new one: an Arris TM602A.

As usual when I receive a new technological gadget, I had to explore it. The web interface, accessible via [http://192.168.100.1](http://192.168.100.1), was quite simpler than my previous modem, the [Scientific Atlanta Webstar 2203c](http://www.borfast.com/blog/scientific-atlanta-webstar-2203c-how-access-locked-pages) but it also had a password protected page.

I couldn't just accept that I was locked out of my own piece of equipment, so I did some research.

A bit of googling provided the answers I needed: a [couple](http://www.turkeyforum.com/satforum/showthread.php?t=557567) of [pages](http://forum.donanimhaber.com/m_36352536/tm.htm) with a list of passwords of the day (this device has a different password every day) and a [page with a password generator](http://www.taringa.net/posts/downloads/3918409/ARRISpwod-Modem-Arris-Tm501a.html) for the TM501A model but seems to work fine for the TM602A.

That gave me access to the protected page but I didn't want to have to resort to a couple of pages every time I wanted to access my modem's protected page. Besides, I didn't know how long the pages would last (they're both forum posts). The password generator was no solution either, because it's written for .NET, Mono isn't able to execute it properly and I'm obviously not going to boot Windows just because of this.

So I brought the matter into my own hands and I wrote my own [arris password of the day generator](http://www.borfast.com/projects/arris-password-of-the-day-generator).

## Tested modems

This is a list of modems for which this password generator generates valid passwords.
If you know other models that work, please let me know in the comments below.

* Arris CM820A
* Arris DG860
* Arris DG950A
* Arris TM501A
* Arris TM602A
* Arris TM602B
* Arris TM722G
* Arris TM802G
* Arris TM822G
* Arris TG862
* Arris TG862A
* Arris WBM760A


## How to use

You have two options:

* Use the [online generator](http://www.borfast.com/projects/arris-tm602a-password-of-the-day-generator/generator) to generate one or more passwords.
* Create a bookmark that uses this code as the URL and whenever you click it, you'll get the password for the current day:
`javascript:(function(){var fragment=document.createDocumentFragment();var script=document.createElement('script');script.type='text/javascript';script.src='https://www.borfast.com/arrispwgen/arrispwgen.js';var head=document.getElementsByTagName('head')[0];var done=false;script.onload=script.onreadystatechange=function() {if( !done && ( !this.readyState || this.readyState==='loaded' || this.readyState==='complete') ) {done=true;var today=(new Date()).getTime();window.prompt('Arris modem password for today is shown below. Use Ctrl+C to copy, Enter or Esc to dismiss.', GenArrisPasswords(today)[today]);}};fragment.appendChild(script);head.appendChild(fragment);})();`

## Ports to other languages

* Marcel Valdez Orozco ported the generator to C# (usable in LINQPad) and posted the code in a [gist](https://gist.github.com/3837628).
* Daniel J. H. created a [C++11 version](https://github.com/daniel-j-h/TM602X) for the command line.
* Daniel Sales created the Perl and Java versions available in this project's repository (arrispwgen.pl and ArrisPwdGen.java inside the 'others' directory).
* Harry Gonzalez created an [Android version](https://github.com/hcgonzalezpr/arrispod) and published it on [Google Play](https://play.google.com/store/apps/details?id=me.harrygonzalez.arrispod).

Thanks guys! :)

If you have your own port to another language, let me know and I'll add it here.

## Disclaimer

Please note that I did this mostly for fun and not for profit of any kind, nor does this open up anything private or dangerous to the world. Unlike with the [Scientific Atlanta Webstar 2203c](http://www.borfast.com/blog/scientific-atlanta-webstar-2203c-how-access-locked-pages), which allowed a little bit of fiddling with the modem's configuration, the Arris TM602A does not allow any modifications to the configuration at all - all it allows is to enable or disable a couple of logs, and run some diagnostic tests. In other words, this tool does not provide access to any secret information or allow you to do any malicious actions by itself. You do need to be aware if you are breaking any laws or contracts if you use it, though.
