---
layout: default
title: Digital Twin Centre Biweeklies
---

# {{ page.title }}

The DTC biweekly net meetings. 

## Upcoming meetings:

* Biweekly Net Meeting 4: September 18, 2019
* Biweekly Net Meeting 3: September 04, 2019 
* Biweekly Net Meeting 2: August 21, 2019 

And we have a [meeting template](template.html)


## Past Meetings

{% for nm in site.netmeetings reversed %}
* [{{ nm.title }}]({{ site.url }}{{ nm.url }}): {{ nm.date | date: '%B %d, %Y' }} {% endfor %}
{% comment %} The endfor needs to be on the line with the list item {% endcomment %}


