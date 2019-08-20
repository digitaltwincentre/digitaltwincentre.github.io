---
title: NetMeeting Default Template
date:  2015-01-28 13:00 CET
---

# Net-Meeting Template and Addition Guide

<!-- _This template should be copied to the `_netmeetings/` directory and edited appropriately._ -->

* Navigate to: https://github.com/digitaltwincentre/digitaltwincentre.github.io/tree/master/_netmeetings
* Find and press the + sign at the end of: digitaltwincentre.github.io/_netmeetings/+
* Enter the new file name: `Net-Meeting-XX.md`, where XX is the netmeeting number.
* Paste the content of the template below into the Edit new file box
* Update the header title and date
* Commit the file. It can be edited after it is created by selecting it and pressing the pen on the top right.

A github guide for creating pages is available from here: https://help.github.com/articles/creating-new-files/

Template starts below this line (keep only the content between the triple-tildes, if you are copying the file):

--------------------------------------- Template Begin ----------------------------------------------------------

~~~
---
layout: default
title: Net Meeting XX
date: 21 August 2019, 1030 CEST
---

<script src="http://code.jquery.com/jquery-1.11.1.min.js">
</script>
<script src="/javascripts/edit.js"></script>
<script>setEditButonNm();</script>

# {{ page.title }}

|||
|---|---|
| Date | {{ page.date | date: "%-d %B %Y, %R %Z"}} |
| Participants | AA, BB, ..., CC.  Minutes by DD. |


## Pre-meeting stakeholder's reports

### Stakeholder 1

### Stakeholder 2

### Stakeholder 3
 

## Meeting Point 1

#### topic 1

some description


## Meeting Point 2

#### topic 1

some description


##  Any Other Business

<div id="edit_page_div"></div>

~~~


