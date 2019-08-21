---
title: NetMeeting Default Template
date:  2019-08-21 10:30 CET
---

# Biweekly Net-Meeting Template and Addition Guide

<!-- _This template should be copied to the `_biweeklies/` directory and edited appropriately._ -->

* Navigate to: [https://github.com/digitaltwincentre/digitaltwincentre.github.io/tree/master/_biweeklies](https://github.com/digitaltwincentre/digitaltwincentre.github.io/tree/master/_biweeklies)
* Find and press the **Create new file** button 
* Enter the new file name: `Biweekly-XX.md`, where XX is the biweekly number.
* Paste the content of the template below into the Edit new file box
* Update the header title and date
* Commit the file. It can be edited after it is created by selecting it and pressing the pen on the top right.

A github guide for creating pages is available from here: https://help.github.com/articles/creating-new-files/

Template starts below this line (keep only the content between the triple-tildes, if you are copying the file):

--------------------------------------- Template Begin ----------------------------------------------------------

~~~
---
layout: default
title: Biweekly XX
date: DD MONTH YYYY, 1030 CEST
---

<script src="https://code.jquery.com/jquery-1.11.1.min.js">
</script>
<script src="/javascripts/edit.js"></script>
<script>setEditButonNm();</script>

# {{ page.title }}

|||
|---|---|
| Date | {{ 'now' | date: "%-d %B %Y, %R %Z"}} |
| Participants | AA, BB, ..., CC.  Minutes by DD. |


## Pre-meeting stakeholder's reports

<!-- Please keep in mind that the minutes are publicly available, and that
private information should be stored in the SVN.  -->

#### Stakeholder 1
* Discussion Point 1
* Discussion Point 2

#### Stakeholder 2
* Discussion Point 1
* Discussion Point 2

#### Stakeholder 3
* Discussion Point 1
* Discussion Point 2


Meeting Minutes
===============

## Meeting Point 1

### topic 1

some description

### topic 2

some description

## Meeting Point 2

#### topic 1

some description

#### topic 2

some description

##  Any Other Business

Next Meeting
------------

04 September 2019, 1030 CET


<div id="edit_page_div"></div>

~~~


